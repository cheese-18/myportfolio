<script setup>
import { onMounted, ref, onBeforeUnmount, watch } from 'vue'
import { SkinViewer, WalkingAnimation } from 'skinview3d'

const props = defineProps({
  skinUrl: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    default: 280
  },
  height: {
    type: Number,
    default: 280
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
    width: props.width,
    height: props.height,
    skin: props.skinUrl
  })

  // Camera settings
  viewer.camera.position.z = 60
  viewer.camera.position.y = 0
  viewer.fov = 45
  viewer.zoom = 0.85

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
  <div class="relative flex flex-col items-center justify-center w-full h-full">
    <canvas ref="canvasRef" class="cursor-grab active:cursor-grabbing max-w-full max-h-full"></canvas>
  </div>
</template>
