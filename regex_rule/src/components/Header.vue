<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';

</script>

<template>
    <header class="p-15 pb-20 bg-green-950 text-white-200">
    <RouterLink to="/">
      <h1 class="p-4 text-center text-5xl">Regex Rules</h1>
    </RouterLink>
    <LanguageSwitcher />
  </header>
</template>