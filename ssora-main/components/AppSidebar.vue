<template>
  <div>
    <aside id="sidebar"
      class="flex hidden fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 w-64 h-full duration-75 lg:flex transition-width"
      aria-label="Sidebar">
      <div
        class="flex relative flex-col flex-1 pt-0 min-h-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex overflow-y-auto flex-col flex-1 pt-5 pb-4">
          <div class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            <ul class="pb-2 space-y-2">
              <li>
                <NuxtLink to="/app"
                  class="flex items-center p-2 text-md font-normal text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 dark:hover:bg-gray-700"
                  :class="route.fullPath === '/app' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''">
                  <Icon name="ic:twotone-home"
                    class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400"
                    :class="route.fullPath === '/app' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''" />
                  <span class="ml-3"
                    :class="route.fullPath === '/app' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400 rad-color-2' : ''"
                    sidebar-toggle-item>Home</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/app/community-feed"
                  class="text-md text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 dark:hover:bg-gray-700"
                  :class="route.fullPath === '/app/community-feed' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''">
                  <Icon name="iconoir:community"
                    class="w-5 h-5 ml-0.5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400"
                    :class="route.fullPath === '/app/community-feed' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''" />
                  <span class="flex-1 ml-3 whitespace-nowrap"
                    :class="route.fullPath === '/app/community-feed' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400 rad-color-2' : ''"
                    sidebar-toggle-item>Community Feed</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/app/personal-feed"
                  class="text-md text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 dark:hover:bg-gray-700"
                  :class="route.fullPath === '/app/personal-feed' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''">
                  <Icon name="octicon:apps-16"
                    class="w-5 h-5 ml-0.5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400"
                    :class="route.fullPath === '/app/personal-feed' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''" />
                  <span class="flex-1 ml-3 whitespace-nowrap"
                    :class="route.fullPath === '/app/personal-feed' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400 rad-color-2' : ''"
                    sidebar-toggle-item>Personal Feed</span>
                </NuxtLink>
              </li>
              <li>
                <div class="text-xs text-gray-900 font-normal rounded-lg flex items-center p-2 group dark:text-gray-200">
                  <span sidebar-toggle-item>User&nbsp;</span>Tools
                </div>
              </li>
              <li>
                <NuxtLink to="/app/video-generation"
                  class="text-md text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group dark:text-gray-200 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                  :class="route.fullPath === '/app/video-generation' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''">
                  <Icon name="ic:sharp-ondemand-video"
                    class="w-5 h-5 ml-0.5 text-gray-500 transition duration-75  dark:text-gray-400  group-hover:text-primary-500 dark:group-hover:text-primary-400"
                    :class="route.fullPath === '/app/video-generation' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''" />

                  <span class="flex-1 ml-3 whitespace-nowrap"
                    :class="route.fullPath === '/app/video-generation' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400 rad-color-2' : ''"
                    sidebar-toggle-item>Video Generation</span>
                </NuxtLink>
              </li>
            </ul>
            <div class="pt-2 space-y-2">
              <NuxtLink to="/app/docs"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                :class="route.fullPath.startsWith('/app/docs') ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''">
                <Icon name="material-symbols:lab-profile-outline-rounded"
                  class="w-6 h-6 ml-0.5 text-gray-500 transition duration-75  dark:text-gray-400  group-hover:text-primary-500 dark:group-hover:text-primary-400"
                  :class="route.fullPath.startsWith('/app/docs') ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''" />
                <span class="ml-3"
                  :class="route.fullPath.startsWith('/app/docs') ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400 rad-color-2' : ''"
                  sidebar-toggle-item>Docs</span>
              </NuxtLink>
              <NuxtLink to="/app/docs#resources"
                class="flex items-center p-2 text-md font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                :class="route.fullPath === '/app/help' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''">
                <Icon name="bi:question-circle"
                  class="w-5 h-5 ml-0.5 text-gray-500 transition duration-75  dark:text-gray-400  group-hover:text-primary-500 dark:group-hover:text-primary-400"
                  :class="route.fullPath === '/app/help' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400' : ''">
                </Icon>
                <span class="ml-3"
                  :class="route.fullPath === '/app/help' ? 'bg-gray-100 dark:bg-gray-700 text-primary-500 dark:text-primary-400 rad-color-2' : ''"
                  sidebar-toggle-item>FAQ & Help</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full flex-col" sidebar-bottom-menu>
          <Logo />
          <Social />
        </div>
      </div>
    </aside>

    <div class="hidden fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
