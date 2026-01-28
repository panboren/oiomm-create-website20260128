<!--
 * @ description:
 * @ author: panboren
 * @ created_at: 2024/4/21 22:36
 * @ QQ: 3248874747
-->
<template>
    <vue-draggable-resizable
        @dblclick.stop
        :key="itemData.id"
        :x="itemData.x"  :y="itemData.y"  :w="itemData.width" :h="itemData.height"
        @dragStop="onDragstop" @resizeStop="onResizestop"
        @activated="onActivated(itemData)"  @deactivated="onDeactivated"
        :parent="true" >
      <div class="list-item"  :class="[itemData.className]">
        <el-icon class="list-item-edit" @click.stop="edit(itemData)"><Edit /></el-icon>
        <img  v-if="itemData?.formData?.type==='img'" :src="itemData.formData.imgUrl" class="list-item-img" />
        <div v-if="itemData?.formData?.type==='text'" class="list-item-img">{{itemData.formData.content}}</div>
        <form-dialog v-if="itemData.dialogVisible" v-model:visibel="itemData.dialogVisible" v-model:data="itemData.formData"/>
      </div>
    </vue-draggable-resizable>
</template>
<script setup lang="ts">
import VueDraggableResizable from 'vue-draggable-resizable'
import {Edit} from '@element-plus/icons-vue'
import gsap from 'gsap/dist/gsap.js'
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
  scrollTween: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const emit = defineEmits(['success'])

let activeItem = ref(null) // 激活
let editItem = ref({}) // 编辑数据

// 编辑
const edit = (item)=>{
  editItem.value = item
  editItem.value.dialogVisible = true
}

// 激活
const onActivated = (item)=>{
  activeItem.value = item
}
// 取消激活
const onDeactivated =  (item)=>{
  activeItem.value = null
}
// 拖拽停止
const onDragstop = (x,y)=>{
  props.itemData.x = x
  props.itemData.y = y
}
// 缩放停止
const onResizestop = (x,y,width,height)=>{
  if(activeItem.value) {
    props.itemData.x = x
    props.itemData.y = y
    props.itemData.width = width
    props.itemData.height = height
  }
}

let horizontalAnimation = ()=>{
  let className = `.${props.itemData?.className}`
  if(!props.itemData?.className) {
    return
  }
  gsap.to(className, {
    rotation: 360,
    ease: 'power1.out',
    duration: 2,
    scrollTrigger: {
      trigger: className,
      containerAnimation: props.scrollTween,
      // pin: true,
      markers: false,
      scrub: 1,
      start: 'left 80%',
      end: 'left 30%'
    }
  })

}

let verticalAnimation = ()=> {
  let className = `.${props.itemData?.className}`
  if(!props.itemData?.className) {
    return
  }
  gsap.to(className, {
    x: 200,
    y: 100,
    rotation: 46,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: className,
      // containerAnimation: scrollTween,
      scrub: 1,
      markers: true,
      start: 'top 80%',
      end: 'bottom 30%'
    }
  })
}

onMounted(()=>{
  // if(props.data.horizontal) {
  //   horizontalAnimation()
  // }else{
  //   verticalAnimation()
  // }
})

</script>
<style scoped lang="scss">
@import "vue-draggable-resizable/style.css";

.list-item{
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  .list-item-edit{
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .list-item-img{
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>