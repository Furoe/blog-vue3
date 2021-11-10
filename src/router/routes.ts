import { RouteRecordRaw } from "vue-router"
import Main from '@/components/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: 'index',
    component: Main
  },
  {
    path: '/index',
    name: 'home',
    component: () => import('@/view/Home.vue')
  },
  {
    path: '/model',
    name: '3D',
    component: () => import('@/view/3D/index.vue')
  },
  {
    path: '/ebooks',
    name: 'ebooks',
    component: () => import('@/view/ebooks/index.vue')
  }
]
export default routes
