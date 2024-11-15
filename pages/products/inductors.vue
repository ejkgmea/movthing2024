<template>
  <div>
    <BreadcrumbBar :items />

    Inductors
  </div>
</template>

<script setup>
import BreadcrumbBar from '@/components/BreadcrumbBar.vue'

definePageMeta({
  layout: 'products'
})

const items = ref([
  { label: 'Products' },
  { label: 'Capacitors', to: '/products/inductors' }
])
</script>
