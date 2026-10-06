<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursorX = ref(-100)
const cursorY = ref(-100)
const isVisible = ref(false)
const isSmashing = ref(false)
const smashes = ref([])

let smashId = 0

const onMouseMove = (e) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  if (!isVisible.value) isVisible.value = true
}

const onMouseLeave = () => {
  isVisible.value = false
}

const onMouseDown = (e) => {
  isSmashing.value = true
  
  const newSmash = {
    id: ++smashId,
    x: e.clientX,
    y: e.clientY
  }
  
  smashes.value.push(newSmash)
  
  setTimeout(() => {
    smashes.value = smashes.value.filter(s => s.id !== newSmash.id)
  }, 600)
}

const onMouseUp = () => {
  setTimeout(() => {
    isSmashing.value = false
  }, 150)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseleave', onMouseLeave)
  window.addEventListener('mousedown', onMouseDown)
  window.addEventListener('mouseup', onMouseUp)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
  window.removeEventListener('mousedown', onMouseDown)
  window.removeEventListener('mouseup', onMouseUp)
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-50 overflow-hidden">
    <!-- Smash Shockwave & Wind Particle VFX on Click -->
    <div 
      v-for="smash in smashes" 
      :key="smash.id" 
      class="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      :style="{ left: `${smash.x}px`, top: `${smash.y}px` }"
    >
      <!-- Ground Impact Shockwave -->
      <div class="smash-shockwave"></div>
      
      <!-- Wind Burst Ring -->
      <div class="wind-burst-ring"></div>

      <!-- Critical hit sparks -->
      <div 
        v-for="i in 8" 
        :key="i"
        class="smash-spark"
        :style="{
          '--angle': `${i * 45}deg`,
          '--dist': `${30 + (i % 3) * 15}px`
        }"
      ></div>
    </div>

    <!-- Custom Minecraft Weapon Cursor -->
    <div 
      v-if="isVisible"
      class="absolute transition-transform duration-75 ease-out pointer-events-none"
      :style="{
        left: `${cursorX}px`,
        top: `${cursorY}px`,
        transform: 'translate(-4px, -4px)'
      }"
    >
      <!-- Netherite Sword (Default State) -->
      <div 
        v-if="!isSmashing"
        class="w-10 h-10 select-none netherite-sword-cursor"
      >
        <svg viewBox="0 0 32 32" class="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Blade Tip & Edge -->
          <rect x="22" y="2" width="4" height="4" fill="#2c2a36" />
          <rect x="18" y="6" width="4" height="4" fill="#3c3848" />
          <rect x="22" y="6" width="4" height="4" fill="#4d495d" />
          <rect x="14" y="10" width="4" height="4" fill="#3c3848" />
          <rect x="18" y="10" width="4" height="4" fill="#4d495d" />
          <rect x="10" y="14" width="4" height="4" fill="#3c3848" />
          <rect x="14" y="14" width="4" height="4" fill="#5c576e" />
          
          <!-- Diamond/Netherite accent line -->
          <rect x="20" y="4" width="2" height="2" fill="#7d7890" />
          <rect x="16" y="8" width="2" height="2" fill="#7d7890" />
          <rect x="12" y="12" width="2" height="2" fill="#7d7890" />
          
          <!-- Crossguard -->
          <rect x="6" y="16" width="4" height="4" fill="#25242e" />
          <rect x="10" y="18" width="4" height="4" fill="#34313f" />
          <rect x="14" y="18" width="4" height="4" fill="#4d495d" />
          <rect x="18" y="14" width="4" height="4" fill="#25242e" />
          
          <!-- Grip / Handle -->
          <rect x="6" y="22" width="4" height="4" fill="#4a2e18" />
          <rect x="4" y="24" width="4" height="4" fill="#311e10" />
          
          <!-- Pommel -->
          <rect x="2" y="26" width="4" height="4" fill="#25242e" />
        </svg>
      </div>

      <!-- Mace with Smash Attack Animation (Clicked State) -->
      <div 
        v-else
        class="w-12 h-12 select-none mace-smash-active"
      >
        <svg viewBox="0 0 32 32" class="w-full h-full drop-shadow-[0_4px_8px_rgba(255,160,0,0.8)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Heavy Core (Head of Mace) -->
          <rect x="14" y="2" width="12" height="12" fill="#3b3b47" stroke="#1c1b22" stroke-width="2" />
          <rect x="16" y="4" width="8" height="8" fill="#525062" />
          <!-- Heavy Core Spikes / Ornaments -->
          <rect x="12" y="5" width="2" height="6" fill="#1c1b22" />
          <rect x="26" y="5" width="2" height="6" fill="#1c1b22" />
          <rect x="17" y="0" width="6" height="2" fill="#1c1b22" />
          <!-- Breeze Core Energy Core -->
          <rect x="18" y="6" width="4" height="4" fill="#79c5e8" />
          <rect x="19" y="7" width="2" height="2" fill="#ffffff" />
          
          <!-- Breeze Rod Shaft -->
          <rect x="10" y="14" width="6" height="4" fill="#a0854d" />
          <rect x="8" y="18" width="4" height="4" fill="#c9ab69" />
          <rect x="6" y="22" width="4" height="4" fill="#e8cb85" />
          <rect x="4" y="26" width="4" height="4" fill="#7d6435" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Mace Smash Slam animation */
.mace-smash-active {
  transform-origin: 20% 80%;
  animation: maceSlam 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes maceSlam {
  0% {
    transform: rotate(-35deg) scale(1.3) translateY(-10px);
  }
  50% {
    transform: rotate(25deg) scale(1.1) translateY(8px);
  }
  100% {
    transform: rotate(0deg) scale(1) translateY(0);
  }
}

/* Ground shockwave */
.smash-shockwave {
  width: 20px;
  height: 20px;
  border: 4px solid #f59e0b;
  border-radius: 50%;
  animation: shockwaveExpand 0.5s ease-out forwards;
}

@keyframes shockwaveExpand {
  0% {
    width: 10px;
    height: 10px;
    opacity: 1;
    transform: scale(0.5);
  }
  100% {
    width: 90px;
    height: 90px;
    opacity: 0;
    border-color: #ef4444;
    transform: scale(1.8);
  }
}

/* Wind Burst Ring VFX */
.wind-burst-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  border: 3px dashed #bae6fd;
  border-radius: 50%;
  animation: windExpand 0.4s ease-out forwards;
}

@keyframes windExpand {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) rotate(180deg) scale(3);
    opacity: 0;
  }
}

/* Critical hit sparks */
.smash-spark {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  background: #facc15;
  box-shadow: 0 0 6px #f59e0b;
  animation: sparkFly 0.45s ease-out forwards;
}

@keyframes sparkFly {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--dist)) scale(0.2);
  }
}
</style>
