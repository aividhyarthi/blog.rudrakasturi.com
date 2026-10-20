// Google News sitemap: articles from the last two days, as Google News requires.
import type { APIRoute } from 'astro';
import { getAllPosts } from '../lib/posts';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const origin = new URL(site!).origin;
  const cutoff = Date.now() - 2 * 864e5;
  const posts = (await getAllPosts()).filter((p) => p.data.date.valueOf() >= cutoff);
  const items = posts.map((p) => `<url><loc>${origin}/${p.slug}/</loc><news:news><news:publication><news:name>Rudra Kasturi</news:name><news:language>en</news:language></news:publication><news:publication_date>${p.data.date.toISOString()}</news:publication_date><news:title>${esc(p.data.title)}</news:title></news:news></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">${items}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
