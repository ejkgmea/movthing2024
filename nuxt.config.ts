// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primevue/themes/aura';


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      // unstyled: true, // 是否要使用这个主题样式
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
