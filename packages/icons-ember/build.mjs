#!/usr/bin/env node

import {
  buildIconsList,
  buildIconsDynamicImport,
  buildJsIcons,
} from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, namePascal, children }) => `\
import Component from '@glimmer/component';
import Icon from '../Icon.gts';
import type { IconNode, IconSignature as TablerIconSignature } from '../types';

const iconNode: IconNode = ${JSON.stringify(children)};

export default class Icon${namePascal} extends Component<TablerIconSignature> {
  <template>
    <Icon
      @type="${type}"
      @name="${name}"
      @iconNode={{iconNode}}
      @size={{@size}}
      @color={{@color}}
      @stroke={{@stroke}}
      @title={{@title}}
      ...attributes
    >
      {{yield}}
    </Icon>
  </template>
}
`;

const indexItemTemplate = ({ namePascal }) =>
  `export { default as Icon${namePascal} } from './Icon${namePascal}';`;

const aliasTemplate = ({ fromPascal, toPascal }) =>
  `export { default as Icon${fromPascal} } from './icons/Icon${toPascal}';\n`;

buildJsIcons({
  name: 'icons-ember',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  extension: 'gts',
  key: false,
  indexFile: 'index.ts',
});

buildIconsList('icons-ember');
buildIconsDynamicImport('icons-ember');
