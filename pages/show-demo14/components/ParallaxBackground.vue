<template>
  <div class="parallax-container">
    <div
        v-for="(layer, index) in parallaxLayers"
        :key="index"
        :class="['parallax-layer', layer.className]"
        :ref="el => layersRef[index] = el"
    >
      <!-- 可以在这里添加具体的背景内容 -->
      <div class="parallax-content">{{ layer.content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

interface ParallaxLayer {
  depth: number
  className: string
  content: string
}

interface Props {
  parallaxLayers: ParallaxLayer[]
}

const props = defineProps<Props>()
const layersRef = ref<(HTMLElement | null)[]>([])

// 防抖函数
const debounce = (fn: Function, delay: number) => {
  let timer: number | null = null
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay) as unknown as number
  }
}

let debouncedScrollFn: (() => void) | null = null

onMounted(() => {
  // 创建视差滚动效果（使用防抖优化性能）
  debouncedScrollFn = debounce(handleScroll, 16)
  window.addEventListener('scroll', debouncedScrollFn, { passive: true })
})

const handleScroll = () => {
  const scrollPosition = window.pageYOffset

  props.parallaxLayers.forEach((layer, index) => {
    if (layersRef.value[index]) {
      const yPos = -(scrollPosition * layer.depth)
      gsap.set(layersRef.value[index], {
        y: yPos
      })
    }
  })
}

onBeforeUnmount(() => {
  if (debouncedScrollFn) {
    window.removeEventListener('scroll', debouncedScrollFn)
  }
})
</script>

<style scoped>
.parallax-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.parallax-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.parallax-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  opacity: 0.1;
}
</style>
