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
    path :'/detailPage',
    name :'detailPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue')
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
  },
  {
    path : '/serachpage',
    name : 'serachpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchIdView.vue')
  },
  {
    path:'/detailPage',
    name:'detailPage',
    component: 'information',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
