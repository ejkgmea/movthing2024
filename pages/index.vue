<template>
  <div class="home">
    <div class="flex justify-center">
      <div class="bg-banner w-full py-60 max-w-screen-2xl bg-cover bg-center">
        <CenterCard>
          <h1>Movthing Tech</h1>
        </CenterCard>
      </div>
    </div>

    <CenterCard>
      home
    </CenterCard>
  </div>
</template>

<script setup>
import CenterCard from '~/components/CenterCard.vue'
</script>

<style scoped lang="scss">
.bg-banner {
  background-image: url('images/banner.jpg');
  background-repeat: no-repeat;
}
</style>
