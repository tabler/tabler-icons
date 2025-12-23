import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'exclude-react-native',
      resolveId(id) {
        if (id === 'react-native' || id.startsWith('react-native/')) {
          return { id: 'react-native', external: true }
        }
        if (id === 'react-native-svg') {
          return { id: 'react-native-svg', external: true }
        }
      },
    },
  ],
  optimizeDeps: {
    exclude: ['react-native', 'react-native-svg'],
  },
  build: {
    rollupOptions: {
      external: (id) => {
        return id === 'react-native' || id === 'react-native-svg' || id.startsWith('react-native/')
      },
    },
    commonjsOptions: {
      exclude: ['react-native', 'react-native-svg'],
      transformMixedEsModules: true,
    },
  },
})
