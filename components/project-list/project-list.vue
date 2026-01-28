<template>
  <Teleport to="body">
    <div class="tree" ref="treeRef" v-drag="position" v-if="model">
      <div class="header">
        <span>项目列表</span>
        <el-button @click="close" type="primary" link :icon="Close" circle style="margin-left: 5px"/>
      </div>
      <div class="goto">
        <el-button @click="goto">去添加模板</el-button>
      </div>
      <div class="tree-main">
        <div class="tree-main-item " :class="{'is-active': activeId === item.id}" @click="change(item)"
             v-for="(item,index) in data" :key="index">
          <!--          <div class="label single-line-ellipsis">

                    </div>-->
          <div class="custom-tree-node">
            <div class="label">{{ item.projectName }}</div>
            <el-popover placement="top" :width="180" trigger="click" >
              <p>会永久删除，是否继续？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="small" type="primary" @click.stop="remove(item)">
                  继续
                </el-button>
              </div>
              <template #reference>
                <el-button type="primary" @click.stop
                           link :icon="Close" circle></el-button>
              </template>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import {
  Close
} from '@element-plus/icons-vue'

defineProps({
  data: {
    type: Array,
    default: () => ([])
  }
})
let model = defineModel()
let emits = defineEmits(['change', 'remove'])
let treeRef = ref(null)
let router = useRouter()
let position = ref({
  initialX: 0,
  initialY: 30
})

let activeId = ref('')


let close = () => {
  model.value = false
}

let change = (item) => {
  activeId.value = item.id
  emits('change', item)
}

let remove = (item) => {
  emits('remove', item)
}

let goto = () => {
  router.push({
    path: '/list'
  })
}

onMounted(() => {
  position.value.initialX = window.innerWidth - 450
})
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
.goto{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  background: linear-gradient(0, #f5f7fa 0%, #fff 100%);
  cursor: pointer;
}

.tree-main {
  width: 350px;
  height: 800px;
  padding: 10px;
  box-sizing: border-box;

  .tree-main-item {
    width: 100%;
    padding: 10px 5px;
    box-sizing: border-box;
    border-bottom: 1px solid #e4e7ed;
    cursor: pointer;

    &:hover {
      background: #f5f7fa;
    }

    &.is-active {
      background: rgba(195, 214, 243, 0.15);
      color: #0553c7;
    }
  }

  .custom-tree-node {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .label {
      width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .but {
      display: none;
    }

    &:hover {
      .but {
        display: block;
      }
    }
  }

}

.single-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
