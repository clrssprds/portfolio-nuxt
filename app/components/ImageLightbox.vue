<script setup lang="ts">
const props = defineProps<{
  src: string | null
alt?: string
}>()

const emit = defineEmits<{ close: [] }>()
const dialog = ref<HTMLDialogElement | null>(null)

watch(
  () => props.src,
  (src) => {
    if (src) dialog.value?.showModal()
    else dialog.value?.close()
  },
)
</script>

<template>
  <dialog ref="dialog" class="modal" @close="emit('close')">
    <div class="modal-box max-w-5xl bg-transparent p-0 shadow-none">
      <img
        v-if="src"
        :src="src" :alt="alt"
        class="mx-auto max-h-[85vh] rounded-lg object-contain"
      />
    </div>

    <form method="dialog" class="modal-backdrop bg-black/85">
      <button aria-label="Close">close</button>
    </form>
  </dialog>
</template>