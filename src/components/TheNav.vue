<template>
  <BaseModal v-if="showModal" @close="toggleModal" />
  <nav class="flex justify-between py-8 px-14 w-screen">
    <RouterLink to="/">
      <svg class="w-12 h-12" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="myGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #0918c4; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #7f17b3; stop-opacity: 1" />
          </linearGradient>
        </defs>
        <g data-name="18" id="_18" fill="url(#myGradient)">
          <path
            d="M28.71,15.29l-12-12a1,1,0,0,0-1.42,0l-12,12a1,1,0,0,0-.21,1.09A1,1,0,0,0,4,17H6V28a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1V17h2a1,1,0,0,0,.92-.62A1,1,0,0,0,28.71,15.29Z"
          />
        </g>
      </svg>
    </RouterLink>
    <button @click="toggleModal">
      <svg
        class="w-12 h-12"
        height="24"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="myGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #0918c4; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #7f17b3; stop-opacity: 1" />
          </linearGradient>
        </defs>
        <g stroke="currentColor">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="url(#myGradient)"
          />
          <path
            d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="url(#myGradient)"
          />
          <path
            d="M12 18.01L12.01 17.9989"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="url(#myGradient)"
          />
        </g>
      </svg>
    </button>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import BaseModal from './BaseModal.vue'
import { ref } from 'vue'

const showModal = ref(false)
function toggleModal() {
  showModal.value = !showModal.value
}
</script>
