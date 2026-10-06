<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolio'
import { Hammer, Scroll, Check } from 'lucide-vue-next'

const copiedSkill = ref(null)

const copySkill = (skill) => {
  navigator.clipboard.writeText(skill)
  copiedSkill.value = skill
  setTimeout(() => {
    copiedSkill.value = null
  }, 2000)
}
</script>

<template>
  <section id="experience" class="py-16 border-t-4 border-[#3c2f1f] dark:border-[#4d2b77]">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      <!-- Skills Inventory -->
      <div id="about" class="mc-card p-6">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-2">
            <Hammer class="w-6 h-6 text-amber-900 dark:text-purple-300" />
            <h2 class="text-xl sm:text-2xl font-pixel font-bold tracking-tight text-[#2c1e0e] dark:text-yellow-100">
              Enchanted Skills
            </h2>
          </div>
          <span class="text-[10px] font-pixel text-gray-700 dark:text-gray-400">Click to Copy</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          <button 
            v-for="skill in portfolioData.skills" 
            :key="skill"
            @click="copySkill(skill)"
            class="px-2.5 py-2.5 bg-[#707070] text-gray-100 dark:bg-[#1a0f2e] dark:text-purple-200 border-2 border-black/60 shadow-inner font-pixel text-xs text-center hover:bg-emerald-800 dark:hover:bg-purple-900 transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-95 group relative"
          >
            <span>{{ skill }}</span>
            <Check v-if="copiedSkill === skill" class="w-3.5 h-3.5 text-yellow-300" />
            <span 
              v-if="copiedSkill === skill" 
              class="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black text-yellow-300 text-[9px] font-pixel rounded shadow"
            >
              Copied!
            </span>
          </button>
        </div>
      </div>

      <!-- Experience Lore -->
      <div class="mc-card p-6">
        <div class="flex items-center gap-2 mb-6">
          <Scroll class="w-6 h-6 text-amber-900 dark:text-purple-300" />
          <h2 class="text-xl sm:text-2xl font-pixel font-bold tracking-tight text-[#2c1e0e] dark:text-yellow-100">
            Adventure Log
          </h2>
        </div>
        <div class="space-y-6">
          <div 
            v-for="(job, index) in portfolioData.experience" 
            :key="index"
            class="relative pl-5 border-l-4 border-green-700 dark:border-emerald-500 space-y-1 group transition-transform duration-200 hover:translate-x-1"
          >
            <div class="absolute -left-[9px] top-1.5 w-3.5 h-3.5 bg-yellow-400 border-2 border-black group-hover:scale-125 transition-transform"></div>
            <h3 class="text-lg font-pixel font-bold text-[#2e200f] dark:text-yellow-100 group-hover:text-green-800 dark:group-hover:text-emerald-300 transition-colors">
              {{ job.role }}
            </h3>
            <div class="text-sm font-pixel text-amber-950 dark:text-purple-300">
              {{ job.company }} • {{ job.period }}
            </div>
            <p class="text-base sm:text-lg font-minecraft text-[#3b2b18] dark:text-purple-200 leading-relaxed pt-1">
              {{ job.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
