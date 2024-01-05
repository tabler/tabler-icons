import { h } from 'vue';
import defaultAttributes from './defaultAttributes';
import { Icon, IconNode } from './types';

const createVueComponent =
  (iconName: string, iconNamePascal: string, iconNode: IconNode): Icon =>
  ({ size, color, class: classes, strokeWidth, ...props }, { attrs, slots }) => {
    return h(
      'svg',
      {
        ...defaultAttributes,
        width: size || defaultAttributes.width,
        height: size || defaultAttributes.height,
        stroke: color || defaultAttributes.stroke,
        'stroke-width': strokeWidth || defaultAttributes['stroke-width'],
        ...attrs,
        class: ['tabler-icon', `tabler-icon-${iconName}`],
        ...props,
      },
      [...iconNode.map((child) => h(...child)), ...(slots.default ? [slots.default()] : [])]
    );
  };

export default createVueComponent;
