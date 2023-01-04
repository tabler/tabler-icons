import fs from 'fs-extra'
import path from 'path'
import { PACKAGES_DIR, readSvgs } from './helpers.mjs'
import { stringify } from 'svgson'
import prettier from 'prettier'

import { babel } from '@rollup/plugin-babel'
import bundleSize from '@atomico/rollup-plugin-sizes'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'
import license from 'rollup-plugin-license'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import preprocess from 'svelte-preprocess'

/**
 * Build icons
 *
 * @param name
 * @param componentTemplate
 * @param indexIconTemplate
 * @param typeDefinitionsTemplate
 * @param indexTypeTemplate
 * @param ext
 * @param pretty
 */
export const buildIcons = ({
  name,
  componentTemplate,
  indexItemTemplate,
  typeDefinitionsTemplate,
  indexTypeTemplate,
  extension = 'js',
  pretty = true,
  key = true
}) => {
  const DIST_DIR = path.resolve(PACKAGES_DIR, name),
      svgFiles = readSvgs()

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

          return [name, attributes]
        })
        .filter((i) => {
          const [ name, attributes ] = i
          return !attributes.d || attributes.d !== 'M0 0h24v24H0z'
        })

    process.stdout.write(`Building ${i}/${svgFiles.length}: ${svgFile.name.padEnd(42)}\r`)

    let component = componentTemplate({
      name: svgFile.name,
      namePascal: svgFile.namePascal,
      children,
      stringify
    })

    const output = pretty ? prettier.format(component, {
      singleQuote: true,
      trailingComma: 'all',
      parser: 'babel'
    }) : component

    let filePath = path.resolve(DIST_DIR, 'src/icons', `${svgFile.name}.${extension}`)
    fs.writeFileSync(filePath, output, 'utf-8')

    index.push(indexItemTemplate({
      name: svgFile.name,
      namePascal: svgFile.namePascal
    }))

    typings.push(indexTypeTemplate({
      name: svgFile.name,
      namePascal: svgFile.namePascal
    }))
  })

  fs.writeFileSync(path.resolve(DIST_DIR, `./src/tabler-${name}.js`), index.join('\n'), 'utf-8')

  fs.ensureDirSync(path.resolve(DIST_DIR, `./dist/`))
  fs.writeFileSync(path.resolve(DIST_DIR, `./dist/tabler-${name}.d.ts`), typeDefinitionsTemplate() + '\n' + typings.join('\n'), 'utf-8')
}

/**
 *
 * @param name
 * @param globals
 * @returns {FlatArray<{output: {file: string, sourcemap: boolean, globals: *, name: string, format: *}, input: *, external: [string], plugins: *}[][], 1>[]}
 */
export const getRollupConfig = ({ name, globals, external, pluginSvelte, pkg }) => {
  const packageName = `@tabler/${name}`
  const outputFileName = `tabler-${name}`
  const outputDir = 'dist'
  const inputs = [`src/tabler-${name}.js`]
  const bundles = [
    {
      format: 'umd',
      inputs,
      outputDir,
      minify: true
    },
    {
      format: 'umd',
      inputs,
      outputDir
    },
    {
      format: 'cjs',
      inputs,
      outputDir
    }
  ]

  const plugins = (pkg, minify) =>
      [
        pluginSvelte && svelte({
          preprocess,
          compilerOptions: {
            dev: false
          },
          emitCss: false
        }),
        replace({
          'icons = {}': 'icons = allIcons',
          delimiters: ['', ''],
          preventAssignment: false
        }),
        resolve(),
        commonJS({
          include: 'node_modules/**',
          sourceMap: false
        }),
        babel({
          babelHelpers: 'bundled'
        }),
        minify && terser(),
        license({
          banner: `${pkg.name} v${pkg.version} - ${pkg.license}`
        }),
        bundleSize(),
        visualizer({
          sourcemap: false,
          filename: `stats/${pkg.name}${minify ? '-min' : ''}.html`
        })
      ].filter(Boolean)

  return bundles
      .map(({ inputs, outputDir, format, minify }) =>
          inputs.map(input => ({
            input,
            plugins: plugins(pkg, minify),
            external,
            output: {
              name: packageName,
              file: `${outputDir}/${format}/${outputFileName}${minify ? '.min' : ''}.js`,
              format,
              sourcemap: false,
              globals
            }
          }))
      )
      .flat()
}
