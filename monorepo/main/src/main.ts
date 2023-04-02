import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Wujie from 'wujie-vue3'

const app = createApp(App)

app.use(router).use(Wujie)

app.mount('#app')