<script setup>
import { portfolioData } from '../data/portfolio'
import { ExternalLink, Github, Box } from 'lucide-vue-next'
</script>

<template>
  <section id="projects" class="py-16 border-t-4 border-[#3c2f1f] dark:border-[#4d2b77] bg-[#cda975]/40 dark:bg-[#140a24]/60">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="flex items-center gap-3 mb-8">
        <Box class="w-7 h-7 text-amber-900 dark:text-emerald-400" />
        <h2 class="text-2xl sm:text-3xl font-pixel font-bold tracking-tight text-[#2b1e10] dark:text-yellow-100">
          Crafted Projects
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(project, index) in portfolioData.projects" 
          :key="index"
          class="mc-card p-6 flex flex-col justify-between transition-transform hover:-translate-y-1"
        >
          <div>
            <h3 class="text-xl sm:text-2xl font-pixel font-bold text-[#2e200f] dark:text-yellow-100 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-[#47341e] dark:text-purple-200 text-lg font-minecraft mb-4 leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <div>
            <!-- Tech badges as Minecraft Item tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="tag in project.tech" 
                :key="tag"
                class="text-xs font-pixel px-2 py-1 bg-[#866043] dark:bg-[#3d1a5a] text-yellow-100 border border-black/40 shadow-inner"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex items-center gap-4 font-pixel text-xs">
              <a 
                :href="project.demoUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="mc-button-primary px-3 py-1.5 flex items-center gap-1.5"
              >
                <span>Live Demo</span>
                <ExternalLink class="w-3.5 h-3.5" />
              </a>
              <a 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="mc-button px-3 py-1.5 flex items-center gap-1.5"
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
