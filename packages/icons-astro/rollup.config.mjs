import fs from 'fs'
import { getRollupConfig } from '../../.build/rollup-plugins.mjs'
import dts from 'rollup-plugin-dts'

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const outputFileName = 'tabler-icons-astro'
const inputs = ['./src/tabler-icons-astro.ts']

// Astro's runtime helpers stay external — they are resolved by the
// consumer's Astro/Vite pipeline via the `astro` peer dependency.
const external = [/^astro(\/|$)/]

const bundles = [
  {
    format: 'cjs',
    extension: 'cjs',
    inputs,
    external,
  },
  {
    format: 'esm',
    inputs,
    preserveModules: true,
    extension: 'mjs',
    external,
  },
]

export default [
  {
    input: inputs[0],
    external,
    output: [
      {
        file: `dist/${outputFileName}.d.ts`,
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
  ...getRollupConfig(pkg, outputFileName, bundles, {}),
]
