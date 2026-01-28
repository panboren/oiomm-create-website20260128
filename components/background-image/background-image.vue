<template>
  <el-popover placement="bottom" :width="200" title="背景图设置" :visible="visible">
    <template #reference>
      <div @click="visible=true">
        <div class="border-line2" :style="{ 'background': 'url(' + imgUrl + ')','background-size': '100% 100%','background-repeat': 'no-repeat' }">
          背景图
        </div>
      </div>
    </template>
    <div>
      <div  class="form-img-main" v-show="imgUrl">
        <img :src="imgUrl" class="form-img" />
        <el-icon @click.stop="remove"  class="form-img-close"><Close /></el-icon>
      </div>
      <el-upload
          v-if="!imgUrl"
          ref="upload"
          class="avatar-uploader"
          :show-file-list="false"
          :on-change="change"
          :auto-upload="false"
          :limit="1"
      >
        <div  class="form-img-main">
          <el-icon  class="avatar-uploader-icon"><Plus /></el-icon>
        </div>
      </el-upload>
      <div>
        <el-input clearable v-model="imgUrl" placeholder="图片地址" style="width: 152px"></el-input>
      </div>
    </div>
    <div class="footer">
      <el-button @click="save" type="primary" plain  size="small">确定</el-button>
    </div>
  </el-popover>
</template>
<script setup lang="ts">
import _ from 'lodash'
import {Close, Plus} from '@element-plus/icons-vue'
let visible = ref(false)
let imgUrl = defineModel('bgUrl')
let bgUrl = defineModel('bgUrlName')
const upload = ref(null)
const handleExceed = () => {
  upload.value!.clearFiles()
}
const change = (file)=>{
  let url = URL.createObjectURL(file.raw!)
  imgUrl.value = url
  bgUrl.value = file.name
}
const remove = ()=>{
  imgUrl.value = ''
  handleExceed()
}
let save = ()=>{
  visible.value = false
}
</script>
<style scoped lang="scss">
.form-img-main{
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  .form-img{
    width: 100px;
    height: 100px;
    display: block;
  }
  .form-img-close{
    position: absolute;
    right: 5px;
    top: 5px;
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