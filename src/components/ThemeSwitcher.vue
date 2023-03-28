<template>
    <span class="px-4" @click="$store.commit('changeTheme')" :class ="[$store.getters.doneChangeTheme ? '' : 'text-white']"
    title="Click here to change theme color">
      <font-awesome-icon :icon="['fas', 'head-side-mask']" size="lg" pull="right"/>
    </span>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  computed:{
      getLatestTheme(){
         return this.$store.getters.currentTheme
      }
   }
}
</script>

<style scoped>
span {
    cursor: pointer;
}
</style>