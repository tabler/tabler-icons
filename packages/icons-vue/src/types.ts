import type { SVGAttributes, FunctionalComponent } from 'vue';

export interface SVGProps extends Partial<SVGAttributes> {
  size?: 24 | number | string;
  strokeWidth?: number | string;
}

export type IconNode = [elementName: string, attrs: Record<string, string>][];
export type Icon = FunctionalComponent<SVGProps>;

export interface IconProps extends Partial<Omit<SVGProps, 'stroke'>> {
  size?: string | number;
  stroke?: string | number;
}
