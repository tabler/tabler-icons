import { visualizer } from 'rollup-plugin-visualizer'
import license from 'rollup-plugin-license'
import esbuild from 'rollup-plugin-esbuild'

const getRollupPlugins = (pkg, minify) => {
  return [
    esbuild({
      minify
    }),
    license({
      banner: `@license ${pkg.name} v${pkg.version} - ${pkg.license}

This source code is licensed under the ${pkg.license} license.
See the LICENSE file in the root directory of this source tree.`
    }),
    visualizer({
      sourcemap: false,
      filename: `stats/${pkg.name}${minify ? '-min' : ''}.html`
    })
  ].filter(Boolean)
}

export const getRollupConfig = (pkg, outputFileName, bundles, globals) => {
  return bundles
    .map(({ inputs, format, minify, preserveModules, outputDir = 'dist', extension = 'js', exports = 'named' }) => {
      return inputs.map(input => ({
        input,
        plugins: getRollupPlugins(pkg, minify),
        external: Object.keys(globals),
        output: {
          name: pkg.name,
          ...(preserveModules
            ? {
              dir: `${outputDir}/${format}`,
              entryFileNames: `[name].${extension}`,
            }
            : {
              file: `${outputDir}/${format}/${outputFileName}${minify ? '.min' : ''}.${extension}`,
            }),
          format,
          sourcemap: true,
          preserveModules,
          preserveModulesRoot: 'src',
          exports,
          globals,
        },
      }))
    })
    .flat();
}
