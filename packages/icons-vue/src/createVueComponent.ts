import { h } from 'vue';
import defaultAttributes from './defaultAttributes';
import type { Icon, IconNode, IconProps } from './types';

const createVueComponent =
  (
    type: 'outline' | 'filled',
    iconName: string,
    iconNamePascal: string,
    iconNode: IconNode,
  ): Icon =>
  ({ color = 'currentColor', size, stroke, title, class: classes, ...rest }: IconProps, { attrs, slots }) => {
    return h(
      'svg',
      {
        ...defaultAttributes[type],
        width: size,
        height: size,
        ...attrs,
        class: ['tabler-icon', `tabler-icon-${iconName}`],
        ...(type === 'filled'
          ? {
              fill: color,
            }
          : {
              'stroke-width': stroke,
              stroke: color,
            }),
        ...rest,
      },
      [
        title && h('title', title),
        ...iconNode.map((child) => h(...child)), ...(slots.default ? [slots.default()] : [])
      ],
    );
  };

export default createVueComponent;
