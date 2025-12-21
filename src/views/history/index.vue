<template>
  <div class="history-container" ref="rootContainer">
    <!--  横向布局  -->
    <div 
      class="horizontal-wrapper" 
      :class="{ 'fixed': !isHorizontalComplete }"
      ref="horizontalWrapper"
    >
      <horizontal ref="horizontalComponent" @scroll-complete="onHorizontalScrollComplete"/>
    </div>
    <!--  竖向布局  -->
    <div 
      class="vertical-wrapper" 
      :class="{ 'visible': isHorizontalComplete }"
      ref="verticalWrapper"
    >
      <vertical ref="verticalComponent"/>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import horizontal from './horizontal/index.vue'
import vertical from './vertical/index.vue'

const rootContainer = ref(null)
const horizontalWrapper = ref(null)
const verticalWrapper = ref(null)
const horizontalComponent = ref(null)
const verticalComponent = ref(null)

// 横向滚动是否完成
const isHorizontalComplete = ref(false)

// 横向滚动完成后的回调
const onHorizontalScrollComplete = () => {
  isHorizontalComplete.value = true
  // 允许页面滚动
  document.body.style.overflow = ''
  // 确保页面滚动位置在顶部，避免出现跳跃
  window.scrollTo({ top: 0, behavior: 'instant' })
}

// 阻止页面滚动（在横向滚动完成前）
const preventPageScroll = (e) => {
  if (!isHorizontalComplete.value) {
    e.preventDefault()
    e.stopPropagation()
    return false
  }
}

onMounted(() => {
  // 初始时阻止页面滚动
  document.body.style.overflow = 'hidden'
  // 监听页面滚动事件，在横向滚动完成前阻止
  window.addEventListener('wheel', preventPageScroll, { passive: false })
  window.addEventListener('touchmove', preventPageScroll, { passive: false })
  // 阻止键盘滚动
  window.addEventListener('keydown', (e) => {
    if (!isHorizontalComplete.value && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'PageDown' || e.key === 'PageUp' || e.key === ' ')) {
      e.preventDefault()
    }
  })
})

onUnmounted(() => {
  // 清理事件监听
  window.removeEventListener('wheel', preventPageScroll)
  window.removeEventListener('touchmove', preventPageScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.history-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.horizontal-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  transition: position 0.3s ease;
}

/* 横向滚动完成前，固定横向容器在视口 */
.horizontal-wrapper.fixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.vertical-wrapper {
  position: relative;
  width: 100%;
  /* 初始时在横向滚动容器下方，无缝衔接 */
  margin-top: 0;
  /* 初始时隐藏，避免在横向滚动完成前显示 */
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, margin-top 0.3s ease;
}

/* 横向滚动完成后，显示竖向内容并移除顶部间距 */
.vertical-wrapper.visible {
  opacity: 1;
  pointer-events: auto;
  margin-top: 0 !important;
}

/* 当横向容器固定时，为竖向内容添加顶部间距，避免被遮挡 */
.history-container:has(.horizontal-wrapper.fixed) .vertical-wrapper:not(.visible) {
  margin-top: 100vh;
}

/* 兼容不支持 :has() 的浏览器 */
.horizontal-wrapper.fixed ~ .vertical-wrapper:not(.visible) {
  margin-top: 100vh;
}
</style>