<template>
  <div class="SplashLoader" v-if="show">
    <div class="progress-text">{{ Math.round(progress) }}%</div>
    <div class="progress-wrapper">
      <div class="progress-bar" :style="{ width: Math.max(progress, 0) + '%' }"></div>
    </div>
    <div class="progress-tip">稍等片刻,旅途马上开始!</div>
  </div>
</template>
<script setup>
const props = defineProps({
  progress: {
    type: Number,
    default: 0
  },
  show: {
    type: Boolean,
    default: true
  }
})
</script>
<style scoped>
.SplashLoader {
  width: 1920px;
  height: 1080px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #c3d9dd;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.progress-text {
  font-size: 120px;
  color: #2c7aa5;
}

.progress-wrapper {
  width: 400px;
  height: 10px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
}

.progress-bar {
  min-width: 0;
  height: 10px;
  border-radius: 10px;
  position: absolute;
  transition: width ease-in-out 0.2s;
  top: 0;
  left: 0;
  background-color: #2c7aa5;
}

.progress-tip {
  font-size: 33px;
  color: #2c7aa5;
  margin-top: 36px;
}
</style>