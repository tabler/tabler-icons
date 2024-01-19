import bundleSize from '@atomico/rollup-plugin-sizes'
import { visualizer } from 'rollup-plugin-visualizer'
import license from 'rollup-plugin-license'
import esbuild from 'rollup-plugin-esbuild'

export const getRollupPlugins = (pkg, minify) => {
  return [
    esbuild({
      minify
    }),
    license({
      banner: `@license ${pkg.name} v${pkg.version} - ${pkg.license}

This source code is licensed under the ${pkg.license} license.
See the LICENSE file in the root directory of this source tree.`
    }),
    bundleSize(),
    visualizer({
      sourcemap: false,
      filename: `stats/${pkg.name}${minify ? '-min' : ''}.html`
    })
  ].filter(Boolean)
}
