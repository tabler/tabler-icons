import defaultAttributes from './defaultAttributes';
import { splitProps } from 'solid-js';
import h from 'solid-js/h';
import { IconNode, IconProps } from './types';

const createSolidComponent = (
  type: 'outline' | 'filled',
  iconName: string,
  iconNamePascal: string,
  iconNode: IconNode,
) => {
  const Component = (props: IconProps) => {
    const [localProps, rest] = splitProps(props, ['color', 'size', 'stroke', 'children', 'class']),
      attributes = defaultAttributes[type];

    const svgProps = {
      ...attributes,
      width: () => (localProps.size != null ? localProps.size : attributes.width),
      height: () => (localProps.size != null ? localProps.size : attributes.height),
      ...(type === 'filled'
        ? {
            fill: () => (localProps.color != null ? localProps.color : attributes.stroke),
          }
        : {
            stroke: () => (localProps.color != null ? localProps.color : attributes.stroke),
            'stroke-width': () =>
              localProps.stroke != null ? localProps.stroke : attributes['stroke-width'],
          }),
      class: () =>
        `tabler-icon tabler-icon-${iconName} ${localProps.class != null ? localProps.class : ''}`,
    };

    return h(
      'svg',
      [svgProps, rest],
      [...iconNode.map(([tag, attrs]) => h(tag, attrs)), localProps.children],
    );
  };

  Component.displayName = `${iconNamePascal}`;
  return Component;
};

export default createSolidComponent;
