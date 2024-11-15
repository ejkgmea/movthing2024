<template>
  <div>
    <BreadcrumbBar :items />
    Beads
  </div>
</template>

<script setup>
import BreadcrumbBar from '@/components/BreadcrumbBar.vue'

definePageMeta({
  layout: 'products'
})

const items = ref([
  { label: 'Products' },
  { label: 'Capacitors', to: '/products/beads' }
])
</script>
