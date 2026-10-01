<script setup>
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // ponytail: standard light/dark preference detection
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-white/75 dark:bg-slate-900/75 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <a href="#" class="font-bold text-lg tracking-tight text-slate-900 dark:text-white hover:opacity-80">
        Portfolio<span class="text-indigo-600 dark:text-indigo-400">.</span>
      </a>

      <div class="flex items-center gap-6">
        <ul class="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <li><a href="#about" class="hover:text-indigo-600 dark:hover:text-indigo-400">About</a></li>
          <li><a href="#projects" class="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a></li>
          <li><a href="#experience" class="hover:text-indigo-600 dark:hover:text-indigo-400">Experience</a></li>
          <li><a href="#contact" class="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a></li>
        </ul>

        <button 
          @click="toggleDarkMode" 
          aria-label="Toggle dark mode"
          class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <Sun v-if="isDark" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </button>
      </div>
    </div>
  </nav>
</template>
