<template>
  <div class="content">
    <div class="span-01">
      111
    </div>
    <div class="span-02">
      <div class="item" v-for="item in 10" :key="item">{{ item }}</div>
    </div>
    <div class="span-03">
      2222
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

let scrollTriggerInstance = null;

onMounted(async () => {
  // 等待 DOM 完全渲染
  await nextTick();
  
  // 等待两帧确保布局完全稳定
  await new Promise(resolve => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve(null);
      });
    });
  });

  const span02 = document.querySelector('.span-02');
  if (!span02) {
    console.error('找不到 .span-02 元素');
    return;
  }

  // 计算需要移动的距离：元素宽度减去视口宽度
  const elementWidth = span02.scrollWidth || span02.offsetWidth; // 6000px
  const viewportWidth = window.innerWidth; // 1920px
  const horizontalDistance = Math.max(elementWidth - viewportWidth, 0); // 4080px

  console.log('元素宽度:', elementWidth, '视口宽度:', viewportWidth, '移动距离:', horizontalDistance);

  if (horizontalDistance <= 0) {
    console.warn('横向移动距离为0，无需创建动画');
    return;
  }

  // 设置初始位置和优化属性
  gsap.set('.span-02', { 
    x: 0,
    willChange: 'transform'
  });

  // 创建横向滚动动画
  const animation = gsap.to('.span-02', {
    x: -horizontalDistance,
    ease: 'none',
    scrollTrigger: {
      trigger: '.span-02',
      start: 'top top', // 当元素顶部到达视口顶部时开始
      end: () => `+=${horizontalDistance}`, // 滚动距离等于横向移动距离
      scrub: true, // 动画跟随滚动进度
      pin: true, // 固定元素在顶部
      anticipatePin: 1, // 预判固定，提升性能
      invalidateOnRefresh: true, // 刷新时重新计算
      onUpdate: (self) => {
        // 调试信息
        if (self.progress === 0 || self.progress === 1 || self.progress % 0.25 < 0.01) {
          console.log('滚动进度:', (self.progress * 100).toFixed(1) + '%');
        }
      }
    }
  });

  scrollTriggerInstance = animation.scrollTrigger;

  // 刷新 ScrollTrigger 确保正确计算
  ScrollTrigger.refresh();
  
  console.log('横向滚动动画已创建');
});

onUnmounted(() => {
  // 清理 ScrollTrigger 实例
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.trigger === '.span-02') {
      trigger.kill();
    }
  });
});
</script>
<style scoped>
.content{
  width: 100%;
  min-height: 100vh;
  overflow-x: visible;
  position: relative;
}
.span-01{
  width: 100%;
  height: 1080px;
  background-color: #f8d6d6;
}
.span-02{
  width: 6000px;
  height: 1080px;
  background-color: #d3effc;
  display: flex;
  overflow: visible;
  position: relative;
  will-change: transform;
}

.span-02 .item{
  width: 600px;
  height: 600px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
}
.span-03{
  width: 100%;
  height: 2000px;
  background-color: #f9dcfd;
}
</style>
