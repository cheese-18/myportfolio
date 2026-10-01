<script setup>
import { portfolioData } from '../data/portfolio'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-vue-next'
</script>

<template>
  <section class="py-20 md:py-28">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
      <div class="flex-1 space-y-6">
        <div class="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-100 dark:text-indigo-300 dark:bg-indigo-900/40 rounded-full">
          Available for hire
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Hi, I'm <span class="text-indigo-600 dark:text-indigo-400">{{ portfolioData.name }}</span>
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-300 font-medium">
          {{ portfolioData.title }}
        </p>
        <p class="text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          {{ portfolioData.bio }}
        </p>

        <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <a 
            href="#projects" 
            class="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            View Work
          </a>
          <a 
            href="#contact" 
            class="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Get in Touch
          </a>
        </div>

        <div class="flex items-center justify-center md:justify-start gap-5 pt-4 text-slate-500 dark:text-slate-400">
          <a :href="portfolioData.socials.github" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 dark:hover:text-white">
            <Github class="w-5 h-5" />
          </a>
          <a :href="portfolioData.socials.linkedin" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 dark:hover:text-white">
            <Linkedin class="w-5 h-5" />
          </a>
          <a :href="`mailto:${portfolioData.email}`" class="hover:text-slate-900 dark:hover:text-white">
            <Mail class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
