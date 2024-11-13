// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/eslint'
  ],
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.scss' // 引入你的 SCSS 文件
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
      unstyled: false, // 是否要使用这个主题样式
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.my-app-dark', // 默认值是 'system'
          cssLayer: false
        }
      }
    }
  }
})
