<template>
  <button
    type="button"
    data-dropdown-toggle="language-dropdown"
    class="inline-flex items-center text-gray-800 dark:text-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 lg:px-2.5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
  >
    <Icon name="emojione:flag-for-united-states" class="w-5 h-5"></Icon>
    <!-- English (US) -->
  </button>
  <button
    id="theme-toggle"
    data-tooltip-target="tooltip-dark"
    type="button"
    class="inline-flex items-center p-2 mr-1 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
    @click.prevent="
      () => {
        setDarkMode()
      }
    "
  >
    <svg id="theme-toggle-dark-icon" :class="darkMode ? 'hidden w-5 h-5' : 'w-5 h-5'" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" :class="darkMode ? 'w-5 h-5' : 'hidden w-5 h-5'" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>
  <div id="tooltip-dark" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    Toggle dark mode
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>

  <!-- Dropdown -->
  <div class="hidden relative z-50 my-4 w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="language-dropdown" aria-labelledby="language-dropdown">
    <ul class="py-1" role="none">
      <li>
        <span class="block py-2 px-4 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
          <div class="inline-flex items-center">
            <Icon name="emojione:flag-for-united-states" class="mr-2 w-5 h-5"></Icon>
            English (US)
          </div>
        </span>
      </li>
      <li>
        <div class="block py-2 px-4 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
          <div class="inline-flex items-center">
            <Icon name="emojione:flag-for-south-korea" class="mr-2 w-5 h-5"></Icon>
            한국인
          </div>
        </div>
      </li>
      <li>
        <div class="block py-2 px-4 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
          <div class="inline-flex items-center">
            <Icon name="emojione:flag-for-japan" class="mr-2 w-5 h-5"></Icon>
            日本語
          </div>
        </div>
      </li>
      <li>
        <div class="block py-2 px-4 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
          <div class="inline-flex items-center">
            <Icon name="emojione:flag-for-china" class="mr-2 w-5 h-5"></Icon>
            中文 (简体)
          </div>
        </div>
      </li>
      <li>
        <div class="block py-2 px-4 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
          <div class="inline-flex items-center">
            <Icon name="emojione:flag-for-hong-kong-sar-china" class="mr-2 w-5 h-5"></Icon>
            中文 (繁體)
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const darkMode = useDarkMode()
</script>
