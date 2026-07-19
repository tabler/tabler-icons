import type { ForwardRefExoticComponent, JSX, SVGProps } from 'react';
import type { SvgProps } from 'react-native-svg';
export * as NativeSvg from 'react-native-svg';

export type IconNode = [
  elementName: Extract<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>,
  attrs: Record<string, string>,
][];

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;

export interface IconProps extends SvgProps {
  size?: string | number;
  strokeWidth?: string | number;
  title?: string;
}

export type Icon = ForwardRefExoticComponent<IconProps>;
