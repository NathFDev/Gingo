<template>
  <BaseContainer desc="Read the text bellow and choose the correct answer">
    <div class="flex flex-col gap-6 justify-center items-center w-full min-h-[60vh] p-4">
      <div
        class="w-[80%] bg-[#0F0F0F] border-solid border-[#2d0d6c] border-8 rounded-3xl min-h-[20rem] p-4 text-justify"
      >
        <span class="text-white align-top text-md text bold"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione quod harum dolore
          deleniti nesciunt blanditiis voluptatem, tenetur architecto nulla laboriosam sequi aperiam
          minus nihil culpa. Sequi nam omnis veniam assumenda cumque quis maxime ab vero tenetur
          temporibus quia rem aspernatur facilis unde, accusantium minus nihil porro voluptatibus
          quas quo repellat eius. Reiciendis placeat fugit quas, odit, minima adipisci quaerat quis
          similique excepturi dignissimos laborum! Velit qui rerum saepe nobis ducimus aut
          distinctio minus deleniti earum est necessitatibus esse aliquid nam dolorum sequi totam
          mollitia placeat, reprehenderit sint blanditiis eveniet alias et, consectetur nulla.
          Asperiores porro qui expedita pariatur tenetur!</span
        >
      </div>
      <div class="flex">
        <div class="flex flex-col justify-between items-center gap-6 mx-12 p-4">
          <OptionButton desc=".." />
          <OptionButton desc=".." />
          <OptionButton desc=".." />
        </div>
        <div class="flex flex-col justify-between items-center gap-6 mx-12 p-4">
          <OptionButton desc=".." />
          <OptionButton desc=".." />
          <OptionButton desc=".." />
        </div>
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
