export const state = () => ({
  dark: false
})

export const mutations = {
  setDark(state, dark) {
    state.dark = dark
  }
}

export const actions = {
  setDark({ commit }, payload) {
    commit('setDark', payload)
  }
}

export const getters = {
  dark(state) {
    return state.dark
  }
}
