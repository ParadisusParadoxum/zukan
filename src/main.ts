import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

const app = createApp(App)
const vuetify = createVuetify({ theme: { defaultTheme: 'dark' } })

app.use(createPinia()).use(router).use(vuetify).mount('#app')
