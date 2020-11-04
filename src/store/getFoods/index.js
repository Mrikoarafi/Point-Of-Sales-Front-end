import axios from 'axios'
import Swal from 'sweetalert2'
const { url } = require('../../helpers/env')

// menyimpan data
const state = () => {
  return {
    all: {
      produkss: [],
      isLoading: false
    },
    pagination: null
  }
}

// mengolah data atau mengeset data
const getters = {
  getAllProduk (state) {
    return state.all
  },
  getPagination (state) {
    return state.pagination
  }
}

// mengubah state fungsi mutations
const mutations = {
  SET_ALL_DATA (state, payload) {
    state.all.produkss = payload
  },
  SET_PILIHCATEGORY (state, payload) {
    state.all.produkss = payload
  },
  SET_ALL_LOADING (state, payload) {
    state.all.isLoading = payload
  },
  SEARCH (state, payload) {
    state.all.produkss = payload
  },
  DETAIL_USER (state, payload) {
    state.all.produkss = payload
  },
  SET_PAGINATION (state, payload) {
    state.pagination = payload
  }
}

// actions menjalankan
const actions = {
  getAllProduk (context, payload) {
    context.commit('SET_ALL_LOADING', true)
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/api/v1/produk/getall`)
        .then(response => {
          context.commit('SET_ALL_DATA', response.data.data)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          context.commit('SET_ALL_LOADING', false)
        })
    })
  },
  deleteProduk (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}/api/v1/produk/delete/${payload}`)
        .then(result => {
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  searchName (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/api/v1/produk/getall?name=${payload}`)
        .then(response => {
          if (response.data.message === 'Get all books success,from Database') {
            context.commit('SEARCH', response.data.data)
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${payload},Tidak tersedia..`
            })
          }
        })
        .catch(err => {
          return err
        })
    })
  },
  getDetailUser (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/api/v1/produk/produkdetails/${payload}`)
        .then(response => {
          context.commit('DETAIL_USER', response.data.data[0])
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  async setCategory (context, payload) {
    try {
      const result = await axios.get(
        `${url}/api/v1/category/getCategory?name=${payload}&limit=9&page=1`
      )
      context.commit('SET_PILIHCATEGORY', result.data.data, payload)
    } catch (error) {
      console.log(error.message)
    }
  },
  async paginate (context, payload) {
    context.commit('SET_ALL_LOADING', true)
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/api/v1/produk/getall?limit=9&page=${payload.page}`)
        .then(result => {
          context.commit('SET_ALL_DATA', result.data.data)
          context.commit('SET_PAGINATION', result.data.meta.totalPage)
          resolve(result.data.data)
        })
        .catch(err => {
          reject(new Error(err))
        })
        .finally(() => {
          context.commit('SET_ALL_LOADING', false)
        })
    })
  },
  sortPrice (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/api/v1/produk/getall?sort=price`)
        .then(response => {
          context.commit('SET_ALL_DATA', response.data.data)
        })
        .catch(() => {})
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
