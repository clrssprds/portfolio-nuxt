<script setup lang="ts">
import type { NuxtError } from '#app'
import { PhHouse } from '@phosphor-icons/vue'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error.statusCode === 404)

useHead({
  title: is404.value ? 'Page Not Found' : 'Something Went Wrong',
})

useSeoMeta({
  robots: 'noindex, nofollow',
  description: 'The page you are looking for does not exist.',
})

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <section class="flex flex-col items-center gap-5 text-center">
      <p class="font-serif text-8xl font-bold italic text-secondary md:text-9xl">
        {{ error.statusCode }}
      </p>
      <h1 class="font-serif text-2xl font-bold italic md:text-3xl">
        {{ is404 ? 'Page not found' : 'Something went wrong' }}
      </h1>
      <p class="max-w-md font-light italic">
        {{
          is404
            ? "Looks like the page you're looking for doesn't exist or has been moved."
            : 'An unexpected error occurred. Please try again later.'
        }}
      </p>
      <button
        type="button"
        class="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border-2 border-primary bg-primary px-5 py-2.5 italic text-base-content transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
        @click="goHome"
      >
        <PhHouse :size="18" />
        Back to Home
      </button>
    </section>
  </NuxtLayout>
</template>