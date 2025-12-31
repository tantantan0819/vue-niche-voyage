<template>
  <div class="history">
    <!-- 加载进度条 -->
    <splash-loader :progress="loadingProgress" :show="showSplashLoader"></splash-loader>
    <!-- 侧边导航栏 -->
    <side-menu :show="showSideMenu"></side-menu>
    <!-- 头部：加载进度条只显示头部资源，避免用户等待时间过长 -->
    <hero @third-video-ended="handleThirdVideoEnded"></hero>
    <horizontal></horizontal>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, nextTick, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { pxToVw, pxToVh } from '@/utils/viewportUtils'
import { preloadHeroResources } from '@/utils/preloadHeroResources'
import hero from './hero/index.vue'
import horizontal from './horizontal/index.vue'
import SideMenu from '@/components/SiderMenu.vue'
import SplashLoader from '@/components/SplashLoader.vue'

// 注册 ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin)

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

// GSAP 全局配置（优化性能和精度）
gsap.config({
  autoSleep: false, // 禁用自动休眠
  precision: 0.001  // 提高动画精度
})
ScrollTrigger.config({
  ignoreMobileResize: true, // 忽略移动端resize抖动
  force3D: true, // 强制硬件加速
  limitCallbacks: true // 限制重复回调
})

let horizontalScrollTrigger = null
let resizeHandler = null

// 用于标记 horizontal 是否处于 pin 状态
let isHorizontalPinned = false

// 保存 vertical-section 的滚动位置
let verticalSectionScrollTop = 0

// 标记是否正在等待 vertical-section 滚动到顶部
let isWaitingForVerticalScrollToTop = false

// 加载进度相关
const loadingProgress = ref(0)
const showSplashLoader = ref(true)

// 侧边菜单显示控制
const showSideMenu = ref(false)

// 处理第三个视频播放完毕事件
const handleThirdVideoEnded = () => {
  showSideMenu.value = true
}

/**
 * 临时解除 horizontal 的 pin 状态，用于 scrollIntoView 跳转
 * @returns {Function} 返回恢复 pin 状态的函数
 */
const temporarilyUnpinHorizontal = () => {
  const horizontalContainer = document.querySelector('.horizontal-scroll-container')
  if (!horizontalContainer || !horizontalScrollTrigger) {
    return () => {} // 返回空函数
  }
  
  const wasPinned = horizontalContainer.hasAttribute('data-pinned')
  if (!wasPinned) {
    return () => {} // 如果本来就没有 pin，返回空函数
  }
  
  // 临时禁用 ScrollTrigger 的 pin
  horizontalScrollTrigger.disable()
  
  // 返回恢复函数
  return () => {
    // 重新启用 ScrollTrigger
    horizontalScrollTrigger.enable()
    // 刷新 ScrollTrigger 以确保状态正确
    ScrollTrigger.refresh()
  }
}

/**
 * 获取 horizontal ScrollTrigger 实例
 * @returns {Object|null} ScrollTrigger 实例
 */
const getHorizontalScrollTrigger = () => {
  return horizontalScrollTrigger
}

/**
 * 滚动到指定的横向位置（通过更新页面滚动位置来触发）
 * @param {number} targetScrollLeft - 目标横向滚动位置
 */
const scrollToHorizontalPosition = async (targetScrollLeft) => {
  if (!horizontalScrollTrigger) return
  
  const horizontalContainer = document.querySelector('.horizontal-scroll-container')
  if (!horizontalContainer) return
  
  const maxScroll = horizontalContainer.scrollWidth - horizontalContainer.clientWidth
  const normalizedScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScroll))
  
  // 计算对应的页面滚动进度（0 到 1）
  const progress = maxScroll > 0 ? normalizedScrollLeft / maxScroll : 0
  
  // 获取 ScrollTrigger 的滚动距离
  const scrollDistance = horizontalScrollTrigger.end - horizontalScrollTrigger.start
  const targetPageScroll = horizontalScrollTrigger.start + (progress * scrollDistance)
  
  // 计算当前页面滚动位置
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop
  const scrollDiff = Math.abs(targetPageScroll - currentScroll)
  
  // 根据滚动距离动态计算动画时长（最大2秒，最小0.3秒）
  const duration = Math.min(Math.max(scrollDiff / 500, 0.3), 2)
  
  // 使用 GSAP 动画来滚动，更流畅
  return new Promise((resolve) => {
    gsap.to(window, {
      scrollTo: {
        y: targetPageScroll,
        autoKill: false
      },
      duration: duration,
      ease: 'power2.inOut',
      onComplete: resolve
    })
  })
}

// 将函数暴露到全局，供 SiderMenu 使用
if (typeof window !== 'undefined') {
  window.__historyScrollControl = {
    temporarilyUnpinHorizontal,
    getHorizontalScrollTrigger,
    scrollToHorizontalPosition
  }
}

/**
 * 禁止页面滚动
 */
const disableScroll = () => {
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
}

/**
 * 恢复页面滚动
 */
const enableScroll = () => {
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
}

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
    horizontalScrollTrigger = null
  }
  
  // 动态计算内容的实际宽度
  const contentWidth = horizontalContainer.scrollWidth
  const containerWidth = horizontalContainer.clientWidth
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
    start: 'top top', // 严格：当元素顶部到达视口顶部时开始
    end: `+=${scrollDistance}`, // 滚动距离等于内容宽度
    scrub: true, // 与滚动同步，平滑跟随
    pin: true, // 在横向滚动期间固定容器
    anticipatePin: 0, // 设置为 0，确保精确在顶部时才开始 pin
    invalidateOnRefresh: true,
    onEnter: () => {
      // 进入 pin 状态 - 此时元素顶部已经到达视口顶部
      isHorizontalPinned = true
      // 通知 horizontal 组件进入 pin 状态
      horizontalContainer.setAttribute('data-pinned', 'true')
      // 确保初始位置在左边（scrollLeft = 0）
      horizontalContainer.scrollLeft = 0
      
      // 使用 requestAnimationFrame 延迟状态更新，避免闪烁
      requestAnimationFrame(() => {
        // 禁用 vertical-section 的竖向滚动
        const verticalSection = document.querySelector('.vertical-section')
        if (verticalSection) {
          verticalSection.style.overflowY = 'hidden'
          verticalSection.style.pointerEvents = 'none'
        }
      })
    },
    onUpdate: (self) => {
      // 将页面滚动进度转换为横向滚动位置
      // progress 从 0 到 1，对应 scrollLeft 从 0 到 maxScroll
      const maxScroll = contentWidth - containerWidth
      const targetScrollLeft = self.progress * maxScroll
      
      // 确保 scrollLeft 在有效范围内
      horizontalContainer.scrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScroll))
      
      // 检查是否到达横向滚动的最右边
      const verticalSection = document.querySelector('.vertical-section')
      if (verticalSection) {
        const currentScrollLeft = horizontalContainer.scrollLeft
        const isAtRightEnd = currentScrollLeft >= maxScroll - 1 // 允许1px的误差
        
        // 只在状态真正改变时才更新样式，避免频繁切换导致闪烁
        const currentOverflow = verticalSection.style.overflowY || 'auto'
        if (isAtRightEnd && currentOverflow !== 'auto') {
          verticalSection.style.overflowY = 'auto'
          verticalSection.style.pointerEvents = 'auto'
        } else if (!isAtRightEnd && currentOverflow !== 'hidden') {
          verticalSection.style.overflowY = 'hidden'
          verticalSection.style.pointerEvents = 'none'
        }
      }
    },
    onLeave: () => {
      // 离开 pin 状态（向下滚动完成横向滚动）
      isHorizontalPinned = false
      horizontalContainer.removeAttribute('data-pinned')
      
      // 使用 requestAnimationFrame 延迟状态更新，避免闪烁
      requestAnimationFrame(() => {
        // 确保 vertical-section 可以竖向滚动（横向滚动已完成）
        const verticalSection = document.querySelector('.vertical-section')
        if (verticalSection) {
          verticalSection.style.overflowY = 'auto'
          verticalSection.style.pointerEvents = 'auto'
          // 恢复之前保存的滚动位置
          if (verticalSectionScrollTop > 0) {
            verticalSection.scrollTop = verticalSectionScrollTop
          }
        }
      })
    },
    onEnterBack: () => {
      // 向上滚动回到 pin 状态 - 此时元素顶部再次到达视口顶部
      const verticalSection = document.querySelector('.vertical-section')
      
      // 检查 vertical-section 是否还有滚动位置
      // 如果 scrollTop > 0，说明 vertical-section 的顶部还没有到达浏览器顶部
      // 需要先让 vertical-section 滚动到顶部，然后再进入横向滚动
      if (verticalSection && verticalSection.scrollTop > 0) {
        // 标记正在等待 vertical-section 滚动到顶部
        isWaitingForVerticalScrollToTop = true
        
        // 立即让 vertical-section 滚动到顶部（不使用 smooth，避免延迟）
        verticalSection.scrollTop = 0
        
        // 使用 requestAnimationFrame 确保滚动完成后再继续
        requestAnimationFrame(() => {
          // 再次确保滚动到顶部
          if (verticalSection.scrollTop > 0) {
            verticalSection.scrollTop = 0
          }
          
          // 标记等待完成
          isWaitingForVerticalScrollToTop = false
          
          // 现在可以进入横向滚动状态
          isHorizontalPinned = true
          horizontalContainer.setAttribute('data-pinned', 'true')
          
          // 更新 vertical-section 的状态
          requestAnimationFrame(() => {
            const maxScroll = horizontalContainer.scrollWidth - horizontalContainer.clientWidth
            const currentScrollLeft = horizontalContainer.scrollLeft
            const isAtRightEnd = currentScrollLeft >= maxScroll - 1
            
            if (isAtRightEnd) {
              verticalSection.style.overflowY = 'auto'
              verticalSection.style.pointerEvents = 'auto'
            } else {
              verticalSection.style.overflowY = 'hidden'
              verticalSection.style.pointerEvents = 'none'
            }
          })
        })
        
        return // 提前返回，不执行后续的横向滚动逻辑
      }
      
      // 如果 vertical-section 已经在顶部，正常进入横向滚动状态
      isWaitingForVerticalScrollToTop = false
      isHorizontalPinned = true
      horizontalContainer.setAttribute('data-pinned', 'true')
      
      // 使用 requestAnimationFrame 延迟状态更新，避免闪烁
      requestAnimationFrame(() => {
        // 检查当前横向滚动位置，决定是否允许 vertical-section 滚动
        if (verticalSection) {
          const maxScroll = horizontalContainer.scrollWidth - horizontalContainer.clientWidth
          const currentScrollLeft = horizontalContainer.scrollLeft
          const isAtRightEnd = currentScrollLeft >= maxScroll - 1
          
          if (isAtRightEnd) {
            verticalSection.style.overflowY = 'auto'
            verticalSection.style.pointerEvents = 'auto'
          } else {
            verticalSection.style.overflowY = 'hidden'
            verticalSection.style.pointerEvents = 'none'
          }
        }
      })
    },
    onLeaveBack: () => {
      // 如果正在等待 vertical-section 滚动到顶部，阻止离开 pin 状态
      if (isWaitingForVerticalScrollToTop) {
        return
      }
      
      // 向上滚动离开 pin 状态（回到 hero）
      // 此时 progress 为 0，scrollLeft 应该已经是 0，允许继续向上滚动
      isHorizontalPinned = false
      horizontalContainer.removeAttribute('data-pinned')
      // 确保 scrollLeft 重置为 0
      horizontalContainer.scrollLeft = 0
      
      // 使用 requestAnimationFrame 延迟状态更新，避免闪烁
      requestAnimationFrame(() => {
        // 禁用 vertical-section 的竖向滚动（回到横向滚动状态）
        const verticalSection = document.querySelector('.vertical-section')
        if (verticalSection) {
          verticalSection.style.overflowY = 'hidden'
          verticalSection.style.pointerEvents = 'none'
        }
      })
    }
  })
  
  // 刷新 ScrollTrigger 以确保计算正确
  ScrollTrigger.refresh()
}

/**
 * 批量视差功能：基于ScrollTrigger和fromTo的高级视差控制
 * 支持通过data属性配置视差参数，并自动转换像素值为视口单位
 * 自动识别横向和竖向滚动容器
 * @param {boolean} forceRefresh - 是否强制刷新（重新创建所有 ScrollTrigger）
 * @param {boolean} horizontalOnly - 是否只处理 horizontal 容器内的元素
 */
const initBatchParallax = async (forceRefresh = false, horizontalOnly = false) => {
  await nextTick() // 等待DOM完全渲染

  // 获取所有带data-parallax属性的元素
  let parallaxElements = document.querySelectorAll('[data-parallax]')
  
  // 获取横向滚动容器（如果存在）
  const horizontalContainer = document.querySelector('.horizontal-scroll-container')

  // 如果只处理 horizontal 容器内的元素，进行过滤
  if (horizontalOnly && horizontalContainer) {
    parallaxElements = Array.from(parallaxElements).filter(el => 
      horizontalContainer.contains(el)
    )
  }

  // 获取 vertical-section 容器（如果存在）
  const verticalSection = document.querySelector('.vertical-section')

  parallaxElements.forEach(el => {
    // 检查元素是否在横向滚动容器内
    const isInHorizontalContainer = horizontalContainer && horizontalContainer.contains(el)
    // 检查元素是否在 vertical-section 内（vertical-section 在 horizontal 容器内，但使用竖向滚动）
    const isInVerticalSection = verticalSection && verticalSection.contains(el)
    
    // 解析视差配置
    const config = {
      // 视差方向：x 或 y
      // 如果在 vertical-section 内，使用 y 轴（竖向滚动）
      axis: el.dataset.parallaxAxis || (isInVerticalSection ? 'y' : (isInHorizontalContainer ? 'x' : 'y')),
      // 起始位置（元素进入视口时的位置）
      fromValue: parseFloat(el.dataset.parallaxFrom) || 0,
      // 结束位置（元素离开视口时的位置）
      toValue: parseFloat(el.dataset.parallaxTo) || 100,
      // 视差速度（影响动画进度）
      speed: parseFloat(el.dataset.parallaxSpeed) || 1,
      // 触发点：元素进入视口的位置
      // 如果在 vertical-section 内，使用竖向滚动的触发点
      triggerStart: el.dataset.parallaxTriggerStart || (isInVerticalSection ? "top bottom" : (isInHorizontalContainer ? "left right" : "top bottom")),
      // 结束点：元素离开视口的位置
      triggerEnd: el.dataset.parallaxTriggerEnd || (isInVerticalSection ? "bottom top" : (isInHorizontalContainer ? "right left" : "bottom top")),
      // 是否在视口中心时保持预期位置
      centerLock: el.dataset.parallaxCenterLock !== "false",
      // 动画缓动函数
      ease: el.dataset.parallaxEase || "power1.out"
    }

    // 根据视差轴选择合适的单位转换函数
    const convertUnit = config.axis === 'x' ? pxToVw : pxToVh

    // 计算中心锁定的位置（如果启用）
    let fromProps, toProps
    if (config.centerLock) {
      // 中心锁定模式：元素在视口中心时保持原位置，进入和离开时产生视差
      const totalDistance = Math.abs(config.toValue - config.fromValue)
      const convertToViewportUnit = config.axis === 'x' ? pxToVw : pxToVh
      const halfDistance = convertToViewportUnit(totalDistance / 2)

      // 根据起始和结束位置的关系确定方向
      if (config.fromValue < config.toValue) {
        // 从左到右/从上到下移动
        const negativeHalf = halfDistance.startsWith('-') 
          ? halfDistance.substring(1) 
          : `-${halfDistance}`
        fromProps = { [config.axis]: negativeHalf }
        toProps = { [config.axis]: halfDistance }
      } else {
        // 从右到左/从下到上移动
        const negativeHalf = halfDistance.startsWith('-') 
          ? halfDistance.substring(1) 
          : `-${halfDistance}`
        fromProps = { [config.axis]: halfDistance }
        toProps = { [config.axis]: negativeHalf }
      }
    } else {
      // 普通模式：直接从fromValue动画到toValue，并转换为视口单位
      const convertToViewportUnit = config.axis === 'x' ? pxToVw : pxToVh
      fromProps = { [config.axis]: convertToViewportUnit(config.fromValue) }
      toProps = { [config.axis]: convertToViewportUnit(config.toValue) }
    }

    // 解决CSS动画与GSAP视差冲突的核心方案
    // 创建一个包装元素来分离CSS动画和GSAP视差效果
    let parallaxWrapper

    // 检查元素是否已经有包装器
    if (!el.dataset.parallaxWrapper) {
      // 获取元素的计算样式
      const computedStyle = window.getComputedStyle(el)

      // 创建包装器元素
      parallaxWrapper = document.createElement('div')
      parallaxWrapper.className = 'parallax-animation-wrapper'

      // 设置包装器的样式，使其与原元素完全一致
      parallaxWrapper.style.position = computedStyle.position
      parallaxWrapper.style.top = computedStyle.top
      parallaxWrapper.style.left = computedStyle.left
      parallaxWrapper.style.right = computedStyle.right
      parallaxWrapper.style.bottom = computedStyle.bottom
      parallaxWrapper.style.width = computedStyle.width
      parallaxWrapper.style.height = computedStyle.height
      parallaxWrapper.style.margin = computedStyle.margin
      parallaxWrapper.style.padding = computedStyle.padding
      parallaxWrapper.style.display = computedStyle.display
      parallaxWrapper.style.float = computedStyle.float
      parallaxWrapper.style.zIndex = computedStyle.zIndex
      parallaxWrapper.style.transformOrigin = computedStyle.transformOrigin
      parallaxWrapper.style.boxSizing = 'border-box'
      parallaxWrapper.style.transformStyle = 'preserve-3d'
      parallaxWrapper.style.transform = 'none'

      // 如果是 flex 容器，复制 flex 相关属性
      if (computedStyle.display === 'flex' || computedStyle.display === 'inline-flex') {
        parallaxWrapper.style.flexDirection = computedStyle.flexDirection
        parallaxWrapper.style.alignItems = computedStyle.alignItems
        parallaxWrapper.style.justifyContent = computedStyle.justifyContent
        parallaxWrapper.style.flexWrap = computedStyle.flexWrap
        parallaxWrapper.style.alignContent = computedStyle.alignContent
        parallaxWrapper.style.gap = computedStyle.gap
      }

      // 将元素移动到包装器内
      el.parentNode.insertBefore(parallaxWrapper, el)
      parallaxWrapper.appendChild(el)

      // 标记元素已经有包装器
      el.dataset.parallaxWrapper = 'true'

      // 重置元素的定位属性，使其在包装器内正常显示
      el.style.position = computedStyle.position === 'static' ? 'relative' : computedStyle.position
      el.style.top = 'auto'
      el.style.left = 'auto'
      el.style.right = 'auto'
      el.style.bottom = 'auto'
      el.style.margin = '0'

      // 如果原元素是 flex 容器，需要保持其 flex 属性
      if (computedStyle.display === 'flex' || computedStyle.display === 'inline-flex') {
        el.style.display = computedStyle.display
        el.style.flexDirection = computedStyle.flexDirection
        el.style.alignItems = computedStyle.alignItems
        el.style.justifyContent = computedStyle.justifyContent
        el.style.flexWrap = computedStyle.flexWrap
        el.style.alignContent = computedStyle.alignContent
        el.style.gap = computedStyle.gap
        el.style.width = '100%'
        el.style.height = '100%'
        el.style.minWidth = '0'
        el.style.minHeight = '0'
        el.style.boxSizing = 'border-box'
      } else {
        // 确保元素在包装器内保持原有的宽度和高度
        if (computedStyle.width !== 'auto' && computedStyle.width !== '0px') {
          el.style.width = computedStyle.width
        } else {
          el.style.width = '100%'
        }
        if (computedStyle.height !== 'auto' && computedStyle.height !== '0px') {
          el.style.height = computedStyle.height
        } else {
          el.style.height = '100%'
        }
      }
    } else {
      // 如果已经有包装器，找到它（应该是父元素）
      parallaxWrapper = el.parentNode
    }

    // 检查是否已经存在 ScrollTrigger，如果存在则先清理
    // 这样可以避免重复创建，并在回滚时重新创建失效的 ScrollTrigger
    const existingTriggers = ScrollTrigger.getAll().filter(trigger => {
      // 检查 trigger 是否关联到当前的 parallaxWrapper
      return trigger.trigger === parallaxWrapper || 
             (trigger.vars && trigger.vars.trigger === parallaxWrapper)
    })
    
    // 如果强制刷新，清理并重新创建
    if (forceRefresh) {
      existingTriggers.forEach(trigger => trigger.kill())
    } else if (existingTriggers.length > 0) {
      // 如果已经存在 ScrollTrigger，跳过创建（避免重复）
      return
    } else {
      // 如果不存在但之前可能创建过，也清理一下（防止残留）
      existingTriggers.forEach(trigger => trigger.kill())
    }

    // 构建 ScrollTrigger 配置
    const scrollTriggerConfig = {
      trigger: parallaxWrapper,
      start: config.triggerStart,
      end: config.triggerEnd,
      scrub: config.speed,
      invalidateOnRefresh: true
    }

    // 如果在 vertical-section 内，使用 vertical-section 作为滚动容器（竖向滚动）
    if (isInVerticalSection && verticalSection) {
      scrollTriggerConfig.scroller = verticalSection
      scrollTriggerConfig.horizontal = false
    }
    // 如果是横向滚动（在 horizontal 容器内但不在 vertical-section 内），需要指定 scroller 和 horizontal
    else if (isInHorizontalContainer && horizontalContainer) {
      scrollTriggerConfig.scroller = horizontalContainer
      scrollTriggerConfig.horizontal = true
    }

    // 应用视差效果
    gsap.fromTo(parallaxWrapper,
      {
        ...fromProps,
        immediateRender: false
      },
      {
        ...toProps,
        ease: config.ease,
        immediateRender: false,
        scrollTrigger: scrollTriggerConfig
      }
    )
  })

  // 关键：在所有ScrollTrigger创建完成后刷新，确保位置计算正确
  ScrollTrigger.refresh()
}

onMounted(async () => {
  // 禁止页面滚动
  disableScroll()
  
  // 等待 hero 组件挂载完成
  await nextTick()
  await new Promise(resolve => setTimeout(resolve, 100))
  
  // 加载 hero 组件的资源
  try {
    await preloadHeroResources((progress) => {
      loadingProgress.value = progress
    })
  } catch (error) {
    console.error('加载 hero 资源时出错:', error)
  }
  
  // 加载完成后，延迟一点时间再隐藏加载动画，让用户看到 100%
  await new Promise(resolve => setTimeout(resolve, 300))
  showSplashLoader.value = false
  
  // 恢复页面滚动
  enableScroll()
  
  await initHorizontalScroll()
  
  // 等待所有子组件挂载完成后再初始化批量视差
  await nextTick()
  await new Promise(resolve => setTimeout(resolve, 200))
  
  // 初始化 vertical-section 的滚动状态（初始状态下禁用滚动）
  const verticalSection = document.querySelector('.vertical-section')
  if (verticalSection) {
    const horizontalContainer = document.querySelector('.horizontal-scroll-container')
    if (horizontalContainer) {
      const maxScroll = horizontalContainer.scrollWidth - horizontalContainer.clientWidth
      const currentScrollLeft = horizontalContainer.scrollLeft
      const isAtRightEnd = currentScrollLeft >= maxScroll - 1
      
      if (isAtRightEnd) {
        verticalSection.style.overflowY = 'auto'
        verticalSection.style.pointerEvents = 'auto'
      } else {
        verticalSection.style.overflowY = 'hidden'
        verticalSection.style.pointerEvents = 'none'
      }
      
      // 监听 vertical-section 的滚动事件，实时保存滚动位置
      verticalSection.addEventListener('scroll', () => {
        verticalSectionScrollTop = verticalSection.scrollTop
      }, { passive: true })
    }
  }
  
  initBatchParallax()
  
  // 监听窗口大小改变，重新计算
  resizeHandler = () => {
    if (horizontalScrollTrigger) {
      horizontalScrollTrigger.kill()
      initHorizontalScroll()
    }
    // 重新初始化批量视差
    initBatchParallax()
  }
  
  window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => {
  // 恢复页面滚动
  enableScroll()
  
  if (horizontalScrollTrigger) {
    horizontalScrollTrigger.kill()
  }
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
  }
  
  // 清理所有 ScrollTrigger 实例（包括批量视差创建的）
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

</script>