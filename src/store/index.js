import { createStore, createLogger } from 'vuex'
import AppModule from "./AppModule";
import GalleryStateModule from "./GalleryStateModule";

export default createStore({
  plugins: [createLogger()],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    AppModule,
    GalleryStateModule
  }
})
