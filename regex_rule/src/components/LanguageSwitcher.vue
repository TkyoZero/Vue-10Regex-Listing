<template>
    <button @click="toggleLanguage" class="float-right px-4 py-2 bg-green-500 text-white rounded">
        {{ currentLanguage }}
    </button>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'de' : 'en';
};

const currentLanguage = computed(() =>
    locale.value === 'en' ? 'DE' : 'EN'
);
</script>