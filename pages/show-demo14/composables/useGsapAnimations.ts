import { ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGsapAnimations = () => {
  // 防抖函数（使用 NodeJS.Timeout 类型）
  const createDebouncedFn = (fn: (...args: any[]) => void, delay: number) => {
    let timer: NodeJS.Timeout | null = null
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
    if (keepScrollPosition) {
      window.scrollTo(0, scrollPos)
    }
  }

  // 垂直滚动动画模式
  const verticalAnimation = async (selector: string, runStyle: Record<string, unknown>) => {
    try {
      if (!selector || !runStyle) return

      const toKey = (runStyle.toKey as string) || 'from'
      delete runStyle.toKey

      // 创建滚动触发动画
      ;(gsap as any)[toKey](selector, {
        ...runStyle,
        scrollTrigger: {
          trigger: selector,
          scrub: 1,
          markers: false,
          start: 'top 80%',
          end: 'bottom 20%'
        }
      })
    } catch (error) {
      console.error('纵向动画创建失败:', error)
    }
  }

  // 创建页面切换动画
  const createPageTransition = (fromElement: Element, toElement: Element) => {
    return gsap.timeline()
      .to(fromElement, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: 'power2.inOut'
      })
      .fromTo(toElement,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.inOut' },
        '-=0.4'
      )
  }

  return {
    createDebouncedFn,
    killAllAnimation,
    verticalAnimation,
    createPageTransition
  }
}
