import type { SvelteComponent } from 'svelte';
import type { SVGAttributes, SvelteHTMLElements } from 'svelte/elements';

export type Attrs = SVGAttributes<SVGSVGElement>;

export type IconNode = [elementName: keyof SvelteHTMLElements, attrs: Attrs][];

export interface IconProps extends Attrs {
  color?: string;
  size?: number | string;
  stroke?: number | string;
  class?: string;
}

type IconEvents = {
  // matches the default events type of `SvelteComponent`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [evt: string]: CustomEvent<any>;
};

type IconSlots = {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  default: {};
};

export type Icon = typeof SvelteComponent<IconProps, IconEvents, IconSlots>;
