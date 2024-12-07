<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <nav class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
      <!-- Your navigation content -->
      <DarkModeToggle />
    </nav>
    
    <!-- Your page content -->
    <slot />
  </div>
</template>

<script setup>
import DarkModeToggle from '@/Components/DarkModeToggle.vue'
</script> 