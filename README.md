# vue3System
back-and management system with vue3 , nodejs , express，mongodb......

## jsx 得配置：
1. npm install @vuejs/plugin-vue-jsx
2. vie.config.js 文件
```
    import vueJsx from '@vuejs/plugin-vue-jsx';
    export default defineConfig({
        plugins: [
           vueJsx(),
        ]
    })
```