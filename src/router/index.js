import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import routes from '@/router/config.js'

let isHasAddRoute = false;

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

//利用路由拦截， 验证权限路径（鉴权）
router.beforeEach((to, from, next) => {
  if(to.name === 'login') {
    return next();
  } else {
    const hasToken = localStorage.getItem('token');
    if(!hasToken) {
      // throw(new Error('Auth Error'));
      return next({path: '/'});
    }
    
    if(!isHasAddRoute) {
      //避免死循环 需要加个判断，就是第一次走到这里添加动态路由， 后面在走到这里就不要再走这里了，
      // 注意添加main 得嵌套路由home(也就是子路由)， 父组件中需要又<router-view/>
      routes.forEach(route => {
        router.addRoute('main', route);
      });
      // 这个传参是因为addRoute是异步得， 直接只用next() 获取不到要跳转得动态路由，需要next(参数)再次触发beforeEach,
      // 但是要注意避免死循环, 通过设置isHasAddRoute = true,来避免死循环
      isHasAddRoute = true;
      next({path: to.fullPath});
    } else {
      next();
    }
    
  }
})

export default router
