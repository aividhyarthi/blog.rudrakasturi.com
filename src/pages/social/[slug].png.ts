import type { APIRoute } from 'astro';
import { getAllPosts } from '../../lib/posts';
import { socialCardPng } from '../../lib/social-card';

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ params: { slug: post.slug }, props: { post } }));
}

export const GET: APIRoute = ({ props }) =>
  new Response(socialCardPng(props.post), { headers: { 'Content-Type': 'image/png' } });
