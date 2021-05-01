<template>
  <div class="gallery-view">
    <div class="view">
      <div
          class="image-block"
          :style="imageStyle"
      ></div>
    </div>
    <div class="text">
      <div class="text__title">{{ title }}</div>
      <div class="text__subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
export default {
  props: ['image', 'title', 'subtitle'],
  computed: {
    imageStyle() {
      console.log('image', this.image)
      return {
        backgroundImage: `url("${this.image}")`
      }
    }
  }
}
</script>

<style scoped lang="scss">
.gallery-view {
  background: var(--backhole);
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .view {
    flex-grow: 1;
    overflow: hidden;

    .image-block {
      transition: transform .3s ease;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }

  .text {
    padding: 21px 0 16px 18px;
    background: var(--panel);

    &__title {
      margin-bottom: 10px;
      font-family: Montserrat, sans-serif;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.1em;
    }

    &__subtitle {
      font-family: Philosopher, sans-serif;
      font-style: italic;
      font-weight: bold;
      font-size: 12px;
      line-height: 13px;
      display: flex;
      align-items: center;

      color: #5D5F74;
    }
  }
}
</style>
