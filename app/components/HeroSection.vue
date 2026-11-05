<script setup lang="ts">
const buttons = [
  { label: 'About', to: '/about' },
  { label: 'Tech Stack', to: '/tech-stack' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center gap-7 text-center md:flex-row md:gap-12 md:text-left"
  >
    <div class="h-60 w-52 shrink-0 overflow-hidden rounded-2xl border-[3px] border-primary">
      <img
        src="/portrait/clarisse-img.jpg"
        alt="Clarisse Paredes"
        width="208"
        height="240"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="flex flex-col items-center gap-4 md:items-start">
      <h1 class="font-serif text-3xl font-bold italic leading-tight md:text-5xl">
        Clarisse Paredes
      </h1>
      <p class="font-light italic">Aspiring Web Developer</p>

      <div class="hidden gap-3 lg:flex">
        <NuxtLink
          v-for="button in buttons"
          :key="button.to"
          :to="button.to"
          class="whitespace-nowrap rounded-full border-2 border-primary bg-primary px-5 py-2.5 italic text-base-content transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
        >
          {{ button.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>