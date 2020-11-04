import axios from 'axios'
const { url } = require('../../helpers/env')
const state = () => {
  return {
    category: []
  }
}

const getters = {
  getAllCategory (state) {
    return state
  }
}

const mutations = {
  SET_CATEGORY (state, payload) {
    state.category = payload
  }
}

const actions = {
  async getAllCategory (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/api/v1/category/getAll`)
        .then(response => {
          context.commit('SET_CATEGORY', response.data.data)
        })
        .catch(err => {
          console.log(err)
        })
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
