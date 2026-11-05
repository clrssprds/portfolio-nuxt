<template>
  <div class="flex min-h-screen flex-col">
    <AppNavbar />
    <main
      class="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-10 md:px-10 md:py-12"
    >
      <slot />
    </main>
    <AppFooter />
  </div>
</template>