<template>
  <div id="app" class="max-w-3xl mx-auto px-4 pb-8 font-body">
    <router-view />
    <footer class="-mx-5 mt-8 flex flex-wrap justify-center">
      <div class="px-5 py-2">
        <g-link to="/ueber-uns" class="text-base leading-6 text-gray-500 hover:text-gray-900">
          Über Uns
        </g-link>
      </div>
      <div class="px-5 py-2">
        <g-link to="/impressum" class="text-base leading-6 text-gray-500 hover:text-gray-900">
          Impressum
        </g-link>
      </div>
      <div class="px-5 py-2">
        <g-link to="/datenschutz" class="text-base leading-6 text-gray-500 hover:text-gray-900">
          Datenschutz
        </g-link>
      </div>
    </footer>
  </div>
</template>
