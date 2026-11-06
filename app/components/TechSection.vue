<script setup lang="ts">
defineProps<{
  title: string
  items: { name: string; icon: string }[]
}>()
</script>

<template>
  <section class="w-full">
    <h2 class="mb-6 text-center font-serif text-3xl font-bold italic md:text-4xl">
      {{ title }}
    </h2>
    <ul
      class="grid grid-cols-2 justify-items-center gap-x-5 gap-y-8 py-4 sm:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
    >
      <TechItem v-for="item in items" :key="item.name" :name="item.name" :icon="item.icon" />
    </ul>
  </section>
</template>