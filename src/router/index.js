import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './route'
import LoginPage from '../views/loginPage/LoginPage.vue'
import Cookie from 'js-cookie'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      name: '登录页面',
      component: LoginPage,
      meta: { icon: 'UserFilled' }
    },
    ...routes
  ]
})

router.beforeEach(async (to) => {
  if (!Cookie.get('token') && to.path !== '/login') {
    return { path: '/login' }
  }
})

export default router
