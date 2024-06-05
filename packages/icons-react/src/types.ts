
import { ForwardRefExoticComponent, FunctionComponent, RefAttributes, ReactSVG } from 'react';
export type { ReactNode } from 'react';

export type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][];

export interface IconProps extends Partial<Omit<React.ComponentPropsWithoutRef<'svg'>, 'stroke'>> {
  size?: string | number;
  stroke?: string | number;
  title?: string;
}

export type Icon = FunctionComponent<IconProps>;

export type TablerIcon = ForwardRefExoticComponent<Omit<IconProps, "ref"> & RefAttributes<Icon>>;
