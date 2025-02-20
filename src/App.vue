<script setup lang="ts">
import type { CSSProperties } from 'vue'

import { storeToRefs } from 'pinia'

import useThemeStore from '@/stores/modules/theme'
import useRouteCache from '@/stores/modules/routeCache'

useHead({
  title: 'Vue3 Ant Design UI',
  meta: [
    {
      name: 'description',
      content: 'An PC web apps template based on the Vue 3 ecosystem',
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

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

const keepAliveRouteNames = computed(() => {
  return useRouteCache().routeCaches as string[]
})

const headerStyle: CSSProperties = {
  color: '#fff',
  height: 64,
  padding: '6px',
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#999',
}

const siderStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  padding: '6px',
  backgroundColor: '#777',
}

const contentStyle: CSSProperties = {
  color: '#fff',
  padding: '10px',
  minHeight: `calc(100vh - 64px)`,
  backgroundColor: '#fff',
}
</script>

<template>
  <a-config-provider :theme="theme">
    <a-layout>
      <a-layout-header :style="headerStyle">
        Header
      </a-layout-header>
      <a-layout>
        <a-layout-sider :style="siderStyle">
          Sider
        </a-layout-sider>
        <a-layout-content :style="contentStyle">
          <router-view v-slot="{ Component, route }">
            <keep-alive :include="keepAliveRouteNames">
              <component :is="Component" :key="route.name" />
            </keep-alive>
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<style scoped></style>
