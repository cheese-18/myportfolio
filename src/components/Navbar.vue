<script setup>
import { Compass, Sparkles } from 'lucide-vue-next'

defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-theme'])
</script>

<template>
  <nav class="sticky top-0 z-40 bg-[#d6b885]/95 dark:bg-[#1a0c2e]/95 border-b-4 border-[#3c2f1f] dark:border-[#4d2b77] backdrop-blur-sm shadow-md font-pixel">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
      <a href="#" class="font-bold text-lg sm:text-xl tracking-wider text-[#3c2f1f] dark:text-purple-200 hover:text-green-800 dark:hover:text-emerald-400 flex items-center gap-2">
        <span class="inline-block w-4 h-4 bg-green-600 dark:bg-purple-600 border border-black"></span>
        Portfolio
      </a>

      <div class="flex items-center gap-6">
        <ul class="hidden sm:flex items-center gap-6 text-xs md:text-sm font-semibold text-[#44321c] dark:text-purple-300">
          <li><a href="#about" class="hover:text-green-800 dark:hover:text-emerald-400 transition">About</a></li>
          <li><a href="#projects" class="hover:text-green-800 dark:hover:text-emerald-400 transition">Projects</a></li>
          <li><a href="#experience" class="hover:text-green-800 dark:hover:text-emerald-400 transition">Experience</a></li>
          <li><a href="#contact" class="hover:text-green-800 dark:hover:text-emerald-400 transition">Contact</a></li>
        </ul>

        <!-- Dimension switch button -->
        <button 
          @click="emit('toggle-theme')" 
          aria-label="Switch Dimension"
          class="mc-button px-3 py-2 text-xs flex items-center gap-2 cursor-pointer"
        >
          <Sparkles v-if="isDark" class="w-4 h-4 text-emerald-400 animate-spin" />
          <Compass v-else class="w-4 h-4 text-yellow-300" />
          <span class="hidden sm:inline">{{ isDark ? 'The End' : 'Overworld' }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>
