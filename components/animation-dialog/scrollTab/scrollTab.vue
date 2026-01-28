<template>
  <div class="scroll-tab">
    <keys  :formData="formData" :list="list" max-height="300px" value-key="runKeys" style-key="runStyle"></keys>
  </div>
</template>
<script setup lang="ts">
import keys from '~~/components/form-dialog/keys/keys.vue'
import {keyAnimation2, keyData} from '~~/components/form-dialog/config'

defineProps({
  formData: {
    type: Boolean,
    default: false
  }
})
let list = computed(()=>{
  return [...keyAnimation2,...keyData]
})
</script>
<style scoped lang="scss">
.scroll-tab{
  width: 100%;
  height: 100%;
}

</style>