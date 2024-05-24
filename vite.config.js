import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置单文件组件中jsx 得使用，
    vueJsx(),
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
