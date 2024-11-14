<template>
  <div />
</template>

<script>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    onBeforeMount(() => {
      router.push('/products/capacitors')
    })
  }
}
</script>
