import { h } from 'vue';
import type { SVGAttributes, FunctionalComponent } from 'vue';
import defaultAttributes from './defaultAttributes';

export interface SVGProps extends Partial<SVGAttributes> {
  size?: 24 | number;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}

export type IconNode = [elementName: string, attrs: Record<string, string>][];
export type Icon = FunctionalComponent<SVGProps>;


const createVueComponent =
  (iconName: string, iconNamePascal: string, iconNode: IconNode): Icon =>
  ({ size, color, strokeWidth, ...props }, { attrs, slots }) => {
    return h(
      'svg',
      {
        ...defaultAttributes,
        width: size || defaultAttributes.width,
        height: size || defaultAttributes.height,
        stroke: color || defaultAttributes.stroke,
        'stroke-width': strokeWidth || defaultAttributes['stroke-width'],
        ...attrs,
        class: ['tabler-icon', `tabler-icon-${iconName}`, attrs?.class || ''],
        ...props,
      },
      [...iconNode.map((child) => h(...child)), ...(slots.default ? [slots.default()] : [])]
    );
  };

export default createVueComponent;
