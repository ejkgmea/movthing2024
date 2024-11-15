<template>
  <div />
</template>

<script setup>
definePageMeta({
  layout: 'products'
})

const router = useRouter()

onBeforeMount(() => {
  router.push('/products/capacitors')
})
</script>
