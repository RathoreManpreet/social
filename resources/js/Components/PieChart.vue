<template>
  <div class="w-full h-full bg-gray-800 rounded-lg shadow p-4 md:p-6">
    <div class="flex flex-wrap justify-between items-center">
            <h3 class="text-lg text-white font-bold mb-2 sm:mb-0">Platform Distribution</h3>
            <select id="selectPmetric" class="bg-gray-700 text-white p-2 rounded w-full sm:w-auto sm:max-w-xs">
                <option>Views</option>
                <option>Comments</option>
                <option>Followers</option>
            </select>
        </div>
    <div class="h-full" id="pie-chart"></div>
  </div>
</template>

<script>
import ApexCharts from 'apexcharts'
export default {
  mounted() {
    console.log('Mounted lifecycle hook called');
    if (document.getElementById("pie-chart") && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("pie-chart"), this.getChartOptions());
      chart.render().then(() => {
        console.log('Chart rendered successfully');
      }).catch(error => {
        console.error('Error rendering chart:', error);
      });
    } else {
      console.error('Element not found or ApexCharts is undefined');
    }
  },
  methods: {
    getChartOptions() {
      return {
        series: [97.8, 2.2],
        colors: ["#3B82F6", "#06B6D4"],
        chart: {
          height: '100%',
          width: '100%',
          type: "pie",
          background: '#1F2937',
          foreColor: '#9CA3AF',
        },
        stroke: {
          colors: ["#374151"],
          lineCap: "",
        },
        plotOptions: {
          pie: {
            labels: {
              show: true,
            },
            size: "100%",
            dataLabels: {
              offset: -25,
            },
          },
        },
        labels: ["Facebook", "Youtube"],
        dataLabels: {
          enabled: true,
          style: {
            fontFamily: "Inter, sans-serif",
            colors: ["#F9FAFB"],
          },
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif",
          labels: {
            colors: '#9CA3AF',
          },
        },
        theme: {
          mode: 'dark',
        },
        tooltip: {
          theme: 'dark',
        },
      };
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
