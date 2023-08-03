#!/usr/bin/env node

import path from 'path'
import tablerIcons from '@tabler/icons'
import fs from 'fs-extra'
import { toPascalCase } from '../../.build/helpers.mjs'

// Build vue icons
(() => {
const icons = Object.keys(tablerIcons).map(name => ({
  name,
  namePascal: toPascalCase(`icon ${name}`)
}))

const index = []
const typings = [`
import { SVGAttributes, FunctionalComponent } from 'vue';
declare module '@tabler/icons-vue'

export interface SVGProps extends Partial<SVGAttributes> {
  size?: number
}
`]

icons.map(icon => {
  const svgNodes = tablerIcons[icon.name].nodes.map((node, i) => {
    node[1].key = `svg-${i}`
    return node
  })
  .filter((i) => {
    const [name, attributes] = i
    return !attributes.d || attributes.d !== 'M0 0h24v24H0z'
  })
  const svgAttrs = tablerIcons[icon.name].attrs
  const component = `\
import createVueComponent from '../createVueComponent';
export default createVueComponent(${JSON.stringify(svgNodes)}, ${JSON.stringify(svgAttrs)});`

  const filepath = `./src/icons/${icon.namePascal}.ts`

  fs.ensureDirSync(path.dirname(filepath))
  fs.writeFileSync(filepath, component, 'utf8')

  index.push(`export { default as ${icon.namePascal} } from './icons/${icon.namePascal}'`)
  typings.push(`export declare const ${icon.namePascal}: (props: SVGProps) => FunctionalComponent<SVGProps>;`)
})

fs.outputFile('./src/index.ts', index.join('\n\n') , 'utf8')
fs.outputFile('./dist/index.d.ts', typings.join('\n\n') , 'utf8')
})();
