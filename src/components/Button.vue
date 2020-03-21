<template>
  <g-link v-if="to" :to="to" class="button"><slot/></g-link>
  <button v-else class="button" type="button"><slot /></button>
</template>

<script>
export default {
  name: 'Button',
  props: ["to"]
}
</script>

<style scoped>
  .button {
    @apply inline-flex justify-center rounded py-2 px-4 text-white text-lg font-semibold transition-all duration-100 items-center;
    min-width: 12rem;
  }
  .button:hover {
    @apply shadow-lg;
  }
</style>
