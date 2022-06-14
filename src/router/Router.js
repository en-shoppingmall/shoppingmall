import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path : '/set',
    name : 'set',
    component: () => import(/* webpackChunkName: "about" */ '../views/SetView.vue')
  },
  {
    path : '/event',
    name : 'event',
    component: () => import(/* webpackChunkName: "about" */ '../views/EventView.vue')
  },
  {
    path : '/flavor',
    name : 'flavor',
    component: () => import(/* webpackChunkName: "about" */ '../views/FlavorView.vue')
  },
  {
    path : '/login',
    name : 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path : '/signup',
    name : 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupView.vue')
  },
  {
    path : '/signupdetail',
    name : 'signupdetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupDetailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
