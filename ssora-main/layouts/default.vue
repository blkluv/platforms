<template>
  <SiteNav />
  <div :class="route.fullPath === '/' ? 'max-w-screen-2xl' : ''" class="relative flex flex-col mx-auto w-full px-0 dark:bg-gray-900">
    <NuxtLoadingIndicator />
    <slot />
  </div>
  <SiteFooterSection />
</template>

<script setup>
import { initFlowbite } from 'flowbite'

/* variables */
const route = useRoute()

onMounted(async () => {
  initFlowbite()
  initTheme()
})
</script>
