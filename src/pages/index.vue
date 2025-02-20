<script setup lang="ts">
useHead({
  title: '首页',
})
</script>

<template>
  <div>
    <a-button type="primary">
      Primary Button
    </a-button>
  </div>
</template>

<route lang="json5">
  {
  name: 'home',
  meta: {
  title: '首页',
  i18n: 'menus.home'
  },
  }
</route>
