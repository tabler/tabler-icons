import { forwardRef, createElement } from 'react';
import defaultAttributes from './defaultAttributes';
import type { IconNode, IconProps, Icon } from './types';

const createReactComponent = (
  type: 'outline' | 'filled',
  iconName: string,
  iconNamePascal: string,
  iconNode: IconNode,
) => {
  const Component = forwardRef<Icon, IconProps>(
    (
      { color = 'currentColor', size = 24, stroke = 2, className, children, ...rest }: IconProps,
      ref,
    ) =>
      createElement(
        'svg',
        {
          ref,
          ...defaultAttributes[type],
          width: size,
          height: size,
          className: [`tabler-icon`, `tabler-icon-${iconName}`, className].join(' '),
          ...(type === 'filled'
            ? {
                fill: color,
              }
            : {
                strokeWidth: stroke,
                stroke: color,
              }),
          ...rest,
        },
        [
          ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
          ...(Array.isArray(children) ? children : [children]),
        ],
      ),
  );

  Component.displayName = `${iconNamePascal}`;

  return Component;
};

export default createReactComponent;
