<template>
  <div id="donut-chart"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import ApexCharts from 'apexcharts'

const getChartOptions = () => ({
  series: [35.1, 5.4],
  colors: ["#1C64F2", "#E74694"],
  chart: {
    height: 320,
    width: "100%",
    type: "donut",
    background: 'transparent',
  },
  theme: {
    mode: 'dark',
    palette: 'palette1'
  },
  stroke: {
    colors: ["transparent"],
    lineCap: "",
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontFamily: "Inter, sans-serif",
            offsetY: 20,
            color: '#fff',
          },
          total: {
            showAlways: true,
            show: true,
            label: "Accounts Score 80",
            fontFamily: "Inter, sans-serif",
            fontWeight: 'bold',
            color: '#fff',
            formatter: function (w) {
              const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0)
              return '$' + sum + 'k'
            },
          },
          value: {
            show: true,
            fontFamily: "Inter, sans-serif",
            offsetY: -20,
            color: '#fff',
            formatter: function (value) {
              return value + "k"
            },
          },
        },
        size: "80%",
      },
    },
  },
  grid: {
    padding: {
      top: -2,
    },
  },
  labels: [ "Positive", "Negative"],
  dataLabels: {
    enabled: false,
    style: {
      colors: ['#fff']
    }
  },
  legend: {
    position: "bottom",
    fontFamily: "Inter, sans-serif",
    labels: {
      colors: '#fff'
    }
  },
  tooltip: {
    theme: 'dark',
    style: {
      fontSize: '14px',
      fontFamily: "Inter, sans-serif",
    }
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "k"
      },
      style: {
        colors: '#fff'
      }
    },
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return value + "k"
      },
      style: {
        colors: '#fff'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
})

onMounted(() => {
  const chartElement = document.getElementById("donut-chart")
  if (chartElement && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(chartElement, getChartOptions())
    chart.render()

    // Get all the checkboxes by their class name
    const checkboxes = document.querySelectorAll('#devices input[type="checkbox"]')

    // Function to handle the checkbox change event
    function handleCheckboxChange(event) {
      const checkbox = event.target
      if (checkbox.checked) {
        switch (checkbox.value) {
          case 'desktop':
            chart.updateSeries([15.1, 22.5, 4.4, 8.4])
            break
          case 'tablet':
            chart.updateSeries([25.1, 26.5, 1.4, 3.4])
            break
          case 'mobile':
            chart.updateSeries([45.1, 27.5, 8.4, 2.4])
            break
          default:
            chart.updateSeries([55.1, 28.5, 1.4, 5.4])
        }
      } else {
        chart.updateSeries([35.1, 23.5, 2.4, 5.4])
      }
    }

    // Attach the event listener to each checkbox
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', handleCheckboxChange)
    })
  }
})
</script>

<style scoped>
#donut-chart {
  @apply dark:bg-gray-800;
}
</style>