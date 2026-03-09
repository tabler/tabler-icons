import { splitProps, mergeProps } from 'solid-js';
import type { JSX } from 'solid-js';
import defaultAttributes from './defaultAttributes';
import type { IconProps } from './types';

const createSolidComponent = (
  type: 'outline' | 'filled',
  iconName: string,
  iconNamePascal: string,
  iconContent: string,
) => {
  const Component = (props: IconProps): JSX.Element => {
    const [localProps, rest] = splitProps(props, [
      'color',
      'size',
      'stroke',
      'title',
      'children',
      'class',
    ]);

    const attributes = defaultAttributes[type];

    const svgProps = mergeProps(attributes, rest, {
      get width() {
        return localProps.size ?? attributes.width;
      },
      get height() {
        return localProps.size ?? attributes.height;
      },
      get class() {
        return `tabler-icon tabler-icon-${iconName} ${localProps.class ?? ''}`;
      },
      ...(type === 'filled'
        ? {
            get fill() {
              return localProps.color ?? 'currentColor';
            },
          }
        : {
            get stroke() {
              return localProps.color ?? 'currentColor';
            },
            get ['stroke-width']() {
              return localProps.stroke ?? attributes['stroke-width'];
            },
          }),
    });

    // Use innerHTML for SSR compatibility — the icon paths are static and
    // pre-computed at build time, so there is no need for Solid's
    // fine-grained reactivity on the inner SVG elements.
    return (
      <svg
        {...svgProps}
        innerHTML={
          localProps.title
            ? `<title>${String(localProps.title).replace(/</g, '&lt;').replace(/>/g, '&gt;')}</title>${iconContent}`
            : iconContent
        }
      />
    );
  };

  Component.displayName = iconNamePascal;
  return Component;
};

export default createSolidComponent;
