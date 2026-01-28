// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({
  // srcDir: 'src/',

  modules: [
    // ...
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@element-plus/nuxt'
  ],

  nitro: {
    // devProxy: {
    //   '/api': {
    //     target: 'http://localhost:3001', // 这里是接口地址
    //     changeOrigin: true,
    //     prependPath: true
    //   }
    // }
  },

  // devServer: {
  //   port: 8888
  // },

  devServer: {
    port: 3000,
    host: 'localhost'
  },
  experimental: {
    payloadExtraction: false
  },
  css: ['normalize.css','~/assets/styles/global.css','~/assets/css/bh-hover/bh-hover.css','~/assets/css/ph-hover/ph-hover.css','~/assets/iconfont/iconfont.css'],

  // // elementPlus: { /** Options */ }
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "@/assets/styles/default.scss";'
  //       }
  //     }
  //   }
  // },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "~/assets/styles/default.scss";'
  //       }
  //     }
  //   }
  // },
  compatibilityDate: '2025-04-06'
})