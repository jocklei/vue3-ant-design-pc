import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import useThemeStore from './modules/theme'
import useUserStore from './modules/user'
import useAuthStore from './modules/auth'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export { useThemeStore, useUserStore, useAuthStore }
export default pinia
