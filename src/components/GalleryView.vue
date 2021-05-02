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
export default {
  props: ['image', 'title', 'subtitle'],
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url("${this.image}")`
      }
    }
  }
}
</script>

<style scoped lang="scss">
.gallery-view {
  position: relative;
  background: var(--backhole);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  // for switch image animation
  &:before {
    content: "";
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    z-index: 3;
    transform: translateX(100%);
    background: var(--backhole);
  }

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
