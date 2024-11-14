<template>
  <div class="home">
    <div class="flex justify-center">
      <div class="bg-banner w-full py-60 max-w-screen-2xl bg-cover bg-center">
        <CenterCard>
          <h1 class="pl-20 sm:pl-40 md:pl-60 lg:-60">
            Movthing Tech
          </h1>
        </CenterCard>
      </div>
    </div>

    <CenterCard>
      <h1 class="py-8 text-center">
        PRODUCTS
      </h1>
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
        <Card
          v-for="item in productsList"
          :key="item.name"
          class="pt-8"
          style="overflow: hidden"
        >
          <template #header>
            <div class="flex justify-center">
              <Image
                alt="user header"
                :src="item.img"
                image-style="height: 200px"
              />
            </div>
          </template>
          <template
            #title
          >
            <h3 class="text-center">
              {{ item.name }}
            </h3>
          </template>
        </Card>
      </div>
    </CenterCard>

    <CenterCard>
      <h1 class="py-8 text-center">
        CONTACT US
      </h1>

      <div class="iframe-wrapper max-w-4xl mx-auto">
        <iframe
          class="iframe"
          src="https://contact.movthing.com"
          frameborder="0"
          allowfullscreen
          scrolling="no"
        />
      </div>
    </CenterCard>
  </div>
</template>

<script setup>
import CenterCard from '~/components/CenterCard.vue'

const productsList = reactive([
  {
    name: 'Capacitors',
    img: '/images/index/001.jpg',
    to: '/products/capacitors'
  },
  {
    name: 'Inductors',
    img: '/images/index/002.jpg',
    to: '/products/inductors'
  },
  {
    name: 'Filters',
    img: '/images/index/003.jpg',
    to: '/products/filters'
  },
  {
    name: 'Beads',
    img: '/images/index/004.png',
    to: '/products/beads'
  }
])
</script>

<style scoped lang="less">
.bg-banner {
  background-image: url('public/images/banner.jpg');
  background-repeat: no-repeat;
}

@media (min-width: 992px) {
  .iframe-wrapper {
    .iframe {
      min-height: 400px;
    }
  }
}

@media (max-width: 992px) {
  .iframe-wrapper {
    .iframe {
      min-height: 600px;
    }
  }
}

.iframe-wrapper {
  .iframe {
    width: 100%;
  }
}
</style>
