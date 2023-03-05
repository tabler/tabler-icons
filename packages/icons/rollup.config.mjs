import fs from 'fs'
import bundleSize from '@atomico/rollup-plugin-sizes'
import { visualizer } from 'rollup-plugin-visualizer'
import license from 'rollup-plugin-license'
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import dts from "rollup-plugin-dts";

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const packageName = '@tabler/icons';
const outputFileName = 'tabler-icons';
const outputDir = 'dist';
const inputs = ['./src/tabler-icons.js'];
const bundles = [
  {
    format: 'umd',
    inputs,
    outputDir,
    minify: true,
  },
  {
    format: 'umd',
    inputs,
    outputDir,
  },
  {
    format: 'cjs',
    inputs,
    outputDir,
  },
  {
    format: 'es',
    inputs,
    outputDir,
  },
  {
    format: 'esm',
    inputs,
    outputDir,
    preserveModules: true,
  },
];

const configs = bundles
    .map(({ inputs, outputDir, format, minify, preserveModules }) =>
        inputs.map(input => ({
          input,
          plugins: [
            // dts(),
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
            }),
            json()
          ].filter(Boolean),
          output: {
            name: packageName,
            ...(preserveModules
                ? {
                  dir: `${outputDir}/${format}`,
                }
                : {
                  file: `${outputDir}/${format}/${outputFileName}${minify ? '.min' : ''}.js`,
                }),
            format,
            preserveModules,
            sourcemap: true,
          },
        })),
    )
    .flat();

export default configs;
