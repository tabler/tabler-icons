import type { Snippet, SvelteComponent } from "svelte";
import type { SVGAttributes, SvelteHTMLElements } from "svelte/elements";

export type Attrs = SVGAttributes<SVGSVGElement>;

export type IconNode = [elementName: keyof SvelteHTMLElements, attrs: Attrs][];

export interface IconProps extends Omit<Attrs, 'stroke'> {
  color?: string;
  size?: number | string;
  stroke?: number | string;
  class?: string;
  children?: Snippet;
}

type IconEvents = {
  [evt: string]: CustomEvent<any>;
};

type IconSlots = {
  default: {};
};

export type Icon = typeof SvelteComponent<IconProps, IconEvents, IconSlots>;
