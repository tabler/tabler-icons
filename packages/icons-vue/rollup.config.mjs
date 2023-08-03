import bundleSize from '@atomico/rollup-plugin-sizes'
import { visualizer } from 'rollup-plugin-visualizer'
import license from 'rollup-plugin-license'
import esbuild from 'rollup-plugin-esbuild'
// import dts from "rollup-plugin-dts";
import pkg from "./package.json" assert { type: "json" }
import typescript from "@rollup/plugin-typescript";

 const sharedOutput = {
  name: '@tabler/icons-vue',
  sourcemap: true,
  globals: {
    vue: 'vue',
  }  
 }

const sharedPlugins = [
  license({
    banner: `${pkg.name} v${pkg.version} - ${pkg.license}`
  }),
  bundleSize(),
  visualizer({
    sourcemap: false,
    filename: `stats/${pkg.name}.html`
  }),
  typescript({ tsconfig: "./tsconfig.json" })
]

export default [
  {
    input: "src/index.ts",
    output: [
      {
        ...sharedOutput,
        file: pkg.main,
        format: "cjs",
      },
      {
        ...sharedOutput,
        file: pkg.module,
        format: "esm",
      },
      {
        file: pkg['main:es'],
        format: "es",
        ...sharedOutput,
      },      
      {
        file: pkg['main:umd'],
        format: "umd",
        ...sharedOutput,
      }       
    ],
    plugins: [
      ...sharedPlugins,
      esbuild()
    ]
  },
  {
    input: "src/index.ts",
    output: [    
      {
        ...sharedOutput,
        file: pkg['main:umd:min'],
        format: 'umd',
      },      
    ],
    plugins: [
      ...sharedPlugins,
      esbuild({
        minify: true     
      })
    ]
  },  
  // {
  //   input: "dist/esm/types/index.d.ts",
  //   output: [
  //     { 
  //       file: "dist/index.d.ts",
  //       format: "esm" 
  //     }
  //   ],
  //   plugins: [
  //     dts()
  //   ]
  // },
];

