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

const currentDimension = ref('overworld') // 'overworld' | 'nether' | 'end'
const isTeleporting = ref(false)
const teleportText = ref('')

const dimensionNames = {
  overworld: 'Overworld',
  nether: 'The Nether',
  end: 'The End'
}

const handleDimensionChange = (newDimension) => {
  if (currentDimension.value === newDimension) return

  teleportText.value = `Entering ${dimensionNames[newDimension]}...`
  isTeleporting.value = true

  setTimeout(() => {
    currentDimension.value = newDimension
    applyDimensionClasses(newDimension)
    localStorage.setItem('minecraft_dimension', newDimension)
  }, 250)

  setTimeout(() => {
    isTeleporting.value = false
  }, 600)
}

const applyDimensionClasses = (dim) => {
  document.documentElement.classList.remove('dark', 'nether')
  if (dim === 'end') {
    document.documentElement.classList.add('dark')
  } else if (dim === 'nether') {
    document.documentElement.classList.add('nether')
  }
}

onMounted(() => {
  const savedDimension = localStorage.getItem('minecraft_dimension') || 'overworld'
  currentDimension.value = savedDimension
  applyDimensionClasses(savedDimension)
})
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between relative overworld-bg font-minecraft transition-colors duration-700">
    <!-- Nether/End Portal Dimension Warp Effect -->
    <div 
      v-if="isTeleporting" 
      class="fixed inset-0 z-50 pointer-events-none backdrop-blur-md portal-transition-active flex items-center justify-center"
      :class="{
        'bg-green-700/80': currentDimension === 'overworld',
        'bg-red-800/85': currentDimension === 'nether',
        'bg-purple-800/85': currentDimension === 'end'
      }"
    >
      <div class="text-white text-3xl sm:text-4xl font-pixel animate-pulse drop-shadow-[0_4px_10px_#000]">
        {{ teleportText }}
      </div>
    </div>

    <!-- Animated Minecraft Dimension background -->
    <MinecraftBackground :dimension="currentDimension" />

    <!-- Interactive Developer CLI Terminal Component -->
    <InteractiveTerminal />

    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar :current-dimension="currentDimension" @set-dimension="handleDimensionChange" />
      <main class="flex-grow">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer class="py-8 border-t-4 border-[#3c2f1f] dark:border-[#4d2b77] nether:border-[#6b1616] bg-[#c4a470] dark:bg-[#1f1033] nether:bg-[#3d0f0f] text-center font-pixel text-xs text-[#3a2810] dark:text-purple-300 nether:text-orange-200">
        © {{ new Date().getFullYear() }} {{ portfolioData.name }}. Built with Minecraft & Coder energy.
      </footer>
    </div>
  </div>
</template>
