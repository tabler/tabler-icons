export type IconNode = [elementName: string, attrs: Record<string, string | number>][];

export type SVGAttributes = Record<string, string | number | boolean | undefined>;

export interface IconProps extends Record<string, unknown> {
  size?: string | number;
  color?: string;
  stroke?: string | number;
  strokeWidth?: string | number;
  title?: string;
  class?: string;
}

/**
 * Structural type for an Astro component factory. The runtime marker
 * `isAstroComponentFactory` is attached by Astro's `createComponent`.
 *
 * `any` is deliberate: the type has to stay assignable to Astro's own factory
 * type without importing Astro's internal runtime types.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AstroComponent = ((result: any, props: IconProps, slots: any) => any) & {
  isAstroComponentFactory: true;
};
