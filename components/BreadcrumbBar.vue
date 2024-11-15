<template>
  <div class="card">
    <Breadcrumb
      :home="home"
      :model="items"
    >
      <template #item="{ item, props }">
        <router-link
          v-if="item.to"
          v-slot="{ href, navigate }"
          :to="item.to"
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
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Object
  }
})

const home = ref({
  icon: 'pi pi-home',
  to: '/'
})

// const items = ref([
//   { label: 'Products' },
//   { label: 'Capacitors', to: '/products/capacitors' }
// ])
</script>
