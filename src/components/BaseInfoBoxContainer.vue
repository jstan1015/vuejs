<template>
<div class="row container mx-auto">
    <div class="mb-3">
        <div class="card-widget-body">
            <div class="dot me-2" :class="[isActive ? 'available' : 'not-available']"></div>
            <div>
                <small class="text-gray-500 mb-5">Last Updated: <b>{{isActive ? lastUpdatedDate : "-"}}</b></small>
            </div>
        </div>
        <div class="card-widget-body">
            <div class="dot me-2" :class="[isActive ? 'available' : 'not-available']"></div>
            <div>
                <small class="text-gray-500 mb-5">Source: 
                    <a v-if="isActive" :href="source" target="_blank">{{ source }}</a>
                    <span v-else>-</span>
                </small>
            </div>
        </div>
    </div>
    <BaseInfoBox v-bind="{ 
        title: 'Tested Positive',
        count: testedPositive,
        style: 'primary',
        chartID: 'chart0',
        icon: ['fas', 'head-side-virus'],
        }" />
    <BaseInfoBox v-bind="{ 
        title: 'Recovered',
        count: recovered,
        style: 'success',
        chartID: 'chart1',
        icon: ['fas', 'medkit'],
        }"/>
    <BaseInfoBox v-bind="{ 
        title: 'Active Cases',
        count: activeCases,
        style: 'warning',
        chartID: 'chart2',
        icon: ['fas', 'file-medical'],
        }"/>
    <BaseInfoBox v-bind="{ 
        title: 'In ICU',
        count: inICU,
        style: 'danger',
        chartID: 'chart3',
        icon: ['fas', 'procedures'],
        }"/>
</div>
</template>

<script>
import BaseInfoBox from './BaseInfoBox.vue'

export default {
  name: 'BaseInfoBoxContainer',
  components: {
    BaseInfoBox,
  },
  data(){
      return{
          testedPositive: 0,
          activeCases: 0,
          recovered: 0,
          deceased: 0,
          inICU: 0,
          lastUpdatedDate: null,
          source: null
      } 
  },
  mounted () {
    this.axios.get('https://api.apify.com/v2/key-value-stores/6t65lJVfs3d8s6aKc/records/LATEST?disableRedirect=true')
      .then(response => {
        this.data = response.data
        this.testedPositive = this.data.testedPositive
        this.activeCases = this.data.activeCases
        this.recovered = this.data.recovered
        this.deceased = this.data.deceased
        this.inICU = this.data.inICU
        this.lastUpdatedDate = this.changeDateToLocale(this.data.lastUpdatedAtApify)
        this.source = this.data.sourceUrl
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
  methods:{
    changeDateToLocale(date){
        let formattedDate = new Date(date).toLocaleDateString('en-GB')
        let formattedTime = new Date(date).toLocaleTimeString()
        return formattedDate+" "+formattedTime
    }
  },
  computed: {
    isActive() {
      if(this.lastUpdatedDate == null){
           return false
      }
      return true
    }
  }
}
</script>

<style scoped>
.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-grow: 0;
    flex-shrink: 0;
}

.available {
    background-color: #35b653 !important;
}

.not-available {
    background-color: #f01818cd !important;
}

.card-widget-body {
    display: flex;
    align-items: center;
    flex-grow: 1;
}

a:link{
    text-decoration: none;
}

a:visited{
    color: purple;
}
</style>
