<template>
  <div class="horizontal-scroll-container" ref="container">
    <div class="content" ref="contentRef">
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
import { pxToVw, pxToVh } from '@/utils/viewportUtils';

import xiangxiong from './xiangxiong/index.vue'
import tubo from './tubo/index.vue'
import yuan from './yuan/index.vue'
import jindai from './jindai/index.vue'
import NewChina from './newChina/index.vue'
import chamagudao from './chamagudao/index.vue'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { preloadImages } from "@/utils/preloadImages";

// 定义事件
const emit = defineEmits(['scroll-complete']);

// ===================== 全局初始化 =====================
gsap.registerPlugin(ScrollTrigger);
// GSAP 全局配置（优化性能和精度）
gsap.config({
  autoSleep: false, // 禁用自动休眠
  precision: 0.001  // 提高动画精度
});
ScrollTrigger.config({
  ignoreMobileResize: true, // 忽略移动端resize抖动
  force3D: true, // 强制硬件加速
  limitCallbacks: true // 限制重复回调
});

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

  const maxScroll = container.value.scrollWidth - container.value.clientWidth;
  const currentScroll = container.value.scrollLeft;
  const isAtEnd = currentScroll >= maxScroll - 1;

  // 如果已经到达最右端且继续向右滚动，不阻止默认行为，让滚轮事件传递到竖向滚动
  if (isAtEnd && e.deltaY > 0) {
    // 不阻止默认行为，允许竖向滚动
    return;
  }

  // 否则，阻止默认行为并处理横向滚动
  e.preventDefault();
  wheelDeltaBuffer += e.deltaY;
  if (!wheelRafId) {
    wheelRafId = requestAnimationFrame(applyBufferedWheel);
  }
};

// ===================== 批量视差功能使用说明 =====================
/**
 * 批量视差功能基于ScrollTrigger和fromTo实现，支持通过HTML属性灵活配置
 *
 * 使用方法：
 * 在需要添加视差效果的元素上添加以下data属性：
 *
 * 必选属性：
 * - data-parallax="true" - 启用视差效果
 *
 * 可选属性：
 * - data-parallax-axis="x|y" - 视差方向（默认：x）
 * - data-parallax-from="数值" - 元素进入视口时的起始位置（默认：0）
 * - data-parallax-to="数值" - 元素离开视口时的结束位置（默认：100）
 * - data-parallax-speed="数值" - 视差速度（影响动画进度，默认：1）
 * - data-parallax-trigger-start="字符串" - 触发起始点（默认："left right"）
 * - data-parallax-trigger-end="字符串" - 触发结束点（默认："right left"）
 * - data-parallax-center-lock="true|false" - 是否在视口中心时保持原位置（默认：true）
 * - data-parallax-ease="字符串" - 动画缓动函数（默认："power1.out"）
 *
 * 示例：
 * <div
 *   data-parallax="true"
 *   data-parallax-axis="x"
 *   data-parallax-from="-200"
 *   data-parallax-to="200"
 *   data-parallax-speed="1"
 *   data-parallax-center-lock="true"
 * >
 *   视差元素
 * </div>
 *
 * 核心特性：
 * 1. 中心锁定：元素在视口中心时保持预期位置，进入和离开时产生视差
 * 2. 批量配置：通过HTML属性快速配置多个视差元素
 * 3. 灵活控制：支持自定义方向、速度、触发点等
 * 4. 性能优化：利用GSAP的硬件加速和高效动画系统
 */

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

/**
 * 批量视差功能：基于ScrollTrigger和fromTo的高级视差控制
 * 支持通过data属性配置视差参数，并自动转换像素值为视口单位
 */
const initBatchParallax = async () => {
  await nextTick(); // 等待DOM完全渲染
  if (!container.value) return;

  // 获取所有带data-parallax属性的元素
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  parallaxElements.forEach(el => {
    // 解析视差配置
    const config = {
      // 视差方向：x 或 y
      axis: el.dataset.parallaxAxis || 'x',
      // 起始位置（元素进入视口时的位置）
      fromValue: parseFloat(el.dataset.parallaxFrom) || 0,
      // 结束位置（元素离开视口时的位置）
      toValue: parseFloat(el.dataset.parallaxTo) || 100,
      // 视差速度（影响动画进度）
      speed: parseFloat(el.dataset.parallaxSpeed) || 1,
      // 触发点：元素进入视口的位置
      triggerStart: el.dataset.parallaxTriggerStart || "left right",
      // 结束点：元素离开视口的位置
      triggerEnd: el.dataset.parallaxTriggerEnd || "right left",
      // 是否在视口中心时保持预期位置
      centerLock: el.dataset.parallaxCenterLock !== "false",
      // 动画缓动函数
      ease: el.dataset.parallaxEase || "power1.out"
    };

    // 根据视差轴选择合适的单位转换函数
    const convertUnit = config.axis === 'x' ? pxToVw : pxToVh;

    // 转换像素值为视口单位
    const convertValue = (value) => {
      // 如果值是字符串且包含单位，直接使用
      if (typeof value === 'string' && /[a-z%]/.test(value)) {
        return value;
      }
      // 否则将数值转换为视口单位
      return convertUnit(value);
    };

    // 计算中心锁定的位置（如果启用）
    let fromProps, toProps;
    if (config.centerLock) {
      // 中心锁定模式：元素在视口中心时保持原位置，进入和离开时产生视差
      const centerValue = 0;

      // 计算从起始位置到结束位置的总距离
      const totalDistance = Math.abs(config.toValue - config.fromValue);

      // 根据轴选择合适的视口单位转换函数
      const convertToViewportUnit = config.axis === 'x' ? pxToVw : pxToVh;

      // 将距离的一半转换为视口单位
      const halfDistance = convertToViewportUnit(totalDistance / 2);

      // 根据起始和结束位置的关系确定方向
      if (config.fromValue < config.toValue) {
        // 从左到右/从上到下移动
        fromProps = { [config.axis]: `-${halfDistance}` };
        toProps = { [config.axis]: halfDistance };
      } else {
        // 从右到左/从下到上移动
        fromProps = { [config.axis]: halfDistance };
        toProps = { [config.axis]: `-${halfDistance}` };
      }
    } else {
      // 普通模式：直接从fromValue动画到toValue，并转换为视口单位
      const convertToViewportUnit = config.axis === 'x' ? pxToVw : pxToVh;
      fromProps = { [config.axis]: convertToViewportUnit(config.fromValue) };
      toProps = { [config.axis]: convertToViewportUnit(config.toValue) };
    }

    // 解决CSS动画与GSAP视差冲突的核心方案
    // 创建一个包装元素来分离CSS动画和GSAP视差效果
    let parallaxWrapper;

    // 检查元素是否已经有包装器
    if (!el.dataset.parallaxWrapper) {
      // 获取元素的计算样式
      const computedStyle = window.getComputedStyle(el);

      // 创建包装器元素
      parallaxWrapper = document.createElement('div');
      parallaxWrapper.className = 'parallax-animation-wrapper';

      // 设置包装器的样式，使其与原元素完全一致
      parallaxWrapper.style.position = computedStyle.position;
      parallaxWrapper.style.top = computedStyle.top;
      parallaxWrapper.style.left = computedStyle.left;
      parallaxWrapper.style.right = computedStyle.right;
      parallaxWrapper.style.bottom = computedStyle.bottom;
      parallaxWrapper.style.width = computedStyle.width;
      parallaxWrapper.style.height = computedStyle.height;
      parallaxWrapper.style.margin = computedStyle.margin;
      parallaxWrapper.style.padding = computedStyle.padding;
      parallaxWrapper.style.display = computedStyle.display;
      parallaxWrapper.style.float = computedStyle.float;
      parallaxWrapper.style.zIndex = computedStyle.zIndex;

      // 关键：确保包装器不会影响布局
      parallaxWrapper.style.boxSizing = 'border-box';
      parallaxWrapper.style.transformStyle = 'preserve-3d';

      // 将元素移动到包装器内
      el.parentNode.insertBefore(parallaxWrapper, el);
      parallaxWrapper.appendChild(el);

      // 标记元素已经有包装器
      el.dataset.parallaxWrapper = 'true';

      // 重置元素的定位属性，使其在包装器内正常显示
      // 但保留其他样式不变，确保CSS动画仍然有效
      el.style.position = 'relative';
      el.style.top = 'auto';
      el.style.left = 'auto';
      el.style.right = 'auto';
      el.style.bottom = 'auto';
      el.style.margin = '0';
    } else {
      // 如果已经有包装器，找到它（应该是父元素）
      parallaxWrapper = el.parentNode;
    }

    // 现在将视差效果应用到包装器上，而不是直接应用到有CSS动画的元素上
    // 这样CSS动画在内部元素上运行，视差效果在外部包装器上运行，两者互不干扰
    gsap.fromTo(parallaxWrapper,
        fromProps, // 起始状态
        {
          ...toProps, // 结束状态
          ease: config.ease,
          scrollTrigger: {
            trigger: parallaxWrapper, // 使用包装器作为触发器
            scroller: container.value,
            horizontal: config.axis === 'x',
            vertical: config.axis === 'y',
            start: config.triggerStart,
            end: config.triggerEnd,
            scrub: config.speed, // scrub值控制视差速度
            invalidateOnRefresh: true
          }
        }
    );
  });
};

/**
 * 初始化所有视差功能
 */
const initParallax = async () => {
  await initTraditionalParallax(); // 保留传统视差功能
  await initBatchParallax(); // 初始化新的批量视差功能
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
    initParallax(); // 视差元素
    initDescriptionOpacityAnimation(); // 描述文本渐显

    // 初始检查一次滚动状态
    checkScrollComplete();
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

  // 清理GSAP动画和ScrollTrigger
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.killTweensOf('*');

  // 清空引用，避免内存泄漏
  parallaxElements = [];
  container.value = null;
  contentRef.value = null;
});
</script>

<style scoped>
.horizontal-scroll-container {
  width: 100vw;
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
/* 批量视差元素基础样式 */
[data-parallax] {
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}


</style>