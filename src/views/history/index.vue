<template>
  <div class="history">
    <hero></hero>
    <horizontal></horizontal>
    <vertical></vertical>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import hero from './hero/index.vue'
import horizontal from './horizontal/index.vue'
import vertical from './vertical/index.vue'

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

let horizontalScrollTrigger = null
let resizeHandler = null

/**
 * 初始化 horizontal 的横向滚动效果
 * 当 horizontal 的顶部到达浏览器顶部时，开始横向移动
 */
const initHorizontalScroll = async () => {
  await nextTick()
  
  // 等待内容完全加载，包括图片等资源
  await new Promise(resolve => setTimeout(resolve, 100))
  
  const horizontalContainer = document.querySelector('.horizontal-scroll-container')
  const contentElement = document.querySelector('.horizontal-scroll-container .content')
  
  if (!horizontalContainer || !contentElement) return
  
  // 如果已经创建过，先清理
  if (horizontalScrollTrigger) {
    horizontalScrollTrigger.kill()
  }
  
  // 动态计算内容的实际宽度
  // 使用 scrollWidth 获取内容的完整宽度（包括溢出部分）
  const contentWidth = horizontalContainer.scrollWidth
  // 获取容器的可视宽度
  const containerWidth = horizontalContainer.clientWidth
  // 计算需要移动的距离（总宽度减去可视宽度）
  const moveDistance = -(contentWidth - containerWidth)
  
  // 如果内容宽度小于等于容器宽度，不需要横向滚动
  if (moveDistance >= 0) {
    return
  }
  
  // 使用计算出的移动距离作为滚动距离
  const scrollDistance = Math.abs(moveDistance)
  
  // 当 horizontal-scroll-container 的顶部到达浏览器顶部时，开始横向移动
  horizontalScrollTrigger = ScrollTrigger.create({
    trigger: '.horizontal-scroll-container',
    start: 'top top', // 当元素顶部到达视口顶部时开始
    end: `+=${scrollDistance}`, // 滚动距离等于内容宽度
    scrub: true, // 与滚动同步，平滑跟随
    pin: true, // 在横向滚动期间固定容器
    anticipatePin: 1,
    animation: gsap.to('.content', {
      x: moveDistance, // 横向向左移动计算出的距离
      ease: 'none' // 线性动画，与滚动完全同步
    }),
    invalidateOnRefresh: true,
  })
  
  // 刷新 ScrollTrigger 以确保计算正确
  ScrollTrigger.refresh()
}

onMounted(() => {
  initHorizontalScroll()
  
  // 监听窗口大小改变，重新计算
  resizeHandler = () => {
    if (horizontalScrollTrigger) {
      horizontalScrollTrigger.kill()
      initHorizontalScroll()
    }
  }
  
  window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => {
  if (horizontalScrollTrigger) {
    horizontalScrollTrigger.kill()
  }
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
  }
})

</script>