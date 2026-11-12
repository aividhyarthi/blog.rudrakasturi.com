import { getAllPosts } from '../lib/posts';
import { postMarkdown } from '../lib/markdown-export';

export async function GET() {
  const posts = await getAllPosts();
  const content = [
    '# Rudra Kasturi: Full Published Article Corpus',
    '',
    `Articles included: ${posts.length}`,
    'Each entry is generated from the canonical Markdown source used to publish the HTML article.',
    '',
    ...posts.flatMap((post) => [postMarkdown(post), '', '---', '']),
  ].join('\\n');
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' },
  });
}
