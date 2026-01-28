<template>
  <div class="scroll-tab">
    <div class="add-but">
      <div class="label"><span class="line"></span>动画时间线，可添加多个动画</div>
      <el-button @click="add" type="primary" plain>添加</el-button>
    </div>
    <el-scrollbar :max-height="maxHeight">
    <el-timeline style="width: 100%;padding: 0;position: relative">
      <el-timeline-item :timestamp="`动画（${index+1}）`" placement="top" v-for="(item,index) in formData?.animation" :key="item.id+'_'+index">
          <keys :formData="item" :list="list2"  max-height="300px" value-key="animationKeys" style-key="animationStyle"></keys>
          <el-button class="remove" type="text" :icon="Delete" @click="props.formData?.animation.splice(index,1)"></el-button>
      </el-timeline-item>
    </el-timeline>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import {Close,Delete} from '@element-plus/icons-vue'
import keys from '~~/components/form-dialog/keys/keys.vue'
import {keyAnimation, keyAnimation2, keyData} from '~~/components/form-dialog/config'
let props = defineProps({
  formData: {
    type: Boolean,
    default: false
  },
  maxHeight: {
    type: String,
    default: '500px'
  }
})
let list2 = computed(() => {
  return [...keyAnimation, ...keyAnimation2,...keyData]
})
let getData = () => {
  return {
    animationKeys: ['duration','w', 'h', 'x', 'y','background','rotate','scaleX','scaleY','skewX','skewY','color','fontSize','fontWeight','textShadow','repeat','delay','yoyo','toKey','ease'], // 动画设置
    animationStyle: {}// 自己动画样式
  }
}
let add = () => {
  if (props.formData && props.formData.animation && props.formData.animation.length >= 0) {
    let item = getData()
    props.formData.animation.push(item)
  }
}


</script>
<style scoped lang="scss">
.scroll-tab{
  width: 100%;
  height: 100%;
}
.add-but{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .label{
    font-weight: 500;
    font-size: 18px;
    color: #626262;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .line{
    display: inline-block;
    width: 5px;
    height: 20px;
    background: #0abdf5;
    margin-right: 10px;
  }
}
.remove{
  position: absolute;
  right: 20px;
  top: 0px;
}
</style>