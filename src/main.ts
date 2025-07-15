import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { createApp, vaporInteropPlugin } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(vaporInteropPlugin)

app.mount('#app')
