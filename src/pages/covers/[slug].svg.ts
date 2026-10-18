import type { APIRoute } from 'astro';
import { getAllPosts } from '../../lib/posts';
import { coverSvg } from '../../lib/cover';

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ params: { slug: post.slug }, props: { post } }));
}

export const GET: APIRoute = ({ props }) =>
  new Response(coverSvg(props.post), { headers: { 'Content-Type': 'image/svg+xml' } });
