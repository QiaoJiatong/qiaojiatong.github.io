import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import IconFont from './components/icon-font.vue'
import './assets/iconfont/iconfont'
import './assets/main.css'
import VueClipboards from 'vue-clipboard2'
import permission from './permission/permission'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(VueClipboards);
app.directive('permission',permission)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('IconFont', IconFont)

app.mount('#app')
