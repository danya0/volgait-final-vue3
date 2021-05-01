<template>
  <div class="gallery" :class="{fullscreen, 'hide-blocks': !blocks, zoom}">
    <gallery-view
        image="img/images/Image1.jpg"
        title="Сирень"
        subtitle="ОАоаоао оаоа лавал лвалвд двадв."
    ></gallery-view>
    <gallery-control
        :fullscreen="fullscreen"
        :zoom="zoom"
        @fullEvent="toggleFullScreen"
        @zoomEvent="toggleZoom"
        @blocksEvent="toggleBlocks"
    />
    <gallery-images :images="images"></gallery-images>
  </div>
</template>

<script>
import GalleryView from "./GalleryView";
import GalleryControl from "./GalleryControl";
import GalleryImages from "./GalleryImages";
import {mapMutations, mapState} from "vuex";

export default {
  data() {
    return {
      images: [
        {image: 'img/images/Image1.jpg', title: 'Сирень'},
        {image: 'img/images/Image2.jpg', title: 'не Сирень'}
      ]
    }
  },
  computed: {
    ...mapState('GalleryStateModule', ['fullscreen', 'zoom', 'blocks'])
  },
  methods: {
    ...mapMutations('GalleryStateModule', ['toggleFullScreen', 'toggleBlocks', 'toggleZoom'])
  },
  components: {GalleryImages, GalleryControl, GalleryView}
}
</script>

<style lang="scss">
.gallery {
  transition: .3s ease;
  height: 780px;
  width: 85%;
  display: flex;

  &.zoom {
    .image-block {
      transform: scale(2);
    }
  }

  &.fullscreen {
    width: 100%;
    height: 100%;
  }

  &.hide-blocks {
    .gallery-images {
      width: 0;
    }
  }
}
</style>
