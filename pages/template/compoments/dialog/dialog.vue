<template>
  <div class="over-layer" v-if="!showPreview"></div>
  <div class="dialog-content" :class="{'is-show-preview': showPreview}">
    <RightMain @showPreview="show"></RightMain>
    <el-button title="打开模板"
               @click="show"
               @mouseenter="enter"
               @mouseleave="leave"
               v-if="showPreview"
               class="but" type="primary" :icon="DArrowRight"
               :class="{'is-show': showPreview}"
               style="width: 30px;border-radius: 0 15px 15px 0"></el-button>
  </div>
</template>
<script setup lang="ts">
import {DArrowRight}  from '@element-plus/icons-vue'
import RightMain from '../right/right.vue'
let emits = defineEmits(['showPreview'])
let showPreview = ref(false)
let show = (data)=>{
  showPreview.value = true
  emits('showPreview', showPreview.value,data)
}

let enter = ()=>{
  showPreview.value = false
}
let leave = ()=>{
  showPreview.value = true
}


</script>
<style scoped lang="scss">
.over-layer{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  //background: rgba(0, 0, 0, .1);
  background: transparent;
  z-index: 98;
}
.dialog-content{
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  max-width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 99;
  padding:10px 30px 30px 30px;
  box-sizing: border-box;
  background-image: linear-gradient(90deg, rgb(246, 249, 249) 0%, rgb(239, 252, 251) 100%);
  transition: all 1s ease-in;
  &.is-show-preview{
    transform: translateX(-100%);
  }
  .but{
    position: absolute;
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>
