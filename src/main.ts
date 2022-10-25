import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss'

function appInit(){
  const app = createApp(App)

  setupStore(app)

  app.use(router)

  app.use(ElementPlus)

  app.mount('#app', true)
}

void appInit()
