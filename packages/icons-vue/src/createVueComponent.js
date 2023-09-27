import { h } from 'vue';
import defaultAttributes from './defaultAttributes';

const createVueComponent = (iconName, iconNamePascal, iconNode) => (
    { size, color, strokeWidth, ...props },
    { attrs, slots }
) => {
  return h(
      'svg',
      {
        ...defaultAttributes,
        width: size || defaultAttributes.width,
        height: size || defaultAttributes.height,
        stroke: color || defaultAttributes.stroke,
        'stroke-width': strokeWidth || defaultAttributes['stroke-width'],
        ...attrs,
        class: ['tabler-icon', `tabler-icon-${iconName}`, attrs?.class || ''],
        ...props,
      },
      [
        ...iconNode.map(child => h(...child)),
        ...(slots.default ? [slots.default()] : [])
      ],
  );
};

export default createVueComponent;
