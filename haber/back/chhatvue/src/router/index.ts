import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import login from '../views/user/Registro.vue';
import Registro from '../views/user/register.vue';
import Chat from '../views/user/ChatScket.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login/user',
    name: 'login',
    component: login,
  },
  {
    path: '/registro/user/',
    name : 'registro',
    component: Registro,
  },
  {
    path: '/chat/user',
    name : 'chat',
    component: Chat,
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
