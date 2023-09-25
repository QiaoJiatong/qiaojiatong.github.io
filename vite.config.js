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
        { name: 'vue', var: 'Vue', path: 'https://unpkg.com/vue@3.3.4/dist/vue.global.js' },
        {
          name: 'vue-demi',
          var: 'VueDemi',
          path: 'https://unpkg.com/vue-demi@0.14.6/lib/index.iife.js'
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'https://unpkg.com/vue-router@4.2.4/dist/vue-router.global.js'
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://unpkg.com/element-plus@2.3.12/dist/index.full.js',
          css: 'https://unpkg.com/element-plus@2.3.12/dist/index.css'
        },
        {
          name: 'echarts',
          var: 'echarts',
          path: 'https://unpkg.com/echarts@5.4.3/dist/echarts.min.js'
        },
        {
          name: 'lodash',
          var: '_',
          path: 'https://unpkg.com/lodash@4.17.21/lodash.js'
        },
        {
          name: '@element-plus/icons-vue',
          var: 'ElementPlusIconsVue',
          path: 'https://unpkg.com/@element-plus/icons-vue@2.1.0/dist/index.iife.min.js'
        },
        {
          name: 'axios',
          var: 'axios',
          path: 'https://unpkg.com/axios@1.5.0/dist/axios.min.js'
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
