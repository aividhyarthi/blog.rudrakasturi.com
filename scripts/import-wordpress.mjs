// Turns a WordPress export file into Markdown posts for this blog.
//
//   npm run import-wp -- path/to/export.xml
//   npm run import-wp -- path/to/export.xml --download-images
//
// Creates: src/content/blog/<slug>.md  and  public/_redirects (old URL -> new URL)
import fs from 'node:fs';
import path from 'node:path';
import { XMLParser } from 'fast-xml-parser';
import TurndownService from 'turndown';

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--'));
const downloadImages = args.includes('--download-images');
if (!file) {
  console.error('Usage: npm run import-wp -- path/to/export.xml [--download-images]');
  process.exit(1);
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  parseTagValue: false,
  isArray: (name) => name === 'item' || name === 'category',
});
const xml = parser.parse(fs.readFileSync(file, 'utf8'));
const items = xml.rss?.channel?.item ?? [];

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
// WordPress "more" markers and block comments are not content.
turndown.remove(['script', 'style']);
turndown.keep(['iframe']);

const text = (v) => (typeof v === 'string' ? v : (v?.['#text'] ?? ''));
const clean = (html) =>
  html.replace(/<!--[\s\S]*?-->/g, '').replace(/\[caption[^\]]*\]|\[\/caption\]/g, '');
const decode = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&');
const yaml = (v) => JSON.stringify(v);

const outDir = 'src/content/blog';
const imgDir = 'public/images/posts';
fs.mkdirSync(outDir, { recursive: true });
const redirects = [];
const mediaUrls = new Set();

// Featured images: post id -> image address
const attachmentUrl = new Map();
for (const item of items) {
  if (text(item['wp:post_type']) === 'attachment') {
    attachmentUrl.set(text(item['wp:post_id']), text(item['wp:attachment_url']));
  }
}
const featuredImage = (item) => {
  const metas = [].concat(item['wp:postmeta'] ?? []);
  const m = metas.find((x) => text(x['wp:meta_key']) === '_thumbnail_id');
  return m ? attachmentUrl.get(text(m['wp:meta_value'])) : undefined;
};
let count = 0;

async function localiseImages(html, slug) {
  const urls = [...new Set([...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]))];
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.status);
      const name = path.basename(new URL(url).pathname);
      const dir = path.join(imgDir, slug);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, name), Buffer.from(await res.arrayBuffer()));
      html = html.split(url).join(`/images/posts/${slug}/${name}`);
    } catch (e) {
      console.warn(`  could not download ${url} (${e.message}) - keeping original link`);
    }
  }
  return html;
}

for (const item of items) {
  if (text(item['wp:post_type']) !== 'post') continue;
  const status = text(item['wp:status']);
  if (status !== 'publish' && status !== 'draft') continue;

  const slug = text(item['wp:post_name']) || `post-${text(item['wp:post_id'])}`;
  let html = clean(text(item['content:encoded']));
  if (downloadImages) html = await localiseImages(html, slug);
  for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) mediaUrls.add(m[1]);
  const body = turndown.turndown(html);
  const image = featuredImage(item);
  if (image) mediaUrls.add(image);

  const cats = item.category ?? [];
  const tags = cats.filter((c) => c['@_domain'] === 'post_tag').map(text);
  const categories = cats.filter((c) => c['@_domain'] === 'category').map(text);
  const tag = tags[0] ?? categories.find((c) => c !== 'Uncategorized');

  const plain = (s) => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
  const description = plain(text(item['excerpt:encoded'])) || plain(html).slice(0, 160);

  const date = text(item['wp:post_date_gmt']).replace(' ', 'T') + 'Z';
  const front = [
    '---',
    `title: ${yaml(plain(text(item.title)))}`,
    `date: ${date.startsWith('0000') ? new Date().toISOString() : date}`,
    `description: ${yaml(description)}`,
    tag ? `tag: ${yaml(tag)}` : null,
    image ? `image: ${yaml(image)}` : null,
    status === 'draft' ? 'draft: true' : null,
    '---',
    '',
  ]
    .filter((l) => l !== null)
    .join('\n');

  fs.writeFileSync(path.join(outDir, `${slug}.md`), `${front}\n${body}\n`);

  const link = text(item.link);
  if (link && status === 'publish') {
    const old = new URL(link).pathname;
    if (old !== '/' && old !== `/blog/${slug}/`) redirects.push(`${old} /blog/${slug}/ 301`);
  }
  count++;
}

if (redirects.length) {
  fs.writeFileSync('public/_redirects', redirects.join('\n') + '\n');
}
fs.writeFileSync('media-urls.txt', [...mediaUrls].join('\n') + '\n');
console.log(`Imported ${count} posts into ${outDir}. Wrote ${redirects.length} redirects.`);
