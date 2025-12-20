<template>
  <div class="scroll-root" ref="root">
    <!-- 横向布局-->
    <section class="horizontal-wrapper" ref="horizontalWrapper">
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
<!--           近代-->
          <jindai></jindai>
        </div>
      </div>
    </section>
    <!-- 竖向布局 -->
    <section class="vertical">
      <!-- 建筑篇 -->
      <architecture></architecture>
      <!-- 美术篇 -->
      <culture></culture>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { pxToVw, pxToVh } from '../../utils/viewportUtils'
import xiangxiong from './xiangxiong.vue'
import tubo from './tubo.vue'
import yuan from './yuan.vue'
import chamagudao from './chamagudao.vue'
import jindai from './jindai.vue'
import architecture from './architecture.vue'
import culture from './culture.vue'
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

// ===================== DOM 引用 & 响应式数据 =====================
let smoothScrollLeft = null;
let wheelRafId = null;
let parallaxRafId = null;
let lazyLoadRafId = null;
let wheelDeltaBuffer = 0;

const root = ref(null)
const horizontalWrapper = ref(null)
const container = ref(null);
const contentRef = ref(null);

// 滚动相关状态
let scrollAmount = 0;
let parallaxElements = []; // 存储视差元素信息
let parallaxSetters = []; // gsap quickSetter列表
let lazyBgElements = []; // 缓存待懒加载的元素及位置信息

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
 */
const applyBufferedWheel = () => {
  wheelRafId = null;
  if (!container.value) return;

  // 如果横向滚动容器已经固定，不再处理 wheel 事件，避免干扰
  if (container.value.classList.contains('horizontal-scroll-fixed')) {
    wheelDeltaBuffer = 0;
    return;
  }

  scrollAmount += wheelDeltaBuffer;
  wheelDeltaBuffer = 0;

  // 如果设置了最大横向滚动限制，使用限制值；否则使用容器的最大滚动距离
  const maxScroll = maxHorizontalScrollLimit !== null
    ? maxHorizontalScrollLimit
    : (container.value.scrollWidth - container.value.clientWidth);
  scrollAmount = Math.max(0, Math.min(scrollAmount, maxScroll));
  smoothScrollLeft(scrollAmount);
};

// 存储 ScrollTrigger 实例引用，用于判断是否在控制范围内
let horizontalScrollTriggerInstance = null;
// 存储最大横向滚动距离，用于限制横向滚动
let maxHorizontalScrollLimit = null;

const handleWheel = (e) => {
  if (!container.value) return;

  // 如果横向滚动容器已经固定，不处理 wheel 事件，避免干扰
  if (container.value.classList.contains('horizontal-scroll-fixed')) {
    return;
  }

  // 如果横向滚动容器在 ScrollTrigger 控制范围内，不处理 wheel 事件
  // 让 ScrollTrigger 通过竖向滚动来控制横向滚动
  if (horizontalScrollTriggerInstance && horizontalScrollTriggerInstance.isActive) {
    // 在 ScrollTrigger 控制范围内，不阻止默认行为，让竖向滚动控制
    return;
  }

  // 不在 ScrollTrigger 控制范围内，使用原有的 wheel 处理
  e.preventDefault();
  wheelDeltaBuffer += e.deltaY;
  if (!wheelRafId) {
    wheelRafId = requestAnimationFrame(applyBufferedWheel);
  }
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

/**
 * 批量视差功能：基于ScrollTrigger和fromTo的高级视差控制
 * 支持横向和竖向内容的视差效果
 */
const initBatchParallax = async () => {
  await nextTick(); // 等待DOM完全渲染
  if (!container.value || !root.value) return;

  // 获取所有带data-parallax属性的元素
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  parallaxElements.forEach(el => {
    // 判断元素是在横向区域还是竖向区域
    const isInHorizontalSection = container.value.contains(el);
    const isInVerticalSection = !isInHorizontalSection && root.value.contains(el);

    // 解析视差配置
    const config = {
      axis: el.dataset.parallaxAxis || 'x',
      fromValue: parseFloat(el.dataset.parallaxFrom) || 0,
      toValue: parseFloat(el.dataset.parallaxTo) || 100,
      speed: parseFloat(el.dataset.parallaxSpeed) || 1,
      triggerStart: el.dataset.parallaxTriggerStart || (isInVerticalSection ? "top bottom" : "left right"),
      triggerEnd: el.dataset.parallaxTriggerEnd || (isInVerticalSection ? "bottom top" : "right left"),
      centerLock: el.dataset.parallaxCenterLock !== "false",
      ease: el.dataset.parallaxEase || "power1.out"
    };

    // 根据视差轴选择合适的单位转换函数
    const convertUnit = config.axis === 'x' ? pxToVw : pxToVh;

    // 转换像素值为视口单位
    const convertValue = (value) => {
      if (typeof value === 'string' && /[a-z%]/.test(value)) {
        return value;
      }
      return convertUnit(value);
    };

    // 计算中心锁定的位置（如果启用）
    let fromProps, toProps;
    if (config.centerLock) {
      const centerValue = 0;
      const totalDistance = Math.abs(config.toValue - config.fromValue);
      const convertToViewportUnit = config.axis === 'x' ? pxToVw : pxToVh;
      const halfDistance = convertToViewportUnit(totalDistance / 2);

      if (config.fromValue < config.toValue) {
        fromProps = { [config.axis]: `-${halfDistance}` };
        toProps = { [config.axis]: halfDistance };
      } else {
        fromProps = { [config.axis]: halfDistance };
        toProps = { [config.axis]: `-${halfDistance}` };
      }
    } else {
      const convertToViewportUnit = config.axis === 'x' ? pxToVw : pxToVh;
      fromProps = { [config.axis]: convertToViewportUnit(config.fromValue) };
      toProps = { [config.axis]: convertToViewportUnit(config.toValue) };
    }

    // 解决CSS动画与GSAP视差冲突的核心方案
    let parallaxWrapper;

    if (!el.dataset.parallaxWrapper) {
      const computedStyle = window.getComputedStyle(el);
      parallaxWrapper = document.createElement('div');
      parallaxWrapper.className = 'parallax-animation-wrapper';

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
      parallaxWrapper.style.boxSizing = 'border-box';
      parallaxWrapper.style.transformStyle = 'preserve-3d';

      el.parentNode.insertBefore(parallaxWrapper, el);
      parallaxWrapper.appendChild(el);
      el.dataset.parallaxWrapper = 'true';

      el.style.position = 'relative';
      el.style.top = 'auto';
      el.style.left = 'auto';
      el.style.right = 'auto';
      el.style.bottom = 'auto';
      el.style.margin = '0';
    } else {
      parallaxWrapper = el.parentNode;
    }

    // 根据元素所在区域选择正确的 scroller
    // 横向区域的元素使用横向滚动容器
    // 竖向区域的元素：由于 root.value 是自定义滚动容器，ScrollTrigger 需要使用它作为 scroller
    // 但需要确保 ScrollTrigger 能正确识别滚动事件
    const scroller = isInHorizontalSection ? container.value : root.value;

    // 构建 ScrollTrigger 配置
    const scrollTriggerConfig = {
      trigger: parallaxWrapper,
      scroller: scroller,
      start: config.triggerStart,
      end: config.triggerEnd,
      scrub: config.speed,
      invalidateOnRefresh: true
    };

    // 对于横向滚动，需要明确设置 horizontal
    if (isInHorizontalSection) {
      scrollTriggerConfig.horizontal = config.axis === 'x';
      scrollTriggerConfig.vertical = config.axis === 'y';
    } else {
      // 对于竖向滚动，明确设置 horizontal: false，确保使用竖向滚动
      scrollTriggerConfig.horizontal = false;
      // 对于竖向滚动，不需要设置 vertical，默认就是竖向的
    }

    // 调试信息（可以删除）
    if (isInVerticalSection && config.axis === 'y') {
      console.log('初始化竖向视差元素:', {
        element: el,
        scroller: scroller === root.value ? 'root' : 'other',
        config: scrollTriggerConfig
      });
    }

    gsap.fromTo(parallaxWrapper,
      fromProps,
      {
        ...toProps,
        ease: config.ease,
        scrollTrigger: scrollTriggerConfig
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

    // 初始化动画
    initParallax(); // 视差元素
    initDescriptionOpacityAnimation(); // 描述文本渐显
  }

  // 设置横向滚动容器的滚动逻辑，使其与竖向滚动联动
  // 等待一下确保所有组件都已完全渲染（包括竖向内容的 culture 和 architecture）
  await nextTick();
  await nextTick(); // 额外等待一次，确保子组件完全渲染
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      // 重新初始化视差，确保包括竖向内容的视差元素都被初始化
      initParallax();
      initHorizontalScrollTrigger();
      // 添加滚动监听，确保横向滚动容器在离开横向区域后保持在最后位置
      initScrollWatcher();
      // 刷新 ScrollTrigger，确保所有视差元素都能正确工作
      ScrollTrigger.refresh();
    });
  });

  function initHorizontalScrollTrigger() {
    const viewportWidth = window.innerWidth

    // 找到 jindai 组件，计算到近代结束的总宽度
    // 这样横向滚动到近代结束就会直接衔接竖向内容
    const jindaiElement = document.querySelector('.jindai');
    let hTotalWidth = contentRef.value.scrollWidth; // 默认使用整个宽度
    let maxHorizontalScroll = container.value.scrollWidth - container.value.clientWidth;

    if (jindaiElement) {
      // 计算到 jindai 结束的位置：jindai 的 offsetLeft + offsetWidth
      const jindaiEndPosition = jindaiElement.offsetLeft + jindaiElement.offsetWidth;
      // 计算需要滚动的距离：jindai 结束位置 - 视口宽度
      // 这样当横向滚动到 jindai 结束时，jindai 的右边缘会到达视口右边缘
      maxHorizontalScroll = Math.max(0, jindaiEndPosition - viewportWidth);
      // ScrollTrigger 的 end 值应该等于横向滚动需要滚动的距离
      hTotalWidth = maxHorizontalScroll;

      // 设置全局最大横向滚动限制，确保 wheel 事件也不会超过这个值
      maxHorizontalScrollLimit = maxHorizontalScroll;

      console.log('jindaiEndPosition:', jindaiEndPosition);
      console.log('viewportWidth:', viewportWidth);
      console.log('maxHorizontalScroll:', maxHorizontalScroll);
      console.log('hTotalWidth:', hTotalWidth);
      console.log('content total width:', contentRef.value.scrollWidth);
    }

    // 当横向滚动容器滚动到最右边时，继续滚动会触发竖向滚动
    // 使用 ScrollTrigger 来监听横向滚动容器的滚动位置，并同步横向滚动
    // 关键：使用 pin 来固定横向滚动容器，当滚动完成后自然释放，允许继续滚动到竖向内容
    // 使用更平滑的方式，避免跳动 - 在 pin 释放过程中不再修改 scrollLeft
    let isLeavingHorizontalSection = false; // 标记是否正在离开横向区域

    horizontalScrollTriggerInstance = ScrollTrigger.create({
      trigger: horizontalWrapper.value,
      start: 'top top',
      end: () => `+=${hTotalWidth}`,
      scrub: true,
      pin: true,
      pinSpacing: true, // 启用 pinSpacing，确保有足够空间继续滚动到竖向内容
      anticipatePin: 1,
      invalidateOnRefresh: true, // 刷新时重新计算
      onUpdate: (self) => {
        // 如果已经标记为离开状态，不再更新 scrollLeft，避免跳动
        if (isLeavingHorizontalSection || !container.value || maxHorizontalScroll <= 0) {
          return;
        }

        // 根据竖向滚动进度更新横向滚动容器的 scrollLeft
        const progress = self.progress;
        // 当进度接近 1 时，确保 scrollLeft 在最后位置
        if (progress >= 0.99) {
          // 接近结束时，直接设置为最大值，避免后续的微小调整
          if (container.value.scrollLeft < maxHorizontalScroll - 1) {
            container.value.scrollLeft = maxHorizontalScroll;
          }
        } else {
          // 正常滚动过程中，根据进度更新
          const targetScrollLeft = progress * maxHorizontalScroll;
          container.value.scrollLeft = Math.min(targetScrollLeft, maxHorizontalScroll);
        }
      },
      onLeave: () => {
        // 当离开横向滚动区域时，标记状态并固定横向滚动容器在最后位置
        isLeavingHorizontalSection = true;
        if (container.value && maxHorizontalScroll > 0) {
          // 立即设置到最大位置，并添加固定标记
          container.value.scrollLeft = maxHorizontalScroll;
          container.value.classList.add('horizontal-scroll-fixed');
        }
      },
      onEnterBack: (self) => {
        // 当从下方返回横向滚动区域时，清除离开标记并恢复正常的滚动控制
        isLeavingHorizontalSection = false;
        if (container.value && maxHorizontalScroll > 0) {
          container.value.classList.remove('horizontal-scroll-fixed');
          const progress = self.progress;
          const targetScrollLeft = progress * maxHorizontalScroll;
          container.value.scrollLeft = Math.min(targetScrollLeft, maxHorizontalScroll);
        }
      },
      onToggle: (self) => {
        // 当 ScrollTrigger 状态改变时，确保状态正确
        if (!self.isActive) {
          // ScrollTrigger 不再激活时（已经离开横向区域），确保状态正确
          isLeavingHorizontalSection = true;
          if (container.value && maxHorizontalScroll > 0) {
            container.value.scrollLeft = maxHorizontalScroll;
            container.value.classList.add('horizontal-scroll-fixed');
          }
        } else {
          // ScrollTrigger 激活时，清除离开标记
          isLeavingHorizontalSection = false;
          if (container.value && maxHorizontalScroll > 0) {
            container.value.classList.remove('horizontal-scroll-fixed');
          }
        }
      }
    });
  }

  // 添加滚动监听，确保横向滚动容器在离开横向区域后保持在最后位置
  // 使用更平滑的方式，避免跳动 - 完全禁用固定状态下的任何修改
  function initScrollWatcher() {
    if (!root.value || !container.value || maxHorizontalScrollLimit === null) return;

    const handleRootScroll = () => {
      if (!container.value || maxHorizontalScrollLimit === null || !root.value) return;

      // 如果横向滚动容器已经标记为固定，完全不再修改，避免任何跳动
      if (container.value.classList.contains('horizontal-scroll-fixed')) {
        return;
      }

      // 检查是否已经滚动超过横向滚动区域
      const horizontalWrapperRect = horizontalWrapper.value?.getBoundingClientRect();
      if (horizontalWrapperRect && horizontalWrapperRect.bottom < 0) {
        // 已经滚动超过横向滚动区域，但还没有固定标记
        // 这种情况不应该发生，但作为保险措施
        if (container.value.scrollLeft < maxHorizontalScrollLimit - 1) {
          // 只在明显偏离时才设置，并且只设置一次
          container.value.scrollLeft = maxHorizontalScrollLimit;
        }
      } else if (horizontalWrapperRect && horizontalWrapperRect.bottom >= 0) {
        // 还在横向滚动区域内，确保不超过最大滚动距离
        if (container.value.scrollLeft > maxHorizontalScrollLimit) {
          container.value.scrollLeft = maxHorizontalScrollLimit;
        }
      }
    };

    // 监听根容器的滚动事件，使用节流避免频繁触发
    let scrollTimer = null;
    const throttledHandleRootScroll = () => {
      if (scrollTimer) return;
      scrollTimer = requestAnimationFrame(() => {
        handleRootScroll();
        scrollTimer = null;
      });
    };

    root.value.addEventListener('scroll', throttledHandleRootScroll, { passive: true });

    // 也监听横向滚动容器的滚动事件，确保不会超过最大滚动距离
    const handleContainerScroll = () => {
      if (!container.value || maxHorizontalScrollLimit === null) return;
      // 如果已经固定，完全不再限制，避免任何干扰
      if (container.value.classList.contains('horizontal-scroll-fixed')) {
        return;
      }
      // 只在横向滚动区域内时才限制
      const horizontalWrapperRect = horizontalWrapper.value?.getBoundingClientRect();
      if (horizontalWrapperRect && horizontalWrapperRect.bottom >= 0) {
        if (container.value.scrollLeft > maxHorizontalScrollLimit) {
          container.value.scrollLeft = maxHorizontalScrollLimit;
        }
      }
    };

    container.value.addEventListener('scroll', handleContainerScroll, { passive: true });

    // 存储清理函数
    window._historyScrollWatcher = throttledHandleRootScroll;
    window._historyContainerScrollWatcher = handleContainerScroll;
  }

});

onUnmounted(() => {
  // 清理事件监听
  if (container.value) {
    container.value.removeEventListener('wheel', handleWheel);
    container.value.removeEventListener('scroll', scheduleLazyLoad);
    container.value.removeEventListener('scroll', scheduleTraditionalParallax);
  }

  // 清理根容器的滚动监听
  if (root.value && window._historyScrollWatcher) {
    root.value.removeEventListener('scroll', window._historyScrollWatcher);
    delete window._historyScrollWatcher;
  }

  // 清理横向滚动容器的滚动监听
  if (container.value && window._historyContainerScrollWatcher) {
    container.value.removeEventListener('scroll', window._historyContainerScrollWatcher);
    delete window._historyContainerScrollWatcher;
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
.scroll-root {
  overflow-y: auto;
}

.horizontal-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.horizontal-scroll-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  white-space: nowrap;
  transform: translateZ(0);
  position: relative;
  will-change: scroll-position;
  contain: strict;
}

/* 当横向滚动容器被固定时，确保位置保持（通过 JavaScript 控制，不需要 CSS） */

.content {
  display: inline-flex;
  height: 100%;
  position: relative;
  will-change: transform;
}

/* 关键修复：视差元素不强制修改定位，保留原有定位方式 */
[data-speed] {
  will-change: transform;
}

/* 批量视差元素基础样式 */
[data-parallax] {
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.vertical {
  background: #eee;
  position: relative;
  width: 100%;
  min-height: 100vh;
}

section {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
</style>
