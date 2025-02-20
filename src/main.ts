import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import 'virtual:uno.css'
import '@/styles/var.less'
import '@/styles/app.less'

import App from '@/App.vue'
import pinia from '@/stores'
import router from '@/router'
import { i18n } from '@/utils/i18n'

const head = createHead()
const app = createApp(App)

app.use(head)
app.use(i18n)
app.use(pinia)
app.use(router)

app.mount('#app')
