<template>
  <div class="list-main">
    <el-container style="width: 100%;height: 100%">
      <el-header height="100px">
<!--        <h1 class="title">模版列表</h1>-->

        <h1 class="title">AI智能建设网站</h1>

      </el-header>
      <el-main>
        <div class="list">

<!--
          <h2 class="list-title">模版列表</h2>
-->

         <el-row :gutter="30">
         <el-col :span="8" v-for="(item,index) in list" :key="index">
             <div class="list-item" :style="{'background': item.background}" :class="item.ease">
                 <div class="list-item_title">{{item.title}}</div>
                 <div class="but">
                   <el-button type="primary" @click="edit(item)">编辑模版</el-button>
                   <el-button type="primary" @click="preview(item)">查看模版</el-button>
                  </div>
             </div>
         </el-col>
        </el-row>
       </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">

import {colors} from '~~/pages/template/compoments/right/config'
import {hoverList} from '~~/components/animation-dialog/config'
let router = useRouter()
let getColor = ()=>{
  return colors[Math.floor(Math.random() * 51)] || colors[0]
}
let getHover = ()=>{
  let ease = hoverList[Math.floor(Math.random() * hoverList.length)] || hoverList[0]
  return ease.value
}
let list = ref([
  {
    id: 0,
    title: '自定义模版',
    templateView: 'customizeAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 1,
    title: '横竖模版',
    templateView: 'initHorizontalAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 2,
    title: '无限模版',
    templateView: 'infinitePanelScrollAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 3,
    title: '缩放模版',
    templateView: 'scalePanelScrollAnimation',
    background: getColor(),
    ease: getHover()
  }
])

let edit = (item) => {
  router.push({
    path: '/template',
    query: {
      state: 'add',
      templateView: item.templateView
    }
  })
  console.log('编辑模版')
}
let preview = (item) => {
  router.push({
    path: '/template-view',
    query: {
      state: 'add',
      templateView: item.templateView
    }
  })
  console.log('编辑模版')
}

</script>
<style scoped lang="scss">
.list-main{
  width: 100vw;
  //height: 100vh;
  .title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: 600;
    color: #333;
  }

  .list-title{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
  }
  .list{
    margin: 0 auto;
    width: 80%;
    height: 100%;
    .list-item{
      width: 100%;
      height: 300px;
      margin-bottom: 30px;
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      border-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .but {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
