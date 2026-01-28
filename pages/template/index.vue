<template>
  <Dialog @showPreview="showPreview" />
  <animation-layer v-if="pageList && pageList.length>0" :pageList="pageList" :disable="false"></animation-layer>
  <empty-template v-else></empty-template>
</template>
<script setup lang="ts">
import Dialog from './compoments/dialog/dialog.vue'
definePageMeta({
  layout: false
})
import AnimationLayer from '~~/components/animation-layer/animation-layer.vue'
import {UseAnimation} from '~~/pages/edit/hooks'
let {killAllAnimation} = UseAnimation()
let pageList = ref([])
let router = useRouter()
provide('pageList', pageList)
let showPreview = (isShow,data) => {
  if(isShow) {
    pageList.value =  []
    nextTick(()=>{
      let timer = setTimeout(() => {
        clearTimeout(timer)
        let list = data ? JSON.parse(data) : []
        console.log('showPreview',list)
        pageList.value = list || []
      }, 100)
    })
  }
}


if (process.client) {
  console.log('template')
  killAllAnimation()
}
</script>
<style scoped lang="scss">
body {
  overscroll-behavior: none;
  height: 100vh;
}

.content-warp {
  overflow-x: hidden;
}

.container-horizontal {
  overscroll-behavior: none;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
}

.panel {
  position: relative;
  width: 100vw;
  height: 100vh;
}


</style>
