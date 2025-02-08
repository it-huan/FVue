import { createRouter, createWebHashHistory } from 'vue-router'
import LayOut from '../views/LayOut/LayOut.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: LayOut
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
