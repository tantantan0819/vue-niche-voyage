<template>
   <div class="dot-content-container">
     <!-- <div class="dot-box"  @click="showPopover" >
        <div class="dot-outer"> <div class="dot-inner"> </div></div>
     </div> -->
       <!-- <div class="popover-container" v-if="popoverVisible">
        <div class="popover-title">·{{ title }}</div>
        <div class="popover-divider"></div>
        <div class="popover-content"></div>
    </div> -->
      <div class="lamp-item-wrap" @click="openOrClosePopover">
        <div class="lamp-item-core"></div>
        <div class="lamp-item"></div>
      </div>
      <div class="popover-container" ref="popoverElement">
        <div class="popover-title">·{{ title }}</div>
        <div class="popover-divider"></div>
        <div class="popover-content">{{ content }}</div>
      </div>
   </div>
</template>
<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap';
import { pxToVw, pxToVh } from '../utils/viewportUtils';
const props = defineProps({
  title: String,
  content: String
});

const popoverElement = ref(null);
const popoverVisible = ref(false);
const openOrClosePopover = () => {
  if(popoverVisible.value){
    closeProcession();
  }else{
    showPopover();
  }
  popoverVisible.value = !popoverVisible.value;
  
}
/**
 * 打开步辇图弹窗
 */
const showPopover = () => {
  gsap.to(popoverElement.value, {
    x: pxToVw(0),
    scale: 1,
    opacity: 1,
    duration: 0.5
  });
  const tl = gsap.timeline();
  tl.to('.lamp-item-core', { scale: 0.6, duration: 0.1 })
      .to('.lamp-item-core', { scale: 1, duration: 0.1 });
};

/**
 * 关闭步辇图弹窗
 */
const closeProcession = () => {
  gsap.to(popoverElement.value, {
    x: pxToVw(-50),
    scale: 0.5,
    opacity: 0,
    duration: 0.5
  });
};
</script>
<style scoped>
    .dot-content-container{
        position: relative;
        display: inline-block;
    }
     .popover-container{
        position: absolute;
        width: 549px;
        height: 165px;
        padding: 20px;
        background: url('../assets/images/literaryDrama/drama-popup-bib-1.png') no-repeat center center / cover;
        font-size: 20px;
        font-family: 'Alibaba-PuHuiTi-Light';
        line-height: 40px;
        color: #403321;
        font-weight: 300;
        transform: scale(0.5);
        opacity: 0;
        .popover-divider{
            height: 2px;
            margin: 10px 0;
            background: url('../assets/images/literaryDrama/drama-popup-divider-1.png') no-repeat center center / cover;
        }
    }
</style>