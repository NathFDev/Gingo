<template>
  <div>
    <BaseModal v-if="show" @close="toggleModal">
      <template #content>
        <div class="flex items-center justify-center w-full h-full">
          <span class="text-[12rem]">{{ source }}</span>
        </div>
      </template>
      <template #action>
        <LinkButton :destination="destination" desc="Start" />
      </template>
    </BaseModal>
    <div class="flex items-center justify-center my-14 h-[40vh]">
      <h1
        class="text-transparent bg-gradient-to-tr from-[#7f17b3] to-[#0918c4] bg-clip-text text-[11rem] font-bold"
      >
        GINGO
      </h1>
    </div>
    <div class="flex w-screen items-center justify-evenly">
      <BaseButton id="beginner" @click="handleRouting" desc="Beginner"></BaseButton>
      <BaseButton id="intermediate" @click="handleRouting" desc="Intermediate"></BaseButton>
      <BaseButton id="expert" @click="handleRouting" desc="Expert"></BaseButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import BaseModal from '../components/BaseModal.vue'
import LinkButton from '../components/LinkButton.vue'

const emoji = {
  beginner: '⭐',
  intermediate: '🪐',
  expert: '🌌'
}

const source = ref('#')
const show = ref(false)
const destination = ref('/')
function toggleModal() {
  show.value = !show.value
}
function handleRouting(e) {
  const id = e.target.id
  destination.value = id
  source.value = emoji[id]

  toggleModal()
}
</script>
