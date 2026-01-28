<template>
  <el-popover placement="bottom" :width="400" title="选择颜色" :visible="visible">
    <template #reference>
      <div @click="visible=true" class="el-color-picker el-tooltip__trigger el-tooltip__trigger" role="button"
           aria-label="color picker"
           aria-description="current color is . press enter to select a new color." aria-disabled="false" tabindex="0"
           id="el-id-1024-1075"><!--v-if-->
        <div class="el-color-picker__trigger">
          <span class="el-color-picker__color" :style="{'background': colorValue}">
            <span class="el-color-picker__color-inner color-main" style="background-color: transparent;">
              <i class="el-icon" style="font-size: 12px; color: #dcdfe6"><svg xmlns="http://www.w3.org/2000/svg"
                                                                              viewBox="0 0 1024 1024"><path
                  fill="currentColor"
                  d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg></i>
          </span>
         </span>
        </div>
      </div>
    </template>
    <div class="color-change">
      <Vue3ColorPicker v-model="colorValue" mode="solid"  :showColorList="false" :showEyeDrop="false" type="RGBA"/>
    </div>
    <div class="footer">
      <el-button @click="save" type="primary" plain  size="small">确定</el-button>
    </div>
  </el-popover>
</template>
<script setup lang="ts">
import {Vue3ColorPicker} from '@cyhnkckali/vue3-color-picker'
import '@cyhnkckali/vue3-color-picker/dist/style.css'
let visible = ref(false)
let colorValue = ref()

let color = defineModel()

let stop = watch(() => color.value, (n) => {
  colorValue.value = n
},{   immediate: true
})
onUnmounted(() => {
  stop()
})

let save = ()=>{
  color.value = colorValue.value
  visible.value = false
}
</script>
<style scoped lang="scss">
.cp-picker-wrap{
  height: 100px;
}
.ck-cp-container{
  box-shadow: none;
}
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
    width: 30px;
    height: 30px;
  }
}
.footer{
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}
.color-picker-show{
  width: 30px;
  height: 30px;
}

</style>