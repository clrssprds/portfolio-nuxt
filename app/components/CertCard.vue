<script setup lang="ts">
defineProps<{
  title: string
  image: string
  verifyUrl: string
}>()

const emit = defineEmits<{ zoom: [] }>()
</script>

<template>
  <li class="flex w-full max-w-sm flex-col items-center md:w-[calc(50%-1rem)] lg:w-auto lg:flex-1">
    <button
      type="button" class="w-full cursor-zoom-in"
      :aria-label="`View ${title} certificate`"
      @click="emit('zoom')"
    >
      <img
        :src="image" :alt="title"
        class="w-full rounded-md transition duration-200 hover:-translate-y-1 hover:shadow-xl"
      />
    </button>
    <a
      :href="verifyUrl" target="_blank" rel="noopener"
      class="link link-hover mt-3 text-center text-sm font-light italic"
    >
      {{ title }}
    </a>
  </li>
</template>