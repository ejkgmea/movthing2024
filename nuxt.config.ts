// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/eslint'
    // '@nuxt/content'
  ],
  devtools: { enabled: true },
  css: [
    '@/utils/css/main.css',
    'primeicons/primeicons.css'
  ],
  compatibilityDate: '2024-04-03',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark', // 默认值是 'system'
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
      }
    }
  }
})
