import { h, toChildArray } from 'preact';
import defaultAttributes from './defaultAttributes';
import type { Icon, IconNode, IconProps } from './types';

const createPreactComponent = (
  iconName: string,
  iconNamePascal: string,
  iconNode: IconNode
): Icon => {
  const Component = ({
    color = 'currentColor',
    size = 24,
    strokeWidth = 2,
    children,
    class: classes = '',
    ...rest
  }: IconProps) =>
    h(
      'svg',
      {
        ...defaultAttributes,
        width: String(size),
        height: size,
        stroke: color,
        strokeWidth: strokeWidth,
        class: [`tabler-icon`, `tabler-icon-${iconName}`, classes].join(' '),
      },
      [...iconNode.map(([tag, attrs]) => h(tag, attrs)), ...toChildArray(children)]
    );

  Component.displayName = `${iconNamePascal}`;

  return Component;
};

export default createPreactComponent;
