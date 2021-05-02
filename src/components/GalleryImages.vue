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
@import "../styles/media";

.gallery-images {
  transition: all .3s ease;
  display: flex;
  flex-direction: column;
  width: 148px;
  flex-shrink: 0;
  background: var(--panel);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    @include mobile {
      height: 5px;
    }
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px var(--panel);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--button);
    border-radius: 5px;
  }

  @include mobile {
    height: 90px;
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
</style>
