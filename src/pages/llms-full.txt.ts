import { getAllPosts } from '../lib/posts';
import { postMarkdown, totalArchivePages } from '../lib/markdown-export';

// The complete corpus (692+ articles) is several MB, which is too large for most
// AI crawlers to fetch in one request. This file instead holds only the last 7
// days of posts, so it stays small and reliably fetchable in full. The complete
// history is still available, split into smaller numbered pages.
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export async function GET() {
  const posts = await getAllPosts();
  const cutoff = Date.now() - SEVEN_DAYS_MS;
  const recent = posts.filter((post) => post.data.date.valueOf() >= cutoff);
  const pages = totalArchivePages(posts.length);

  const content = [
    '# Rudra Kasturi: Recent Published Articles (last 7 days)',
    '',
    `Articles included: ${recent.length}`,
    'This file covers only the last 7 days so it stays small enough to fetch in full.',
    `The complete archive (${posts.length} articles) is split into numbered pages:`,
    ...Array.from({ length: pages }, (_, i) => `- https://blog.rudrakasturi.com/llms-full-${i + 1}.txt`),
    '',
    'Each entry is generated from the canonical Markdown source used to publish the HTML article.',
    '',
    ...recent.flatMap((post) => [postMarkdown(post), '', '---', '']),
  ].join('\n');
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
