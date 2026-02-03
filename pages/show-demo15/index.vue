<template>
  <div class="gsap-scroll-template" ref="containerRef">
    <!-- 导航点 -->
    <NavigationDots
        :sections="sectionIds"
        @navigate="scrollToSection"
        class="navigation-dots"
    />

    <!-- 视差背景层 -->
    <ParallaxBackground :parallaxLayers="parallaxLayers" />

    <!-- 滚动内容区域 -->
    <main class="scroll-content">
      <!-- Hero Section -->
      <AnimatedSection
          section-id="hero"
          class="section hero-section"
          :animation-config="heroConfig"
      >
        <div class="hero-content">
          <h1 class="hero-title">GSAP Scrolling Experience</h1>
          <p class="hero-subtitle">创造令人惊叹的滚动动画效果</p>
          <button class="cta-button" @click="scrollToNext">开始探索</button>
        </div>
      </AnimatedSection>

      <!-- Features Section -->
      <AnimatedSection
          section-id="features"
          class="section features-section"
          :animation-config="featuresConfig"
      >
        <div class="features-grid">
          <div v-for="(feature, idx) in features" :key="idx" class="feature-card">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </AnimatedSection>

      <!-- Stats Section -->
      <AnimatedSection
          section-id="stats"
          class="section stats-section"
          :animation-config="statsConfig"
      >
        <div class="stats-container">
          <div v-for="(stat, idx) in stats" :key="idx" class="stat-item">
            <div class="stat-number" :ref="el => statRefs[idx] = el">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </AnimatedSection>

      <!-- Gallery Section -->
      <AnimatedSection
          section-id="gallery"
          class="section gallery-section"
          :animation-config="galleryConfig"
      >
        <div class="gallery-grid">
          <div v-for="(item, idx) in galleryItems" :key="idx" class="gallery-item">
            <div class="gallery-image" :style="{ backgroundImage: `url(${item.image})` }"></div>
            <div class="gallery-overlay">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <!-- Contact Section -->
      <AnimatedSection
          section-id="contact"
          class="section contact-section"
          :animation-config="contactConfig"
      >
        <div class="contact-form">
          <h2>联系我们</h2>
          <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="姓名" required />
            <input type="email" placeholder="邮箱" required />
            <textarea placeholder="留言" required></textarea>
            <button type="submit">发送</button>
          </form>
        </div>
      </AnimatedSection>
    </main>

    <!-- 滚动进度指示器 -->
    <div class="scroll-progress" :style="{ width: `${(scrollController?.scrollProgress?.value || 0) * 100}%` }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import ParallaxBackground from './components/ParallaxBackground.vue'
import AnimatedSection from './components/AnimatedSection.vue'
import NavigationDots from './components/NavigationDots.vue'
import { useGsapAnimations } from './composables/useGsapAnimations'
import { useScrollController } from './composables/useScrollController'

// 注册 GSAP 插件
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// 响应式数据
const containerRef = ref<HTMLElement | null>(null)
const statRefs = ref<(HTMLElement | null)[]>([])
const sectionIds = ['hero', 'features', 'stats', 'gallery', 'contact']

// 内容数据
const features = [
  { title: '流畅动画', description: '利用GSAP的强大性能创建流畅的滚动动画' },
  { title: '视差效果', description: '多层视差背景营造深度感' },
  { title: '响应式设计', description: '完美适配各种设备尺寸' }
]

const stats = [
  { value: 0, label: '满意客户', target: 98 },
  { value: 0, label: '项目完成', target: 245 },
  { value: 0, label: '团队成员', target: 12 },
  { value: 0, label: '年经验', target: 5 }
]

const galleryItems = [
  { image: 'https://qcloud.dpfile.com/pc/9CL3n7i6ShFn5GyVVCBgwBLXRIXkwlC_cHO9T7qX9i4Stlc3tb2D46EPS2wRcTFF.jpg', title: '项目A', description: '现代设计风格' },
  { image: 'https://qcloud.dpfile.com/pc/9CL3n7i6ShFn5GyVVCBgwBLXRIXkwlC_cHO9T7qX9i4Stlc3tb2D46EPS2wRcTFF.jpg', title: '项目B', description: '创新解决方案' },
  { image: 'https://qcloud.dpfile.com/pc/9CL3n7i6ShFn5GyVVCBgwBLXRIXkwlC_cHO9T7qX9i4Stlc3tb2D46EPS2wRcTFF.jpg', title: '项目C', description: '用户体验优化' },
  { image: 'https://qcloud.dpfile.com/pc/9CL3n7i6ShFn5GyVVCBgwBLXRIXkwlC_cHO9T7qX9i4Stlc3tb2D46EPS2wRcTFF.jpg', title: '项目D', description: '品牌重塑' }
]

// 动画配置
const heroConfig = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
}

const featuresConfig = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)'
  },
  scrollTrigger: {
    trigger: '.features-section',
    start: 'top 75%',
    end: 'bottom 25%',
    toggleActions: 'play none none reverse'
  }
}

const statsConfig = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 0.15,
    ease: 'elastic.out(1, 0.3)',
    onUpdate: function() {
      // 数字计数动画（优化性能）
      stats.forEach((stat, idx) => {
        const ref = statRefs.value[idx]
        if (ref) {
          const currentProgress = gsap.getProperty(ref, 'scale') as number
          const currentValue = Math.floor(stat.target * currentProgress)
          ref.textContent = currentValue.toString()
        }
      })
    },
    onComplete: function() {
      // 确保最终值正确
      stats.forEach((stat, idx) => {
        const ref = statRefs.value[idx]
        if (ref) {
          ref.textContent = stat.target.toString()
        }
      })
    }
  },
  scrollTrigger: {
    trigger: '.stats-section',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
}

const galleryConfig = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    duration: 1,
    stagger: 0.1,
    ease: 'power2.out'
  },
  scrollTrigger: {
    trigger: '.gallery-section',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
}

const contactConfig = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out'
  },
  scrollTrigger: {
    trigger: '.contact-section',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
}

// 视差层配置
const parallaxLayers = [
  { depth: 0.1, className: 'parallax-layer-1', content: 'layer1-bg' },
  { depth: 0.3, className: 'parallax-layer-2', content: 'layer2-elements' },
  { depth: 0.5, className: 'parallax-layer-3', content: 'layer3-shapes' }
]

// 页面内导航方法
let scrollController: ReturnType<typeof useScrollController> | null = null
let updateScrollProgressFn: (() => void) | null = null

// 挂载时初始化
onMounted(async () => {
  await nextTick()

  // 初始化滚动控制器
  scrollController = useScrollController(sectionIds)
  updateScrollProgressFn = scrollController.updateScrollProgress

  // 监听滚动事件更新进度
  window.addEventListener('scroll', updateScrollProgressFn)

  // 初始化页面加载动画
  gsap.from('.hero-title', {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.2
  })

  // 持续动画效果
  gsap.to('.cta-button', {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: 'sine.inOut'
  })

  // 背景渐变动画
  gsap.to('.hero-section', {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })
})

onBeforeUnmount(() => {
  // 清理事件监听器
  if (updateScrollProgressFn) {
    window.removeEventListener('scroll', updateScrollProgressFn)
  }
  // 杀死所有 GSAP 动画
  gsap.killTweensOf('*')
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

const scrollToSection = (id: string) => {
  if (!scrollController) return
  scrollController.scrollToSection(id)
}

const scrollToNext = () => {
  if (!scrollController) return
  scrollController.scrollToNext()
}

const handleSubmit = (e: Event) => {
  e.preventDefault()
  alert('表单已提交！')
}
</script>

<style scoped>
.gsap-scroll-template {
  position: relative;
  overflow-x: hidden;
}

.navigation-dots {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
}

.hero-section {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  position: relative;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  color: white;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: 30px;
}

.cta-button {
  background: white;
  color: #667eea;
  border: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.features-section {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stats-section {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  text-align: center;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.stat-item {
  padding: 20px;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.2rem;
  color: #333;
}

.gallery-section {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 250px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;
}

.gallery-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.contact-form {
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.contact-form h2 {
  margin-bottom: 30px;
  font-size: 2.5rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: none;
  border-radius: 8px;
}

.contact-form button {
  background: white;
  color: #667eea;
  border: none;
  padding: 15px 40px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
}

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background: linear-gradient(to right, #667eea, #764ba2);
  z-index: 1001;
  transition: width 0.1s ease;
}
</style>
