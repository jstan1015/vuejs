<template>
<nav class="navbar navbar-expand-lg w-100" :class="[$store.getters.doneChangeTheme ? 'navbar-light bg-light' : 'navbar-dark bg-dark']">
  <div class="container-fluid">
    <a class="navbar-brand">
      <span class="h4">Covid Statistic MY</span>
    </a>
    <ThemeSwitcher />
    
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchInput">
        <button class="btn btn-outline-success" type="button" @click="search">Search</button>
      </form>
    </div> -->
  </div>
</nav>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue'

export default {
  name: 'BaseHeader',
  components:{
    ThemeSwitcher,
  },
  props: {
    isDefaultTheme: {
      type: Boolean
    },
  },
  data() {
    
  },
  mounted () {    
    console.log(this.isDefaultTheme)
  }
}
</script>

<style scoped>
nav{
  position:fixed;
  z-index: 999;
  top:0;
}

.navbar-brand{
  margin-left: 20px;;
}

span{
  font-family: Georgia, serif;
}

</style>
