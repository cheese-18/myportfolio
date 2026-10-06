<script setup>
import { ref, computed } from 'vue'
import { portfolioData } from '../data/portfolio'
import { ExternalLink, Github, Box, Code } from 'lucide-vue-next'

const selectedCategory = ref('All')

// Extract unique categories/tags
const categories = computed(() => {
  const tags = new Set(['All'])
  portfolioData.projects.forEach(p => {
    p.tech.forEach(t => tags.add(t))
  })
  return Array.from(tags).slice(0, 6)
})

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return portfolioData.projects
  return portfolioData.projects.filter(p => p.tech.includes(selectedCategory.value))
})
</script>

<template>
  <section id="projects" class="py-16 border-t-4 border-[#3c2f1f] dark:border-[#4d2b77] bg-[#cda975]/40 dark:bg-[#140a24]/60">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      
      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div class="flex items-center gap-3">
          <Box class="w-7 h-7 text-amber-900 dark:text-emerald-400" />
          <h2 class="text-2xl sm:text-3xl font-pixel font-bold tracking-tight text-[#2b1e10] dark:text-yellow-100">
            Crafted Projects
          </h2>
        </div>

        <!-- Filter Tags -->
        <div class="flex flex-wrap items-center gap-2">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            class="mc-button px-3 py-1 font-pixel text-xs transition-all duration-200"
            :class="{ '!bg-emerald-700 !text-yellow-200 !border-yellow-400 shadow-md scale-105': selectedCategory === cat }"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.title"
          class="mc-card p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
        >
          <!-- Top Accent Light -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/60 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div>
            <!-- Header with Code icon badge -->
            <div class="flex items-center justify-between mb-2">
              <span class="font-pixel text-[10px] text-amber-800 dark:text-purple-300 tracking-wider">
                QUEST_0{{ index + 1 }}
              </span>
              <Code class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-emerald-400 transition-colors" />
            </div>

            <h3 class="text-xl sm:text-2xl font-pixel font-bold text-[#2e200f] dark:text-yellow-100 mb-2 group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-[#47341e] dark:text-purple-200 text-lg font-minecraft mb-5 leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <div>
            <!-- Tech badges as Minecraft Item tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="tag in project.tech" 
                :key="tag"
                class="text-xs font-pixel px-2 py-1 bg-[#866043] dark:bg-[#3d1a5a] text-yellow-100 border border-black/40 shadow-inner hover:scale-105 transition-transform select-none"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Action buttons -->
            <div class="flex items-center gap-4 font-pixel text-xs">
              <a 
                :href="project.demoUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="mc-button-primary px-3.5 py-2 flex items-center gap-1.5 transition-transform active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink class="w-3.5 h-3.5" />
              </a>
              <a 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="mc-button px-3.5 py-2 flex items-center gap-1.5 transition-transform active:scale-95"
              >
                <span>Source</span>
                <Github class="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
