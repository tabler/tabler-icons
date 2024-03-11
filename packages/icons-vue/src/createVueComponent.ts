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
  ({ size, color, class: classes, stroke, ...rest }: IconProps, { attrs, slots }) => {
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
      [...iconNode.map((child) => h(...child)), ...(slots.default ? [slots.default()] : [])],
    );
  };

export default createVueComponent;
