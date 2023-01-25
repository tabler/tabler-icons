import { h } from 'vue';
import defaultAttributes from './defaultAttributes';

const createVueComponent = (iconName, iconNamePascal, iconNode) => (
    { size, color, ...props },
    { attrs, slots }
) => {
  return h(
      'svg',
      {
        ...defaultAttributes,
        width: size || defaultAttributes.width,
        height: size || defaultAttributes.height,
        stroke: color || defaultAttributes.stroke,
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
