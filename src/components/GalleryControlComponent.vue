<template>
  <div class="control-component" :class="{nohover}">
    <img v-if="image" :src="image" :alt="alt">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    alt: String,
    nohover: {
      require: false,
      validator(value) {
        return ['', true].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped lang="scss">
$bg: #221D33;
  .control-component {
    transition: background-color .3s ease;
    height: 65px;
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(&:first-child) {
      border-top: 2px solid #383B52;
    }

    font-family: Montserrat, sans-serif;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #C6C6D2;

    &:not(.nohover):hover {
      background-color: darken($bg, 2%);
      cursor: pointer;
    }
  }
</style>
