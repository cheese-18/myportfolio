<script setup>
import { ref, onMounted } from 'vue'
import { portfolioData } from './data/portfolio'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import MinecraftBackground from './components/MinecraftBackground.vue'
import InteractiveTerminal from './components/InteractiveTerminal.vue'

const isDark = ref(false)
const isTeleporting = ref(false)

const handleThemeToggle = () => {
  // Trigger Portal effect
  isTeleporting.value = true
  setTimeout(() => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, 250)

  setTimeout(() => {
    isTeleporting.value = false
  }, 600)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between relative overworld-bg font-minecraft transition-colors duration-700">
    <!-- Nether/End Portal Dimension Warp Effect -->
    <div 
      v-if="isTeleporting" 
      class="fixed inset-0 z-50 pointer-events-none bg-purple-700/80 backdrop-blur-md portal-transition-active flex items-center justify-center"
    >
      <div class="text-white text-3xl sm:text-4xl font-pixel animate-pulse drop-shadow-[0_4px_10px_#000]">
        {{ isDark ? 'Entering Overworld...' : 'Entering The End...' }}
      </div>
    </div>

    <!-- Animated Minecraft World background -->
    <MinecraftBackground :is-dark="isDark" />

    <!-- Interactive Developer CLI Terminal Component -->
    <InteractiveTerminal />

    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar :is-dark="isDark" @toggle-theme="handleThemeToggle" />
      <main class="flex-grow">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer class="py-8 border-t-4 border-[#3c2f1f] dark:border-[#4d2b77] bg-[#c4a470] dark:bg-[#1f1033] text-center font-pixel text-xs text-[#3a2810] dark:text-purple-300">
        © {{ new Date().getFullYear() }} {{ portfolioData.name }}. Built with Minecraft & Coder energy.
      </footer>
    </div>
  </div>
</template>
