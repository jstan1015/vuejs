<template>
  <div class="card h-100">
    <div class="card-header" :class ="[$store.getters.doneChangeTheme ? '' : 'bg-dark text-white']">
      <h5 class="card-heading">Data Visualization</h5>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-center vertical-center" v-if="loading">
        <font-awesome-icon :icon="['fas', 'spinner']" size="lg" spin />
      </div>
      <div v-else>
        <BaseChart :label="twelveMonthsLabel" :chart-data="yearlyRecords"  />
      </div>
    </div>
  </div>
</template>

<script>
import BaseChart from './BaseChart.vue'
export default {
  name: 'BaseChartContainer',
  data : ()=> {
    return {
        loading: false,
        twelveMonthsLabel : [],
        yearlyRecords : []
    }
  },
  components : {
      BaseChart
  },
  created () {
    this.loading = true
    this.getDateLabel();
    this.getApiData(); // get all messages automatically when the page is loaded
  },
  methods: {
    getDateLabel(){
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      let twelveMonthsLabel = [];
      const d = new Date();
      let currentYear = d.getFullYear()
      let currentMonth = d.getMonth()
      for(var i = 0; i < 12; i++){
        if(i <= currentMonth){
          twelveMonthsLabel.push(monthNames[(currentMonth - i)]+" "+currentYear)
        }else{
          twelveMonthsLabel.push(monthNames[(currentMonth - i + 12)]+" "+(currentYear - 1))
        }
      }
      this.twelveMonthsLabel = twelveMonthsLabel.reverse()
    },
    getApiData () {
      this.axios.get('https://api.apify.com/v2/datasets/7Fdb90FMDLZir2ROo/items?format=json&clean=1')
      .then(response => {
        var data = response.data
        let tempYearMonth = null
        let yearMonth = null
        let date = null
        let yearlyRecords = []
        let yearlyTotalPositive = []
        let yearlyTotalRecovered = []
        let yearlyTotalICU = []
        let yearlyTotalActiveCases = []
        let count = 0
  
        for(var i = data.length - 1; i > 0; i--){

          date = new Date(data[i].lastUpdatedAtApify)
          yearMonth = date.getFullYear() + "/" + (date.getMonth()+1);
          if(tempYearMonth == null || tempYearMonth != yearMonth){
            if(count < 12){
              yearlyTotalPositive.push(data[i]['testedPositive'] || 0 )
              yearlyTotalRecovered.push(data[i]['recovered'] || 0)
              yearlyTotalActiveCases.push(data[i]['activeCases'] || 0)
              yearlyTotalICU.push(data[i]['inICU'] || 0)
              tempYearMonth = yearMonth
              count++
            }
          }
        } 

        yearlyRecords = [yearlyTotalPositive.reverse(), yearlyTotalRecovered.reverse(), yearlyTotalActiveCases.reverse(), yearlyTotalICU.reverse()]
        this.yearlyRecords = yearlyRecords

      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    }
  }
}
</script>

<style scoped>
svg{
  font-size: 50px;
}


</style>
