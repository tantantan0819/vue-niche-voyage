<template>
  <div class="wrapper">
    22
    <div class="box-1"></div>
    <div class="box-1"></div>
    <div class="box-1"></div>
    <div class="box-1"></div>
    <div class="box-1"></div>
    <div class="box-1"></div>
    <div class="box-1"></div>
    <div class="box-1"></div>
    <div class="box-wrapper">

    </div>
    <p>222  </p>
    <div class="img-bg" v-lazy="bgUrl">

    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, nextTick, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import {pxToVhPx, pxToVw, pxToVwPx} from "@/utils/viewportUtils";
import bgUrl from '@/assets/images/xiangxiong/xx-image-3-wind.png'
import bgImg from "@/assets/images/sqhx/sqhx-element-circle.png";
// 注册 ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin)

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

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
    background-color: red;
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
.img-bg{
  width: 4071px;
  height: 881px;
  //background-image: url("@/assets/images/xiangxiong/xx-image-3-wind.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>