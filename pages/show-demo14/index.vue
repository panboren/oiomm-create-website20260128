<template>
  <div class="gsap-scroll-template" ref="containerRef">
    <!-- 浮动几何形状装饰 -->
    <div class="floating-shapes">
      <div class="shape circle-1"></div>
      <div class="shape circle-2"></div>
      <div class="shape triangle-1"></div>
      <div class="shape square-1"></div>
      <div class="shape circle-3"></div>
      <div class="shape circle-4"></div>
    </div>

    <!-- 导航点 -->
    <NavigationDots
        :sections="sectionIds"
        :section-names="sectionNames"
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
        <div class="conic-decoration-1"></div>
        <div class="conic-decoration-2"></div>
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-line">GSAP Scrolling</span>
            <span class="title-line highlight">Experience</span>
          </h1>
          <p class="hero-subtitle">创造令人惊叹的滚动动画效果</p>
          <div class="hero-buttons">
            <button class="cta-button primary" @click="scrollToNext">
              <span>开始探索</span>
              <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button class="cta-button secondary" @click="scrollToSection('features')">
              了解更多
            </button>
          </div>
        </div>
        <div class="floating-particles">
          <div v-for="i in 20" :key="i" class="particle" :style="getParticleStyle(i)"></div>
        </div>
      </AnimatedSection>

      <!-- Features Section -->
      <AnimatedSection
          section-id="features"
          class="section features-section"
          :animation-config="featuresConfig"
      >
        <div class="section-header">
          <h2 class="section-title">核心特性</h2>
          <div class="title-underline"></div>
        </div>
        <div class="features-grid">
          <div v-for="(feature, idx) in features" :key="idx" class="feature-card" :class="`card-${idx + 1}`">
            <div class="feature-icon">
              <div class="icon-bg"></div>
              <span class="icon-text">{{ idx + 1 }}</span>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <div class="card-glow"></div>
          </div>
        </div>
      </AnimatedSection>

      <!-- Stats Section -->
      <AnimatedSection
          section-id="stats"
          class="section stats-section"
          :animation-config="statsConfig"
      >
        <div class="section-header">
          <h2 class="section-title">我们的数据</h2>
          <div class="title-underline"></div>
        </div>
        <div class="stats-container">
          <div v-for="(stat, idx) in stats" :key="idx" class="stat-item">
            <div class="stat-circle">
              <div class="stat-number" :ref="el => statRefs[idx] = el">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
              <svg class="stat-ring" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="2"
                        :stroke-dasharray="`${stat.progress} 283`" class="progress-ring"/>
              </svg>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <!-- Gallery Section -->
      <AnimatedSection
          section-id="gallery"
          class="section gallery-section"
          :animation-config="galleryConfig"
      >
        <div class="section-header">
          <h2 class="section-title">精彩案例</h2>
          <div class="title-underline"></div>
        </div>
        <div class="gallery-grid">
          <div v-for="(item, idx) in galleryItems" :key="idx" class="gallery-item bh-item square effect2 left_to_right">
            <a href="#">
              <div class="gallery-image-container">
                <div class="gallery-image" :style="{ backgroundImage: `url(${item.image})` }"></div>
              </div>
              <div class="gallery-overlay">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
                <div class="view-more">查看详情 →</div>
              </div>
            </a>
          </div>
        </div>
      </AnimatedSection>

      <!-- Contact Section -->
      <AnimatedSection
          section-id="contact"
          class="section contact-section"
          :animation-config="contactConfig"
      >
        <div class="conic-decoration-3"></div>
        <div class="contact-content">
          <div class="contact-info">
            <h2 class="contact-title">联系我们</h2>
            <p class="contact-subtitle">期待与您的合作</p>
            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-text">hello@example.com</div>
            </div>
            <div class="info-item">
              <div class="info-icon">📱</div>
              <div class="info-text">+86 123 4567 8900</div>
            </div>
          </div>
          <div class="contact-form-wrapper">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <input type="text" placeholder="您的姓名" required />
                <div class="input-border"></div>
              </div>
              <div class="form-group">
                <input type="email" placeholder="邮箱地址" required />
                <div class="input-border"></div>
              </div>
              <div class="form-group">
                <textarea placeholder="留言内容" rows="4" required></textarea>
                <div class="input-border"></div>
              </div>
              <button type="submit" class="submit-btn">
                <span>发送消息</span>
                <svg class="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          </div>
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
import { useScrollController } from './composables/useScrollController'

// 注册 GSAP 插件
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// 响应式数据
const containerRef = ref<HTMLElement | null>(null)
const statRefs = ref<(HTMLElement | null)[]>([])
const sectionIds = ['hero', 'features', 'stats', 'gallery', 'contact']
const sectionNames = ['首页', '特性', '数据', '案例', '联系']

// 内容数据
const features = [
  { title: '流畅动画', description: '利用GSAP的强大性能创建流畅的滚动动画，60fps丝滑体验' },
  { title: '视差效果', description: '多层视差背景营造深度感，带来沉浸式视觉体验' },
  { title: '响应式设计', description: '完美适配各种设备尺寸，从手机到超大屏' }
]

const stats = [
  { value: 0, label: '满意客户', target: 98, progress: 245 },
  { value: 0, label: '项目完成', target: 245, progress: 220 },
  { value: 0, label: '团队成员', target: 12, progress: 280 },
  { value: 0, label: '年经验', target: 5, progress: 260 }
]

const galleryItems = [
  { image: 'https://qcloud.dpfile.com/pc/9CL3n7i6ShFn5GyVVCBgwBLXRIXkwlC_cHO9T7qX9i4Stlc3tb2D46EPS2wRcTFF.jpg', title: '项目A', description: '现代设计风格' },
  { image: 'https://qcloud.dpfile.com/pc/9CL3n7i6ShFn5GyVVCBgwBLXRIXkwlC_cHO9T7qX9i4Stlc3tb2D46EPS2wRcTFF.jpg', title: '项目B', description: '创新解决方案' },
  { image: 'https://qcloud.dpfile.com/pc/9CL3n7i6ShFn5GyVVCBgwBLXRIXkwlC_cHO9T7qX9i4Stlc3tb2D46EPS2wRcTFF.jpg', title: '项目C', description: '用户体验优化' },
  { image: 'https://qcloud.dpfile.com/pc/9CL3n7i6ShFn5GyVVCBgwBLXRIXkwlC_cHO9T7qX9i4Stlc3tb2D46EPS2wRcTFF.jpg', title: '项目D', description: '品牌重塑' }
]

// 动画配置
const heroConfig = {
  initial: { opacity: 0, y: 80, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power4.out' },
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
}

const featuresConfig = {
  initial: { opacity: 0, y: 60, rotationX: 15 },
  animate: {
    opacity: 1,
    y: 0,
    rotationX: 0,
    duration: 1,
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
  initial: { opacity: 0, scale: 0.5, rotation: -180 },
  animate: {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: 'elastic.out(1, 0.5)',
    onUpdate: function() {
      stats.forEach((stat, idx) => {
        const ref = statRefs.value[idx]
        if (ref) {
          const currentProgress = gsap.getProperty(ref, 'scale') as number
          const currentValue = Math.floor(stat.target * Math.min(currentProgress, 1))
          ref.textContent = currentValue.toString()
        }
      })
    },
    onComplete: function() {
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
  initial: { opacity: 0, y: 100, scale: 0.8 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out(1.7)'
  },
  scrollTrigger: {
    trigger: '.gallery-section',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
}

const contactConfig = {
  initial: { opacity: 0, x: -100, rotationY: 45 },
  animate: {
    opacity: 1,
    x: 0,
    rotationY: 0,
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
  const heroTimeline = gsap.timeline()
  heroTimeline
    .from('.hero-title .title-line', {
      opacity: 0,
      y: 80,
      rotationX: 60,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out'
    })
    .from('.hero-subtitle', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4')
    .from('.hero-buttons', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.2')

  // 持续动画效果 - 按钮脉冲
  gsap.to('.cta-button.primary', {
    scale: 1.05,
    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)',
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: 'sine.inOut'
  })

  // 浮动形状动画
  gsap.to('.floating-shapes .shape', {
    y: '+=30',
    rotation: '+=15',
    duration: 'random(3, 6)',
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: {
      amount: 1,
      from: 'random'
    }
  })

  // 粒子动画
  gsap.to('.particle', {
    y: '-=20',
    opacity: 0.3,
    duration: 'random(2, 4)',
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  // 圆锥渐变装饰旋转
  gsap.to('.conic-decoration-1', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: 'none'
  })
  gsap.to('.conic-decoration-2', {
    rotation: -360,
    duration: 25,
    repeat: -1,
    ease: 'none'
  })

  // 背景渐变动画
  gsap.to('.hero-section', {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    duration: 8,
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
  // 添加提交动画
  gsap.to('.submit-btn', {
    scale: 0.95,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    onComplete: () => {
      gsap.to('.submit-btn', {
        backgroundColor: '#4facfe',
        duration: 0.3
      })
      alert('表单已提交！')
    }
  })
}

// 获取粒子样式
const getParticleStyle = (index: number) => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 2}s`,
  size: `${Math.random() * 4 + 2}px`
})
</script>

<style scoped>
.gsap-scroll-template {
  position: relative;
  overflow-x: hidden;
  background: #0a0a0f;
}

/* 浮动形状 */
.floating-shapes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.shape {
  position: absolute;
  opacity: 0.3;
}

.circle-1 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  top: 10%;
  left: 5%;
}

.circle-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(240, 147, 251, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  top: 60%;
  right: 10%;
}

.circle-3 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(79, 172, 254, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  bottom: 20%;
  left: 20%;
}

.circle-4 {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(67, 233, 123, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  top: 30%;
  right: 30%;
}

.triangle-1 {
  width: 0;
  height: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 100px solid rgba(250, 112, 154, 0.2);
  top: 40%;
  left: 70%;
}

.square-1 {
  width: 80px;
  height: 80px;
  background: rgba(161, 140, 209, 0.2);
  top: 20%;
  left: 50%;
  transform: rotate(45deg);
}

.navigation-dots {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
}

.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  position: relative;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  position: relative;
  overflow: hidden;
  perspective: 1000px;
}

.conic-decoration-1,
.conic-decoration-2 {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  pointer-events: none;
}

.conic-decoration-1 {
  width: 600px;
  height: 600px;
  background: conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #4facfe, #43e97b, #667eea);
  top: -300px;
  right: -200px;
  filter: blur(60px);
}

.conic-decoration-2 {
  width: 400px;
  height: 400px;
  background: conic-gradient(from 180deg, #f093fb, #fa709a, #fee140, #43e97b, #f093fb);
  bottom: -200px;
  left: -100px;
  filter: blur(50px);
}

.hero-content {
  text-align: center;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  perspective: 1000px;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.title-line {
  display: inline-block;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-line.highlight {
  font-size: 5rem;
  background: linear-gradient(135deg, #fee140 0%, #fa709a 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  font-weight: 300;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 18px 50px;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button.primary {
  background: white;
  color: #667eea;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow-icon {
  transform: translateX(5px);
}

/* 粒子 */
.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
}

/* Features Section */
.features-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 3rem;
  color: white;
  margin-bottom: 15px;
  font-weight: 700;
}

.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #f093fb);
  margin: 0 auto;
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(240, 147, 251, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);
  border-color: rgba(102, 126, 234, 0.5);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  position: relative;
}

.card-1 .feature-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-2 .feature-icon {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.card-3 .feature-icon {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.icon-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  z-index: 1;
}

.feature-card h3 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.card-glow {
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  top: -100px;
  right: -100px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover .card-glow {
  opacity: 1;
}

/* Stats Section */
.stats-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  position: relative;
  overflow: hidden;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.stat-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-circle {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stat-number {
  font-size: 4rem;
  font-weight: 800;
  color: white;
  margin-bottom: 5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.stat-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-ring {
  transition: stroke-dasharray 1s ease;
}

/* Gallery Section */
.gallery-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-item {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease;
  background: rgba(255, 255, 255, 0.05);
}

.gallery-item:hover {
  transform: translateY(-10px) scale(1.02);
}

.gallery-item a {
  display: block;
  text-decoration: none;
}

.gallery-image-container {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.gallery-overlay {
  padding: 25px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  backdrop-filter: blur(10px);
}

.gallery-overlay h4 {
  color: white;
  font-size: 1.4rem;
  margin-bottom: 8px;
  font-weight: 600;
}

.gallery-overlay p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  line-height: 1.5;
}

.view-more {
  color: #fee140;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.3s ease;
}

.gallery-item:hover .view-more {
  gap: 10px;
}

/* Contact Section */
.contact-section {
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
}

.conic-decoration-3 {
  position: absolute;
  width: 500px;
  height: 500px;
  background: conic-gradient(from 90deg, #667eea, #764ba2, #f093fb, #667eea);
  border-radius: 50%;
  opacity: 0.15;
  filter: blur(80px);
  bottom: -200px;
  right: -150px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;
}

.contact-info {
  color: white;
}

.contact-title {
  font-size: 3rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.contact-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(10px);
}

.info-icon {
  font-size: 2rem;
}

.info-text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
}

.contact-form-wrapper {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-group {
  position: relative;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.1);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.input-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #f093fb);
  transition: width 0.3s ease;
}

.form-group:focus-within .input-border {
  width: 100%;
}

.submit-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 18px 40px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
}

.send-icon {
  width: 20px;
  height: 20px;
}

/* Scroll Progress */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #667eea);
  background-size: 300% 100%;
  animation: gradientMove 3s ease infinite;
  z-index: 1001;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .title-line.highlight {
    font-size: 3.5rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .stat-circle {
    width: 150px;
    height: 150px;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-title {
    font-size: 2rem;
  }

  .navigation-dots {
    right: 15px;
  }
}
</style>
