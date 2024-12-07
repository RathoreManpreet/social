<template>
    <div class="max-w-screen-md w-full bg-gray-800 rounded-lg shadow p-6 md:p-6">
      <div class="flex justify-between mb-2">
        <!-- Stats Section -->
        
  
        <!-- Dropdown -->
       
      </div>
  
      <!-- Chart -->
      <div ref="chartRef"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import ApexCharts from 'apexcharts'
  
  const chartRef = ref(null)
  const selectedPeriod = ref('Metrics')
  const periods = ['views', 'comments', 'followers', 'likes', 'shares']
  
  const selectPeriod = (period) => {
    selectedPeriod.value = period
    // Here you can add logic to update the chart data based on the selected period
  }
  
  const chartOptions = {
    chart: {
      height: '100%',
      width: '100%',
      type: "line",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      background: 'transparent',
      foreColor: '#9CA3AF', // Text color for dark theme
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      x: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
      curve: 'smooth'
    },
    grid: {
      show: true,
      borderColor: '#374151', // Dark theme grid color
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26
      },
    },
    series: [
      {
        name: "Youtube",
        data: [5, 10, 5],
        color: "#3B82F6", // Updated blue for dark theme
      },
      {
        name: "Facebook",
        data: [1100, 0, 50],
        color: "#8B5CF6", // Updated purple for dark theme
      },
    ],
    legend: {
      show: false
    },
    xaxis: {
      categories: ['01 Oct ', '01 Nov', '01 Dec'],
      labels: {
        style: {
          colors: '#9CA3AF', // Text color for x-axis labels
          fontFamily: "Inter, sans-serif",
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    theme: {
      mode: 'dark',
      palette: 'palette1'
    }
  }
  
  onMounted(() => {
    const chart = new ApexCharts(chartRef.value, chartOptions)
    chart.render()
  })
  </script>
  
  
  