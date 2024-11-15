<template>
  <div>
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
            @click="() => { navigate(); emitToggleClick(); }"
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
</template>

<script setup>
defineProps({
  items: {
    type: Object
  }
})

const emit = defineEmits(['toggle'])

const emitToggleClick = () => {
  emit('toggle')
}
</script>
