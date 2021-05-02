<template>
  <div class="gallery-images">
    <gallery-images-component
        v-for="(img, index) in images"
        :image="img.image"
        :title="img.title"
        :active="index === selectedImage"
        @click="$emit('imageClick', index)"
    />
  </div>
</template>

<script>
import GalleryImagesComponent from "./GalleryImagesComponent";
import {mapState} from "vuex";

export default {
  emits: ['imageClick'],
  props: {
    images: Array
  },
  computed: mapState('GalleryImagesModule', ['selectedImage']),
  components: {GalleryImagesComponent}
}
</script>

<style scoped lang="scss">
.gallery-images {
  transition: width .3s ease;
  display: flex;
  flex-direction: column;
  width: 148px;
  flex-shrink: 0;
  background: var(--panel);
  overflow-y: auto;
}
</style>
