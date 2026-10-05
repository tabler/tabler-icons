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
