<template>
  <div class="video-container" :style="getStyle">
    <video
        ref="videoEl"
        class="video-element"
        :src="videoSrc"
        :autoplay="autoplay"
        muted
        playsinline
        :loop="loop"
        :controls="controls"
        :webkitallowfullscreen="fullScreen"
        :mozallowfullscreen="fullScreen"
        :allowfullscreen="fullScreen"
        @error="handleVideoError"
    >
      <source :src="videoSrc || src" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Props
const props = defineProps({
  src: {
    type: String,
    default: 'video/1.mp4'
  },
  loop: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  controls: {
    type: Boolean,
    default: false
  },
  fullScreen: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  }
})

const videoEl = ref<HTMLVideoElement | null>(null)

// 只在组件创建时添加一次时间戳
const videoSrc = computed(() => {
  // return `${props.src}?t=${new Date().getTime()}`
  return `${props.src}`
})

// 根据 fullScreen 决定样式
const getStyle = computed(() => {
  return {
    objectFit: 'cover',
    width: props.fullScreen ? '100vw' : props.width,
    height: props.fullScreen ? '100vh' : props.height
  }
})

// 自动播放静音视频（兼容移动端）
onMounted(() => {
  if (props.autoplay) {
    const video = videoEl.value
    if (video) {
      video.muted = true
      video.play().catch((err) => {
        console.warn('自动播放失败，请用户手动触发', err)
      })
    }
  }
})

// 处理视频加载错误
const handleVideoError = () => {
  console.error('视频加载失败，请检查视频地址:', videoSrc)
}
</script>

<style scoped>
.video-container {
  position: relative;
  overflow: hidden;
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>



<!--
<template>
  <div class="video-container" :style="styObj">
    <video
        ref="videoEl"
        class="video-element"
        :src="videoSrc"
        :autoplay="autoplay"
        muted
        playsinline
        :loop="loop"
        :controls="controls"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
    >
      <source :src="videoSrc || src" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Props
const props = defineProps({
  src: {
    type: String,
    default: 'video/1.mp4'
  },
  loop: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  controls: {
    type: Boolean,
    default: true
  },
  fullScreen: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: '100vw'
  },
  height: {
    type: String,
    default: '100vh'
  }
})

const videoEl = ref<HTMLVideoElement | null>(null)
const videoSrc = computed(() => {
  return `${props.src}?t=${Date.now()}`
})

let styObj = computed(() => {

  if(props.fullScreen) {
    return {
      objectFit: 'cover',
      width: '100vw',
      height: '100vh'
    }
  }else{
    return {
      objectFit: 'cover',
      width: props.width,
      height: props.height
    }
  }
})

// 自动播放静音视频（兼容移动端）
onMounted(() => {

  if(props.autoplay) {
    const video = videoEl.value
    if (video) {
      video.muted = true
      video.play().catch((err) => {
        console.warn('自动播放失败，请用户手动触发', err)
      })
    }
  }
})
</script>

<style scoped>
.video-container {
  position: relative;
  overflow: hidden;
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>


-->









<!--
<template>
   <div>
     <VideoPlayer
         :src="src"
         :autoplay="autoplay"
         :controls="controls"
         :fullScreen="fullScreen"
         width="500px"
         height="500px"
     />
   </div>
</template>

<script setup>
import VideoPlayer from './video-play/main.vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  controls: {
    type: Boolean,
    default: true
  },
  fullScreen: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
</style>
-->


<!--
<template>
  <video
      ref="videoEl"
      class="video-element"
      :src="videoSrc"
      autoplay
      muted
      playsinline
      :loop="loop"
      :controls="controls"
  >
    <source :src="videoSrc || src" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
// Props
const props = defineProps({
  src: {
    type: String,
    default: 'video/1.mp4'
  },
  loop: {
    type: Boolean,
    default: true
  },
  autoplay:{
    type: Boolean,
    default: true
  },
  controls: {
    type: Boolean,
    default: true
  },
  fullScreen: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: '500px'
  },
  height: {
    type: String,
    default: '500px'
  }
})

const videoEl = ref<HTMLVideoElement | null>(null)
const videoSrc = computed(() =>{

  return `${props.src}?t=${new Date().getTime()}`
})

// 自动播放静音视频（兼容移动端）
onMounted(() => {
  const video = videoEl.value
  if (video) {
    // 确保静音（部分浏览器要求才能自动播放）
    video.muted = true
    video.play().catch((err) => {
      console.warn('自动播放失败，请用户手动触发', err)
    })
  }
})
</script>

<style scoped>
.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
-->
