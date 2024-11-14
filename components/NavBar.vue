<template>
  <CenterCard>
    <Menubar
      class="relative flex items-center justify-between h-16 border-none"
      :model="items"
    >
      <template #start>
        <Image
          src="images/logo.png"
          alt="Image"
          width="50"
        />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a
          v-ripple
          class="flex items-center"
          v-bind="props.action"
        >
          <span>{{ item.label }}</span>
          <i
            v-if="hasSubmenu"
            :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"
          />
        </a>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <Button
            label="English"
            size="small"
            icon="pi pi-language"
            variant="text"
            severity="secondary"
          />
          <Button
            :icon="`pi ${themeMode}`"
            variant="text"
            severity="secondary"
            @click="toggleDarkMode()"
          />
        </div>
      </template>
    </Menubar>
  </CenterCard>
</template>

<script setup>
import { ref } from 'vue'
import CenterCard from '@/components/CenterCard.vue'

const items = ref([
  {
    label: 'Home'
  },
  {
    label: 'Products',
    items: [
      {
        label: '贴片电容'
      },
      {
        label: '贴片电感'
      },
      {
        label: '滤波器'
      },
      {
        label: '蜂鸣器'
      }
    ]
  },
  {
    label: 'About Us'
  },
  {
    label: 'Contact Us'
  }
])

const themeMode = ref('pi-sun')

function toggleDarkMode() {
  themeMode.value = themeMode.value === 'pi-sun' ? 'pi-moon' : 'pi-sun'
  document.documentElement.classList.toggle('my-app-dark')
}
</script>
