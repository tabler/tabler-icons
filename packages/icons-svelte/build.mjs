#!/usr/bin/env node

import { buildJsIcons } from '../../.build/build-icons.mjs'
import { readFileSync, writeFileSync } from 'fs'

const updatePackageJson = () => {
  let packageJson = JSON.parse(readFileSync('package.json', 'utf-8'))

  if (packageJson.exports) {
    for(const key in packageJson.exports) {
      if (key.match(/^\.\/[^\.]+\.svelte$/)) {
        delete packageJson.exports[key]
      }
    }
  }

  writeFileSync('package.json', JSON.stringify(packageJson, null, 2))
}

const componentTemplate = ({
  type,
  name,
  children,
  stringify
}) => {
  return `\
<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

type $$Props = IconProps;

const iconNode: IconNode = ${JSON.stringify(children)};
</script>
<Icon type="${type}" name="${name}" {...$$props} iconNode={iconNode}>
  <slot/>
</Icon>
`;
};

const aliasTemplate = ({ fromPascal, to }) => `export { default as Icon${fromPascal} } from './icons/${to}.svelte';\n`

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './${name}.svelte';`

// buildJsIcons({
//   name: 'icons-svelte',
//   componentTemplate,
//   indexItemTemplate,
//   aliasTemplate,
//   extension: 'svelte',
//   key: false,
//   indexFile: 'index.ts',
//   pascalName: false,
// })

updatePackageJson()
