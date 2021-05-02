<template>
  <div class="gallery-control">
    <gallery-control-component
        alt="close"
        :image="close"
        @click="$emit('closeEvent')"
    />
    <gallery-control-component
        alt="fullscreen"
        :image="fullscreen ? fullScreenOff : fullScreenOn"
        @click="$emit('fullEvent')"
    />
    <gallery-control-component
        alt="zoom"
        :image="zoom ? zoomOut : zoomIn"
        @click="$emit('zoomEvent')"
    />
    <gallery-control-component
        alt="blocksImg"
        :image="blocksImg"
        @click="$emit('blocksEvent')"
    />
    <gallery-control-component :nohover="true" >{{ currentImage }}/{{ numberOfPictures }}</gallery-control-component>
  </div>
</template>

<script>
import close from '../assets/IconClosePath.svg'
import fullScreenOff from '../assets/IconFullScreenOff.svg'
import fullScreenOn from '../assets/IconFullScreenOn.svg'
import zoomIn from '../assets/IconZoomIn.svg'
import zoomOut from '../assets/IconZoomOut.svg'
import blocksImg from '../assets/IconBlocks.svg'
import GalleryControlComponent from "./GalleryControlComponent";

export default {
  emits: ['closeEvent', 'fullEvent', 'zoomEvent', 'blocksEvent'],
  props: ['fullscreen', 'zoom', 'currentImage', 'numberOfPictures'],
  data() {
    return {
      close,
      fullScreenOff,
      fullScreenOn,
      zoomIn,
      zoomOut,
      blocksImg
    }
  },
  components: {GalleryControlComponent}
}
</script>

<style scoped lang="scss">
  .gallery-control {
    display: flex;
    flex-direction: column;
    background: var(--panel-alternative);
  }
</style>
