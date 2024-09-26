import { JSX } from 'solid-js/jsx-runtime';
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
  const Component = (props: IconProps): JSX.Element => {
    const [localProps, rest] = splitProps(props, ['color', 'size', 'stroke', 'title', 'children', 'class']),
      attributes = defaultAttributes[type];

    const svgProps = {
      ...attributes,
      width: () => (localProps.size != null ? localProps.size : attributes.width),
      height: () => (localProps.size != null ? localProps.size : attributes.height),
      title: () => localProps.title != null ? localProps.title : undefined,
      ...(type === 'filled'
        ? {
            fill: () => (localProps.color != null ? localProps.color : 'currentColor'),
          }
        : {
            stroke: () => (localProps.color != null ? localProps.color : 'currentColor'),
            'stroke-width': () =>
              localProps.stroke != null ? localProps.stroke : attributes['stroke-width'],
          }),
      class: () =>
        `tabler-icon tabler-icon-${iconName} ${localProps.class != null ? localProps.class : ''}`,
    };

    return h(
      'svg',
      [svgProps, rest],
      [
        localProps.title && h('title', {}, localProps.title),
        ...iconNode.map(([tag, attrs]) => h(tag, attrs)),
        localProps.children
      ],
    ) as unknown as JSX.Element;
  };

  Component.displayName = `${iconNamePascal}`;
  return Component;
};

export default createSolidComponent;
