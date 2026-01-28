<template>
   <div class="list-tool unselectable" @click.stop @mousedown.stop>
     <div class="list-item" style="justify-content:end;background: linear-gradient(to bottom,rgba(224,241,241,0.6),rgba(206, 236, 245, 1))">
       <el-icon style="margin-right: 5px" @click="onMouseDown"><Close /></el-icon>
     </div>
      <div class="list-item" @click.stop="select(item)" v-for="(item,index) in list" :key="item.id+'_'+index">
          {{item.name}} <i v-if="item.icon" :class="['iconfont  icon',item.icon]"></i>
      </div>
   </div>
</template>
<script setup lang="ts">
import {
  Close
} from '@element-plus/icons-vue'
import {UseAnimation} from '~~/pages/edit/hooks'
import _ from 'lodash'
import {scrollToLink, scrollToPage} from '../../utils'
const props = defineProps({
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
  panelItem:{
    type: Object,
    default: () => {
      return {}
    }
  },
  scrollTween: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
let visibleMenu = defineModel()

let {
  playAnimation,
  killAnimation,
  pauseAnimation,
  scrollAnimation
} = UseAnimation()
// let horizontalAnimation = async() => {
//   kill()
//   await nextTick()
//   let className = `.${props.itemData?.className}`
//   if (!props.itemData?.className) {
//     return
//   }
//   let runStyle = props.itemData?.formData?.runStyle || {}
//   runStyle.w ? runStyle.width = runStyle.w : null
//   runStyle.h ? runStyle.height = runStyle.h : null
//   let toKey = runStyle['toKey'] || 'form'
//   let gs = gsap[toKey](className, {
//     ...runStyle,
//     scrollTrigger: {
//       trigger: className,
//       containerAnimation: props.scrollTween,
//       // pin: true,
//       markers: false,
//       scrub: 1,
//       start: 'left 80%',
//       end: 'left 30%'
//     }
//   })
//   props.itemData.gsap = gs
// }
//
// let verticalAnimation = async () => {
//   kill()
//   await nextTick()
//   let className = `.${props.itemData?.className}`
//   if (!props.itemData?.className) {
//     return
//   }
//   console.log(15611, className)
//   console.log(props.itemData)
//   let runStyle = props.itemData?.formData?.runStyle || {}
//   runStyle.w ? runStyle.width = runStyle.w : null
//   runStyle.h ? runStyle.height = runStyle.h : null
//
//   let toKey = runStyle['toKey'] || 'form'
//
//   let gs = gsap[toKey](className, {
//     ...runStyle,
//     scrollTrigger: {
//       trigger: className,
//       // containerAnimation: scrollTween,
//       scrub: 1,
//       markers: true,
//       start: 'top 100%',
//       end: 'bottom 10%'
//       // start: 'top 80%',
//       // end: 'bottom 30%'
//     }
//   })
//   props.itemData.gsap = gs
// }
// let clear = (gsap) => {
//   console.log(147, gsap)
//   gsap?.kill(true)
// }
// 编辑
const edit = () => {
  props.itemData.dialogVisible = true
}

const play = () => {
  playAnimation(props.panelItem,props.itemData,props.scrollTween)
  // if(props.panelItem.horizontal) {
  //   horizontalAnimation(props.itemData,props.scrollTween)
  // }else{
  //   verticalAnimation(props.itemData)
  // }
}
// 停止动画
const kill = () => {
  pauseAnimation(props.itemData)
  // killAnimation(props.itemData)
  // props.itemData?.gsap?.kill && props.itemData?.gsap?.kill(true)
  // props.itemData?.gsap?.scrollTrigger?.kill && props.itemData?.gsap.scrollTrigger.kill()
  // props.itemData.gsap = null
}
//  设置动画
const setAnimation = () => {
  props.itemData.animationVisible = true

  if(Object.keys(props.itemData.formData?.runStyle).length <= 0) {
    props.itemData.formData.runStyle = _.cloneDeep(props.itemData.formData?.style)
    props.itemData.formData.runKeys = _.cloneDeep(props.itemData.formData?.keys)
  }
  // let className = `.${props.itemData?.className}`
  // gsap.set(className, { x: 100, y: 50, opacity: 0.3 })
}

// 移除
const remove = () => {
  killAnimation(props.itemData)
  props.panelItem?.children?.forEach((item,index) => {
    if(props.itemData.uuid === item.uuid) {
      props.panelItem?.children?.splice?.(index, 1)
    }
  })
}
let fixed = () => {
  props.itemData.isFixed = !props.itemData.isFixed
  props.itemData.formData.style.zIndex = 99
}

let goLink = () => {
  let linkName = props?.itemData?.formData?.style?.linkName
  let link = props?.itemData?.formData?.style?.link


  if(linkName) {
    scrollAnimation(props.data,linkName)
    // scrollToPage(linkName)
    return
  }
  if(link) {
    scrollToLink(link)
  }
}
let list = ref([
  {
    id: 1,
    name: '编辑',
    type: 'edit',
    fn: edit
  },
  {
    id: 2,
    name: '删除',
    type: 'remove',
    fn: remove
  },
  {
    id: 6,
    name: '悬浮',
    type: 'fixed',
    fn: fixed,
    icon: props.itemData.isFixed ? 'icon-icon-test' : ''
  },
  {
    id: 7,
    name: '跳转测试',
    type: 'link',
    fn: goLink
  },
  // {
  //   id: 3,
  //   name: '动画预览',
  //   type: 'play',
  //   fn: play
  // },
  // {
  //   id: 4,
  //   name: '停止动画',
  //   type: 'kill',
  //   fn: kill
  // },
  {
    id: 5,
    name: '设置动画',
    type: 'setAnimation',
    fn: setAnimation
  }
])
let select = (item) => {
  item.fn()
  visibleMenu.value = false
}


let onMouseDown = () => {
  visibleMenu.value = false
}
document.body.addEventListener('mousedown', onMouseDown, false)

onUnmounted(() => {
  document.body.removeEventListener('mousedown', onMouseDown, false)
})
</script>
<style scoped lang="scss">
.list-tool{
  position: absolute;
  z-index: 999999999999;
  width: 150px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, .12);
  &.unselectable {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* Internet Explorer/Edge */
    user-select: none;         /* Non-prefixed version, currently */
  }
  .list-item{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    line-height: 30px;
    background: rgba(206, 236, 245, 0.26);
    margin-bottom: 10px;
    cursor: pointer;
    color: #626262;
    .icon{
      display: inline-block;
      margin-left: 10px;
    }

    &:hover{
      background: rgba(206, 236, 245, 1);
      color: #409EFF;
    }
  }
}

</style>