<template>
  <div class="image-component" :class="{'underline': active, 'wait': switchImage}">
    <img :src="image" :alt="title">
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  props: ['image', 'title', 'active'],
  computed: mapState('GalleryStateModule', ['switchImage'])
}
</script>

<style scoped lang="scss">
.image-component {
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  &:after {
    content: "";
    transition: .3s ease;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--button);
  }

  &.underline {
    &:after {
      width: 100%;
      left: 0;
    }
  }

  &:before {
    transition: opacity .3s ease;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: 0;
  }

  &:hover:before {
    opacity: .1;
  }

  &.wait:before {
    cursor: not-allowed;
    opacity: .5;
  }
}
</style>
