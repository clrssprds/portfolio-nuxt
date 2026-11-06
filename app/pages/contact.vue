<script setup lang="ts">
import { PhLinkedinLogo, PhGithubLogo } from '@phosphor-icons/vue'

useHead({ title: 'Contact' })

useSeoMeta({
  description: 'Get in touch with Clarisse Paredes through LinkedIn and GitHub.',
  ogTitle: 'Contact | Clarisse Paredes',
  ogDescription: 'Connect with me on LinkedIn and GitHub.',
  ogType: 'website',
  twitterCard: 'summary',
})

const contacts = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/clarisse-paredes/',
    icon: PhLinkedinLogo,
    color: '#9a849f',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/clrssprds',
    icon: PhGithubLogo,
    color: '#9a849f',
  },
]
</script>

<template>
  <section class="flex w-full flex-col items-center gap-12">
    <PageTitle title="Connect with Me" />

    <div class="flex flex-wrap items-center justify-center gap-10">
      <ContactCard
        v-for="contact in contacts"
        :key="contact.label"
        :href="contact.href"
        :label="contact.label"
        :icon="contact.icon"
        :color="contact.color"
      />
    </div>
  </section>
</template>