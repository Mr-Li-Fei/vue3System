import { fileURLToPath, URL } from 'node:url'
import path from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@': path.join(__dirname, 'src'),
      '@server': path.join(__dirname, 'server'),
    }
  },
  server: {
    // 配置跨域代理
    proxy: {
      '/adminapi': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // rewrite: (path) => path.replace('/^\/adminapi/', ''),
      }
    }
  }
})
