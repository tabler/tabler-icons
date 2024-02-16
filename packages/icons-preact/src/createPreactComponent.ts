import { h, toChildArray } from 'preact';
import defaultAttributes from './defaultAttributes';
import type { Icon, IconNode, IconProps } from './types';

const createPreactComponent = (
  type: 'outline' | 'filled',
  iconName: string,
  iconNamePascal: string,
  iconNode: IconNode
): Icon => {
  const Component = ({
    color = 'currentColor',
    size = 24,
    stroke = 2,
    children,
    className = '',
    style,
    ...rest
  }: IconProps) =>
    h(
      'svg',
      {
        ...defaultAttributes[type],
        width: String(size),
        height: size,
        stroke: color,
        'stroke-width': stroke,
        class: [`tabler-icon`, `tabler-icon-${iconName}`, className].join(' '),
        style,
      },
      [...iconNode.map(([tag, attrs]) => h(tag, attrs)), ...toChildArray(children)],
      ...[rest]
    );

  Component.displayName = `${iconNamePascal}`;

  return Component;
};

export default createPreactComponent;
