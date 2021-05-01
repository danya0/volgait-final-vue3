export default {
  namespaced: true,
  state: {
    opened: true,
  },
  mutations: {
    openApp(state) {
      state.opened = true
    },
    closeApp(state) {
      state.opened = false
    }
  }
}
