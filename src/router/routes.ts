import { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/Home.vue')
  },
  {
    path: '/model',
    name: '3D',
    component: () => import('@/view/3D/index.vue')
  }
]
export default routes
