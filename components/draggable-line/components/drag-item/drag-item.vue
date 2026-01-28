<template>
  <div @click="goLink"
       @mouseenter="handleMouseEnter(itemData)"
       @mouseleave="handleMouseLeave"
       class="list-wrap unselectable"
       v-element-visibility="targetOptions"
       :class="itemData.formData?.hoverClass">
    <div class="list-item unselectable" :style="{...styleOptions, ...hoverStyle}"
         :class="['draggable-item',itemData.className,itemData.linkName]">
      <el-image v-if="itemData?.formData?.type==='img'"
                class="list-item-img"
                :src="itemData.formData.imgUrl || entryUrl"
                :lazy="itemData.animationVisible? itemData.formData?.runStyle.lazy : itemData.formData.style.lazy"
                :fit="itemData.animationVisible? itemData.formData?.runStyle.fill  || 'fill' : itemData.formData.style.fill  || 'fill'"/>
      <div v-else-if="itemData?.formData?.type==='text'" class="list-item-img">{{ itemData.formData.content }}</div>
      <div class="swiper-box" v-else-if="itemData?.formData?.type==='swiper'">
        <div class="swiper-box" v-if="!itemData.dialogVisible">
          <Swiper
              :height="itemData.animationVisible? itemData.formData?.runStyle.h : itemData.formData.style.h"
              :width="itemData.animationVisible? itemData.formData?.runStyle.w : itemData.formData.style.w"
              :options="itemData?.formData?.swiperOptions"
              :data="itemData?.formData?.swiperOptions?.imgList"
          ></Swiper>
        </div>
      </div>
      <pb-video
          :src="itemData?.formData?.videoUrl"
          :autoplay="itemData?.formData?.autoplay"
          :controls="itemData?.formData?.controls"
          :loop="itemData?.formData?.infinite"
          :fullScreen="itemData?.formData?.fullScreen"
          :width="itemData?.formData?.width"
          :height="itemData?.formData?.height"
          v-else-if="itemData?.formData?.type==='video'"
      >
      </pb-video>

    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">

// import { useElementVisibility } from '@vueuse/core'
import {computedStyle} from '~/components/form-dialog/config'
import {UseAnimation, UserHoverAnimation} from '~/pages/edit/hooks'
import {isTrueObject, scrollToLink} from '../../../../utils'

let {scrollAnimation, selfAnimation,playAnimation} = UseAnimation()
let props = defineProps({
  itemData: {
    type: Object,
    default: () => {
      return {}
    }
  },
  data: {
    type: Object,
    default: () => {
      return {}
    }
  },
  disable: {
    type: Boolean,
    default: true
  },
  scrollTween: {
    type: Object,
    default: () => {
      return {}
    }
  },
  panelItem: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
let {hoverStyle, handleMouseEnter, handleMouseLeave} = UserHoverAnimation()
const styleOptions = computed(() => {
  if (props.itemData.animationVisible) {
    let runStyle = computedStyle(props.itemData.formData?.runStyle, props.itemData.formData?.runKeys)
    return runStyle
  }
  let styleOptions = computedStyle(props.itemData.formData?.style, props.itemData.formData?.keys)
  return styleOptions
})
import entryUrl from '~/components/draggable-line/entry.png'
import {vElementVisibility} from '@vueuse/components'
import Swiper from '~/components/swiper/swiper.vue'

const isVisible = ref(false)
let onElementVisibility = (state) => {
  isVisible.value = state
  if (state) {
    selfAnimation(props.itemData)
  } else {
    props.itemData?.gsap && props.itemData?.gsap?.resume?.()
  }
}
let targetOptions = ref([onElementVisibility, {
  threshold: 0.01 // 当目标元素的可见性比例达到或超过这个阈值时，回调函数会被调用
}])


let goLink = () => {
  if (props.disable) {
    return
  }
  let linkName = props?.itemData?.formData?.style?.linkName
  let link = props?.itemData?.formData?.style?.link
  if (linkName) {
    scrollAnimation(props.data, linkName)
    // scrollToPage(linkName)
    return
  }
  if (link) {
    scrollToLink(link)
  }
}

onMounted(()=>{
  nextTick(()=>{
    console.log(88895, props.panelItem)
    console.log(8896,  props.itemData)
    console.log(8897,  props.scrollTween)
    if(props.itemData.formData.animationTab === 3) {
      playAnimation(props.panelItem,props.itemData,props.scrollTween)
    }
  })
})


</script>
<style scoped lang="scss">
.list-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.list-item {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
  box-sizing: border-box;
  cursor: pointer;

  &.unselectable {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
  }

  //.list-tool {
  //  display: none;
  //  position: absolute;
  //  left: 50%;
  //  top: 0;
  //  width: 100%;
  //  padding: 10px;
  //  box-sizing: border-box;
  //  transform: translateX(-50%);
  //  background: rgba(0, 0, 0, 0.5);
  //  justify-content: center;
  //  align-items: center;
  //  flex-wrap: wrap;
  //}
  //&:hover {
  //  .list-tool {
  //    display: flex;
  //  }
  //}

  .list-item-img {
    width: 100%;
    height: 100%;
    display: block;

  }
}

.swiper-box {
  width: 100%;
  height: 100%;
}
</style>