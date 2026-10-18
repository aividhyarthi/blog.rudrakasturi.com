// PNG version of each cover, used for link previews on social media (they don't accept SVG).
import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { getAllPosts } from '../../lib/posts';
import { coverSvg } from '../../lib/cover';

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ params: { slug: post.slug }, props: { post } }));
}

export const GET: APIRoute = async ({ props }) => {
  const png = await sharp(Buffer.from(coverSvg(props.post))).png({ compressionLevel: 9 }).toBuffer();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
