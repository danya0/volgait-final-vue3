<template>
  <div class="image-component">
    <img :src="image" :alt="title">
    <div class="underline"></div>
  </div>
</template>

<script>
export default {
  props: ['image', 'title']
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
  .underline {
    position: absolute;
    left: 0; right: 0; bottom: 0;
    height: 2px;
    background: var(--button);
  }
  &:before {
    transition: opacity .3s ease;
    content: "";
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    background: #000;
    opacity: 0;
  }
  &:hover:before {
    opacity: .3;
  }
}
</style>
