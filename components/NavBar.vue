<template>
  <CenterCard>
    <Menubar
      class="relative flex items-center justify-between h-16 border-none bg-transparent"
      :model="items"
    >
      <template #button>
        <Button
          class="block md:hidden"
          :icon="`pi pi-bars`"
          size="small"
          variant="text"
          severity="secondary"
          @click="toggleDrawer()"
        />
      </template>
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
          @click="handleMenuClick(item)"
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

    <!-- PrimeVue Drawer -->
    <Drawer v-model:visible="drawerVisible">
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-between px-6 pt-4 shrink-0">
            <span class="inline-flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Image"
                width="50"
                @click="navigateTo('/')"
              />
              <span class="font-semibold text-xl">Movthing Tech</span>
            </span>
            <span>
              <Button
                type="button"
                size="small"
                variant="text"
                severity="secondary"
                icon="pi pi-times"
                rounded
                @click="closeCallback"
              />
            </span>
          </div>

          <!-- PanelMenu Component -->
          <div class="PanelMenu-wrap">
            <PanelMenu
              :model="items"
              class="w-full md:w-80"
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
                    @click="() => { navigate(); toggleDrawer(); }"
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
        </div>
      </template>
    </Drawer>
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
const drawerVisible = ref(false)

function toggleDrawer() {
  drawerVisible.value = !drawerVisible.value
}

function handleMenuClick(item) {
  if (item.to) {
    navigateTo(item.to)
  }
}

function toggleDarkMode() {
  themeMode.value = themeMode.value === 'pi-sun' ? 'pi-moon' : 'pi-sun'
  document.documentElement.classList.toggle('my-app-dark')
}

function navigateTo(path) {
  if (path) {
    router.push(path) // Use router.push for navigation
  }
}
</script>

<style scoped lang="less">
.PanelMenu-wrap :deep(.p-panelmenu-panel) {
  border: none;
}
</style>
