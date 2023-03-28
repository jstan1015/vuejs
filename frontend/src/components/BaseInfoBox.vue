<template>
  <div class="small-box col-md-6 col-sm-12 col-xs-12">
    <div class="card text-center border-2 " v-bind="{class:borderClass}">
      <div class="card-body">
        <h5 class="card-title" v-bind="{class:textClass}"><font-awesome-icon :icon="icon" size="sm" /> {{title}}</h5>
        <p class="card-text fs-2 fw-bolder lh-lg" v-bind="{class:textClass}">{{count}}</p>
        <BaseButton :style="style" :chartID="chartID" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'BaseInfoBox',
  props: {
    title: {
      type: String,
      default: 'Default title'
    },
    style: {
      type: String,
      default: null
    },
    count: {
      type: Number,
      default: 0
    },
    chartID : {
      type: String,
      default: null
    },
    icon : {
      type: Array,
      default: null
    }
  },
  computed: {
    borderClass() {
      return "border-"+this.style
    },
    textClass() {
      return "text-"+this.style
    },
  },
  components : {
    BaseButton
  },
}
</script>

<style scoped>
.small-box{
    padding-bottom: 10px;
    padding-right: 10px !important;
}
.card-body{
    min-height:175px;
}
</style>