export default {
  namespaced: true,
  state: {
    fullscreen: false,
    zoom: false,
    blocks: true
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
  }
}
