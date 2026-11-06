<script setup lang="ts">
useHead({ title: 'Certifications' })

useSeoMeta({
  description:
    'Certifications earned by Clarisse Paredes: Microsoft Office Specialist (Word, PowerPoint) and IT Specialist - Databases.',
  ogTitle: 'Certifications | Clarisse Paredes',
  ogDescription: 'Industry certifications earned through Certiport.',
  ogType: 'website',
  twitterCard: 'summary',
})

const VERIFY_URL = 'https://www.certiport.com/portal/pages/credentialverification.aspx'

const certifications = [
  {
    title: 'Microsoft Office Specialist - Word Associate',
    image: '/certifications/word-certificate.png',
    verifyUrl: VERIFY_URL,
  },
  {
    title: 'Microsoft Office Specialist - PowerPoint Associate',
    image: '/certifications/powerpoint-certificate.png',
    verifyUrl: VERIFY_URL,
  },
  {
    title: 'Information Technology Specialist - Databases',
    image: '/certifications/databases-certificate.png',
    verifyUrl: VERIFY_URL,
  },
]

const selected = ref<{ src: string; alt: string } | null>(null)
</script>

<template>
  <section class="w-full">
    <PageTitle title="Certifications" />

    <ul class="flex w-full flex-wrap justify-center gap-8 py-4">
      <CertCard
        v-for="cert in certifications"
        :key="cert.title"
        v-bind="cert"
        @zoom="selected = { src: cert.image, alt: cert.title }"
      />
    </ul>

    <ImageLightbox :src="selected?.src ?? null" :alt="selected?.alt" @close="selected = null" />
  </section>
</template>