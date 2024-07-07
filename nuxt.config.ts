import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/css/styles.css',
    '~/assets/css/responsibility.css'
  ],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  googleFonts: {
    families: {
      "Joti One": true,
      "Irish Grover": true,
      "Playwrite Italia Moderna": true,
      "Kode Mono": true
    }
  },

  compatibilityDate: '2024-07-06'
})