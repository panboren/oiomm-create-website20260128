<template>
  <transition name="fade">
    <div ref="el" v-if="showDialog" :style="RootStyle" class="dialog-v2">
      <div class="h">
        <Header v-if="title" :title="title" :showClose="showClose" @close="closefn"></Header>
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <div >
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>
<script setup>
import Header from './header.vue'
let showDialog = defineModel()
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  showClose: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: '1134px'
  },
  height: {
    type: String,
    default: '936px'
  },
  top: {
    type: String,
    default: '110px'
  },
  left: {
    type: String
  },
  appendTo: {
    type: Boolean,
    default: false
  },
  bgc: {
    type: String,
    default: ''
  },
  appendToBody: {
    type: String,
    default: 'body'
  }
})
const emits = defineEmits(['close'])
const el = ref(null)
const closefn = () => {
  showDialog.value = false

  emits('close')
}

onMounted(() => {
  if (props.appendTo) {
    document.querySelector(props.appendToBody)?.appendChild(el.value)
  }
})

const RootStyle = computed(() => {
  const style = {
    width: props.width,
    height: props.height
  }
  if (props.bgc) {
    style.backgroundColor = props.bgc
  }
  if (props.top) {
    style.top = props.top
  }
  if (props.left) {
    style.left = props.left
  } else {
    // center
    style.left = '50%'
    style.transform = 'translateX(-50%)'
  }
  return style
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.dialog-v2 {
  position: fixed;
  z-index: 9999999;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow:  0px 0px 6px rgba(0, 0, 0, .12);
  border-radius: 5px;
  background: #fff;
  .h {
    box-sizing: border-box;
    padding: 11px 0 11px 52px;
    width: 100%;
    border-bottom: 1px solid #E4E7ED;
  }
  .body {
    height: calc(100% - 50px) !important;
    box-sizing: border-box;
    padding: 30px 20px;
  }
}
</style>
