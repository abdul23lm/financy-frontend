import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/finances',
    name: 'finances.index',
    component: () => import(/* webpackChunkName: "about" */ '../views/finances/Index.vue'),
    meta: { auth:true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/auth/Login.vue'),
    meta: { guest:true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/auth/Register.vue'),
    meta: { guest:true }    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'bg-blue-500 text-white rounded-lg'
})

router.beforeEach((to, from, next) => {
  // console.log(to.meta.guest);
  // console.log(store.getters['auth/authenticated']);

  if (to.meta.auth && !store.getters['auth/authenticated']) router.push('/login')
  if (to.meta.guest && store.getters['auth/authenticated']) router.push('/')

  next()
})


export default router
