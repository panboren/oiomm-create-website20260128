/*
* @Author: panboren
* @Date: 2024/11/5$
* @LastModifiedBy: Administrator$
* @QQ: 3248874747
*/
import gsap from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'
import _ from 'lodash'
import { isTrue, isTrueObject } from '~~/utils/index.js'
import { getId } from '~~/pages/template/compoments/right/config.js'
import { computedStyle } from '~~/components/form-dialog/config.js'
import { getOriginalStyles } from '~~/plugins/directives.js'

// 单例注册插件
let pluginsRegistered = false
const registerPlugins = () => {
  if (!pluginsRegistered) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    pluginsRegistered = true
  }
}

// 动画实例管理器
class AnimationManager {
  constructor() {
    this.instances = new Map()
    this.scrollTriggers = new Map()
    this.timelines = new Map()
  }

  add(key, animation, type = 'animation') {
    if (type === 'animation') {
      this.instances.set(key, animation)
    } else if (type === 'scrollTrigger') {
      this.scrollTriggers.set(key, animation)
    } else if (type === 'timeline') {
      this.timelines.set(key, animation)
    }
  }

  get(key, type = 'animation') {
    if (type === 'animation') return this.instances.get(key)
    if (type === 'scrollTrigger') return this.scrollTriggers.get(key)
    if (type === 'timeline') return this.timelines.get(key)
    return null
  }

  kill(key, type = 'animation') {
    const instance = this.get(key, type)
    if (instance) {
      if (instance.kill) instance.kill(true)
      if (instance.scrollTrigger?.kill) instance.scrollTrigger.kill()
      this.delete(key, type)
    }
  }

  delete(key, type = 'animation') {
    if (type === 'animation') this.instances.delete(key)
    else if (type === 'scrollTrigger') this.scrollTriggers.delete(key)
    else if (type === 'timeline') this.timelines.delete(key)
  }

  killAll() {
    this.instances.forEach((anim) => anim?.kill?.(true))
    this.scrollTriggers.forEach((st) => st?.kill?.())
    this.timelines.forEach((tl) => tl?.kill?.(true))
    this.clear()
  }

  clear() {
    this.instances.clear()
    this.scrollTriggers.clear()
    this.timelines.clear()
  }
}

// 样式属性映射
const STYLE_MAP = {
  w: 'width',
  h: 'height',
  x: 'x',
  y: 'y',
  rotate: 'rotation',
  scaleX: 'scaleX',
  scaleY: 'scaleY',
  skewX: 'skewX',
  skewY: 'skewY',
  opacity: 'opacity',
  background: 'backgroundColor',
  color: 'color',
  fontSize: 'fontSize',
  fontWeight: 'fontWeight',
  textShadow: 'textShadow'
}

// 转换样式对象
const transformStyle = (styleObj) => {
  if (!styleObj || typeof styleObj !== 'object') return {}
  const result = {}
  Object.entries(styleObj).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      const mappedKey = STYLE_MAP[key] || key
      result[mappedKey] = value
    }
  })
  return result
}

// 防抖优化
const debounceMap = new Map()
const createDebouncedFn = (fn, delay = 100, key) => {
  if (debounceMap.has(key)) {
    const debounced = debounceMap.get(key)
    if (debounced.timer) clearTimeout(debounced.timer)
  }
  const debounced = { fn, delay, timer: null }
  debounceMap.set(key, debounced)
  return (...args) => {
    if (debounced.timer) clearTimeout(debounced.timer)
    debounced.timer = setTimeout(() => fn(...args), delay)
  }
}

export const UseAnimation = () => {
  registerPlugins()

  const animationManager = new AnimationManager()
  const pageRef = ref(null)
  const panelRef = ref(null)
  const scrollTween = ref({})

  // 编辑创建动画
  const createAnimation = (pageList) => {
    if (!pageList?.value?.length) return

    pageList.value.forEach((item) => {
      const containerAnimation = scrollTween.value[item.uuid]
      if (!containerAnimation) return

      item?.panels?.forEach?.((panelItem) => {
        panelItem?.children?.forEach?.((animationItem) => {
          playAnimation(panelItem, animationItem, containerAnimation)
        })
      })
    })
  }

  // 初始化动画
  const initAnimation = (pageList) => {
    return nextTick(() => {
      const horizontalSections = pageRef.value || []
      if (!horizontalSections.length) return

      horizontalSections.forEach((container) => {
        const sections = container.querySelectorAll('.panel')
        if (!sections.length) return

        const uuid = container.getAttribute('uuid')
        if (!uuid) return

        const tween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => '+=' + (container.offsetWidth - window.innerWidth),
            anticipatePin: 1
          }
        })

        scrollTween.value[uuid] = tween
        animationManager.add(`scroll-${uuid}`, tween, 'animation')
      })
    })
  }



  // 播放动画
  const playAnimation = (panelItem, itemData, containerAnimation) => {
    if (!itemData) return
    if (panelItem.horizontal) {
      horizontalAnimation(itemData, containerAnimation)
    } else {
      verticalAnimation(itemData)
    }
  }

  // 停止动画
  const killAnimation = (itemData) => {
    if (!itemData) return

    const gs = itemData.gsap
    if (gs) {
      if (gs.kill) gs.kill(true)
      if (gs.scrollTrigger?.kill) gs.scrollTrigger.kill()
      itemData.gsap = null
    }
  }

  // 停止所有动画
  const killAllAnimation = (options = {}) => {
    try {
      const { keepScrollPosition = false } = options

      // 清理GSAP全局动画
      if (gsap.killAll) {
        gsap.killAll(false, true, true, false)
      }

      // 清理所有ScrollTrigger实例
      const triggers = ScrollTrigger.getAll?.()
      if (triggers?.length) {
        triggers.forEach(st => {
          try {
            if (st.kill) st.kill()
          } catch (e) {
            console.warn('清理ScrollTrigger失败:', e)
          }
        })
      }

      // 再次确保ScrollTrigger完全清理
      if (ScrollTrigger.killAll) {
        ScrollTrigger.killAll()
      }

      // 清理动画管理器中的实例
      animationManager.killAll()

      // 刷新ScrollTrigger以重新计算
      if (!keepScrollPosition) {
        setTimeout(() => {
          ScrollTrigger.refresh(true)
        }, 10)
      }

      console.log('所有动画已清理')
    } catch (error) {
      console.error('停止所有动画失败:', error)
    }
  }

  // 清理页面级动画（保留子元素动画）
  const cleanupPageAnimations = (pageList) => {
    if (!pageList?.length) return

    try {
      pageList.forEach(item => {
        // 清理页面的tween
        if (item.tween) {
          item.tween.clear?.(true)
          item.tween.kill?.(true)
          item.tween = null
        }

        // 清理scrollTween中的引用
        if (scrollTween.value[item.uuid]) {
          delete scrollTween.value[item.uuid]
        }

        // 清理子元素的动画
        item?.panels?.forEach?.(panelItem => {
          panelItem?.children?.forEach?.(childItem => {
            killAnimation(childItem)
          })
        })
      })

      ScrollTrigger.refresh()
    } catch (error) {
      console.error('清理页面动画失败:', error)
    }
  }

  // 重置动画状态
  const resetAnimationState = () => {
    try {
      killAllAnimation({ keepScrollPosition: false })

      // 清理scrollTween
      scrollTween.value = {}

      // 清理DOM上的动画相关样式
      const animatedElements = document.querySelectorAll('[gsap-instance]')
      animatedElements.forEach(el => {
        el.removeAttribute('gsap-instance')
        el.style.transform = ''
        el.style.opacity = ''
      })

      console.log('动画状态已重置')
    } catch (error) {
      console.error('重置动画状态失败:', error)
    }
  }






  // 暂停动画
  const pauseAnimation = (itemData) => {
    itemData?.gsap?.pause?.()
  }

  // 创建横向动画
  const horizontalAnimation = async (itemData, containerAnimation) => {
    return nextTick(() => {
      if (itemData?.formData?.animationTab !== 3 || !itemData?.className) return

      const className = `.${itemData.className}`
      let runStyle = itemData?.formData?.runStyle || {}

      if (!isTrueObject(runStyle)) return

      runStyle = _.cloneDeep(runStyle) || {}
      runStyle = transformStyle(runStyle)

      const toKey = runStyle.toKey || 'from'
      delete runStyle.toKey

      // 清理旧动画
      killAnimation(itemData)

      const gs = gsap[toKey](className, {
        ...runStyle,
        scrollTrigger: {
          trigger: className,
          containerAnimation: containerAnimation,
          markers: false,
          scrub: 1,
          start: 'left 90%',
          end: 'left 100%'
        }
      })

      itemData.gsap = gs
      animationManager.add(itemData.className, gs, 'animation')
    })
  }
  // 创建纵向动画
  const verticalAnimation = async (itemData) => {
    return nextTick(() => {
      if (itemData?.formData?.animationTab !== 3 || !itemData?.className) return

      try {
        const className = `.${itemData.className}`
        let runStyle = itemData?.formData?.runStyle || {}

        if (!isTrueObject(runStyle)) return

        runStyle = _.cloneDeep(runStyle) || {}
        runStyle = transformStyle(runStyle)

        const toKey = runStyle.toKey || 'from'
        delete runStyle.toKey

        // 清理旧动画
        killAnimation(itemData)

        const gs = gsap[toKey](className, {
          ...runStyle,
          scrollTrigger: {
            trigger: className,
            scrub: 1,
            markers: false,
            start: 'top 100%',
            end: 'bottom 100%'
          }
        })

        itemData.gsap = gs
        animationManager.add(itemData.className, gs, 'animation')
      } catch (error) {
        console.error('纵向动画创建失败:', error)
      }
    })
  }
  // 自己控制的动画 (出现屏幕动画)
  const selfAnimation = async (itemData, styleKey = 'animationStyle') => {
    return nextTick(() => {
      try {
        if (itemData?.formData?.animationTab !== 1 || !itemData?.className) return

        // 清理旧动画
        if (itemData.gsap) {
          itemData.gsap.clear?.(true)
          itemData.gsap.kill?.(true)
          itemData.gsap = null
        }

        const className = `.${itemData.className}`
        const animation = itemData?.formData?.animation || []
        if (!animation.length) return

        const gs = gsap.timeline({
          onComplete: () => {
            console.log('动画完成:', className)
          },
          onReverseComplete: () => {
            console.log('动画反向完成:', className)
          }
        })

        animation.forEach((item) => {
          const animationStyle = item[styleKey] || {}
          if (!isTrueObject(animationStyle)) return

          const style = _.cloneDeep(animationStyle) || {}
          const toKey = style.toKey || 'from'

          const cleanedStyle = transformStyle(style)
          gs[toKey](className, cleanedStyle)
        })

        itemData.gsap = gs
        animationManager.add(`self-${itemData.className}`, gs, 'timeline')
      } catch (error) {
        console.error('自控动画创建失败:', error)
      }
    })
  }

  // 创建动画项
  const addAnimation = ($event) => {
    const { id, uuid } = getId()
    return {
      type: 'animation',
      uuid,
      level: 3,
      name: '模块',
      id,
      linkName: 'AN' + id,
      dialogVisible: false,
      animationVisible: false,
      className: 'animation' + id,
      animationRef: null,
      gsap: null,
      formData: {
        type: 'img',
        content: '',
        imgUrl: '',
        imgUrlName: '',
        swiperOptions: {
          imgList: [{ imgUrl: '', animationType: 'Swipe' }],
          autoplay: true,
          delay: 2000,
          infinite: true,
          controls: true,
          pagination: true,
          fluxIndex: true
        },
        keys: ['w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow'],
        style: {
          x: $event.offsetX,
          y: $event.offsetY,
          w: 200,
          h: 200
        },
        runKeys: ['toKey', 'ease', 'w', 'h', 'x', 'y', 'background'],
        runStyle: {},
        hoverClass: [],
        hoverKeys: [],
        hoverStyle: {},
        animation: [{
          animationKeys: ['duration', 'w', 'h', 'x', 'y', 'background', 'rotate', 'scaleX', 'scaleY', 'skewX', 'skewY', 'color', 'fontSize', 'fontWeight', 'textShadow', 'repeat', 'delay', 'yoyo', 'toKey', 'ease'],
          animationStyle: {}
        }],
        animationTab: 1,
        animationType: 'scroll'
      }
    }
  }

  // 跳转滚动到具体那页
  const scrollAnimation = (item, className) => {
    const scrollFunc = ScrollTrigger.getScrollFunc(window)
    const targetElem = document.querySelector(`.${className}`)

    if (!targetElem) return

    let y = targetElem
    const panels = item.children || []

    if (targetElem && item.horizontal && item?.tween) {
      const totalScroll = item.tween.scrollTrigger.end - item.tween.scrollTrigger.start
      const totalMovement = (panels.length - 1) * targetElem.offsetWidth
      y = Math.round(
        item.tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll
      )
    }

    gsap.to(window, {
      scrollTo: {
        y,
        autoKill: false
      },
      onStart: () => {
        if (scrollFunc) scrollFunc.cacheID = Math.random()
      },
      onUpdate: ScrollTrigger.update,
      duration: 1,
      ease: 'power2.inOut'
    })
  }

  // 单页无限滚动
  const infinitePanelScrollAnimation = (classNane = 'vertical') => {
    ScrollTrigger.refresh()

    let panels = []
    let clonedNode = null
    let maxScroll = 0
    let pageScrollTrigger = null
    let onResize = null
    let onScroll = null
    let panelTriggers = []

    const cleanup = () => {
      // 移除事件监听器
      if (onResize) {
        window.removeEventListener('resize', onResize)
      }
      if (onScroll) {
        window.removeEventListener('scroll', onScroll, { passive: false })
      }

      // 清理ScrollTrigger
      pageScrollTrigger?.kill?.()
      pageScrollTrigger = null

      // 清理所有panel的ScrollTrigger
      panelTriggers.forEach(st => {
        try {
          st?.kill?.()
        } catch (e) {
          console.warn('清理panel ScrollTrigger失败:', e)
        }
      })
      panelTriggers = []

      // 移除克隆的节点
      if (clonedNode && clonedNode.parentNode) {
        clonedNode.parentNode.removeChild(clonedNode)
        clonedNode = null
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

      // 清理所有动画
      killAllAnimation({ keepScrollPosition: true })
    }

    nextTick(() => {
      panels = gsap.utils.toArray(`.${classNane}`) || []
      if (panels.length <= 0) return

      // 克隆第一个节点（用于无限滚动效果）
      clonedNode = panels[0].cloneNode(true)
      clonedNode.setAttribute('data-cloned', 'true')
      panels[0].parentNode.appendChild(clonedNode)

      panels.forEach((panel) => {
        const trigger = ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          pin: true,
          pinSpacing: false
        })
        panelTriggers.push(trigger)
      })

      pageScrollTrigger = ScrollTrigger.create({
        snap(value) {
          const snappedValue = gsap.utils.snap(1 / panels.length, value)
          if (snappedValue <= 0) return 1.05 / maxScroll
          if (snappedValue >= 1) return maxScroll / (maxScroll + 1.05)
          return snappedValue
        }
      })

      onResize = createDebouncedFn(() => {
        maxScroll = ScrollTrigger.maxScroll(window) - 1
      }, 100, 'infinite-resize')

      onScroll = (e) => {
        const scroll = pageScrollTrigger.scroll()
        if (scroll > maxScroll) {
          pageScrollTrigger.scroll(1)
          e.preventDefault()
        } else if (scroll < 1) {
          pageScrollTrigger.scroll(maxScroll - 1)
          e.preventDefault()
        }
      }

      onResize()
      window.addEventListener('resize', onResize)
      window.addEventListener('scroll', onScroll, { passive: false })

      // 注意：不使用onBeforeUnmount，cleanup函数由外部调用
    })

    // 返回cleanup函数供外部调用
    return cleanup
  }

  // 单页缩放滚动
  const scalePanelScrollAnimation = (classNane = 'vertical') => {
    ScrollTrigger.refresh()

    let panels = []
    let tl = null
    let scrollTriggerInstance = null
    let layerRef = null
    let layerOptions = {}
    let panelOptions = {}

    const cleanup = () => {
      // 恢复layer原始样式
      if (layerRef && Object.keys(layerOptions).length) {
        Object.entries(layerOptions).forEach(([key, value]) => {
          layerRef.style[key] = value
        })
      }

      // 恢复panels原始样式
      panels.forEach((panel) => {
        const panelStyleId = panel.getAttribute('uuid')
        if (panelStyleId && panelOptions[panelStyleId]) {
          Object.entries(panelOptions[panelStyleId]).forEach(([key, value]) => {
            panel.style[key] = value
          })
        }
        // 清理transform
        panel.style.transform = ''
        panel.style.opacity = ''
      })

      // 清理ScrollTrigger
      scrollTriggerInstance?.kill?.()
      scrollTriggerInstance = null

      // 清理timeline
      if (tl) {
        tl.clear(true)
        tl.kill(true)
        tl = null
      }

      killAllAnimation({ keepScrollPosition: true })
    }

    nextTick(() => {
      const layerStyle = {
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }

      const panelStyle = {
        width: '100vw',
        height: '100vh',
        position: 'absolute'
      }

      panels = gsap.utils.toArray(`.${classNane}`) || []
      if (panels.length <= 1) return

      layerRef = document.querySelector('.animation-layer')
      if (!layerRef) return

      // 保存并应用layer样式
      layerOptions = getOriginalStyles(layerRef, layerStyle)
      Object.entries(layerStyle).forEach(([key, value]) => {
        layerRef.style[key] = value
      })

      // 保存并应用panels样式
      panels.forEach((panel) => {
        const uuid = panel.getAttribute('uuid')
        if (uuid) {
          panelOptions[uuid] = getOriginalStyles(panel, panelStyle)
          Object.entries(panelStyle).forEach(([key, value]) => {
            panel.style[key] = value
          })
        }
      })

      tl = gsap.timeline()

      const createAnimatedTimeline = (selectors, scrollTriggerConfig) => {
        selectors.forEach((selector, index) => {
          const props = {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            force3D: true
          }

          if (index % 2 === 0) {
            props.xPercent = 100
          } else {
            props.yPercent = 100
          }

          tl.from(selector, props)
        })

        scrollTriggerInstance = ScrollTrigger.create({
          ...scrollTriggerConfig,
          animation: tl
        })
      }

      const list = panels.slice(1)
      createAnimatedTimeline(list, {
        trigger: '.animation-layer',
        start: 'top top',
        end: '+=' + window.innerWidth,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1
      })

      // 注意：不使用onBeforeUnmount，cleanup函数由外部调用
    })

    // 返回cleanup函数供外部调用
    return cleanup
  }

  // 横纵向页面动画
  const initHorizontalAnimation = (pageList) => {
    ScrollTrigger.refresh()

    let allTweens = []
    let tweenTriggers = []

    const cleanup = () => {
      // 清理所有tweens
      allTweens.forEach(tween => {
        try {
          if (tween) {
            tween.clear(true)
            tween.kill(true)

            // 清理关联的ScrollTrigger
            if (tween.scrollTrigger) {
              tween.scrollTrigger.kill()
            }
          }
        } catch (e) {
          console.warn('清理tween失败:', e)
        }
      })
      allTweens = []

      // 清理tweenTriggers
      tweenTriggers.forEach(st => {
        try {
          st?.kill?.()
        } catch (e) {
          console.warn('清理ScrollTrigger失败:', e)
        }
      })
      tweenTriggers = []

      killAllAnimation({ keepScrollPosition: true })
    }

    nextTick(() => {
      pageList.forEach((item) => {
        if (!item.horizontal) return

        const container = document.querySelector(`.${item.className}`)
        if (!container) return

        const panels = container.querySelectorAll('.panel')
        if (!panels.length) return

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

        item.tween = tween
        allTweens.push(tween)
        tweenTriggers.push(tween.scrollTrigger)
        animationManager.add(`horizontal-${item.className}`, tween, 'animation')
      })

      // 注意：不使用onBeforeUnmount，cleanup函数由外部调用
    })

    // 返回cleanup函数供外部调用
    return cleanup
  }


  // 自定义滚动
  const customizeAnimation = (pageList = [], classNane = 'vertical') => {
    ScrollTrigger.refresh()

    let newPanels = []
    let tl = null
    let scrollTriggerInstance = null
    let layerRef = null
    let layerOptions = {}
    let panelOptions = {}

    const cleanup = () => {
      // 恢复layer原始样式
      if (layerRef && Object.keys(layerOptions).length) {
        Object.entries(layerOptions).forEach(([key, value]) => {
          layerRef.style[key] = value
        })
      }

      // 恢复panels原始样式
      newPanels.forEach((panel) => {
        const panelStyleId = panel.el.getAttribute('uuid')
        if (panelStyleId && panelOptions[panelStyleId]) {
          Object.entries(panelOptions[panelStyleId]).forEach(([key, value]) => {
            panel.el.style[key] = value
          })
        }
        // 清理transform
        panel.el.style.transform = ''
        panel.el.style.opacity = ''
      })

      // 清理ScrollTrigger
      scrollTriggerInstance?.kill?.()
      scrollTriggerInstance = null

      // 清理timeline
      if (tl) {
        tl.clear(true)
        tl.kill(true)
        tl = null
      }

      killAllAnimation({ keepScrollPosition: true })
    }

    nextTick(() => {
      const layerStyle = {
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }

      const panelStyle = {
        width: '100vw',
        height: '100vh',
        position: 'absolute'
      }

      const panels = gsap.utils.toArray(`.${classNane}`) || []
      if (panels.length <= 1) return

      const panelMap = new Map()
      pageList.forEach(item => {
        if (item.uuid) panelMap.set(item.uuid, item)
      })

      panels.forEach((panel) => {
        const uuid = panel.getAttribute('uuid')
        const item = panelMap.get(uuid)
        if (item) {
          newPanels.push({
            ...item,
            el: panel
          })
        }
      })

      layerRef = document.querySelector('.animation-layer')
      if (!layerRef) return

      // 保存并应用layer样式
      layerOptions = getOriginalStyles(layerRef, layerStyle)
      Object.entries(layerStyle).forEach(([key, value]) => {
        layerRef.style[key] = value
      })

      // 保存并应用panels样式
      newPanels.forEach((panel) => {
        const uuid = panel.el.getAttribute('uuid')
        if (uuid) {
          panelOptions[uuid] = getOriginalStyles(panel.el, panelStyle)
          Object.entries(panelStyle).forEach(([key, value]) => {
            panel.el.style[key] = value
          })
        }
      })

      tl = gsap.timeline()

      const createAnimatedTimeline = (selectors, scrollTriggerConfig) => {
        selectors.forEach((selector) => {
          const animationStyle = selector?.formData?.animationStyle || {}
          const props = {
            ...animationStyle,
            opacity: 0,
            duration: animationStyle.duration || 1,
            force3D: true
          }

          const cleanedProps = Object.fromEntries(
            Object.entries(props).filter(([key, value]) => value !== undefined)
          )

          tl.from(selector.el, cleanedProps)
        })

        scrollTriggerInstance = ScrollTrigger.create({
          ...scrollTriggerConfig,
          animation: tl
        })
      }

      const list = newPanels.slice(1)
      createAnimatedTimeline(list, {
        trigger: '.animation-layer',
        start: 'top top',
        end: '+=' + window.innerWidth,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1
      })

      // 注意：不使用onBeforeUnmount，cleanup函数由外部调用
    })

    // 返回cleanup函数供外部调用
    return cleanup
  }

  return {
    pageRef,
    panelRef,
    scrollTween,
    addAnimation,
    initAnimation,
    killAnimation,
    killAllAnimation,
    cleanupPageAnimations,
    resetAnimationState,
    pauseAnimation,
    playAnimation,
    horizontalAnimation,
    verticalAnimation,
    selfAnimation,
    scrollAnimation,
    initHorizontalAnimation,
    infinitePanelScrollAnimation,
    scalePanelScrollAnimation,
    customizeAnimation
  }
}
// 监听出现窗口
export const UseInViewportMiddle = ({
  threshold = 0.5,
  data = {}
}) => {
  const { selfAnimation } = UseAnimation()
  const isVisible = ref(false)
  let observer = null
  const targetRef = ref(null)

  const callback = (entries) => {
    const entry = entries[0]
    if (!entry) return

    isVisible.value = entry.intersectionRatio >= threshold

    if (isVisible.value) {
      selfAnimation(data)
    } else {
      data?.gsap?.reverse?.()
    }
  }

  const startObserving = (target) => {
    if (!target) return

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: '0px',
        threshold: [0, threshold, 1]
      })
      observer.observe(target)
    } else {
      console.warn('IntersectionObserver is not supported in this browser.')
    }
  }

  const stopObserving = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(() => {
    nextTick(() => {
      const targetElement = targetRef.value
      if (targetElement) {
        startObserving(targetElement)
      } else {
        console.error('Target element not found.')
      }
    })
  })

  onBeforeUnmount(() => {
    stopObserving()
  })

  return {
    targetRef,
    isVisible
  }
}

export const UserHoverAnimation = () => {
  const hoverStyle = ref({})

  const handleMouseEnter = (itemData) => {
    if (!itemData?.formData?.hoverStyle) return

    const sty = computedStyle(
      itemData.formData.hoverStyle,
      itemData.formData.hoverKeys
    )

    const duration = itemData.formData.hoverStyle.duration || 0.3
    sty.transition = `all ${duration}s ease`

    hoverStyle.value = sty
  }

  const handleMouseLeave = () => {
    hoverStyle.value = {}
  }

  return {
    hoverStyle,
    handleMouseEnter,
    handleMouseLeave
  }
}




