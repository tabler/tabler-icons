import { h, toChildArray } from 'preact';
import defaultAttributes from './defaultAttributes';
import type { Icon, IconNode, IconProps } from './types';

const createPreactComponent = (
  type: 'outline' | 'filled',
  iconName: string,
  iconNamePascal: string,
  iconNode: IconNode,
): Icon => {
  const Component = ({
    color = 'currentColor',
    size = 24,
    stroke = 2,
    title,
    children,
    className = '',
    class: classes = '',
    style,
    ...rest
  }: IconProps) =>
    h(
      'svg' as any,
      {
        ...defaultAttributes[type],
        width: String(size),
        height: String(size),
        class: [`tabler-icon`, `tabler-icon-${iconName}`, classes, className].join(' '),
        ...(type === 'filled'
          ? {
              fill: color,
            }
          : {
              'stroke-width': stroke,
              stroke: color,
            }),
        style,
        ...rest,
      },
      [
        title && h('title', {}, title),
        ...iconNode.map(([tag, attrs]) => h(tag, attrs)),
        ...toChildArray(children),
      ],
    );

  Component.displayName = `${iconNamePascal}`;

  return Component;
};

export default createPreactComponent;
