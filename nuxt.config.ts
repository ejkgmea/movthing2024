// https://nuxt.com/docs/api/configuration/nuxt-config

import Material from '@primevue/themes/Material'

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/eslint'
  ],
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
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
    options: {
      theme: {
        preset: Material,
        options: {
          darkModeSelector: '.my-app-dark', // 默认值是 'system'
          // cssLayer: false
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
      }
    }
  }
})
