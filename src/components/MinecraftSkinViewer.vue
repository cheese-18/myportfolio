<script setup>
import { onMounted, ref, onBeforeUnmount, watch } from 'vue'
import { SkinViewer, WalkingAnimation } from 'skinview3d'

const props = defineProps({
  skinUrl: {
    type: String,
    required: true
  }
})

const canvasRef = ref(null)
let viewer = null
let anim = null

const initViewer = () => {
  if (!canvasRef.value) return
  
  if (viewer) {
    viewer.dispose()
    viewer = null
  }

  viewer = new SkinViewer({
    canvas: canvasRef.value,
    width: 280,
    height: 380,
    skin: props.skinUrl
  })

  // Camera settings
  viewer.camera.position.z = 70
  viewer.camera.position.y = 0
  viewer.fov = 40
  viewer.zoom = 0.9

  // Walking animation
  anim = viewer.animations.add(WalkingAnimation)
  anim.speed = 0.6
  
  // Rotation
  viewer.autoRotate = true
  viewer.autoRotateSpeed = 0.8
}

onMounted(() => {
  initViewer()
})

watch(() => props.skinUrl, (newUrl) => {
  if (viewer && newUrl) {
    viewer.loadSkin(newUrl)
  }
})

onBeforeUnmount(() => {
  if (viewer) {
    viewer.dispose()
  }
})
</script>

<template>
  <div class="relative flex flex-col items-center">
    <div class="relative p-2 bg-black/20 border-4 border-[#3c2f1f] dark:border-[#4d2b77] rounded shadow-2xl backdrop-blur-xs">
      <canvas ref="canvasRef" class="cursor-grab active:cursor-grabbing"></canvas>
      
      <div class="text-center font-pixel text-xs text-amber-900 dark:text-purple-300 mt-2">
        Click & Drag to rotate
      </div>
    </div>
  </div>
</template>
