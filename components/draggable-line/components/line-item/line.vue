
<template>
  <!--辅助线-->
  <span class="ref-line v-line"
        v-for="item in vLine"
        :key="item.id"
        v-show="item.display"
        :style="{ left: item.position, top: item.origin, height: item.lineLength}"
  />
  <span class="ref-line h-line"
        v-for="item in hLine"
        :key="item.id"
        v-show="item.display"
        :style="{ top: item.position, left: item.origin, width: item.lineLength}"
  />
  <!--辅助线END-->
</template>
<script setup lang="ts">

defineProps({
  vLine:{
    type:Array,
    default: ()=>[]
  },
  hLine:{
    type:Array,
    default: ()=>[]
  }
})

</script>
<style scoped lang="scss">

</style>