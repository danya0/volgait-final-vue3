<template>
  <div
      class="gallery"
      :class="{
        fullscreen,
        'hide-blocks': !blocks,
        zoom,
        appears,
        disappears,
        'switch-image': switchImage
      }"
  >
    <gallery-view
        :image="images[currentImage].image"
        :title="images[currentImage].title"
        :subtitle="images[currentImage].subtitle"
    ></gallery-view>
    <gallery-control
        :fullscreen="fullscreen"
        :zoom="zoom"
        :currentImage="currentImage + 1"
        :numberOfPictures="images.length"
        @closeEvent="closeEvent"
        @fullEvent="toggleFullScreen"
        @zoomEvent="toggleZoom"
        @blocksEvent="toggleBlocks"
    />
    <gallery-images
        :images="images"
        @imageClick="imageClick"
    ></gallery-images>
  </div>
</template>

<script>
import GalleryView from "./GalleryView";
import GalleryControl from "./GalleryControl";
import GalleryImages from "./GalleryImages";
import {mapActions, mapMutations, mapState} from "vuex";
import checkMobile from "../js/responsive";

export default {
  data() {
    return {
      // variable for show animation
      appears: true,
      disappears: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.appears = false
    }, 2000)
    checkMobile(this.setFullScreen)
  },
  computed: {
    ...mapState('GalleryStateModule', ['fullscreen', 'zoom', 'blocks', 'switchImage']),
    ...mapState('GalleryImagesModule', ['images', 'currentImage']),
  },
  methods: {
    ...mapMutations('GalleryStateModule', ['toggleFullScreen', 'toggleBlocks', 'toggleZoom', 'setFullScreen']),
    ...mapActions('GalleryStateModule', ['setSwitchImage']),
    ...mapActions('GalleryImagesModule', ['changeImage']),
    ...mapMutations('AppModule', ['closeApp']),
    closeEvent() {
      this.disappears = true
      setTimeout(() => {
        this.disappears = false
        this.closeApp()
      }, 500)
    },
    imageClick(index) {
      if (index !== this.currentImage && !this.switchImage) {
        this.setSwitchImage()
        this.changeImage(index)
      }
    }
  },
  components: {GalleryImages, GalleryControl, GalleryView}
}
</script>

<style lang="scss">
@import "../styles/media";
.gallery {
  position: relative;
  z-index: 3;
  transition: .3s ease;
  height: 780px;
  width: 85%;
  display: flex;

  // classes for animation of appears and disappears
  &.appears {
    animation: galleryAnim 2s ease forwards;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: var(--backhole);
      animation: beforeAnim 2s ease forwards;
    }

    @keyframes galleryAnim {
      from {
        transform: translateX(-200%);
      }
      to {
        transform: translateX(0);
      }
    }
    @keyframes beforeAnim {
      from {
        transform: translateX(-200%);
      }
      to {
        transform: translateX(200%);
      }
    }
  }

  &.disappears {
    transition: opacity .3s ease;
    opacity: 0;
  }

  // class for animation of switching images
  &.switch-image {
    .gallery-view::before {
      animation: switchImageAnim 1s ease forwards;
    }

    @keyframes switchImageAnim {
      from {
        z-index: 1;
        transform: translateX(100%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }

  // classes for modes
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
      @media (min-width: 700px) {
        width: 0;
      }
      @include mobile {
        height: 0;
      }
    }
  }

  // response
  @include mobile {
    flex-direction: column;
  }
}
</style>
