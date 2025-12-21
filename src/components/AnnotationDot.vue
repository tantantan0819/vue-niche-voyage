<template>
  <div class="popularization-description procession-description">
    <div class="lamp-item-wrap" @click="handleOpen">
      <div class="lamp-item-core" ref="lampCoreRef"></div>
      <div class="lamp-item"></div>
    </div>
    <div class="popularization-wrapper" ref="wrapperRef">
      <div class="close" @click="handleClose">x</div>
      <div class="title"><span>·</span>内容来自</div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';
import { pxToVw } from '../utils/viewportUtils';

const props = defineProps({
  // 打开动画时 x 轴位移方向，正数向右，负数向左
  openDirection: {
    type: Number,
    default: 50
  },
  // 关闭动画时 x 轴位移方向，正数向右，负数向左
  closeDirection: {
    type: Number,
    default: -50
  }
});

const lampCoreRef = ref(null);
const wrapperRef = ref(null);

const handleOpen = () => {
  if (!wrapperRef.value || !lampCoreRef.value) return;
  
  gsap.to(wrapperRef.value, {
    x: pxToVw(props.openDirection),
    scale: 1,
    opacity: 1,
    duration: 0.5
  });
  
  const tl = gsap.timeline();
  tl.to(lampCoreRef.value, { scale: 0.6, duration: 0.1 })
    .to(lampCoreRef.value, { scale: 1, duration: 0.1 });
};

const handleClose = () => {
  if (!wrapperRef.value) return;
  
  gsap.to(wrapperRef.value, {
    x: pxToVw(props.closeDirection),
    scale: 0.5,
    opacity: 0,
    duration: 0.5
  });
};
</script>

<style scoped>
.popularization-description {
  position: relative;
  z-index: 99;
}
</style>

