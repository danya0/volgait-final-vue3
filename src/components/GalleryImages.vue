<template>
  <div class="gallery-images">
    <gallery-images-component v-for="img in images" :image="img.image" :title="img.title"/>
  </div>
</template>

<script>
import GalleryImagesComponent from "./GalleryImagesComponent";
export default {
  components: {GalleryImagesComponent},
  props: {
    images: Array,
  }
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
}
</style>
