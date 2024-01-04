import {
  forwardRef,
  createElement,
} from 'react';
import defaultAttributes from './defaultAttributes';
import type { IconNode, IconProps } from './types';

const createReactComponent = (iconName: string, iconNamePascal: string, iconNode: IconNode) => {
  const Component = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', size = 24, stroke = 2, className = '', children, ...rest }, ref) =>
      createElement(
        'svg',
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: stroke,
          className: [`tabler-icon`, `tabler-icon-${iconName}`, className].join(' '),
          ...rest,
        },
        [
          ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
          ...(Array.isArray(children) ? children : [children]),
        ]
      )
  );

  Component.displayName = `${iconNamePascal}`;

  return Component;
};

export default createReactComponent;
