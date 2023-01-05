import defaultAttributes from './defaultAttributes'
import { splitProps } from "solid-js"
import h from "solid-js/h";

const createSolidComponent = (iconName, iconNode) => {
  const Component = props => {
    const [localProps, rest] = splitProps(props, [
      'color',
      'size',
      'strokeWidth',
      'children',
      'class',
    ]);

    const svgProps = {
      ...defaultAttributes,
      width: () => (localProps.size != null ? localProps.size : defaultAttributes.width),
      height: () => (localProps.size != null ? localProps.size : defaultAttributes.height),
      stroke: () => (localProps.color != null ? localProps.color : defaultAttributes.stroke),
      'stroke-width': () => localProps.strokeWidth != null ? localProps.strokeWidth : defaultAttributes['stroke-width'],
      class: () => `tabler-icon tabler-icon-${iconName} ${localProps.class != null ? localProps.class : ''}`,
    };

    return h(
        'svg',
        [svgProps, rest],
        [...iconNode.map(([tag, attrs]) => h(tag, attrs)), localProps.children],
    );
  };

  Component.displayName = `${iconName}`;
  return Component;
}

export default createSolidComponent;
