<template>
<!--  <div>{{pageList}}</div>-->
  <tool v-model="toolId" @change="changeTool"/>
  <tree v-model="showTree" :data="pageList"></tree>
  <project-list v-model="showProject" :data="projectListData" @remove="remove" @change="changeProject"></project-list>
  <animation-layer v-if="pageList && pageList.length>0" :pageList="pageList" :disable="true"></animation-layer>
  <empty-template v-else></empty-template>
  <ruler-tool v-if="showRuler"/>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false
})
import AnimationLayer from '~~/components/animation-layer/animation-layer.vue'
import {UseApi} from '~~/pages/edit/apiHooks'
let toolId = ref(2)
let showTree = ref(false)
let showRuler = ref(false)
let showProject = ref(false)

let {
  router,
  query,
  pageList,
  projectListData,
  getProjectList,
  listData,
  getData,
  removeData,
  updateData,
  download,
  downloadFile
} = UseApi()
provide('pageList', pageList)

let changeTool = async (value) => {
  let id = listData.value.id || query.id
  let param = {
    id: id,
    state: 'edit',
    templateView: listData.value.templateView || query.templateView
  }
  if (value === 1) { // 保存
    updateData(pageList.value, listData.value)
    return
  }
  if (value === 3) { // 编辑模板
    if (!id) {
      return
    }
    // await updateData(pageList.value,listData.value)
    console.log(1256, param)
    router.push({
      path: '/template',
      query: param
    })
    return
  }
  if (value === 4) { // 预览
    if (!id) {
      return
    }
    await updateData(pageList.value,listData.value)
    router.push({
      path: '/preview',
      query: param
    })
  }

  if (value === 5) { // 下载代码
    if (!id) {
      return
    }
    downloadFile()
  }

  if (value === 6) { // 列表
    showTree.value = !showTree.value
    return
  }
  if (value === 7) { // 设置
    showRuler.value = !showRuler.value
    return
  }

  if (value === 8) { // 项目列表
    getProjectList()
    showProject.value = !showProject.value
    return
  }
}

let changeProject = (item) => {
  pageList.value = []
  getData(item)

}

let remove = (item) => {
  if(!item?.id) {
    return
  }

  removeData(item).then(() => {
    getProjectList()
    getData()
  })
}

if (process.client) {
  setTimeout(() => {
    getData()
  }, 1000)
}
// onMounted(() => {
//   getData()
// })


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
