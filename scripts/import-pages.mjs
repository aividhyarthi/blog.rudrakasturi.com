// Converts selected WordPress pages into Markdown pages (same URL as before).
//   node scripts/import-pages.mjs export.xml slug1 slug2 ...
import fs from 'node:fs';
import { XMLParser } from 'fast-xml-parser';
import TurndownService from 'turndown';

const [file, ...slugs] = process.argv.slice(2);
const xml = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_', parseTagValue: false, isArray: (n) => n === 'item' }).parse(fs.readFileSync(file, 'utf8'));
const t = (v) => (typeof v === 'string' ? v : (v?.['#text'] ?? ''));
const td = new TurndownService({ headingStyle: 'atx' });
td.remove(['script', 'style']);
td.keep(['iframe']);
fs.mkdirSync('src/content/pages', { recursive: true });
for (const item of xml.rss.channel.item) {
  const slug = t(item['wp:post_name']);
  if (t(item['wp:post_type']) !== 'page' || !slugs.includes(slug)) continue;
  const html = t(item['content:encoded']).replace(/<!--[\s\S]*?-->/g, '');
  const body = td.turndown(html).trim();
  const title = t(item.title).replace(/&amp;/g, '&').replace(/"/g, "'");
  const desc = body.replace(/[#*_\[\]()>`-]/g, '').replace(/\s+/g, ' ').slice(0, 155).trim();
  fs.writeFileSync(`src/content/pages/${slug}.md`, `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(desc)}\n---\n\n${body}\n`);
  console.log('wrote', slug);
}
