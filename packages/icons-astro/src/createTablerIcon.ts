import {
  createComponent,
  render as renderTemplate,
  renderSlot,
  spreadAttributes,
  unescapeHTML,
} from 'astro/compiler-runtime';
import defaultAttributes from './defaultAttributes';
import type { AstroComponent, IconNode, IconProps, SVGAttributes } from './types';

/**
 * Creates an Astro component factory for a Tabler icon.
 *
 * Astro compiles a `.astro` file down to a `createComponent()` call whose
 * render function returns a `renderTemplate` tagged-template result. We build
 * the same shape by hand so every icon can be shipped as a plain `.ts` module.
 *
 * @param name Kebab-case icon name (e.g. `wallet`, `accessible-filled`)
 * @param iconNode Serialized SVG children as `[tag, attributes]` tuples
 * @param type `outline` (default) or `filled`
 */
const createTablerIcon = (
  name: string,
  iconNode: IconNode,
  type: 'outline' | 'filled' = 'outline',
): AstroComponent => {
  const base = defaultAttributes[type];

  // Serialize the icon paths once at module init — they never change per render.
  const nodeHtml = iconNode
    .map(([tag, attrs]) => `<${tag}${String(spreadAttributes(attrs as SVGAttributes))}></${tag}>`)
    .join('');

  return createComponent(
    (result: any, props: IconProps, slots: any) => {
      const {
        size = 24,
        color,
        stroke,
        strokeWidth,
        title,
        class: className,
        ...rest
      } = props ?? {};

      const colorAttributes: SVGAttributes =
        type === 'filled'
          ? { fill: color ?? 'currentColor' }
          : {
              stroke: color ?? 'currentColor',
              'stroke-width': stroke ?? strokeWidth ?? base['stroke-width'],
            };

      const attributes: SVGAttributes = {
        ...base,
        ...colorAttributes,
        width: size,
        height: size,
        class: `tabler-icon tabler-icon-${name}${className ? ` ${className}` : ''}`,
        ...rest,
      };

      return renderTemplate`<svg${spreadAttributes(attributes)}>${
        title != null ? renderTemplate`<title>${title}</title>` : ''
      }${unescapeHTML(nodeHtml)}${slots?.default ? renderSlot(result, slots.default) : ''}</svg>`;
    },
    'tabler-icon',
    undefined,
  ) as AstroComponent;
};

export default createTablerIcon;
