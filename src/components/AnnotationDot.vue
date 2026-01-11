<template>
  <div class="popularization-description procession-description">
    <div class="lamp-item-wrap" @click="handleToggle">
      <div class="lamp-item-core" ref="lampCoreRef"></div>
      <div class="lamp-item"></div>
    </div>
    <div class="popularization-wrapper" ref="wrapperRef">
<!--      <div class="close" @click="handleClose">x</div>-->
      <div class="title"><span>·</span>{{ title }}</div>
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
  },
  title: {
    type: String,
    default: '图片来自'
  }
});

const lampCoreRef = ref(null);
const wrapperRef = ref(null);
const isOpen = ref(false);

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
  
  isOpen.value = true;
};

const handleClose = () => {
  if (!wrapperRef.value) return;
  
  gsap.to(wrapperRef.value, {
    x: pxToVw(props.closeDirection),
    scale: 0.5,
    opacity: 0,
    duration: 0.5
  });
  
  isOpen.value = false;
};

const handleToggle = () => {
  if (isOpen.value) {
    handleClose();
  } else {
    handleOpen();
  }
};
</script>

<style scoped>
.popularization-description {
  position: relative;
  z-index: 99;
  p{
    font-family: 'Alibaba-PuHuiTi-Light'!important;
  }
}
.title{
  font-family: 'Alibaba-PuHuiTi-Light';
}
::v-deep .popularization-content{
  font-family: 'Alibaba-PuHuiTi-Light'!important;
}
</style>

