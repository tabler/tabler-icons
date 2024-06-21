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
    let children = [...iconNode.map((child) => h(...child)), ...(slots.default ? [slots.default()] : [])];
    if (title) children = [h('title', title), ...children];
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
              'stroke-width': stroke ?? defaultAttributes[type]['stroke-width'],
              stroke: color,
            }),
        ...rest,
      },
      children,
    );
  };

export default createVueComponent;
