<template>
  <el-popover placement="bottom" :width="300" title="颜色设置" :visible="visible">
    <template #reference>
<!--      <div @click="visible=true">-->
<!--       <el-input style="width: 100px" v-model="borderValue" readonly />-->
<!--      </div>-->
      <div @click="visible=true">
        <div class="border-line2" :style="{'background': sty}">
          背景色
        </div>
      </div>
    </template>
    <div class="color-change" >

      <div class="color-slider">
        <span style="margin-right: 5px;display: inline-block;width: 60px">渐变类型</span>
        <el-select v-model="bgOption.linearValue"
                   placeholder="请输入" style="width: 100px;margin: auto 5px">
          <el-option
              v-for="it in options"
              :key="it.value"
              :label="it.label"
              :value="it.value"
          />
        </el-select>
      </div>
    </div>
    <div class="color-change" >
      <div class="color-slider" style="margin-left: 10px" >
         <el-slider  :min="0" :max="360" v-model="bgOption.sliderValue" />
      </div>
    </div>
    <div class="color-change" >
         <div class="color-change-item" v-for="(item,index) in bgOption.list" :key="index">
           <el-input-number
               v-model="item.percentage"
               :min="0"
               :max="100"
               placeholder="占比"
               controls-position="right"
               style="width: 90px;"
           />
           <el-color-picker v-model="item.color" show-alpha/>
           <el-button :disabled="bgOption.list.length<=1"    @click="remove(item,index)" type="danger" plain  size="small" style="margin-left: 3px">x</el-button>
           <el-button @click="add" type="primary" plain  size="small" style="margin-left: 3px">+</el-button>
         </div>
      <div>
  </div>

    </div>
    <div class="border-main">
       <div class="border-line" :style="{'background': sty}"></div>
    </div>
    <div class="footer">
      <el-button @click="save" type="primary" plain  size="small">确定</el-button>
    </div>
  </el-popover>
</template>
<script setup lang="ts">
import {computedStyle,isTrue,options} from '~~/components/linear-color/config'
import _ from 'lodash'
let visible = ref(false)
let background = defineModel('background')
let backgroundList = defineModel('backgroundList')
let bgOption = ref({
  sliderValue: 0,
  linearValue: 'linear-gradient',
  list: [
    {
      percentage: 0,
      color: ''
    }
  ]
})

let stop = watch(() => backgroundList.value, (n) => {
  try {
    if(n) {
      return bgOption.value =  _.cloneDeep(n)
    }
    bgOption.value =  {
      sliderValue: 0,
      linearValue: 'linear-gradient',
      list: [
        {
          percentage: 0,
          color: ''
        }
      ]
    }
  }catch (e) {
    console.log(e)
  }
},{   immediate: true
})
onUnmounted(() => {
  stop()
})



let sty = computed(() => {
  return computedStyle(bgOption.value)
})

let save = ()=>{
  background.value = sty.value
  backgroundList.value = bgOption.value
  visible.value = false
}
let cup = ()=>{
  try {
    bgOption.value?.list.forEach((item,index) => {
      // if(index === 0) {
      //   return item.percentage = 0
      // }
      if(index === bgOption.value?.list.length - 1) {
        return item.percentage = 100
      }
      let n = parseFloat(100 / (bgOption.value?.list?.length - 1) * index).toFixed(0)
      return item.percentage = n
    })
  }catch (e) {
    console.log(e)
  }
}
let add = () => {
  bgOption.value?.list.push({
    percentage: 100,
    color: ''
  })
  cup()
}

let remove = (item,index) => {
  bgOption.value?.list.splice(index,1)
  cup()
}

</script>
<style scoped lang="scss">
.color-change {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .color-change-item{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
.color-slider{
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
:deep() .el-slider__runway{
  background: linear-gradient(to right,#ff0000 0%,#ffff00 17%,#00ff00 33%,#00ffff 50%,#0000ff 67%,#ff00ff 83%,#ff0000 100%);
}
:deep() .el-slider__bar{
  background: transparent;
}
:deep() .el-slider__button{
  background: transparent;
}
.border-main{
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  .border-line{
    width: 100px;
    margin-left: 10px;
    height: 60px;
    border-radius: 5px;
    border: 1px solid #dcdfe6;
  }
}
.border-line2{
  width: 100px;
  height: 30px;
 line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  text-align: center;
}
.footer{
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}

</style>