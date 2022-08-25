import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const input = "icons-react/index.js";

const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, ".min.js");

const plugins = [
  babel({
    exclude: "node_modules/**",
  }),
  external(),
  resolve(),
  commonjs(),
  terser(),
  filesize(),
];

export default [
  // CommonJS (for Node)
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins,
  },
  // CommonJS (for Node) minified
  {
    input,
    output: {
      file: minifyExtension(pkg.main),
      format: "cjs",
      sourcemap: true,
    },
    plugins
  },
  // UMD (for browser)
  {
    input,
    output: {
      file: pkg['umd:main'],
      format: "umd",
      sourcemap: true,
      name: "tablerIcons",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    plugins,
  },
  // UMD (for browser) minified
  {
    input,
    output: {
      file: minifyExtension(pkg['umd:main']),
      format: "umd",
      sourcemap: true,
      name: "tablerIcons",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    plugins
  },
  // ESM (for bundlers)
  {
    input,
    output: {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      exports: "named",
    },
    plugins,
  },
  // ESM (for bundlers) minified
  {
    input,
    output: {
      file: minifyExtension(pkg.module),
      format: "es",
      sourcemap: true,
      exports: "named",
    },
    plugins
  },
];
