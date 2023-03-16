import bundleSize from '@atomico/rollup-plugin-sizes'
import { visualizer } from 'rollup-plugin-visualizer'
import license from 'rollup-plugin-license'
import esbuild from 'rollup-plugin-esbuild'
import dts from "rollup-plugin-dts";
import pkg from "./package.json" assert { type: "json" }
import typescript from "@rollup/plugin-typescript";
import json from '@rollup/plugin-json';

// const packageName = '@tabler/icons';
// const outputFileName = 'tabler-icons';
// const outputDir = 'dist';
// const inputs = ['./src/tabler-icons.js'];
// const bundles = [
//   {
//     format: 'umd',
//     inputs,
//     outputDir,
//     minify: true,
//   },
//   {
//     format: 'umd',
//     inputs,
//     outputDir,
//   },
//   {
//     format: 'cjs',
//     inputs,
//     outputDir,
//   },
//   {
//     format: 'es',
//     inputs,
//     outputDir,
//   },
//   {
//     format: 'esm',
//     inputs,
//     outputDir,
//     preserveModules: true,
//   },
// ];

// const configs = bundles
//     .map(({ inputs, outputDir, format, minify, preserveModules }) =>
//         inputs.map(input => ({
//           input,
//           plugins: [
//             dts(),
//             esbuild({
//               minify
//             }),
//             license({
//               banner: `${pkg.name} v${pkg.version} - ${pkg.license}`
//             }),
//             bundleSize(),
//             visualizer({
//               sourcemap: false,
//               filename: `stats/${pkg.name}${minify ? '-min' : ''}.html`
//             }),
//             json()
//           ].filter(Boolean),
//           output: {
//             name: packageName,
//             ...(preserveModules
//                 ? {
//                   dir: `${outputDir}/${format}`,
//                 }
//                 : {
//                   file: `${outputDir}/${format}/${outputFileName}${minify ? '.min' : ''}.js`,
//                 }),
//             format,
//             preserveModules,
//             sourcemap: true,
//           },
//         })),
//     )
//     .flat();

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      esbuild(),
      license({
        banner: `${pkg.name} v${pkg.version} - ${pkg.license}`
      }),
      bundleSize(),
      visualizer({
        sourcemap: false,
        filename: `stats/${pkg.name}.html`
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      json()
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts(), json()],
  },
];
