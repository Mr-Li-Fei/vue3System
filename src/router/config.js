import Profile from '../views/home/Home.vue';
import Container from '@/views/container/Container.vue';
import UserList from '../views/user/UserList.vue';
import UserAdd from '../views/user/UserAdd.vue';
import NewsList from '../views/news/NewsList.vue';
import NewsAdd from '../views/news/NewsAdd.vue';
import ProductsAdd from '../views/products/ProductAdd.vue';
import ProductsList from '../views/products/ProductList.vue';
import NotFound from '@/views/notFound/NotFound.vue';

const routes = [
  {
    path: 'profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: 'container',
    name: 'container',
    component: Container,
  },
  {
    path: 'user-add',
    name: 'userAdd',
    component: UserAdd,
  },
  {
    path: 'user-list',
    name: 'userList',
    component: UserList,
  },
  {
    path: 'news-list',
    name: 'newsList',
    component: NewsList,
  },
  {
    path: 'news-add',
    name: 'newsAdd',
    component: NewsAdd,
  },
  {
    path: 'products-add',
    name: 'productAdd',
    component: ProductsAdd,
  },
  {
    path: 'products-list',
    name: 'productsList',
    component: ProductsList,
  },
  // set 404 page
  {
    path: '/:notFound(.*)*',
    name: 'notFOund',
    component: NotFound,
  }
]

export default routes;