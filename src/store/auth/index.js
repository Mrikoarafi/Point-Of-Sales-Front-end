import axios from 'axios'
const { url } = require('../../helpers/env')
const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}
const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}
const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/api/v1/users/login`, payload)
        .then(response => {
          localStorage.setItem('token', response.data.data.token)
          localStorage.setItem('refreshToken', response.data.data.refreshToken)
          localStorage.setItem('id', response.data.data.id)
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  logout (context) {
    return new Promise(resolve => {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('id')
      localStorage.removeItem('cart')
      resolve()
    })
  },
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/api/v1/users/register`, payload)
        .then(response => {
          resolve(response.data.message)
        })
        .catch(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('Gagal Register')
        })
    })
  },
  resetPassword (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/api/v1/users/send-email`, { email: payload })
        .then(response => {
          resolve(response.data.message)
        })
        .catch(err => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(err)
        })
    })
  },
  confirmPassword (context, payload) {
    return new Promise((resolve, reject) => {
      axios

        .post(`${url}/api/v1/users/ubah-pass`, payload)
        .then(response => {
          resolve(response.data.message)
        })
        .catch(err => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
