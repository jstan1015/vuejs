<template>
  <button type="button" class="btn" v-bind="{class:btnClass}" @click="showChart(chartID)">View Chart</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    style: {
      type: String,
      default: null
    },
    chartID: {
      type: String,
      default: null
    },
  },
  computed: {
    btnClass() {
      return "btn-"+this.style
    },
  },
  methods: {
    showChart(id){
        var canvas = document.querySelectorAll("canvas");
        canvas.forEach(x => x.style.display = "none");
        document.getElementById(id).style.display = "block"  
    }
  },
}
</script>