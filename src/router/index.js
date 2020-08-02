import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: "/login",
    name: 'Login',
    component: Login
  },
  {
    path: '/home*',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/callback',
    name: 'Callback',
    component: () => import(/* webpackChunkName: "callback" */ '../views/Callback.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
