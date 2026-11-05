<script setup lang="ts">
const route = useRoute()
const isOpen = ref(false)
const isHome = computed(() => route.path === '/')

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Tech Stack', to: '/tech-stack' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' },
]

const close = () => {
  isOpen.value = false
}

watch(() => route.path, close)

watch(isOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

// Esc key to close
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="sticky top-0 z-50">
    <nav class="navbar min-h-14 bg-primary px-6 text-white">
      <!-- Desktop menu -->
      <ul v-if="!isHome" class="hidden flex-1 items-center justify-center gap-9 lg:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="border-b-2 border-transparent pb-1 text-[0.95rem] italic transition-colors hover:border-white/55 [&.router-link-exact-active]:border-white [&.router-link-exact-active]:font-semibold"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Hamburger button (mobile/tablet) -->
      <button
        type="button"
        class="btn btn-square btn-ghost border-white/70 text-white lg:hidden"
        aria-label="Open menu"
        aria-controls="mobile-sidebar"
        :aria-expanded="isOpen"
        @click="isOpen = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-300"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black/50 lg:hidden"
        aria-hidden="true"
        @click="close"
      />
    </Transition>

    <!-- Sidebar (mobile/tablet) -->
    <aside
      id="mobile-sidebar"
      class="fixed left-0 top-0 z-50 flex h-full w-64 flex-col bg-primary text-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      :inert="!isOpen"
    >
      <div class="flex h-14 items-center justify-between border-b border-white/30 px-6">
        <span class="font-serif text-lg font-bold italic">Menu</span>
        <button
          type="button"
          class="btn btn-square btn-ghost btn-sm text-white"
          aria-label="Close menu"
          @click="close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>

      <ul class="flex flex-col py-2">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block px-6 py-3.5 italic text-white transition-colors hover:bg-base-100 hover:text-primary [&.router-link-exact-active]:bg-white/20 [&.router-link-exact-active]:font-semibold"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </aside>
  </header>
</template>