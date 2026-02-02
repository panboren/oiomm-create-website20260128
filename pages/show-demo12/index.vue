<template>
  <div class="website-container">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-logo">NexusSpace</div>
      <div class="nav-links">
        <a href="javascript:void(0)" class="nav-link" @click="jumpToDimension(0)">维度一</a>
        <a href="javascript:void(0)" class="nav-link" @click="jumpToDimension(1)">维度二</a>
        <a href="javascript:void(0)" class="nav-link" @click="jumpToDimension(2)">维度三</a>
        <a href="javascript:void(0)" class="nav-link" @click="jumpToDimension(3)">维度四</a>
        <a href="javascript:void(0)" class="nav-link" @click="jumpToDimension(4)">维度五</a>
      </div>
      <button class="nav-button">探索</button>
    </nav>

    <!-- 多维层容器 -->
    <div class="multiverse-container">
      <!-- 维度一: 首页 -->
      <section id="home" class="section hero-section dimensional-panel" data-dimension="0">
        <div class="dimension-bg bg-1"></div>
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-icon">🌀</span>
            <span class="badge-text">维度一 · 现实世界</span>
          </div>
          <h1 class="hero-title">
            <span class="title-line">跨越维度</span>
            <span class="title-line">探索无限可能</span>
          </h1>
          <p class="hero-subtitle">
            欢迎来到多维时空穿梭系统<br/>
            在这里，每个维度都有独特的时空规则和视觉体验
          </p>
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="hero-stat-number">5</span>
              <span class="hero-stat-label">维度</span>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat">
              <span class="hero-stat-number">∞</span>
              <span class="hero-stat-label">可能</span>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat">
              <span class="hero-stat-number">360°</span>
              <span class="hero-stat-label">穿梭</span>
            </div>
          </div>
          <div class="hero-buttons">
            <button class="hero-btn primary" @click="nextDimension">进入下一维度</button>
            <button class="hero-btn secondary">
              <span class="btn-icon">🎮</span>
              开始漫游
            </button>
          </div>
          <div class="hero-features">
            <div class="feature-item">
              <span class="feature-icon">🌐</span>
              <span class="feature-text">无限循环</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🔮</span>
              <span class="feature-text">时空缩放</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🚀</span>
              <span class="feature-text">维度跳跃</span>
            </div>
          </div>
        </div>
        <div class="dimension-decoration deco-1">
          <div class="orbit orbit-1"></div>
          <div class="orbit orbit-2"></div>
          <div class="orbit orbit-3"></div>
          <div class="dimension-core"></div>
        </div>
      </section>

      <!-- 维度二: 关于 -->
      <section id="about" class="section about-section dimensional-panel" data-dimension="1">
        <div class="dimension-bg bg-2"></div>
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2 class="section-title">维度二 · 数字空间</h2>
              <p class="section-subtitle">在数据构成的虚拟世界中，信息即能量</p>
              <p class="about-description">
                NexusSpace 是一个突破性的多维时空探索平台。在这里，传统的网页浏览体验被重新定义。
                通过创新的穿梭系统，用户可以在不同维度之间自由切换，每个维度都呈现出独特的视觉风格和交互方式。
              </p>
              <p class="about-description">
                我们的引擎融合了无限循环、空间缩放和多维度变换技术，创造出前所未有的沉浸式体验。
              </p>
              <div class="about-advantages">
                <div class="advantage-item">
                  <div class="advantage-icon">
                    <span class="adv-emoji">🔷</span>
                  </div>
                  <h4 class="advantage-title">维度折叠</h4>
                  <p class="advantage-desc">将空间压缩，实现瞬间跳跃</p>
                </div>
                <div class="advantage-item">
                  <div class="advantage-icon">
                    <span class="adv-emoji">⚡</span>
                  </div>
                  <h4 class="advantage-title">时空缩放</h4>
                  <p class="advantage-desc">自由控制空间尺度和时间流速</p>
                </div>
                <div class="advantage-item">
                  <div class="advantage-icon">
                    <span class="adv-emoji">🌌</span>
                  </div>
                  <h4 class="advantage-title">无限循环</h4>
                  <p class="advantage-desc">突破边界，永恒持续的探索之旅</p>
                </div>
                <div class="advantage-item">
                  <div class="advantage-icon">
                    <span class="adv-emoji">🎭</span>
                  </div>
                  <h4 class="advantage-title">形态变换</h4>
                  <p class="advantage-desc">动态适应的界面，随心而动</p>
                </div>
              </div>
              <div class="about-stats">
                <div class="stat-item">
                  <span class="stat-number" data-target="5">0</span>
                  <span class="stat-label">个</span>
                  <p class="stat-name">独立维度</p>
                </div>
                <div class="stat-item">
                  <span class="stat-number" data-target="100">0</span>
                  <span class="stat-label">%</span>
                  <p class="stat-name">沉浸体验</p>
                </div>
                <div class="stat-item">
                  <span class="stat-number" data-target="0">0</span>
                  <span class="stat-label">延迟</span>
                  <p class="stat-name">响应速度</p>
                </div>
                <div class="stat-item">
                  <span class="stat-number" data-target="∞">0</span>
                  <span class="stat-label">循环</span>
                  <p class="stat-name">探索可能</p>
                </div>
              </div>
            </div>
            <div class="about-image">
              <div class="image-wrapper">
                <div class="data-cube cube-1">
                  <div class="cube-face front">DATA</div>
                  <div class="cube-face back">FUTURE</div>
                  <div class="cube-face right">NEXUS</div>
                  <div class="cube-face left">SPACE</div>
                  <div class="cube-face top">TIME</div>
                  <div class="cube-face bottom">REALITY</div>
                </div>
                <div class="data-stream stream-1"></div>
                <div class="data-stream stream-2"></div>
                <div class="data-stream stream-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 维度三: 服务 -->
      <section id="services" class="section services-section dimensional-panel" data-dimension="2">
        <div class="dimension-bg bg-3"></div>
        <div class="container">
          <h2 class="section-title">维度三 · 能量矩阵</h2>
          <p class="section-subtitle">在不同维度之间，能量以不同形式呈现</p>
          <div class="services-grid">
            <div class="service-card matrix-card">
              <div class="matrix-effect"></div>
              <div class="service-icon icon-1"></div>
              <h3 class="service-title">维度穿梭引擎</h3>
              <p class="service-desc">
                核心引擎，负责在不同维度之间平滑过渡，确保用户的沉浸式体验不被打断。
              </p>
              <ul class="service-features">
                <li>无限循环支持</li>
                <li>空间缩放控制</li>
                <li>多维度变换</li>
                <li>平滑过渡效果</li>
              </ul>
              <a href="#" class="service-link">探索详情 →</a>
            </div>
            <div class="service-card matrix-card">
              <div class="matrix-effect"></div>
              <div class="service-icon icon-2"></div>
              <h3 class="service-title">时空缩放系统</h3>
              <p class="service-desc">
                允许用户在不同尺度下观察内容，从宏观到微观，自由控制观察视角。
              </p>
              <ul class="service-features">
                <li>动态缩放</li>
                <li>透视变化</li>
                <li>平滑过渡</li>
                <li>边界保护</li>
              </ul>
              <a href="#" class="service-link">探索详情 →</a>
            </div>
            <div class="service-card matrix-card">
              <div class="matrix-effect"></div>
              <div class="service-icon icon-3"></div>
              <h3 class="service-title">能量场渲染</h3>
              <p class="service-desc">
                为每个维度创建独特的视觉氛围，通过粒子、光晕和动态效果营造沉浸感。
              </p>
              <ul class="service-features">
                <li>粒子系统</li>
                <li>光晕效果</li>
                <li>动态背景</li>
                <li>空间感知</li>
              </ul>
              <a href="#" class="service-link">探索详情 →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 维度四: 案例 -->
      <section id="portfolio" class="section portfolio-section dimensional-panel" data-dimension="3">
        <div class="dimension-bg bg-4"></div>
        <div class="container">
          <h2 class="section-title">维度四 · 创造领域</h2>
          <p class="section-subtitle">无数个可能的平行世界中，每个都是独一无二的作品</p>
          <div class="portfolio-grid">
            <div class="portfolio-item hologram-card">
              <div class="hologram-effect"></div>
              <div class="portfolio-overlay">
                <div class="portfolio-tag">维度A</div>
                <h3 class="portfolio-title">数字孪生系统</h3>
                <p class="portfolio-desc">
                  为工业4.0打造的数字孪生平台，实时映射物理世界的每一个细节。
                </p>
                <div class="portfolio-meta">
                  <span class="meta-tag">实时同步</span>
                  <span class="meta-tag">AI预测</span>
                  <span class="meta-tag">3D可视化</span>
                </div>
                <button class="portfolio-btn">进入这个维度</button>
              </div>
            </div>
            <div class="portfolio-item hologram-card">
              <div class="hologram-effect"></div>
              <div class="portfolio-overlay">
                <div class="portfolio-tag">维度B</div>
                <h3 class="portfolio-title">元宇宙入口</h3>
                <p class="portfolio-desc">
                  连接现实与虚拟的桥梁，为用户提供沉浸式的元宇宙体验。
                </p>
                <div class="portfolio-meta">
                  <span class="meta-tag">VR/AR</span>
                  <span class="meta-tag">社交</span>
                  <span class="meta-tag">经济系统</span>
                </div>
                <button class="portfolio-btn">进入这个维度</button>
              </div>
            </div>
            <div class="portfolio-item hologram-card">
              <div class="hologram-effect"></div>
              <div class="portfolio-overlay">
                <div class="portfolio-tag">维度C</div>
                <h3 class="portfolio-title">AI 意识网络</h3>
                <p class="portfolio-desc">
                  构建人机协作的未来，让AI成为真正的智能伙伴。
                </p>
                <div class="portfolio-meta">
                  <span class="meta-tag">神经网络</span>
                  <span class="meta-tag">自然语言</span>
                  <span class="meta-tag">情感计算</span>
                </div>
                <button class="portfolio-btn">进入这个维度</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 维度五: 联系 -->
      <section id="contact" class="section contact-section dimensional-panel" data-dimension="4">
        <div class="dimension-bg bg-5"></div>
        <div class="container">
          <h2 class="section-title">维度五 · 连接点</h2>
          <p class="section-subtitle">所有维度的交汇点，开启新的探索之旅</p>
          <div class="contact-content">
            <div class="contact-info">
              <div class="info-item warp-card">
                <div class="warp-effect"></div>
                <div class="info-icon icon-location">📍</div>
                <div class="info-text">
                  <h4>现实坐标</h4>
                  <p>北京市朝阳区科技园创新大厦A座12层</p>
                  <p class="info-sub">维度: Earth-2026 | 坐标: 116.40°E, 39.90°N</p>
                </div>
              </div>
              <div class="info-item warp-card">
                <div class="warp-effect"></div>
                <div class="info-icon icon-phone">📡</div>
                <div class="info-text">
                  <h4>量子通讯</h4>
                  <p>400-888-8888（全维度免费热线）</p>
                  <p class="info-sub">频率: Quantum-Band | 延迟: 0ms</p>
                </div>
              </div>
              <div class="info-item warp-card">
                <div class="warp-effect"></div>
                <div class="info-icon icon-email">✉️</div>
                <div class="info-text">
                  <h4>数字信使</h4>
                  <p>contact@nexusspace.io</p>
                  <p class="info-sub">协议: Quantum-Mail | 安全等级: MAX</p>
                </div>
              </div>
              <div class="info-item warp-card">
                <div class="warp-effect"></div>
                <div class="info-icon icon-time">⏰</div>
                <div class="info-text">
                  <h4>时空同步</h4>
                  <p>所有维度全天候服务</p>
                  <p class="info-sub">时区: Universal Coordinate Time</p>
                </div>
              </div>
            </div>
            <div class="contact-form warp-form">
              <div class="form-header">
                <h3>发送维度信号</h3>
                <p>填写下方表单，我们将跨维度与您建立连接</p>
              </div>
              <form>
                <input type="text" placeholder="您的身份标识 *" class="form-input" />
                <input type="email" placeholder="量子邮箱 *" class="form-input" />
                <input type="text" placeholder="所属维度" class="form-input" />
                <select class="form-select">
                  <option value="">选择信号类型</option>
                  <option value="engine">维度穿梭</option>
                  <option value="matrix">能量矩阵</option>
                  <option value="reality">现实映射</option>
                  <option value="portal">传送门</option>
                </select>
                <textarea placeholder="您的维度探索需求 *" class="form-textarea"></textarea>
                <button type="submit" class="form-submit">
                  <span class="submit-icon">🚀</span>
                  启动传送
                </button>
              </form>
            </div>
          </div>
          <div class="warp-portal">
            <div class="portal-ring ring-1"></div>
            <div class="portal-ring ring-2"></div>
            <div class="portal-ring ring-3"></div>
            <div class="portal-core"></div>
            <button class="portal-button" @click="jumpToFirstDimension">传送至第一维度</button>
          </div>
        </div>
      </section>
    </div>

    <!-- 维度指示器 -->
    <div class="dimension-indicator">
      <div class="indicator-dots">
        <div :class="['dot', { active: currentDimension === 0 }]" @click="jumpToDimension(0)"></div>
        <div :class="['dot', { active: currentDimension === 1 }]" @click="jumpToDimension(1)"></div>
        <div :class="['dot', { active: currentDimension === 2 }]" @click="jumpToDimension(2)"></div>
        <div :class="['dot', { active: currentDimension === 3 }]" @click="jumpToDimension(3)"></div>
        <div :class="['dot', { active: currentDimension === 4 }]" @click="jumpToDimension(4)"></div>
      </div>
      <div class="indicator-label">
        <span class="current-dim">{{ dimensionNames[currentDimension] }}</span>
        <span class="slash">/</span>
        <span class="total-dim">5</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

definePageMeta({
  layout: false
})

// 防抖函数
const createDebouncedFn = (fn: Function, delay: number, id: string) => {
  let timer: any = null
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

// 清理所有动画
const killAllAnimation = ({ keepScrollPosition }: { keepScrollPosition?: boolean } = {}) => {
  const scrollPos = keepScrollPosition ? window.pageYOffset : 0
  gsap.killTweensOf('*')
  ScrollTrigger.getAll().forEach(st => st.kill())
  if (keepScrollPosition && scrollPos) {
    window.scrollTo(0, scrollPos)
  }
}

// 多维时空穿梭动画（全新效果 - 融合无限循环+缩放+横向）
let multiverseScrollTrigger: any = null
let multiverseTweens: any[] = []
let clonedPanelNode: any = null
let onScrollResize: any = null
let onWindowScroll: any = null
let maxScrollValue: number = 0
let warpTimeline: any = null
let particleTweens: any[] = []
let currentDimension = ref(0)
let mainScrollTrigger: any = null

// 维度名称
const dimensionNames = ['维度一', '维度二', '维度三', '维度四', '维度五']

const multiverseAnimation = (className = 'dimensional-panel') => {
  ScrollTrigger.refresh()

  let panels: any[] = []
  let multiverseContainer: any = null

  const cleanup = () => {
    // 移除事件监听器
    if (onScrollResize) {
      window.removeEventListener('resize', onScrollResize)
    }
    if (onWindowScroll) {
      window.removeEventListener('scroll', onWindowScroll, { passive: false } as any)
    }

    // 清理 ScrollTrigger
    multiverseScrollTrigger?.kill?.()
    multiverseScrollTrigger = null

    // 清理所有 tweens
    multiverseTweens.forEach(tween => {
      try {
        if (tween) {
          tween.kill(true)
          if (tween.scrollTrigger) {
            tween.scrollTrigger.kill()
          }
        }
      } catch (e) {
        console.warn('清理 tween 失败:', e)
      }
    })
    multiverseTweens = []

    // 清理粒子 tweens
    particleTweens.forEach(tween => {
      try {
        if (tween) tween.kill(true)
      } catch (e) {
        console.warn('清理粒子 tween 失败:', e)
      }
    })
    particleTweens = []

    // 清理时间轴
    warpTimeline?.kill?.()
    warpTimeline = null

    // 清理主 ScrollTrigger
    mainScrollTrigger?.kill?.()
    mainScrollTrigger = null

    // 移除克隆的节点
    if (clonedPanelNode && clonedPanelNode.parentNode) {
      clonedPanelNode.parentNode.removeChild(clonedPanelNode)
      clonedPanelNode = null
    }

    // 恢复panels样式
    panels.forEach(panel => {
      try {
        panel.style.position = ''
        panel.style.transform = ''
        panel.style.zIndex = ''
        panel.style.width = ''
      } catch (e) {
        console.warn('恢复panel样式失败:', e)
      }
    })

    killAllAnimation({ keepScrollPosition: true })
  }

  nextTick(() => {
    panels = gsap.utils.toArray(`.${className}`) || []
    if (panels.length <= 0) return

    multiverseContainer = document.querySelector('.multiverse-container')
    if (!multiverseContainer) return

    // 暂时不克隆节点，先确保基本滚动功能正常
    // 克隆第一个节点（实现无限循环）
    // clonedPanelNode = panels[0].cloneNode(true)
    // clonedPanelNode.setAttribute('data-cloned', 'true')
    // clonedPanelNode.classList.add('cloned-panel')
    // panels[0].parentNode?.appendChild(clonedPanelNode)

    // 设置容器样式 - 使用 flex 横向排列
    const containerStyle = {
      display: 'flex',
      width: '100%',
      height: '100vh'
    }

    Object.entries(containerStyle).forEach(([key, value]) => {
      multiverseContainer.style[key] = value
    })

    // 设置面板样式 - flex 布局，每个面板宽度 100vw
    panels.forEach((panel, index) => {
      panel.style.cssText = `
        width: 100vw;
        height: 100vh;
        flex-shrink: 0;
        overflow: hidden;
        transform-style: preserve-3d;
      `
    })

    // 创建穿梭时间轴
    warpTimeline = gsap.timeline()

    // 为每个panel创建独特的进入/退出动画
    panels.forEach((panel, index) => {
      const dimension = parseInt(panel.getAttribute('data-dimension') || index.toString())
      // const isClone = panel.classList.contains('cloned-panel')

      // 获取面板内元素
      const title = panel.querySelector('.section-title')
      const content = panel.querySelectorAll(
        '.service-card, .portfolio-item, .advantage-item, .info-item, .stat-item, .data-cube, .data-stream, .hero-content, .about-content, .contact-content'
      )

      // 根据维度创建不同的变换效果
      const transformEffects = [
        // 维度0: 缩放 + 淡入
        {
          from: { scale: 0.1, opacity: 0, rotationZ: 0 },
          to: { scale: 1, opacity: 1, rotationZ: 0 }
        },
        // 维度1: 旋转 + 淡入
        {
          from: { scale: 0.5, opacity: 0, rotationZ: -180 },
          to: { scale: 1, opacity: 1, rotationZ: 0 }
        },
        // 维度2: 翻转 + 缩放
        {
          from: { scale: 0.3, opacity: 0, rotationY: 180 },
          to: { scale: 1, opacity: 1, rotationY: 0 }
        },
        // 维度3: X轴旋转 + 缩放
        {
          from: { scale: 0.2, opacity: 0, rotationX: -90 },
          to: { scale: 1, opacity: 1, rotationX: 0 }
        },
        // 维度4: 组合旋转 + 缩放
        {
          from: { scale: 0.1, opacity: 0, rotationX: 45, rotationY: 45, rotationZ: 45 },
          to: { scale: 1, opacity: 1, rotationX: 0, rotationY: 0, rotationZ: 0 }
        }
      ]

      const effect = transformEffects[dimension % 5]

      // 标题动画
      if (title) {
        gsap.set(title, { ...effect.from, perspective: 2000 })

        const titleTween = gsap.to(title, {
          ...effect.to,
          duration: 1.2,
          ease: 'elastic.out(1, 0.8)',
          scrollTrigger: {
            trigger: panel,
            start: 'right left',
            end: 'left left',
            scrub: 1
          }
        })
        multiverseTweens.push(titleTween)
      }

      // 内容元素动画 - 波浪式进入
      content.forEach((el, i) => {
        const row = Math.floor(i / 3)
        const col = i % 3

        // 不同维度的不同波浪模式
        const waveModes = [
          { x: (col - 1) * 100, y: row * 80, z: -500 },
          { x: 0, y: 0, z: -1000 - (row * 200), rotation: 30 },
          { x: (col - 1) * 150, y: (row - 1) * 100, rotationY: (col - 1) * 45 },
          { x: 0, y: (row - 1) * 100, rotationX: row * 30, z: -800 },
          { x: (col - 1) * 100, y: (row - 1) * 80, rotationZ: (col - 1) * 30, rotationY: 45 }
        ]

        const waveMode = waveModes[dimension % 5]

        gsap.set(el, {
          ...waveMode,
          opacity: 0,
          scale: 0.3
        })

        const contentTween = gsap.to(el, {
          x: 0,
          y: 0,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: panel,
            start: 'right left',
            end: 'center center',
            scrub: 1
          }
        })
        multiverseTweens.push(contentTween)
      })

      // 粒子/装饰元素动画
      const decorations = panel.querySelectorAll(
        '.orbit, .dimension-core, .data-cube, .data-stream, .matrix-effect, .hologram-effect, .warp-effect, .portal-ring, .portal-core'
      )

      decorations.forEach((deco, i) => {
        const particleTween = gsap.to(deco, {
          scale: (i % 2 === 0) ? 1.5 : 0.5,
          opacity: (i % 2 === 0) ? 0.8 : 0.4,
          rotation: 360,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2
        })
        particleTweens.push(particleTween)
      })
    })

    // 创建横向滚动动画 - 使用 flex 布局模式
    const containerMoveTween = gsap.to(multiverseContainer, {
      x: () => -(multiverseContainer.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: multiverseContainer,
        pin: true,
        start: 'top top',
        scrub: 1,
        anticipatePin: 1,
        snap: 1 / (panels.length - 1),
        end: () => '+=' + (multiverseContainer.scrollWidth - window.innerWidth),
        onUpdate: (self) => {
          // 更新当前维度指示器
          const progress = self.progress
          const dimIndex = Math.min(Math.floor(progress * (panels.length - 1)), panels.length - 1)
          currentDimension.value = dimIndex

          // 根据滚动进度调整粒子速度
          const speed = 1 + progress * 4
          particleTweens.forEach(tween => {
            if (tween) tween.timeScale(speed)
          })
        }
      }
    })

    // 保存主 ScrollTrigger 引用
    mainScrollTrigger = containerMoveTween.scrollTrigger
    console.log('mainScrollTrigger initialized:', !!mainScrollTrigger)

    multiverseTweens.push(containerMoveTween)

    // 创建全局 ScrollTrigger 用于整体控制
    const totalWidth = multiverseContainer.scrollWidth - window.innerWidth
    maxScrollValue = totalWidth

    // 防抖的resize处理
    onScrollResize = createDebouncedFn(() => {
      ScrollTrigger.refresh()
    }, 200, 'multiverse-resize')

    // 初始化
    window.addEventListener('resize', onScrollResize)
  })

  return cleanup
}

// 跳转到指定维度
const jumpToDimension = (index: number) => {
  console.log('jumpToDimension called with index:', index, 'mainScrollTrigger:', !!mainScrollTrigger)

  const panels = document.querySelectorAll('.dimensional-panel')
  if (panels[index]) {
    // 直接滚动到目标元素,更可靠
    const targetElement = panels[index] as HTMLElement
    const targetPosition = targetElement.offsetTop

    console.log('Jumping to position:', targetPosition, 'index:', index, 'total panels:', panels.length)

    // 临时允许 body 滚动
    const body = document.body
    const originalOverflow = body.style.overflow
    body.style.overflow = 'auto'

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: targetPosition, autoKill: false },
      ease: 'power2.inOut',
      onComplete: () => {
        // 滚动完成后恢复原始设置
        body.style.overflow = originalOverflow
      }
    })
  }
}

// 跳转到下一维度
const nextDimension = () => {
  const panels = document.querySelectorAll('.dimensional-panel')
  const currentIndex = currentDimension.value
  const nextIndex = (currentIndex + 1) % panels.length

  jumpToDimension(nextIndex)
}

// 跳转到第一维度
const jumpToFirstDimension = () => {
  currentDimension.value = 0
  jumpToDimension(0)
}

onMounted(() => {
  // 启动多维时空穿梭动画（全新效果 - 融合无限循环+缩放+横向）
  const cleanupMultiverse = multiverseAnimation()

  // 导航栏动画
  gsap.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  // 维度指示器动画
  gsap.from('.dimension-indicator', {
    y: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: 'power3.out'
  })

  // 按钮悬停动画
  document.querySelectorAll('.hero-btn, .nav-button, .form-submit, .portal-button').forEach((btn: any) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.08,
        boxShadow: '0 20px 50px rgba(102, 126, 234, 0.5)',
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 卡片悬停效果
  document.querySelectorAll('.matrix-card, .hologram-card, .warp-card').forEach((card: any) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -15,
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out'
      })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    })
  })
})
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overscroll-behavior: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: #000;
  color: #fff;
}

.website-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

// 导航栏
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(30px);
  border-bottom: 1px solid rgba(102, 126, 234, 0.2);
}

.nav-logo {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #f093fb 50%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-link {
  color: #a0aec0;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #f093fb);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #fff;

    &::after {
      width: 100%;
    }
  }
}

.nav-button {
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

// 多维容器
.multiverse-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}

// 通用区块
.section {
  position: relative;
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dimensional-panel {
  perspective: 3000px;
  perspective-origin: 50% 50%;
}

// 维度背景
.dimension-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.bg-1 {
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1a 100%);
}

.bg-2 {
  background: radial-gradient(ellipse at center, #0f3460 0%, #0a0a0f 100%);
}

.bg-3 {
  background: radial-gradient(ellipse at center, #16213e 0%, #0a0a0f 100%);
}

.bg-4 {
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1a 100%);
}

.bg-5 {
  background: radial-gradient(ellipse at center, #0f3460 0%, #0a0a0f 100%);
}

// 通用容器
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
  z-index: 1;
}

// 维度一 - 首页
.hero-section {
  flex-direction: column;
}

.hero-content {
  text-align: center;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.4);
  border-radius: 50px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
}

.badge-icon {
  font-size: 24px;
}

.badge-text {
  font-size: 15px;
  color: #667eea;
  font-weight: 700;
  letter-spacing: 1px;
}

.hero-title {
  font-size: 80px;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #fff 0%, #a0aec0 50%, #667eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -2px;
}

.title-line {
  display: block;
}

.hero-subtitle {
  font-size: 24px;
  color: #a0aec0;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 50px;
}

.hero-stat {
  text-align: center;
}

.hero-stat-number {
  font-size: 48px;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-stat-label {
  font-size: 18px;
  color: #a0aec0;
  margin-top: 5px;
}

.hero-stat-divider {
  width: 2px;
  height: 50px;
  background: linear-gradient(to bottom, transparent, #667eea, transparent);
}

.hero-buttons {
  display: flex;
  gap: 25px;
  justify-content: center;
  margin-bottom: 50px;
}

.hero-btn {
  padding: 18px 45px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.hero-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}

.hero-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-icon {
  margin-right: 8px;
}

.hero-features {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.feature-icon {
  font-size: 22px;
}

.feature-text {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}

// 维度装饰
.dimension-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
}

.orbit-1 {
  width: 400px;
  height: 400px;
}

.orbit-2 {
  width: 600px;
  height: 600px;
}

.orbit-3 {
  width: 800px;
  height: 800px;
}

.dimension-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #667eea 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.5);
  }
}

// 维度二 - 关于
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.about-description {
  font-size: 18px;
  line-height: 1.8;
  color: #a0aec0;
  margin-bottom: 30px;
}

.about-advantages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin-bottom: 50px;
}

.advantage-item {
  padding: 25px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(102, 126, 234, 0.15);
    transform: translateY(-5px);
  }
}

.advantage-icon {
  width: 55px;
  height: 55px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin-bottom: 20px;
}

.adv-emoji {
  font-size: 28px;
}

.advantage-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.advantage-desc {
  font-size: 15px;
  color: #a0aec0;
  line-height: 1.6;
}

.about-stats {
  display: flex;
  gap: 50px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 56px;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 36px;
  font-weight: 900;
  color: #667eea;
}

.stat-name {
  font-size: 16px;
  color: #a0aec0;
  margin-top: 10px;
}

.image-wrapper {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.data-cube {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: cubeRotate 20s linear infinite;
}

@keyframes cubeRotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(102, 126, 234, 0.2);
  border: 2px solid rgba(102, 126, 234, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  backdrop-filter: blur(10px);
}

.cube-face.front {
  transform: translateZ(100px);
}

.cube-face.back {
  transform: rotateY(180deg) translateZ(100px);
}

.cube-face.right {
  transform: rotateY(90deg) translateZ(100px);
}

.cube-face.left {
  transform: rotateY(-90deg) translateZ(100px);
}

.cube-face.top {
  transform: rotateX(90deg) translateZ(100px);
}

.cube-face.bottom {
  transform: rotateX(-90deg) translateZ(100px);
}

.data-stream {
  position: absolute;
  width: 2px;
  height: 300px;
  background: linear-gradient(to bottom, transparent, #667eea, transparent);
}

.stream-1 {
  left: 20%;
  animation: streamMove 3s ease-in-out infinite;
}

.stream-2 {
  left: 50%;
  animation: streamMove 3s ease-in-out infinite 1s;
}

.stream-3 {
  left: 80%;
  animation: streamMove 3s ease-in-out infinite 2s;
}

@keyframes streamMove {
  0%, 100% {
    transform: translateY(-50px);
    opacity: 0.3;
  }
  50% {
    transform: translateY(50px);
    opacity: 1;
  }
}

// 通用标题
.section-title {
  font-size: 56px;
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.section-subtitle {
  font-size: 22px;
  color: #a0aec0;
  margin-bottom: 60px;
}

// 维度三 - 服务
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.service-card {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 24px;
  padding: 45px;
  border: 1px solid rgba(102, 126, 234, 0.3);
  backdrop-filter: blur(20px);
  transition: all 0.4s ease;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }
}

.matrix-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.service-card:hover .matrix-effect {
  opacity: 1;
}

.service-icon {
  width: 85px;
  height: 85px;
  border-radius: 20px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.icon-1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.icon-2 {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.icon-3 {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.service-title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.service-desc {
  font-size: 17px;
  color: #a0aec0;
  line-height: 1.7;
  margin-bottom: 25px;
}

.service-features {
  list-style: none;
  margin-bottom: 25px;
}

.service-features li {
  font-size: 15px;
  color: #a0aec0;
  padding: 10px 0;
  padding-left: 25px;
  position: relative;

  &::before {
    content: "✦";
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
  }
}

.service-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #f093fb;
    transform: translateX(5px);
  }
}

// 维度四 - 案例
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.portfolio-item {
  position: relative;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(145deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.2) 100%);
  border: 1px solid rgba(102, 126, 234, 0.4);
  transition: all 0.4s ease;
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  text-align: center;
  opacity: 0;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.hologram-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(102, 126, 234, 0.03) 2px,
    rgba(102, 126, 234, 0.03) 4px
  );
  pointer-events: none;
  animation: hologramScan 3s linear infinite;
}

@keyframes hologramScan {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}

.portfolio-tag {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 25px;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 25px;
}

.portfolio-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-desc {
  font-size: 17px;
  color: #a0aec0;
  margin-bottom: 30px;
  line-height: 1.7;
}

.portfolio-meta {
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.meta-tag {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  font-size: 14px;
  color: #a0aec0;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.portfolio-btn {
  padding: 14px 35px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 35px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
  }
}

// 维度五 - 联系
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 25px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateX(10px);
  }
}

.warp-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(102, 126, 234, 0.05) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.info-item:hover .warp-effect {
  opacity: 1;
}

.info-icon {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  flex-shrink: 0;
  font-size: 28px;
}

.info-text h4 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.info-text p {
  font-size: 17px;
  color: #a0aec0;
}

.info-sub {
  font-size: 14px;
  color: #718096;
  margin-top: 8px;
  font-family: 'Courier New', monospace;
}

.contact-form {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 28px;
  padding: 55px;
  border: 1px solid rgba(102, 126, 234, 0.3);
  backdrop-filter: blur(20px);
}

.form-header {
  margin-bottom: 35px;
}

.form-header h3 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 12px;
}

.form-header p {
  font-size: 15px;
  color: #a0aec0;
}

.form-input {
  width: 100%;
  padding: 20px 28px;
  margin-bottom: 22px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  color: #fff;
  font-size: 17px;
  outline: none;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: #a0aec0;
}

.form-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

.form-textarea {
  width: 100%;
  padding: 20px 28px;
  margin-bottom: 22px;
  min-height: 160px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  color: #fff;
  font-size: 17px;
  outline: none;
  resize: vertical;
  transition: all 0.3s ease;
}

.form-textarea::placeholder {
  color: #a0aec0;
}

.form-select {
  width: 100%;
  padding: 20px 28px;
  margin-bottom: 22px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  color: #fff;
  font-size: 17px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

.form-select option {
  background: #1a1a2e;
  color: #fff;
}

.submit-icon {
  margin-right: 10px;
}

.form-submit {
  width: 100%;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 14px;
  color: #fff;
  font-size: 19px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.form-submit:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.6);
}

// 传送门
.warp-portal {
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  pointer-events: none;
}

.portal-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid;
  border-radius: 50%;
}

.ring-1 {
  width: 250px;
  height: 250px;
  border-color: rgba(102, 126, 234, 0.5);
  animation: portalPulse 3s ease-in-out infinite;
}

.ring-2 {
  width: 200px;
  height: 200px;
  border-color: rgba(240, 147, 251, 0.5);
  animation: portalPulse 3s ease-in-out infinite 1s;
}

.ring-3 {
  width: 150px;
  height: 150px;
  border-color: rgba(245, 87, 108, 0.5);
  animation: portalPulse 3s ease-in-out infinite 2s;
}

@keyframes portalPulse {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

.portal-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, #667eea 0%, #f093fb 50%, transparent 70%);
  border-radius: 50%;
  animation: portalRotate 10s linear infinite;
}

@keyframes portalRotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.portal-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #667eea;
  border-radius: 30px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  pointer-events: auto;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: #667eea;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

// 维度指示器
.dimension-indicator {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px 40px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(20px);
}

.indicator-dots {
  display: flex;
  gap: 12px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    background: #667eea;
    transform: scale(1.3);
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.8);
  }

  &:hover {
    background: rgba(102, 126, 234, 0.6);
  }
}

.indicator-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #a0aec0;
}

.current-dim {
  font-weight: 700;
  color: #fff;
}

.slash {
  opacity: 0.5;
}

.total-dim {
  font-weight: 700;
  color: #667eea;
}

// 响应式
@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }

  .services-grid,
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .image-wrapper {
    height: 350px;
  }

  .hero-title {
    font-size: 60px;
  }

  .section-title {
    font-size: 44px;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 15px 30px;
  }

  .nav-links {
    display: none;
  }

  .hero-title {
    font-size: 44px;
  }

  .section-title {
    font-size: 36px;
  }

  .services-grid,
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .about-stats {
    flex-wrap: wrap;
    justify-content: center;
  }

  .about-advantages {
    grid-template-columns: 1fr;
  }
}
</style>
