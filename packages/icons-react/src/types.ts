import type { ForwardRefExoticComponent, FunctionComponent, JSX, RefAttributes } from 'react';
export type { ReactNode } from 'react';

export type IconNode = [
  elementName: Extract<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>,
  attrs: Record<string, string>,
][];

export interface IconProps extends Partial<Omit<React.ComponentPropsWithoutRef<'svg'>, 'stroke'>> {
  size?: string | number;
  stroke?: string | number;
  title?: string;
}

export type Icon = FunctionComponent<IconProps>;

export type TablerIcon = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
