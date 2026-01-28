<template>
  <div class="scroll-tab">
    <el-form-item label="选择效果" label-width="80px">
      <el-select v-model="formData.hoverClass"
                 filterable
                 clearable
                 placeholder="请选择选择效果">
        <el-option
            v-for="item in hoverList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        <span style="display: inline-block;width: 100%; height: 100%" >
          <span :style="cssVars" :class="[item.value]">{{item.label}}</span>
        </span>
        </el-option>
      </el-select>
<!--      <div class="hover-effect" :class="[formData.hoverClass]">预览</div>-->
    </el-form-item>
    <keys :formData="formData" :list="list" max-height="300px" value-key="hoverKeys" style-key="hoverStyle"></keys>
  </div>
</template>
<script setup lang="ts">
import keys from '~~/components/form-dialog/keys/keys.vue'

import {keyAnimation3, keyData} from '~~/components/form-dialog/config'
import {hoverList, userHover} from '~~/components/animation-dialog/config'

defineProps({
  formData: {
    type: Boolean,
    default: false
  }
})
let  {cssVars} = userHover()
let list = computed(()=>{
  return [...keyAnimation3,...keyData]
})
</script>
<style scoped lang="scss">
.scroll-tab{
  width: 100%;
  height: 100%;

}
.hover-effect{
  text-align: center;
  margin-left: 5px;
  width: 40px;
  height: 30px;
  border: 1xp splid #dcdfe6;
  background: #f0f2f5;
  cursor: pointer;
}
</style>