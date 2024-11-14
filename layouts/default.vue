<template>
  <div class="default">
    <NavBar />
    <slot />
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'
</script>
