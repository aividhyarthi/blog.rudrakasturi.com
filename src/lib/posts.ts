import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// All published posts, newest first.
export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function excerpt(post: Post, max = 150): string {
  const text = post.data.description;
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:.\-–—…]+$/, '') + '…';
}

export function readingTime(post: Post): number {
  const words = post.body.split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

// ---- Sections, categories and tags ----
// Your WordPress categories and tags are kept on every post (with their original URL slugs), so
// /category/<slug>/ and /tag/<slug>/ stay the same as before. The six menu sections group related
// categories and keywords; a post can appear in more than one section.
import terms from '../data/wp-terms.json';

export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');
}
const catLookup = terms.categories as Record<string, string>;
const tagLookup = terms.tags as Record<string, string>;
export const catSlug = (name: string) => catLookup[name] ?? slugify(name);
export const tagSlug = (name: string) => tagLookup[name] ?? slugify(name);

export interface Section { name: string; slug: string; cats: string[]; rx: RegExp }
export const SECTIONS: Section[] = [
  { name: 'SEO', slug: 'seo', cats: ['SEO', 'Crawling', 'Structure Data', 'Core Web Vitals', 'Image SEO'], rx: /\bseo\b|search console|crawl|robots\.txt|sitemap|schema|canonical|backlink|core web vitals/ },
  { name: 'AEO', slug: 'aeo', cats: ['AEO', 'AI Mode'], rx: /\baeo\b|\bgeo\b|answer engine|generative engine|ai overview|ai mode|fan-out|llms?\.txt|ai citation|ai visibility|ai search/ },
  { name: 'LLMs', slug: 'llms', cats: ['GPT'], rx: /chatgpt|openai|\bllms?\b|gemini|claude|perplexity|copilot|deepseek|grok|anthropic|\bgpt/ },
  { name: 'Google', slug: 'google', cats: ['Google Search', 'Google Updates', 'Google AI', 'Google Ads', 'Google Discover', 'Google Business', 'Google Play', 'Merchant Centre'], rx: /core update|spam update|google ads|search console|google discover/ },
  { name: 'YouTube', slug: 'youtube', cats: ['YouTube', 'Videos'], rx: /youtube|\bshorts\b/ },
  { name: 'Forums', slug: 'forums', cats: ['Reddit', 'Community'], rx: /reddit|forum|quora|discussion|community|thread/ },
];
// When a post fits several sections, its label comes from the most specific one.
const PRIMARY_ORDER = ['Forums', 'YouTube', 'AEO', 'LLMs', 'Google', 'SEO'];

export function inSection(post: Post, sec: Section): boolean {
  const cats = post.data.categories;
  return cats.some((c) => sec.cats.includes(c)) || sec.rx.test(post.data.title.toLowerCase());
}

export function topicOf(post: Post): { name: string; slug: string } {
  const sec = PRIMARY_ORDER.map((n) => SECTIONS.find((s) => s.name === n)!).find((s) => inSection(post, s));
  if (sec) return { name: sec.name, slug: sec.slug };
  const cat = post.data.categories.find((c) => c !== 'Uncategorized');
  return cat ? { name: cat, slug: catSlug(cat) } : { name: 'Perspectives', slug: 'perspectives' };
}

export function getSections(posts: Post[]) {
  return SECTIONS.map((s) => ({ name: s.name, slug: s.slug, count: posts.filter((p) => inSection(p, s)).length }));
}

// Sections first, then every WordPress category that is not already a section.
export function getTopics(posts: Post[]): { name: string; slug: string; count: number }[] {
  const out = getSections(posts);
  const taken = new Set(out.map((t) => t.slug));
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const p of posts) {
    for (const name of new Set(p.data.categories)) {
      if (name === 'Uncategorized') continue;
      const slug = catSlug(name);
      if (taken.has(slug)) continue;
      const cur = map.get(slug);
      if (cur) cur.count++;
      else map.set(slug, { name, slug, count: 1 });
    }
  }
  return [...out, ...[...map.values()].sort((a, b) => b.count - a.count)];
}

export function postsInTopic(posts: Post[], slug: string): Post[] {
  const sec = SECTIONS.find((s) => s.slug === slug);
  if (sec) return posts.filter((p) => inSection(p, sec));
  return posts.filter((p) => p.data.categories.some((c) => catSlug(c) === slug));
}

const SKIP_TAGS = new Set(['rudra kasturi', 'uncategorized']);
export function tagsOf(post: Post): { name: string; slug: string }[] {
  return post.data.tags.filter((t) => !SKIP_TAGS.has(t.toLowerCase())).map((name) => ({ name, slug: tagSlug(name) }));
}
export function getTags(posts: Post[], min = 3): { name: string; slug: string; count: number }[] {
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const p of posts) {
    for (const t of tagsOf(p)) {
      const cur = map.get(t.slug);
      if (cur) cur.count++;
      else map.set(t.slug, { ...t, count: 1 });
    }
  }
  return [...map.values()].filter((t) => t.count >= min).sort((a, b) => b.count - a.count);
}
export function postsWithTag(posts: Post[], slug: string): Post[] {
  return posts.filter((p) => tagsOf(p).some((t) => t.slug === slug));
}

// ---- Pagination ----
export const PAGE_SIZE = 12;
export function totalPages(n: number): number {
  return Math.max(1, Math.ceil(n / PAGE_SIZE));
}
export function pageOf<T>(items: T[], page: number): T[] {
  return items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
}

// Mix topics: newest post from each section in turn, so the homepage never shows one subject only.
export function mixedLatest(posts: Post[], count: number, exclude: string[] = []): Post[] {
  const queues = SECTIONS.map((sec) => posts.filter((p) => inSection(p, sec) && !exclude.includes(p.slug)));
  const out: Post[] = [];
  for (let i = 0; out.length < count && i < 50; i++) {
    for (const q of queues) if (q[i] && out.length < count) out.push(q[i]);
  }
  return out.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Each topic gets a stable accent colour (c0..c3, see global.css).
export function topicColor(slug: string): string {
  let h = 0;
  for (const ch of slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return `c${h % 4}`;
}

export function sourceLine(post: Post): string | null {
  const names = [...new Set(post.data.sources.map((s) => s.publisher))];
  return names.length ? names.slice(0, 2).join(' & ') : null;
}
