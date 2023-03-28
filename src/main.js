import { createApp } from 'vue'
import App from './App.vue'

// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//router
import router from './router/index.js'

// vuex
import store from './store/index'

const app=createApp(App)
app.use(ElementPlus).use(router).use(store)
app.mount('#app')

