<template>
  <div>
    <BreadcrumbBar :items />

    <h1>{{ brand }}</h1>

    <h1>普通级</h1>
    <h1>车规级</h1>
    <h1>安规级</h1>

    <div class="content-text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est perspiciatis enim tenetur, excepturi facere eveniet esse iusto necessitatibus? Sunt nostrum aut placeat numquam iste, cum ut consequatur fuga nesciunt.</p>
    </div>
  </div>
</template>

<script setup>
import BreadcrumbBar from '@/components/BreadcrumbBar.vue'

definePageMeta({
  layout: 'products'
})

const brandObject = {
  tdk: 'TDK Corporation',
  murata: 'Murata', // 村田
  taiyo: 'Taiyo', // 太诱
  samsung: 'Samsung', // 三星
  pdc: 'PDC', // 信昌
  walsin: 'Walsin', // 华科
  yageo: 'Yageo', // 国巨
  hec: 'HEC', // 禾伸堂
  fh: 'FH' // 风华
}

const { brand } = useRoute().params

const items = ref([
  { label: 'Products' },
  { label: 'Capacitors' },
  { label: brandObject[brand], to: `/products/capacitors/${brand}` }
])
</script>
