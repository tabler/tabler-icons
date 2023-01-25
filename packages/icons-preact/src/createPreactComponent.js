import { h, toChildArray } from 'preact';
import defaultAttributes from './defaultAttributes';

export default (iconName, iconNamePascal, iconNode) => {
  const Component = ({ color = 'currentColor', size = 24, stroke = 2, children, ...rest }) =>
      h(
          'svg',
          {
            ...defaultAttributes,
            width: size,
            height: size,
            stroke: color,
            'stroke-width': stroke,
            class: `tabler-icon tabler-icon-${iconName}`,
            ...rest,
          },
          [...iconNode.map(([tag, attrs]) => h(tag, attrs)), ...toChildArray(children)],
      );

  Component.displayName = `${iconNamePascal}`;

  return Component;
};
