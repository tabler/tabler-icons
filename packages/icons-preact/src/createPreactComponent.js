import { h, toChildArray } from 'preact';
import defaultAttributes from './defaultAttributes';

export default (iconName, iconNode) => {
  const Component = ({ color = 'currentColor', size = 24, strokeWidth = 2, children, ...rest }) =>
      h(
          'svg',
          {
            ...defaultAttributes,
            width: size,
            height: size,
            stroke: color,
            'stroke-width': strokeWidth,
            class: `tabler-icon tabler-icon-${iconName}`,
            ...rest,
          },
          [...iconNode.map(([tag, attrs]) => h(tag, attrs)), ...toChildArray(children)],
      );

  Component.displayName = `${iconName}`;

  return Component;
};
