<script setup>
import { portfolioData } from '../data/portfolio'
import { ExternalLink, Github } from 'lucide-vue-next'
</script>

<template>
  <section id="projects" class="py-16 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
        Featured Projects
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(project, index) in portfolioData.projects" 
          :key="index"
          class="flex flex-col justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition"
        >
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {{ project.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <div>
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="tag in project.tech" 
                :key="tag"
                class="text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex items-center gap-4 text-sm font-medium">
              <a 
                :href="project.demoUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <span>Live Demo</span>
                <ExternalLink class="w-3.5 h-3.5" />
              </a>
              <a 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
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
