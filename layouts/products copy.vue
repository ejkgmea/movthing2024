<!-- layouts/products.vue -->
<template>
  <div class="">
    <NavBar />

    <CenterCard>
      <div class="flex">
        <!-- 左侧菜单 -->
        <div class="PanelMenu-wrap hidden sm:block">
          <PanelMenu
            :model="items"
            class="w-full md:w-60 border-r"
          >
            <template
              #item="{ item }"
            >
              <router-link
                v-if="item.to"
                v-slot="{ navigate }"
                :to="item.to"
                custom
              >
                <a
                  v-ripple
                  class="flex items-center cursor-pointer px-4 py-2"
                  @click="navigate"
                >
                  <span :class="item.icon" />
                  <span class="ml-2">{{ item.label }}</span>
                </a>
              </router-link>
              <a
                v-else
                v-ripple
                class="flex items-center cursor-pointer px-4 py-2"
                :href="item.to"
              >
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
                <span
                  v-if="item.items"
                  class="pi pi-angle-down ml-auto"
                />
              </a>
            </template>
          </PanelMenu>
        </div>

        <!-- 右侧内容区 -->
        <div class="content w-3/4 p-4">
          <slot />  <!-- 子路由的内容 -->
        </div>
      </div>
    </CenterCard>

    <FooterBar />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import CenterCard from '~/components/CenterCard.vue'

const items = ref([
  {
    label: 'Capacitors',
    to: '/products/capacitors'
  },
  {
    label: 'Inductors',
    to: '/products/inductors'
  },
  {
    label: 'Filters',
    to: '/products/filters'
  },
  {
    label: 'Beads',
    to: '/products/beads'
  }
])
</script>

<style scoped lang="less">
.PanelMenu-wrap :deep(.p-panelmenu-panel) {
  border: none;
}
.menu {
  background-color: #f7f7f7;
  border-right: 1px solid #ddd;
}
</style>
