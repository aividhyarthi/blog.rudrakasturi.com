import { getAllPosts } from '../lib/posts';
import { postMarkdown, FULL_ARCHIVE_PAGE_SIZE, totalArchivePages } from '../lib/markdown-export';

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const pages = totalArchivePages(posts.length);
  return Array.from({ length: pages }, (_, i) => ({
    params: { page: String(i + 1) },
    props: { pageNum: i + 1, totalPages: pages, posts },
  }));
}

interface Props {
  pageNum: number;
  totalPages: number;
  posts: Awaited<ReturnType<typeof getAllPosts>>;
}

export async function GET({ props }: { props: Props }) {
  const { pageNum, totalPages, posts } = props;
  const start = (pageNum - 1) * FULL_ARCHIVE_PAGE_SIZE;
  const slice = posts.slice(start, start + FULL_ARCHIVE_PAGE_SIZE);

  const content = [
    `# Rudra Kasturi: Full Article Archive (page ${pageNum} of ${totalPages})`,
    '',
    `Articles in this page: ${slice.length}`,
    `Articles overall: ${posts.length}`,
    pageNum < totalPages ? `Next page: https://blog.rudrakasturi.com/llms-full-${pageNum + 1}.txt` : 'This is the last page.',
    'For the most recent 7 days of articles only, see https://blog.rudrakasturi.com/llms-full.txt',
    'Each entry is generated from the canonical Markdown source used to publish the HTML article.',
    '',
    ...slice.flatMap((post) => [postMarkdown(post), '', '---', '']),
  ].join('\n');

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
