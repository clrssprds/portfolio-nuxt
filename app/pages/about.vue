<script setup lang="ts">
useHead({ title: 'About' })

useSeoMeta({
  description:
    'Learn more about Clarisse Paredes, a 3rd-year BSIT student who loves designing websites and building user-friendly interfaces.',
  ogTitle: 'About | Clarisse Paredes',
  ogDescription:
    'A 3rd-year BSIT student aiming to become a professional web developer.',
  ogType: 'profile',
  twitterCard: 'summary',
})
</script>

<template>
  <section class="w-full">
    <PageTitle title="About" />

    <div class="space-y-5 text-justify font-light italic leading-relaxed">
      <p>
        Currently a 3rd-year BSIT student with a growing passion for designing websites and
        building user-friendly GUIs. Much of my time is spent learning how to combine technical
        logic with creative layouts to make applications look and feel better. When away from the
        computer, spending time watching shows or getting some much-needed sleep helps in managing
        the daily stress of college life.
      </p>
      <p>
        My long-term goal is to become a professional web developer who creates efficient and
        visually appealing digital solutions. I have a strong drive to master modern design tools
        and backend technologies to build full-scale applications. Staying curious and continuing
        to learn is my plan to keep up with all the new things in the tech world.
      </p>
    </div>
  </section>
</template>