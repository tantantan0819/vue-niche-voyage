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
import { pxToVw, pxToVh } from '@/utils/viewportUtils';
import architecture from './architecture/index.vue'
import literaryDrama from './literaryDrama/index.vue'
import culture from './culture/index.vue'
import folkways from './folkways/index.vue'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { preloadImages } from "@/utils/preloadImages";

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

// ===================== DOM 引用 =====================
const container = ref(null);

// ===================== 批量视差功能 =====================
/**
 * 批量视差功能：基于ScrollTrigger和fromTo的高级视差控制
 * 支持通过data属性配置视差参数，并自动转换像素值为视口单位
 * 针对竖向滚动优化
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
      axis: el.dataset.parallaxAxis || 'y',
      // 起始位置（元素进入视口时的位置）
      fromValue: parseFloat(el.dataset.parallaxFrom) || 0,
      // 结束位置（元素离开视口时的位置）
      toValue: parseFloat(el.dataset.parallaxTo) || 100,
      // 视差速度（影响动画进度）
      speed: parseFloat(el.dataset.parallaxSpeed) || 1,
      // 触发点：元素进入视口的位置（竖向滚动默认值）
      triggerStart: el.dataset.parallaxTriggerStart || "top bottom",
      // 结束点：元素离开视口的位置（竖向滚动默认值）
      triggerEnd: el.dataset.parallaxTriggerEnd || "bottom top",
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
      parallaxWrapper.style.marginTop = computedStyle.marginTop;
      parallaxWrapper.style.marginRight = computedStyle.marginRight;
      parallaxWrapper.style.marginBottom = computedStyle.marginBottom;
      parallaxWrapper.style.marginLeft = computedStyle.marginLeft;
      parallaxWrapper.style.padding = computedStyle.padding;
      parallaxWrapper.style.display = computedStyle.display;
      parallaxWrapper.style.float = computedStyle.float;
      parallaxWrapper.style.zIndex = computedStyle.zIndex;

      // 复制 flex 相关属性，确保 flex 布局不被破坏
      parallaxWrapper.style.flexDirection = computedStyle.flexDirection;
      parallaxWrapper.style.alignItems = computedStyle.alignItems;
      parallaxWrapper.style.justifyContent = computedStyle.justifyContent;
      parallaxWrapper.style.flexWrap = computedStyle.flexWrap;
      parallaxWrapper.style.alignContent = computedStyle.alignContent;
      parallaxWrapper.style.gap = computedStyle.gap;

      // 关键：确保包装器不会影响布局
      parallaxWrapper.style.boxSizing = 'border-box';
      parallaxWrapper.style.transformStyle = 'preserve-3d';
      // 重要：对于有绝对定位子元素的元素，确保包装器不会创建新的定位上下文
      // 通过设置 will-change 来优化性能，但不影响定位
      parallaxWrapper.style.willChange = 'transform';

      // 将元素移动到包装器内
      el.parentNode.insertBefore(parallaxWrapper, el);
      parallaxWrapper.appendChild(el);

      // 标记元素已经有包装器
      el.dataset.parallaxWrapper = 'true';

      // 重置元素的定位属性，使其在包装器内正常显示
      // 但保留其他样式不变，确保CSS动画仍然有效
      // 重要：保持原元素的 position 属性，这样其绝对定位的子元素（如 annotation-dot）仍能正确定位
      el.style.position = computedStyle.position === 'static' ? 'relative' : computedStyle.position;
      el.style.top = 'auto';
      el.style.left = 'auto';
      el.style.right = 'auto';
      el.style.bottom = 'auto';
      // margin 已经在包装器上了，所以子元素的 margin 应该被移除
      el.style.margin = '0';

      // 如果原元素是 flex 容器，需要保持其 flex 属性，确保内部布局正常
      if (computedStyle.display === 'flex' || computedStyle.display === 'inline-flex') {
        el.style.display = computedStyle.display;
        el.style.flexDirection = computedStyle.flexDirection;
        el.style.alignItems = computedStyle.alignItems;
        el.style.justifyContent = computedStyle.justifyContent;
        el.style.flexWrap = computedStyle.flexWrap;
        el.style.alignContent = computedStyle.alignContent;
        el.style.gap = computedStyle.gap;
      }

      // 关键修复：确保原元素完全填充包装器，这样绝对定位的子元素能正确定位
      // 对于 flex 容器，保持自动尺寸；对于其他元素，填充包装器
      if (computedStyle.display === 'flex' || computedStyle.display === 'inline-flex') {
        // flex 容器保持自动尺寸，但确保它能正确填充
        el.style.width = '100%';
        el.style.height = '100%';
        el.style.minWidth = '0';
        el.style.minHeight = '0';
        el.style.boxSizing = 'border-box';
      } else {
        // 非 flex 元素：确保完全填充包装器
        if (!computedStyle.width || computedStyle.width === 'auto') {
          el.style.width = '100%';
        } else {
          el.style.width = computedStyle.width;
        }
        if (!computedStyle.height || computedStyle.height === 'auto') {
          el.style.height = '100%';
        } else {
          el.style.height = computedStyle.height;
        }
      }
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
  // 初始化视差效果
  await initBatchParallax();
  // 初始化描述文本渐显动画
  initDescriptionOpacityAnimation()
});

onUnmounted(() => {
  // 清理所有 ScrollTrigger 实例
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>