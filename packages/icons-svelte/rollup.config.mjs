import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import svelteConfig from './svelte.config.mjs';
import fs from 'fs'
import { getRollupPlugins } from '../../.build/build-icons.mjs'

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const packageName = '@tabler/icons-svelte';
const outputFileName = 'tabler-icons-svelte';
const outputDir = 'dist';
const inputs = ['./src/tabler-icons-svelte.js'];
const bundles = [
  {
    format: 'esm',
    inputs,
    outputDir,
    preserveModules: true,
  },
  {
    format: 'svelte',
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
            ...(format !== 'svelte' ? [
              svelte({
                ...svelteConfig,
                include: 'src/**/*.svelte',
                compilerOptions: {
                  dev: false,
                  css: false,
                  hydratable: true,
                },
                emitCss: false,
              }),
              resolve({
                browser: true,
                exportConditions: ['svelte'],
                extensions: ['.svelte']
              }),
            ] : []),
            ...getRollupPlugins(pkg, minify),
          ],
          external: format === 'svelte' ? [/\.svelte/] : ['svelte'],
          output: {
            name: packageName,
            ...(preserveModules
                ? {
                  dir: `${outputDir}/${format}`,
                }
                : {
                  file: `${outputDir}/${format}/${outputFileName}${minify ? '.min' : ''}.js`,
                }),
            preserveModules,
            format: format === 'svelte' ? 'esm' : format,
            sourcemap: true,
            globals: {
              svelte: 'svelte',
            },
          },
        })),
    )
    .flat();

export default configs;
