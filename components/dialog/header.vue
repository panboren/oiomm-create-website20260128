<template>
	<div v-if="title" class="header">
		<slot>
			<div class="title">{{ title }}</div>
		</slot>
		<div  class="close">
      <el-icon v-if="showClose" @click="hide"><Close /></el-icon>
    </div>
	</div>
</template>

<script setup>
import {Close} from '@element-plus/icons-vue'
defineProps({
  title: {
    type: String,
    default: ''
  },
  showClose: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['close'])

let hide = () => {
  emits('close')
}
</script>

<style scoped lang="scss">
	.header {
		height: 26px;
		font-size: 20px;
		display: flex;
		align-items: center;
    color: #303133;
    position: relative;
		.close {
			width: 30px;
			height: 27px;
			position: absolute;
			top: 50%;
			right: 22px;
			transform: translateY(-50%);
			cursor: pointer;
      color: #CDD0D6;
      &:hover {
        color: #409EFF;
      }
		}
		.data {
			width: auto;
			height: 27px;
			position: absolute;
			top: 50%;
			right: 88px;
			transform: translateY(-50%);
		}
	}
</style>
