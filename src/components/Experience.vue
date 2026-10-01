<script setup>
import { portfolioData } from '../data/portfolio'
</script>

<template>
  <section id="experience" class="py-16 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Skills -->
      <div id="about">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          Skills & Tech
        </h2>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="skill in portfolioData.skills" 
            :key="skill"
            class="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Experience -->
      <div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          Experience
        </h2>
        <div class="space-y-6">
          <div 
            v-for="(job, index) in portfolioData.experience" 
            :key="index"
            class="relative pl-6 border-l-2 border-indigo-500 space-y-1"
          >
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">
              {{ job.role }}
            </h3>
            <div class="text-sm font-medium text-slate-500 dark:text-slate-400">
              {{ job.company }} • {{ job.period }}
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              {{ job.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
