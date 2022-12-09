import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "usuarios" */ '../views/Login.vue')
  },
  {
    path: '/medicina',
    name: 'medicina',
    component: () => import(/* webpackChunkName: "horarios" */ '../views/Medicina.vue')
  },
  {
    path: '/administrativa',
    name: 'administrativa',
    component: () => import(/* webpackChunkName: "horarios" */ '../views/Administrativa.vue')
  },
  {
    path: '/facci',
    name: 'facci',
    component: () => import(/* webpackChunkName: "horarios" */ '../views/Facci.vue')
  },
  {
    path: '/facultades',
    name: 'facultades',
    component: () => import(/* webpackChunkName: "horarios" */ '../views/Facultades.vue')
  },
  {
    path: '/horarios',
    name: 'horarios',
    component: () => import(/* webpackChunkName: "horarios" */ '../views/RegistroHorarios.vue')
  },
  {
    path: '/fechas',
    name: 'fechas',
    component: () => import(/* webpackChunkName: "horarios" */ '../views/Fechas.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router