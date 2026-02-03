import { ref } from 'vue'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export const useScrollController = (sectionIds: string[]) => {
  const currentSection = ref(0)
  const scrollProgress = ref(0)

  // 滚动到指定部分
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: element.offsetTop - 80, autoKill: false },
        ease: 'power3.inOut'
      })

      // 更新当前部分索引
      const index = sectionIds.indexOf(id)
      if (index !== -1) {
        currentSection.value = index
      }
    }
  }

  // 滚动到下一个部分
  const scrollToNext = () => {
    const currentIndex = currentSection.value
    const nextIndex = (currentIndex + 1) % sectionIds.length
    scrollToSection(sectionIds[nextIndex])
  }

  // 滚动到上一个部分
  const scrollToPrev = () => {
    const currentIndex = currentSection.value
    const prevIndex = (currentIndex - 1 + sectionIds.length) % sectionIds.length
    scrollToSection(sectionIds[prevIndex])
  }

  // 更新滚动进度（使用 requestAnimationFrame 优化）
  let ticking = false
  const updateScrollProgress = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        scrollProgress.value = docHeight > 0 ? scrollTop / docHeight : 0
        ticking = false
      })
      ticking = true
    }
  }

  // 平滑滚动到顶部
  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
      ease: 'power2.inOut'
    })
  }

  return {
    currentSection,
    scrollProgress,
    scrollToSection,
    scrollToNext,
    scrollToPrev,
    updateScrollProgress,
    scrollToTop
  }
}
