<template>
  <BaseContainer desc="Which kanji is correct for following images">
    <div class="flex justify-center items-center w-full min-h-[60vh]">
      <div class="bg-[#0F0F0F] border-solid border-[#2d0d6c] border-8 rounded-3xl mx-8">
        <img src="#" class="w-72 h-72" alt="Question images" />
      </div>
      <div class="flex flex-col justify-between items-center gap-6 mx-8 p-4">
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
