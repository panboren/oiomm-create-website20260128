<template>
  <div class="website-container">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-logo">
        <span class="logo-icon">🐾</span>
        <span class="logo-text">PetCare</span>
      </div>
      <div class="nav-links">

        <a href="#home" class="nav-link">首页展示</a>
        <a href="#about" class="nav-link">宠物商城</a>
        <a href="#services" class="nav-link">宠物社区</a>
        <a href="#portfolio" class="nav-link">医疗服务</a>
        <a href="#contact" class="nav-link">个人中心</a>
      </div>
      <button class="nav-button">
        <span class="cart-icon">🛒</span>
        <span class="cart-count">3</span>
      </button>
    </nav>

    <!-- 首屏 Hero Section -->
    <section id="home" class="section hero-section vertical">
      <div class="hero-bg"></div>
      <div class="hero-image">
        <img src="https://qcloud.dpfile.com/pc/EzU5VYnYROKVTHcTtsTZQlJqBZuJzx1T3qiPA3RP6YEZOQ2XLrw0dztc9HVYRLVc.jpg" alt="Pet Care" />
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-icon">💖</span>
          <span class="badge-text">专业宠物服务平台</span>
        </div>
        <h1 class="hero-title">
          <span class="title-line">用爱心守护</span>
          <span class="title-line">毛孩子的每一天</span>
        </h1>
        <p class="hero-subtitle">
          PetCare 是您最值得信赖的宠物生活管家，提供购物、医疗、社区一站式服务<br/>
          让您的爱宠健康快乐成长，享受品质生活
        </p>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-number">10000+</span>
            <span class="hero-stat-label">养宠家庭</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-number">500+</span>
            <span class="hero-stat-label">合作品牌</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-number">99%</span>
            <span class="hero-stat-label">好评率</span>
          </div>
        </div>
        <div class="hero-buttons">
          <button class="hero-btn primary">立即体验</button>
          <button class="hero-btn secondary">
            <span class="btn-icon">▶</span>
            观看视频
          </button>
        </div>
        <div class="hero-features">
          <div class="feature-item">
            <span class="feature-icon">🚚</span>
            <span class="feature-text">极速配送</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">👨‍⚕️</span>
            <span class="feature-text">在线问诊</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">💝</span>
            <span class="feature-text">品质保障</span>
          </div>
        </div>
        <!-- 热门宠物展示 -->
        <div class="hot-pets">
          <h3 class="hot-pets-title">🌟 热门宠物</h3>
          <div class="pet-showcase">
            <div class="pet-showcase-item">
              <div class="pet-showcase-emoji">🐕</div>
              <h4 class="pet-showcase-name">金毛犬</h4>
              <p class="pet-showcase-desc">温顺友好，家庭首选</p>
            </div>
            <div class="pet-showcase-item">
              <div class="pet-showcase-emoji">🐈</div>
              <h4 class="pet-showcase-name">英短蓝猫</h4>
              <p class="pet-showcase-desc">优雅高冷，颜值担当</p>
            </div>
            <div class="pet-showcase-item">
              <div class="pet-showcase-emoji">🐰</div>
              <h4 class="pet-showcase-name">垂耳兔</h4>
              <p class="pet-showcase-desc">呆萌可爱，深受喜爱</p>
            </div>
            <div class="pet-showcase-item">
              <div class="pet-showcase-emoji">🐹</div>
              <h4 class="pet-showcase-name">仓鼠</h4>
              <p class="pet-showcase-desc">小巧玲珑，易于饲养</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-decoration">
        <div class="deco-circle circle-1"></div>
        <div class="deco-circle circle-2"></div>
        <div class="deco-circle circle-3"></div>
        <div class="floating-shape shape-1">🐕</div>
        <div class="floating-shape shape-2">🐈</div>
        <div class="floating-shape shape-3">🐰</div>
      </div>
    </section>

    <!-- 宠物商城 -->
    <section id="about" class="section about-section vertical">
      <div class="container">
        <h2 class="section-title">宠物商城</h2>
        <p class="section-subtitle">精选好物，品质生活</p>

        <div class="about-description">
          PetCare 宠物商城汇聚全球优质宠物用品，从进口食品到高端玩具，从智能设备到舒适用品，
          为您的爱宠提供全方位的生活保障。所有商品经过严格筛选，确保品质安全。
        </div>

        <!-- 商品分类 -->
        <div class="product-categories">
          <h3 class="section-title-sm">📦 商品分类</h3>
          <div class="category-grid">
            <div class="category-item">
              <div class="category-icon">🍖</div>
              <h4 class="category-name">宠物食品</h4>
              <p class="category-desc">主粮、零食、营养品</p>
              <span class="category-count">2568件</span>
              <div class="category-sub">
                <span>狗粮</span><span>猫粮</span><span>零食</span>
              </div>
            </div>
            <div class="category-item">
              <div class="category-icon">🧸</div>
              <h4 class="category-name">玩具娱乐</h4>
              <p class="category-desc">玩具、球类、磨牙棒</p>
              <span class="category-count">1234件</span>
              <div class="category-sub">
                <span>咬胶</span><span>球类</span><span>玩具</span>
              </div>
            </div>
            <div class="category-item">
              <div class="category-icon">🛁</div>
              <h4 class="category-name">洗护用品</h4>
              <p class="category-desc">沐浴露、梳子、吹风机</p>
              <span class="category-count">892件</span>
              <div class="category-sub">
                <span>洗发水</span><span>梳子</span><span>美容</span>
              </div>
            </div>
            <div class="category-item">
              <div class="category-icon">💊</div>
              <h4 class="category-name">医疗保健</h4>
              <p class="category-desc">维生素、驱虫药、护理品</p>
              <span class="category-count">1567件</span>
              <div class="category-sub">
                <span>驱虫</span><span>营养</span><span>保健品</span>
              </div>
            </div>
            <div class="category-item">
              <div class="category-icon">🛏️</div>
              <h4 class="category-name">家居用品</h4>
              <p class="category-desc">窝、垫、笼子、猫爬架</p>
              <span class="category-count">2341件</span>
              <div class="category-sub">
                <span>宠物窝</span><span>笼子</span><span>猫爬架</span>
              </div>
            </div>
            <div class="category-item">
              <div class="category-icon">👗</div>
              <h4 class="category-name">服饰配件</h4>
              <p class="category-desc">衣服、项圈、牵引绳</p>
              <span class="category-count">987件</span>
              <div class="category-sub">
                <span>衣服</span><span>项圈</span><span>牵引绳</span>
              </div>
            </div>
            <div class="category-item">
              <div class="category-icon">🚽</div>
              <h4 class="category-name">清洁卫生</h4>
              <p class="category-desc">猫砂、尿垫、清洁用品</p>
              <span class="category-count">756件</span>
              <div class="category-sub">
                <span>猫砂</span><span>尿垫</span><span>清洁</span>
              </div>
            </div>
            <div class="category-item">
              <div class="category-icon">🚘</div>
              <h4 class="category-name">出行装备</h4>
              <p class="category-desc">航空箱、牵引、宠物车</p>
              <span class="category-count">423件</span>
              <div class="category-sub">
                <span>航空箱</span><span>宠物车</span><span>牵引</span>
              </div>
            </div>
            <div class="category-item">
              <div class="category-icon">🎁</div>
              <h4 class="category-name">宠物礼盒</h4>
              <p class="category-desc">节日礼品、定制套装</p>
              <span class="category-count">312件</span>
              <div class="category-sub">
                <span>节日礼</span><span>套装</span><span>定制</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 热销商品 -->
        <div class="hot-products">
          <h3 class="section-title-sm">🔥 热销商品</h3>
          <div class="products-grid">
            <div class="product-card">
              <div class="product-image">
                <div class="product-emoji">🍖</div>
                <span class="product-tag hot">热销</span>
              </div>
              <h4 class="product-name">进口狗粮 大包装15kg</h4>
              <p class="product-desc">优质原料，营养均衡，进口品质</p>
              <div class="product-price-row">
                <span class="product-price">¥599</span>
                <span class="product-original">¥799</span>
              </div>
              <div class="product-sales">已售 3285件</div>
              <button class="product-btn">加入购物车</button>
            </div>
            <div class="product-card">
              <div class="product-image">
                <div class="product-emoji">🧸</div>
                <span class="product-tag new">新品</span>
              </div>
              <h4 class="product-name">智能发声玩具球</h4>
              <p class="product-desc">自动感应，互动有趣，耐咬耐磨</p>
              <div class="product-price-row">
                <span class="product-price">¥199</span>
                <span class="product-original">¥299</span>
              </div>
              <div class="product-sales">已售 1862件</div>
              <button class="product-btn">加入购物车</button>
            </div>
            <div class="product-card">
              <div class="product-image">
                <div class="product-emoji">🛏️</div>
                <span class="product-tag rec">推荐</span>
              </div>
              <h4 class="product-name">舒适宠物窝 加厚款</h4>
              <p class="product-desc">柔软舒适，四季可用，可拆洗</p>
              <div class="product-price-row">
                <span class="product-price">¥299</span>
                <span class="product-original">¥399</span>
              </div>
              <div class="product-sales">已售 2679件</div>
              <button class="product-btn">加入购物车</button>
            </div>
            <div class="product-card">
              <div class="product-image">
                <div class="product-emoji">💊</div>
                <span class="product-tag sale">特价</span>
              </div>
              <h4 class="product-name">营养补钙片 120片</h4>
              <p class="product-desc">强健骨骼，健康成长，适口性好</p>
              <div class="product-price-row">
                <span class="product-price">¥89</span>
                <span class="product-original">¥129</span>
              </div>
              <div class="product-sales">已售 4521件</div>
              <button class="product-btn">加入购物车</button>
            </div>
            <div class="product-card">
              <div class="product-image">
                <div class="product-emoji">🐈</div>
                <span class="product-tag hot">爆款</span>
              </div>
              <h4 class="product-name">进口猫粮 5.4kg</h4>
              <p class="product-desc">天然配方，美毛护肤，低敏配方</p>
              <div class="product-price-row">
                <span class="product-price">¥499</span>
                <span class="product-original">¥699</span>
              </div>
              <div class="product-sales">已售 5678件</div>
              <button class="product-btn">加入购物车</button>
            </div>
            <div class="product-card">
              <div class="product-image">
                <div class="product-emoji">🛁</div>
                <span class="product-tag new">新品</span>
              </div>
              <h4 class="product-name">宠物沐浴露 500ml</h4>
              <p class="product-desc">温和配方，除螨止痒，留香持久</p>
              <div class="product-price-row">
                <span class="product-price">¥69</span>
                <span class="product-original">¥99</span>
              </div>
              <div class="product-sales">已售 2896件</div>
              <button class="product-btn">加入购物车</button>
            </div>
            <div class="product-card">
              <div class="product-image">
                <div class="product-emoji">🎀</div>
              </div>
              <h4 class="product-name">宠物衣服 可爱款</h4>
              <p class="product-desc">柔软面料，舒适透气，多色可选</p>
              <div class="product-price-row">
                <span class="product-price">¥79</span>
                <span class="product-original">¥129</span>
              </div>
              <div class="product-sales">已售 1234件</div>
              <button class="product-btn">加入购物车</button>
            </div>
            <div class="product-card">
              <div class="product-image">
                <div class="product-emoji">🚽</div>
                <span class="product-tag rec">推荐</span>
              </div>
              <h4 class="product-name">混合猫砂 6L*6袋</h4>
              <p class="product-desc">结团迅速，除臭效果，无尘环保</p>
              <div class="product-price-row">
                <span class="product-price">¥159</span>
                <span class="product-original">¥229</span>
              </div>
              <div class="product-sales">已售 8932件</div>
              <button class="product-btn">加入购物车</button>
            </div>
          </div>
        </div>

        <!-- 商城优势 -->
        <div class="shop-features">
          <div class="shop-feature-item">
            <div class="feature-icon">✅</div>
            <h4>正品保证</h4>
            <p>官方授权，杜绝假货</p>
          </div>
          <div class="shop-feature-item">
            <div class="feature-icon">🚚</div>
            <h4>极速配送</h4>
            <p>次日达，新鲜到家</p>
          </div>
          <div class="shop-feature-item">
            <div class="feature-icon">💰</div>
            <h4>价格实惠</h4>
            <p>会员专享，更多优惠</p>
          </div>
          <div class="shop-feature-item">
            <div class="feature-icon">🔄</div>
            <h4>无忧退换</h4>
            <p>7天无理由退货</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 宠物社区 -->
    <section id="services" class="section services-section vertical">
      <div class="container">
        <h2 class="section-title">宠物社区</h2>
        <p class="section-subtitle">分享快乐，交流经验</p>

        <!-- 社区功能区 -->
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon icon-1">📸</div>
            <h3 class="service-title">用户分享</h3>
            <p class="service-desc">
              晒出你家萌宠的精彩瞬间，与其他养宠人分享快乐时光。支持照片、视频、文字多种分享形式，
              点赞评论互动，让更多人爱上你的爱宠。
            </p>
            <ul class="service-features">
              <li>每日精选推荐</li>
              <li>热门话题讨论</li>
              <li>萌宠PK大赛</li>
              <li>优质内容奖励</li>
            </ul>
            <a href="#" class="service-link">开始分享 →</a>
          </div>
          <div class="service-card">
            <div class="service-icon icon-2">💡</div>
            <h3 class="service-title">经验交流</h3>
            <p class="service-desc">
              专业的养宠知识分享平台，涵盖狗狗、猫咪、兔子、仓鼠等各类宠物的饲养经验、
              训练技巧、健康护理等实用内容，新手养宠必备指南。
            </p>
            <ul class="service-features">
              <li>专业认证作者</li>
              <li>海量知识库</li>
              <li>视频教程</li>
              <li>一对一咨询</li>
            </ul>
            <a href="#" class="service-link">了解更多 →</a>
          </div>
          <div class="service-card">
            <div class="service-icon icon-3">👨‍⚕️</div>
            <h3 class="service-title">专家答疑</h3>
            <p class="service-desc">
              邀请知名宠物医生、训练师入驻，提供专业的在线咨询服务。遇到养宠难题，
              随时提问，专家在线解答，为您的爱宠健康保驾护航。
            </p>
            <ul class="service-features">
              <li>权威专家团队</li>
              <li>快速响应机制</li>
              <li>隐私保护</li>
              <li>免费咨询次数</li>
            </ul>
            <a href="#" class="service-link">我要提问 →</a>
          </div>
        </div>

        <!-- 热门分享 -->
        <div class="community-posts">
          <h3 class="section-title-sm">✨ 热门分享</h3>
          <div class="posts-grid">
            <div class="post-card">
              <div class="post-image">
                <div class="post-emoji">🐕</div>
              </div>
              <div class="post-content">
                <h4 class="post-title">我家金毛三岁了</h4>
                <p class="post-excerpt">陪伴我最忠实的小伙伴，今天是它的生日，准备了蛋糕和礼物...</p>
                <div class="post-meta">
                  <span class="meta-user">🐶 小狗妈妈</span>
                  <span class="meta-time">2小时前</span>
                  <span class="meta-likes">❤️ 2.3k</span>
                  <span class="meta-comments">💬 128</span>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div class="post-image">
                <div class="post-emoji">🐈</div>
              </div>
              <div class="post-content">
                <h4 class="post-title">猫咪绝食怎么办</h4>
                <p class="post-excerpt">我家猫咪突然不吃东西了，有没有医生帮忙看看，很担心...</p>
                <div class="post-meta">
                  <span class="meta-user">🐱 猫奴一号</span>
                  <span class="meta-time">5小时前</span>
                  <span class="meta-likes">❤️ 1.8k</span>
                  <span class="meta-comments">💬 256</span>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div class="post-image">
                <div class="post-emoji">🐰</div>
              </div>
              <div class="post-content">
                <h4 class="post-title">兔子洗澡小技巧</h4>
                <p class="post-excerpt">分享一个快速给兔子洗澡的方法，新手必备，超简单...</p>
                <div class="post-meta">
                  <span class="meta-user">🐰 兔兔爱好者</span>
                  <span class="meta-time">昨天</span>
                  <span class="meta-likes">❤️ 986</span>
                  <span class="meta-comments">💬 87</span>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div class="post-image">
                <div class="post-emoji">🦜</div>
              </div>
              <div class="post-content">
                <h4 class="post-title">鹦鹉学说话啦</h4>
                <p class="post-excerpt">教了三个月，我家鹦鹉终于学会说"你好"了，太开心...</p>
                <div class="post-meta">
                  <span class="meta-user">🦜 鸟鸟之家</span>
                  <span class="meta-time">2天前</span>
                  <span class="meta-likes">❤️ 1.5k</span>
                  <span class="meta-comments">💬 156</span>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div class="post-image">
                <div class="post-emoji">🐢</div>
              </div>
              <div class="post-content">
                <h4 class="post-title">乌龟越狱记</h4>
                <p class="post-excerpt">我家乌龟居然自己爬出缸了，找了好久在沙发底下发现...</p>
                <div class="post-meta">
                  <span class="meta-user">🐢 慢吞吞</span>
                  <span class="meta-time">3天前</span>
                  <span class="meta-likes">❤️ 2.1k</span>
                  <span class="meta-comments">💬 203</span>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div class="post-image">
                <div class="post-emoji">🐹</div>
              </div>
              <div class="post-content">
                <h4 class="post-title">仓鼠豪宅改造</h4>
                <p class="post-excerpt">给仓鼠布置了个新家，看看它喜不喜欢...</p>
                <div class="post-meta">
                  <span class="meta-user">🐹 仓鼠控</span>
                  <span class="meta-time">4天前</span>
                  <span class="meta-likes">❤️ 1.2k</span>
                  <span class="meta-comments">💬 98</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 知识问答 -->
        <div class="knowledge-section">
          <h3 class="section-title-sm">📚 知识问答</h3>
          <div class="qa-list">
            <div class="qa-item">
              <div class="qa-question">
                <span class="qa-label">Q</span>
                <p>狗狗三个月了，可以洗澡吗？</p>
              </div>
              <div class="qa-answer">
                <span class="qa-label">A</span>
                <p>建议等到4个月疫苗打完后再洗澡，或者使用干洗喷雾。洗完一定要吹干，防止感冒。狗狗的皮肤比较敏感，频繁洗澡会破坏皮肤的保护层。</p>
                <span class="qa-author">—— 张医生 · 宠物专家</span>
              </div>
            </div>
            <div class="qa-item">
              <div class="qa-question">
                <span class="qa-label">Q</span>
                <p>猫咪突然不爱吃猫粮了，怎么办？</p>
              </div>
              <div class="qa-answer">
                <span class="qa-label">A</span>
                <p>首先观察是否有其他不适症状。如果精神状态正常，可以尝试换粮或添加一些营养膏、罐头增加食欲。也可能是猫粮口味问题，可以尝试其他口味。</p>
                <span class="qa-author">—— 李医生 · 宠物专家</span>
              </div>
            </div>
            <div class="qa-item">
              <div class="qa-question">
                <span class="qa-label">Q</span>
                <p>仓鼠需要每天洗澡吗？</p>
              </div>
              <div class="qa-answer">
                <span class="qa-label">A</span>
                <p>仓鼠不需要水洗，它们会自己用沙浴清洁毛发。准备一个浴沙盆，倒入专门的仓鼠浴沙，仓鼠会在里面打滚清洁自己。频率一周2-3次即可。</p>
                <span class="qa-author">—— 王医生 · 宠物专家</span>
              </div>
            </div>
            <div class="qa-item">
              <div class="qa-question">
                <span class="qa-label">Q</span>
                <p>兔子可以吃胡萝卜吗？</p>
              </div>
              <div class="qa-answer">
                <span class="qa-label">A</span>
                <p>可以吃，但不能作为主食。胡萝卜含糖量较高，只能作为零食少量喂食，一周1-2次。兔子主食应该是干草，如提摩西草，可以提供足够的纤维。</p>
                <span class="qa-author">—— 刘医生 · 宠物专家</span>
              </div>
            </div>
            <div class="qa-item">
              <div class="qa-question">
                <span class="qa-label">Q</span>
                <p>狗狗多久需要驱虫一次？</p>
              </div>
              <div class="qa-answer">
                <span class="qa-label">A</span>
                <p>体外驱虫一般1-2个月一次，体内驱虫一般3个月一次。如果狗狗经常外出或接触其他宠物，建议驱虫频率适当增加。幼犬驱虫需要更频繁。</p>
                <span class="qa-author">—— 陈医生 · 宠物专家</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 医疗服务 -->
    <section id="portfolio" class="section portfolio-section vertical">
      <div class="container">
        <h2 class="section-title">医疗服务</h2>
        <p class="section-subtitle">专业医疗，守护健康</p>

        <!-- 服务项目 -->
        <div class="portfolio-list">
          <div class="portfolio-item">
            <div class="portfolio-icon">📅</div>
            <h3 class="portfolio-title">在线预约</h3>
            <p class="portfolio-desc">
              在线预约宠物医院服务，支持疫苗注射、体检、手术等各类医疗服务。
              查看附近医院评价，选择最适合的医院，省时省心。
            </p>
            <ul class="portfolio-features">
              <li>⏰ 24小时预约</li>
              <li>📍 就近医院推荐</li>
              <li>⭐ 医院评价查看</li>
              <li>📝 预约记录管理</li>
            </ul>
            <button class="portfolio-btn">立即预约</button>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-icon">💬</div>
            <h3 class="portfolio-title">健康咨询</h3>
            <p class="portfolio-desc">
              宠物医生7x24小时在线，随时为您解答健康问题。提供饮食建议、行为指导、
              疾病预防等全方位咨询服务，让养宠更安心。
            </p>
            <ul class="portfolio-features">
              <li>👨‍⚕️ 专业医生团队</li>
              <li>💭 实时在线答疑</li>
              <li>🎥 视频咨询支持</li>
              <li>📋 咨询记录保存</li>
            </ul>
            <button class="portfolio-btn">开始咨询</button>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-icon">💉</div>
            <h3 class="portfolio-title">疫苗提醒</h3>
            <p class="portfolio-desc">
              智能疫苗提醒系统，自动记录疫苗接种时间，提前通知下次接种时间。
              支持多宠物管理，再也不怕错过疫苗接种。
            </p>
            <ul class="portfolio-features">
              <li>📅 智能提醒推送</li>
              <li>🐾 多宠物管理</li>
              <li>📊 疫苗记录追踪</li>
              <li>🔔 提前7天通知</li>
            </ul>
            <button class="portfolio-btn">设置提醒</button>
          </div>
        </div>

        <!-- 医疗数据 -->
        <div class="medical-stats">
          <div class="medical-stat-item">
            <span class="medical-stat-number">500+</span>
            <p class="medical-stat-label">合作医院</p>
          </div>
          <div class="medical-stat-item">
            <span class="medical-stat-number">1000+</span>
            <p class="medical-stat-label">专业医生</p>
          </div>
          <div class="medical-stat-item">
            <span class="medical-stat-number">50万+</span>
            <p class="medical-stat-label">累计咨询</p>
          </div>
          <div class="medical-stat-item">
            <span class="medical-stat-number">4.9</span>
            <p class="medical-stat-label">服务评分</p>
          </div>
        </div>

        <!-- 常见问题 -->
        <div class="faq-section">
          <h3 class="section-title-sm">❓ 常见问题</h3>
          <div class="faq-list">
            <div class="faq-item">
              <h4 class="faq-question">宠物需要定期体检吗？</h4>
              <p class="faq-answer">建议每年进行1-2次体检，老年宠物和有慢性疾病的宠物建议每3-4个月体检一次。体检项目包括血常规、生化检查、心电图等，可以及早发现潜在问题。</p>
            </div>
            <div class="faq-item">
              <h4 class="faq-question">疫苗接种流程是什么？</h4>
              <p class="faq-answer">一般6-8周开始首次疫苗接种，每隔3-4周接种一次，通常需要接种3次基础疫苗，之后每年加强一次。疫苗接种后需观察宠物反应，如有异常及时就医。</p>
            </div>
            <div class="faq-item">
              <h4 class="faq-question">宠物出现紧急情况怎么办？</h4>
              <p class="faq-answer">立即通过我们的在线咨询功能联系医生，或直接前往最近的合作医院，我们提供24小时急诊服务。紧急情况包括呼吸急促、持续呕吐、外伤出血等。</p>
            </div>
            <div class="faq-item">
              <h4 class="faq-question">如何判断宠物是否生病了？</h4>
              <p class="faq-answer">观察宠物的精神状态、食欲、排便情况、体温等。如果出现精神萎靡、食欲下降、腹泻呕吐、体温异常等症状，建议及时就医。早期治疗对康复至关重要。</p>
            </div>
            <div class="faq-item">
              <h4 class="faq-question">宠物绝育什么时候合适？</h4>
              <p class="faq-answer">狗狗建议6-8个月，猫咪建议5-6个月进行绝育手术。过早或过晚都不利于宠物健康。绝育可以预防很多疾病，也能减少不良行为。</p>
            </div>
            <div class="faq-item">
              <h4 class="faq-question">宠物保险有必要买吗？</h4>
              <p class="faq-answer">非常建议购买。宠物看病费用较高，保险可以减轻经济负担。建议选择覆盖医疗费用、手术费用、意外伤害等的保险产品。越早投保保费越低。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 个人中心 -->
    <section id="contact" class="section contact-section vertical">
      <div class="container">
        <h2 class="section-title">个人中心</h2>
        <p class="section-subtitle">便捷管理，贴心服务</p>
        <div class="contact-grid">
          <div class="contact-info">
            <h3 class="section-title-sm">👤 用户信息</h3>
            <div class="user-profile">
              <div class="user-avatar">
                <span class="avatar-emoji">🧑</span>
              </div>
              <div class="user-details">
                <h4 class="user-name">张三</h4>
                <p class="user-email">zhangsan@example.com</p>
                <p class="user-phone">138****8888</p>
                <div class="user-badges">
                  <span class="user-badge gold">金牌会员</span>
                  <span class="user-badge verified">实名认证</span>
                </div>
              </div>
            </div>
            <div class="user-stats">
              <div class="user-stat">
                <span class="user-stat-value">3</span>
                <span class="user-stat-label">我的宠物</span>
              </div>
              <div class="user-stat">
                <span class="user-stat-value">12</span>
                <span class="user-stat-label">收藏商品</span>
              </div>
              <div class="user-stat">
                <span class="user-stat-value">5</span>
                <span class="user-stat-label">待评价</span>
              </div>
              <div class="user-stat">
                <span class="user-stat-value">8</span>
                <span class="user-stat-label">订单数量</span>
              </div>
              <div class="user-stat">
                <span class="user-stat-value">¥2380</span>
                <span class="user-stat-label">累计消费</span>
              </div>
            </div>
          </div>
          <div class="contact-pets">
            <h3 class="section-title-sm">🐾 宠物档案</h3>
            <div class="pet-list">
              <div class="pet-item">
                <div class="pet-emoji">🐕</div>
                <div class="pet-info">
                  <h5 class="pet-name">旺财</h5>
                  <p class="pet-breed">金毛犬 · 3岁</p>
                  <div class="pet-tags">
                    <span class="pet-tag health">健康</span>
                    <span class="pet-tag neutered">已绝育</span>
                    <span class="pet-tag vaccine">疫苗齐全</span>
                  </div>
                </div>
                <button class="pet-btn">查看详情</button>
              </div>
              <div class="pet-item">
                <div class="pet-emoji">🐈</div>
                <div class="pet-info">
                  <h5 class="pet-name">咪咪</h5>
                  <p class="pet-breed">英短蓝猫 · 2岁</p>
                  <div class="pet-tags">
                    <span class="pet-tag health">健康</span>
                    <span class="pet-tag vaccine">疫苗齐全</span>
                  </div>
                </div>
                <button class="pet-btn">查看详情</button>
              </div>
              <div class="pet-item">
                <div class="pet-emoji">🐰</div>
                <div class="pet-info">
                  <h5 class="pet-name">小白</h5>
                  <p class="pet-breed">垂耳兔 · 1岁</p>
                  <div class="pet-tags">
                    <span class="pet-tag health">健康</span>
                    <span class="pet-tag active">活泼</span>
                  </div>
                </div>
                <button class="pet-btn">查看详情</button>
              </div>
              <div class="pet-item">
                <div class="pet-emoji">🐹</div>
                <div class="pet-info">
                  <h5 class="pet-name">球球</h5>
                  <p class="pet-breed">金丝熊 · 8个月</p>
                  <div class="pet-tags">
                    <span class="pet-tag health">健康</span>
                    <span class="pet-tag cute">呆萌</span>
                  </div>
                </div>
                <button class="pet-btn">查看详情</button>
              </div>
            </div>
          </div>
          <div class="contact-favorites">
            <h3 class="section-title-sm">💖 收藏商品</h3>
            <div class="favorite-list">
              <div class="favorite-item">
                <div class="favorite-emoji">🍖</div>
                <div class="favorite-info">
                  <h5 class="favorite-name">进口狗粮 大包装15kg</h5>
                  <p class="favorite-price">¥599</p>
                  <p class="favorite-sales">已售 3285件</p>
                </div>
                <button class="favorite-btn">加入购物车</button>
                <button class="remove-btn">取消收藏</button>
              </div>
              <div class="favorite-item">
                <div class="favorite-emoji">🧸</div>
                <div class="favorite-info">
                  <h5 class="favorite-name">毛绒玩具 智能发声</h5>
                  <p class="favorite-price">¥199</p>
                  <p class="favorite-sales">已售 1862件</p>
                </div>
                <button class="favorite-btn">加入购物车</button>
                <button class="remove-btn">取消收藏</button>
              </div>
              <div class="favorite-item">
                <div class="favorite-emoji">🛏️</div>
                <div class="favorite-info">
                  <h5 class="favorite-name">宠物窝 舒适大号</h5>
                  <p class="favorite-price">¥299</p>
                  <p class="favorite-sales">已售 2679件</p>
                </div>
                <button class="favorite-btn">加入购物车</button>
                <button class="remove-btn">取消收藏</button>
              </div>
              <div class="favorite-item">
                <div class="favorite-emoji">💊</div>
                <div class="favorite-info">
                  <h5 class="favorite-name">营养补钙片 120片</h5>
                  <p class="favorite-price">¥89</p>
                  <p class="favorite-sales">已售 4521件</p>
                </div>
                <button class="favorite-btn">加入购物车</button>
                <button class="remove-btn">取消收藏</button>
              </div>
              <div class="favorite-item">
                <div class="favorite-emoji">🛁</div>
                <div class="favorite-info">
                  <h5 class="favorite-name">宠物梳子 负离子</h5>
                  <p class="favorite-price">¥129</p>
                  <p class="favorite-sales">已售 1568件</p>
                </div>
                <button class="favorite-btn">加入购物车</button>
                <button class="remove-btn">取消收藏</button>
              </div>
            </div>
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

// 垂直滚动动画模式
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

// 单页缩放滚动
let globalTimeline: any = null
let globalScrollTriggerInstance: any = null

const scalePanelScrollAnimation = (className = 'vertical') => {
  ScrollTrigger.refresh()

  let panels: any[] = []
  let originalStyles: Map<string, any> = new Map()
  let onResize: any = null

  const cleanup = () => {
    if (globalTimeline) {
      globalTimeline.kill()
      globalTimeline = null
    }
    if (globalScrollTriggerInstance) {
      globalScrollTriggerInstance.kill()
      globalScrollTriggerInstance = null
    }
    if (onResize) {
      window.removeEventListener('resize', onResize)
    }

    panels.forEach((panel) => {
      const panelId = panel.id || ''
      const styles = originalStyles.get(panelId)
      if (styles) {
        Object.assign(panel.style, styles)
      }
    })

    killAllAnimation({ keepScrollPosition: true })
  }

  const getOriginalStyles = (element: any) => {
    const computed = window.getComputedStyle(element)
    const style: any = {}
    for (let key of ['position', 'left', 'top', 'transform', 'zIndex', 'width', 'height']) {
      style[key] = computed[key]
    }
    return style
  }

  nextTick(() => {
    panels = gsap.utils.toArray(`.${className}`) || []
    if (panels.length <= 1) return

    panels.forEach((panel, index) => {
      const panelId = panel.id || `panel-${index}`
      originalStyles.set(panelId, getOriginalStyles(panel))

      panel.style.position = 'absolute'
      panel.style.left = '0'
      panel.style.top = '0'
      panel.style.width = '100%'
      panel.style.height = '100%'
      panel.style.zIndex = `${panels.length - index}`
    })

    globalTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.website-container',
        pin: true,
        scrub: 1,
        start: 'top top',
        end: '+=' + (window.innerWidth * (panels.length - 1)),
        markers: false,
        snap: 1 / (panels.length - 1)
      }
    })

    // 只对前几页应用缩放动画，最后一页保持可见
    const animatedPanels = panels.slice(0, -1)
    animatedPanels.forEach((panel, i) => {
      const xPercent = i % 2 === 0 ? -5 : 5
      const yPercent = i % 2 === 0 ? -5 : 5

      globalTimeline.to(panel, {
        scale: 0.5,
        xPercent: xPercent,
        yPercent: yPercent,
        opacity: 0,
        duration: 1
      }, i)
    })

    onResize = createDebouncedFn(() => {
      if (globalScrollTriggerInstance) {
        globalScrollTriggerInstance.refresh()
      }
    }, 100, 'scale-resize')

    window.addEventListener('resize', onResize)
  })

  return cleanup
}

// 平滑滚动到指定section
const scrollToSection = (index: number) => {
  const hrefMap = ['#home', '#about', '#services', '#portfolio', '#contact']
  const href = hrefMap[index]

  if (!href) return

  // 找到目标section
  const panels = gsap.utils.toArray('.vertical')
  const targetSection = document.querySelector(href) as HTMLElement

  if (!targetSection) return

  // 获取目标section在panels中的索引
  const targetIndex = Array.from(panels).indexOf(targetSection as any)
  if (targetIndex === -1) return

  console.log('滚动到:', {
    href,
    targetIndex,
    totalPanels: panels.length
  })

  // 使用GSAP ScrollTrigger的scrollTo功能
  // 每个section对应的滚动距离
  const scrollPerSection = window.innerWidth
  const scrollPosition = targetIndex * scrollPerSection

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: scrollPosition, autoKill: false },
    ease: 'power3.inOut'
  })
}

// 导航链接点击跳转
const setupNavigation = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()
      const href = this.getAttribute('href')

      let targetIndex = 0
      if (href === '#home') targetIndex = 0
      else if (href === '#about') targetIndex = 1
      else if (href === '#services') targetIndex = 2
      else if (href === '#portfolio') targetIndex = 3
      else if (href === '#contact') targetIndex = 4

      scrollToSection(targetIndex)
    })
  })
}

onMounted(() => {
  // 启动单页缩放滚动
  const cleanupScaleScroll = scalePanelScrollAnimation()

  // 设置导航
  setupNavigation()

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
    rotate: 360,
    duration: 15,
    repeat: -1,
    ease: 'none'
  })

  // 关于我们区域动画
  verticalAnimation('.section-title', {
    y: 60,
    opacity: 0,
    duration: 1,
    toKey: 'from'
  })

  verticalAnimation('.section-subtitle', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  verticalAnimation('.about-description', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    toKey: 'from'
  })

  verticalAnimation('.advantage-item', {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  verticalAnimation('.stat-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  verticalAnimation('.image-box', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    toKey: 'from'
  })

  // 服务卡片动画
  verticalAnimation('.service-card', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    toKey: 'from'
  })

  // 热门宠物展示动画
  verticalAnimation('.hot-pets', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  verticalAnimation('.pet-showcase-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 商品分类动画
  verticalAnimation('.category-item', {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 热销商品动画
  verticalAnimation('.product-card', {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 商城优势动画
  verticalAnimation('.shop-feature-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 社区帖子动画
  verticalAnimation('.post-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    toKey: 'from'
  })

  // 知识问答动画
  verticalAnimation('.qa-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 医疗服务动画
  verticalAnimation('.portfolio-item', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    toKey: 'from'
  })

  // 医疗数据动画
  verticalAnimation('.medical-stat-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // FAQ动画
  verticalAnimation('.faq-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 个人中心动画
  verticalAnimation('.contact-info', {
    x: -60,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  verticalAnimation('.contact-pets', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  verticalAnimation('.contact-favorites', {
    x: 60,
    opacity: 0,
    duration: 0.8,
    toKey: 'from'
  })

  verticalAnimation('.user-profile', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    toKey: 'from'
  })

  verticalAnimation('.user-stat', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    toKey: 'from'
  })

  verticalAnimation('.pet-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  verticalAnimation('.favorite-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    toKey: 'from'
  })

  // 清理函数
  onUnmounted(() => {
    cleanupScaleScroll()
  })
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.website-container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #fff5e6 0%, #ffe4c4 50%, #ffd699 100%);
}

/* 导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  z-index: 1000;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 32px;
  font-weight: 700;
  color: #ff6b35;
}

.logo-icon {
  font-size: 36px;
}

.logo-text {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 60px;
}

.nav-link {
  text-decoration: none;
  color: #4a4a4a;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  padding: 8px 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff6b35 0%, #ff8c42 100%);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover {
  color: #ff6b35;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-button {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
  transition: all 0.3s ease;
}

.nav-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(255, 107, 53, 0.4);
}

.cart-icon {
  font-size: 22px;
}

.cart-count {
  background: white;
  color: #ff6b35;
  font-size: 14px;
  font-weight: 700;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Section 基础样式 */
.section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding-top: 90px;
}

.container {
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 80px;
  flex: 1;
  overflow-y: auto;
  padding-bottom: 40px;
}

/* 自定义滚动条样式 */
.container::-webkit-scrollbar {
  width: 8px;
}

.container::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}

.container::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  border-radius: 4px;
}

.container::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #ff8c42 0%, #ffa366 100%);
}

.container {
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 80px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: 56px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-title-sm {
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-subtitle {
  font-size: 22px;
  color: #666;
  font-weight: 400;
}

/* Hero Section */
.hero-section {
  position: relative;
  overflow: hidden;
  padding-top: 90px;
}

.hero-section .container {
  overflow-y: auto;
  padding: 0 80px;
  flex: 1;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa366 100%);
  z-index: 0;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 100px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 10px 24px;
  border-radius: 30px;
  margin-bottom: 40px;
}

.badge-icon {
  font-size: 24px;
}

.badge-text {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.hero-title {
  font-size: 80px;
  font-weight: 800;
  line-height: 1.2;
  color: white;
  margin-bottom: 40px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.title-line {
  display: block;
}

.hero-subtitle {
  font-size: 22px;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.9;
  margin-bottom: 50px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 60px;
}

.hero-stat {
  text-align: center;
}

.hero-stat-number {
  display: block;
  font-size: 42px;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
}

.hero-stat-label {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
}

.hero-stat-divider {
  width: 2px;
  height: 60px;
  background: rgba(255, 255, 255, 0.3);
}

.hero-buttons {
  display: flex;
  gap: 25px;
  justify-content: center;
  margin-bottom: 50px;
}

.hero-btn {
  padding: 18px 48px;
  border-radius: 35px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-btn.primary {
  background: white;
  color: #ff6b35;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.hero-btn.primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.hero-btn.secondary {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.hero-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-4px);
}

.btn-icon {
  font-size: 18px;
}

.hero-features {
  display: flex;
  gap: 35px;
  justify-content: center;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 14px 28px;
  border-radius: 25px;
}

.feature-icon {
  font-size: 22px;
}

.feature-text {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.1);
}

.circle-1 {
  width: 400px;
  height: 400px;
  top: 8%;
  left: 4%;
}

.circle-2 {
  width: 280px;
  height: 280px;
  top: 15%;
  right: 8%;
}

.circle-3 {
  width: 200px;
  height: 200px;
  bottom: 15%;
  right: 12%;
}

.floating-shape {
  position: absolute;
  font-size: 100px;
  opacity: 0.8;
}

.shape-1 {
  top: 22%;
  left: 12%;
}

.shape-2 {
  top: 35%;
  right: 10%;
}

.shape-3 {
  bottom: 20%;
  left: 18%;
}

/* 关于我们 Section */
.about-section {
  background: white;
}

.about-section .container {
  overflow-y: auto;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-text {
  padding: 40px 0;
}

.about-description {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-advantages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin: 50px 0;
}

.advantage-item {
  text-align: center;
  padding: 30px;
  background: #fff9f0;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.advantage-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.15);
}

.advantage-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.adv-emoji {
  font-size: 40px;
}

.advantage-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.advantage-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 50px;
  padding: 40px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  border-radius: 20px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 36px;
  font-weight: 700;
  color: white;
  display: block;
}

.stat-label {
  font-size: 20px;
  color: white;
}

.stat-name {
  color: rgba(255, 255, 255, 0.9);
  margin-top: 8px;
}

.about-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.image-box {
  padding: 40px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.image-box:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.3);
}

.box-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 16px;
}

.box-title {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.box-desc {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  line-height: 1.6;
}

/* 宠物社区 Section */
.services-section {
  background: linear-gradient(135deg, #fff5e6 0%, #ffe4c4 100%);
}

.services-section .container {
  overflow-y: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;
}

.service-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.2);
}

.service-icon {
  font-size: 64px;
  margin-bottom: 24px;
  text-align: center;
}

.service-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 16px;
}

.service-desc {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 24px;
}

.service-features {
  list-style: none;
  margin-bottom: 30px;
}

.service-features li {
  padding: 10px 0;
  color: #555;
  font-size: 14px;
  position: relative;
  padding-left: 25px;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #ff6b35;
  font-weight: 700;
}

.service-link {
  display: block;
  text-align: center;
  color: #ff6b35;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
}

.service-link:hover {
  color: #ff8c42;
  text-decoration: underline;
}

/* 医疗服务 Section */
.portfolio-section {
  background: white;
}

.portfolio-section .container {
  overflow-y: auto;
}

.portfolio-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 35px;
}

.portfolio-item {
  background: linear-gradient(135deg, #fff5e6 0%, #ffe4c4 100%);
  padding: 28px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
}

.portfolio-icon {
  font-size: 52px;
  margin-bottom: 18px;
}

.portfolio-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.portfolio-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.7;
  margin-bottom: 18px;
}

.portfolio-btn {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.portfolio-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
}

/* 个人中心 Section */
.contact-section {
  background: linear-gradient(135deg, #fff5e6 0%, #ffe4c4 100%);
}

.contact-section .container {
  overflow-y: auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  gap: 40px;
  margin-top: 60px;
}

/* 用户信息 */
.contact-info {
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
  max-height: 600px;
  overflow-y: auto;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 35px;
  padding: 25px;
  background: linear-gradient(135deg, #fff9f0 0%, #ffe4c4 100%);
  border-radius: 20px;
}

.user-avatar {
  font-size: 64px;
}

.user-details {
  flex: 1;
}

.user-name {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.user-email,
.user-phone {
  font-size: 15px;
  color: #666;
  margin-bottom: 5px;
}

.user-badges {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.user-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.user-badge.gold {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4a 100%);
  color: #8b4513;
}

.user-badge.verified {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.user-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding-top: 25px;
  border-top: 2px solid #f0f0f0;
}

.user-stat {
  text-align: center;
  padding: 20px;
  background: #fff9f0;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.user-stat:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.15);
}

.user-stat-value {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 5px;
}

.user-stat-label {
  font-size: 14px;
  color: #666;
}

/* 宠物档案 */
.contact-pets {
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
  max-height: 600px;
  overflow-y: auto;
}

.pet-list {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.pet-item {
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 22px;
  background: linear-gradient(135deg, #fff9f0 0%, #ffe4c4 100%);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.pet-item:hover {
  transform: translateX(12px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
}

.pet-emoji {
  font-size: 56px;
}

.pet-info {
  flex: 1;
}

.pet-name {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
}

.pet-breed {
  font-size: 15px;
  color: #666;
  margin-bottom: 10px;
}

.pet-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.pet-tag {
  padding: 5px 14px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.pet-tag.health {
  background: linear-gradient(135deg, #00b894 0%, #55efc4 100%);
  color: white;
}

.pet-tag.neutered,
.pet-tag.vaccine {
  background: linear-gradient(135deg, #0984e3 0%, #74b9ff 100%);
  color: white;
}

.pet-tag.active {
  background: linear-gradient(135deg, #fdcb6e 0%, #ffeaa7 100%);
  color: #d35400;
}

.pet-tag.cute {
  background: linear-gradient(135deg, #e17055 0%, #fab1a0 100%);
  color: white;
}

.pet-btn {
  padding: 8px 20px;
  background: #ff6b35;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pet-btn:hover {
  background: #ff8c42;
  transform: scale(1.05);
}

/* 收藏商品 */
.contact-favorites {
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
  max-height: 600px;
  overflow-y: auto;
}

.favorite-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.favorite-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px;
  background: linear-gradient(135deg, #fff9f0 0%, #ffe4c4 100%);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.favorite-item:hover {
  transform: translateX(-10px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
}

.favorite-emoji {
  font-size: 48px;
}

.favorite-info {
  flex: 1;
}

.favorite-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.favorite-price {
  font-size: 20px;
  font-weight: 700;
  color: #ff6b35;
}

.favorite-sales {
  font-size: 13px;
  color: #999;
}

.favorite-btn {
  padding: 8px 16px;
  background: #ff6b35;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.favorite-btn:hover {
  background: #ff8c42;
}

.remove-btn {
  padding: 8px 16px;
  background: #f0f0f0;
  color: #666;
  border: none;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background: #e0e0e0;
  color: #333;
}

/* 热门宠物展示 */
.hot-pets {
  margin-top: 60px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
}

.hot-pets-title {
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 30px;
  text-align: center;
}

.pet-showcase {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.pet-showcase-item {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 30px 20px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.pet-showcase-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.pet-showcase-emoji {
  font-size: 64px;
  margin-bottom: 15px;
}

.pet-showcase-name {
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.pet-showcase-desc {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

/* 关于我们 - 新样式 */
.about-description {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 60px;
}

.product-categories {
  margin-bottom: 60px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 40px;
}

.category-item {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.category-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ff6b35 0%, #ff8c42 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.category-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.2);
}

.category-item:hover::before {
  transform: scaleX(1);
}

.category-icon {
  font-size: 48px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.category-item:hover .category-icon {
  transform: scale(1.2) rotate(5deg);
}

.category-name {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.category-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.category-count {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
}

.category-sub {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}

.category-sub span {
  padding: 4px 10px;
  background: #fff5e6;
  color: #ff6b35;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.category-item:hover .category-sub span {
  background: #ffe4c4;
}

.hot-products {
  margin-bottom: 40px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
}

.product-image {
  position: relative;
  background: linear-gradient(135deg, #fff5e6 0%, #ffe4c4 100%);
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-emoji {
  font-size: 60px;
  transition: transform 0.3s ease;
}

.product-card:hover .product-emoji {
  transform: scale(1.15) rotate(-5deg);
}

.product-tag {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 14px;
  background: #ff6b35;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  z-index: 1;
}

.product-tag.hot {
  background: linear-gradient(135deg, #ff4757 0%, #ff6b81 100%);
}

.product-tag.new {
  background: linear-gradient(135deg, #2ed573 0%, #7bed9f 100%);
}

.product-tag.rec {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
}

.product-tag.sale {
  background: linear-gradient(135deg, #ffa502 0%, #ff7f50 100%);
}

.product-card h4 {
  padding: 15px 20px 6px;
  font-size: 15px;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
  height: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-desc {
  padding: 0 20px 12px;
  font-size: 12px;
  color: #888;
  line-height: 1.5;
  height: 36px;
  overflow: hidden;
}

.product-price-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px 8px;
}

.product-price {
  font-size: 20px;
  font-weight: 700;
  color: #ff6b35;
}

.product-original {
  font-size: 13px;
  color: #ccc;
  text-decoration: line-through;
}

.product-sales {
  padding: 0 20px 12px;
  font-size: 11px;
  color: #999;
}

.product-btn {
  display: block;
  width: calc(100% - 40px);
  margin: 0 20px 16px;
  padding: 10px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.product-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease, height 0.4s ease;
}

.product-btn:hover::before {
  width: 200px;
  height: 200px;
}

.product-btn:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
}

.shop-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-top: 40px;
}

.shop-feature-item {
  background: linear-gradient(135deg, #fff5e6 0%, #ffe4c4 100%);
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.shop-feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
}

.shop-feature-item .feature-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.shop-feature-item h4 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.shop-feature-item p {
  font-size: 14px;
  color: #666;
}

/* 社区 - 新样式 */
.community-posts {
  margin: 60px 0;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 40px;
}

.post-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.post-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.2);
}

.post-image {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-emoji {
  font-size: 100px;
  opacity: 0.8;
}

.post-content {
  padding: 25px;
}

.post-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.post-excerpt {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.post-meta {
  display: flex;
  gap: 15px;
  padding-top: 15px;
  border-top: 2px solid #f0f0f0;
  font-size: 13px;
  color: #999;
  flex-wrap: wrap;
}

.meta-time {
  display: flex;
  align-items: center;
  gap: 4px;
}

.knowledge-section {
  margin-top: 60px;
  background: linear-gradient(135deg, #fff5e6 0%, #ffe4c4 100%);
  padding: 40px;
  border-radius: 20px;
}

.qa-list {
  margin-top: 30px;
}

.qa-item {
  background: white;
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 20px;
}

.qa-question {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.qa-label {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.qa-question p {
  flex: 1;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  line-height: 1.6;
}

.qa-answer {
  display: flex;
  gap: 15px;
}

.qa-answer p {
  flex: 1;
  font-size: 15px;
  color: #666;
  line-height: 1.6;
}

.qa-author {
  display: block;
  font-size: 13px;
  color: #ff6b35;
  font-weight: 600;
  margin-top: 8px;
}

/* 医疗服务 - 新样式 */
.portfolio-features {
  list-style: none;
  margin: 15px 0 18px;
  padding: 0;
}

.portfolio-features li {
  padding: 6px 0;
  color: #555;
  font-size: 13px;
  position: relative;
  padding-left: 22px;
}

.portfolio-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #ff6b35;
  font-weight: 700;
}

.portfolio-btn {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: white;
  border: none;
  padding: 10px 28px;
  border-radius: 22px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.portfolio-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
}

.medical-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 0;
}

.medical-stat-item {
  text-align: center;
  background: linear-gradient(135deg, #fff5e6 0%, #ffe4c4 100%);
  padding: 24px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.medical-stat-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
}

.medical-stat-number {
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 8px;
}

.medical-stat-label {
  font-size: 13px;
  color: #666;
}

/* FAQ Section */
.faq-section {
  margin-top: 35px;
  padding: 25px;
  background: linear-gradient(135deg, #fff5e6 0%, #ffe4c4 100%);
  border-radius: 16px;
}

.faq-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 18px;
}

.faq-item {
  background: white;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.15);
}

.faq-question {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.5;
}

.faq-answer {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 1600px) {
  .container {
    padding: 0 60px;
  }

  .hero-title {
    font-size: 72px;
  }

  .user-stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1200px) {
  .navbar {
    padding: 0 60px;
  }

  .container {
    padding: 0 50px;
  }

  .section-title {
    font-size: 48px;
  }

  .section-title-sm {
    font-size: 32px;
  }

  .hero-title {
    font-size: 64px;
  }

  .hero-content {
    padding: 60px 80px;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .about-image {
    order: -1;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .portfolio-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }

  .contact-favorites {
    grid-column: span 2;
  }

  .user-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .pet-showcase {
    grid-template-columns: repeat(2, 1fr);
  }

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .shop-features {
    grid-template-columns: repeat(2, 1fr);
  }

  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .medical-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 30px;
    height: 70px;
  }

  .nav-links {
    display: none;
  }

  .container {
    padding: 0 30px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-title-sm {
    font-size: 24px;
  }

  .hero-title {
    font-size: 48px;
  }

  .hero-content {
    padding: 40px 30px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 15px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-features {
    flex-direction: column;
    align-items: center;
  }

  .pet-showcase,
  .category-grid,
  .products-grid,
  .shop-features,
  .posts-grid,
  .medical-stats {
    grid-template-columns: 1fr;
  }

  .services-grid,
  .portfolio-list {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-favorites {
    grid-column: span 1;
  }

  .user-stats {
    grid-template-columns: 1fr;
  }
}
</style>
