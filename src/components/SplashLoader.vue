<template>
  <div class="SplashLoader">
    <div class="progress-content" v-if="show" >
      <div class="progress-text">{{ Math.round(progress) }}%</div>
      <div class="progress-wrapper">
        <div class="progress-bar" :style="{ width: Math.max(progress, 0) + '%' }"></div>
      </div>
      <div class="progress-tip">稍等片刻,旅途马上开始!</div>
    </div>
    <div class="start-journey" v-else>
      <span @click="hideSplashLoader">开启旅程</span>
    </div>
  </div>
</template>
<script setup>
import gsap from "gsap";

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
const hideSplashLoader = () =>{
  gsap.to('.SplashLoader',{display: 'none'})
}
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
  text-align: center;
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
.start-journey{
  span{
    font-size: 33px;
    color: #2c7aa5;
    position: relative;
    cursor: pointer;
    transition: all ease-in-out 0.5s;
    &:hover{
      color: rgba(44, 137, 165, 0.83);
    }
    &:before{
      content: '';
      position: absolute;
      top: 50%;
      left: -50px;
      transform: translateY(-50%);
      width: 22px;
      height: 10px;
      background: url('@/assets/images/menu/triangle-left.png') no-repeat center center / cover;
    }
    &:after{
      content: '';
      position: absolute;
      top: 50%;
      right: -50px;
      transform: translateY(-50%);
      width: 22px;
      height: 10px;
      background: url('@/assets/images/menu/triangle-right.png') no-repeat center center / cover;
    }
  }
}
</style>