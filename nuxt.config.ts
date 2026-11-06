import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  build: { transpile: ['echarts', 'zrender', 'vue-echarts'] },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Web Portfolio',
      titleTemplate: '%s | Clarisse Paredes',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap',
        },
      ],
    },
  },
})