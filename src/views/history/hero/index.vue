<template>
  <div class="hero">
    <grology @third-video-ended="handleThirdVideoEnded"/>
  </div>
</template>
<script setup>
import grology from './grology.vue'

// 定义 emits
const emit = defineEmits(['thirdVideoEnded'])

// 处理第三个视频播放完毕事件
const handleThirdVideoEnded = () => {
  emit('thirdVideoEnded')
}

</script>