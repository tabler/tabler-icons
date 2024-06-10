import type { FunctionComponent, JSX } from 'preact';

export type IconNode = [elementName: keyof JSX.IntrinsicElements, attrs: Record<string, string>][];

export interface IconProps
  extends Partial<Omit<JSX.SVGAttributes, 'ref' | 'size' | 'stroke'>> {
  color?: string;
  size?: string | number;
  stroke?: string | number;
  title?: string;
}

export type Icon = FunctionComponent<IconProps>;
