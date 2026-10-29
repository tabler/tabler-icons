import { h } from 'vue';
import defaultAttributes from './defaultAttributes';
import type { Icon, IconNode, IconProps } from './types';

const createVueComponent = (
  type: 'outline' | 'filled',
  iconName: string,
  iconNamePascal: string,
  iconNode: IconNode,
): Icon => {
  const component: Icon = (
    { color = 'currentColor', size = 24, stroke = 2, strokeWidth, title }: IconProps,
    { slots },
  ) => {
    let children = [
      ...iconNode.map((child) => h(...child)),
      ...(slots.default ? [slots.default()] : []),
    ];
    if (title) children = [h('title', title), ...children];
    return h(
      'svg',
      {
        ...defaultAttributes[type],
        width: size,
        height: size,
        class: ['tabler-icon', `tabler-icon-${iconName}`],
        ...(type === 'filled'
          ? {
              fill: color,
            }
          : {
              'stroke-width': strokeWidth ?? stroke,
              stroke: color,
            }),
      },
      children,
    );
  };

  // Declared props stay out of `attrs`, so they are not rendered as DOM
  // attributes. Everything else (class, style, listeners, extra SVG
  // attributes) falls through to the root `<svg>` and overrides the defaults.
  component.props = ['color', 'size', 'stroke', 'strokeWidth', 'title'];
  component.displayName = iconNamePascal;

  return component;
};

export default createVueComponent;
