<template>
  <main>
    <app-button v-if="!opened" @click="openApp">Открыть</app-button>
    <gallery v-show="opened"></gallery>
  </main>
</template>

<script>
import AppButton from "./components/AppButton";
import Gallery from "./components/Gallery";
import {mapMutations, mapState} from 'vuex'

export default {
  components: {Gallery, AppButton},
  computed: {
    ...mapState('AppModule', ['opened'])
  },
  methods: mapMutations('AppModule', ['openApp']),
  name: 'App'
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  body {
    overflow: hidden;
    color: #FFFFFF;
  }
  body, main {
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--main-bg-color);
  }
</style>
