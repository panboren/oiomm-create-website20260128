<!--
 * @ description:
 * @ author: panboren
 * @ created_at: 2024/4/21 22:36
 * @ QQ: 3248874747
-->
<!-- :lock-scroll="true"-->
<template>
  <el-dialog
      top="10vh"
      :close-on-click-modal="false"
      :modal="false"
      :append-to-body="true"
      :draggable="true"
      :model-value="visibel"
      @update:modelValue="input"
      title="轮播图编辑"
      width="410"
      @close="onclose"
  >

    <el-form ref="form" :model="formData" label-width="110px">
      <el-form-item label="自动播放">
        <el-radio-group v-model="formData.autoplay">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="循环播放">
        <el-radio-group v-model="formData.infinite" key="2">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="显示控制器">
        <el-radio-group v-model="formData.controls" key="2">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="显示列表">
        <el-radio-group v-model="formData.fluxIndex" key="2">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="显示分页指示器">
        <el-radio-group v-model="formData.pagination" key="2">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="轮播时间(ms)">
        <el-input-number v-model="formData.delay" :min="100" :max="10000"/>
      </el-form-item>
      <el-form-item label="添加图片" label-width="70px">
        <div>
          <div>
            <el-button type="primary" plain size="small" @click="addSwiper">添加</el-button>
          </div>
          <div class="swiper-scroll">
            <el-scrollbar>
              <div class="scrollbar-flex-content">
                <div v-for="(item,index) in formData?.imgList || []" :key="item.id+'_'+index"
                     class="scrollbar-demo-item">
                  <div class="form-img-main" v-if="item.imgUrl">
                    <img :src="item.imgUrl" class="form-img"/>
                    <el-icon @click.stop="remove(index)" class="form-img-close">
                      <Close/>
                    </el-icon>
                  </div>
                  <el-upload
                      v-else
                      ref="upload"
                      class="avatar-uploader"
                      :show-file-list="false"
                      :on-change="(file)=>{
                       change(file,item)
                     }"
                      :auto-upload="false"
                      :limit="1"
                  >
                    <div class="form-img-main">
                      <el-icon class="avatar-uploader-icon">
                        <Plus/>
                      </el-icon>
                    </div>
                  </el-upload>
                  <div>
                    <el-input clearable v-model="item.imgUrl" placeholder="图片地址" style="width: 102px"></el-input>
                  </div>
                  <div>
                    <el-select
                        clearable
                        v-model="item.animationType"
                        placeholder="Select"
                        style="width: 102px"
                    >
                      <el-option
                          v-for="item in animationTypeData"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                      />
                    </el-select>
                  </div>
                </div>
              </div>
            </el-scrollbar>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="预览" label-width="70px">
        <div>
          <el-button type="primary" plain size="small" @click="pre">预览</el-button>
        </div>
        <div class="swiper-wrap" >
          <div style="width: 100%;height: 110px;display: flex;flex-direction: row" v-if="showPre">
            <Swiper :width="102" :height="102" :options="formData" :data="formData?.imgList"></Swiper>
          </div>
        </div>

      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onclose" plain>取消</el-button>
        <el-button type="primary" plain @click="saveData">
          保存
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import _ from 'lodash'
// import runKeys from './runKeys/runKeys.vue'
import {Plus, Close} from '@element-plus/icons-vue'
import {animationTypeData} from '~~/components/swiper-dialog/config'

const props = defineProps({
  visibel: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => {
      return {}
    }
  }
})


let emit = defineEmits(['update:visibel', 'update:data','submit'])
const upload = ref(null)
let formDataOld = ref(_.cloneDeep(props.data))
let formData = ref(props.data)

let showPre = ref(false)

// const handleExceed = () => {
//   upload.value!.clearFiles()
// }

const remove = (index) => {
  formData.value?.imgList?.splice(index, 1)
  // handleExceed()
}

const change = (file, item) => {
  let url = URL.createObjectURL(file.raw!)
  item.imgUrl = url
  item.imgUrlName = file.name
}

const input = (value) => {
  onclose()
}
// 关闭弹窗
const onclose = () => {
  emit('update:data', formDataOld.value)
  emit('update:visibel', false)
}

const saveData = () => {
  console.log('swiper', props.data)
  emit('update:data', formData.value)
  emit('update:visibel', false)

  emit('submit',formData.value )
}

let addSwiper = () => {
  formData.value?.imgList.push({
    imgUrl: '',
    imgUrlName: '',
    animationType: 'Swipe'
  })
}

let pre = () => {
  showPre.value = false
  nextTick(()=>{
    let timer = setTimeout(()=>{
      console.log('formData', formData.value)
      showPre.value = true
      clearTimeout(timer)
    }, 1000)
  })
}
</script>
<style scoped lang="scss">
.form-img-main {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #dcdfe6;

  .form-img {
    width: 100px;
    height: 100px;
    display: block;
  }

  .form-img-close {
    position: absolute;
    right: 5px;
    top: 5px;
  }

}

.scrollbar-flex-content {
  display: flex;
}

.swiper-scroll {
  margin-top: 5px;
  width: 300px;
  height: 180px;
}

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  width: 102px;
  margin-right: 10px;
  flex-direction: column;
}
.swiper-wrap{
  margin-top: 10px;
  width: 100%;
  height: 120px;
}

</style>