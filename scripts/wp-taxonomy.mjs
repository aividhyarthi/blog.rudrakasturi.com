// Brings WordPress categories and tags into the posts and records their original URL slugs.
//   node scripts/wp-taxonomy.mjs path/to/export.xml
// Writes src/data/wp-terms.json and adds `categories:` / `tags:` to each post's front matter.
import fs from 'node:fs';
import path from 'node:path';
import { XMLParser } from 'fast-xml-parser';

const file = process.argv[2];
if (!file) { console.error('Usage: node scripts/wp-taxonomy.mjs export.xml'); process.exit(1); }
const xml = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_', parseTagValue: false,
  isArray: (n) => ['item', 'category', 'wp:category', 'wp:tag', 'wp:postmeta'].includes(n) }).parse(fs.readFileSync(file, 'utf8'));
const ch = xml.rss.channel;
const t = (v) => (typeof v === 'string' ? v : (v?.['#text'] ?? ''));
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#039;|&#8217;/g, "'").replace(/&quot;/g, '"');

// Exact URL slug of each term, read from the posts themselves. If two terms share a name, the most used slug wins.
const seen = { category: {}, post_tag: {} };
for (const item of ch.item) {
  if (t(item['wp:post_type']) !== 'post' || t(item['wp:status']) !== 'publish') continue;
  for (const c of item.category ?? []) {
    const d = c['@_domain'];
    if (!seen[d]) continue;
    const name = decode(t(c)), slug = c['@_nicename'];
    seen[d][name] ??= {};
    seen[d][name][slug] = (seen[d][name][slug] ?? 0) + 1;
  }
}
const best = (o) => Object.entries(o).sort((a, b) => b[1] - a[1])[0][0];
const terms = { categories: {}, tags: {} };
for (const [n, o] of Object.entries(seen.category)) terms.categories[n] = best(o);
for (const [n, o] of Object.entries(seen.post_tag)) terms.tags[n] = best(o);
const dupes = Object.entries(seen.category).filter(([, o]) => Object.keys(o).length > 1);
if (dupes.length) console.log('Categories sharing a name:', dupes.map(([n, o]) => `${n}: ${JSON.stringify(o)}`).join(' | '));
fs.writeFileSync('src/data/wp-terms.json', JSON.stringify(terms, null, 1));

let patched = 0, missing = 0;
for (const item of ch.item) {
  if (t(item['wp:post_type']) !== 'post' || !['publish', 'draft'].includes(t(item['wp:status']))) continue;
  const raw = t(item['wp:post_name']);
  let dec = raw; try { dec = decodeURIComponent(raw); } catch {}
  const slug = dec.toLowerCase().replace(/[^\p{L}\p{N}-]+/gu, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || `post-${t(item['wp:post_id'])}`;
  const f = path.join('src/content/blog', `${slug}.md`);
  if (!fs.existsSync(f)) { missing++; continue; }
  const list = (domain) => [...new Set((item.category ?? []).filter((c) => c['@_domain'] === domain).map((c) => decode(t(c))))];
  const cats = list('category'), tags = list('post_tag');
  let md = fs.readFileSync(f, 'utf8').replace(/\ncategories: .*\n/, '\n').replace(/\ntags: .*\n/, '\n');
  const close = md.indexOf('\n---', 4);
  md = md.slice(0, close) + `\ncategories: ${JSON.stringify(cats)}\ntags: ${JSON.stringify(tags)}` + md.slice(close);
  fs.writeFileSync(f, md);
  patched++;
}
console.log(`Patched ${patched} posts (${missing} not found). ${Object.keys(terms.categories).length} categories, ${Object.keys(terms.tags).length} tags.`);
