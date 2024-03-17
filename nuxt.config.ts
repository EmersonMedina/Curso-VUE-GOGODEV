// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true, 
  nitro: {
    prerender: { 
      routes:['/proyects', '/services', '/about', '/contact', '/' ] 
    }
  }, 
  routeRules: {
    '/': { prerender: true}, 
    '/about': { ssr: true }, 
    '/services': { ssr: false } 
  }
})
