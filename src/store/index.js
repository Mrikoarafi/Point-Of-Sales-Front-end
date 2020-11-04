import Vue from 'vue'
import Vuex from 'vuex'
// menginisialkan index di getfoods sebagai produk
import produk from './getFoods/'
import category from './getCategory/'
import auth from './auth'

// gunakan vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // mengambil semua data dari folder getCategory dan produk di store
    auth,
    produk,
    category
  }
})
