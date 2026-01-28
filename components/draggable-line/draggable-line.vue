<!--
 * @ description:
 * @ author: panboren
 * @ created_at: 2024/4/21 22:36
 * @ QQ: 3248874747
-->
<template>
  <!--  :draggable="!isAnimation"
        :resizable="!isAnimation"
        :active="!isAnimation"
  -->
  <vue-draggable-resizable
      :draggable="itemData.isFixed ? false : disable"
      :resizable="itemData.isFixed ? false : disable"
      :disableUserSelect="itemData.isFixed ? false : disable"
      :disable="disable"
      @contextmenu.prevent.stop="onContextMenu"
      :uuid="itemData.uuid"
      :isConflictCheck="false"
      :snap="true"
      :snapTolerance="2"
      @refLineParams="getRefLineParams"
      @dblclick.stop
      :key="itemData.id"
      :x="itemData.animationVisible? itemData.formData?.runStyle.x : itemData.formData.style.x"
      :y="itemData.animationVisible? itemData.formData?.runStyle.y : itemData.formData.style.y"
      :w="itemData.animationVisible? itemData.formData?.runStyle.w : itemData.formData.style.w"
      :h="itemData.animationVisible? itemData.formData?.runStyle.h : itemData.formData.style.h"
      :style="{zIndex: itemData.formData.style.zIndex > leave ? itemData.formData.style.zIndex : leave }"
      @dragstop="onDragstop"
      @resizestop="onResizestop"
      @activated="onActivated(itemData)"
      @deactivated="onDeactivated"
      :isFixed="itemData.isFixed"
     >
<!--     :parent="itemData.animationVisible ? false: true"  -->
    <DragItem :disable="disable"
              :itemData="itemData"
              :data="data"
              :panelItem="panelItem"
              :scrollTween="scrollTween">
      <form-dialog v-if="itemData.dialogVisible" v-model:visibel="itemData.dialogVisible"
                   v-model:data="itemData.formData" :itemData="itemData"/>
      <animation-dialog
          v-if="itemData.animationVisible" v-model:visibel="itemData.animationVisible"
          v-model:data="itemData.formData" :itemData="itemData"
          :panelItem="panelItem"
          :scrollTween="scrollTween"
      />
      <context-menu
          :itemData="itemData"
          :data="data"
          :panelItem="panelItem"
          :scrollTween="scrollTween"
          v-if="visibleMenu"
          v-model="visibleMenu"
          :style="{left:ops.left+'px',top:ops.top+'px', position: 'absolute'}">
      </context-menu>
    </DragItem>
  </vue-draggable-resizable>
  <!--辅助线END-->
  <LineItem :vLine="vLine" :hLine="hLine"></LineItem>
</template>
<script setup lang="ts">
import VueDraggableResizable from '../drag-line/components/vue-draggable-resizable.vue'
import '../drag-line/components/vue-draggable-resizable.css'
import DragItem from '~/components/draggable-line/components/drag-item/drag-item.vue'
import LineItem from '~/components/draggable-line/components/line-item/line.vue'
import {UseLine} from '~/components/draggable-line/components/line-item/hook'

// isConflictCheck 定义组件是否开启冲突检测。
// snap 定义组件是否开启元素对齐。
// snapTolerance 当调用snap时，定义组件与元素之间的对齐距离，以像素(px)为单位。
const props = defineProps({
  disable: {
    type: Boolean,
    default: true
  },
  itemData: {
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
let {vLine, hLine, getRefLineParams} = UseLine()
let activeItem = ref(null) // 激活
let leave = ref(0)

// 激活
const onActivated = (item) => {
  activeItem.value = item
  leave.value = 9
}
// 取消激活
const onDeactivated = (item) => {
  activeItem.value = null
  leave.value = 0
}
// 拖拽停止
const onDragstop = (x, y) => {
  props.itemData.formData.style.x = x
  props.itemData.formData.style.y = y
}
// 缩放停止
const onResizestop = (x, y, width, height) => {
  if (activeItem.value) {
    props.itemData.formData.style.x = x
    props.itemData.formData.style.y = y
    props.itemData.formData.style.w = width
    props.itemData.formData.style.h = height
  }
}

let ops = ref({})
let visibleMenu = ref(false)
let onContextMenu = ($event) => {
  if (!props.disable) {
    return
  }
  if(!activeItem.value) {
    return
  }
  ops.value.left = $event.offsetX
  ops.value.top = $event.offsetY
  visibleMenu.value = true
}
</script>
<style scoped lang="scss">
//@import "vue-draggable-resizable/style.css";
//.draggable-item{
//  overflow: hidden;
//  border-style: solid;
//}
.list-wrap{
  position: relative;
  width: 100%;
  height: 100%;
}
.list-item {
  position: relative;
  width: 100%;
  height: 100%;
  //overflow: hidden;
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
</style>