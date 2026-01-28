<template>
<!--  <NuxtLayout>-->
<!--    <div>-->
<!--&lt;!&ndash;      <NuxtLoadingIndicator /> &lt;!&ndash; here &ndash;&gt;&ndash;&gt;-->
<!--      <NuxtPage />-->
<!--    </div>-->
<!--  </NuxtLayout>-->
  <div class="app-main">
    <!--      <NuxtLoadingIndicator /> &lt;!&ndash; here &ndash;&gt;-->
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
// import { useUserStore } from '@/stores/useUserStore'
// const userInfo = useUserStore().userInfo
// console.log(userInfo)

</script>
<style>
.app-main{
  width: 100%;
  height: 100%;
}
</style>