<script setup lang="ts">
useHead({ title: 'Contact' })

useSeoMeta({
  description:
    'Get in touch with Clarisse Paredes through LinkedIn and GitHub.',
  ogTitle: 'Contact | Clarisse Paredes',
  ogDescription: 'Connect with me on LinkedIn and GitHub.',
  ogType: 'website',
  twitterCard: 'summary',
})

const contacts = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/clarisse-paredes/',
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/clrssprds',
    icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
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
      />
    </div>
  </section>
</template>