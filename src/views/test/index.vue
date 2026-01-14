<template>
  <div class="wrapper">
    <div class="box-1"></div>
    <div class="box-wrapper">
      <div class="box">
        <div class="item item-1"></div>
        <div class="item item-2"></div>
        <div class="item item-3"></div>
        <div class="item item-4"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, nextTick, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import {pxToVhPx, pxToVw, pxToVwPx} from "@/utils/viewportUtils";
// 注册 ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin)

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

onMounted(()=>{
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.box-wrapper',
      start: 'top top', // 当元素顶部到达视口顶部时开始
      end: '+=3000', // 增加滚动距离，让动画更平滑（约3个视口高度）
      scrub: 1, // 平滑跟随，数值越大越平滑（1表示轻微延迟）
      pin: true,
      invalidateOnRefresh: true
    }
  })
  // 第一步：向左移动
  tl.to('.box',{
    x: pxToVw(-1920),
    duration: 1
  })
  // 第二步：向上移动
  tl.to('.box',{
    y: pxToVw(-1080),
    duration: 1
  })
  // 第三步：向右移动
  tl.to('.box',{
    x: pxToVw(0), // 回到初始位置（向右移动）
    duration: 1
  })
})
</script>
<style>
.wrapper{
  width: 1920px;
  height: 6000px;
  .box-1{
    width: 1920px;
    height: 1080px;
  }
  .box-wrapper{
    width: 1920px;
    height: 1080px;
    overflow: hidden;
  }
  .box{
    width: 3840px;
    height: 2160px;
    background-color: rgba(253, 253, 188, 0.52);
    position: relative;
    .item{
      width: 1920px;
      height: 1080px;
    }
    .item-1{
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(176, 112, 219, 0.33);
    }
    .item-2{
      position: absolute;
      left: 1920px;
      top: 0;
      background-color: rgba(215, 219, 112, 0.33);
    }
    .item-3{
      position: absolute;
      left: 0;
      top: 1080px;
      background-color: rgba(219, 112, 147, 0.33);
    }
    .item-4{
      position: absolute;
      left: 1920px;
      bottom: 0px;
      background-color: rgba(112, 219, 174, 0.33);
    }
  }
}
</style>