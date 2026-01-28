<template>
  <div>
    <ClientOnly>
      <VueFlux
          :style="{width: width+'px',height: height + 'px'}"
          :options="options"
          :rscs="rscs"
          :transitions="transitions"
          ref="$vueFlux">

<!--        <template #preloader="preloaderProps">-->
<!--          <FluxPreloader v-bind="preloaderProps" />-->
<!--        </template>-->

        <template #caption="captionProps">
          <FluxCaption v-bind="captionProps" />
        </template>

<!--        如播放、暂停、上一项、下一项 -->
        <template #controls="controlsProps" v-if="options.controls">
          <FluxControls v-bind="controlsProps"  />
        </template>
<!--         用于自定义分页指示器   -->
        <template #pagination="paginationProps" v-if="options.pagination">
          <FluxPagination v-bind="paginationProps" />
        </template>

        <template #index="indexProps" v-if="options.fluxIndex">
          <FluxIndex v-bind="indexProps" />
        </template>
      </VueFlux>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
  Img,
  Fade,
  Kenburn,
  Swipe,
  Slide,
  Waterfall,
  Zip,
  Blinds2D,
  Blocks1,
  Blocks2,
  Concentric,
  Warp,
  Camera,
  Cube,
  Book,
  Fall,
  Wave,
  Blinds3D,
  Round1,
  Round2,
  Explode
} from 'vue-flux'
import 'vue-flux/style.css'
let props = defineProps({
  width:{
    type: Number,
    default: 100
  },
  height:{
    type: Number,
    default: 100
  },
  data:{
    type: Array,
    default: () => {
      return []
    }
  },
  options: {
    type: Object,
    default: () => {
      return {
        autoplay: true,
        delay: 2000,
        infinite: true,
        controls: true,
        pagination: true,
        fluxIndex: true
      }
    }
  }
})
let VueFluxOption = shallowReactive({
  Fade,
  Kenburn,
  Swipe,
  Slide,
  Waterfall,
  Zip,
  Blinds2D,
  Blocks1,
  Blocks2,
  Concentric,
  Warp,
  Camera,
  Cube,
  Book,
  Fall,
  Wave,
  Blinds3D,
  Round1,
  Round2,
  Explode
})
const transitions = shallowRef([
  Fade,
  Kenburn,
  Swipe,
  Slide,
  Waterfall,
  Zip,
  Blinds2D,
  Blocks1,
  Blocks2,
  Concentric,
  Warp,
  Camera,
  Cube,
  Book,
  Fall,
  Wave,
  Blinds3D,
  Round1,
  Round2,
  Explode
])

let $vueFlux = ref()

/* 褪色肯伯恩刷卡滑瀑布邮编百叶窗 2D区块1区块2同心经线照相机立方体书秋天浪百叶窗 3D第 1 轮第 2 轮爆炸*/

// const options = shallowReactive({
//   autoplay: true,
//   delay: 2000,
//   infinite: false,
//   allowFullscreen: false,
//   aspectRatio: '16:9' // 1:1 2:1 4:3  4:5  16:9： 16:10  21:9
//
//   /*  allowFullscreen: !1,
//     allowToSkipTransition: !0,
//     aspectRatio: "16:9",
//     autohideTime: 2500,
//     autoplay: !1,
//     bindKeys: !1,
//     delay: 5e3,
//     enableGestures: !1,
//     infinite: !0,
//     lazyLoad: !0,
//     lazyLoadAfter: 5*/
// })
// import img1 from '~/assets/image/1.png'
// import img2 from '~/assets/image/2.png'
// import img3 from '~/assets/image/3.png'
// import img4 from '~/assets/image/4.png'
// let img1 = 'blob:http://localhost:8888/921fd439-da1e-4cd5-84e3-04e0cb71f67f'
// const rscs = shallowReactive([
//   new Img(img1),
//   new Img(img2),
//   new Img(img3),
//   new Img(img4)
// ])
// const rscs = computed(()=>{
//   let ary = []
//   if(props.data && props.data?.length > 0) {
//     props.data?.forEach(item=>{
//       console.log(8899, item.imgUrl)
//       if(item.imgUrl) {
//         ary.push(new Img(img1))
//       }
//     })
//   }
//   console.log('rscs',ary)
//   return ary
// })

const rscs = shallowRef([])
let getImgs = ()=>{
  let ary = []
  if(props.data && props.data?.length > 0) {
    props.data?.forEach(item=>{
      console.log(8899, item.imgUrl)
      if(item.imgUrl) {
        // ary.push(new Img(img3))
        ary.push(new Img(item.imgUrl))
      }
    })
  }
  rscs.value = ary
}
getImgs()

let getTransitions = ()=>{
  let ary = []
  if(props.data && props.data?.length > 0) {
    props.data?.forEach(item=>{
      let cur = VueFluxOption[item.animationType] || Swipe
      if(cur) {
        ary.push(cur)
      }
    })
  }
  transitions.value = ary
}
getTransitions()
let set = () =>{
  nextTick(()=>{
    if($vueFlux.value) {
      $vueFlux.value.size.width.value = props.width || 0
      $vueFlux.value.size.height.value = props.height || 0
    }
  })
}
watch(()=>[props.width,props.height],()=>{
  set()
},{immediate:true})
let showSwiperRun = ref(false)
watch(()=>props.data,()=>{
  getImgs()
  getTransitions()
},{immediate:true})



onMounted(()=>{
  set()
})
</script>
<style scoped lang="scss">
</style>