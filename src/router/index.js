import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/home/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (Main.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Main.vue')
    }
  ]
})

// 注意添加main 得嵌套路由home(也就是子路由)， 父组件中需要又<router-view/>
router.addRoute('main',
  {
    path: 'home',
    component: Home,
  }
);

console.log(router.getRoutes());

export default router
