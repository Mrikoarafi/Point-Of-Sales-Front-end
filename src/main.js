import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue2Filters from 'vue2-filters'
// import vuex di store
import store from '../src/store'
import axios from 'axios'
import { url } from './helpers/env'

axios.defaults.headers = {
  token: localStorage.getItem('token')
}
axios.interceptors.response.use(function (response) {
  if (response.data.message === 'Token Expired,Authentikasi GAGAL!') {
    return new Promise((resolve, reject) => {
      const refreshToken = localStorage.getItem('refreshToken')
      axios
        .post(`${url}/api/v1/users/refresh-token`, {
          refreshToken: refreshToken
        })
        .then(result => {
          localStorage.setItem('token', result.data.data.token)
        })
        .catch(err => {
          return err
        })
    })
  } else {
    return response
  }
})

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vue2Filters)

new Vue({
  router,
  // deklarasi store vuex
  store,
  render: h => h(App)
}).$mount('#app')
