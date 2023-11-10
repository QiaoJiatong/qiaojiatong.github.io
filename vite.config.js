import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import importToCDN from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    importToCDN({
      modules: [
        { name: 'vue', var: 'Vue', path: 'https://cdn.staticfile.org/vue/3.3.4/vue.global.js' },
        {
          name: 'vue-demi',
          var: 'VueDemi',
          path: 'https://cdn.staticfile.org/vue-demi/0.14.6/index.iife.js'
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'https://cdn.staticfile.org/vue-router/4.2.4/vue-router.global.js'
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://cdn.staticfile.org/element-plus/2.3.12/index.full.js',
          css: 'https://cdn.staticfile.org/element-plus/2.3.12/index.css'
        },
        {
          name: 'echarts',
          var: 'echarts',
          path: 'https://cdn.staticfile.org/echarts/5.4.3/echarts.min.js'
        },
        {
          name: 'lodash',
          var: '_',
          path: 'https://cdn.staticfile.org/lodash.js/4.17.21/lodash.js'
        },
        {
          name: '@element-plus/icons-vue',
          var: 'ElementPlusIconsVue',
          path: 'https://cdn.staticfile.org/element-plus-icons-vue/2.1.0/index.iife.min.js'
        },
        {
          name: 'axios',
          var: 'axios',
          path: 'https://cdn.staticfile.org/axios/1.5.0/axios.min.js'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
