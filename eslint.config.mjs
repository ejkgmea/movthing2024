import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: false,
      commaDangle: 'never',
      arrowParens: true,
      quoteProps: 'as-needed'
    },
    tooling: true
  }
})
