<template>
  <button>
    <slot/>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
button {
  transition: .3s;
  outline: none;
  border: none;
  padding: 12px 33px;
  background: var(--button);
  background-size: 100% 100%;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FFFFFF;

  &:hover {
    cursor: pointer;
    background-size: 200% 100%;
  }
}
</style>
