import { createStore, createLogger } from 'vuex'
import AppModule from "./AppModule";
import GalleryStateModule from "./GalleryStateModule";
import GalleryImagesModule from "./GalleryImagesModule";

export default createStore({
  plugins: [createLogger()],
  modules: {
    AppModule,
    GalleryStateModule,
    GalleryImagesModule
  }
})
