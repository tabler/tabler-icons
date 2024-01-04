import fs from 'fs-extra'
import path from 'path'
import { PACKAGES_DIR, readSvgs, readAliases, toPascalCase } from './helpers.mjs'
import { stringify } from 'svgson'
import prettier from 'prettier'

import bundleSize from '@atomico/rollup-plugin-sizes'
import { visualizer } from 'rollup-plugin-visualizer'
import license from 'rollup-plugin-license'
import esbuild from 'rollup-plugin-esbuild'

const svgFiles = readSvgs(),
  aliases = readAliases()

/**
 * Build icons
 *
 * @param name
 * @param componentTemplate
 * @param indexIconTemplate
 * @param typeDefinitionsTemplate
 * @param indexTypeTemplate
 * @param extension
 * @param pretty
 */
export const buildIcons = ({
  name,
  componentTemplate,
  indexItemTemplate,
  typeDefinitionsTemplate,
  indexTypeTemplate,
  aliasTemplate,
  extension = 'js',
  pretty = true,
  key = true,
  pascalCase = false,
  pascalName = true,
  indexFile = 'icons.js'
}) => {
  const DIST_DIR = path.resolve(PACKAGES_DIR, name);

  let index = []
  let typings = []

  svgFiles.forEach((svgFile, i) => {
    const children = svgFile.obj.children
      .map(({
        name,
        attributes
      }, i) => {
        if (key) {
          attributes.key = `svg-${i}`
        }

        if (pascalCase) {
          attributes.strokeWidth = attributes['stroke-width']
          delete attributes['stroke-width']
        }

        return [name, attributes]
      })
      .filter((i) => {
        const [name, attributes] = i
        return !attributes.d || attributes.d !== 'M0 0h24v24H0z'
      })

    let component = componentTemplate({
      name: svgFile.name,
      namePascal: svgFile.namePascal,
      children,
      stringify,
      svg: svgFile
    })

    // Format component
    const output = pretty ? prettier.format(component, {
      singleQuote: true,
      trailingComma: 'all',
      parser: 'babel'
    }) : component


    let filePath = path.resolve(DIST_DIR, 'src/icons', `${pascalName ? svgFile.namePascal : svgFile.name}.${extension}`)
    fs.writeFileSync(filePath, output, 'utf-8')

    index.push(indexItemTemplate({
      name: svgFile.name,
      namePascal: svgFile.namePascal
    }))

    if (indexTypeTemplate) {
      typings.push(indexTypeTemplate({
        name: svgFile.name,
        namePascal: svgFile.namePascal
      }))
    }
  })

  // Write aliases
  if (aliases && aliasTemplate) {
    let aliasesStr = '';

    Object.entries(aliases).forEach(([from, to]) => {
      aliasesStr += aliasTemplate({
        from, to,
        fromPascal: toPascalCase(from),
        toPascal: toPascalCase(to)
      })
    })

    fs.writeFileSync(path.resolve(DIST_DIR, `./src/aliases.ts`), aliasesStr, 'utf-8')
  } else {
    fs.writeFileSync(path.resolve(DIST_DIR, `./src/aliases.ts`), `export {};`, 'utf-8')
  }

  // Write index file
  fs.writeFileSync(path.resolve(DIST_DIR, `./src/${indexFile}`), index.join('\n'), 'utf-8')

  // Write type definitions
  if (typeDefinitionsTemplate) {
    fs.ensureDirSync(path.resolve(DIST_DIR, `./dist/`))
    fs.writeFileSync(path.resolve(DIST_DIR, `./dist/tabler-${name}.d.ts`), typeDefinitionsTemplate() + '\n' + typings.join('\n'), 'utf-8')
  }
}

export const getRollupPlugins = (pkg, minify) => {
  return [
    esbuild({
      minify
    }),
    license({
      banner: `${pkg.name} v${pkg.version} - ${pkg.license}`
    }),
    bundleSize(),
    visualizer({
      sourcemap: false,
      filename: `stats/${pkg.name}${minify ? '-min' : ''}.html`
    })
  ].filter(Boolean)
}
