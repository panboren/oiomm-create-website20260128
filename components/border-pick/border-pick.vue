<template>
  <el-popover placement="bottom" :width="400" title="边框设置" :visible="visible">
    <template #reference>
<!--      <div @click="visible=true">-->
<!--       <el-input style="width: 100px" v-model="borderValue" readonly />-->
<!--      </div>-->
      <div @click="visible=true">
        <div class="border-line2" :style="borderSty"></div>
      </div>
    </template>
    <div class="color-change">
        <el-input-number
            v-model="borderOptions.borderWidth"
            :min="1"
            :max="100"
            placeholder="请输入"
            controls-position="right"
            style="width: 100px;"
        />
        <el-select v-model="borderOptions.borderStyle"
                   placeholder="请输入" style="width: 100px;margin: auto 5px">
          <el-option
              v-for="it in options"
              :key="it.value"
              :label="it.label"
              :value="it.value"
          />
        </el-select>
        <el-color-picker v-model="borderOptions.borderColor" show-alpha/>
      <div>
  </div>

    </div>
    <div class="border-main">
       <div class="border-line" :style="borderSty"></div>
    </div>
    <div class="footer">
      <el-button @click="save" type="primary" plain  size="small">确定</el-button>
    </div>
  </el-popover>
</template>
<script setup lang="ts">
import {getBorderStyle} from '~~/components/border-pick/config'
import _ from 'lodash'
let options = ref([
  {
    label: '实线',
    value: 'solid'
  },
  {
    label: '虚线',
    value: 'dashed'
  }
])
let visible = ref(false)
let borderValue = defineModel('border')
let borderList = defineModel('borderList')

let borderOptions = ref({
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#333'
})

let stop = watch(() => borderList.value, (n) => {
  try {
    if(n) {
      return borderOptions.value = _.cloneDeep(n)
    }
    borderOptions.value =  {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#333'
    }
  }catch (e) {
    console.log(e)
  }
},{
  immediate: true
})

let borderSty = computed(()=>{
  let str = getBorderStyle(borderOptions.value)
  if(str) {
    return {
      border: str
    }
  }
  return str
})
onUnmounted(() => {
  stop()
})

let save = ()=>{
  if(borderOptions.value.borderWidth && borderOptions.value.borderStyle && borderOptions.value.borderColor) {
    borderValue.value = borderSty.value?.border
    borderList.value = borderOptions.value
    visible.value = false
  }
}
</script>
<style scoped lang="scss">
.color-change {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.border-main{
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  .border-line{
    margin-left: 10px;
    width: 60px;
    height: 30px;
    border-radius: 5px;
  }
}
.border-line2{
  width: 60px;
  height: 20px;
  border-radius: 5px;
  cursor: pointer;
}
.footer{
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}

</style>