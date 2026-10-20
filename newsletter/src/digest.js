import { config } from './config.js';
import { digestEmail } from './templates.js';

const decode = (s) => s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&').trim();
const tag = (block, name) => { const m = block.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`)); return m ? decode(m[1]) : ''; };

export function parseRss(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => {
    const link = tag(m[1], 'link');
    const slug = link.replace(/\/+$/, '').split('/').pop();
    return { title: tag(m[1], 'title'), link, summary: tag(m[1], 'description'), topic: tag(m[1], 'category'), date: new Date(tag(m[1], 'pubDate')), slug, image: `${config.siteUrl}/covers/${slug}.png` };
  }).filter((i) => i.title && i.link);
}

// Picks this week's articles: the last 7 days, topped up with the newest older ones so there are always 6.
export function pickItems(all, now = new Date(), size = 6) {
  const sorted = [...all].sort((a, b) => b.date - a.date);
  const fresh = sorted.filter((i) => now - i.date <= 7 * 864e5);
  const chosen = fresh.length >= 4 ? fresh.slice(0, size + 1) : sorted.slice(0, size);
  return chosen;
}

export async function loadItems() {
  const res = await fetch(`${config.siteUrl}/rss.xml`);
  if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);
  return pickItems(parseRss(await res.text()));
}

export const issueKey = (d = new Date()) => d.toISOString().slice(0, 10);
export const dateLabel = (d = new Date()) => d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

export function buildDigest(items, unsubUrl, now = new Date()) {
  return digestEmail({ items, unsubUrl, dateLabel: dateLabel(now) });
}
