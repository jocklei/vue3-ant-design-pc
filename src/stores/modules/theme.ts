import { defineStore } from 'pinia'

// 自定义主题颜色
const useThemeStore = defineStore('theme', () => {
  const theme = ref<any>({
    token: {
      colorPrimary: '#1677ff',
    },
  })

  return { theme }
})
export default useThemeStore
