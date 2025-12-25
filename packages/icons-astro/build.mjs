#!/usr/bin/env node

import { buildJsIcons, buildIconsList } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  type,
  name,
  namePascal,
  children
}) => {
  // Remove key from children (Astro doesn't need keyed children in loops)
  const keylessChildren = children.map((c) => {
    const [element, attrs] = c;
    const { key, ...otherAttrs } = attrs;
    return [element, otherAttrs];
  });

  return `import createTablerIcon from '../createTablerIcon';
import type { AstroComponent } from '../types';

/**
 * @component @name Icon${namePascal}
 * @description Tabler SVG icon component, renders SVG Element with children.
 *
 * @param {import('../types').IconProps} props - Tabler icons props and any valid SVG attribute
 * @returns {any} Astro Component
 */
const Icon${namePascal} = createTablerIcon('${name}', ${JSON.stringify(keylessChildren)}, '${type}') as AstroComponent;

export default Icon${namePascal};
`;
};

const aliasTemplate = ({ fromPascal, to }) => `export { default as Icon${fromPascal} } from './icons/${to}.ts';\n`

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as Icon${namePascal} } from './${name}.ts';`

buildJsIcons({
  name: 'icons-astro',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  extension: 'ts',
  key: false,
  indexFile: 'index.ts',
  pascalName: false,
})

buildIconsList('icons-astro')

