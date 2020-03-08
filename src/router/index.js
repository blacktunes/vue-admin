import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login/Login.vue'
import Index from '../views/Console/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: 'Index',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Index',
        component: Index
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
