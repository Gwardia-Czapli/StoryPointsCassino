// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt configuration
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-03-09',
  typescript: {
    typeCheck: true,
  },

  // Misc
  css: ['~/assets/css/main.css'],

  // Modules list
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
  ],

  // Module related configuration
  eslint: {
    config: {
      standalone: false,
    },
  },

  devtools: { enabled: true },
})
