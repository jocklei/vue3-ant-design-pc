import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import { configure } from 'vee-validate'

import 'virtual:uno.css'
import '@/styles/var.less'
import '@/styles/app.less'
import 'ant-design-vue/dist/reset.css'

import App from '@/App.vue'
import pinia from '@/stores'
import router from '@/router'
import { i18n } from '@/utils/i18n'

const head = createHead()
const app = createApp(App)

// 全局设置vee-validate验证模式
configure({
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
  validateOnBlur: false,
})

app.use(head)
app.use(i18n)
app.use(pinia)
app.use(router)

app.mount('#app')
