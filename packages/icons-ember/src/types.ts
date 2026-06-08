import type Component from '@glimmer/component';

export type IconType = 'outline' | 'filled';

export type IconNode = [elementName: string, attrs: Record<string, string>][];

export interface IconProps {
  size?: string | number;
  color?: string;
  stroke?: string | number;
  title?: string;
}

export interface IconSignature {
  Args: IconProps;
  Blocks: {
    default: [];
  };
  Element: SVGSVGElement;
}

export type Icon = abstract new (...args: any[]) => Component<IconSignature>;

export type TablerIcon = Icon;
