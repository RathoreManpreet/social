<template>
  <div class="container">
    <h2>Social Media Analytics</h2>
    
    <div v-if="loading" class="loading">
      Loading...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else class="table-container">
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Followers</th>
            <th>Posts</th>
            <th>Likes</th>
            <th>Comments</th>
            <th>Shares</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="platform in analyticsData" :key="platform.platform">
            <td>{{ platform.platform }}</td>
            <td>{{ platform.followers || 'N/A' }}</td>
            <td>{{ platform.posts || 'N/A' }}</td>
            <td>{{ platform.likes || 'N/A' }}</td>
            <td>{{ platform.comments || 'N/A' }}</td>
            <td>{{ platform.shares || 'N/A' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const analyticsData = ref([])
const loading = ref(true)
const error = ref(null)

const fetchAnalytics = async () => {
  try {
    const response = await fetch('http://localhost/api/analytics')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    analyticsData.value = data
  } catch (err) {
    error.value = 'Error fetching data: ' + err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchAnalytics()
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f5f5f5;
  font-weight: 600;
}

tr:hover {
  background-color: #f9f9f9;
}

.loading {
  text-align: center;
  padding: 20px;
  color: #666;
}

.error {
  color: #dc3545;
  padding: 20px;
  text-align: center;
  background-color: #f8d7da;
  border-radius: 4px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .table-container {
    overflow-x: scroll;
  }
  
  th, td {
    padding: 8px;
    font-size: 14px;
  }
}
</style>
