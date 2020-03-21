<template>
  <div id="app" class="max-w-3xl mx-auto px-4 font-body">
    <router-view />
    <TheFooter />
  </div>
</template>
<script>
import TheFooter from './components/TheFooter'
export default {
  components: { TheFooter },
}
</script>
