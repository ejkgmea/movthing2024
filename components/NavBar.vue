<template>
  <CenterCard>
    <Menubar
      class="relative flex items-center justify-between h-16 border-none"
      :model="items"
    >
      <template #start>
        <Image
          src="/images/logo.png"
          alt="Image"
          width="50"
          @click="navigateTo('/')"
        />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a
          v-ripple
          class="flex items-center"
          v-bind="props.action"
          @click="navigateTo(item.to)"
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
import { useRouter } from 'vue-router'
import CenterCard from '@/components/CenterCard.vue'

const router = useRouter()

const items = ref([
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Products',
    items: [
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
    ]
  },
  {
    label: 'About Us',
    to: '/about'
  },
  {
    label: 'Contact Us',
    to: '/contact'
  }
])

const themeMode = ref('pi-sun')

function toggleDarkMode() {
  themeMode.value = themeMode.value === 'pi-sun' ? 'pi-moon' : 'pi-sun'
  document.documentElement.classList.toggle('my-app-dark')
}

function navigateTo(path) {
  if (path) {
    router.push(path) // 使用 router.push 进行页面跳转
  }
}
</script>
