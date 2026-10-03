<script setup>
import { computed } from 'vue'

const props = defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <!-- Overworld Mode: Floating Pixel Clouds & Sun -->
    <div v-if="!isDark" class="relative w-full h-full">
      <!-- Minecraft Sun -->
      <div class="absolute top-12 right-16 w-20 h-20 bg-yellow-200 border-4 border-yellow-400 shadow-[0_0_40px_rgba(255,230,100,0.8)]"></div>
      
      <!-- Clouds -->
      <div class="mc-cloud w-48 h-12 top-24 left-[10%] opacity-80" style="animation: floatClouds 50s linear infinite;"></div>
      <div class="mc-cloud w-64 h-14 top-48 left-[45%] opacity-70" style="animation: floatClouds 70s linear infinite 5s;"></div>
      <div class="mc-cloud w-56 h-10 top-16 left-[75%] opacity-75" style="animation: floatClouds 60s linear infinite 15s;"></div>
    </div>

    <!-- The End Mode: Ender Particles & Void Ambience -->
    <div v-else class="relative w-full h-full">
      <!-- Ender Particles -->
      <div 
        v-for="n in 30" 
        :key="n" 
        class="end-particle"
        :style="{
          left: `${(n * 3.3) % 100}%`,
          top: `${(n * 7.1) % 95 + 5}%`,
          animationDuration: `${2 + (n % 4)}s`,
          animationDelay: `${(n % 5) * 0.5}s`
        }"
      ></div>

      <!-- Distant End Sky glow -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-900/20 blur-3xl rounded-full"></div>
    </div>
  </div>
</template>
