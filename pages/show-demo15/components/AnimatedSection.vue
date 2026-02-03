<template>
  <section :id="sectionId" ref="sectionRef" class="animated-section">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
  sectionId: string
  animationConfig: {
    initial: Record<string, any>
    animate: Record<string, any>
    scrollTrigger: Record<string, any>
  }
}

const props = defineProps<Props>()
const sectionRef = ref<HTMLElement | null>(null)
let animation: gsap.core.Tween | null = null
let scrollTrigger: ScrollTrigger | null = null

onMounted(() => {
  if (sectionRef.value) {
    // 创建 GSAP 动画
    animation = gsap.fromTo(
      sectionRef.value,
      props.animationConfig.initial,
      {
        ...props.animationConfig.animate,
        scrollTrigger: {
          ...props.animationConfig.scrollTrigger,
          trigger: sectionRef.value
        }
      }
    )

    // 获取 ScrollTrigger 实例
    scrollTrigger = animation.scrollTrigger
  }
})

onBeforeUnmount(() => {
  // 清理动画和触发器
  if (animation) {
    animation.kill()
  }
  if (scrollTrigger) {
    scrollTrigger.kill()
  }
})
</script>

<style scoped>
.animated-section {
  opacity: 0;
}
</style>
