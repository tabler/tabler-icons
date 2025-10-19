import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig(({ mode }) => ({
  plugins: [
    svelte({
      compilerOptions: { hmr: false },
    }),
  ],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupVitest.ts',
  },
}));
