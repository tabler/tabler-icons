// vitest.config.ts
import { defineConfig } from "file:///Users/chomik/htdocs/tabler-icons/node_modules/.pnpm/vitest@1.1.2/node_modules/vitest/dist/config.js";
import { svelte } from "file:///Users/chomik/htdocs/tabler-icons/node_modules/.pnpm/@sveltejs+vite-plugin-svelte@2.4.2_svelte@4.0.1_vite@4.0.4/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
var vitest_config_default = defineConfig({
  plugins: [
    svelte({
      hot: false
    })
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupVitest.ts",
    alias: [
      { find: /^svelte$/, replacement: "svelte/internal" }
    ]
  }
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jaG9taWsvaHRkb2NzL3RhYmxlci1pY29ucy9wYWNrYWdlcy9pY29ucy1zdmVsdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaG9taWsvaHRkb2NzL3RhYmxlci1pY29ucy9wYWNrYWdlcy9pY29ucy1zdmVsdGUvdml0ZXN0LmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hvbWlrL2h0ZG9jcy90YWJsZXItaWNvbnMvcGFja2FnZXMvaWNvbnMtc3ZlbHRlL3ZpdGVzdC5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJ1xuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSAnQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHN2ZWx0ZSh7XG4gICAgICBob3Q6IGZhbHNlLFxuICAgIH0pXG4gIF0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6ICcuL3NldHVwVml0ZXN0LnRzJyxcbiAgICBhbGlhczogW1xuICAgICAgeyBmaW5kOiAvXnN2ZWx0ZSQvLCByZXBsYWNlbWVudDogXCJzdmVsdGUvaW50ZXJuYWxcIiB9XG4gICAgXVxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJWLFNBQVMsb0JBQW9CO0FBQ3hYLFNBQVMsY0FBYztBQUV2QixJQUFPLHdCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLFlBQVksYUFBYSxrQkFBa0I7QUFBQSxJQUNyRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
