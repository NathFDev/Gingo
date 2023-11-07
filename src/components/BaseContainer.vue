<template>
  <div class="w-screen border-white border-solid border-4">
    <h1 class="text-white font-bold text-4xl text-center align-middle p-2">
      {{ desc }}
    </h1>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  desc: String
})
</script>
