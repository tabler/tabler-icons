import { babel } from '@rollup/plugin-babel';
import { classicEmberSupport, ember, extensions } from '@embroider/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    classicEmberSupport(),
    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
});

