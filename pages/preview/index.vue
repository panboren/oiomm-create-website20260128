<template>
  <animation-layer v-if="pageList && pageList.length>0" :pageList="pageList" :disable="false"></animation-layer>
  <empty-template v-else></empty-template>
</template>
<script setup lang="ts">
import {UseApi} from '~~/pages/edit/apiHooks'

definePageMeta({
  layout: false
})
import AnimationLayer from '~~/components/animation-layer/animation-layer.vue'
import homeApi from '~~/api/home'

let {
  pageList,
  getData
} = UseApi(homeApi)
provide('pageList', pageList)
if (process.client) {
  setTimeout(() => {
    getData()
  }, 1000)
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
