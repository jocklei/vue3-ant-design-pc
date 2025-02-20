<script setup lang="ts">
// import { storeToRefs } from 'pinia'

import useAppStore from '@/stores/modules/app'
// import useRouteCache from '@/stores/modules/routeCache'
import useAutoThemeSwitcher from '@/hooks/useAutoThemeSwitcher'

useHead({
  title: 'Vue3 Vant Mobile',
  meta: [
    {
      name: 'description',
      content: 'An mobile web apps template based on the Vue 3 ecosystem',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})

const appStore = useAppStore()
// const { mode } = storeToRefs(appStore)
const { initializeThemeSwitcher } = useAutoThemeSwitcher(appStore)

// const keepAliveRouteNames = computed(() => {
//   return useRouteCache().routeCaches as string[]
// })

onMounted(() => {
  initializeThemeSwitcher()
})
</script>

<template>
  <div>框架页面</div>
</template>

<style scoped>
</style>
