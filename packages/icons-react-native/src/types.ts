import { ForwardRefExoticComponent, SVGProps } from 'react';
import type { SvgProps } from 'react-native-svg';
export * as NativeSvg from 'react-native-svg';

/**
 * Names of the SVG elements an icon can be built from.
 *
 * This used to be `keyof ReactSVG`, but `ReactSVG` was removed in
 * @types/react 19, which broke type-checking for anyone not running with
 * `skipLibCheck`. The set below reproduces `ReactSVG`'s keys exactly, so the
 * type is unchanged for consumers while no longer depending on a React type
 * that comes and goes between majors.
 */
export type SvgElementName =
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
  | 'feDropShadow'
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
  | 'svg'
  | 'switch'
  | 'symbol'
  | 'text'
  | 'textPath'
  | 'tspan'
  | 'use'
  | 'view';

export type IconNode = [elementName: SvgElementName, attrs: Record<string, string>][];

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;

export interface IconProps extends SvgProps {
  size?: string | number;
  strokeWidth?: string | number;
  title?: string;
}

export type Icon = ForwardRefExoticComponent<IconProps>;
