<template>
  <div class="horizontal" ref="horizontalRef">
    <div class="horizontal-container" ref="horizontalContainerRef" :style="{ 'width': width, 'height': height }">
      <slot></slot>
     </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

defineProps({
  // 添加 props
  width: {
    type: String,
    default: '200vw'
  },
  height: {
    type: String,
    default: '100vh'
  }
})


// 定义 refs
const horizontalRef = ref(null)
const horizontalContainerRef = ref(null)

// 存储 ScrollTrigger 实例以便清理
let horizontalScrollTrigger = null

onMounted(() => {
  // 初始化滚动效果
  initScrollEffects()
})

const initScrollEffects = () => {
  // 确保 DOM 已经渲染
  setTimeout(() => {
    let totalWidth = horizontalContainerRef.value.clientWidth - window.innerWidth
    // 创建水平滚动动画（使用像素值代替百分比）
    const horizontalTween = gsap.to(horizontalRef.value, {
      x: -totalWidth, // 使用像素值而不是百分比
      ease: 'none',
      scrollTrigger: {
        trigger: horizontalRef.value,
        pin: true,
        scrub: 1,
        pinSpacing: true,
        start: 'top top',
        end: () => '+=' + totalWidth,
        invalidateOnRefresh: true,
        // 添加这个配置确保滚动完整
        anticipatePin: 1
      }
    })
    // 保存 ScrollTrigger 实例
    horizontalScrollTrigger = horizontalTween.scrollTrigger
  }, 100)
}

onBeforeUnmount(() => {
  // 清理 ScrollTrigger 实例
  if (horizontalScrollTrigger) {
    horizontalScrollTrigger.kill()
  }
  // 清理所有 ScrollTrigger
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>
<style scoped lang="scss">

/* Page 2 - 水平滚动 */
.horizontal {
  position: relative;
}

</style>


























<!--
<template>
  <div class="horizontal" ref="horizontalRef">
    <div class="horizontal-container" ref="horizontalContainerRef">
      <span v-for="(index) in 10000" :key="index">{{index}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

// 定义 refs
const horizontalRef = ref(null)
const horizontalContainerRef = ref(null)

// 存储 ScrollTrigger 实例以便清理
let horizontalScrollTrigger = null

onMounted(() => {
  // 初始化滚动效果
  initScrollEffects()
})

const initScrollEffects = () => {
  // 确保 DOM 已经渲染
  setTimeout(() => {
    if (!horizontalRef.value || !horizontalContainerRef.value) return

    // 使用 scrollWidth 获取实际内容宽度，而不是 clientWidth
    const totalWidth = horizontalContainerRef.value.scrollWidth - window.innerWidth

    // 创建水平滚动动画
    const horizontalTween = gsap.to(horizontalContainerRef.value, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: horizontalRef.value,
        pin: true,
        scrub: 1,
        pinSpacing: true,
        start: 'top top',
        end: () => '+=' + totalWidth, // 使用准确的滚动距离
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    })

    // 保存 ScrollTrigger 实例
    horizontalScrollTrigger = horizontalTween.scrollTrigger
  }, 100)
}

onBeforeUnmount(() => {
  // 清理 ScrollTrigger 实例
  if (horizontalScrollTrigger) {
    horizontalScrollTrigger.kill()
  }

  // 清理所有 ScrollTrigger
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped lang="scss">
/* Page 2 - 水平滚动 */
.horizontal {
  background: #2b8656;
  position: relative;
  overflow-x: hidden;
}

.horizontal-container {
  display: flex;
  /* 移除固定宽度，让内容自然展开 */
  height: 40vh;
}

/* 隐藏滚动条 */
.horizontal::-webkit-scrollbar {
  display: none;
}

.horizontal {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

-->
























<!--<template>
  <div class="horizontal" ref="horizontalRef">
    <div class="horizontal-container" ref="horizontalContainerRef">
      水平滚动部分1111111111112222222222222233333333333344444444444455555555555555511111111111122222222222222333333333333444444444444555555555555555111111111111222222222222223333333333334444444444445555555555555551111111111112222222222222233333333333344444444444455555555555555511111111111122222222222222333333333333444444444444555555555555555
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

// 定义 refs
const horizontalRef = ref(null)
const horizontalContainerRef = ref(null)

// 存储 ScrollTrigger 实例以便清理
let horizontalTween = null
let resizeObserver = null

onMounted(() => {
  // 初始化滚动效果
  initScrollEffects()

  // 监听容器尺寸变化
  initResizeObserver()
})

const initScrollEffects = () => {
  nextTick(() => {
    if (!horizontalRef.value || !horizontalContainerRef.value) return

    // 获取容器实际宽度
    const containerWidth = horizontalContainerRef.value.scrollWidth
    const viewportWidth = window.innerWidth
    const totalScrollDistance = containerWidth - viewportWidth

    // 创建水平滚动动画
    horizontalTween = gsap.to(horizontalContainerRef.value, {
      x: -totalScrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: horizontalRef.value,
        pin: true,
        pinSpacing: false, // 禁用默认的间距处理
        scrub: 1,
        start: 'top top',
        end: () => '+=' + totalScrollDistance,
        invalidateOnRefresh: true
      }
    })
  })
}

// 初始化 ResizeObserver 来监听元素尺寸变化
const initResizeObserver = () => {
  if (window.ResizeObserver && horizontalRef.value) {
    resizeObserver = new ResizeObserver(() => {
      // 当尺寸变化时，刷新 ScrollTrigger
      ScrollTrigger.refresh()
    })
    resizeObserver.observe(horizontalContainerRef.value)
  }
}

onBeforeUnmount(() => {
  // 清理 ScrollTrigger 实例
  if (horizontalTween?.scrollTrigger) {
    horizontalTween.scrollTrigger.kill()
    horizontalTween = null
  }

  // 清理 ResizeObserver
  if (resizeObserver && horizontalContainerRef.value) {
    resizeObserver.unobserve(horizontalContainerRef.value)
    resizeObserver = null
  }
})
</script>

<style scoped lang="scss">
/* Page 2 - 水平滚动 */
.horizontal {
  background: #2b8656;
  position: relative;
  height: 40vh;
  width: 100%;
  overflow: hidden; /* 隐藏滚动条 */
}

.horizontal-container {
  height: 40vh;
  white-space: nowrap; /* 保持内容在一行 */
  padding: 20px;
  box-sizing: border-box;
}

/* 隐藏滚动条 */
.horizontal::-webkit-scrollbar {
  display: none;
}

.horizontal {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>-->

