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

// ---- Topics (hubs) ----
// WordPress tags were messy, so topics come from what each post is about (title + tag keywords).
// The first rule that matches wins, so order matters.
const RULES: [string, RegExp][] = [
  ['YouTube', /youtube|\bshorts\b/],
  ['Instagram & Social', /instagram|tiktok|facebook|linkedin|twitter|snapchat|social media|\bthreads app\b|\bx \(/],
  ['AEO & GEO', /\baeo\b|\bgeo\b|answer engine|generative engine|ai overview|ai mode|fan-out|llms\.txt|ai citation|ai search|ai visibility|reddit/],
  ['LLMs & AI', /chatgpt|openai|\bllms?\b|gemini|claude|perplexity|copilot|deepseek|grok|anthropic|\bai\b|artificial intelligence|\bgpt/],
  ['Google Ads', /google ads|adwords|\bppc\b|performance max|smart bidding|\bads\b/],
  ['SEO', /\bseo\b|search console|core web|crawl|index|backlink|ranking|robots\.txt|sitemap|schema|canonical|keyword|structured data/],
  ['Google Updates', /google|algorithm|core update|spam update/],
];
export const HUBS = ['AEO & GEO', 'LLMs & AI', 'SEO', 'YouTube', 'Instagram & Social', 'Google Updates'];

export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');
}

export function topicOf(post: Post): { name: string; slug: string } {
  const hay = `${post.data.title} ${post.data.tag ?? ''}`.toLowerCase();
  const name = RULES.find(([, rx]) => rx.test(hay))?.[0] ?? 'Perspectives';
  return { name, slug: slugify(name) };
}

export function getTopics(posts: Post[]): { name: string; slug: string; count: number }[] {
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const p of posts) {
    const t = topicOf(p);
    const cur = map.get(t.slug);
    if (cur) cur.count++;
    else map.set(t.slug, { ...t, count: 1 });
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

// Finer-grained tags straight from WordPress (cleaned up), for the sidebar and /tag pages.
const SKIP_TAGS = new Set(['rudra kasturi', 'uncategorized']);
export function tagOf(post: Post): { name: string; slug: string } | null {
  const t = post.data.tag?.trim();
  if (!t || SKIP_TAGS.has(t.toLowerCase())) return null;
  const name = t === t.toLowerCase() && t.length > 3 ? t.charAt(0).toUpperCase() + t.slice(1) : t;
  return { name, slug: slugify(t) };
}

export function getTags(posts: Post[], min = 3): { name: string; slug: string; count: number }[] {
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const p of posts) {
    const t = tagOf(p);
    if (!t) continue;
    const cur = map.get(t.slug);
    if (cur) cur.count++;
    else map.set(t.slug, { ...t, count: 1 });
  }
  return [...map.values()].filter((t) => t.count >= min).sort((a, b) => b.count - a.count);
}

// ---- Pagination ----
export const PAGE_SIZE = 12;
export function totalPages(n: number): number {
  return Math.max(1, Math.ceil(n / PAGE_SIZE));
}
export function pageOf<T>(items: T[], page: number): T[] {
  return items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
}

// Mix topics: newest post from each hub in turn, so the homepage never shows one subject only.
export function mixedLatest(posts: Post[], count: number, exclude: string[] = []): Post[] {
  const queues = HUBS.map((h) => posts.filter((p) => topicOf(p).name === h && !exclude.includes(p.slug)));
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
