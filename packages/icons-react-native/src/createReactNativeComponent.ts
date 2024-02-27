import { forwardRef, createElement, FunctionComponent } from 'react';
import defaultAttributes, { childDefaultAttributes } from './defaultAttributes';
import type { Icon, IconNode, IconProps } from './types';
import { NativeSvg } from './types';

const createReactNativeComponent = (
  type: 'outline' | 'filled',
  iconName: string,
  iconNamePascal: string,
  iconNode: IconNode,
): Icon => {
  const Component = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', size = 24, strokeWidth = 2, children, ...rest }: IconProps, ref) => {
      const customAttrs = {
        stroke: color,
        strokeWidth,
        ...rest,
      };

      return createElement(
        NativeSvg.Svg as unknown as string,
        {
          ref,
          ...defaultAttributes[type],
          width: size,
          height: size,
          ...customAttrs,
          ...rest,
        },
        [
          ...iconNode.map(([tag, attrs]) => {
            const upperCasedTag = (tag.charAt(0).toUpperCase() +
              tag.slice(1)) as keyof typeof NativeSvg;

            return createElement(
              NativeSvg[upperCasedTag] as FunctionComponent<IconProps>,
              { ...childDefaultAttributes[type], ...customAttrs, ...attrs } as IconProps,
            );
          }),
          ...((Array.isArray(children) ? children : [children]) || []),
        ],
      );
    },
  );

  Component.displayName = `${iconNamePascal}`;

  return Component;
};

export default createReactNativeComponent;
