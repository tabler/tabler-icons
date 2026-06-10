import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { Addon } from '@embroider/addon-dev/rollup';

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

export default {
  output: addon.output(),
  plugins: [
    addon.publicEntrypoints([
      'tabler-icons-ember.ts',
      'icons/index.ts',
      'icons/**/*.gts',
      'aliases.ts',
      'dynamic-imports.ts',
      'Icon.gts',
      'icons-list.ts',
      'types.ts',
    ]),
    nodeResolve({
      extensions: ['.js', '.ts', '.gts'],
    }),
    addon.dependencies(),
    babel({
      extensions: ['.js', '.gjs', '.ts', '.gts'],
      babelHelpers: 'bundled',
    }),
    addon.gjs(),
    addon.declarations('declarations', 'ember-tsc --declaration'),
    addon.clean(),
  ],
};
