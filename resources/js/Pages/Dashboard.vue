<template>
 
 <header class="header bg-gray-800 shadow-lg" id="header">
    <div class="header_toggle text-white"> 
        <i class="bx bx-menu" id="header-toggle"></i> 
    </div>
    
    <div class="flex items-center space-x-4">
       
        <a href="#" class="text-gray-300 hover:text-blue-500">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
        </a>
        <a href="#" class="text-gray-300 hover:text-red-500">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
        </a>
        <a href="#" class="text-gray-300 hover:text-green-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
        </a>
    </div>
    
</header>
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div class="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 bg-gray-800 p-4 rounded">
        <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-white">Performance Overview</h3>
           
            </div>
            <div class="mt-2 flex justify-around">
                <select id="timePeriodDropdown" class="bg-gray-700 text-white p-2 rounded" @change="fetchPerformanceData">
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>
                    <option value="allTime">All Time</option>
                </select>
                <div  class="text-white">1235views</div>
                <div class="text-white">5 comments</div>
                <div class="text-white">615 followers</div>
            </div>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-4">
          <div class="flex p-px lg:col-span-2">
            <LineChart />
          </div>
          <div class="flex p-px lg:col-span-1">
            <PieChart />
          </div>
          <div class="flex p-px lg:col-span-1">
            <DonutChart />
          </div>
          
          <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 bg-gray-800 p-4 rounded">
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-bold text-white">90-Day Performance Trend</h3>
                <select id="selectMetricDropdown1" class="bg-gray-700 text-white p-2 rounded">
                    <option value="views">Views</option>
                    <option value="likes">Likes</option>
                    <option value="comments">Comments</option>
                </select>
            </div>
            <SizeChart />
           </div>
           
           <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 bg-gray-800 p-4 rounded">
                <h3 class="text-lg font-bold text-white">Recent Videos</h3>
                <ul class="mt-2">
                    <li class="bg-gray-900 text-white p-2 mb-1 rounded">Tech review - 20K views - 2 days ago</li>
                    <li class="bg-gray-900 text-white p-2 mb-1 rounded">Product Review - 2K views - 5 days ago</li>
                    <li class="bg-gray-900 text-white p-2 mb-1 rounded">New launch - 10K views - 8 days ago</li>
                </ul>
            </div>
            <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 bg-gray-800 p-4 rounded">
            <div class="flex justify-between items-center">
                <h3 class="text-lg text-white font-bold">Daily Platform Analytics</h3>
                <select id="metricSelect" class="bg-gray-700 text-white p-2 rounded">
                    <option value="views">Views</option>
                    <option value="likes">Likes</option>
                    <option value="comments">Comments</option>
                </select>
            </div>
            <ColumnChart />
        </div>
            <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 bg-gray-800 p-4 rounded">
                <h3 class="text-lg text-white font-bold">Top Comments</h3>
                <ul class="mt-2">
                    <li class="bg-gray-900 p-2 mb-1 rounded flex items-center space-x-3">
                        <!-- Profile Picture -->
                        <img class="bg-green-300 rounded-full" src="https://via.placeholder.com/40" alt="user123">
                        <!-- Comment Content -->
                        <div>
                            <div class="text-gray-400 text-sm">@ankush</div>
                            <div class="font-medium text-white">This is a comment</div>
                        </div>
                    </li>
                    <li class="bg-gray-900 p-2 mb-1 rounded flex items-center space-x-3">
                        <!-- Profile Picture -->
                        <img class="bg-green-300 rounded-full" src="https://via.placeholder.com/40" alt="user456">
                        <!-- Comment Content -->
                        <div>
                            <div class="text-gray-400 text-sm">@raushan</div>
                            <div class="font-medium text-white">This was so helpful, thanks!</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
      </div>
      
    </div>
    
  </template>

<script setup>
import { ref } from 'vue';
import LineChart from '../Components/LineChart.vue';
import PieChart from '../Components/PieChart.vue';
import DonutChart from '../Components/DonutChart.vue';
import SizeChart from '../Components/SizeChart.vue';
import ColumnChart from '../Components/ColumnChart.vue';

const isExpanded = ref(false);

const toggleMenu = () => {
    isExpanded.value = !isExpanded.value;
};

const performanceData = ref({ views: 0, comments: 0, followers: 0 })

const fetchPerformanceData = async (event) => {
  const period = event.target.value
  try {
    const response = await fetch(`/analytics/performance?period=${period}`)
    const data = await response.json()
    performanceData.value = data
  } catch (error) {
    console.error('Error fetching performance data:', error)
  }
}

// Fetch initial data for the default period
fetchPerformanceData({ target: { value: 'daily' } })
</script>

<style scoped>
.white-header {
    background-color: white;
    color: black;
}

.l-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 75px; /* Default minimized width */
    height: 100vh;
    background-color: white;
    padding: 1rem;
    transition: 0.5s;
    z-index: 100;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.nav_logo,
.nav_link {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none;
    padding: 0.8rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    transition: 0.3s;
}

.nav_logo:hover,
.nav_link:hover {
    background-color: #f0f0f0;
}

.nav_logo-name {
    font-weight: bold;
    margin-left: 0.5rem;
}

.nav_link.active {
    background-color: #f0f0f0;
    color: #000;
}

.nav_icon,
.nav_logo-icon {
    font-size: 1.25rem;
    min-width: 2rem;
}

.nav_name {
    margin-left: 0.5rem;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}
</style>
