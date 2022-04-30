import { getRepoReadme } from '../../api/rest/readmeRepo'

export default {
  namespaced: true,
  state: {
    repos: []
  },
  getters: {
    getRepositoryByIndex: (state) => (index) => {
      return state.repositories[index]
    }
  },
  mutations: {
    SET_REPOS (state, repos) {
      state.repos = repos
    }
  },
  actions: {
    async GET_README (store, { id, owner, repo }) {
      try {
        const { data } = await getRepoReadme({ owner, repo })
        console.log(data)
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}
