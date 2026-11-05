<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <h1 class="mb-8 w-full text-center font-serif text-3xl font-bold italic md:text-4xl">
    {{ title }}
  </h1>
</template>