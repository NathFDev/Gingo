<template>
  <BaseContainer desc="Read the text bellow and choose the correct answer">
    <div class="flex flex-col gap-6 justify-center items-center w-full min-h-[60vh] p-4">
      <div
        class="w-[80%] bg-[#0F0F0F] border-solid border-[#2d0d6c] border-8 rounded-3xl min-h-[20rem] p-4 text-justify"
      >
        <span class="text-white align-top text-xl text-bold">{{ question.text }}</span>
      </div>
      <div class="grid grid-cols-2 gap-12 mx-auto p-4" @click="handleClick">
        <OptionButton
          v-for="option in question.options"
          :key="question.id + option"
          :desc="option"
        />
      </div>
    </div>
    <ProgressBar></ProgressBar>
  </BaseContainer>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import BaseContainer from '../components/BaseContainer.vue'
import OptionButton from '../components/OptionButton.vue'
import ProgressBar from '../components/ProgressBar.vue'
import { expertQuestions } from '../utils/data'
import { fetchQuestions, pickQuestion, handleAnswer } from '../utils/helper.js'

const questions = fetchQuestions(expertQuestions)
const question = ref()
const handleClick = (e) => {
  if (!e.target.classList.contains('btn')) return
  handleAnswer(e, question.value)
  setTimeout(() => {
    question.value = pickQuestion(questions)
  }, 2000)
}
watchEffect(() => (question.value = pickQuestion(questions)))
</script>
