<template>
  <div class="zooow-ai-website">
    <!-- 导航栏 -->
    <nav class="navbar" :class="{ 'scrolled': navScrolled }">
      <div class="nav-container">
        <div class="logo">
          <span class="logo-text">ZOOOW</span>
          <span class="logo-ai">AI</span>
        </div>
        <div class="nav-links">
          <a href="#ai-website" @click.prevent="scrollToSection('ai-website')">AI网站建设</a>
          <a href="#3d-animation" @click.prevent="scrollToSection('3d-animation')">3D动画特效</a>
          <a href="#echarts" @click.prevent="scrollToSection('echarts')">Echarts特效</a>
          <a href="#3d-cloud" @click.prevent="scrollToSection('3d-cloud')">3D云展厅</a>
          <a href="#contact" @click.prevent="scrollToSection('contact')">联系我们</a>
        </div>
        <button class="nav-btn">立即体验</button>
      </div>
    </nav>

    <!-- Hero区域 -->
    <section class="hero" id="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-line" v-for="(line, i) in heroLines" :key="i" ref="heroTitleLines">
              {{ line }}
            </span>
          </h1>
          <p class="hero-subtitle" ref="heroSubtitle">
            下一代AI驱动的数字体验平台
          </p>
          <div class="hero-buttons" ref="heroButtons">
            <button class="btn-primary">开始探索</button>
            <button class="btn-secondary">了解更多</button>
          </div>
        </div>
        <div class="hero-visual" ref="heroVisual">
          <div class="visual-circle visual-circle-1"></div>
          <div class="visual-circle visual-circle-2"></div>
          <div class="visual-circle visual-circle-3"></div>
          <div class="visual-particles">
            <div class="particle" v-for="i in 20" :key="i"></div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" ref="scrollIndicator">
        <div class="scroll-arrow"></div>
        <span>向下滚动</span>
      </div>
    </section>

    <!-- AI网站建设 -->
    <section class="section ai-website-section" id="ai-website">
      <div class="section-container">
        <div class="section-header" ref="sectionHeader1">
          <h2 class="section-title">
            <span class="title-highlight">AI</span> 网站建设
          </h2>
          <p class="section-subtitle">智能化建站，让您的网站与众不同</p>
        </div>
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, i) in aiFeatures" :key="i" :ref="el => { if(el) featureCards.push(el) }">
            <div class="feature-icon">
              <img :src="feature.icon" :alt="feature.title" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3D动画特效 -->
    <section class="section animation-section" id="3d-animation">
      <div class="section-container">
        <div class="section-header" ref="sectionHeader2">
          <h2 class="section-title">
            <span class="title-highlight">3D</span> 动画特效
          </h2>
          <p class="section-subtitle">震撼的视觉体验，无限创意可能</p>
        </div>
        <div class="animation-showcase">
          <div class="animation-demo" v-for="(demo, i) in animationDemos" :key="i" :ref="el => { if(el) animationDemoCards.push(el) }">
            <div class="demo-placeholder">
              <div class="demo-icon">{{ demo.icon }}</div>
              <span class="demo-name">{{ demo.name }}</span>
            </div>
            <div class="demo-overlay">
              <button class="demo-btn">查看演示</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Echarts特效 -->
    <section class="section echarts-section" id="echarts">
      <div class="section-container">
        <div class="section-header" ref="sectionHeader3">
          <h2 class="section-title">
            <span class="title-highlight">Echarts</span> 数据可视化
          </h2>
          <p class="section-subtitle">专业级图表，数据一目了然</p>
        </div>
        <div class="echarts-showcase">
          <div class="echarts-card" v-for="(chart, i) in echartsList" :key="i" :ref="el => { if(el) echartsCards.push(el) }">
            <div class="echarts-placeholder">
              <div class="chart-icon">{{ chart.icon }}</div>
              <div class="chart-info">
                <h4>{{ chart.name }}</h4>
                <p>{{ chart.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3D云展厅 -->
    <section class="section cloud-section" id="3d-cloud">
      <div class="section-container">
        <div class="section-header" ref="sectionHeader4">
          <h2 class="section-title">
            <span class="title-highlight">3D</span> 云展厅
          </h2>
          <p class="section-subtitle">沉浸式虚拟展厅，突破空间限制</p>
        </div>
        <div class="cloud-showcase" ref="cloudShowcase">
          <div class="cloud-main">
            <div class="cloud-placeholder">
              <div class="cloud-icon">🏛️</div>
              <span class="cloud-title">虚拟展厅</span>
              <p class="cloud-desc">360°全景浏览，沉浸式体验</p>
            </div>
          </div>
          <div class="cloud-features">
            <div class="cloud-feature" v-for="(item, i) in cloudFeatures" :key="i">
              <span class="feature-number">0{{ i + 1 }}</span>
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="section contact-section" id="contact">
      <div class="section-container">
        <div class="contact-wrapper" ref="contactWrapper">
          <div class="contact-info">
            <h2 class="contact-title">
              <span class="title-highlight">联系</span> 我们
            </h2>
            <p class="contact-subtitle">期待与您合作，共创美好未来</p>
            <div class="contact-details">
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <span>contact@zooow-ai.com</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📱</span>
                <span>+86 123 4567 8900</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <span>北京市朝阳区科技园区</span>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <div class="form-group">
              <input type="text" placeholder="您的姓名" class="form-input" />
            </div>
            <div class="form-group">
              <input type="email" placeholder="您的邮箱" class="form-input" />
            </div>
            <div class="form-group">
              <textarea placeholder="请输入您的留言" class="form-textarea"></textarea>
            </div>
            <button class="submit-btn">发送消息</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-logo">
            <span class="logo-text">ZOOOW</span>
            <span class="logo-ai">AI</span>
          </div>
          <p class="footer-desc">下一代AI驱动的数字体验平台</p>
          <div class="footer-socials">
            <a href="#" class="social-link">微信</a>
            <a href="#" class="social-link">微博</a>
            <a href="#" class="social-link">GitHub</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 ZOOOW-AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// 响应式数据
const navScrolled = ref(false)
const heroLines = ['引领AI', '革命', '重塑未来']
const featureCards = ref([])
const animationDemoCards = ref([])
const echartsCards = ref([])

// 引用
const heroTitleLines = ref([])
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const heroVisual = ref(null)
const scrollIndicator = ref(null)
const sectionHeader1 = ref(null)
const sectionHeader2 = ref(null)
const sectionHeader3 = ref(null)
const sectionHeader4 = ref(null)
const cloudShowcase = ref(null)
const contactWrapper = ref(null)

// 垂直滚动动画函数 - 参考show-demo5的verticalAnimation
const verticalAnimation = async (selector: string, runStyle: any) => {
  try {
    if (!selector || !runStyle) return

    const toKey = runStyle.toKey || 'from'
    delete runStyle.toKey

    // 创建滚动触发动画
    gsap[toKey](selector, {
      ...runStyle,
      scrollTrigger: {
        trigger: selector,
        scrub: 1,
        markers: false,
        start: 'top 100%',
        end: 'bottom 100%'
      }
    })
  } catch (error) {
    console.error('纵向动画创建失败:', error)
  }
}

// 数据
const aiFeatures = [
  {
    icon: 'https://pics0.baidu.com/feed/0824ab18972bd40706e523c12ebc0a5e0fb309b4.jpeg@f_auto?token=e9ba11775a1c6b44735b435fa23c0b8e',
    title: '智能生成',
    desc: 'AI自动生成网站内容，快速高效'
  },
  {
    icon: 'https://pics0.baidu.com/feed/0824ab18972bd40706e523c12ebc0a5e0fb309b4.jpeg@f_auto?token=e9ba11775a1c6b44735b435fa23c0b8e',
    title: '个性化设计',
    desc: '根据需求定制专属设计方案'
  },
  {
    icon: 'https://pics0.baidu.com/feed/0824ab18972bd40706e523c12ebc0a5e0fb309b4.jpeg@f_auto?token=e9ba11775a1c6b44735b435fa23c0b8e',
    title: '快速部署',
    desc: '一键发布，即时上线'
  },
  {
    icon: 'https://pics0.baidu.com/feed/0824ab18972bd40706e523c12ebc0a5e0fb309b4.jpeg@f_auto?token=e9ba11775a1c6b44735b435fa23c0b8e',
    title: '安全可靠',
    desc: '企业级安全保障，数据无忧'
  },
  {
    icon: 'https://pics0.baidu.com/feed/0824ab18972bd40706e523c12ebc0a5e0fb309b4.jpeg@f_auto?token=e9ba11775a1c6b44735b435fa23c0b8e',
    title: '响应式设计',
    desc: '完美适配所有设备屏幕'
  },
  {
    icon: 'https://pics0.baidu.com/feed/0824ab18972bd40706e523c12ebc0a5e0fb309b4.jpeg@f_auto?token=e9ba11775a1c6b44735b435fa23c0b8e',
    title: '易于维护',
    desc: '可视化编辑，简单便捷'
  }
]

const animationDemos = [
  { name: '粒子特效', icon: '✨' },
  { name: '3D变换', icon: '🎭' },
  { name: '流畅过渡', icon: '🌊' },
  { name: '交互反馈', icon: '💫' }
]

const echartsList = [
  { name: '动态图表', icon: '📊', desc: '实时数据更新，动态展示' },
  { name: '交互式图表', icon: '📈', desc: '支持多种交互操作' },
  { name: '自定义样式', icon: '🎨', desc: '个性化图表外观' },
  { name: '大数据支持', icon: '💾', desc: '处理百万级数据量' },
  { name: '响应式布局', icon: '📱', desc: '自适应不同屏幕' },
  { name: '导出功能', icon: '📥', desc: '支持多种格式导出' }
]

const cloudFeatures = [
  { title: '沉浸式体验', desc: '360°全景浏览，身临其境' },
  { title: '云端渲染', desc: '高性能渲染，流畅体验' },
  { title: '实时互动', desc: '支持多人在线互动' }
]

// 滚动到指定区域 - 参考show-demo5
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: element, offsetY: 0, autoKill: false },
      ease: 'power3.inOut'
    })
  }
}

// GSAP动画
let scrollTriggers = []

const initAnimations = () => {
  // 导航栏滚动效果
  window.addEventListener('scroll', () => {
    navScrolled.value = window.scrollY > 50
  })

  // Hero背景动画 - 使用垂直滚动动画
  verticalAnimation('.hero', {
    scale: 1.1,
    opacity: 0.8,
    duration: 1.5,
    toKey: 'from'
  })

  // Hero标题动画 - 使用垂直滚动动画
  verticalAnimation('.title-line', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    toKey: 'from'
  })

  // Hero副标题动画 - 使用垂直滚动动画
  verticalAnimation('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  // Hero按钮动画 - 使用垂直滚动动画
  verticalAnimation('.hero-buttons', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  // Hero视觉动画 - 使用垂直滚动动画
  verticalAnimation('.hero-visual', {
    scale: 0.8,
    opacity: 0,
    rotation: -10,
    duration: 1.2,
    toKey: 'from'
  })

  // 视觉圆环持续动画
  gsap.to('.visual-circle-1', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: 'none'
  })

  gsap.to('.visual-circle-2', {
    rotation: -360,
    duration: 25,
    repeat: -1,
    ease: 'none'
  })

  gsap.to('.visual-circle-3', {
    rotation: 360,
    duration: 30,
    repeat: -1,
    ease: 'none'
  })

  // 滚动指示器动画
  gsap.to(scrollIndicator.value, {
    y: 20,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  // AI网站建设 - Section Header - 使用垂直滚动动画
  verticalAnimation('.section-header', {
    y: 80,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  // AI网站建设 - Feature Cards - 使用垂直滚动动画
  verticalAnimation('.feature-card', {
    y: 100,
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    stagger: 0.1,
    toKey: 'from'
  })

  // 3D动画特效 - Demo Cards - 使用垂直滚动动画
  verticalAnimation('.animation-demo', {
    y: 100,
    opacity: 0,
    rotation: 15,
    duration: 0.8,
    stagger: 0.1,
    toKey: 'from'
  })

  // Echarts特效 - Chart Cards - 使用垂直滚动动画
  verticalAnimation('.echarts-card', {
    y: 80,
    opacity: 0,
    scale: 0.85,
    duration: 0.8,
    stagger: 0.1,
    toKey: 'from'
  })

  // 3D云展厅 - Cloud Showcase - 使用垂直滚动动画
  verticalAnimation('.cloud-showcase', {
    scale: 0.9,
    opacity: 0,
    filter: 'blur(15px)',
    duration: 1,
    toKey: 'from'
  })

  verticalAnimation('.cloud-main', {
    x: -100,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  verticalAnimation('.cloud-features', {
    x: 100,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  verticalAnimation('.cloud-feature', {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    toKey: 'from'
  })

  // 联系我们 - Contact Wrapper - 使用垂直滚动动画
  verticalAnimation('.contact-wrapper', {
    y: 100,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  verticalAnimation('.contact-info', {
    x: -80,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  verticalAnimation('.contact-form', {
    x: 80,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  verticalAnimation('.contact-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  verticalAnimation('.form-group', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 页脚动画 - 使用垂直滚动动画
  verticalAnimation('.footer', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  // 粒子持续动画 - 参考show-demo5的floating-shape
  gsap.to('.particle', {
    y: -20,
    duration: 2 + Math.random() * 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    stagger: {
      each: 0.1,
      from: 'random'
    }
  })

  // 初始化粒子随机位置和动画
  const particles = document.querySelectorAll('.particle')
  particles.forEach((particle, i) => {
    const size = 3 + Math.random() * 5
    const left = Math.random() * 100
    const top = Math.random() * 100
    const delay = Math.random() * 2
    const duration = 2 + Math.random() * 3

    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.left = `${left}%`
    particle.style.top = `${top}%`
    particle.style.animationDelay = `${delay}s`
    particle.style.animationDuration = `${duration}s`
  })

  // 社交链接悬停效果
  document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        y: -3,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 按钮悬停效果 - 参考show-demo5
  document.querySelectorAll('.btn-primary, .btn-secondary, .nav-btn, .submit-btn, .demo-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 卡片悬停效果 - 参考show-demo5
  document.querySelectorAll('.feature-card, .echarts-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(card.querySelector('.feature-icon, .chart-icon'), {
        scale: 1.2,
        rotate: 5,
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(card.querySelector('.feature-icon, .chart-icon'), {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 动画演示卡片悬停效果
  document.querySelectorAll('.animation-demo').forEach(demo => {
    const overlay = demo.querySelector('.demo-overlay')
    demo.addEventListener('mouseenter', () => {
      gsap.to(demo, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
      gsap.fromTo(overlay.querySelector('.demo-btn'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'back.out(1.7)', delay: 0.1 }
      )
    })
    demo.addEventListener('mouseleave', () => {
      gsap.to(demo, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 云展厅特性悬停效果
  document.querySelectorAll('.cloud-feature').forEach((item, i) => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        translateX: 10,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(item.querySelector('.feature-number'), {
        scale: 1.1,
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
    })
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        translateX: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(item.querySelector('.feature-number'), {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 表单输入框焦点效果 - 参考show-demo5
  document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
    input.addEventListener('focus', () => {
      gsap.to(input, {
        boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.3)',
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    input.addEventListener('blur', () => {
      gsap.to(input, {
        boxShadow: 'none',
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 导航链接悬停效果 - 参考show-demo5
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        y: -2,
        duration: 0.2,
        ease: 'power2.out'
      })
    })
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        y: 0,
        duration: 0.2,
        ease: 'power2.out'
      })
    })
  })
}

onMounted(() => {
  // 等待DOM渲染
  setTimeout(() => {
    initAnimations()
  }, 100)
})

onUnmounted(() => {
  // 清理所有动画和ScrollTrigger - 参考show-demo5
  gsap.killTweensOf('*')
  ScrollTrigger.getAll().forEach(st => st.kill())
  ScrollTrigger.refresh()
})
</script>

<style scoped>
.zooow-ai-website {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow-x: hidden;
  /* 隐藏滚动条但保留滚动功能 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 和 Edge */
}

.zooow-ai-website::-webkit-scrollbar {
  display: none; /* Chrome, Safari 和 Opera */
}

.zooow-ai-website::-webkit-scrollbar-thumb {
  display: none;
}

.zooow-ai-website::-webkit-scrollbar-track {
  display: none;
}

/* 全局隐藏滚动条 */
:deep(html) {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

:deep(body) {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

:deep(html)::-webkit-scrollbar {
  display: none;
}

:deep(body)::-webkit-scrollbar {
  display: none;
}

/* 导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(15, 12, 41, 0.95);
  backdrop-filter: blur(10px);
  padding: 15px 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 28px;
  font-weight: 700;
}

.logo-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-ai {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  padding: 8px 0;
  transition: all 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-btn {
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.nav-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

/* Hero区域 */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 100px 20px 60px;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-content {
  z-index: 2;
}

.hero-title {
  font-size: 64px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
}

.title-line {
  display: block;
  background: linear-gradient(135deg, #667eea 0%, #f093fb 50%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
}

.hero-subtitle {
  font-size: 24px;
  color: #a0a0b0;
  margin-bottom: 40px;
  line-height: 1.6;
  opacity: 0;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn-primary,
.btn-secondary {
  padding: 16px 40px;
  border: none;
  border-radius: 35px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.5);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(102, 126, 234, 0.7);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateY(-3px);
}

/* Hero视觉区域 */
.hero-visual {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-circle {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
}

.visual-circle-1 {
  width: 300px;
  height: 300px;
  border-color: rgba(102, 126, 234, 0.3);
}

.visual-circle-2 {
  width: 250px;
  height: 250px;
  border-color: rgba(240, 147, 251, 0.4);
  border-width: 3px;
}

.visual-circle-3 {
  width: 200px;
  height: 200px;
  border-color: rgba(245, 87, 108, 0.5);
  border-width: 4px;
}

.visual-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #f093fb);
  animation: floatParticle 4s ease-in-out infinite;
}

@keyframes floatParticle {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-30px) scale(1.2);
    opacity: 1;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #a0a0b0;
  font-size: 14px;
}

.scroll-arrow {
  width: 30px;
  height: 50px;
  border: 2px solid #a0a0b0;
  border-radius: 15px;
  position: relative;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #a0a0b0;
}

/* 通用Section样式 */
.section {
  padding: 120px 20px;
  position: relative;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
  opacity: 0;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
}

.title-highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 20px;
  color: #a0a0b0;
  max-width: 600px;
  margin: 0 auto;
}

/* AI网站建设 */
.ai-website-section {
  background: rgba(102, 126, 234, 0.05);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #ffffff;
}

.feature-desc {
  font-size: 16px;
  color: #a0a0b0;
  line-height: 1.6;
}

/* 3D动画特效 */
.animation-showcase {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.animation-demo {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 300px;
}

.animation-demo:hover {
  transform: scale(1.05);
  border-color: rgba(240, 147, 251, 0.5);
  box-shadow: 0 15px 40px rgba(240, 147, 251, 0.3);
}

.demo-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.demo-icon {
  font-size: 64px;
  filter: drop-shadow(0 4px 20px rgba(240, 147, 251, 0.5));
}

.demo-name {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
}

.demo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.animation-demo:hover .demo-overlay {
  opacity: 1;
}

.demo-btn {
  padding: 12px 30px;
  background: #ffffff;
  color: #667eea;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.demo-btn:hover {
  transform: scale(1.1);
}

/* Echarts特效 */
.echarts-section {
  background: rgba(118, 75, 162, 0.05);
}

.echarts-showcase {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.echarts-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.echarts-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(118, 75, 162, 0.5);
  box-shadow: 0 10px 30px rgba(118, 75, 162, 0.3);
}

.echarts-placeholder {
  display: flex;
  align-items: center;
  gap: 20px;
}

.chart-icon {
  font-size: 48px;
}

.chart-info h4 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #ffffff;
}

.chart-info p {
  font-size: 14px;
  color: #a0a0b0;
  line-height: 1.5;
}

/* 3D云展厅 */
.cloud-section {
  background: rgba(240, 147, 251, 0.05);
}

.cloud-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.cloud-main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cloud-placeholder {
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(240, 147, 251, 0.3);
  border-radius: 30px;
  padding: 60px 40px;
  text-align: center;
  transition: all 0.3s ease;
}

.cloud-placeholder:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 50px rgba(240, 147, 251, 0.3);
}

.cloud-icon {
  font-size: 80px;
  margin-bottom: 20px;
  filter: drop-shadow(0 8px 30px rgba(240, 147, 251, 0.5));
}

.cloud-title {
  display: block;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
}

.cloud-desc {
  font-size: 18px;
  color: #a0a0b0;
}

.cloud-features {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cloud-feature {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
}

.cloud-feature:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(240, 147, 251, 0.5);
  transform: translateX(10px);
}

.feature-number {
  display: block;
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

.cloud-feature h4 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #ffffff;
}

.cloud-feature p {
  font-size: 16px;
  color: #a0a0b0;
  line-height: 1.6;
}

/* 联系我们 */
.contact-section {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1));
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-info {
  opacity: 0;
}

.contact-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 20px;
}

.contact-subtitle {
  font-size: 18px;
  color: #a0a0b0;
  margin-bottom: 40px;
  line-height: 1.6;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  color: #ffffff;
}

.contact-icon {
  font-size: 28px;
}

.contact-form {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
}

.form-group {
  margin-bottom: 24px;
}

.form-input {
  width: 100%;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.08);
}

.form-input::placeholder {
  color: #a0a0b0;
}

.form-textarea {
  width: 100%;
  min-height: 150px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-size: 16px;
  resize: vertical;
  transition: all 0.3s ease;
}

.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.08);
}

.form-textarea::placeholder {
  color: #a0a0b0;
}

.submit-btn {
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

/* 页脚 */
.footer {
  background: rgba(15, 12, 41, 0.9);
  padding: 60px 20px 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  text-align: center;
  margin-bottom: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 16px;
}

.footer-desc {
  font-size: 16px;
  color: #a0a0b0;
  margin-bottom: 24px;
}

.footer-socials {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-link {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(102, 126, 234, 0.2);
  border-color: #667eea;
  transform: translateY(-3px);
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: #a0a0b0;
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-visual {
    display: none;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .animation-showcase {
    grid-template-columns: repeat(2, 1fr);
  }

  .echarts-showcase {
    grid-template-columns: repeat(2, 1fr);
  }

  .cloud-showcase {
    grid-template-columns: 1fr;
  }

  .contact-wrapper {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-title {
    font-size: 42px;
  }

  .features-grid,
  .animation-showcase,
  .echarts-showcase {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 32px;
  }

  .feature-card,
  .animation-demo,
  .echarts-card {
    padding: 30px 20px;
  }
}
</style>
