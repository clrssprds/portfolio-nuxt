<script setup lang="ts">
defineProps<{ name: string; icon: string }>()
</script>

<template>
  <li class="flex w-full flex-col items-center gap-2.5">
    <img
      :src="icon"
      :alt="name"
      width="72"
      height="72"
      class="size-[72px] object-contain transition-transform duration-200 hover:scale-110"
    />
    <p class="text-center text-sm italic text-base-content/70">{{ name }}</p>
  </li>
</template>