<template>
  <button
    class="w-72 h-16 font-bold text-xl border-none rounded-lg bg-gradient-to-tr from-[#0F0F0F] to-[#2d0d6c] shadow-inner text-white text-4 shadow-[#4118bc]"
  >
    {{ desc }}
  </button>
</template>

<script setup>
const props = defineProps({
  desc: String
})
</script>
