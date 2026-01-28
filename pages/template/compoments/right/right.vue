<template>
  <div class="right">
    <div class="right-header">
      <div class="label"><el-input v-model="projectName" clearable placeholder="请输入项目名称"></el-input></div>
      <div class="but">
        <el-button type="primary" :disabled="disBut.verticalDisable" @click="add(false)">添加竖屏</el-button>
        <el-button type="primary" :disabled="disBut.horizontalDisable" @click="add(true)">添加横屏</el-button>
        <el-button type="primary" @click="edit" :disabled="!activeId">去编辑</el-button>
        <el-button type="primary" @click="save">保存</el-button>
        <el-button type="primary" @click="read">查看效果</el-button>
      </div>
    </div>
    <div class="list">
      <el-scrollbar max-height="calc(100vh - 150px)">
        <div class="main" id="SlickListRef" v-if="pageList && pageList.length>0">
          <SlickList axis="y" v-model:list="pageList" appendTo="#SlickListRef">
            <template #item="{ item,index }">
              <div class="list-main list-main-pbr" :style="{width: `${maxWidth}px`}">
                <div class="panel"
                     :style="{...item.style,background: it?.formData?.animationStyle?.bgUrl?  'url(' + it?.formData?.animationStyle?.bgUrl + ')' :   it?.formData?.animationStyle?.background || item?.formData?.animationStyle?.background || it?.style?.backgroundImage,'background-size': '100% 100%','background-repeat': 'no-repeat'}"
                     v-for="(it,i) in item?.children || []" :key="it.id+'_'+i">
                  <div class="linkName">{{ it.name }}</div>
                  <div class="linkName">编号:{{ it.linkName }}</div>
                  <div @mousedown.stop style="margin-top: 10px">
                    <el-button type="success" :icon="Plus" circle @click.stop="addItem(pageList, item, index,it, i)"/>
                    <el-button type="danger" :icon="Close" circle @click.stop="removeItem(pageList, item, index,it, i)"/>
                    <el-button type="primary" :icon="Edit" circle @click.stop="editItem(pageList, item, index,it, i)"/>
                  </div>
                </div>
              </div>
            </template>
          </SlickList>
        </div>
        <empty-template v-else></empty-template>
      </el-scrollbar>
    </div>
    <customize-dialog @submit="submit" :templateView="query.templateView" v-if="visibel" v-model:visibel="visibel"
                      :itemData="activeItem"
                      :data="activeItem.name==='竖屏'?activeItem.formData:activeItItem.formData"></customize-dialog>
  </div>
</template>
<script setup lang="ts">
import {
  Plus,
  Close,
  Edit
} from '@element-plus/icons-vue'
import {SlickList} from 'vue-slicksort'
import {butOption, getData as getItemData, getItem} from './config'
import _ from 'lodash'
import {keys, keys2} from '~~/components/customize-dialog/config'
import {useUtil} from '~~/utils/hooks'
import {UseApi} from '~~/pages/edit/apiHooks'
let {
  router,
  query,
  listData,
  pageList,
  getData,
  updateData,
  addData
} = UseApi()
let util = useUtil()
let emits = defineEmits(['showPreview'])
let visibel = ref(false)
let activeItem = ref({})
let activeItItem = ref({})
let disBut = computed(()=>{
  let key = query.templateView || 'customizeAnimation'
  return butOption[key]
})

let activeId = ref('')
let projectName = ref('')

let add = (isTrue) => {
  let data = getItemData(isTrue,query.templateView)
  data.formData = {
    animationKeys: query.templateView === 'customizeAnimation' ? [...keys] : [...keys2], // 动画设置
    animationStyle: {
      xPercent: 100
    }// 滚动动画样式
  }
  pageList.value.push(data)
  console.log(pageList.value)
}
let maxWidth = computed(() => {
  let w = 0
  pageList.value.forEach((item) => {
    w = Math.max(w, (item?.children || []).length)
  })
  return w * 150
})
let addItem = (data, item, index, it, i) => {
  let horizontal = item.horizontal
  let panel = getItem(horizontal,query.templateView)
  panel.pid = item.id
  panel.parentClassName = item.className
  if (horizontal) {
    console.log('horizontal',panel)
    return item.children.splice(i, 0, panel)
  }
  let verticalData = getItemData(horizontal,query.templateView)

  console.log('verticalData',verticalData)
  pageList.value.splice(index, 0, verticalData)
}
let removeItem = (data, item, index, it, i) => {
  let horizontal = item.horizontal
  if (horizontal) {
    if (item.children.length <= 2) {
      return pageList.value.splice(index, 1)
    }
    return item.children.splice(i, 1)
  }
  pageList.value.splice(index, 1)
}
let editItem = (data, item, index, it, i) => {
  activeItem.value = item
  activeItItem.value = it
  visibel.value = true
  console.log(data, item, index, it, i)
}
let read = () => {
  let param = JSON.stringify(pageList.value)
  emits('showPreview', param)
}
let edit = async () => {
  // await save()
  if (activeId.value) {
    router.push({
      path: '/edit',
      query: {
        id: activeId.value
      }
    })
  }
}

let submit = (data = {}) => {
  activeItItem.value.formData = data
  console.log(126, pageList)
}

let save = async () => {
  if(!projectName.value) {
    util.error('请输入项目名称')
    return
  }

  if(query.state === 'edit' || activeId.value) {
    return updateData(pageList.value,{
      id: activeId.value,
      name: '首页',
      templateView: query.templateView,
      projectName: projectName.value
    }).then((data) => {
      activeId.value = data?.id || data
    })
  }
  return addData(pageList.value,{
    name: '首页',
    templateView: query.templateView,
    projectName: projectName.value
  }).then((data) => {
    activeId.value = data?.id || data
  })
}

let getCurrent = () => {
  getData().then((data) => {
    console.log(159, data)
    activeId.value = data?.id  || ''
    projectName.value = data?.projectName || ''
    query.templateView = listData.value.templateView ||  query.templateView
  })
}

if (process.client) {
  if(query.state === 'edit') {
    setTimeout(() => {
      getCurrent()
    }, 1000)
  }
}
</script>
<style scoped lang="scss">
.right {
  //margin-left: 30px;
  flex: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  //padding: 20px;
  box-sizing: border-box;
  max-width: 80%;

  .right-header {
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .list {
    width: 100%;
    flex: 1;
    margin-top: 20px;
  }

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
  }

  .label {
    width: 100%;
    font-size: 20px;
    color: #333;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .linkName {
    white-space: wrap;
    word-break: break-all;
    margin-bottom: 10px;
    font-size: 15px;
  }

  .but {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list-main {
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    .panel {
      padding: 10px;
      box-sizing: border-box;
      width: 150px;
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
}
</style>
<style lang="scss">
.list-main-pbr {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.list-main-pbr .panel {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
</style>








