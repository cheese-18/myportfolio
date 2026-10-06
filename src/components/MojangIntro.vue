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
    <!-- Mojang Studios Style Logo Container -->
    <div class="flex flex-col items-center justify-center space-y-6 animate-in zoom-in-95 duration-500">
      
      <!-- Authentic Red & White Mojang Studios Geometric Emblem -->
      <div class="flex items-center gap-2 sm:gap-3 text-white">
        <!-- Logo Emblem -->
        <svg class="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Outer Rounded Badge -->
          <rect x="5" y="5" width="90" height="90" rx="18" fill="white" />
          <!-- Characteristic Mojang geometric cuts -->
          <path d="M22 26 H42 V74 H22 Z" fill="#ef323d" />
          <path d="M42 26 H78 V44 H42 Z" fill="#ef323d" />
          <path d="M58 44 H78 V74 H58 Z" fill="#ef323d" />
          <circle cx="50" cy="59" r="6" fill="#ef323d" />
        </svg>

        <!-- Brand Typography -->
        <div class="flex flex-col leading-none font-bold tracking-tight">
          <span class="text-4xl sm:text-6xl font-black font-sans uppercase tracking-widest text-white drop-shadow-sm">
            MOJANG
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

<style scoped>
@keyframes mojangPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}
</style>
