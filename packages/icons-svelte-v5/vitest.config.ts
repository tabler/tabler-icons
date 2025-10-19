import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        hmr: false
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupVitest.ts',
    alias: [
      { find: /^svelte$/, replacement: "svelte/internal" }
    ]
  },
});
