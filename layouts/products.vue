<template>
  <div>
    <NavBar />

    <CenterCard class="products-layout">
      <div class="main-content flex">
        <!-- 左侧菜单 -->
        <div class="menu hidden sm:block flex-shrink-0 w-60 p-4">
          <PanelMenuBar :items />
        </div>

        <!-- 右侧内容区 -->
        <div class="content flex-1 p-4 overflow-y-auto">
          <slot />  <!-- 子路由的内容 -->
        </div>
      </div>
    </CenterCard>

    <FooterBar />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import CenterCard from '@/components/CenterCard.vue'
import PanelMenuBar from '@/components/PanelMenuBar.vue'

const items = ref([
  {
    label: 'Capacitors',
    items: [
      {
        label: 'TDK Corporation',
        to: '/products/capacitors/tdk'
      },
      {
        label: 'Murata',
        to: '/products/capacitors/murata'
      },
      {
        label: 'Taiyo',
        to: '/products/capacitors/taiyo'
      },
      {
        label: 'Samsung',
        to: '/products/capacitors/samsung'
      },
      {
        label: 'PDC',
        to: '/products/capacitors/pdc'
      }, {
        label: 'Walsin',
        to: '/products/capacitors/walsin'
      },
      {
        label: 'HEC',
        to: '/products/capacitors/hec'
      },
      {
        label: 'FH',
        to: '/products/capacitors/fh'
      }
    ]
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
