import { visualizer } from 'rollup-plugin-visualizer';
import license from 'rollup-plugin-license';
import esbuild from 'rollup-plugin-esbuild';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';

/**
 * For the declaration bundle only: resolve the icons index and the aliases to
 * the generated `src/icons-dts` modules (see `buildDtsEntry` in
 * build-icons.mjs), so rollup-plugin-dts emits declarations for one module
 * instead of one per icon. Must be placed before `dts()`.
 */
export const iconsDts = (srcDir = 'src') => {
  const src = path.resolve(srcDir);
  const redirects = {
    [path.join(src, 'icons')]: path.join(src, 'icons-dts/index.ts'),
    [path.join(src, 'icons/index')]: path.join(src, 'icons-dts/index.ts'),
    [path.join(src, 'aliases')]: path.join(src, 'icons-dts/aliases.ts'),
  };

  return {
    name: 'icons-dts',
    resolveId(source, importer) {
      if (!importer || !source.startsWith('.')) {
        return null;
      }

      return redirects[path.resolve(path.dirname(importer), source)] ?? null;
    },
  };
};

/** Declarations of the `icons-list` entry: the names of all icons. */
export const iconsListDts = `\
/** Names of all icons, e.g. \`home\` or \`home-filled\`. */
declare const iconsList: string[];
export default iconsList;
`;

/**
 * For the declaration bundle: tag the namespaces re-exported from the main
 * entry as `@deprecated` (`export * as` cannot carry JSDoc through the bundle,
 * so the tags are added to the bundled namespaces), and emit the declaration
 * files of the subpath entries next to it.
 *
 * @param {object} options
 * @param {Record<string, string>} options.deprecatedNamespaces deprecation
 *   message by namespace name; a namespace missing from the bundle is an error
 * @param {Record<string, string>} [options.files] source by file name,
 *   relative to the output directory
 */
export const subpathsDts = ({ deprecatedNamespaces, files = {} }) => ({
  name: 'subpaths-dts',
  renderChunk(code) {
    for (const [namespace, message] of Object.entries(deprecatedNamespaces)) {
      const declaration = `declare namespace ${namespace} {`;
      if (!code.includes(declaration)) {
        this.error(`Namespace "${namespace}" not found in the declaration bundle`);
      }
      code = code.replace(declaration, `/** @deprecated ${message} */\n${declaration}`);
    }
    return { code, map: null };
  },
  generateBundle() {
    for (const [fileName, source] of Object.entries(files)) {
      this.emitFile({ type: 'asset', fileName, source });
    }
  },
});

const getRollupPlugins = (pkg, minify) => {
  return [
    esbuild({
      minify,
    }),
    nodeResolve({
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
      // resolveOnly: [/^@tabler\/.*$/],
    }),
    license({
      banner: `@license ${pkg.name} v${pkg.version} - ${pkg.license}

This source code is licensed under the ${pkg.license} license.
See the LICENSE file in the root directory of this source tree.`,
    }),
    visualizer({
      sourcemap: false,
      filename: `stats/${pkg.name}${minify ? '-min' : ''}.html`,
    }),
  ].filter(Boolean);
};

export const getRollupConfig = (pkg, outputFileName, bundles, globals) => {
  return bundles
    .map(
      ({
        inputs,
        format,
        minify,
        preserveModules,
        outputDir = 'dist',
        extension = 'js',
        exports = 'named',
        outputFile,
        external = [],
        paths,
      }) => {
        return inputs.map((input) => ({
          input,
          plugins: getRollupPlugins(pkg, minify),
          external: [...Object.keys(globals), ...external],
          output: {
            name: pkg.name,
            ...(preserveModules
              ? {
                  dir: `${outputDir}/${format}`,
                  entryFileNames: `[name].${extension}`,
                }
              : {
                  file:
                    outputFile ??
                    `${outputDir}/${format}/${outputFileName}${minify ? '.min' : ''}.${extension}`,
                }),
            format,
            // The output is not minified and mostly generated icon modules, so
            // source maps add little for debugging but would be about 70% of
            // the published package size.
            sourcemap: false,
            preserveModules,
            preserveModulesRoot: 'src',
            globals,
            exports,
            paths,
          },
        }));
      },
    )
    .flat();
};
