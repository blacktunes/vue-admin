// token验证
import router from './index'
import { getToken, removeToken, removeUsername } from '@/assets/js/cookies'

const whiteRouter = ['/login']

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      removeToken()
      removeUsername()
      next()
    } else {
      next()
    }
  } else {
    if (whiteRouter.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
