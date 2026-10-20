import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { AUTHORS, avatarSvg } from '../../lib/authors';

export function getStaticPaths() {
  return AUTHORS.map((a) => ({ params: { slug: a.slug }, props: { a } }));
}
export const GET: APIRoute = async ({ props }) => {
  const png = await sharp(Buffer.from(avatarSvg(props.a))).resize(480, 480).png().toBuffer();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
