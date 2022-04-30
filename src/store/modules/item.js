import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    ITEMS (state) {
      return state.items
    }
  },
  mutations: {
    SET_USER_DATA (state, items) {
      state.items = items
    }
  },
  actions: {
    async GET_USER_DATA ({ commit }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_USER_DATA', data.items)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
