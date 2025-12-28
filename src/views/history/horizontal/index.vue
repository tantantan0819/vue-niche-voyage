<template>
  <div class="horizontal-scroll-container" ref="container">
    <div class="content" ref="contentRef">
      <!-- 史前回响 -->
      <sqhx/>
      <!-- 象雄 -->
      <xiangxiong></xiangxiong>
      <!-- 吐蕃 -->
      <tubo></tubo>
      <!-- 元朝 -->
      <yuan></yuan>
      <!-- 茶马古道 -->
      <chamagudao></chamagudao>
      <!-- 近代 -->
      <jindai></jindai>
      <!-- 新中国 -->
      <new-china/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';

import xiangxiong from './xiangxiong/index.vue'
import tubo from './tubo/index.vue'
import yuan from './yuan/index.vue'
import jindai from './jindai/index.vue'
import NewChina from './newChina/index.vue'
import chamagudao from './chamagudao/index.vue'
import sqhx from './sqhx/index.vue'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { preloadImages } from "@/utils/preloadImages";

// 定义事件
const emit = defineEmits(['scroll-complete']);

// ===================== 全局初始化 =====================
gsap.registerPlugin(ScrollTrigger);

// ===================== DOM 引用 & 响应式数据 =====================
let smoothScrollLeft = null;
let wheelRafId = null;
let parallaxRafId = null;
let lazyLoadRafId = null;
let wheelDeltaBuffer = 0;

// DOM 引用
const container = ref(null);
const contentRef = ref(null);


// 滚动相关状态
let scrollAmount = 0;
let parallaxElements = []; // 存储视差元素信息
let parallaxSetters = []; // gsap quickSetter列表
let lazyBgElements = []; // 缓存待懒加载的元素及位置信息
let isScrollComplete = false; // 标记横向滚动是否完成

// ===================== 工具函数 =====================
/**
 * 懒加载背景图（滚动时加载可视区域内的图片）
 */
const lazyLoadImages = () => {
  if (!container.value || lazyBgElements.length === 0) return;
  const viewLeft = container.value.scrollLeft - 200;
  const viewRight = viewLeft + container.value.clientWidth + 400; // 预加载 200px

  lazyBgElements = lazyBgElements.filter(item => {
    const elRight = item.left + item.width;
    if (elRight > viewLeft && item.left < viewRight) {
      item.el.style.backgroundImage = `url(${item.el.dataset.bg})`;
      item.el.removeAttribute('data-bg');
      return false; // 已加载，移除
    }
    return true; // 继续保留待加载
  });
};

/**
 * 平滑滚动处理（阻止默认滚轮行为，优化滚动体验）
 * @param {WheelEvent} e - 滚轮事件对象
 */

const applyBufferedWheel = () => {
  wheelRafId = null;
  if (!container.value) return;
  scrollAmount += wheelDeltaBuffer;
  wheelDeltaBuffer = 0;

  const maxScroll = container.value.scrollWidth - container.value.clientWidth;
  scrollAmount = Math.max(0, Math.min(scrollAmount, maxScroll));

  // 检测是否到达最右端（允许1px的误差）
  const isAtEnd = scrollAmount >= maxScroll - 1;

  // 如果刚到达最右端，发出完成事件
  if (isAtEnd && !isScrollComplete) {
    isScrollComplete = true;
    emit('scroll-complete');
  }

  // 如果还没到达最右端，重置完成状态
  if (!isAtEnd && isScrollComplete) {
    isScrollComplete = false;
  }

  smoothScrollLeft(scrollAmount);
};

const handleWheel = (e) => {
  if (!container.value) return;

  // 检查是否处于 pin 状态（由 ScrollTrigger 控制）
  const isPinned = container.value.hasAttribute('data-pinned');
  
  // 如果不在 pin 状态，完全不做任何处理，让页面正常竖向滚动
  // 这是关键：只有在 ScrollTrigger pin 住元素后，才允许横向滚动
  if (!isPinned) {
    return;
  }

  // 在 pin 状态下，ScrollTrigger 的 scrub 会处理滚动转换
  // 我们不需要在这里做任何处理，让 ScrollTrigger 完全控制
  // 但是，我们需要检查是否到达最左边，以便在到达边界时允许向上滚动回到 hero
  const maxScroll = container.value.scrollWidth - container.value.clientWidth;
  const currentScroll = container.value.scrollLeft;
  const isAtStart = currentScroll <= 1; // 到达最左边

  // 如果已经到达最左边且继续向上滚动，不阻止默认行为，允许回到 hero
  // ScrollTrigger 的 onLeaveBack 会处理解除 pin 的逻辑
  if (isAtStart && e.deltaY < 0) {
    return;
  }

  // 在 pin 状态下，让 ScrollTrigger 的 scrub 机制处理滚动
  // 不阻止默认行为，让页面滚动正常进行，ScrollTrigger 会将其转换为横向滚动
  // 注意：这里不调用 preventDefault，让 ScrollTrigger 的 scrub 正常工作
};

// ===================== 视差相关 =====================
/**
 * 初始化传统视差元素（收集所有带data-speed的元素）
 */
const initTraditionalParallax = async () => {
  await nextTick(); // 等待DOM完全渲染
  if (!container.value) return;

  // 获取所有带data-speed的元素
  const elements = document.querySelectorAll('[data-speed]');
  parallaxElements = Array.from(elements).map(el => {
    const speed = parseFloat(el.dataset.speed) || 1;
    // 预计算偏移系数，减少每帧计算量
    const speedFactor = (speed - 1) * 0.15;
    return {
      el,
      speedFactor
    };
  });
  // 为每个元素创建 quickSetter，避免反复字符串拼接
  parallaxSetters = parallaxElements.map(item => gsap.quickSetter(item.el, "x", "px"));
};

/**
 * 更新传统视差效果（核心逻辑，分批处理避免阻塞）
 */
const updateTraditionalParallax = () => {
  const scrollLeft = container.value.scrollLeft;

  for (let i = 0; i < parallaxElements.length; i++) {
    const item = parallaxElements[i];
    const setter = parallaxSetters[i];
    setter(scrollLeft * item.speedFactor);
  }
};

const scheduleTraditionalParallax = () => {
  if (parallaxRafId) return;
  parallaxRafId = requestAnimationFrame(() => {
    parallaxRafId = null;
    updateTraditionalParallax();
  });
};


const scheduleLazyLoad = () => {
  if (lazyLoadRafId) return;
  lazyLoadRafId = requestAnimationFrame(() => {
    lazyLoadRafId = null;
    lazyLoadImages();
  });
};

/**
 * 检测横向滚动是否完成
 */
const checkScrollComplete = () => {
  if (!container.value) return;
  const maxScroll = container.value.scrollWidth - container.value.clientWidth;
  const currentScroll = container.value.scrollLeft;
  const isAtEnd = currentScroll >= maxScroll - 1;

  if (isAtEnd && !isScrollComplete) {
    isScrollComplete = true;
    emit('scroll-complete');
  } else if (!isAtEnd && isScrollComplete) {
    isScrollComplete = false;
  }
};



/**
 * 初始化所有描述文本渐显动画
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
            scroller: '.horizontal-scroll-container',
            horizontal: true,
            start: 'left-=300px center',
            end: 'right right-=400px',
            scrub: true,
          },
        }
    );
  });
};





// ===================== 生命周期 =====================
onMounted(async () => {
  await nextTick(); // 等待DOM挂载完成
  await preloadImages();
  // 缓存待懒加载元素与位置信息，避免滚动时重复测量
  lazyBgElements = Array.from(document.querySelectorAll('[data-bg]')).map(el => ({
    el,
    left: el.offsetLeft,
    width: el.offsetWidth || (parseFloat(getComputedStyle(el).width) || 0)
  }));

  smoothScrollLeft = gsap.quickTo(container.value, "scrollLeft", {
    duration: 0.5,
    ease: "power2.out"
  });
  // 初始化懒加载
  lazyLoadImages();
  if (container.value) {
    // 绑定事件
    container.value.addEventListener('wheel', handleWheel, { passive: false });
    container.value.addEventListener('scroll', scheduleLazyLoad, { passive: true });
    container.value.addEventListener('scroll', scheduleTraditionalParallax, { passive: true });
    container.value.addEventListener('scroll', checkScrollComplete, { passive: true });

    // 初始化动画
    // 批量视差功能已移至父组件 history/index.vue
    await nextTick();
    requestAnimationFrame(() => {
      // 初始检查一次滚动状态
      checkScrollComplete();
    });
  }
});

onUnmounted(() => {
  // 清理事件监听
  if (container.value) {
    container.value.removeEventListener('wheel', handleWheel);
    container.value.removeEventListener('scroll', scheduleLazyLoad);
    container.value.removeEventListener('scroll', checkScrollComplete);
  }

  if (wheelRafId) cancelAnimationFrame(wheelRafId);
  if (parallaxRafId) cancelAnimationFrame(parallaxRafId);
  if (lazyLoadRafId) cancelAnimationFrame(lazyLoadRafId);

  // 注意：批量视差的 ScrollTrigger 由父组件清理，这里只清理本组件的
  // 清理本组件的 ScrollTrigger（如果有的话）
  // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  // gsap.killTweensOf('*');

  // 清空引用，避免内存泄漏
  parallaxElements = [];
  container.value = null;
  contentRef.value = null;
});
</script>

<style scoped>
.horizontal-scroll-container {
  width: 1920px;
  height: 100vh;
  overflow: hidden;
  white-space: nowrap;
  transform: translateZ(0);
  position: relative;
  will-change: scroll-position; /* 新增：优化滚动性能 */
  contain: strict; /* 新增：严格限制布局影响 */
}

.content {
  display: inline-flex;
  height: 100%;
  position: relative;
  will-change: transform; /* 新增 */
}

/* 关键修复：视差元素不强制修改定位，保留原有定位方式 */
[data-speed] {
  will-change: transform; /* 仅优化性能，不修改定位 */
  /* 移除强制relative，避免覆盖absolute定位 */
}


</style>