// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n', '@nuxt/fonts', '@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      { name: 'Suwannaphum', provider: 'google' },
    ],
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'km', language: 'km-KH', name: 'ខ្មែរ', file: 'km.json' }
    ],
  }
})