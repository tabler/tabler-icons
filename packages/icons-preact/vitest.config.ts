import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '../../.build/vitest-setup.mjs',
  },
  resolve: {
    mainFields: ['module'],
  },
});
