<!--
 * @Author: ShirleyWang 1374901698@qq.com
 * @Date: 2026-01-04 23:32:55
 * @LastEditors: ShirleyWang 1374901698@qq.com
 * @LastEditTime: 2026-01-13 23:16:04
 * @FilePath: /vue-niche-voyage/src/components/dotPopover.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
   <div class="dot-content-container">
      <div class="lamp-item-wrap" @click="openOrClosePopover">
        <div class="lamp-item-core"></div>
        <div class="lamp-item"></div>
      </div>
      <div class="popover-container" ref="popoverElement">
        <div class="popover-title">·{{ title }}</div>
        <div class="popover-divider"></div>
        <div class="popover-content" @click="openLink">{{ content }}</div>
      </div>
   </div>
</template>
<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap';
import { pxToVw } from '../utils/viewportUtils';
import { linkMap } from '../utils/linkMap';
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
 * 打开弹窗
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
 * 关闭弹窗
 */
const closeProcession = () => {
  gsap.to(popoverElement.value, {
    x: pxToVw(-50),
    scale: 0.5,
    opacity: 0,
    duration: 0.5
  });
};

// 跳转链接
const openLink = () => {
  const link = linkMap[props.content];
  window.open(link, '_blank');
}
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
        line-height: 40px;
        color: #403321;
        font-weight: 300;
        transform: scale(0.5);
        opacity: 0;
        div{
            font-family: 'Alibaba-PuHuiTi-Light';
        }
        .popover-divider{
            height: 2px;
            margin: 10px 0;
            background: url('../assets/images/literaryDrama/drama-popup-divider-1.png') no-repeat center center / cover;
        }
        .popover-content{
          cursor: pointer;
        }
    }
</style>