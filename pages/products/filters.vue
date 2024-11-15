<template>
  <div>
    <BreadcrumbBar :items />
    Filters
  </div>
</template>

<script setup>
import BreadcrumbBar from '@/components/BreadcrumbBar.vue'

definePageMeta({
  layout: 'products'
})

const items = ref([
  { label: 'Products' },
  { label: 'Filters', to: '/products/filters' }
])
</script>
