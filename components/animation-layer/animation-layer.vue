<template>
  <div class='animation-layer'>
<!--    <test-nav :pageList="pageList" />-->
    <div v-for="(item,index) in pageList"
         :key="item.id+'_'+index+item.uuid" :uuid="item.uuid"
         :class="[item.horizontal ? 'horizontal' : 'vertical']"
         >
         <div class="panels-container"
           :uuid="item.uuid"
            :class="[item.className]"
           :style="{ 'width': `${(item.children?.length || 1) * 100}vw`}">
            <div  v-for="(panelItem,panelIndex) in item?.children || []"
                  :key="panelItem.id+'_'+panelIndex+panelItem.uuid"
                  :class="['panel',panelItem.className,panelItem.linkName]"
                  :style="{...panelItem.style,background: panelItem?.formData?.animationStyle?.bgUrl?  'url(' + panelItem?.formData?.animationStyle?.bgUrl + ')' :   panelItem?.formData?.animationStyle?.background || item?.formData?.animationStyle?.background || panelItem?.style?.backgroundImage,'background-size': 'cover','background-repeat': 'no-repeat','object-fit': 'cover'}"
                  :uuid="panelItem.uuid"
                  @dblclick.stop="($event)=>add($event,panelItem)"
                  >

<!--              :style="{...item.style,backgroundImage:item?.formData?.animationStyle?.background ||item?.style?.backgroundImage}"-->
              <draggable-line
                  :disable="disable"
                  v-for="(animationItem,animationIndex) in panelItem?.children || []"
                  :key="animationItem.id+'_'+animationIndex+animationItem.uuid"
                  :itemData="animationItem"
                  :panelItem="panelItem"
                  :data="item"
                  :scrollTween="item.tween"
              />
            </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {UseAnimation} from '~~/pages/edit/hooks'
import ScrollTrigger from 'gsap/ScrollTrigger'
definePageMeta({
  layout: false
})
import {onMounted, onBeforeUnmount, watch} from 'vue'
// import TestNav from '~/components/test-nav/test-nav.vue'
let animation = UseAnimation()
// { addAnimation,initHorizontalAnimation}
let props = defineProps({
  pageList: {
    type: Array,
    default() {
      return []
    }
  },
  disable:{
    type: Boolean,
    default() {
      return false
    }
  }
})
// 创建
const add = ($event, data) => {
  if(!props.disable) {
    return
  }
  let item = animation.addAnimation($event)
  item.pid = data.id
  item.horizontal = data.horizontal
  if (data.children && data.children.length > 0) {
    return data.children.push(item)
  }
  data.children = [item]
}

// 当前执行的动画类型
let currentAnimationType = ref(null)
let currentCleanup = null

// 清理所有动画
const cleanupAllAnimations = () => {
  try {
    // 先调用当前动画的cleanup函数
    if (currentCleanup && typeof currentCleanup === 'function') {
      currentCleanup()
      currentCleanup = null
    }

    // 清理所有克隆的节点
    const clonedNodes = document.querySelectorAll('[data-cloned="true"]')
    clonedNodes.forEach(node => {
      if (node.parentNode) {
        node.parentNode.removeChild(node)
      }
    })

    // 再执行全局清理（不刷新ScrollTrigger，避免引用错误）
    animation.killAllAnimation({ keepScrollPosition: true })
    currentAnimationType.value = null
  } catch (error) {
    console.error('清理动画失败:', error)
  }
}

// 执行动画
const executeAnimation = async (animationType) => {
  // 如果动画类型相同，无需重新执行
  if (currentAnimationType.value === animationType) {
    return
  }

  console.log(`切换动画: ${currentAnimationType.value} → ${animationType}`)

  // 先清理之前的动画
  cleanupAllAnimations()

  // 等待DOM更新和清理完成
  await nextTick()
  await new Promise(resolve => setTimeout(resolve, 100))

  // 执行新动画
  try {
    let cleanup = null

    if (animationType === 'customizeAnimation') {
      cleanup = animation[animationType](props.pageList)
    } else if (animationType === 'initHorizontalAnimation') {
      cleanup = animation[animationType](props.pageList)
    } else if (animationType === 'infinitePanelScrollAnimation' ||
               animationType === 'scalePanelScrollAnimation') {
      cleanup = animation[animationType]()
    }

    // 保存cleanup函数
    currentCleanup = cleanup
    currentAnimationType.value = animationType

    console.log(`动画 ${animationType} 执行完成`)
  } catch (error) {
    console.error(`执行动画 ${animationType} 失败:`, error)
  }
}

onMounted(async function () {
  let [item = {}] = props.pageList || []

  console.log('pageList', props.pageList)

  if (!item.templateView) {
    return
  }

  await executeAnimation(item.templateView)
})

// 监听 templateView 变化，自动切换动画
watch(() => props.pageList?.[0]?.templateView, async (newView, oldView) => {
  if (newView && newView !== oldView) {
    await executeAnimation(newView)
  }
}, { immediate: false })

// 组件卸载时清理动画
onBeforeUnmount(() => {
  cleanupAllAnimations()
})
</script>
<style scoped lang="scss">
/* Most of these styles could be removed but are for the demo to look better */

html,
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
}

.panels-container {
  position: relative;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding: 0;
  //overflow: hidden;
}
//.animation-layer{
//  //position: relative;
//  width: 100vw;
//  height: 100vh;
//  position: relative;
//  overflow: hidden;
//}

.panels-container .panel {
  position: relative;
  width: 100vw;
  height: 100vh;
  //overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: block;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
//.is-absolute{
//  position: absolute;
//  width: 100vw;
//  height: 100vh;
//}
</style>>