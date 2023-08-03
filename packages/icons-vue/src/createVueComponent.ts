import { h } from 'vue';

const createVueComponent = (svgNodes: [string, Record<string, string>][], svgAttrs: Record<string, string | number>) => (
    { size, color, stroke, ...props },
    { attrs, slots }
) => {
  return h(
      'svg',
      {
        ...svgAttrs,
        width: size || svgAttrs.width,
        height: size || svgAttrs.height,
        stroke: color || svgAttrs.stroke,
        strokeWidth: stroke || svgAttrs['stroke-width'],
        ...attrs,
        class: [svgAttrs.class, attrs?.class || ''],
        ...props,
      },      
      [
        ...svgNodes.map(child => h(...child)),
        ...(slots.default ? [slots.default()] : [])
      ],
  );
};

export default createVueComponent;
