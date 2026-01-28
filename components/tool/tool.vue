
<template>
    <div class="tool" ref="toolRef" v-drag="position" v-if="show">
       <div class="tool-main">
         <div class="tool-item" @click="select(item)" :class="{'is-active': model  === item.value}" v-for="(item,index) in list" :key="item.id+'_'+index">{{item.label}}</div>
       </div>
    </div>
</template>
<script setup lang="ts">
let model  = defineModel()
let emits = defineEmits(['change'])
let list = ref([
  {
    value: 1,
    label: '保存'
  },
  {
    value: 2,
    label: '编辑'
  },
  {
    value: 3,
    label: '编辑模板'
  },
  {
    value: 4,
    label: '预览'
  },
  {
    value: 5,
    label: '下载代码'
  },
  {
    value: 6,
    label: '列表'
  },
  {
    value: 7,
    label: '设置'
  },
  {
    value: 8,
    label: '我的项目'
  }
])

let show = ref(false)
let toolRef = ref(null)

let select = (item) => {
  model.value = item.value
  emits('change', item.value)
}
let position = ref({
  initialX: 0,
  initialY: 0
})

onMounted(()=>{
  console.dir(toolRef.value)
  position.value.initialX = (window.innerWidth - 672) / 2
  show.value = true
})
</script>
<style scoped lang="scss">
.tool{
  display: none;
  height: 50px;
  .tool-main{
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.2);
    box-shadow:  0px 0px 6px rgba(0, 0, 0, .12);
    border-radius: 5px;

    .tool-item{
      padding: 10px 15px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border-radius: 5px;
      background-image: linear-gradient(90deg, rgb(51, 132, 190) 0%, rgb(25, 125, 178) 100%);
      color: #fff;
      cursor: pointer;
      opacity: 0.5;
      &:hover{
        opacity: 1;
        background-image: linear-gradient(90deg, rgb(28, 131, 204) 0%, rgb(27, 153, 220) 100%)
      }
      &.is-active{
        opacity: 1;
        background-image: linear-gradient(90deg, rgb(28, 131, 204) 0%, rgb(5, 222, 139) 100%)
      }
    }

  }
}

</style>