<template>
  <div class="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
    <div class="h-full bg-indigo-500 transition-all duration-100" :style="style"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      required: true
    }
  },
  computed: {
    style() {
      const percentage = Number(this.progress) * 100
      return {
        width: percentage.toFixed(2) + "%"
      }
    }
  }
}
</script>

<style scoped>

</style>
