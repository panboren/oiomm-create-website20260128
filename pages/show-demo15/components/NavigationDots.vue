<template>
  <div class="navigation-dots-container">
    <div
        v-for="(id, index) in sections"
        :key="id"
        :class="['dot', { active: activeSection === index }]"
        @click="navigateToSection(id, index)"
    >
      <span class="tooltip">{{ index + 1 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Props {
  sections: string[]
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
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.dot:hover {
  background: white;
  transform: scale(1.3);
}

.dot.active {
  background: white;
  border-color: #667eea;
  transform: scale(1.2);
}

.tooltip {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.dot:hover .tooltip {
  opacity: 1;
}
</style>
