export default {
  namespaced: true,
  state: {
    images: [
      {image: 'img/images/Image1.jpg', title: 'Сирень', subtitle: 'fdsjk fdksfk fldslf lfdslf pp'},
      {image: 'img/images/Image2.jpg', title: 'не Сирень', subtitle: 'авлал влвддвд адвдав жважвж ажв жваж'}
    ],
    selectedImage: 0,
    currentImage: 0,
  },
  mutations: {
    changeImage(state, newImageIndex) {
      state.currentImage = newImageIndex
    },
    selectImage(state, idx) {
      state.selectedImage = idx
    }
  },
  actions: {
    changeImage({commit}, index) {
      commit('selectImage', index)
      setTimeout(() => {
        commit('changeImage', index)
      }, 300)
    }
  }
}
