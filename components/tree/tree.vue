<template>
  <Teleport to="body">
    <div class="tree" ref="treeRef" v-drag="position" v-if="model">
      <div class="header">
        <span>列表</span>
        <el-button @click="close" type="primary" link :icon="Close" circle style="margin-left: 5px"/>
      </div>
      <div class="tree-main">
        <el-tree
            :data="data"
            :props="{
              children: 'children',
              label: 'linkName'
            }"
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
        >
          <template #default="{ node, data, $index }">
            <div class="custom-tree-node">
              <div class="label">{{node.level === 3 ?  '模块' : node.level === 1 ? `页面（${data.children?.length || 0}）个` : '页面'}}{{node.level === 1 ? '' : node.label }}</div>
              <div class="but" v-if="node.level !== 1">
                <el-button @click="edit(node, data)" type="primary" link :icon="Edit" circle/>
                <el-button @click="showAnimation(node, data)" type="primary" link v-if="data.type ==='animation'"
                           :icon="ChromeFilled" circle
                           style="margin-left: 5px"/>
                <el-button @click="remove(node, data)" type="primary" link :icon="Close" v-if="data.type ==='animation'"
                           circle style="margin-left: 5px"/>
              </div>
            </div>
          </template>
        </el-tree>
      </div>

      <customize-dialog @submit="submit" :templateView="activeItem.templateView" v-if="visibel" v-model:visibel="visibel"
                        :itemData="activeItem"
                        :data="activeItem.formData"></customize-dialog>

    </div>
  </Teleport>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import {
  Close,
  Edit,
  ChromeFilled
} from '@element-plus/icons-vue'
import _ from 'lodash'

defineProps({
  data: {
    type: Array,
    default: () => ([])
  }
})
let model = defineModel()
let emits = defineEmits(['change'])
let treeRef = ref(null)
let position = ref({
  initialX: 0,
  initialY: 30
})

let visibel = ref(false)
let activeItem = ref({})

let close = () => {
  model.value = false
}

onMounted(() => {
  position.value.initialX = window.innerWidth - 450
})

let edit = (node, data) => {

  if(data.level === 2) {
    console.log(123, node, data)
    activeItem.value = data
    visibel.value = true
    return
  }
  data.dialogVisible = true
}

let showAnimation = (node, data) => {
  data.animationVisible = true

  if (Object.keys(data.formData?.runStyle).length <= 0) {
    data.formData.runStyle = _.cloneDeep(data.formData?.style)
    data.formData.runKeys = _.cloneDeep(data.formData?.keys)
  }

}


const remove = (node, data) => {
  const parent = node.parent
  const children = parent.data.children || parent.data
  const index = children.findIndex((d) => d.uuid === data.uuid)
  children.splice(index, 1)
}


let submit = (data) => {
  console.log(data)
  // emits('change', data)
}
</script>
<style scoped lang="scss">
.tree {
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, .12);
}

.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #e4e7ed;
}

.tree-main {
  width: 400px;
  height: 800px;
  padding: 10px;
  box-sizing: border-box;

  .custom-tree-node {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .label {
      width: 215px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .but {
      width: 106px;
      display: none;
    }

    &:hover {
      .but {
        display: block;
      }
    }
  }


}

</style>
