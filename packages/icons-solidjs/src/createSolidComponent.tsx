import { JSX } from 'solid-js/jsx-runtime';
import defaultAttributes from './defaultAttributes';
import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { IconNode, IconProps } from './types';

const createSolidComponent = (
  type: 'outline' | 'filled',
  iconName: string,
  iconNamePascal: string,
  iconNode: IconNode,
) => {
  const Component = (props: IconProps): JSX.Element => {
    const [localProps, rest] = splitProps(props, [
      'color',
      'size',
      'stroke',
      'strokeWidth',
      'title',
      'children',
      'class',
    ]);
    const attributes = defaultAttributes[type];
    const strokeValue = localProps.stroke ?? localProps.strokeWidth;

    return (
      <svg
        {...attributes}
        {...rest}
        width={localProps.size != null ? localProps.size : attributes.width}
        height={localProps.size != null ? localProps.size : attributes.height}
        class={`tabler-icon tabler-icon-${iconName} ${localProps.class != null ? localProps.class : ''}`}
        {...(type === 'filled'
          ? {
              fill: localProps.color != null ? localProps.color : 'currentColor',
            }
          : {
              stroke: localProps.color != null ? localProps.color : 'currentColor',
              'stroke-width':
                strokeValue != null ? strokeValue : attributes['stroke-width'],
            })}
      >
        {localProps.title != null && <title>{localProps.title}</title>}
        {iconNode.map(([tag, attrs]) => (
          <Dynamic component={tag} {...attrs} />
        ))}
        {localProps.children}
      </svg>
    );
  };

  Component.displayName = `${iconNamePascal}`;
  return Component;
};

export default createSolidComponent;
