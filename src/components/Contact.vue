<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolio'
import { Mail, CheckCircle } from 'lucide-vue-next'

const formSubmitted = ref(false)
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // ponytail: simple client-side mailto trigger or form simulation
  if (!formData.value.name || !formData.value.email || !formData.value.message) return
  formSubmitted.value = true
}
</script>

<template>
  <section id="contact" class="py-16 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-xl mx-auto px-4 sm:px-6 text-center">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
        Get In Touch
      </h2>
      <p class="text-slate-600 dark:text-slate-400 mb-8">
        Have a question or want to work together? Leave a message or email me directly at 
        <a :href="`mailto:${portfolioData.email}`" class="text-indigo-600 dark:text-indigo-400 font-medium underline">
          {{ portfolioData.email }}
        </a>.
      </p>

      <div v-if="formSubmitted" class="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-center justify-center gap-3">
        <CheckCircle class="w-5 h-5" />
        <span class="font-medium">Thanks for reaching out! I'll get back to you soon.</span>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="space-y-4 text-left">
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
          <input 
            v-model="formData.name" 
            type="text" 
            required 
            class="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
          <input 
            v-model="formData.email" 
            type="email" 
            required 
            class="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
          <textarea 
            v-model="formData.message" 
            rows="4" 
            required 
            class="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          class="w-full py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>
