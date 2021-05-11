import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(ElementPlus)
app.mount('#app')
