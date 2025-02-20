<script setup lang="ts">
// import { type RouteMap, useRouter } from 'vue-router'

// import { useAuthStore, useUserStore } from '@/stores'

// const { t } = useI18n()
// const router = useRouter()
// const userStore = useUserStore()
// const authStore = useAuthStore()

// const loading = ref(false)

// const postData = reactive({
//   email: '',
//   password: '',
// })

// const rules = reactive({
//   email: [
//     { required: true, message: t('login.pleaseEnterEmail') },
//   ],
//   password: [
//     { required: true, message: t('login.pleaseEnterPassword') },
//   ],
// })

// async function login(values: any) {
//   try {
//     loading.value = true
//     const data = await userStore.login({ ...postData, ...values })
//     authStore.setToken(data.token)

//     const { redirect, ...othersQuery } = router.currentRoute.value.query
//     router.push({
//       name: (redirect as keyof RouteMap) || 'home',
//       query: {
//         ...othersQuery,
//       },
//     })
//   }
//   finally {
//     loading.value = false
//   }
// }
</script>

<template>
  <div>Login</div>
</template>

<route lang="json5">
  {
  name: 'login',
  meta: {
  i18n: 'menus.login'
  },
  }
</route>
