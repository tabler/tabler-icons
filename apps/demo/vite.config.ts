import { defineConfig } from "vite";
import { name, version } from "./package.json"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({ 
  build: {
    outDir: 'dist',
    minify: true,
    target: 'esnext'
  },
  define: {
    pkgJson: { name, version },
  },
  plugins: [
    vue(),
  ]
});


