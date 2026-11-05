<script setup lang="ts">
useHead({ title: 'Web Portfolio' })

useSeoMeta({
  description:
    'Portfolio of Clarisse Paredes, an aspiring web developer and BSIT student passionate about building user-friendly websites.',
  ogTitle: 'Clarisse Paredes | Web Portfolio',
  ogDescription:
    'Portfolio of Clarisse Paredes, an aspiring web developer and BSIT student.',
  ogType: 'website',
  ogImage: '/portrait/clarisse-img.jpg',
  twitterCard: 'summary',
})
</script>

<template>
  <HeroSection />
</template>