<template>
  <main class="bg-white-200 font-display">
    <Header />
    <div class="mt-20 mb-20 grid grid-cols-2 2xl:grid-cols-4 gap-4">
      <RegexListing v-for="item in tm('regexItems')" :key="item.id" v-bind="item" />
    </div>
    <Footer />
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import RegexListing from '@/components/RegexListing.vue';
import { useI18n } from 'vue-i18n';

const { tm } = useI18n();
</script>