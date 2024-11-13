import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: true, // <---
  },
}).append({
  rules: {
    'no-console': 'off',
    // 'comma-dangle': ['error', 'never'],
  },
})
