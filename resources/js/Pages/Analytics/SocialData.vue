<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Social Analytics Data</h1>

    <!-- Form to input analytics data -->
    <form @submit.prevent="submitForm" class="mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(value, key) in formData" :key="key" class="flex flex-col">
          <label :for="key" class="font-semibold">{{ formatLabel(key) }}</label>
          <input 
            type="number" 
            :id="key" 
            v-model.number="formData[key]" 
            class="border rounded px-2 py-1"
          />
        </div>
      </div>
      <button 
        type="submit" 
        class="bg-red text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
      >
        Submit Data
      </button>
    </form>

    <!-- Table to display analytics data -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th class="border-b px-4 py-2">Date</th>
            <th class="border-b px-4 py-2">Views (1 Day)</th>
            <th class="border-b px-4 py-2">Views (Weekly)</th>
            <th class="border-b px-4 py-2">Views (Monthly)</th>
            <th class="border-b px-4 py-2">Views (Yearly)</th>
            <th class="border-b px-4 py-2">Views (All Time)</th>
            <th class="border-b px-4 py-2">Likes (1 Day)</th>
            <th class="border-b px-4 py-2">Likes (Weekly)</th>
            <th class="border-b px-4 py-2">Likes (Monthly)</th>
            <th class="border-b px-4 py-2">Likes (Yearly)</th>
            <th class="border-b px-4 py-2">Likes (All Time)</th>
            <th class="border-b px-4 py-2">Comments (1 Day)</th>
            <th class="border-b px-4 py-2">Comments (Weekly)</th>
            <th class="border-b px-4 py-2">Comments (Monthly)</th>
            <th class="border-b px-4 py-2">Comments (Yearly)</th>
            <th class="border-b px-4 py-2">Comments (All Time)</th>
            <th class="border-b px-4 py-2">Shares (1 Day)</th>
            <th class="border-b px-4 py-2">Shares (Weekly)</th>
            <th class="border-b px-4 py-2">Shares (Monthly)</th>
            <th class="border-b px-4 py-2">Shares (Yearly)</th>
            <th class="border-b px-4 py-2">Shares (All Time)</th>
            <th class="border-b px-4 py-2">Followers (1 Day)</th>
            <th class="border-b px-4 py-2">Followers (Weekly)</th>
            <th class="border-b px-4 py-2">Followers (Monthly)</th>
            <th class="border-b px-4 py-2">Followers (Yearly)</th>
            <th class="border-b px-4 py-2">Followers (All Time)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in analyticsData" :key="data.id" class="hover:bg-gray-50">
            <td class="border-b px-4 py-2">{{ formatDate(data.date) }}</td>
            <td class="border-b px-4 py-2">{{ data.views_1_day }}</td>
            <td class="border-b px-4 py-2">{{ data.views_weekly }}</td>
            <td class="border-b px-4 py-2">{{ data.views_monthly }}</td>
            <td class="border-b px-4 py-2">{{ data.views_yearly }}</td>
            <td class="border-b px-4 py-2">{{ data.views_all_time }}</td>
            <td class="border-b px-4 py-2">{{ data.likes_1_day }}</td>
            <td class="border-b px-4 py-2">{{ data.likes_weekly }}</td>
            <td class="border-b px-4 py-2">{{ data.likes_monthly }}</td>
            <td class="border-b px-4 py-2">{{ data.likes_yearly }}</td>
            <td class="border-b px-4 py-2">{{ data.likes_all_time }}</td>
            <td class="border-b px-4 py-2">{{ data.comments_1_day }}</td>
            <td class="border-b px-4 py-2">{{ data.comments_weekly }}</td>
            <td class="border-b px-4 py-2">{{ data.comments_monthly }}</td>
            <td class="border-b px-4 py-2">{{ data.comments_yearly }}</td>
            <td class="border-b px-4 py-2">{{ data.comments_all_time }}</td>
            <td class="border-b px-4 py-2">{{ data.shares_1_day }}</td>
            <td class="border-b px-4 py-2">{{ data.shares_weekly }}</td>
            <td class="border-b px-4 py-2">{{ data.shares_monthly }}</td>
            <td class="border-b px-4 py-2">{{ data.shares_yearly }}</td>
            <td class="border-b px-4 py-2">{{ data.shares_all_time }}</td>
            <td class="border-b px-4 py-2">{{ data.followers_1_day }}</td>
            <td class="border-b px-4 py-2">{{ data.followers_weekly }}</td>
            <td class="border-b px-4 py-2">{{ data.followers_monthly }}</td>
            <td class="border-b px-4 py-2">{{ data.followers_yearly }}</td>
            <td class="border-b px-4 py-2">{{ data.followers_all_time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const analyticsData = ref([])
    const formData = ref({
      views_1_day: 0,
      views_weekly: 0,
      views_monthly: 0,
      views_yearly: 0,
      views_all_time: 0,
      likes_1_day: 0,
      likes_weekly: 0,
      likes_monthly: 0,
      likes_yearly: 0,
      likes_all_time: 0,
      comments_1_day: 0,
      comments_weekly: 0,
      comments_monthly: 0,
      comments_yearly: 0,
      comments_all_time: 0,
      shares_1_day: 0,
      shares_weekly: 0,
      shares_monthly: 0,
      shares_yearly: 0,
      shares_all_time: 0,
      followers_1_day: 0,
      followers_weekly: 0,
      followers_monthly: 0,
      followers_yearly: 0,
      followers_all_time: 0,
    })

    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/analytics/data')
        const data = await response.json()
        analyticsData.value = data
      } catch (error) {
        console.error('Error fetching analytics data:', error)
      }
    }

    const submitForm = async () => {
      try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const response = await fetch('/analytics/store', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
          },
          body: JSON.stringify(formData.value)
        })
        const data = await response.json()
        
        if (data.error) {
          console.error('Error storing form data:', data.message)
        } else {
          console.log('Form data stored successfully:', data.message)
          await fetchAnalytics() // Refresh data after storing
        }
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    }

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString()
    }

    const formatLabel = (key) => {
      return key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
    }

    // Fetch data on component mount
    fetchAnalytics()

    return {
      analyticsData,
      formatDate,
      formatLabel
    }
  }
}
</script>

<style scoped>
.table-container {
  max-width: 100%;
  overflow-x: auto;
}

table {
  white-space: nowrap;
}

th {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
}
</style> 