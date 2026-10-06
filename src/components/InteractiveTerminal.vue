<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Terminal as TerminalIcon, X, Minus, Square, Send, CornerDownLeft, Sparkles } from 'lucide-vue-next'
import { portfolioData } from '../data/portfolio'

const isOpen = ref(false)
const inputCommand = ref('')
const terminalHistory = ref([
  { type: 'system', text: 'CheeseOS Developer Terminal v2.4.0 (x86_64-minecraft-core)' },
  { type: 'system', text: 'Type "help" for a list of available CLI commands or "skills" to inspect stack.' }
])

const terminalBodyRef = ref(null)

const toggleTerminal = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    scrollToBottom()
  }
}

const scrollToBottom = () => {
  nextTick(() => {
    if (terminalBodyRef.value) {
      terminalBodyRef.value.scrollTop = terminalBodyRef.value.scrollHeight
    }
  })
}

const commands = {
  help: () => [
    'Available commands:',
    '  help          - Show this help menu',
    '  whoami        - Display developer profile',
    '  skills        - List technical stack & proficiencies',
    '  projects      - List featured repositories & quests',
    '  exp           - Show experience & career lore',
    '  contact       - Get direct contact links',
    '  clear         - Clear terminal history',
    '  sudo          - Unlock superuser perks'
  ],
  whoami: () => [
    `Name: ${portfolioData.name}`,
    `Title: ${portfolioData.title}`,
    `Location: ${portfolioData.location}`,
    `Bio: ${portfolioData.bio}`
  ],
  skills: () => [
    'Enchanted Tech Stack:',
    `  ${portfolioData.skills.join('  •  ')}`
  ],
  projects: () => {
    return portfolioData.projects.flatMap((p, i) => [
      `[${i + 1}] ${p.title} (${p.tech.join(', ')})`,
      `    ${p.description}`,
      `    Source: ${p.githubUrl}`
    ])
  },
  exp: () => {
    return portfolioData.experience.flatMap(e => [
      `▶ ${e.role} @ ${e.company} [${e.period}]`,
      `  ${e.description}`
    ])
  },
  contact: () => [
    `Email: ${portfolioData.email}`,
    `GitHub: ${portfolioData.socials.github}`,
    `Facebook: ${portfolioData.socials.facebook}`,
    `Instagram: ${portfolioData.socials.instagram}`
  ],
  clear: () => {
    terminalHistory.value = []
    return null
  },
  sudo: () => [
    'Permission granted: You are now certified Level 100 Grandmaster Cheese Crafter!'
  ]
}

const handleExecute = () => {
  const cmd = inputCommand.value.trim().toLowerCase()
  if (!cmd) return

  terminalHistory.value.push({
    type: 'input',
    text: `user@cheese-core:~$ ${inputCommand.value}`
  })

  if (commands[cmd]) {
    const res = commands[cmd]()
    if (res) {
      res.forEach(line => {
        terminalHistory.value.push({ type: 'output', text: line })
      })
    }
  } else {
    terminalHistory.value.push({
      type: 'error',
      text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`
    })
  }

  inputCommand.value = ''
  scrollToBottom()
}
</script>

<template>
  <div>
    <!-- Floating Trigger Button in bottom corner -->
    <button 
      @click="toggleTerminal" 
      class="fixed bottom-6 right-6 z-40 mc-button px-4 py-2.5 flex items-center gap-2.5 font-pixel text-xs shadow-2xl transition-all hover:scale-105"
      :class="{ '!bg-emerald-700 !text-white': isOpen }"
      title="Toggle Developer Terminal"
    >
      <TerminalIcon class="w-4 h-4 text-emerald-400" />
      <span class="hidden sm:inline">CLI Console</span>
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
    </button>

    <!-- Terminal Window Modal/Popup -->
    <div 
      v-if="isOpen" 
      class="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[500px] h-[360px] mc-card !bg-[#121214] !border-[#2a2b30] flex flex-col shadow-2xl rounded-sm overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
    >
      <!-- Header bar -->
      <div class="h-9 bg-[#1e1f24] border-b-2 border-black/60 px-3 flex items-center justify-between select-none">
        <div class="flex items-center gap-2">
          <TerminalIcon class="w-3.5 h-3.5 text-emerald-400" />
          <span class="font-pixel text-[11px] text-gray-300">cheese@dev-box:~</span>
        </div>
        
        <div class="flex items-center gap-1.5 text-gray-400">
          <button @click="isOpen = false" class="hover:text-red-400 p-1">
            <X class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <!-- Output logs -->
      <div 
        ref="terminalBodyRef"
        class="flex-1 p-3 overflow-y-auto font-minecraft text-lg leading-snug space-y-1.5 scrollbar-thin scrollbar-thumb-gray-700 select-text"
      >
        <div 
          v-for="(log, idx) in terminalHistory" 
          :key="idx"
          :class="[
            log.type === 'input' ? 'text-emerald-400 font-bold' : '',
            log.type === 'output' ? 'text-gray-200 pl-2' : '',
            log.type === 'system' ? 'text-amber-300 italic' : '',
            log.type === 'error' ? 'text-rose-400 pl-2' : '',
          ]"
        >
          {{ log.text }}
        </div>
      </div>

      <!-- Command Input bar -->
      <form 
        @submit.prevent="handleExecute" 
        class="h-10 bg-[#18191e] border-t-2 border-black/40 px-3 flex items-center gap-2"
      >
        <span class="text-emerald-400 font-minecraft text-xl font-bold">❯</span>
        <input 
          v-model="inputCommand"
          type="text" 
          placeholder="type 'help', 'skills', 'projects'..." 
          class="flex-1 bg-transparent text-gray-100 font-minecraft text-lg focus:outline-none placeholder-gray-500"
          autofocus
        />
        <button type="submit" class="text-gray-400 hover:text-emerald-400 transition">
          <CornerDownLeft class="w-4 h-4" />
        </button>
      </form>
    </div>
  </div>
</template>
