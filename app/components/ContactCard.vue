<script setup lang="ts">
defineProps<{
  href: string
  label: string
  icon: string
}>()
</script>

<template>
  <a
    :href="href" target="_blank" rel="noopener"
    :aria-label="label"
    class="flex size-24 items-center justify-center rounded-2xl bg-primary/20 transition duration-300 hover:scale-110 hover:bg-primary/35 hover:shadow-[0_0_28px_8px_rgba(181,161,186,0.5)]"
  >
    <img :src="icon" :alt="label" class="size-12 rounded-full object-contain" />
  </a>
</template>