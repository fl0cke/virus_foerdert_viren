<template>
  <div>
    <header class="flex items-center py-4 justify-between border-b-2 border-gray-200">
      <h2 class="font-bold md:text-2xl leading-none">
        <g-link to="/" class="inline-block">Virus fördert Viren</g-link>
      </h2>
      <img src="../assets/logo.jpg" class="h-6 md:h-8" />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>

export default {
}
</script>

<style>

</style>
