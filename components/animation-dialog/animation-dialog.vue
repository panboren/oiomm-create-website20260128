<!--
 * @ description:
 * @ author: panboren
 * @ created_at: 2024/4/21 22:36
 * @ QQ: 3248874747
-->
<!-- :lock-scroll="true"-->
<template>
  <el-dialog
      top="10vh"
      :close-on-click-modal="false"
      :modal="false"
      :append-to-body="true"
      :draggable="true"
      :model-value="visibel"
      @update:modelValue="onclose"
      title="动画设置"
      width="430"
      @close="onclose"
      :lock-scroll="false"
  >
    <div class="link-name">编号：{{itemData.linkName}}</div>
    <el-tabs
        v-model="itemData.formData.animationTab"
        type="card"
        class="tabs-main-pbr"
        @tab-click="handleClick"
    >
      <el-tab-pane :label="item.label" :name="item.name" v-for="(item,index) in tabData" :key="item.name+ '_'+index"></el-tab-pane>
    </el-tabs>
     <component :is="tabView" :formData="formData"></component>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onclose" plain>取消</el-button>
<!--        <el-button @click="onPreview" plain>预览</el-button>-->
        <el-button type="primary" plain @click="saveData">
          保存
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import selfTab from './selfTab/selfTab.vue'
import scrollTab from './scrollTab/scrollTab.vue'
import hoverTab from './hoverTab/hoverTab.vue'
import _ from 'lodash'
import {UseAnimation} from '~~/pages/edit/hooks'
let {playAnimation,selfAnimation} = UseAnimation()
const props = defineProps({
  visibel: {
    type: Boolean,
    default: false
  },
  itemData:{
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

let handleClick = ()=>{
  console.log(88)
}

let tabData = ref([
  {
    label: '出现屏幕',
    name: 1
  },
  {
    label: '鼠标悬停',
    name: 2
  },
  {
    label: '滚动条/滚轮',
    name: 3
  }
])
let tabCompoments = {
  1:selfTab,
  2:hoverTab,
  3:scrollTab
}
let tabView = computed(()=> {
  return tabCompoments[props.itemData.formData.animationTab]
})

let emit = defineEmits(['update:visibel', 'update:data'])
let formDataOld = ref(_.cloneDeep(props.data))
let formData = ref(props.data)
// 关闭弹窗
const onclose = ()=>{
  emit('update:data', formDataOld.value)
  emit('update:visibel', false)
}

const saveData = ()=>{
  emit('update:data', formData.value)
  emit('update:visibel', false)
  console.log(7771, props.panelItem)
  console.log(7772,  props.itemData)
  console.log(7773,  props.scrollTween)
  if(props.itemData.formData.animationTab === 3) {
    playAnimation(props.panelItem,props.itemData,props.scrollTween)
  }
}

const onPreview = () => {
  if(props.itemData.formData.animationTab === 3) {
    playAnimation(props.panelItem,props.itemData,props.scrollTween)
  }
  if(props.itemData.formData.animationTab === 1) {
    selfAnimation(props.itemData)
  }
}
</script>
<style scoped lang="scss">
.title{
  font-size: 16px;
  color: #626262;
  font-weight: 600;
  margin-bottom: 20px;
}
.form-img-main{
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  .form-img{
    width: 100px;
    height: 100px;
    display: block;
  }
  .form-img-close{
    position: absolute;
    right: 5px;
    top: 5px;
  }
}

.hover-effect{
  text-align: center;
  margin-left: 5px;
  width: 40px;
  height: 30px;
  border: 1xp splid #dcdfe6;
  background: #f0f2f5;
  cursor: pointer;
}

.link-name{
  font-size: 14px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
</style>

<!--<style>-->
<!--.tabs-main-pbr > .el-tabs__content {-->
<!-- padding: 0;-->
<!--  margin: 0;-->
<!--}-->
<!--</style>-->