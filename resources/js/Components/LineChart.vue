<template>
  <div class="max-w-screen-md w-full bg-gray-800 rounded-lg shadow p-6 md:p-6">
    <div class="flex justify-between mb-2">
      <!-- Stats Section -->
      <div class="grid gap-6 grid-cols-6">
        <!-- Clicks Section -->
        <h3 class="text-lg text-white font-bold whitespace-nowrap">Cross-Platform Performance</h3>
        
        <!-- CPC Section -->
       
      </div>

      <!-- Dropdown -->
      <Menu as="div" class="relative">
        <MenuButton class="px-3 py-2 inline-flex items-center text-sm font-medium text-gray-400 focus:outline-none bg-gray-800 rounded-lg border border-gray-600 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700">
          {{ selectedPeriod }}
          <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </MenuButton>
        <MenuItems class="absolute right-0 z-10 mt-2 w-44 bg-gray-700 divide-y divide-gray-600 rounded-lg shadow">
          <div class="py-2">
            <MenuItem v-for="period in periods" :key="period" v-slot="{ active }">
              <a 
                href="#" 
                :class="[
                  active ? 'bg-gray-600 text-white' : 'text-gray-200',
                  'block px-4 py-2'
                ]"
                @click.prevent="selectPeriod(period)"
              >
                {{ period }}
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
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


