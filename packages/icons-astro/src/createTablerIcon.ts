import type { AstroComponentFactory } from 'astro/runtime/server/render/astro/factory.js';
import type { IconNode } from './types';
import { render, renderSlot, createComponent, renderComponent } from 'astro/compiler-runtime';
import Icon from './Icon.astro';

const toKebabCase = (string: string): string =>
  string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export default (
  iconName: string,
  iconNode: IconNode,
  type: 'outline' | 'filled' = 'outline',
): AstroComponentFactory => {
  const Component = createComponent(
    ($$result: any, $$props: Record<string, any>, $$slots: any) => {
      const { class: className, ...restProps } = $$props;
      const classes = [
        Boolean(iconName) && `tabler-icon-${toKebabCase(iconName)}`,
        Boolean(className) && className,
      ].filter(Boolean).join(' ').trim();
      
      return render`${renderComponent(
        $$result,
        'Icon',
        Icon,
        {
          type,
          class: classes || undefined,
          iconNode,
          ...restProps,
        },
        { default: () => render`${renderSlot($$result, $$slots['default'])}` },
      )}`;
    },
    undefined,
    'none',
  );
  return Component;
};

