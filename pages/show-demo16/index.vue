<template>
  <div class="website-container">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-logo">ZOOOW-AI</div>
      <div class="nav-links">
        <a href="#home" class="nav-link">首页</a>
        <a href="#about" class="nav-link">3D动画特效</a>
        <a href="#services" class="nav-link">Echarts特效</a>
        <a href="#portfolio" class="nav-link">3D云展厅</a>
        <a href="#contact" class="nav-link">联系我们</a>
      </div>
      <button class="nav-button">立即咨询</button>
    </nav>

    <!-- 首屏 Hero Section -->
    <section id="home" class="section hero-section vertical">
      <div class="hero-bg"></div>
      <div class="hero-particles">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
        <div class="particle particle-5"></div>
        <div class="particle particle-6"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-icon">✨</span>
          <span class="badge-text">AI驱动的智能体验</span>
        </div>
        <h1 class="hero-title">
          <span class="title-line">ZOOOW-AI</span>
          <span class="title-line">重塑数字未来</span>
        </h1>
        <p class="hero-subtitle">
          集成AI智能网站、3D动画特效、Echarts可视化、3D云展厅<br/>
          基于GSAP打造流畅动画体验，让您的网站与众不同
        </p>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-number">43+</span>
            <span class="hero-stat-label">动画模板</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-number">3.14</span>
            <span class="hero-stat-label">GSAP引擎</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-number">100%</span>
            <span class="hero-stat-label">流畅体验</span>
          </div>
        </div>
        <div class="hero-buttons">
          <button class="hero-btn primary">开始探索</button>
          <button class="hero-btn secondary">
            <span class="btn-icon">▶</span>
            观看演示
          </button>
        </div>
        <div class="hero-features">
          <div class="feature-item">
            <span class="feature-icon">🤖</span>
            <span class="feature-text">AI智能</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🎬</span>
            <span class="feature-text">3D动画</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">📊</span>
            <span class="feature-text">数据可视化</span>
          </div>
        </div>
      </div>
      <div class="hero-decoration">
        <div class="deco-circle circle-1"></div>
        <div class="deco-circle circle-2"></div>
        <div class="deco-circle circle-3"></div>
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
      </div>
    </section>

    <!-- 3D动画特效 -->
    <section id="about" class="section about-section vertical">
      <div class="container">
        <h2 class="section-title">3D动画特效</h2>
        <p class="section-subtitle">基于GSAP 3.14.2打造震撼视觉体验</p>
        <div class="about-content">
          <div class="about-text">
            <p class="about-description">
              ZOOOW-AI 提供业界领先的3D动画解决方案，基于 GSAP 3.14.2 强大的动画引擎，
              为您打造令人惊叹的视觉体验。从基础过渡到复杂的粒子系统，应有尽有。
            </p>
            <p class="about-description">
              我们的动画库包含 43 种精心设计的动画模板，涵盖横向滚动、3D翻转、粒子波浪、
              虫洞穿越、液体流动、矩阵代码雨等特效，满足各种场景需求。
            </p>
            <div class="about-advantages">
              <div class="advantage-item">
                <div class="advantage-icon">
                  <span class="adv-emoji">🔄</span>
                </div>
                <h4 class="advantage-title">基础模板 V1-V3</h4>
                <p class="advantage-desc">横向、横竖、无限循环、缩放</p>
              </div>
              <div class="advantage-item">
                <div class="advantage-icon">
                  <span class="adv-emoji">🎬</span>
                </div>
                <h4 class="advantage-title">专业级 V4-V11</h4>
                <p class="advantage-desc">3D翻转、粒子波浪、虫洞、玻璃破碎</p>
              </div>
              <div class="advantage-item">
                <div class="advantage-icon">
                  <span class="adv-emoji">🌌</span>
                </div>
                <h4 class="advantage-title">高级 V12-V19</h4>
                <p class="advantage-desc">纸张折叠、莫比乌斯环、极光流淌</p>
              </div>
              <div class="advantage-item">
                <div class="advantage-icon">
                  <span class="adv-emoji">⭐</span>
                </div>
                <h4 class="advantage-title">精英级 V20-V27</h4>
                <p class="advantage-desc">液体张力、电磁波动、矩阵代码雨</p>
              </div>
            </div>
            <div class="about-stats">
              <div class="stat-item">
                <span class="stat-number" data-target="43">0</span>
                <p class="stat-name">动画模板</p>
              </div>
              <div class="stat-item">
                <span class="stat-number" data-target="3">0</span>
                <span class="stat-label">.14</span>
                <p class="stat-name">GSAP版本</p>
              </div>
              <div class="stat-item">
                <span class="stat-number" data-target="60">0</span>
                <span class="stat-label">fps</span>
                <p class="stat-name">流畅帧率</p>
              </div>
              <div class="stat-item">
                <span class="stat-number" data-target="100">0</span>
                <span class="stat-label">%</span>
                <p class="stat-name">兼容性</p>
              </div>
            </div>
          </div>
          <div class="about-image">
            <div class="image-wrapper">
              <div class="image-box box-1">
                <div class="box-content">
                  <span class="box-icon">🚀</span>
                  <h4 class="box-title">星际传送门</h4>
                  <p class="box-desc">V28-V31 传奇级</p>
                </div>
              </div>
              <div class="image-box box-2">
                <div class="box-content">
                  <span class="box-icon">🌊</span>
                  <h4 class="box-title">液体流动</h4>
                  <p class="box-desc">V20-V23 精英级</p>
                </div>
              </div>
              <div class="image-box box-3">
                <div class="box-content">
                  <span class="box-icon">🔮</span>
                  <h4 class="box-title">矩阵代码雨</h4>
                  <p class="box-desc">V20-V27 赛博朋克</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Echarts特效 - 水平滚动区域 -->
    <div id="services" class="vertical-wrap panels-container">
      <div class="panel services-panel">
        <section id="services-1" class="section services-section">
          <div class="container">
            <h2 class="section-title">Echarts特效 (1/3)</h2>
            <p class="section-subtitle">数据可视化的艺术表达</p>
            <div class="services-grid">
              <div class="service-card">
                <div class="service-icon icon-1">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M12 20V10M18 20V4M6 20v-7M12 4l4 4M12 4L8 8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 class="service-title">动态柱状图</h3>
                <p class="service-desc">
                  流畅的数据增长动画，支持渐变填充、多组对比、动态更新。
                </p>
                <ul class="service-features">
                  <li>平滑动画过渡</li>
                  <li>渐变色彩填充</li>
                  <li>多维度数据对比</li>
                  <li>实时数据更新</li>
                </ul>
                <a href="#" class="service-link">了解更多 →</a>
              </div>
              <div class="service-card">
                <div class="service-icon icon-2">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2v20M2 12h20" stroke-linecap="round"/>
                  </svg>
                </div>
                <h3 class="service-title">交互式饼图</h3>
                <p class="service-desc">
                  优雅的数据占比展示，支持扇区展开、标签引导、图例切换。
                </p>
                <ul class="service-features">
                  <li>扇区展开动画</li>
                  <li>引导线智能布局</li>
                  <li>图例交互切换</li>
                  <li>玫瑰图/南丁格尔图</li>
                </ul>
                <a href="#" class="service-link">了解更多 →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="panel services-panel">
        <section id="services-2" class="section services-section">
          <div class="container">
            <h2 class="section-title">Echarts特效 (2/3)</h2>
            <p class="section-subtitle">20+图表类型，满足各种数据展示需求</p>
            <div class="services-grid">
              <div class="service-card">
                <div class="service-icon icon-3">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M3 3v18h18" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 12l5 5-5-5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 class="service-title">曲线趋势图</h3>
                <p class="service-desc">
                  平滑的数据走向，支持面积图、堆叠、标记点交互。
                </p>
                <ul class="service-features">
                  <li>贝塞尔曲线平滑</li>
                  <li>多Y轴支持</li>
                  <li>区域渐变填充</li>
                  <li>缩放漫游交互</li>
                </ul>
                <a href="#" class="service-link">了解更多 →</a>
              </div>
              <div class="service-card">
                <div class="service-icon icon-4">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 class="service-title">雷达分析图</h3>
                <p class="service-desc">
                  多维数据对比分析，支持多雷达图、指标对比、填充样式。
                </p>
                <ul class="service-features">
                  <li>多维度数据展示</li>
                  <li>指标实时对比</li>
                  <li>填充样式自定义</li>
                  <li>区域层级展示</li>
                </ul>
                <a href="#" class="service-link">了解更多 →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="panel services-panel">
        <section id="services-3" class="section services-section">
          <div class="container">
            <h2 class="section-title">Echarts特效 (3/3)</h2>
            <p class="section-subtitle">高性能渲染，百万级数据流畅展示</p>
            <div class="services-grid">
              <div class="service-card">
                <div class="service-icon icon-5">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9" stroke-linecap="round"/>
                  </svg>
                </div>
                <h3 class="service-title">3D图表</h3>
                <p class="service-desc">
                  沉浸式3D数据可视化，支持旋转、缩放、平移交互。
                </p>
                <ul class="service-features">
                  <li>3D柱状/饼图/散点</li>
                  <li>360°旋转查看</li>
                  <li>实时3D渲染</li>
                  <li>透视投影效果</li>
                </ul>
                <a href="#" class="service-link">了解更多 →</a>
              </div>
              <div class="service-card">
                <div class="service-icon icon-6">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"/>
                    <path d="M12 12v4M12 16h4M8 16h4" stroke-linecap="round"/>
                  </svg>
                </div>
                <h3 class="service-title">主题定制</h3>
                <p class="service-desc">
                  10+精美主题，支持自定义配色、深色模式、暗黑主题。
                </p>
                <ul class="service-features">
                  <li>内置10+主题</li>
                  <li>自定义配色方案</li>
                  <li>深色/暗黑模式</li>
                  <li>品牌色一键适配</li>
                </ul>
                <a href="#" class="service-link">了解更多 →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- 3D云展厅 -->
    <section id="portfolio" class="section portfolio-section vertical">
      <div class="container">
        <h2 class="section-title">3D云展厅</h2>
        <p class="section-subtitle">沉浸式线上展览体验，突破时空限制</p>
        <div class="portfolio-grid">
          <div class="portfolio-item item-1">
            <div class="portfolio-content">
              <div class="portfolio-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                  <path d="M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"/>
                  <circle cx="12" cy="13" r="3"/>
                  <path d="M12 16v3" stroke-linecap="round"/>
                </svg>
              </div>
              <h3 class="portfolio-title">360°产品展示</h3>
              <p class="portfolio-desc">
                产品全方位立体展示，支持旋转、缩放、细节查看。
                用户可自由探索产品每个角度，真实还原线下体验。
              </p>
              <div class="portfolio-features">
                <span class="feature-tag">自由旋转</span>
                <span class="feature-tag">缩放查看</span>
                <span class="feature-tag">细节展示</span>
              </div>
            </div>
          </div>
          <div class="portfolio-item item-2">
            <div class="portfolio-content">
              <div class="portfolio-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                  <path d="M15 3h6v6h-6M9 21h6M12 16l-2 4M12 16l2 4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 3a9 9 0 00-9 9v3.6" stroke-linecap="round"/>
                </svg>
              </div>
              <h3 class="portfolio-title">虚拟漫游体验</h3>
              <p class="portfolio-desc">
                沉浸式虚拟漫游，用户如临现场般自由探索展厅。
                支持点击热点、语音导览、自动巡游模式。
              </p>
              <div class="portfolio-features">
                <span class="feature-tag">自由漫游</span>
                <span class="feature-tag">语音导览</span>
                <span class="feature-tag">热点交互</span>
              </div>
            </div>
          </div>
          <div class="portfolio-item item-3">
            <div class="portfolio-content">
              <div class="portfolio-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                  <path d="M2 12h20M12 2a10 10 0 00-10 10v2a10 10 0 0010 10v-8" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 16v4" stroke-linecap="round"/>
                </svg>
              </div>
              <h3 class="portfolio-title">云端快速部署</h3>
              <p class="portfolio-desc">
                轻量化云端部署，秒级加载无需下载。
                支持CDN加速、多地区部署、实时更新。
              </p>
              <div class="portfolio-features">
                <span class="feature-tag">秒级加载</span>
                <span class="feature-tag">CDN加速</span>
                <span class="feature-tag">实时更新</span>
              </div>
            </div>
          </div>
          <div class="portfolio-item item-4">
            <div class="portfolio-content">
              <div class="portfolio-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 00-2-2H9a2 2 0 00-2-2m10 0v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 13l-3 3" stroke-linecap="round"/>
                  <circle cx="14" cy="13" r="1.5"/>
                </svg>
              </div>
              <h3 class="portfolio-title">数据分析统计</h3>
              <p class="portfolio-desc">
                用户行为追踪分析，热力图展示用户关注点。
                支持访问统计、停留时长、交互次数分析。
              </p>
              <div class="portfolio-features">
                <span class="feature-tag">热力分析</span>
                <span class="feature-tag">行为追踪</span>
                <span class="feature-tag">数据报表</span>
              </div>
            </div>
          </div>
          <div class="portfolio-item item-5">
            <div class="portfolio-content">
              <div class="portfolio-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                  <path d="M12 22s8-4 8-10V8c0-5.523-4.477-10-10-10S6.477 2 12 2s10 4.477 10 10v4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 14h8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 16v4" stroke-linecap="round"/>
                </svg>
              </div>
              <h3 class="portfolio-title">品牌个性定制</h3>
              <p class="portfolio-desc">
                完全定制化设计，打造专属线上展厅。
                支持品牌色、Logo植入、专属UI风格。
              </p>
              <div class="portfolio-features">
                <span class="feature-tag">品牌定制</span>
                <span class="feature-tag">专属UI</span>
                <span class="feature-tag">Logo植入</span>
              </div>
            </div>
          </div>
          <div class="portfolio-item item-6">
            <div class="portfolio-content">
              <div class="portfolio-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9l3 3m-3-3l3 3m6-6l-3 3m0 0l-3-3m6 0l3-3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="portfolio-title">多端完美适配</h3>
              <p class="portfolio-desc">
                支持PC、平板、手机多端访问，
                自动适配各种屏幕尺寸，流畅体验。
              </p>
              <div class="portfolio-features">
                <span class="feature-tag">PC端</span>
                <span class="feature-tag">平板端</span>
                <span class="feature-tag">手机端</span>
              </div>
            </div>
          </div>
        </div>
        <div class="showcase-types">
          <h3 class="types-title">适用场景</h3>
          <div class="types-grid">
            <div class="type-card">
              <span class="type-emoji">🏢</span>
              <h4>企业展厅</h4>
              <p>展示企业实力与产品</p>
            </div>
            <div class="type-card">
              <span class="type-emoji">🎨</span>
              <h4>艺术展览</h4>
              <p>线上艺术作品展</p>
            </div>
            <div class="type-card">
              <span class="type-emoji">🏠</span>
              <h4>房产看房</h4>
              <p>VR样板间体验</p>
            </div>
            <div class="type-card">
              <span class="type-emoji">🚗</span>
              <h4>汽车展厅</h4>
              <p>3D车型展示</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="section contact-section vertical">
      <div class="container">
        <h2 class="section-title">联系我们</h2>
        <p class="section-subtitle">期待与您的合作，共创美好未来</p>
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon icon-location">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s9-6 9-13 9c0 1.284-.251-2.507-.707-3.707C19.496 2.284 17.285 2 14.914 2 10c0-3.866 2.5-7 5.714-7s4.286 5-7 5.714c-2.786 0-5.628 1.214-7.071 3.293L7 19l1.071 2.929c1.571 2.143 4.286 2.857 7.071 2.857s5.5.714 7.071-2.857c1.643-.714 2.857-2 3.571-2 5.857s-.357 4.214-2 5.857-3.571c-1.643-.714-3.571-2.857-3.571-5.857 0-3.429 2-6.714 5.714-6.714 5.857-3.571 2-5.857 3.571-2.857 7.071-2.857 5.5.714 7.071 2.857s4.286.714 7.071 3.293L19 5l-4.071 4.929C12.284 7.214 9.643 8.571 8.571 6.143c0-2.286 2-4.5 5.714-4.5s5.714 2 5.714 4.5c0 2.857-1.429 5.357-4.143 5.357-2.857 2-5.857 2-6.143 0-1.286.214-2.429.707-3.429.929-2.571 2.571-4.286 2.857-7.071.707-2.571 2-4.286 2.857z"/>
                </svg>
              </div>
              <div class="info-text">
                <h4>公司地址</h4>
                <p>北京市朝阳区科技园创新大厦A座12层</p>
                <p class="info-sub">邮编：100020</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon icon-phone">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 00-2-2H4a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H4a2 2 0 00-2 2v3"/>
                  <path d="M15 7a2 2 0 012-2h4a2 2 0 012 2v3H7a2 2 0 01-2-2V9a2 2 0 012-2h4a2 2 0 012 2v3" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="info-text">
                <h4>联系电话</h4>
                <p>400-888-8888（全国免费热线）</p>
                <p class="info-sub">010-88886666（北京总部）</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon icon-email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="info-text">
                <h4>电子邮箱</h4>
                <p>contact@zooow-ai.com</p>
                <p class="info-sub">business@zooow-ai.com</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon icon-time">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="info-text">
                <h4>工作时间</h4>
                <p>周一至周五 9:00 - 18:00</p>
                <p class="info-sub">周末及法定节假日休息</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <div class="form-header">
              <h3>在线留言</h3>
              <p>填写下方表单，我们将在24小时内与您联系</p>
            </div>
            <form>
              <input type="text" placeholder="您的姓名 *" class="form-input" />
              <input type="email" placeholder="您的邮箱 *" class="form-input" />
              <input type="text" placeholder="联系电话" class="form-input" />
              <input type="text" placeholder="公司名称" class="form-input" />
              <select class="form-select">
                <option value="">请选择咨询类型</option>
                <option value="web">AI网站建设</option>
                <option value="animation">3D动画特效</option>
                <option value="echarts">Echarts特效</option>
                <option value="showroom">3D云展厅</option>
                <option value="other">其他</option>
              </select>
              <textarea placeholder="请描述您的需求或问题 *" class="form-textarea"></textarea>
              <button type="submit" class="form-submit">
                <span class="submit-icon">📨</span>
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
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

// 参考的垂直滚动动画模式
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

// 单页无限滚动
let pageScrollTriggerInstance: any = null
let scrollPanelTriggers: any[] = []
let clonedPanelNode: any = null
let onScrollResize: any = null
let onWindowScroll: any = null
let maxScrollValue: number = 0

const infinitePanelScrollAnimation = (className = 'vertical') => {
  ScrollTrigger.refresh()

  let panels: any[] = []

  const cleanup = () => {
    // 移除事件监听器
    if (onScrollResize) {
      window.removeEventListener('resize', onScrollResize)
    }
    if (onWindowScroll) {
      window.removeEventListener('scroll', onWindowScroll, { passive: false } as any)
    }

    // 清理页面级ScrollTrigger
    pageScrollTriggerInstance?.kill?.()
    pageScrollTriggerInstance = null

    // 清理所有panel的ScrollTrigger
    scrollPanelTriggers.forEach(st => {
      try {
        st?.kill?.()
      } catch (e) {
        console.warn('清理panel ScrollTrigger失败:', e)
      }
    })
    scrollPanelTriggers = []

    // 移除克隆的节点
    if (clonedPanelNode && clonedPanelNode.parentNode) {
      clonedPanelNode.parentNode.removeChild(clonedPanelNode)
      clonedPanelNode = null
    }

    // 恢复panels的pin样式
    panels.forEach(panel => {
      try {
        panel.style.position = ''
        panel.style.transform = ''
        panel.style.zIndex = ''
      } catch (e) {
        console.warn('恢复panel样式失败:', e)
      }
    })

    killAllAnimation({ keepScrollPosition: true })
  }

  nextTick(() => {
    panels = gsap.utils.toArray(`.${className}`) || []
    if (panels.length <= 0) return

    // 过滤掉 vertical-wrap 中的 panel
    panels = panels.filter(panel => {
      const parent = panel.parentElement
      return !parent || !parent.classList.contains('vertical-wrap')
    })

    if (panels.length <= 0) return

    // 克隆第一个节点（用于无限滚动效果）
    clonedPanelNode = panels[0].cloneNode(true)
    clonedPanelNode.setAttribute('data-cloned', 'true')
    panels[0].parentNode?.appendChild(clonedPanelNode)

    // 为每个panel创建ScrollTrigger，固定每个面板
    panels.forEach((panel) => {
      const trigger = ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false
      })
      scrollPanelTriggers.push(trigger)
    })

    // 创建页面级别的snap ScrollTrigger
    pageScrollTriggerInstance = ScrollTrigger.create({
      snap(value: number) {
        const snappedValue = gsap.utils.snap(1 / panels.length, value)
        if (snappedValue <= 0) return 1.05 / maxScrollValue
        if (snappedValue >= 1) return maxScrollValue / (maxScrollValue + 1.05)
        return snappedValue
      }
    })

    // 防抖的resize处理
    onScrollResize = createDebouncedFn(() => {
      maxScrollValue = (ScrollTrigger as any).maxScroll(window) - 1
    }, 100, 'infinite-resize')

    // 滚动事件处理 - 实现无限循环
    onWindowScroll = (e: Event) => {
      const scroll = pageScrollTriggerInstance.scroll()
      if (scroll > maxScrollValue) {
        pageScrollTriggerInstance.scroll(1)
        e.preventDefault()
      } else if (scroll < 1) {
        pageScrollTriggerInstance.scroll(maxScrollValue - 1)
        e.preventDefault()
      }
    }

    // 初始化
    onScrollResize()
    window.addEventListener('resize', onScrollResize)
    window.addEventListener('scroll', onWindowScroll, { passive: false } as any)
  })

  return cleanup
}

onMounted(() => {
  // 初始化粒子样式（解决SSR水合问题）
  const initParticles = () => {
    const particles = document.querySelectorAll('.particle')
    particles.forEach((particle) => {
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
  }

  initParticles()

  // 暂时禁用无限滚动，避免与水平滚动冲突
  // const cleanupInfiniteScroll = infinitePanelScrollAnimation()

  // 服务项目水平滚动
  nextTick(() => {
    ScrollTrigger.refresh()

    const container = document.querySelector('.vertical-wrap.panels-container')
    if (!container) return

    const panels = container.querySelectorAll('.panel')
    if (!panels.length) return

    console.log('水平滚动初始化:', {
      panelsCount: panels.length,
      containerWidth: container.offsetWidth,
      windowWidth: window.innerWidth,
      scrollDistance: container.offsetWidth - window.innerWidth,
      targetXPercent: -100 * (panels.length - 1)
    })

    const tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: 'top top',
        scrub: 1,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 }
        },
        end: () => '+=' + (container.offsetWidth - window.innerWidth)
      }
    })
  })

  // 导航栏动画
  gsap.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  // Hero 区域动画 - 使用垂直滚动动画
  verticalAnimation('.hero-bg', {
    scale: 1.2,
    opacity: 0,
    duration: 1.5,
    toKey: 'from'
  })

  verticalAnimation('.hero-badge', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    toKey: 'from'
  })

  verticalAnimation('.title-line', {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    toKey: 'from'
  })

  verticalAnimation('.hero-subtitle', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  verticalAnimation('.hero-stat', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  verticalAnimation('.hero-stat-divider', {
    scaleY: 0,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    toKey: 'from'
  })

  verticalAnimation('.hero-btn', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    toKey: 'from'
  })

  verticalAnimation('.feature-item', {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    toKey: 'from'
  })

  // 装饰圆形动画
  verticalAnimation('.deco-circle', {
    scale: 0,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    toKey: 'from'
  })

  // 浮动形状动画
  verticalAnimation('.floating-shape', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    toKey: 'from'
  })

  // 装饰圆形持续动画
  gsap.to('.circle-1', {
    rotate: 360,
    duration: 20,
    repeat: -1,
    ease: 'none'
  })
  gsap.to('.circle-2', {
    rotate: -360,
    duration: 25,
    repeat: -1,
    ease: 'none'
  })
  gsap.to('.circle-3', {
    y: -30,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  // 浮动形状持续动画
  gsap.to('.shape-1', {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })
  gsap.to('.shape-2', {
    y: -15,
    rotate: 180,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })
  gsap.to('.shape-3', {
    y: -25,
    rotate: 360,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  // 关于我们 - 使用垂直滚动动画
  verticalAnimation('.about-text', {
    x: -100,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  verticalAnimation('.about-image', {
    x: 100,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  // 优势项动画
  verticalAnimation('.advantage-item', {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 统计数字动画
  verticalAnimation('.stat-item', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    toKey: 'from'
  })

  // 图片盒子动画
  verticalAnimation('.image-box', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    toKey: 'from'
  })

  // 数字增长动画
  const statNumbers = document.querySelectorAll('.stat-number')
  statNumbers.forEach((stat) => {
    const target = parseInt(stat.getAttribute('data-target') || '0')
    gsap.to(stat, {
      scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 85%'
      },
      innerText: target,
      duration: 2,
      ease: 'power2.out',
      snap: { innerText: 1 },
      onUpdate: function() {
        this.targets()[0].innerHTML = Math.ceil(this.targets()[0].innerText)
      }
    })
  })

  // 服务卡片 - 使用垂直滚动动画
  verticalAnimation('.service-card', {
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    toKey: 'from'
  })

  // 案例项目 - 使用垂直滚动动画
  verticalAnimation('.portfolio-item', {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    toKey: 'from'
  })

  // 案例图标动画
  verticalAnimation('.portfolio-icon', {
    scale: 0,
    rotation: -180,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    toKey: 'from'
  })

  // 案例标题动画
  verticalAnimation('.portfolio-title', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    toKey: 'from'
  })

  // 案例描述动画
  verticalAnimation('.portfolio-desc', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    toKey: 'from'
  })

  // 案例特性标签动画
  verticalAnimation('.feature-tag', {
    y: 15,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    toKey: 'from'
  })

  // 场景类型动画
  verticalAnimation('.showcase-types', {
    y: 60,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  verticalAnimation('.type-card', {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 案例项目悬停效果
  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        scale: 1.05,
        boxShadow: '0 30px 60px rgba(102, 126, 234, 0.4)',
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(item.querySelector('.portfolio-icon'), {
        scale: 1.2,
        rotate: 10,
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
    })
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        scale: 1,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(item.querySelector('.portfolio-icon'), {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 场景卡片悬停
  document.querySelectorAll('.type-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -15,
        scale: 1.05,
        boxShadow: '0 30px 60px rgba(102, 126, 234, 0.4)',
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 联系信息 - 使用垂直滚动动画
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

  // 联系信息项动画
  verticalAnimation('.info-item', {
    x: -50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    toKey: 'from'
  })

  // 表单输入框动画
  verticalAnimation('.form-header', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    toKey: 'from'
  })

  verticalAnimation('.form-input, .form-select, .form-textarea, .form-submit', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 地图占位符动画
  verticalAnimation('.map-placeholder', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  // 服务卡片悬停效果
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(card.querySelector('.service-icon'), {
        scale: 1.2,
        rotate: 5,
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(card.querySelector('.service-icon'), {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 服务图标持续动画
  gsap.to('.service-icon', {
    scale: 1.1,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    stagger: {
      each: 0.2,
      from: 'random'
    }
  })

  // 表单输入框焦点动画
  document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
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
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // 平滑滚动到指定section
  const scrollToSection = (index: number) => {
    const hrefMap = ['#home', '#about', '#services', '#portfolio', '#contact']
    const href = hrefMap[index]

    if (!href) return

    // 使用更精确的计算方式
    let targetPosition = 0

    if (href === '#home') {
      targetPosition = 0
    } else if (href === '#about') {
      targetPosition = window.innerHeight
    } else if (href === '#services') {
      // 服务容器开始位置 - 始终使用计算值，因为pin后offsetTop不准确
      targetPosition = 2 * window.innerHeight
    } else if (href === '#portfolio') {
      const portfolioSection = document.querySelector('#portfolio') as HTMLElement
      if (portfolioSection && portfolioSection.offsetTop > 0) {
        // 使用实际的 offsetTop
        targetPosition = portfolioSection.offsetTop
      } else {
        // 回退到计算值：首页1 + 关于1 + 服务3 = 5
        targetPosition = 5 * window.innerHeight
      }
    } else if (href === '#contact') {
      const contactSection = document.querySelector('#contact') as HTMLElement
      if (contactSection && contactSection.offsetTop > 0) {
        targetPosition = contactSection.offsetTop
      } else {
        // 回退到计算值：首页1 + 关于1 + 服务3 + 案例1 = 6
        targetPosition = 6 * window.innerHeight
      }
    }

    console.log('Scrolling to:', {
      href,
      targetPosition,
      viewportIndex: Math.round(targetPosition / window.innerHeight),
      windowInnerHeight: window.innerHeight
    })

    const body = document.body
    const originalOverflow = body.style.overflow
    body.style.overflow = 'auto'

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: targetPosition, autoKill: false, offsetY: 0 },
      ease: 'power3.inOut',
      onComplete: () => {
        body.style.overflow = originalOverflow
      }
    })
  }

  // 导航链接点击跳转
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()
      const href = this.getAttribute('href')
      const panels = gsap.utils.toArray('.vertical')

      let targetIndex = 0
      if (href === '#home') targetIndex = 0
      else if (href === '#about') targetIndex = 1
      else if (href === '#services') targetIndex = 2
      else if (href === '#portfolio') targetIndex = 3
      else if (href === '#contact') targetIndex = 4

      scrollToSection(targetIndex)
    })
  })

  // 导航链接悬停动画
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        color: '#667eea',
        y: -2,
        duration: 0.2,
        ease: 'power2.out'
      })
    })
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        color: '#fff',
        y: 0,
        duration: 0.2,
        ease: 'power2.out'
      })
    })
  })

  // 按钮悬停动画
  document.querySelectorAll('.hero-btn, .nav-button, .form-submit').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)',
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
  background: #0a0a0f;
  color: #fff;
  overflow: hidden;
  overflow-x: hidden;
}

.website-container {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.website-container::-webkit-scrollbar {
  display: none;
}

// 粒子动画
.hero-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.6);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) translateX(10px);
    opacity: 1;
  }
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
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-logo {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
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

// 通用容器
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

// 通用区块
.section {
  min-height: 100vh;
  padding: 100px 0;
  position: relative;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 20px;
  color: #a0aec0;
  margin-bottom: 60px;
}

// 首屏 Hero
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
  z-index: -1;
}

.hero-content {
  text-align: center;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 25px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50px;
  margin-bottom: 30px;
}

.badge-icon {
  font-size: 20px;
}

.badge-text {
  font-size: 14px;
  color: #667eea;
  font-weight: 600;
}

.hero-title {
  font-size: 72px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #fff 0%, #a0aec0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-line {
  display: block;
}

.hero-subtitle {
  font-size: 24px;
  color: #a0aec0;
  margin-bottom: 40px;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
}

.hero-stat {
  text-align: center;
}

.hero-stat-number {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-stat-label {
  font-size: 16px;
  color: #a0aec0;
}

.hero-stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.hero-btn {
  padding: 16px 40px;
  border: none;
  border-radius: 40px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.hero-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.hero-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
}

.circle-1 {
  width: 400px;
  height: 400px;
  right: -100px;
  top: 100px;
  background: conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #667eea);
  border: 2px solid rgba(102, 126, 234, 0.3);
}

.circle-2 {
  width: 300px;
  height: 300px;
  left: -80px;
  bottom: 150px;
  background: conic-gradient(from 90deg, #f093fb, #667eea, #764ba2, #f093fb);
  border: 2px solid rgba(240, 147, 251, 0.3);
}

.circle-3 {
  width: 150px;
  height: 150px;
  right: 200px;
  bottom: 100px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.2) 100%);
}

.circle-4 {
  width: 100px;
  height: 100px;
  left: 300px;
  top: 200px;
  background: radial-gradient(circle, rgba(240, 147, 251, 0.3) 0%, rgba(102, 126, 234, 0.1) 100%);
}

.floating-shape {
  position: absolute;
  opacity: 0.1;
}

.shape-1 {
  width: 60px;
  height: 60px;
  right: 400px;
  top: 300px;
  background: #667eea;
  border-radius: 50%;
}

.shape-2 {
  width: 40px;
  height: 40px;
  left: 400px;
  bottom: 300px;
  background: #f093fb;
  border-radius: 10px;
}

.shape-3 {
  width: 80px;
  height: 80px;
  right: 600px;
  bottom: 200px;
  background: #764ba2;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

.hero-features {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 40px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-icon {
  font-size: 20px;
}

.feature-text {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

// 案例展示内容
.portfolio-content {
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.portfolio-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.2) 100%);
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.4);
}

.portfolio-icon svg {
  width: 100%;
  height: 100%;
}

.portfolio-features {
  display: flex;
  gap: 12px;
  margin-top: 25px;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-tag {
  padding: 8px 20px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.4);
  border-radius: 20px;
  font-size: 14px;
  color: #a0aec0;
}

.showcase-types {
  margin-top: 80px;
  text-align: center;
}

.types-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.type-card {
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.type-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);
}

.type-emoji {
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
}

.type-card h4 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.type-card p {
  font-size: 14px;
  color: #a0aec0;
}

// 关于我们
.about-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #16213e 100%);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
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
  gap: 20px;
  margin-bottom: 40px;
}

.advantage-item {
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.advantage-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
}

.advantage-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin-bottom: 15px;
}

.adv-emoji {
  font-size: 24px;
}

.advantage-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.advantage-desc {
  font-size: 14px;
  color: #a0aec0;
  line-height: 1.6;
}

.about-stats {
  display: flex;
  gap: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-name {
  font-size: 16px;
  color: #a0aec0;
  margin-top: 10px;
}

.image-wrapper {
  position: relative;
  height: 400px;
}

.image-box {
  position: absolute;
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.box-1 {
  width: 300px;
  height: 250px;
  top: 0;
  left: 0;
  background: linear-gradient(145deg, rgba(102, 126, 234, 0.6) 0%, rgba(118, 75, 162, 0.4) 100%);
}

.box-2 {
  width: 320px;
  height: 280px;
  top: 100px;
  left: 180px;
  background: linear-gradient(145deg, rgba(240, 147, 251, 0.5) 0%, rgba(102, 126, 234, 0.3) 100%);
}

.box-3 {
  width: 250px;
  height: 200px;
  top: 250px;
  left: 50px;
  background: linear-gradient(145deg, rgba(118, 75, 162, 0.5) 0%, rgba(240, 147, 251, 0.3) 100%);
}

.box-content {
  text-align: center;
}

.box-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.box-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.box-desc {
  font-size: 14px;
  color: #a0aec0;
  line-height: 1.6;
}

// 服务项目
.vertical-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100vh;
}

.vertical-wrap.panels-container {
  width: 300vw;
}

.panel {
  width: 100vw;
  height: 100vh;
  flex: none;
  display: block;
}

.services-section {
  background: linear-gradient(135deg, #16213e 0%, #1a1a2e 50%, #0f3460 100%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.icon-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.icon-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.icon-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.icon-4 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.icon-5 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
.icon-6 { background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); }

.service-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

.service-desc {
  font-size: 16px;
  color: #a0aec0;
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-features {
  list-style: none;
  margin-bottom: 20px;
}

.service-features li {
  font-size: 14px;
  color: #a0aec0;
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
}

.service-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.service-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.service-link:hover {
  color: #764ba2;
}

// 精选案例
.portfolio-section {
  background: linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.portfolio-item {
  position: relative;
  height: 350px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(145deg, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.3) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 15, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.portfolio-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

.portfolio-desc {
  font-size: 16px;
  color: #a0aec0;
  margin-bottom: 25px;
  line-height: 1.6;
}

.portfolio-tag {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.portfolio-meta {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  flex-wrap: wrap;
  justify-content: center;
}

.meta-tag {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 12px;
  color: #a0aec0;
}

.portfolio-btn {
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.portfolio-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}

// 联系我们
.contact-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #16213e 100%);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(10px);
}

.info-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  flex-shrink: 0;
}

.info-text h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}

.info-text p {
  font-size: 16px;
  color: #a0aec0;
}

.info-sub {
  font-size: 14px;
  color: #718096;
  margin-top: 5px;
}

.contact-form {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-header {
  margin-bottom: 30px;
}

.form-header h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.form-header p {
  font-size: 14px;
  color: #a0aec0;
}

.form-input {
  width: 100%;
  padding: 18px 25px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: #a0aec0;
}

.form-textarea {
  width: 100%;
  padding: 18px 25px;
  margin-bottom: 20px;
  min-height: 150px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  outline: none;
  resize: vertical;
  transition: all 0.3s ease;
}

.form-textarea::placeholder {
  color: #a0aec0;
}

.form-select {
  width: 100%;
  padding: 18px 25px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-select::placeholder {
  color: #a0aec0;
}

.form-select:focus {
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
}

.form-select option {
  background: #1a1a2e;
  color: #fff;
}

.submit-icon {
  margin-right: 8px;
}

.form-submit {
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.form-submit:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}

.contact-map {
  margin-top: 60px;
}

.map-placeholder {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 60px;
  text-align: center;
  transition: all 0.3s ease;
}

.map-placeholder:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
}

.map-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.map-placeholder h4 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.map-placeholder p {
  font-size: 16px;
  color: #a0aec0;
  margin-bottom: 20px;
}

.map-button {
  padding: 14px 32px;
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

.map-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
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
    height: 300px;
  }

  .hero-title {
    font-size: 56px;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 15px 30px;
  }

  .nav-links {
    display: none;
  }

  .section-title {
    font-size: 36px;
  }

  .hero-title {
    font-size: 42px;
  }

  .services-grid,
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .about-stats {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
