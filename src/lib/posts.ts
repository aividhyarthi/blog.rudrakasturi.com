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
  return text.length > max ? text.slice(0, max) + '...' : text;
}

export function readingTime(post: Post): number {
  const words = post.body.split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

// ---- Topics (categories) ----
// WordPress tags were messy ("ai", "AI", "AI Mode"...). Group them into clean topics.
const GROUPS: Record<string, string> = {
  ai: 'AI', 'ai mode': 'AI', 'ai overview': 'AI', 'ai content': 'AI', 'ai ads': 'AI', chatgpt: 'AI',
  google: 'Google', 'google search': 'Google', 'google updates': 'Google', 'chrome privacy sandbox': 'Google',
  seo: 'SEO', 'ai seo': 'SEO', 'bing seo': 'SEO', 'core web vitals 2021': 'SEO',
  aeo: 'AEO', geo: 'AEO',
  'rudra kasturi': 'Perspectives',
};

export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');
}

export function topicOf(post: Post): { name: string; slug: string } {
  const tag = post.data.tag?.trim();
  const name = !tag ? 'Perspectives' : (GROUPS[tag.toLowerCase()] ?? tag.charAt(0).toUpperCase() + tag.slice(1));
  return { name, slug: slugify(name) || 'topic' };
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
