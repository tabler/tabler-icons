import { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';
import type { IconNode, IconProps, IconType } from './types';

interface IconComponentSignature {
  Args: IconProps & {
    iconNode: IconNode;
    name: string;
    type: IconType;
  };
  Blocks: {
    default: [];
  };
  Element: SVGSVGElement;
}

const escapeAttributeValue = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const renderAttributes = (attributes: Record<string, string>) =>
  Object.entries(attributes)
    .map(([attribute, value]) => `${attribute}="${escapeAttributeValue(String(value))}"`)
    .join(' ');

const renderChild = ([tag, attributes]: IconNode[number]) => {
  const renderedAttributes = renderAttributes(attributes);
  return `<${tag}${renderedAttributes ? ` ${renderedAttributes}` : ''} />`;
};

export default class Icon extends Component<IconComponentSignature> {
  get size(): string | number {
    return this.args.size ?? 24;
  }

  get color(): string {
    return this.args.color ?? 'currentColor';
  }

  get stroke(): string | number {
    return this.args.stroke ?? 2;
  }

  get fill(): string {
    return this.args.type === 'filled' ? this.color : 'none';
  }

  get strokeColor(): string {
    return this.args.type === 'filled' ? 'none' : this.color;
  }

  get strokeWidth(): string | number | undefined {
    return this.args.type === 'filled' ? undefined : this.stroke;
  }

  get strokeLinecap(): string | undefined {
    return this.args.type === 'filled' ? undefined : 'round';
  }

  get strokeLinejoin(): string | undefined {
    return this.args.type === 'filled' ? undefined : 'round';
  }

  get children() {
    return htmlSafe(this.args.iconNode.map(renderChild).join(''));
  }

  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={{this.size}}
      height={{this.size}}
      viewBox="0 0 24 24"
      class="tabler-icon tabler-icon-{{@name}}"
      fill={{this.fill}}
      stroke={{this.strokeColor}}
      stroke-width={{this.strokeWidth}}
      stroke-linecap={{this.strokeLinecap}}
      stroke-linejoin={{this.strokeLinejoin}}
      ...attributes
    >
      {{#if @title}}
        <title>{{@title}}</title>
      {{/if}}
      {{this.children}}
      {{yield}}
    </svg>
  </template>
}
