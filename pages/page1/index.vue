<template>
  <div class="page2">
<!--      <pb-video :autoplay="true" :controls="true" :src="`video/1.mp4`"></pb-video>-->
<!--    <video autoplay muted playsinline controls loop>-->
<!--      <source :src="`video/1.mp4`" type="video/mp4">-->
<!--      Your browser does not support the video tag.-->
<!--    </video>-->
 <div style="width: 200px;height: 300px">
   <pb-video :src="`video/2.mp4`"
             :controls="false"
             :fullScreen="false"
               width="200px"
              height="200px"
             :autoplay="true">
   </pb-video>
 </div>
  </div>
</template>
<script setup>
// import pbVideo from '~/components/pb-video/pb-video.client.vue'

let listData = ref([])

let getData = async () => {
  try {
    const res = await useFetch('/api/data?t=' + new Date().getTime())

    let data = res.data.value || {}
    let list = data.data.list || []
    list = JSON.parse(list)
    listData.value = list
    console.log(list)
  }catch(err) {
    console.log(err)
  }
}


</script>

<style scoped>
.page2 {
  width: 100vw;
  height: 100vh;
  background: #f1b5b5;
}
</style>


<!--
<template>
  <div class="page2">
&lt;!&ndash;    page22222&ndash;&gt;
&lt;!&ndash;    <div @click="getData">获取数据</div>&ndash;&gt;
&lt;!&ndash;    <div v-for="(item,index) in listData" :key="index">&ndash;&gt;
&lt;!&ndash;      <div>{{item.templateView}}</div>&ndash;&gt;
&lt;!&ndash;      <div v-for="(chItem,chIndex) in item?.children || []" :key="chIndex">&ndash;&gt;
&lt;!&ndash;        <div>{{chItem.templateView}} {{chItem.id}}</div>&ndash;&gt;
&lt;!&ndash;      </div>&ndash;&gt;
&lt;!&ndash;    </div>&ndash;&gt;
&lt;!&ndash;    <img :src="`images/${index+1}.png?t=${new Date().getTime()}`" alt="" v-for="(item,index) in 17"  :key="index">&ndash;&gt;

&lt;!&ndash;  <pb-video :autoplay="true" :controls="false" :src="`video/1.mp4`" ></pb-video>&ndash;&gt;
    <video autoplay muted playsinline controls loop>
      <source :src="`video/1.mp4`" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>
<script setup>
// import pbVideo from '~/components/pb-video/pb-video.client.vue'

let listData = ref([])

let getData = async () => {
  try {
    const res = await useFetch('/api/data?t=' + new Date().getTime())

    let data = res.data.value || {}
    let list = data.data.list || []
    list = JSON.parse(list)
    listData.value = list
    console.log(list)
  }catch(err) {
    console.log(err)
  }
}


</script>

<style scoped>
.page2 {
  width: 100%;
  height: 100%;
  background: #f1b5b5;
}
</style>
-->
