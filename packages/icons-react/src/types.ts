
import { ForwardRefExoticComponent, FunctionComponent, RefAttributes } from 'react';
export type { ReactNode } from 'react';

export type IconNode = [elementName: string, attrs: Record<string, string>][];

export interface IconProps extends Partial<Omit<React.ComponentPropsWithoutRef<'svg'>, 'stroke'>> {
  size?: string | number;
  stroke?: string | number;
  title?: string;
}

export type Icon = FunctionComponent<IconProps>;

export type TablerIcon = ForwardRefExoticComponent<Omit<IconProps, "ref"> & RefAttributes<Icon>>;
