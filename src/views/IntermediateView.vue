<template>
  <BaseContainer desc="Which one is the correct pair?">
    <div class="flex justify-center items-center w-full min-h-[60vh]">
      <div class="flex flex-col justify-between items-center gap-6 mx-12 p-4" @click="handleClick">
        <OptionButton
          v-for="option in kanjiOption"
          :key="option.id"
          :id="option.id"
          :desc="option.kanji"
          class="kanji"
        />
      </div>
      <div class="flex flex-col justify-between items-center gap-6 mx-12 p-4" @click="handleClick">
        <OptionButton
          v-for="option in hiraganaOption"
          :key="option.id"
          :id="option.id"
          :desc="option.hiragana"
          class="hiragana"
        />
      </div>
    </div>
    <ProgressBar></ProgressBar>
  </BaseContainer>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue'
import BaseContainer from '../components/BaseContainer.vue'
import OptionButton from '../components/OptionButton.vue'
import ProgressBar from '../components/ProgressBar.vue'
import { intermediateQuestions } from '../utils/data'
import { pickQuestion } from '../utils/helper.js'

const kanjiOption = ref()
const hiraganaOption = ref()
const questions = intermediateQuestions.slice()

const kanji = ref('')
const hiragana = ref('')
const answeredQuestion = ref(0)

function createBatch() {
  const leftArr = []
  const rightArr = []

  for (let i = 0; i < 4; i++) {
    const pair = pickQuestion(questions)
    leftArr.push(pair)
    rightArr.push(pair)
  }

  leftArr.sort(() => Math.random() - 0.5)
  rightArr.sort(() => Math.random() - 0.5)

  kanjiOption.value = leftArr
  hiraganaOption.value = rightArr
}

const handleClick = (e) => {
  if (!e.target.classList.contains('btn')) return
  if (e.target.classList.contains('kanji')) kanji.value = e.target
  else hiragana.value = e.target
  e.target.classList.remove('to-[#2d0d6c]')
  e.target.classList.add('to-[#00ff22]')
}

watch([kanji, hiragana], ([kanjiValue, hiraganaValue]) => {
  if (!kanjiValue | !hiraganaValue) return
  if (kanjiValue.id === hiraganaValue.id) {
    kanjiValue.style.visibility = 'hidden'
    hiraganaValue.style.visibility = 'hidden'
    answeredQuestion.value++
    kanji.value = ''
    hiragana.value = ''
  } else {
    kanjiValue.classList.remove('to-[#2d0d6c]')
    kanjiValue.classList.add('to-[#ff0000]')
    hiraganaValue.classList.remove('to-[#2d0d6c]')
    hiraganaValue.classList.add('to-[#ff0000]')
    kanji.value = ''
    hiragana.value = ''
    setTimeout(() => {
      kanjiValue.classList.add('to-[#2d0d6c]')
      kanjiValue.classList.remove('to-[#ff0000]')
      hiraganaValue.classList.add('to-[#2d0d6c]')
      hiraganaValue.classList.remove('to-[#ff0000]')
    }, 1000)
  }
})

watch(answeredQuestion, (answeredQuestion) => {
  console.log(answeredQuestion)
  if (answeredQuestion % 4 === 0) {
    createBatch()
  }
})

watchEffect(() => createBatch())
</script>
