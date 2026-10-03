<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolio'
import { MessageSquare, CheckCircle } from 'lucide-vue-next'

const formSubmitted = ref(false)
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) return
  formSubmitted.value = true
}
</script>

<template>
  <section id="contact" class="py-16 border-t-4 border-[#3c2f1f] dark:border-[#4d2b77] bg-[#cda975]/40 dark:bg-[#140a24]/60">
    <div class="max-w-xl mx-auto px-4 sm:px-6 text-center">
      <div class="inline-flex items-center gap-2 mb-3">
        <MessageSquare class="w-6 h-6 text-amber-900 dark:text-purple-300" />
        <h2 class="text-2xl sm:text-3xl font-pixel font-bold tracking-tight text-[#2a1c0d] dark:text-yellow-100">
          Send a Pigeon / Whispers
        </h2>
      </div>
      
      <p class="text-lg font-minecraft text-[#4a361e] dark:text-purple-200 mb-8">
        Have a quest or want to team up? Send an in-game whisper or contact via 
        <a :href="`mailto:${portfolioData.email}`" class="text-green-800 dark:text-emerald-400 font-bold underline ml-1">
          {{ portfolioData.email }}
        </a>.
      </p>

      <div v-if="formSubmitted" class="p-6 mc-card bg-emerald-700/80 text-white font-pixel text-sm flex items-center justify-center gap-3">
        <CheckCircle class="w-6 h-6 text-yellow-300" />
        <span>Achievement Unlocked: Message Sent! I'll reply soon.</span>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="space-y-4 text-left mc-card p-6">
        <div>
          <label class="block text-xs font-pixel text-[#3c2b17] dark:text-purple-200 mb-1">Player Name</label>
          <input 
            v-model="formData.name" 
            type="text" 
            required 
            class="w-full px-3 py-2 bg-[#f0deb9] dark:bg-[#1f1033] border-2 border-[#3c2f1f] dark:border-[#4d2b77] text-[#291a0c] dark:text-purple-100 font-minecraft text-xl focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label class="block text-xs font-pixel text-[#3c2b17] dark:text-purple-200 mb-1">Scroll / Email Address</label>
          <input 
            v-model="formData.email" 
            type="email" 
            required 
            class="w-full px-3 py-2 bg-[#f0deb9] dark:bg-[#1f1033] border-2 border-[#3c2f1f] dark:border-[#4d2b77] text-[#291a0c] dark:text-purple-100 font-minecraft text-xl focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label class="block text-xs font-pixel text-[#3c2b17] dark:text-purple-200 mb-1">Quest Details / Message</label>
          <textarea 
            v-model="formData.message" 
            rows="4" 
            required 
            class="w-full px-3 py-2 bg-[#f0deb9] dark:bg-[#1f1033] border-2 border-[#3c2f1f] dark:border-[#4d2b77] text-[#291a0c] dark:text-purple-100 font-minecraft text-xl focus:outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>
        </div>

        <button 
          type="submit" 
          class="w-full py-3.5 mc-button-primary font-pixel text-sm font-bold cursor-pointer"
        >
          Send Message [Enter]
        </button>
      </form>
    </div>
  </section>
</template>
