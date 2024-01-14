import { IconType } from '@/types';

export function iconSvg(svg: string, { slug, width, stroke }) {
  return svg.replace(
    '<svg>',
    `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-${slug}" width="${width}" height="${width}" viewBox="0 0 24 24" stroke-width="${stroke}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>`,
  );
}

export function Icon({
  slug,
  svgs,
  stroke = 2,
  width = 24,
  type = 'outline',
}: IconType & {
  stroke?: number;
  width?: number;
  type?: 'outline' | 'solid';
}) {
  const svg = type && svgs[type]
    ? iconSvg(svgs[type], {
        slug,
        width,
        stroke,
      })
    : '';

  return <span className="svg" dangerouslySetInnerHTML={{ __html: svg }} />;
}
