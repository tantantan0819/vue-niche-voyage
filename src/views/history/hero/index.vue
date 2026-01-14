<template>
  <div class="hero">
    <grology @welcome-video-ended="handleWelcomeVideoEnded"/>
  </div>
</template>
<script setup>
import grology from './grology.vue'

// 定义 emits
const emit = defineEmits(['thirdVideoEnded', 'welcomeVideoEnded'])

// 处理第三个视频播放完毕事件
// const handleThirdVideoEnded = () => {
//   emit('thirdVideoEnded')
// }
// welcomeVideo 播放完毕事件
const handleWelcomeVideoEnded = () => {
  emit('welcomeVideoEnded')
}
</script>