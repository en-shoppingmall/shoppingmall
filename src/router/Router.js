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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
