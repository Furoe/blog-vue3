import { RouteRecordRaw } from "vue-router"
import Main from '@/components/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/model',
    name: '3D',
    component: () => import('@/view/3D/index.vue')
  }
]
export default routes
