import { h } from 'vue';
import defaultAttributes from './defaultAttributes';
import { Icon, IconNode } from './types';

const createVueComponent =
  (
    type: 'outline' | 'filled',
    iconName: string,
    iconNamePascal: string,
    iconNode: IconNode,
  ): Icon =>
  ({ size, color, class: classes, strokeWidth, ...props }, { attrs, slots }) => {
    const attributes = defaultAttributes[type];

    return h(
      'svg',
      {
        ...attributes,
        width: size || attributes.width,
        height: size || attributes.height,
        stroke: color || attributes.stroke,
        'stroke-width': strokeWidth || attributes['stroke-width'],
        ...attrs,
        class: ['tabler-icon', `tabler-icon-${iconName}`],
        ...props,
      },
      [...iconNode.map((child) => h(...child)), ...(slots.default ? [slots.default()] : [])],
    );
  };

export default createVueComponent;
