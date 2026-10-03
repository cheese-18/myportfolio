<script setup>
import { portfolioData } from '../data/portfolio'
import { Github, Instagram, Facebook, Sword, Pickaxe } from 'lucide-vue-next'
import MinecraftSkinViewer from './MinecraftSkinViewer.vue'
const skinUrl = `${import.meta.env.BASE_URL}skin.png`
</script>

<template>
  <section class="py-12 md:py-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center gap-10">
      
      <!-- Text & Bio -->
      <div class="flex-1 space-y-6 text-center md:text-left">
        <!-- Status badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 text-xs font-pixel uppercase tracking-wider text-green-950 dark:text-emerald-300 bg-green-200/90 dark:bg-emerald-950/80 border-2 border-green-800 dark:border-emerald-500 shadow-sm">
          <span class="w-2 h-2 bg-green-600 dark:bg-emerald-400 animate-ping"></span>
          Ready to Craft & Code
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-pixel text-[#271d10] dark:text-yellow-100 tracking-tight drop-shadow-sm">
          Hi, I'm <span class="text-green-700 dark:text-emerald-400">Rean Coopera</span>, AKA <span class="text-yellow-500 dark:text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">Cheese</span>
        </h1>

        <p class="text-2xl sm:text-3xl font-minecraft text-[#4a361e] dark:text-purple-200 font-bold">
          Level 99 • {{ portfolioData.title }}
        </p>

        <div class="mc-card p-5 text-lg sm:text-xl font-minecraft text-[#3b2b18] dark:text-purple-100 leading-relaxed">
          {{ portfolioData.bio }}
        </div>

        <!-- Action buttons -->
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 font-pixel text-xs">
          <a 
            href="#projects" 
            class="mc-button-primary px-6 py-3 flex items-center gap-2 text-sm font-bold"
          >
            <Sword class="w-4 h-4" />
            <span>View Quests</span>
          </a>
          <a 
            href="#contact" 
            class="mc-button px-6 py-3 flex items-center gap-2 text-sm font-bold"
          >
            <Pickaxe class="w-4 h-4" />
            <span>Send Message</span>
          </a>
        </div>

        <!-- Socials -->
        <div class="flex items-center justify-center md:justify-start gap-4 pt-2 text-[#49351e] dark:text-purple-300">
          <a :href="portfolioData.socials.github" target="_blank" rel="noopener noreferrer" class="mc-button p-2.5 hover:scale-105 transition" title="GitHub">
            <Github class="w-5 h-5" />
          </a>
          <a :href="portfolioData.socials.facebook" target="_blank" rel="noopener noreferrer" class="mc-button p-2.5 hover:scale-105 transition" title="Facebook">
            <Facebook class="w-5 h-5" />
          </a>
          <a :href="portfolioData.socials.instagram" target="_blank" rel="noopener noreferrer" class="mc-button p-2.5 hover:scale-105 transition" title="Instagram">
            <Instagram class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- 3D Interactive Minecraft Skin Viewer -->
      <div class="flex-shrink-0">
        <MinecraftSkinViewer :skin-url="skinUrl" />
      </div>

    </div>
  </section>
</template>
