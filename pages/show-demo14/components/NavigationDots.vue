<template>
  <div class="navigation-dots-container">
    <div
        v-for="(id, index) in sections"
        :key="id"
        :class="['dot', { active: activeSection === index }]"
        @click="navigateToSection(id, index)"
    >
      <div class="dot-inner"></div>
      <span class="tooltip">{{ sectionNames?.[index] || (index + 1) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Props {
  sections: string[]
  sectionNames?: string[]
}

const props = defineProps<Props>()
const emit = defineEmits(['navigate'])
const activeSection = ref(0)

onMounted(() => {
  // 使用防抖的滚动监听
  const debouncedUpdate = debounce(updateActiveSection, 100)
  window.addEventListener('scroll', debouncedUpdate)
  // 初始化一次
  updateActiveSection()
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', debouncedUpdate)
  })
})

// 防抖函数
const debounce = (fn: Function, delay: number) => {
  let timer: number | null = null
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay) as unknown as number
  }
}

const navigateToSection = (id: string, index: number) => {
  activeSection.value = index
  emit('navigate', id)
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2

  props.sections.forEach((id, index) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop
      const height = element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
        activeSection.value = index
      }
    }
  })
}


</script>

<style scoped>
.navigation-dots-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot-inner {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: scale(1.3);
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
}

.dot.active {
  background: rgba(102, 126, 234, 0.8);
  border-color: #667eea;
  transform: scale(1.2);
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.6);
}

.dot.active .dot-inner {
  opacity: 1;
  transform: scale(1);
}

.tooltip {
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%) translateX(10px);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  font-weight: 500;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.dot:hover .tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}
</style>
