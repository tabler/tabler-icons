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
    (
      { color = 'currentColor', size = 24, strokeWidth = 2, title, children, ...rest }: IconProps,
      ref,
    ) => {
      // Only the paint attributes are shared with the icon's nodes, because the
      // nodes set them explicitly and would not inherit them from the root.
      // Every other prop (`testID`, `opacity`, `onPress`, `style`, …) belongs to
      // the root `Svg` alone — repeating it on each node would apply it twice.
      const paintAttrs: Record<string, unknown> = {
        ...childDefaultAttributes[type],
        stroke: type === 'filled' ? 'none' : color,
        fill: type === 'filled' ? color : 'none',
        strokeWidth,
      };

      for (const key of Object.keys(paintAttrs)) {
        const value = (rest as Record<string, unknown>)[key];

        if (value != null) {
          paintAttrs[key] = value;
        }
      }

      return createElement(
        NativeSvg.Svg as unknown as string,
        {
          ref,
          ...defaultAttributes[type],
          width: size,
          height: size,
          ...rest,
          ...paintAttrs,
        },
        [
          ...iconNode.map(([tag, attrs]) => {
            const upperCasedTag = (tag.charAt(0).toUpperCase() +
              tag.slice(1)) as keyof typeof NativeSvg;

            return createElement(
              NativeSvg[upperCasedTag] as FunctionComponent<IconProps>,
              { ...paintAttrs, ...attrs } as IconProps,
            );
          }),
          [
            title && createElement('title', { key: 'svg-title' }, title),
            ...((Array.isArray(children) ? children : [children]) || []),
          ],
        ],
      );
    },
  );

  Component.displayName = `${iconNamePascal}`;

  return Component;
};

export default createReactNativeComponent;
