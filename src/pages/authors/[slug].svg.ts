import type { APIRoute } from 'astro';
import { AUTHORS, avatarSvg } from '../../lib/authors';

export function getStaticPaths() {
  return AUTHORS.map((a) => ({ params: { slug: a.slug }, props: { a } }));
}
export const GET: APIRoute = ({ props }) => new Response(avatarSvg(props.a), { headers: { 'Content-Type': 'image/svg+xml' } });
