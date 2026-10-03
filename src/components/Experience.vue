<script setup>
import { portfolioData } from '../data/portfolio'
import { Hammer, Scroll } from 'lucide-vue-next'
</script>

<template>
  <section id="experience" class="py-16 border-t-4 border-[#3c2f1f] dark:border-[#4d2b77]">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      <!-- Skills Inventory -->
      <div id="about" class="mc-card p-6">
        <div class="flex items-center gap-2 mb-6">
          <Hammer class="w-6 h-6 text-amber-900 dark:text-purple-300" />
          <h2 class="text-xl sm:text-2xl font-pixel font-bold tracking-tight text-[#2c1e0e] dark:text-yellow-100">
            Enchanted Skills
          </h2>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <div 
            v-for="skill in portfolioData.skills" 
            :key="skill"
            class="px-2.5 py-2 bg-[#707070] text-gray-100 dark:bg-[#1a0f2e] dark:text-purple-200 border-2 border-black/60 shadow-inner font-pixel text-xs text-center hover:bg-[#858585] transition"
          >
            {{ skill }}
          </div>
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
            class="relative pl-5 border-l-4 border-green-700 dark:border-emerald-500 space-y-1"
          >
            <h3 class="text-lg font-pixel font-bold text-[#2e200f] dark:text-yellow-100">
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
