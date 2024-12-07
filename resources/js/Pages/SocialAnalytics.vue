<template>
  <div class="social-analytics">
    <div v-if="loading" class="loading">
      Loading analytics...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else class="table-responsive">
      <table class="table">
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
          <tr v-for="(data, platform) in analytics" :key="platform">
            <td class="platform">
              <i :class="getPlatformIcon(platform)"></i>
              {{ platform }}
            </td>
            <td>{{ data.followers || 'N/A' }}</td>
            <td>{{ data.posts || 'N/A' }}</td>
            <td>{{ data.likes || 'N/A' }}</td>
            <td>{{ data.comments || 'N/A' }}</td>
            <td>{{ data.shares || 'N/A' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SocialAnalytics',
  data() {
    return {
      analytics: {},
      loading: true,
      error: null
    }
  },
  methods: {
    async fetchAnalytics() {
      try {
        this.loading = true;
        const response = await axios.get('/analytics');
        this.analytics = response.data;
        this.loading = false;
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to fetch analytics';
        this.loading = false;
      }
    },
    getPlatformIcon(platform) {
      const icons = {
        facebook: 'fab fa-facebook',
        instagram: 'fab fa-instagram',
        twitter: 'fab fa-twitter',
        linkedin: 'fab fa-linkedin',
        pinterest: 'fab fa-pinterest',
        youtube: 'fab fa-youtube',
        tiktok: 'fab fa-tiktok'
      };
      return icons[platform] || '';
    }
  },
  mounted() {
    this.fetchAnalytics();
  }
}
</script>

<style scoped>
.social-analytics {
  padding: 20px;
}

.loading, .error {
  text-align: center;
  padding: 20px;
}

.error {
  color: red;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table th, .table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.table th {
  background-color: #f5f5f5;
}

.platform {
  text-transform: capitalize;
}

.platform i {
  margin-right: 8px;
}

.table-responsive {
  overflow-x: auto;
}
</style> 