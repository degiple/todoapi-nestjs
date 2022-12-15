// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'client/',
  app: {
    head: {
      title: 'Nuxt 3 basic',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      link: [{ rel: 'icon', href: '/penguin.png' }],
    },
  },
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  // vite: {
  //   define: {
  //     "process.env.DEBUG": false,
  //   },
  // },
});
