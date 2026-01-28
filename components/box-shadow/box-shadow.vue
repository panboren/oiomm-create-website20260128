<template>
  <el-popover placement="bottom" :width="600" title="文字阴影" :visible="visible">
    <template #reference>
      <div @click="visible=true">
        <div class="border-line2" :style="{'box-shadow': sty}">
          盒子阴影
        </div>
      </div>
    </template>
    <div class="color-change-item">
      <span style="margin: 0 5px 20px 20px;display: inline-block;width: 60px">阴影类型</span>
      <el-select v-model="boxOption.insetValue"
                 placeholder="请输入" style="width: 100px;margin: auto 5px">
        <el-option
            v-for="it in options"
            :key="it.value"
            :label="it.label"
            :value="it.value"
        />
      </el-select>
    </div>
    <div class="color-change">
      <div class="color-change-item" v-for="(item,index) in boxOption.list" :key="index">
        <el-input-number
            v-model="item.hShadow"
            :min="-100"
            :max="100"
            placeholder="x轴"
            controls-position="right"
            style="width: 90px;"
        />
        <el-input-number
            v-model="item.vShadow"
            :min="-100"
            :max="100"
            placeholder="y轴"
            controls-position="right"
            style="width: 90px;"
        />
        <el-input-number
            v-model="item.blurRadius"
            :min="0"
            :max="100"
            placeholder="模糊"
            controls-position="right"
            style="width: 90px;"
        />
        <el-input-number
            v-model="item.spread"
            :min="-100"
            :max="100"
            placeholder="扩展半径"
            controls-position="right"
            style="width: 90px;"
        />
        <el-color-picker v-model="item.color" show-alpha/>
        <el-button :disabled="boxOption.list.length<=1" @click="remove(item,index)" type="danger" plain size="small"
                   style="margin-left: 3px">x
        </el-button>
        <el-button @click="add" type="primary" plain size="small" style="margin-left: 3px">+</el-button>
      </div>
      <div>
      </div>

    </div>
    <div class="border-main">
      <div class="border-line" :style="{'box-shadow': sty}"></div>
    </div>
    <div class="footer">
      <el-button @click="save" type="primary" plain size="small">确定</el-button>
    </div>
  </el-popover>
</template>
<script setup lang="ts">
import _ from 'lodash'

let options = ref([
  {
    label: '内部阴影',
    value: 'inset'
  },
  {
    label: '外部阴影',
    value: 'outset'
  }
])
let visible = ref(false)
let boxShadow = defineModel('boxShadow')
let boxShadowList = defineModel('boxShadowList')

let boxOption = ref({
  insetValue: 'outset',
  list: [
    {
      hShadow: 0,
      vShadow: 0,
      blurRadius: 0,
      color: '#333',
      spread: 0
    }
  ]
})


let list = ref()

let stop = watch(() => boxShadowList.value, (n) => {
  try {
    if (n) {
      boxOption.value = _.cloneDeep(n)
    } else {
      boxOption.value = {
        insetValue: 'outset',
        list: [
          {
            hShadow: 0,
            vShadow: 0,
            blurRadius: 0,
            color: '#333',
            spread: 0
          }
        ]
      }
    }
  } catch (e) {
    console.log(e)
  }
}, {
  immediate: true
})

onUnmounted(() => {
  stop()
})

let isTrue = (val) => {
  if (val || val === 0 || val === '0') {
    return true
  } else {
    return false
  }
}

let computedStyle = () => {
  let str = ''
  boxOption.value.list?.forEach((item, index) => {
    let {hShadow, vShadow, blurRadius, spread,color} = item || {}
    if (isTrue(hShadow) && isTrue(vShadow) && isTrue(blurRadius) && isTrue(spread) && color) {
      str += `${hShadow}px ${vShadow}px ${blurRadius}px ${spread}px ${color}`
      if (index !== boxOption.value.list?.length - 1) {
        str += ','
      }
    }
  })
  if (boxOption.value.insetValue === 'inset') {
    str = `${boxOption.value.insetValue} ${str}`
  }
  return str
}

let sty = computed(() => {
  return computedStyle()
})

let save = () => {
  boxShadow.value = computedStyle()
  boxShadowList.value = boxOption.value
  visible.value = false
}
let add = () => {
  boxOption.value.list.push({
    hShadow: 0,
    vShadow: 0,
    blurRadius: 0,
    color: '#333',
    spread: 0
  })
}

let remove = (item, index) => {
  list.value.splice(index, 1)
}

</script>
<style scoped lang="scss">
.color-change {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .color-change-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}

.border-main {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;

  .border-line {
    width: 100px;
    height: 60px;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
  }
}

.border-line2 {
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  text-align: center;
}

.footer {
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}

</style>