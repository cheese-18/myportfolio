<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { SkinViewer, WalkingAnimation } from 'skinview3d'

const props = defineProps({
  skinUrl: {
    type: String,
    default: '/skin.png'
  }
})

const canvasRef = ref(null)
let viewer = null
let anim = null

onMounted(() => {
  if (canvasRef.value) {
    viewer = new SkinViewer({
      canvas: canvasRef.value,
      width: 280,
      height: 380,
      skin: props.skinUrl
    })

    // Lighting and camera setup
    viewer.camera.position.z = 70
    viewer.camera.position.y = 0
    viewer.fov = 40
    viewer.zoom = 0.9

    // Walking animation
    anim = viewer.animations.add(WalkingAnimation)
    anim.speed = 0.6
    
    // Auto rotation
    viewer.autoRotate = true
    viewer.autoRotateSpeed = 0.8
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
