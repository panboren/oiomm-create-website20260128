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
    title: '横向模版',
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
  },
  // V4-V11: 专业级模板
  {
    id: 4,
    title: '3D卡片翻转',
    templateView: 'threeDCardFlipAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 5,
    title: '粒子波浪',
    templateView: 'particleWaveAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 6,
    title: '虫洞穿梭',
    templateView: 'wormholeAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 7,
    title: '玻璃破碎',
    templateView: 'glassShatterAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 8,
    title: '液体流动',
    templateView: 'liquidFlowAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 9,
    title: '分形生长',
    templateView: 'fractalGrowAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 10,
    title: '量子纠缠',
    templateView: 'quantumEntanglementAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 11,
    title: '磁场扭曲',
    templateView: 'magneticDistortionAnimation',
    background: getColor(),
    ease: getHover()
  },
  // V12-V19: 专业级模板
  {
    id: 12,
    title: '纸张折叠',
    templateView: 'origamiFoldAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 13,
    title: '莫比乌斯环',
    templateView: 'moebiusTransformAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 14,
    title: '极光流淌',
    templateView: 'auroraFlowAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 15,
    title: '粒子汇聚',
    templateView: 'particleConvergeAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 16,
    title: 'DNA双螺旋',
    templateView: 'dnaHelixAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 17,
    title: '蜂巢展开',
    templateView: 'honeycombUnfoldAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 18,
    title: '全息扫描',
    templateView: 'hologramScanAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 19,
    title: '万花筒镜像',
    templateView: 'kaleidoscopeMirrorAnimation',
    background: getColor(),
    ease: getHover()
  },
  // V20-V27: 精英级模板
  {
    id: 20,
    title: '液体张力',
    templateView: 'liquidSurfaceTensionAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 21,
    title: '电磁波动',
    templateView: 'electromagneticWaveAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 22,
    title: '碎片重组',
    templateView: 'fragmentReassembleAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 23,
    title: '多层视差',
    templateView: 'parallaxDepthAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 24,
    title: '矩阵代码雨',
    templateView: 'matrixRainAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 25,
    title: '星系旋转',
    templateView: 'galaxyRotationAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 26,
    title: '流体涡旋',
    templateView: 'fluidVortexAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 27,
    title: '全景展开',
    templateView: 'panoramaUnfoldAnimation',
    background: getColor(),
    ease: getHover()
  },
  // V28-V35: 传奇级模板
  {
    id: 28,
    title: '星际传送门',
    templateView: 'interstellarPortalAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 29,
    title: '量子时空穿越',
    templateView: 'quantumTunnelAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 30,
    title: '赛博空间',
    templateView: 'cyberspaceAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 31,
    title: '液态金属',
    templateView: 'liquidMetalAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 32,
    title: '时间折叠',
    templateView: 'timeFoldAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 33,
    title: '星云诞生',
    templateView: 'nebulaBirthAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 34,
    title: '霓虹城市',
    templateView: 'neonCityAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 35,
    title: '极限视差',
    templateView: 'ultimateParallaxAnimation',
    background: getColor(),
    ease: getHover()
  },
  // V36-V43: 精华级模板
  {
    id: 36,
    title: '平滑横向',
    templateView: 'smoothHorizontalAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 37,
    title: '弹性缩放',
    templateView: 'elasticScaleAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 38,
    title: '无限循环优化',
    templateView: 'infiniteSmoothAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 39,
    title: '淡入上移',
    templateView: 'fadeUpAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 40,
    title: '交错横向',
    templateView: 'staggeredHorizontalAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 41,
    title: '缩放淡入',
    templateView: 'scaleFadeAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 42,
    title: '无限旋转',
    templateView: 'infiniteRotateAnimation',
    background: getColor(),
    ease: getHover()
  },
  {
    id: 43,
    title: '平滑组合',
    templateView: 'smoothComboAnimation',
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
