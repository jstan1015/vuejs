<template>
    <footer class="footer container-fluid" :class ="[$store.getters.doneChangeTheme ? 'bg-light' : 'bg-dark text-white']">
      <small class="text-muted fw-bold">CovidStatisticMy@2021</small>
    </footer>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style scoped>
.footer{
  padding:5px;
  position:fixed;
  bottom:0;
}
</style>