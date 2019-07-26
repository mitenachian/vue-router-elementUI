import * as types from '../mutations-types'

const state = {
  LoginUserName: '',
}

const actions = {
  setUserName ({ dispatch ,commit, payload }) {
    commit(types.SET_USER, payload)
  },
  clearUserName ({ commit }) {
    commit(types.CLEAR_USER)
  },
}
const mutations = {
  [types.SET_USER] (state, payload) {
    state.LoginUserName = payload;
  },
  [types.CLEAR_USER] (state) {
    state.LoginUserName = '';
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}