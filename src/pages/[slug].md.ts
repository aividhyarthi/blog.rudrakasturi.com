import { getAllPosts } from '../lib/posts';
import { postMarkdown } from '../lib/markdown-export';

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ params: { slug: post.slug }, props: { post } }));
}

export async function GET({ props }: { props: { post: Awaited<ReturnType<typeof getAllPosts>>[number] } }) {
  return new Response(postMarkdown(props.post), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'X-Robots-Tag': 'noindex' },
  });
}
