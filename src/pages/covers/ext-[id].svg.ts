// Cover art for the AppRankr cross-promotion cards.
import type { APIRoute } from 'astro';
import { APPRANKR_POSTS } from '../../config';
import { coverSvg } from '../../lib/cover';

export function getStaticPaths() {
  return APPRANKR_POSTS.map((p) => ({ params: { id: p.id }, props: { p } }));
}

export const GET: APIRoute = ({ props }) => {
  const fake = { slug: `apprankr-${props.p.id}`, data: { title: props.p.title, tag: 'apps' } } as never;
  return new Response(coverSvg(fake, 'phone'), { headers: { 'Content-Type': 'image/svg+xml' } });
};
