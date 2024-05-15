import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/styles.css'
  ],
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

