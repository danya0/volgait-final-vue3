export default {
  namespaced: true,
  state: {
    fullscreen: false,
    zoom: false,
    blocks: true,
    switchImage: false
  },
  mutations: {
    toggleFullScreen(state) {
      state.fullscreen = !state.fullscreen
    },
    toggleZoom(state) {
      state.zoom = !state.zoom
    },
    toggleBlocks(state) {
      state.blocks = !state.blocks
    },
    toggleSwitchImage(state) {
      state.switchImage = !state.switchImage
    },
    setFullScreen(state) {
      state.fullscreen = true
    }
  },
  actions: {
    setSwitchImage({commit}) {
      commit('toggleSwitchImage')
      setTimeout(() => {
        commit('toggleSwitchImage')
      }, 1000)
    }
  }
}
