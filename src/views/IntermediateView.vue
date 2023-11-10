<template>
  <BaseContainer desc="Which one is the correct pair?">
    <div class="flex justify-center items-center w-full min-h-[60vh]">
      <div class="flex flex-col justify-between items-center gap-6 mx-12 p-4">
        <OptionButton desc=".." />
        <OptionButton desc=".." />
        <OptionButton desc=".." />
        <OptionButton desc=".." />
      </div>
      <div class="flex flex-col justify-between items-center gap-6 mx-12 p-4">
        <OptionButton desc=".." />
        <OptionButton desc=".." />
        <OptionButton desc=".." />
        <OptionButton desc=".." />
      </div>
    </div>
    <ProgressBar></ProgressBar>
  </BaseContainer>
</template>

<script setup>
import BaseContainer from '../components/BaseContainer.vue'
import OptionButton from '../components/OptionButton.vue'
import ProgressBar from '../components/ProgressBar.vue'
</script>
