<template>
  <RouterLink
    :to="destination"
    class="w-60 h-16 font-bold text-2xl border-none rounded-lg bg-gradient-to-tr from-[#7f17b3] to-[#0918c4] shadow-lg text-white text-4 relative shadow-[#4118bc] hover:bottom-2 p-4 align-middle text-center"
  >
    {{ desc }}
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  destination: String,
  desc: String
})
</script>
