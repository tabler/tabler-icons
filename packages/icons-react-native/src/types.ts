
import { ForwardRefExoticComponent, ReactSVG, SVGProps } from 'react';
import type { SvgProps } from 'react-native-svg';
export * as NativeSvg from 'react-native-svg';

export type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][];

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;

export interface IconProps extends SvgProps {
  size?: string | number;
  strokeWidth?: string | number;
}

export type Icon = ForwardRefExoticComponent<IconProps>;
