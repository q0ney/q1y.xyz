import './index.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
    },
    components,
    directives,
})

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
