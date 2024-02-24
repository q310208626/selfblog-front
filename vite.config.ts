import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Console } from 'node:console';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    open: true,
    proxy: {
      '/selfblog': {
        target: 'http://localhost:8081/',
        // ws:true,
        changeOrigin: true,
        // rewrite:(path) => path.replace(/^\/selfblog/, ''),
      }
    }
  },
});



