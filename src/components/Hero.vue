<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolio'
import { Github, Instagram, Facebook, Sword, Pickaxe, User, Box, FileDown, Check } from 'lucide-vue-next'
import MinecraftSkinViewer from './MinecraftSkinViewer.vue'
import { generateResumePDF } from '../utils/generatePdf'

const skinUrl = `${import.meta.env.BASE_URL}skin.png`
const profileUrl = `${import.meta.env.BASE_URL}profile.jpg`

const displayMode = ref('avatar') // 'avatar' or 'skin'
const isDownloadingPdf = ref(false)

const handleDownloadPdf = () => {
  isDownloadingPdf.value = true
  try {
    generateResumePDF()
  } catch (err) {
    console.error('Failed to generate PDF:', err)
  } finally {
    setTimeout(() => {
      isDownloadingPdf.value = false
    }, 2000)
  }
}
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
          <button 
            @click="handleDownloadPdf"
            class="mc-button px-6 py-3 flex items-center gap-2 text-sm font-bold hover:text-yellow-300 cursor-pointer"
            :disabled="isDownloadingPdf"
          >
            <Check v-if="isDownloadingPdf" class="w-4 h-4 text-green-400" />
            <FileDown v-else class="w-4 h-4 text-yellow-400 animate-bounce" />
            <span>{{ isDownloadingPdf ? 'Downloaded!' : 'Download Resume (PDF)' }}</span>
          </button>
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

      <!-- Avatar / 3D Skin Showcase (2x2 square frame) -->
      <div class="flex-shrink-0 flex flex-col items-center">
        <!-- Switch Tab Mode -->
        <div class="flex gap-2 mb-3 font-pixel text-xs">
          <button 
            @click="displayMode = 'avatar'"
            :class="[
              'px-3 py-1 border-2 transition flex items-center gap-1.5',
              displayMode === 'avatar' 
                ? 'bg-amber-800 text-yellow-300 border-black shadow' 
                : 'bg-[#707070] text-gray-200 border-black/60 hover:bg-[#808080]'
            ]"
          >
            <User class="w-3.5 h-3.5" />
            <span>Photo</span>
          </button>
          <button 
            @click="displayMode = 'skin'"
            :class="[
              'px-3 py-1 border-2 transition flex items-center gap-1.5',
              displayMode === 'skin' 
                ? 'bg-amber-800 text-yellow-300 border-black shadow' 
                : 'bg-[#707070] text-gray-200 border-black/60 hover:bg-[#808080]'
            ]"
          >
            <Box class="w-3.5 h-3.5" />
            <span>3D Skin</span>
          </button>
        </div>

        <!-- 2x2 Square Aspect Frame -->
        <div class="relative p-2.5 bg-[#4a3b2c]/80 dark:bg-[#1f1033]/80 border-4 border-[#2c1d0f] dark:border-[#522a86] shadow-2xl rounded">
          
          <!-- Real 2x2 Photo Frame -->
          <div 
            v-if="displayMode === 'avatar'" 
            class="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] relative overflow-hidden border-4 border-black/70 bg-black/40 shadow-inner group"
          >
            <img 
              :src="profileUrl" 
              alt="Rean Coopera (Cheese)" 
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute bottom-0 inset-x-0 bg-black/75 p-2 text-center text-yellow-300 font-pixel text-[11px] border-t-2 border-black">
              Player: Cheese (Rean)
            </div>
          </div>

          <!-- 3D Skin Viewer Frame -->
          <div 
            v-else 
            class="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center border-4 border-black/70 bg-black/40 overflow-hidden"
          >
            <MinecraftSkinViewer :skin-url="skinUrl" />
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
