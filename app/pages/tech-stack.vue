<script setup lang="ts">
useHead({ title: 'Tech Stack' })

useSeoMeta({
  description:
    'Programming languages and development tools used by Clarisse Paredes, including C, Java, MySQL, HTML, CSS, JavaScript, Git, and VS Code.',
  ogTitle: 'Tech Stack | Clarisse Paredes',
  ogDescription: 'Languages and tools I use to build web applications.',
  ogType: 'website',
  twitterCard: 'summary',
})

const languages = [
  { name: 'C Programming', icon: '/logos/c-icon.svg' },
  { name: 'Java', icon: '/logos/java-icon.svg' },
  { name: 'MySQL', icon: '/logos/mysql-icon.svg' },
  { name: 'HTML', icon: '/logos/html-icon.svg' },
  { name: 'CSS', icon: '/logos/css-icon.svg' },
  { name: 'JavaScript', icon: '/logos/js-icon.svg' },
]

const tools = [
  { name: 'Android Studio', icon: '/logos/androidstudio-icon.png' },
  { name: 'Git', icon: '/logos/git-icon.svg' },
  { name: 'GitHub', icon: '/logos/github-icon.svg' },
  { name: 'VS Code', icon: '/logos/vscode-icon.svg' },
]
</script>

<template>
  <div class="flex w-full flex-col gap-10">
    <h1 class="sr-only">Tech Stack</h1>
    <TechSection title="Programming Languages" :items="languages" />
    <TechSection title="Development Tools" :items="tools" />
  </div>
</template>