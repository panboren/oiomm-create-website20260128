
<template>
   <div class="nav-list">
     <nav class="anchor-nav" role="navigation">
       <el-button @click="scrollTo(item)" type="primary" :href="item.linkName" class="anchor" v-for="(item,index) in list" :key="item.id+'_'+index">{{item.linkName}}</el-button>
     </nav>
   </div>
</template>
<script setup lang="ts">

import {scrollToPage} from '../../utils'

let props = defineProps({
  pageList:{
    type: Array,
    default: ()=>[]
  },
  scrollTween:{
    type: Object,
    default: ()=>({})
  }
})

let list = computed(()=>{

  let linkData = [
    {
      linkName: 'AN202411252330449283896'
    },
    {
      linkName: 'AN202411252330540148930'
    },
    {
      linkName: 'AN202411252330383093679 '
    }
  ]

  // props.pageList.forEach((item)=>{
  //   item.children.forEach((panelItem)=>{
  //     linkData.forEach((linkItem)=>{
  //       if(panelItem.linkName === linkItem.linkName) {
  //         linkItem.item = item
  //         linkItem.data = panelItem
  //       }
  //     })
  //   })
  // })
  return linkData

})

let scrollTo = (item)=>{
  scrollToPage(item.linkName)
}
</script>
<style scoped lang="scss">
.nav-list {
  position: fixed;
  top: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 9999999;
}

.anchor{
  margin-right: 20px;
}
</style>