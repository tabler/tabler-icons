
import { FunctionComponent, ReactSVG } from 'react';
export type { ReactNode } from 'react';

export type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][];

export interface IconProps extends Partial<Omit<React.SVGProps<SVGSVGElement>, 'stroke'>> {
  size?: string | number;
  stroke?: string | number;
}

export type Icon = FunctionComponent<IconProps>;
