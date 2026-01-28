<template>
  <div class="content">
    <animation-layer v-if="pageList && pageList.length > 0" :pageList="pageList" :disable="false"></animation-layer>
  </div>
</template>

<script lang="ts" setup>
import { useUtil } from '~/utils/hooks'
import AnimationLayer from '~/components/animation-layer/animation-layer.vue'

let util = useUtil()
let pageList = ref([])
let listData = ref({})

let getData = async () => {
  try {
    util.open()
    const res = await useFetch('/api/data?t=' + new Date().getTime()) || {}
    let data = res?.data?.value?.data || {}
    console.log(447,  res?.data)
    listData.value = data || {}
    pageList.value = listData.value?.list ? JSON.parse(listData.value?.list) : []

    console.log(147, pageList.value)
    util.close()
  } catch (error) {
    console.error('Network Error:', error)
    util.close()
  }
}


if (process.client) {
  let timer = setTimeout(() => {
    getData()
    clearTimeout(timer)
  }, 100)
}
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>



<!--
<template>
  <div class="content"  @click="getData">
    <button @click="getData">刷新数据</button>
    <animation-layer  v-if="pageList && pageList.length>0" :pageList="pageList" :disable="false"></animation-layer>
  </div>
</template>

<script lang="ts" setup>
import {useUtil} from '~/utils/hooks'
import AnimationLayer from '~/components/animation-layer/animation-layer.vue'
let util = useUtil()
let pageList = ref([])
let listData = ref({})
let getData = async () => {
  app.get('/api/data', (req, res) => {
    console.log(req, res)
    res.json({ message: 'Data endpoint is working!' })
  })
  // try {
  //   util.open()
  //   // const response = await fetch('/data/data.json?v=' + Date.now())
  //   const response = await fetch(`/data.json?t=${new Date().getTime()}`, {
  //     method: 'GET',
  //     cache: 'no-cache', // 禁用缓存
  //     headers: {
  //       'Cache-Control': 'no-cache',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //
  //
  //   console.log(response)
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`)
  //   }
  //   const data = await response.json()
  //   console.log(1144, data)
  //   listData.value = data || {}
  //   let list = listData.value?.list ? JSON.parse(listData.value?.list) : []
  //   console.log(4444, list)
  //   pageList.value = list
  //   util.close()
  //
  //   listData.value.list = list
  //   console.log('edit',pageList.value)
  //   console.log('获取数据成功', data)
  //   console.log(2225, listData.value)
  // } catch (error) {
  //   console.error('获取数据失败:', error)
  //   util.close()
  // }
}

let data5 = () => {
  // 定义一个函数用于生成带时间戳的 URL
  const generateScriptUrl = () => {
    return `/data.js?t=${new Date().getTime()}`
  }

  // 创建并配置 script 元素
  const script = document.createElement('script')
  script.src = generateScriptUrl()

  // 脚本加载成功后的回调
  script.onload = () => {
    if (typeof mydata === 'undefined') {
      console.error('加载的脚本中未定义 mydata 变量')
      return
    }
    console.log('JS 加载完成！', mydata)
  }

  // 脚本加载失败的回调
  script.onerror = () => {
    console.error('JS 加载失败，请检查网络或脚本路径')
  }

  // 将 script 元素添加到文档中
  document.body.appendChild(script)
}


let get56 = async ()=>{

  const { data, refresh } = await useAsyncData(
    'data',
    () => fetch(`/data.json?t=${new Date().getTime()}`, { headers: { 'Cache-Control': 'no-cache' } })
  )
  console.log(123, data)
  // 手动刷新数据
  const reloadData = () => refresh()
  console.log(124, reloadData)
  console.log(123, data)
}

const loadData = async () => {
  try {
    let res = await $fetch('/api/data')
    console.log(159, res)
  } catch (error) {
    console.error('获取数据失败:', error)
  }

}
const loadData2 = async () => {
  try {
    const { data, error } = await useFetch('/api/data', {
      // 强制绕过缓存（开发环境调试用）
      server: false
    })

    if (error.value) {
      console.error('API Error:', error.value)
      return
    }

    console.log('Loaded Data:', data.value)
  } catch (error) {
    console.error('Network Error:', error)
  }
}



if (process.client) {
  // data5()
  // loadData()
  // loadData2()
  // getData()
}
</script>
<style>
</style>
<style scoped>
.content{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

-->











<!--
<template>
  <div class="content" >
    <animation-layer  v-if="pageList && pageList.length>0" :pageList="pageList" :disable="false"></animation-layer>
  </div>
</template>

<script lang="ts" setup>
import {useUtil} from '~/utils/hooks'
import AnimationLayer from '~/components/animation-layer/animation-layer.vue'
let util = useUtil()
let pageList = ref([])
let listData = ref({})
let getData = async () => {
  const controller = new AbortController()
  const signal = controller.signal
  try {
    util.open()
    const response = await fetch('/data/data.json?v=' + Date.now(), { signal })
    console.log(response)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log(1144, data)
    listData.value = data || {}
    let list = listData.value?.list ? JSON.parse(listData.value?.list) : []
    console.log(4444, list)
    pageList.value = list
    util.close()
    console.log('edit',pageList.value)
    console.log('获取数据成功', data)
  } catch (error) {
    console.error('获取数据失败:', error)
    util.close()
  }finally {
    // 清理控制器
    controller.abort()
  }
}


if (process.client) {
  getData()
}
</script>
<style>
</style>
<style scoped>
.content{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

-->




<!--
<template>
  <div>
    text
     <img :src="item.url" alt="示例图片描述" :key="item.id" v-for="(item) in list">
    <div @click="getData">huoqu</div>
  </div>
</template>

<script setup lang="ts">
let list = ref([])

// 定义日志函数，便于统一管理日志输出
const logDebug = (message, data) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message, data)
  }
}

const logError = (message, error) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(message, error)
  } else {
    console.error('An error occurred:', message)
  }
}

let getData = async () => {
  const controller = new AbortController()
  const signal = controller.signal

  try {
    // 发起请求并设置超时时间
    const response = await fetch('/data/data.json?v=' + Date.now(), { signal })
    logDebug('Response received:', response)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const res = await response.json()
    logDebug('Parsed response:', res)

    if (res?.code !== 200) {
      throw new Error(`Server returned code ${res?.code}`)
    }

    // 确保 res.data.list 是一个数组
    if (Array.isArray(res?.data?.list)) {
      list.value = res.data.list
    } else {
      list.value = []
      logError('Invalid data format:', res?.data)
    }

    return res.data
  } catch (error) {
    if (error.name === 'AbortError') {
      logDebug('Request aborted')
      return
    }

    logError('Error fetching data:', error)
    throw error
  } finally {
    // 清理控制器
    controller.abort()
  }
}

if (process.client) {
  getData()
}


</script>
<style scoped lang="scss">
</style>

-->

<!--
<template>
  <div>
    <el-button @click="getData">获取</el-button>
    <el-button @click="add">增加</el-button>

    <el-button @click="upload">上传</el-button>
    <el-button @click="download">下载</el-button>

    <div v-for="(item,index) in list" :key="index">
      {{ item.name }}
      <el-button @click="remove(item)">删除</el-button>
      <el-button @click="update(item)">修改</el-button>
      <el-button @click="getDataOne(item)">获取一条数据</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import homeApi from '~/api/home'
let list = ref([])
let code = 100
let add = async () => {
  code++
  let param = {
    name: 'panboren' + code,
    list: [
      {
        name: 'panboren' + code,
        age: 18 + code
      },
      {
        name: 'panboren2' + code,
        age: 20 + code
      }
    ]
  }
  try {
    let data = await homeApi.add(param)
    getData()
    console.log('添加成功', data)
  } catch (error) {
    console.error('添加失败:', error)
  }
}
let remove = async ({id} = {}) => {
  try {
    let data = await homeApi.delete({id})
    getData()
    console.log('删除成功', data)
  } catch (error) {
    console.error('删除失败:', error)
  }
}
let indx = 100
let update = async ({id}) => {
  indx++
  try {
    let data = await homeApi.update({
      id: id,
      name: 'panboren' + indx,
      list: [
        {
          name: 'panboren' + indx,
          age: 18 + '-' + indx
        },
        {
          name: 'panboren300' + indx,
          age: 20 + '-' + indx
        }
      ]
    })
    getData()
    console.log('更新成功', data)
  } catch (error) {
    console.error('更新失败:', error)
  }

}
let getDataOne = async ({id} = {}) => {
  try {
    let data = await homeApi.getDataById({id})
    console.log('获取数据成功', data)
  } catch (error) {
    console.error('获取数据失败:', error)
  }
}

let getData = async () => {
  try {
    const data = await homeApi.getData()
    list.value = data || []
    console.log('获取数据成功', data)
  } catch (error) {
    console.error('获取数据失败:', error)
  }
}
if (process.client) {
  getData()
}

let upload = async () => {
  try {
    let data = await homeApi.upload()
    console.log('上传成功', data)
  } catch (error) {
    console.error('上传失败:', error)
  }
}



let download = async () => {

  try {
    const blob =  await homeApi.download({id:71})
    if (!blob) {
      throw new Error('Network response was not ok')
    }
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.download = 'oio-代码.zip' // 设置下载文件的名称
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error)
  }
}

</script>
<style scoped lang="scss">
</style>-->


<!--<template>-->
<!--  <div>-->
<!--    <el-button @click="getData">获取</el-button>-->
<!--    <el-button @click="add">增加</el-button>-->

<!--    <el-button @click="upload">上传</el-button>-->
<!--    <el-button @click="download">下载</el-button>-->

<!--    <div v-for="(item,index) in list" :key="index">-->
<!--      {{ item.name }}-->
<!--      <el-button @click="remove(item)">删除</el-button>-->
<!--      <el-button @click="update(item)">修改</el-button>-->
<!--      <el-button @click="getDataOne(item)">获取一条数据</el-button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import homeApi from '~/api/home'-->
<!--let list = ref([])-->
<!--let code = 100-->
<!--let add = async () => {-->
<!--  code++-->
<!--  let param = {-->
<!--    name: 'panboren' + code,-->
<!--    list: [-->
<!--      {-->
<!--        name: 'panboren' + code,-->
<!--        age: 18 + code-->
<!--      },-->
<!--      {-->
<!--        name: 'panboren2' + code,-->
<!--        age: 20 + code-->
<!--      }-->
<!--    ]-->
<!--  }-->
<!--  try {-->
<!--    let data = await homeApi.add(param)-->
<!--    getData()-->
<!--    console.log('添加成功', data)-->
<!--  } catch (error) {-->
<!--    console.error('添加失败:', error)-->
<!--  }-->
<!--}-->
<!--let remove = async ({id} = {}) => {-->
<!--  try {-->
<!--    let data = await homeApi.delete({id})-->
<!--    getData()-->
<!--    console.log('删除成功', data)-->
<!--  } catch (error) {-->
<!--    console.error('删除失败:', error)-->
<!--  }-->
<!--}-->
<!--let indx = 100-->
<!--let update = async ({id}) => {-->
<!--  indx++-->
<!--  try {-->
<!--    let data = await homeApi.update({-->
<!--      id: id,-->
<!--      name: 'panboren' + indx,-->
<!--      list: [-->
<!--        {-->
<!--          name: 'panboren' + indx,-->
<!--          age: 18 + '-' + indx-->
<!--        },-->
<!--        {-->
<!--          name: 'panboren300' + indx,-->
<!--          age: 20 + '-' + indx-->
<!--        }-->
<!--      ]-->
<!--    })-->
<!--    getData()-->
<!--    console.log('更新成功', data)-->
<!--  } catch (error) {-->
<!--    console.error('更新失败:', error)-->
<!--  }-->

<!--}-->
<!--let getDataOne = async ({id} = {}) => {-->
<!--  try {-->
<!--    let data = await homeApi.getDataById({id})-->
<!--    console.log('获取数据成功', data)-->
<!--  } catch (error) {-->
<!--    console.error('获取数据失败:', error)-->
<!--  }-->
<!--}-->

<!--let getData = async () => {-->
<!--  try {-->
<!--    const data = await homeApi.getData()-->
<!--    list.value = data || []-->
<!--    console.log('获取数据成功', data)-->
<!--  } catch (error) {-->
<!--    console.error('获取数据失败:', error)-->
<!--  }-->
<!--}-->
<!--if (process.client) {-->
<!--  getData()-->
<!--}-->

<!--let upload = async () => {-->
<!--  try {-->
<!--    let data = await homeApi.upload()-->
<!--    console.log('上传成功', data)-->
<!--  } catch (error) {-->
<!--    console.error('上传失败:', error)-->
<!--  }-->
<!--}-->



<!--let download = async () => {-->

<!--  try {-->
<!--    const blob =  await homeApi.download({id:71})-->
<!--    if (!blob) {-->
<!--      throw new Error('Network response was not ok')-->
<!--    }-->
<!--    const url = window.URL.createObjectURL(blob)-->
<!--    const a = document.createElement('a')-->
<!--    a.style.display = 'none'-->
<!--    a.href = url-->
<!--    a.download = 'oio-代码.zip' // 设置下载文件的名称-->
<!--    document.body.appendChild(a)-->
<!--    a.click()-->
<!--    window.URL.revokeObjectURL(url)-->
<!--  } catch (error) {-->
<!--    console.error('There has been a problem with your fetch operation:', error)-->
<!--  }-->
<!--}-->

<!--</script>-->
<!--<style scoped lang="scss">-->
<!--</style>-->