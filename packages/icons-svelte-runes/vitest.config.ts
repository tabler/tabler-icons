import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '../../.build/vitest-setup.mjs',
  },
  resolve: {
    conditions: ['browser'],
  },
});
