// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/icon',
  ],
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 3055,
  },
  components: [
    {
      path: '~/components/auth',
      pathPrefix: false,
    },
    '~/components',
    '~/components/ui',
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
})
