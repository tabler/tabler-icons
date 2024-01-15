import { IconSvgsType, IconType } from '@/types';

export function iconSvg({
  icon,
  width = 24,
  stroke = 2,
  type = 'outline',
}: {
  icon: IconType;
  width?: number;
  stroke?: number;
  type?: 'outline' | 'solid';
}) {
  return type && icon.svgs[type]
    ? (icon.svgs[type] || '').replace(
        '<svg>',
        `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-${icon.slug}" width="${width}" height="${width}" viewBox="0 0 24 24" stroke-width="${stroke}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>`,
      )
    : '';
}

export function Icon({
  icon,
  stroke = 2,
  width = 24,
  type = 'outline',
}: {
  icon: IconType;
  stroke?: number;
  width?: number;
  type?: 'outline' | 'solid';
}) {
  const svg = iconSvg({
    icon,
    width,
    stroke,
    type,
  });

  return <span className="svg" dangerouslySetInnerHTML={{ __html: svg }} />;
}
