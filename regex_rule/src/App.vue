<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="m-4 p-4 text-center text-5xl font-display">Regex Rules</h1>
  </header>

  <footer class="mt-20 p-20 bg-green-950 text-white-200">
    <div>Souces:</div>
    <div class="text-center">&copy Tenzin Tobatsang</div>
  </footer>
  <RouterView />
</template>

<style scoped>
</style>
