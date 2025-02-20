import { defineStore } from 'pinia'

export interface AppStore {
  switchMode: (val: any) => void
}

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const useAppStore = defineStore('app', () => {
  const theme = prefersDark ? 'dark' : 'light'
  const mode = ref<any>(theme)

  const switchMode = (val: any) => {
    mode.value = val
  }

  return { mode, switchMode }
}, {
  persist: true,
})
export default useAppStore
