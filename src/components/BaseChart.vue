<template>
  <div id="chartContainer">
  </div>
</template>

<script>
import Chart from 'chart.js';
export default {
  props: {
    label: {
      type: Array
    },
    chartData: {
      type: Array
    },
  },
  mounted() {
    let id = null
    let chartName = null
    const chartNames = ['Total Tested Positive', 'Total Recovered', 'Total Active Cases', 'Total in ICU']
    const borderColors = ['rgba(13, 110, 253, 1)', 'rgba(25, 135,	84, 1)', 'rgba(255, 193, 7, 1)', 'rgb(220,53,69, 1)']
    const backgroundColors = ['rgba(0, 0, 255, 0.6)', 'rgba(25, 135,	84, 0.6)', 'rgba(255, 193, 7, 0.6)', 'rgb(220, 53, 69, 0.6)']
    for(const x in this.chartData){
      id = "chart"+ [x]
      var canvas = document.createElement("canvas");
      canvas.id = id;
      var chartContainer = document.getElementById("chartContainer")
      chartContainer.appendChild(canvas);

      var ctx = document.getElementById(id)
      chartName = chartNames[x]
      this.createChart(ctx, chartName, borderColors[x], backgroundColors[x], this.chartData[x])
      if(x > 0){
        document.getElementById(id).style.display = "none";
      }
    }
  
  },
  methods: {
    createChart(ctx, chartName, borderColor, bgColor, data){
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.label,
          datasets: [{
            label: chartName,
            data: data,
            fill: true,
            borderColor: borderColor,
            backgroundColor: bgColor,
            tension: 0.1
          }]
        },
        options: {
          title: {
            display: true,
            fontSize: 16,
            text: chartName+" ("+this.label[0]+" - "+this.label[this.label.length-1]+")",
          },
          legend:{
            display: false
          },
          scales: {
            xAxes: [{
                gridLines: {
                  display: false
                }
            }],
            yAxes: [{
              ticks: {
                precision: 0,
                beginAtZero: this.checkDataSum(data),
              },
              scaleLabel: {
                display: true,
                labelString: 'Cases'
              },
              gridLines: {
                display: false
              }
            }]
          }
        }
      })
    },
    checkDataSum(data){
      let sum = data.reduce(function(a, b){
        return a + b;
      });
      return (sum == 0);
    }
  }
}
</script>