<script setup>
import { portfolioData } from './data/portfolio'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
    <Navbar />
    <main class="flex-grow">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <footer class="py-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
      © {{ new Date().getFullYear() }} {{ portfolioData.name }}. All rights reserved.
    </footer>
  </div>
</template>
