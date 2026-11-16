import type { FunctionComponent, JSX } from 'preact';

export type IconNode = [elementName: keyof JSX.IntrinsicElements, attrs: Record<string, string>][];

// `JSX.IntrinsicElements['svg']` instead of `JSX.SVGAttributes`: Preact 11 moved
// `SVGAttributes` out of the `JSX` namespace, this lookup exists in 10 and 11.
type SVGProps = JSX.IntrinsicElements['svg'];

export interface IconProps extends Partial<Omit<SVGProps, 'ref' | 'size' | 'stroke'>> {
  color?: string;
  size?: string | number;
  stroke?: string | number;
  title?: string;
}

export type Icon = FunctionComponent<IconProps>;
