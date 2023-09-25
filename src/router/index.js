import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './route'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    ...routes
  ]
})

export default router
