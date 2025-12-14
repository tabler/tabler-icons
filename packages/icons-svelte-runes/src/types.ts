import type { Component, Snippet } from 'svelte';
import type { SVGAttributes, SvelteHTMLElements } from 'svelte/elements';

export type Attrs = SVGAttributes<SVGSVGElement>;

export type IconNode = [elementName: keyof SvelteHTMLElements, attrs: Attrs][];

export interface IconProps extends Omit<Attrs, 'color' | 'stroke'> {
  color?: string;
  size?: number | string;
  stroke?: number | string;
  class?: string;
  children?: Snippet;
}

// Svelte 5 compatible icon type
export type Icon = Component<IconProps>;
