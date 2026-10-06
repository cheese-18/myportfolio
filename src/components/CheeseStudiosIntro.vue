<script setup>
import { ref, onMounted } from 'vue'

const showSplash = ref(true)
const isFading = ref(false)
const progress = ref(0)

const finishSplash = () => {
  isFading.value = true
  setTimeout(() => {
    showSplash.value = false
  }, 700)
}

onMounted(() => {
  // Animate loading bar
  const interval = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.floor(Math.random() * 20) + 10
      if (progress.value > 90) progress.value = 90
    }
  }, 200)

  setTimeout(() => {
    progress.value = 100
    clearInterval(interval)
    setTimeout(() => {
      finishSplash()
    }, 400)
  }, 1800)
})
</script>

<template>
  <div 
    v-if="showSplash"
    @click="finishSplash"
    :class="[
      'fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none cursor-pointer transition-opacity duration-700 bg-[#ef323d]',
      isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
    ]"
  >
    <!-- Cheese Studios logo -->
    <div class="flex flex-col items-center justify-center space-y-6 animate-in zoom-in-95 duration-500">
      
      <div class="flex items-center gap-2 sm:gap-3 text-white">
        <svg class="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M13 32C13 27 17 23 22 24L82 39C87 40 89 45 87 50L75 78C73 83 69 85 64 83L18 68C13 66 11 62 13 57L13 32Z" fill="white" />
          <circle cx="34" cy="41" r="5" fill="#ef323d" />
          <circle cx="63" cy="49" r="6" fill="#ef323d" />
          <circle cx="43" cy="64" r="4" fill="#ef323d" />
        </svg>

        <!-- Brand Typography -->
        <div class="flex flex-col leading-none font-bold tracking-tight">
          <span class="text-4xl sm:text-6xl font-black font-sans uppercase tracking-widest text-white drop-shadow-sm">
            CHEESE
          </span>
          <span class="text-xs sm:text-sm font-sans tracking-[0.35em] text-white/90 uppercase pl-1 mt-1 font-semibold">
            S T U D I O S
          </span>
        </div>
      </div>

      <!-- Custom Sub-Logo Badge -->
      <div class="flex items-center gap-2 px-3 py-1 bg-black/20 rounded border border-white/30 text-white font-pixel text-xs tracking-wider">
        <span>CHEESE PORTFOLIO EDITION</span>
      </div>

      <!-- Loading Bar -->
      <div class="w-48 sm:w-64 h-3 bg-black/30 rounded-full overflow-hidden p-0.5 border border-white/40 mt-4">
        <div 
          class="h-full bg-white rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>

      <!-- Click to skip hint -->
      <div class="text-white/60 font-pixel text-[10px] tracking-widest uppercase animate-pulse pt-2">
        Click anywhere to skip
      </div>
    </div>
  </div>
</template>
