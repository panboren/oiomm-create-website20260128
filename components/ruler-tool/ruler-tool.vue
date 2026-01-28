<template>
  <div class="vue-ruler-h">
        <span
            v-for="(item, index) in xScale"
            :key="index"
            :style="{ left: index * 50 + 2 + 'px' }"
            class="n"
        >{{ item.id }}</span
        >
  </div>
  <div class="vue-ruler-v">
        <span
            v-for="(item, index) in yScale"
            :key="index"
            :style="{ top: index * 50 + 2 + 'px' }"
            class="n"
        >{{ item.id }}</span
        >
  </div>
</template>
<script setup lang="ts">
let xScale = ref([])
let yScale = ref([])
let stepLength = ref(50)

let getCalc = (array, length)=> {
  array.value = []
  for (let i = 0; i < (length * stepLength.value) / 50; i += stepLength.value) {
    if (i % stepLength.value === 0) {
      array.value.push({ id: i })
    }
  }
} // 获取刻度方法


let setRuler = () => {
  let w = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth || 0
  let h = document.documentElement.clientHeight || window.innerHeight || document.body.clientHeight || 0
  getCalc(xScale,w)
  getCalc(yScale,h)
}
onMounted(() => {
  setRuler()
  window.addEventListener('resize', setRuler)
})

</script>
<style scoped lang="scss">
.vue-ruler {
  &-wrapper {
    left: 0;
    top: 0;
    z-index: 999;
    overflow: hidden;
    user-select: none;
  }
  &-h,
  &-v,
  &-ref-line-v,
  &-ref-line-h,
  &-ref-dot-h,
  &-ref-dot-v {
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 999;
  }
  &-h,
  &-v,
  &-ref-line-v,
  &-ref-line-h,
  &-ref-dot-h,
  &-ref-dot-v {
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 999;
  }

  &-h {
    width: 100%;
    height: 18px;
    left: 0;
    opacity: 0.6;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAASCAMAAAAuTX21AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFMzMzAAAA////BqjYlAAAACNJREFUeNpiYCAdMDKRCka1jGoBA2JZZGshiaCXFpIBQIABAAplBkCmQpujAAAAAElFTkSuQmCC)
    repeat-x; /*./image/ruler_h.png*/
  }

  &-v {
    width: 18px;
    height: 100%;
    top: 0;
    opacity: 0.6;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAyCAMAAABmvHtTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFMzMzAAAA////BqjYlAAAACBJREFUeNpiYGBEBwwMTGiAakI0NX7U9aOuHyGuBwgwAH6bBkAR6jkzAAAAAElFTkSuQmCC)
    repeat-y; /*./image/ruler_v.png*/
  }

  &-v .n,
  &-h .n {
    position: fixed;
    font:
        10px/1 Arial,
        sans-serif;
    color: #333;
    cursor: default;
  }

  &-v .n {
    width: 8px;
    left: 3px;
    word-wrap: break-word;
  }

  &-h .n {
    top: 1px;
  }

  &-ref-line-v,
  &-ref-line-h,
  &-ref-dot-h,
  &-ref-dot-v {
    z-index: 998;
  }

  &-ref-line-h {
    width: 100%;
    height: 3px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFSv//AAAAH8VRuAAAAA5JREFUeNpiYIACgAADAAAJAAE0lmO3AAAAAElFTkSuQmCC)
    repeat-x left center; /*./image/line_h.png*/
    cursor: n-resize; /*url(./image/cur_move_h.cur), move*/
  }

  &-ref-line-v {
    width: 3px;
    height: 100%;
    _height: 9999px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFSv//AAAAH8VRuAAAAA5JREFUeNpiYEAFAAEGAAAQAAGePof9AAAAAElFTkSuQmCC)
    repeat-y center top; /*./image/line_v.png*/
    cursor: w-resize; /*url(./image/cur_move_v.cur), move*/
  }

  &-ref-dot-h {
    width: 100%;
    height: 3px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAMAAABFaP0WAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFf39/////F3PnHQAAAAJ0Uk5T/wDltzBKAAAAEElEQVR42mJgYGRgZAQIMAAADQAExkizYQAAAABJRU5ErkJggg==)
    repeat-x left 1px; /*./image/line_dot.png*/
    cursor: n-resize; /*url(./image/cur_move_h.cur), move*/
    top: -10px;
  }

  &-ref-dot-v {
    width: 3px;
    height: 100%;
    _height: 9999px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAMAAABFaP0WAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFf39/////F3PnHQAAAAJ0Uk5T/wDltzBKAAAAEElEQVR42mJgYGRgZAQIMAAADQAExkizYQAAAABJRU5ErkJggg==)
    repeat-y 1px top; /*./image/line_dot.png*/
    cursor: w-resize; /*url(./image/cur_move_v.cur), move*/
    left: -10px;
  }
  &-content {
    position: fixed;
    z-index: 997;
  }
  &-content-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 998;
  }
}
</style>