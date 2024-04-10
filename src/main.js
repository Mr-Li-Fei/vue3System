// import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";


import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(ElementPlus);
app.use(Particles, {
    init: async engine => {
        await loadSlim(engine);
    }
});
app.use(createPinia());
app.use(router);

app.mount('#app');