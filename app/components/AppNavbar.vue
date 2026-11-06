<script setup lang="ts">
import { PhHouse, PhUser, PhCode, PhCertificate, PhEnvelope, PhList, PhX } from '@phosphor-icons/vue'
const route = useRoute()
const isOpen = ref(false)
const isHome = computed(() => route.path === '/')

const links = [
  { label: 'Home', to: '/', icon: PhHouse },
  { label: 'About', to: '/about', icon: PhUser },
  { label: 'Tech Stack', to: '/tech-stack', icon: PhCode },
  { label: 'Certifications', to: '/certifications', icon: PhCertificate },
  { label: 'Contact', to: '/contact', icon: PhEnvelope },
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
            class="inline-flex items-center gap-1.5 border-b-2 border-transparent pb-1 text-[0.95rem] italic transition-colors hover:border-white/55 [&.router-link-exact-active]:border-white [&.router-link-exact-active]:font-semibold"
          >
            <component :is="link.icon" :size="18" />
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
        <PhList :size="22" />
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
      <div class="flex h-14 items-center justify-end border-b border-white/30 px-6">
        <button
          type="button"
          class="btn btn-square btn-ghost btn-sm text-white"
          aria-label="Close menu"
          @click="close"
        >
          <PhX :size="20" />
        </button>
      </div>

      <ul class="flex flex-col py-2">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="flex items-center gap-3 px-6 py-3.5 italic text-white transition-colors hover:bg-base-100 hover:text-primary [&.router-link-exact-active]:bg-white/20 [&.router-link-exact-active]:font-semibold"
          >
            <component :is="link.icon" :size="20" />
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </aside>
  </header>
</template>