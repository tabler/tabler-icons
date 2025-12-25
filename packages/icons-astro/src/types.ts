import type { HTMLAttributes } from 'astro/types';

// Type that the Astro language server needs to infer component props in Astro files
export type AstroComponent = (_props: IconProps) => any;

export interface IconProps extends Omit<SVGAttributes, 'stroke' | 'stroke-width'> {
  type?: 'outline' | 'filled';
  color?: string;
  size?: number | string;
  stroke?: number | string;
  'stroke-width'?: number | string;
  class?: string;
  iconNode?: IconNode;
}

export type SVGAttributes = HTMLAttributes<'svg'>;

export type IconNode = IconNodeChild[];

export type IconNodeChild = [elementName: SVGElements, attrs: SVGAttributes];

// All possible svg elements according to the Astro definitions
type SVGElements =
  | 'svg'
  | 'animate'
  | 'circle'
  | 'clipPath'
  | 'defs'
  | 'desc'
  | 'ellipse'
  | 'feBlend'
  | 'feColorMatrix'
  | 'feComponentTransfer'
  | 'feComposite'
  | 'feConvolveMatrix'
  | 'feDiffuseLighting'
  | 'feDisplacementMap'
  | 'feDistantLight'
  | 'feFlood'
  | 'feFuncA'
  | 'feFuncB'
  | 'feFuncG'
  | 'feFuncR'
  | 'feGaussianBlur'
  | 'feImage'
  | 'feMerge'
  | 'feMergeNode'
  | 'feMorphology'
  | 'feOffset'
  | 'fePointLight'
  | 'feSpecularLighting'
  | 'feSpotLight'
  | 'feTile'
  | 'feTurbulence'
  | 'filter'
  | 'foreignObject'
  | 'g'
  | 'image'
  | 'line'
  | 'linearGradient'
  | 'marker'
  | 'mask'
  | 'metadata'
  | 'path'
  | 'pattern'
  | 'polygon'
  | 'polyline'
  | 'radialGradient'
  | 'rect'
  | 'stop'
  | 'switch'
  | 'symbol'
  | 'text'
  | 'textPath'
  | 'tspan'
  | 'use'
  | 'view';

