<template>
  <footer class="mt-8 flex flex-wrap justify-center border-t-2 border-gray-200 py-4">
    <div class="px-5 py-4">
      <g-link to="/ueber-uns" class="text-base leading-6 text-gray-500 hover:text-gray-900">
        Über Uns
      </g-link>
    </div>
    <div class="px-5 py-4">
      <g-link to="/impressum" class="text-base leading-6 text-gray-500 hover:text-gray-900">
        Impressum
      </g-link>
    </div>
    <div class="px-5 py-4">
      <g-link to="/datenschutz" class="text-base leading-6 text-gray-500 hover:text-gray-900">
        Datenschutz
      </g-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

