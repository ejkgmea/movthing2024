<template>
  <div>
    <!-- <div class="card bg-transparent border-b">
      <Breadcrumb
        :home="home"
        :model="items"
      >
        <template #item="{ item, props }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a
              :href="href"
              v-bind="props.action"
              @click="navigate"
            >
              <span :class="[item.icon, 'text-color']" />
              <span class="font-semibold">{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-else
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
          >
            <span class="">{{ item.label }}</span>
          </a>
        </template>
      </Breadcrumb>
    </div> -->

    <BreadcrumbBar :items />

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

const items = ref([
  { label: 'Products' },
  { label: 'Capacitors', to: '/products/capacitors' }
])
</script>
