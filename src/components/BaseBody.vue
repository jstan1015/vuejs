<template>
<div class="row container-fluid mx-auto vertical-center">
  <section class="mb-4 mb-lg-3">
      <div class="row mt-3">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <BaseInfoBoxContainer />
        </div>
        <div class="col-lg-7 mb-4 mb-lg-0">
          <BaseChartContainer />
        </div>
      </div>
    </section>
</div>
</template>

<script>
import BaseInfoBoxContainer from './BaseInfoBoxContainer.vue'
import BaseChartContainer from './BaseChartContainer.vue'

export default {
  name: 'BaseBody',
  components: {
    BaseInfoBoxContainer,
    BaseChartContainer
  },

}
</script>

<style>
.vertical-center {
  min-height: 100%;
  display: flex;
  align-items: center;
}

.card-header{
  position: relative;
  padding: 2rem 2rem;
  border-bottom: none;
  background-color: white;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
}

.card-heading {
    margin-bottom: 0;
    font-size: .9rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2em;
}
</style>
