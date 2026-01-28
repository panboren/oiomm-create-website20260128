<!--
 * @ description:
 * @ author: panboren
 * @ created_at: 2024/11/29 22:18
 * @ QQ: 3248874747
-->
<template>
  <div class="bar-list">
       <span v-for="(item,index) in pageList" :key="item.id+'_'+index+item.uuid" :uuid="item.uuid">
         <span v-for="(panelItem,panelIndex) in item?.children || []" @click="goTo(item,panelItem)"
               :key="panelItem.id+'_'+panelIndex+panelItem.uuid"
               :uuid="panelItem.uuid" class="bar-item">{{panelItem.linkName}}</span>
       </span>
  </div>
</template>
<script setup lang="ts">
import {UseAnimation} from '~~/pages/edit/hooks'
defineProps({
  pageList: {
    type: Array,
    default: () => []
  }
})

let { scrollAnimation} = UseAnimation()

let goTo = (item,panelItem) => {
  scrollAnimation(item,panelItem.className)
}
</script>
<style scoped lang="scss">
.bar-list {
  position: fixed;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  top: 50px;
  flex-wrap: wrap;
  z-index: 9999;
  background: #0abdf5;
}

.bar-item {
  padding: 10px;
  color: #192780;
}
</style>