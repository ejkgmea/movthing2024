<!-- layouts/products.vue -->
<template>
  <div>
    <!-- 导航栏 -->
    <NavBar />

    <CenterCard class="products-layout">
      <!-- 主体区域 -->
      <div class="main-content flex">
        <!-- 左侧菜单 -->
        <div class="menu hidden sm:block flex-shrink-0 w-60 p-4">
          <PanelMenu
            :model="items"
            class="w-full"
          >
            <template #item="{ item }">
              <!-- 对于有跳转链接的菜单项 -->
              <router-link
                v-if="item.to"
                v-slot="{ navigate }"
                :to="item.to"
                custom
              >
                <a
                  v-ripple
                  class="flex items-center cursor-pointer px-4 py-2"
                  @click="() => { navigate(); toggleDrawer(); }"
                >
                  <span :class="item.icon" />
                  <span class="ml-2">{{ item.label }}</span>
                </a>
              </router-link>
              <!-- 对于没有跳转链接的菜单项 -->
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
        <div class="content flex-1 p-4 overflow-y-auto">
          <slot />  <!-- 子路由的内容 -->
        </div>
      </div>
    </CenterCard>

    <!-- 底部栏 -->
    <FooterBar />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import CenterCard from '~/components/CenterCard.vue'

const items = ref([
  { label: 'Capacitors', to: '/products/capacitors' },
  { label: 'Inductors', to: '/products/inductors' },
  { label: 'Filters', to: '/products/filters' },
  { label: 'Beads', to: '/products/beads' }
])

const toggleDrawer = () => {
  console.log('Drawer toggled')
}
</script>

<style scoped lang="less">
.products-layout {
  display: flex;
  flex-direction: column;
  height: 100%;  /* Ensure the layout takes the full height of the viewport */
}

.main-content {
  display: flex;
  flex: 1; /* Ensure this part takes up the remaining space */
}

.menu {
  flex-shrink: 0;  /* Prevent menu from shrinking */
  width: 240px;    /* Set fixed width for the menu */
  border-right: 1px solid #ddd;
  :deep(.p-panelmenu-panel) {
    border: none;
  }
}

.content {
  flex: 1;         /* Ensure content area takes up the remaining space */
  padding: 16px;
  overflow-y: auto; /* Allow content to scroll if it overflows */
}
</style>
