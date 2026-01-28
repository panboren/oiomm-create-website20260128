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
      title="编辑"
      width="410"
      @close="onclose"
  >
    <div class="link-name">编号：{{itemData.linkName}}</div>
    <el-form ref="form" :model="formData" label-width="70px">
      <el-form-item label="选择类型">
        <el-select v-model="formData.type" placeholder="请选择类型">
          <el-option
              v-for="item in typeOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="添加文字" v-if="formData.type === 'text'">
        <el-input v-model="formData.content" />
      </el-form-item>
      <el-form-item label="添加图片" v-if="formData.type === 'img'">
         <div>
           <div  class="form-img-main" v-show="formData.imgUrl">
             <img :src="formData.imgUrl" class="form-img" />
             <el-icon @click.stop="remove"  class="form-img-close"><Close /></el-icon>
           </div>
           <el-upload
               v-if="!formData.imgUrl"
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
             <el-input clearable v-model="formData.imgUrl" placeholder="图片地址" style="width: 102px"></el-input>
           </div>
         </div>
      </el-form-item>
      <el-form-item label="轮播图" v-if="formData.type === 'swiper'">
        <div class="swiper-wrap">
          <el-icon  class="add-icon"><Plus/></el-icon>
          <div style="width: 100%;height: 110px;display: flex;flex-direction: row" v-if="showSwiperRun">
            <Swiper class="form-img-main" :width="102" :height="102" :options="formData.swiperOptions" :data="formData.swiperOptions?.imgList"></Swiper>
            <el-button style="margin-left: 10px" type="primary" plain size="small" @click="addSwiper">添加</el-button>
          </div>
        </div>
      </el-form-item>

      <el-form-item label="添加视频" v-if="formData.type === 'video'">
        <div>
          <div  class="form-img-main" v-show="formData.videoUrl">
            <pb-video :src="formData.videoUrl"
                      :full-screen="false"
                      :autoplay="true"
                      class="form-img" width="100px" height="100px" ></pb-video>
            <el-icon @click.stop="removeVideo"  class="form-img-close"><Close /></el-icon>
          </div>
          <el-upload
              v-if="!formData.videoUrl"
              ref="upload"
              class="avatar-uploader"
              :show-file-list="false"
              :on-change="changeVideo"
              :auto-upload="false"
              :limit="1"
          >
            <div  class="form-img-main">
              <el-icon  class="avatar-uploader-icon"><Plus /></el-icon>
            </div>
          </el-upload>
          <div>
            <el-input clearable v-model="formData.videoUrl" placeholder="视频地址" style="width: 102px"></el-input>
          </div>
          <el-checkbox v-model="formData.autoplay" key="1" label="自动播放"  />
          <el-checkbox v-model="formData.infinite" key="2" label="循环播放"  />
          <el-checkbox v-model="formData.controls" key="3" label="显示控制器"  />
          <el-checkbox v-model="formData.fullScreen" key="4" label="全屏"  />
        </div>
      </el-form-item>
    </el-form>
   <!--  属性设置  -->
    <keys :formData="formData" :list="list"></keys>
<!--    <runKeys :formData="formData"></runKeys>-->
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onclose" plain>取消</el-button>
        <el-button type="primary" plain @click="saveData">
          保存
        </el-button>
      </div>
    </template>
    <swiper-dialog v-if="showSwiper" v-model:visibel="showSwiper" ref="swiperDialog"
                   v-model:data="formData.swiperOptions" @submit="submitSwiper"
    ></swiper-dialog>
  </el-dialog>
</template>
<script setup lang="ts">
import _ from 'lodash'
import keys from './keys/keys.vue'
// import runKeys from './runKeys/runKeys.vue'
import { Plus , Close} from '@element-plus/icons-vue'
import {getTypeOption, keyData} from './config'
import SwiperDialog from '~~/components/swiper-dialog/swiper-dialog.vue'
let pageList = inject('pageList')
const props = defineProps({
  visibel: {
    type: Boolean,
    default: false
  },
  itemData:{
    type: Object,
    default: () => {
      return {}
    }
  },
  data: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
let showSwiper = ref(false)
let showSwiperRun = ref(true)
let list = computed(()=>{
  let ary = []
  pageList.value.map((item) => {
    let data = item.children || []
    ary.push(...data)
  })
  ary =  ary.map((item) => {
    return {
      label:`页面编号${item.linkName}`,
      value:item.linkName
    }
  })

  let linkData = [
    {
      key: 'linkName',
      label: '跳转页面',
      value: '',
      type: 'string',
      tag: 'select',
      options: ary
    },
    {
      key: 'link',
      label: '绑定链接',
      value: '',
      type: 'string',
      tag: 'input'
    }
  ]
  return [...keyData,...linkData]
})



let emit = defineEmits(['update:visibel', 'update:data'])


const upload = ref(null)

const uploadVideo = ref(null)


let formDataOld = ref(_.cloneDeep(props.data))
let formData = ref(props.data)
let typeOption = ref(getTypeOption())


const handleExceed = () => {
  upload.value!.clearFiles()
}

const remove = ()=>{
  formData.value.imgUrl = ''
  handleExceed()
}

const handleExceedVideo = () => {
  uploadVideo.value!.clearFiles()
}

let removeVideo = ()=>{
  formData.value.videoUrl = ''
  handleExceedVideo()
}

const change = (file)=>{
  console.log(889, file)
  if (!file || !file.raw) {
    console.error('Invalid file object')
    return
  }
  let url = URL.createObjectURL(file.raw)
  console.log(4448, url)
  formData.value.imgUrl = url
  formData.value.imgUrlName = file.name
}

const changeVideo = (file)=>{
  console.log(889, file)
  if (!file || !file.raw) {
    console.error('Invalid file object')
    return
  }
  let url = URL.createObjectURL(file.raw)
  console.log(4448, url)
  formData.value.videoUrl = url
  formData.value.videoName = file.name
}











// const change = (file) => {
//   // 检查文件对象是否有效
//   if (!file || !file.raw) {
//     console.error('Invalid file object')
//     return
//   }
//
//   try {
//     // 确保 file.raw 是一个有效的文件对象
//     if (!(file.raw instanceof Blob)) {
//       console.error('Invalid file type')
//       return
//     }
//
//     // 创建对象 URL
//     const objectUrl = URL.createObjectURL(file.raw)
//     console.log('Generated object URL:', objectUrl)
//
//     // 更新 formData.value.imgUrl
//     formData.value.imgUrl2 = objectUrl
//
//     // 读取文件内容并转换为 Base64
//     const reader = new FileReader()
//     reader.onload = (event) => {
//       const base64String = event.target.result
//       formData.value.imgUrl = base64String
//     }
//     reader.onerror = (error) => {
//       console.error('Error reading file:', error)
//     }
//     reader.readAsDataURL(file.raw)
//
//     console.log(8889, formData.value)
//
//     // 注册一个回调函数，在组件销毁时释放对象 URL
//     if (!change.cleanup) {
//       change.cleanup = () => {
//         if (formData.value.imgUrl2) {
//           URL.revokeObjectURL(formData.value.imgUrl2)
//         }
//       }
//     }
//   } catch (error) {
//     console.error('Error creating object URL:', error)
//   }
// }

// 在组件卸载时调用 cleanup 函数
// onBeforeUnmount(() => {
//   if (change.cleanup) {
//     change.cleanup()
//   }
// })


const input = (value)=>{
  onclose()
}
// 关闭弹窗
const onclose = ()=>{
  emit('update:data', formDataOld.value)
  emit('update:visibel', false)
}

const saveData = ()=>{
  // props.itemData.width = formData.value.style.width ?? props.itemData.width
  // props.itemData.height = formData.value.style.height ?? props.itemData.height
  // props.itemData.x = formData.value.style.x ?? props.itemData.x
  // props.itemData.y = formData.value.style.y ?? props.itemData.y

  // 设置拖拽默认样式
  // setDragStyle(formData.value.style, props.itemData)
  emit('update:data', formData.value)
  emit('update:visibel', false)
}

let addSwiper = ()=>{
  showSwiper.value = true
}

let submitSwiper = ()=>{
  showSwiperRun.value = false

  console.log('submitSwiper',formData.value)
  nextTick(()=>{
    let timer = setTimeout(()=>{
      showSwiperRun.value = true
      clearTimeout(timer)
    }, 1000)
  })
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
.link-name{
  font-size: 14px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.swiper-wrap{
  position: relative;
  width: 100%;
  height: 110px;
  .add-icon{
    position: absolute;
    left: 45px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>