<script setup>
import { Compass, Flame, Sparkles } from 'lucide-vue-next'

defineProps({
  currentDimension: {
    type: String,
    default: 'overworld' // 'overworld' | 'nether' | 'end'
  }
})

const emit = defineEmits(['set-dimension'])
</script>

<template>
  <nav class="sticky top-0 z-40 bg-[#d6b885]/95 dark:bg-[#1a0c2e]/95 nether:bg-[#3d0f0f]/95 border-b-4 border-[#3c2f1f] dark:border-[#4d2b77] nether:border-[#6b1616] backdrop-blur-sm shadow-md font-pixel">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
      <a href="#" class="font-bold text-lg sm:text-xl tracking-wider text-[#3c2f1f] dark:text-purple-200 nether:text-yellow-200 hover:text-green-800 dark:hover:text-emerald-400 nether:hover:text-orange-400 flex items-center gap-2">
        <span 
          class="inline-block w-4 h-4 border border-black"
          :class="{
            'bg-green-600': currentDimension === 'overworld',
            'bg-red-600': currentDimension === 'nether',
            'bg-purple-600': currentDimension === 'end'
          }"
        ></span>
        Portfolio
      </a>

      <div class="flex items-center gap-4 sm:gap-6">
        <ul class="hidden md:flex items-center gap-6 text-xs font-semibold text-[#44321c] dark:text-purple-300 nether:text-orange-200">
          <li><a href="#about" class="hover:text-green-800 dark:hover:text-emerald-400 nether:hover:text-yellow-300 transition">About</a></li>
          <li><a href="#projects" class="hover:text-green-800 dark:hover:text-emerald-400 nether:hover:text-yellow-300 transition">Projects</a></li>
          <li><a href="#experience" class="hover:text-green-800 dark:hover:text-emerald-400 nether:hover:text-yellow-300 transition">Experience</a></li>
          <li><a href="#contact" class="hover:text-green-800 dark:hover:text-emerald-400 nether:hover:text-yellow-300 transition">Contact</a></li>
        </ul>

        <!-- 3-Dimension Portal Switch Buttons -->
        <div class="flex items-center gap-1.5 p-1 bg-black/40 rounded border-2 border-black/80">
          <!-- Overworld Button -->
          <button 
            @click="emit('set-dimension', 'overworld')"
            :title="'Switch to Overworld'"
            class="px-2.5 py-1.5 text-xs font-pixel flex items-center gap-1 transition cursor-pointer border-2"
            :class="currentDimension === 'overworld' 
              ? 'bg-[#2e6e30] text-yellow-200 border-black shadow' 
              : 'bg-[#5c5c5c] text-gray-200 border-black/50 hover:bg-[#707070]'"
          >
            <Compass class="w-3.5 h-3.5 text-green-300" />
            <span class="hidden sm:inline">Overworld</span>
          </button>

          <!-- Nether Button -->
          <button 
            @click="emit('set-dimension', 'nether')"
            :title="'Switch to Nether'"
            class="px-2.5 py-1.5 text-xs font-pixel flex items-center gap-1 transition cursor-pointer border-2"
            :class="currentDimension === 'nether' 
              ? 'bg-[#991b1b] text-yellow-200 border-black shadow' 
              : 'bg-[#5c5c5c] text-gray-200 border-black/50 hover:bg-[#707070]'"
          >
            <Flame class="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span class="hidden sm:inline">Nether</span>
          </button>

          <!-- The End Button -->
          <button 
            @click="emit('set-dimension', 'end')"
            :title="'Switch to The End'"
            class="px-2.5 py-1.5 text-xs font-pixel flex items-center gap-1 transition cursor-pointer border-2"
            :class="currentDimension === 'end' 
              ? 'bg-[#6a1b9a] text-yellow-200 border-black shadow' 
              : 'bg-[#5c5c5c] text-gray-200 border-black/50 hover:bg-[#707070]'"
          >
            <Sparkles class="w-3.5 h-3.5 text-purple-300" />
            <span class="hidden sm:inline">The End</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
