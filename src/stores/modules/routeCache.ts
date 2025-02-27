import { defineStore } from 'pinia'

import type { RouteRecordName } from 'vue-router'
import type { EnhancedRouteLocation } from '@/router/types'

const useRouteCacheStore = defineStore('route-cache', () => {
  const routeCaches = ref<RouteRecordName[]>([])

  /**
   * @description Add route
   * @author jocklei
   * @date 2025/02/12
   * @param {EnhancedRouteLocation} route
   */
  const addRoute = (route: EnhancedRouteLocation) => {
    if (routeCaches.value.includes(route.name)) {
      return
    }

    if (route?.meta?.keepAlive) {
      routeCaches.value.push(route.name)
    }
  }

  return {
    routeCaches,
    addRoute,
  }
})

export default useRouteCacheStore
