import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: true, // <---
  },
  files: ['**/*.ts', '**/*.tsx', '*.vue'],
  rules: {
    'no-console': 'off', // allow console.log in TypeScript files
    'comma-dangle': 0,
  },
})
