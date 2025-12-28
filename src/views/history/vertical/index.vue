<template>
  <div class="vertical-section" ref="container">
    <!-- 建筑篇 -->
    <architecture/>
    <!-- 美术篇 -->
    <culture/>
    <!-- 戏剧篇 -->
    <literaryDrama/>
    <!-- 民俗篇 -->
    <folkways/>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import architecture from './architecture/index.vue'
import literaryDrama from './literaryDrama/index.vue'
import culture from './culture/index.vue'
import folkways from './folkways/index.vue'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ===================== 全局初始化 =====================
gsap.registerPlugin(ScrollTrigger);

// ===================== DOM 引用 =====================
const container = ref(null);
/**
 * 初始化描述文本渐显动画
 */
const initDescriptionOpacityAnimation = () => {
  document.querySelectorAll('.description').forEach((desc) => {
    gsap.fromTo(
        desc,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: desc,
            start: 'bottom-=300px center+=100',
            end: 'top top+=100px',
            scrub: true,
          },
        }
    );
  });
};

onMounted(async () => {
  // 等待所有内容加载完成，包括 horizontal 的 ScrollTrigger 初始化
  await nextTick();
  await new Promise(resolve => setTimeout(resolve, 200));

  // 初始化描述文本渐显动画
  initDescriptionOpacityAnimation()
  
  // 批量视差功能已移至父组件 history/index.vue
  // 刷新 ScrollTrigger 以确保位置计算正确
  ScrollTrigger.refresh();

});

onUnmounted(() => {
  // 注意：批量视差的 ScrollTrigger 由父组件清理，这里只清理本组件的
  // 清理本组件的 ScrollTrigger（如果有的话）
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style scoped>
.vertical-section {
  width: 1920px;
  height: 100vh;
  flex-shrink: 0;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  right: -960px;
  will-change: scroll-position;
  transform: translateZ(0); /* 启用硬件加速 */
  backface-visibility: hidden; /* 减少闪烁 */
  -webkit-overflow-scrolling: touch; /* iOS 平滑滚动 */
  white-space: normal;
}
</style>