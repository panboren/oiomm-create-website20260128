<template>
  <div class="content" id="page-content">
    <div class="vertical">
      <div>Page 1 - 垂直滚动</div>
    </div>
<!--    <horizontal-scroll></horizontal-scroll>-->

    <horizontal-scroll>
    </horizontal-scroll>
    <div class="vertical">
      <div>Page 1 - 垂直滚动</div>
    </div>
  </div>
</template>

<script setup>

import {onMounted} from 'vue'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 1000)
})

</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  background: #eacf1e;
}

/* Page 1 - 垂直滚动 */
.vertical {
  width: 100vw;
  height: 2000px;
  background: linear-gradient(to bottom, #861010, #5a0b0b);
  color: white;
  position: relative;
}



</style>












<!--
<template>
  <div class="content">
    <div class="vertical">
        <h1>Page 1 - 垂直滚动</h1>
    </div>
    <div class="horizontal" ref="horizontalRef">
      <div class="horizontal-container" ref="horizontalContainerRef">
        水平滚动部分
        <div style="width: 1000px; height: 100%;background: #4d1fa8">900</div>
        <div style="width: 1000px; height: 100%;background: #a21465">1000</div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

    let totalWidth = horizontalContainerRef.value.clientWidth - window.innerWidth
    // 创建水平滚动动画（使用像素值代替百分比）
    const horizontalTween = gsap.to(horizontalContainerRef.value, {
      x: -totalWidth, // 使用像素值而不是百分比
      ease: 'none',
      scrollTrigger: {
        trigger: horizontalRef.value,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => '+=' + (horizontalContainerRef.value.scrollWidth - window.innerWidth),
        invalidateOnRefresh: true
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

<style scoped>
.content {
  width: 100%;
  height: 100%;
  background: #49aabb;
}

/* Page 1 - 垂直滚动 */
.vertical {
  width: 100vw;
  height: 2000px;
  background: linear-gradient(to bottom, #861010, #5a0b0b);
  color: white;
  position: relative;
}


/* Page 2 - 水平滚动 */
.horizontal {
  width: 100vw;
  height: 100vh;
  background: #2b8656;
  position: relative;
}

.horizontal-container {
  display: flex;
  width: 3000px; /* 3个section，每个占100% */
  height: 100%;
}
</style>
-->
