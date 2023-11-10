<template>
  <Teleport to="body">
    <div
      class="fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.75)] z-10"
      @click="emit('close')"
    ></div>
    <dialog
      open
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] z-50 rounded-lg border-none shadow-inner shadow-[#4118bc] p-0 m-0 overflow-scroll bg-gradient-to-br from-[#0F0F0F] to-[#2d0d6c]"
    >
      <div class="flex justify-end w-full p-6">
        <button class="w-8 h-8" @click="emit('close')">
          <svg
            enable-background="new 0 0 32 32"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 32 32"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient id="myGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: #0918c4; stop-opacity: 1" />
                <stop offset="100%" style="stop-color: #7f17b3; stop-opacity: 1" />
              </linearGradient>
            </defs>
            <g>
              <polyline
                fill="url(#myGradient)"
                points="649,137.999 675,137.999 675,155.999 661,155.999"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <polyline
                fill="url(#myGradient)"
                points="653,155.999 649,155.999 649,141.999"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <polyline
                fill="url(#myGradient)"
                points="661,156 653,162 653,156"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
            <g>
              <path
                fill="url(#myGradient)"
                d="M11.312,12.766c0.194,0.195,0.449,0.292,0.704,0.292c0.255,0,0.51-0.097,0.704-0.292c0.389-0.389,0.389-1.02,0-1.409 L4.755,3.384c-0.389-0.389-1.019-0.389-1.408,0s-0.389,1.02,0,1.409L11.312,12.766z"
              />
              <path
                fill="url(#myGradient)"
                d="M17.407,16.048L28.652,4.793c0.389-0.389,0.389-1.02,0-1.409c-0.389-0.389-1.019-0.561-1.408-0.171 L15.296,15c0,0-0.296,0-0.296,0s0,0.345,0,0.345L3.2,27.303c-0.389,0.389-0.315,1.02,0.073,1.409c0.194,0.195,0.486,0.292,0.741,0.292 s0.528-0.097,0.722-0.292L15.99,17.458l11.249,11.255c0.194,0.195,0.452,0.292,0.706,0.292s0.511-0.097,0.705-0.292 c0.389-0.389,0.39-1.02,0.001-1.409L17.407,16.048z"
              />
            </g>
          </svg>
        </button>
      </div>
      <section class="p-4 min-h-[50vh] w-full overflow-hidden">
        <slot name="content">
          <p class="text-white align-middle text-justify text-lg font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quod deserunt pariatur
            incidunt magnam tenetur at aut, maiores omnis quasi mollitia est officiis vel
            consectetur eaque, nulla quidem, explicabo voluptatibus?
          </p>
        </slot>
      </section>
      <menu class="p-4 flex m-0 justify-center items-center">
        <slot name="action">
          <BaseButton @click="emit('close')" desc="Close" />
        </slot>
      </menu>
    </dialog>
  </Teleport>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
const emit = defineEmits(['close'])
</script>
