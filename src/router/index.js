import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Fooditems from '../views/FoodItems.vue'
import Details from '../views/Details.vue'
import Login from '../views/Login.vue'
import History from '../views/History'
import ConfirmPassword from '../views/ConfirmPassword'
Vue.use(VueRouter)
// meta - requires auth untuk ngecek apakah sudah login atau belum
const routes = [
  {
    path: '/home',
    name: 'Food Items',
    component: Fooditems,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/details/:id_details',
    name: 'Details',
    component: Details,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/confirm-password',
    name: 'ConfirmPassword',
    component: ConfirmPassword
  },
  {
    path: '/history',
    name: 'history',
    component: History,
    meta: {
      requiresAuth: true
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// di cek dulu apakah ada requiresauth/sudah login atau engga
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLogin']) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
export default router
