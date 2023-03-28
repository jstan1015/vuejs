<template>
  <BaseHeader />
  <BaseBody />
  <BaseFooter />
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'
import BaseBody from './components/BaseBody.vue'
import BaseFooter from './components/BaseFooter.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseBody,
    BaseFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
