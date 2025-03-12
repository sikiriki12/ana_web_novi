import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Improve build performance
    minify: 'terser',
    // Create a clean build
    emptyOutDir: true,
    // Inline smaller assets
    assetsInlineLimit: 4096,
  },
  server: {
    hmr: {
      overlay: true,
      // Force the HMR websocket to always stay connected
      clientPort: null,
    },
    // Improve file watching performance
    watch: {
      usePolling: true,
      interval: 100,
    },
    // Automatically open the browser on server start
    open: true,
  },
})
