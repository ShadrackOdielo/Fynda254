// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/supabase',
    '@nuxthub/core',
  ],
  supabase:{
      redirectOptions: {
    login: '/login',
    callback: '/confirm',
    include: ['/admin',],
    exclude: ['/*'],
    saveRedirectToCookie: false,
  }

  },

  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
})