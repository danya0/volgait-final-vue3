export default {
  namespaced: true,
  state: {
    opened: false,
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
