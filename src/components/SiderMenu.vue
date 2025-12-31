<template>
  <div :class="['menu',{'menuActive': isExpandMenu}]" v-show="show">
    <div class="menu-icon" @click="expandMenu"></div>
    <div :class="['menu-wrapper',{'menu-wrapper-active': isExpandMenu}]">
      <div 
        class="first-level" 
        :class="{'first-level-active': currentIndex === index}"
        v-for="(menu,index) in menuInfos" 
        :key="`level${index}`">
        <div 
          class="first-title-wrapper" 
          @click="collapseMenu(index)"
          :ref="el => setFirstTitleRef(el, index)">
          <div class="first-title">{{menu.title}}</div>
          <div class="arrow"></div>
        </div>
        <div 
          class="second-level"
          :ref="el => setSecondLevelRef(el, index)">
          <div
            @click="scrollToPage(option.id)"
            class="second-title" 
            v-for="(option,optionsIndex) in menu.options" 
            :key="`level${index}-${optionsIndex}`"
            :ref="el => setSecondTitleRef(el, index, optionsIndex)">
            {{option.title}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, nextTick, computed } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// 注册 ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

// 定义 props
const props = defineProps({
  show: {
    type: Boolean,
    default: true
  }
})

const isExpandMenu = ref(false)

// 收起当前打开的菜单
const closeCurrentMenu = () => {
  if (currentIndex.value === null) return
  
  const menuIndex = currentIndex.value
  const currentFirstTitle = firstTitleRefs.value[menuIndex]
  const currentSecondTitles = secondTitleRefs.value[menuIndex] || []
  const validSecondTitles = currentSecondTitles.filter(el => el !== null && el !== undefined)
  
  if (!currentFirstTitle) {
    currentIndex.value = null
    return
  }
  
  const arrow = currentFirstTitle.querySelector('.arrow')
  const tl = gsap.timeline()
  
  // 4. first-title-wrapper 向上移动 y-10 然后回到 y:0（倒序执行展开动画）
  tl.to(currentFirstTitle, {
    y: -10,
    duration: 0.1,
    ease: 'power2.in'
  })
  tl.to(currentFirstTitle, {
    y: 0,
    duration: 0.1,
    ease: 'power2.in'
  })
  
  // 3. 箭头旋转回到 0度（倒序执行展开动画）
  if (arrow) {
    tl.to(arrow, {
      rotation: 0,
      duration: 0.1,
      ease: 'power2.in'
    }, '<=')
  }
  
  // 1. 先收起 second-title（倒序执行展开动画）
  if (validSecondTitles.length > 0) {
    const secondLevel = secondLevelRefs.value[menuIndex]
    
    // 先获取当前高度
    if (secondLevel) {
      const currentHeight = secondLevel.scrollHeight
      gsap.set(secondLevel, { height: currentHeight, overflow: 'hidden' })
    }
    
    // 倒序stagger，从最后一个开始消失
    const reversedSecondTitles = [...validSecondTitles].reverse()
    tl.to(reversedSecondTitles, {
      opacity: 0,
      y: -10,
      duration: 0.2,
      stagger: 0.08,
      ease: 'power2.in'
    }, '-=0.1')
    
    // 同时收缩高度
    if (secondLevel) {
      tl.to(secondLevel, {
        height: 0,
        duration: 0.4,
        ease: 'power2.in'
      }, '-=0.2')
    }
    
    // 动画完成后隐藏元素
    tl.call(() => {
      validSecondTitles.forEach(el => {
        if (el) {
          el.style.display = 'none'
          el.style.opacity = '0'
          el.style.visibility = 'hidden'
        }
      })
      if (secondLevel) {
        gsap.set(secondLevel, { clearProps: 'height' })
      }
    })
  }
  
  // 2. first-title-wrapper 回到原位置（倒序执行展开动画）
  tl.to(currentFirstTitle, {
    left: 'auto', // 清除 left 定位
    right: 88, // 恢复初始的 right 定位
    width: 'auto', // 恢复初始宽度
    duration: 0.2,
    ease: 'power2.in'
  })
  
  // 让箭头从当前位置（左边）动画回到中间位置
  if (arrow) {
    tl.to(arrow, {
      x: 0, // 从当前位置动画回到 x: 0
      clearProps: 'x', // 动画完成后清除 transform
      duration: 0.2,
      ease: 'power2.in'
    }, '<') // 与父元素动画同时进行
  }
  
  currentIndex.value = null
}

const expandMenu = () => {
  const wasExpanded = isExpandMenu.value
  isExpandMenu.value = !isExpandMenu.value
  
  // 如果关闭菜单，收起当前打开的菜单
  if (wasExpanded && !isExpandMenu.value) {
    closeCurrentMenu()
    // 清空引用，避免下次打开时还是展开状态
    firstTitleRefs.value = {}
    secondTitleRefs.value = {}
  }
}


const menuInfos = ref([
  {
    title: '源起万万年',
    options: [
      { title: '特提斯洋的终曲' },
      { title: '崛起的高原' },
      { title: '永恒的进行时' },
    ]
  },
  {
    title: '极境万象',
    options: [
      { title: '从雪山到雨林', id: 'page-mountains-to-rainforests' },
      { title: '亚洲水塔', id: 'page-the-asian-water-tower' },
      { title: '高原灵踪', id: 'page-highland-spirit-trail'},
      { title: '雪域秘藏', id: 'page-snow-covered-treasures' },
    ]
  },
  {
    title: '极境史诗',
    options: [
      { title: '史前回响', id: 'page-prehistoric-echoes' },
      { title: '象雄文明', id: "page-xiangxiong-civilization" },
      { title: '吐蕃王朝', id: "page-tubo-dynasty" },
      { title: '盟启一统', id: "page-unification"},
      { title: '易道万里', id: 'page-yidaowanli' },
      { title: '守土抗侵', id: 'page-jindai' },
      { title: '雪域新章', id: 'page-new-chapter' },
    ]
  },
  {
    title: '极境华章',
    options: [
      // { title: '雪域巍阁-建筑篇'},
      // { title: '高原瑰艺-美术篇'},
      // { title: '吟诵千古-文学与戏剧篇'},
      // { title: '极境风土 -民俗篇'},
      { title: '雪域巍阁-建筑篇', id: 'page-architecture-section'},
      { title: '高原瑰艺-美术篇', id: 'page-art-section' },
      { title: '吟诵千古-文学与戏剧篇', id: 'page-drama-section' },
      { title: '极境风土 -民俗篇', id: 'page-folkways-section' },
    ]
  },
])

const currentIndex = ref(null)
// 存储 first-title-wrapper 的引用
const firstTitleRefs = ref({})
// 存储 second-title 的引用
const secondTitleRefs = ref({})
// 存储 second-level 容器的引用
const secondLevelRefs = ref({})

// 设置 first-title-wrapper 的引用
const setFirstTitleRef = (el, index) => {
  if (el) {
    firstTitleRefs.value[index] = el
  }
}

// 设置 second-title 的引用
const setSecondTitleRef = (el, index, optionIndex) => {
  if (!el) return
  if (!secondTitleRefs.value[index]) {
    secondTitleRefs.value[index] = []
  }
  secondTitleRefs.value[index][optionIndex] = el
}

// 设置 second-level 容器的引用
const setSecondLevelRef = (el, index) => {
  if (el) {
    secondLevelRefs.value[index] = el
  }
}

// 展开收起菜单
const collapseMenu = async (index) => {
  // 如果点击的是当前激活的菜单，则收起
  if (index === currentIndex.value) {
    // 收起当前菜单
    const currentFirstTitle = firstTitleRefs.value[index]
    const currentSecondTitles = secondTitleRefs.value[index] || []
    const validSecondTitles = currentSecondTitles.filter(el => el !== null && el !== undefined)
    
    if (!currentFirstTitle) return
    
    const arrow = currentFirstTitle.querySelector('.arrow')
    const tl = gsap.timeline()
    
    // 4. first-title-wrapper 向上移动 y-10 然后回到 y:0（倒序执行展开动画）
    tl.to(currentFirstTitle, {
      y: -10,
      duration: 0.1,
      ease: 'power2.in'
    })
    tl.to(currentFirstTitle, {
      y: 0,
      duration: 0.1,
      ease: 'power2.in'
    })
    // 3. 箭头旋转回到 0度（倒序执行展开动画）
    if (arrow) {
      tl.to(arrow, {
        rotation: 0,
        duration: 0.1,
        ease: 'power2.in'
      }, '<=')
    }
    // 1. 先收起 second-title（倒序执行展开动画）
    if (validSecondTitles.length > 0) {
      const secondLevel = secondLevelRefs.value[index]
      
      // 先获取当前高度
      if (secondLevel) {
        const currentHeight = secondLevel.scrollHeight
        gsap.set(secondLevel, { height: currentHeight, overflow: 'hidden' })
      }
      
      // 倒序stagger，从最后一个开始消失
      const reversedSecondTitles = [...validSecondTitles].reverse()
      tl.to(reversedSecondTitles, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        stagger: 0.08,
        ease: 'power2.in'
      }, '-=0.1')
      
      // 同时收缩高度
      if (secondLevel) {
        tl.to(secondLevel, {
          height: 0,
          duration: 0.4,
          ease: 'power2.in'
        }, '-=0.2')
      }
      
      // 动画完成后隐藏元素
      tl.call(() => {
        validSecondTitles.forEach(el => {
          if (el) {
            el.style.display = 'none'
            el.style.opacity = '0'
            el.style.visibility = 'hidden'
          }
        })
        if (secondLevel) {
          gsap.set(secondLevel, { clearProps: 'height' })
        }
      })
    }
    tl.to(currentFirstTitle, {
      left: 'auto', // 清除 left 定位
      right: 88, // 恢复初始的 right 定位
      width: 'auto', // 恢复初始宽度
      duration: 0.5,
      ease: 'power2.in'
    })
    
    // 让箭头从当前位置（左边）动画回到中间位置
    if (arrow) {
      tl.to(arrow, {
        // x: 0, // 从当前位置动画回到 x: 0
        clearProps: 'x', // 动画完成后清除 transform
        duration: 0.5,
        ease: 'power2.in'
      }, '<') // 与父元素动画同时进行
    }
    
    currentIndex.value = null
    return
  }
  
  // 先收起之前的菜单（如果有）
  if (currentIndex.value !== null) {
    const prevFirstTitle = firstTitleRefs.value[currentIndex.value]
    const prevSecondTitles = secondTitleRefs.value[currentIndex.value] || []
    const validPrevSecondTitles = prevSecondTitles.filter(el => el !== null && el !== undefined)
    
    if (prevFirstTitle) {
      const prevArrow = prevFirstTitle.querySelector('.arrow')
      const prevTl = gsap.timeline()
      
      // 4. first-title-wrapper 向上移动 y-10 然后回到 y:0（倒序执行展开动画）
      // prevTl.to(prevFirstTitle, {
      //   y: -10,
      //   duration: 0.1,
      //   ease: 'power2.in'
      // })
      // prevTl.to(prevFirstTitle, {
      //   y: 0,
      //   duration: 0.1,
      //   ease: 'power2.in'
      // })
      
      // 3. 箭头旋转回到 0度（倒序执行展开动画）
      if (prevArrow) {
        prevTl.to(prevArrow, {
          rotation: 0,
          duration: 0.1,
          ease: 'power2.in'
        }, '<=')
      }
      
      // 1. 先收起 second-title（倒序执行展开动画）
      if (validPrevSecondTitles.length > 0) {
        const prevSecondLevel = secondLevelRefs.value[currentIndex.value]
        
        // 先获取当前高度
        if (prevSecondLevel) {
          const currentHeight = prevSecondLevel.scrollHeight
          gsap.set(prevSecondLevel, { height: currentHeight, overflow: 'hidden' })
        }
        
        // 倒序stagger，从最后一个开始消失
        const reversedPrevSecondTitles = [...validPrevSecondTitles].reverse()
        prevTl.to(reversedPrevSecondTitles, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          stagger: 0.08,
          ease: 'power2.in'
        }, '-=0.1')
        
        // 同时收缩高度
        if (prevSecondLevel) {
          prevTl.to(prevSecondLevel, {
            height: 0,
            duration: 0.4,
            ease: 'power2.in'
          }, '-=0.2')
        }
        
        // 动画完成后隐藏元素
        prevTl.call(() => {
          validPrevSecondTitles.forEach(el => {
            if (el) {
              el.style.display = 'none'
              el.style.opacity = '0'
              el.style.visibility = 'hidden'
            }
          })
          if (prevSecondLevel) {
            gsap.set(prevSecondLevel, { clearProps: 'height' })
          }
        })
      }
      
      // 2. first-title-wrapper 回到原位置（倒序执行展开动画）
      prevTl.to(prevFirstTitle, {
        left: 'auto', // 清除 left 定位
        right: 88, // 恢复初始的 right 定位
        width: 'auto', // 恢复初始宽度
        duration: 0.2,
        ease: 'power2.in'
      })
      
      // 让箭头从当前位置（左边）动画回到中间位置
      if (prevArrow) {
        prevTl.to(prevArrow, {
          // x: 0, // 从当前位置动画回到 x: 0
          clearProps: 'x', // 动画完成后清除 transform
          duration: 0.2,
          ease: 'power2.in'
        }, '<') // 与父元素动画同时进行
      }
    }
  }
  
  // 展开新的菜单
  currentIndex.value = index
  await nextTick()
  
  const currentFirstTitle = firstTitleRefs.value[index]
  const currentSecondTitles = secondTitleRefs.value[index] || []
  const validSecondTitles = currentSecondTitles.filter(el => el !== null && el !== undefined)
  
  if (!currentFirstTitle) return

  // 2. 同时旋转箭头
  const arrow = currentFirstTitle.querySelector('.arrow')
  const tl = gsap.timeline()
  
  // 1. 让 first-title-wrapper 向下移动 y+10
  tl.to(currentFirstTitle, {
    y: 10,
    duration: 0.1,
    ease: 'power2.out'
  })
  tl.to(currentFirstTitle, {
    y: 0,
    duration: 0.1,
    ease: 'power2.out'
  })
  tl.to(arrow, {
    rotation: 90,
    duration: 0.3,
    ease: 'power2.out'
  }, '<=')

  // 获取父元素移动前的实际位置，计算需要移动的距离
  const rect = currentFirstTitle.getBoundingClientRect()
  const parentRect = currentFirstTitle.parentElement?.getBoundingClientRect()
  const currentLeft = rect.left - (parentRect?.left || 0)
  const targetLeft = 0
  const leftOffset = targetLeft - currentLeft
  
  tl.to(currentFirstTitle, {
    x: 0, // 重置 transform，因为现在使用 left 定位
    clearProps: 'x', // 清除 x transform
    left: 0,
    duration: 0.5,
    ease: 'power2.out'
  })
  
  // 让 arrow 跟随父元素移动（使用 x transform，这样不会影响它的 right 定位）
  if (arrow) {
    tl.to(arrow, {
      x: leftOffset, // arrow 跟随父元素的 left 移动相同的距离
      duration: 0.5,
      ease: 'power2.out'
    }, '<') // 与父元素动画同时进行
  }
  
  // 3. 显示并让 second-title 陆续出现
  if (validSecondTitles.length > 0) {
    const secondLevel = secondLevelRefs.value[index]
    
    // 先显示所有元素，但设置为不可见，用于计算高度
    validSecondTitles.forEach(el => {
      if (el) {
        el.style.display = 'block'
        el.style.opacity = '0'
        el.style.visibility = 'hidden'
      }
    })
    
    // 等待一帧，确保 DOM 更新
    await nextTick()
    
    // 计算容器实际高度
    if (secondLevel) {
      const currentHeight = secondLevel.scrollHeight
      
      // 先设置高度为当前高度，然后立即设置为 0，再动画展开
      gsap.set(secondLevel, { height: currentHeight, overflow: 'hidden' })
      gsap.set(secondLevel, { height: 0 })
      
      // 让元素可见
      validSecondTitles.forEach(el => {
        if (el) {
          el.style.visibility = 'visible'
        }
      })
      
      // 动画展开高度
      tl.to(secondLevel, {
        height: currentHeight,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.1')
    }
    
    // 陆续出现动画
    tl.to(validSecondTitles, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: 'power2.out'
    }, '-=0.3')
    
    // 动画完成后，移除高度限制，让容器自适应
    if (secondLevel) {
      tl.call(() => {
        gsap.set(secondLevel, { clearProps: 'height' })
      })
    }
  }
}

// 跳转页面对应页面

const scrollToPage = async (targetId) => {
  if(!targetId){
    return false
  }
  const targetElement = document.getElementById(targetId)
  if (!targetElement) {
    return false
  }
  
  // 立即开始响应，避免用户感觉卡顿
  // 使用 requestAnimationFrame 确保立即执行
  await new Promise(resolve => requestAnimationFrame(resolve))
  
  // 检查目标元素是否在 vertical-section 内
  const verticalSection = document.querySelector('.vertical-section')
  const isInVerticalSection = verticalSection && verticalSection.contains(targetElement)
  
  // 检查目标元素是否在 horizontal 容器内
  const horizontalContainer = document.querySelector('.horizontal-scroll-container')
  const isInHorizontal = horizontalContainer && horizontalContainer.contains(targetElement)
  
  if (isInVerticalSection && verticalSection && horizontalContainer) {
    // 目标元素在 vertical-section 内，需要同时处理横向和竖向滚动
    // 1. 先滚动页面，使 horizontal 容器到达顶部（触发 pin）
    const horizontalRect = horizontalContainer.getBoundingClientRect()
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop
    const targetPageScroll = currentScroll + horizontalRect.top
    
    // 立即开始滚动动画，使用更快的初始速度
    const scrollPromise = new Promise((resolve) => {
      gsap.to(window, {
        scrollTo: {
          y: targetPageScroll,
          autoKill: false
        },
        duration: 0.5, // 减少到 0.5 秒，更快响应
        ease: 'power2.out', // 使用 power2.out，开始更快
        onComplete: resolve
      })
    })
    
    // 在滚动的同时，提前计算位置信息
    const maxHorizontalScroll = horizontalContainer.scrollWidth - horizontalContainer.clientWidth
    
    // 计算目标元素在 vertical-section 中的竖向位置（提前计算）
    let targetTop = 0
    let currentElement = targetElement
    while (currentElement && currentElement !== verticalSection) {
      targetTop += currentElement.offsetTop
      currentElement = currentElement.offsetParent
    }
    if (targetTop === 0 || targetTop < 0) {
      const verticalRect = verticalSection.getBoundingClientRect()
      const targetRect = targetElement.getBoundingClientRect()
      targetTop = targetRect.top - verticalRect.top + verticalSection.scrollTop
    }
    const maxVerticalScroll = verticalSection.scrollHeight - verticalSection.clientHeight
    targetTop = Math.max(0, Math.min(targetTop, maxVerticalScroll))
    
    // 等待滚动完成
    await scrollPromise
    
    // 减少等待时间，使用 requestAnimationFrame 替代 setTimeout
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    
    // 2. 横向滚动到 horizontal 容器的最右端（让 vertical-section 显示）
    const scrollControl = typeof window !== 'undefined' && window.__historyScrollControl
    
    if (scrollControl && scrollControl.scrollToHorizontalPosition) {
      // 使用 ScrollTrigger 同步的方式滚动到最右端
      await scrollControl.scrollToHorizontalPosition(maxHorizontalScroll)
    } else {
      // 备用方法：使用 GSAP 动画，更快速度
      await new Promise((resolve) => {
        gsap.to(horizontalContainer, {
          scrollLeft: maxHorizontalScroll,
          duration: 0.6, // 减少到 0.6 秒
          ease: 'power2.out', // 使用 power2.out，开始更快
          onComplete: resolve
        })
      })
    }
    
    // 3. 使用 GSAP 动画平滑竖向滚动 vertical-section 到目标位置
    const currentVerticalScroll = verticalSection.scrollTop
    const verticalScrollDiff = Math.abs(targetTop - currentVerticalScroll)
    const verticalDuration = Math.min(Math.max(verticalScrollDiff / 600, 0.25), 1.0) // 调整计算，更快
    
    await new Promise((resolve) => {
      gsap.to(verticalSection, {
        scrollTop: targetTop,
        duration: verticalDuration,
        ease: 'power2.out', // 使用 power2.out，开始更快
        onComplete: resolve
      })
    })
  } else if (isInHorizontal && horizontalContainer) {
    // 目标元素在 horizontal 容器内但不在 vertical-section 内
    // 1. 先滚动页面，使 horizontal 容器到达顶部（触发 pin）
    const horizontalRect = horizontalContainer.getBoundingClientRect()
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop
    const targetPageScroll = currentScroll + horizontalRect.top
    
    // 立即开始滚动动画，使用更快的速度
    const scrollPromise = new Promise((resolve) => {
      gsap.to(window, {
        scrollTo: {
          y: targetPageScroll,
          autoKill: false
        },
        duration: 0.5, // 减少到 0.5 秒
        ease: 'power2.out', // 使用 power2.out，开始更快
        onComplete: resolve
      })
    })
    
    // 在滚动的同时，提前计算目标位置（并行执行）
    const contentElement = horizontalContainer.querySelector('.content')
    let targetLeft = 0
    
    if (contentElement) {
      // 方法1：使用 offsetLeft 累加（更准确，不受滚动影响）
      let currentElement = targetElement
      while (currentElement && currentElement !== contentElement) {
        targetLeft += currentElement.offsetLeft
        currentElement = currentElement.offsetParent || currentElement.parentElement
      }
      
      // 如果累加结果为0或负数，使用备用方法
      if (targetLeft <= 0) {
        // 方法2：使用 getBoundingClientRect 计算（不等待滚动完成）
        const savedScrollLeft = horizontalContainer.scrollLeft
        horizontalContainer.scrollLeft = 0
        // 使用 requestAnimationFrame 而不是 await，不阻塞
        requestAnimationFrame(() => {
          const contentRect = contentElement.getBoundingClientRect()
          const targetRect = targetElement.getBoundingClientRect()
          targetLeft = targetRect.left - contentRect.left
          horizontalContainer.scrollLeft = savedScrollLeft
        })
      }
    } else {
      // 备用方法：从目标元素向上遍历到容器，累加 offsetLeft
      let currentElement = targetElement
      while (currentElement && currentElement !== horizontalContainer) {
        targetLeft += currentElement.offsetLeft
        currentElement = currentElement.offsetParent || currentElement.parentElement
      }
    }
    
    // 等待滚动完成
    await scrollPromise
    
    // 减少等待时间，使用 requestAnimationFrame 替代 setTimeout
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    
    // 确保 targetLeft 是有效值
    const maxScroll = horizontalContainer.scrollWidth - horizontalContainer.clientWidth
    targetLeft = Math.max(0, Math.min(targetLeft, maxScroll))
    
    // 3. 使用 ScrollTrigger 同步的方式滚动到目标位置（和 vertical-section 一样的处理方式）
    const scrollControl = typeof window !== 'undefined' && window.__historyScrollControl
    if (scrollControl && scrollControl.scrollToHorizontalPosition) {
      // 使用 ScrollTrigger 同步的方式滚动，确保不会滑动后跳转
      await scrollControl.scrollToHorizontalPosition(targetLeft)
    } else {
      // 备用方法：使用 GSAP 动画，更快速度
      const currentScrollLeft = horizontalContainer.scrollLeft
      const scrollDiff = Math.abs(targetLeft - currentScrollLeft)
      const duration = Math.min(Math.max(scrollDiff / 1200, 0.3), 1.2) // 调整计算，更快
      
      await new Promise((resolve) => {
        gsap.to(horizontalContainer, {
          scrollLeft: targetLeft,
          duration: duration,
          ease: 'power2.out', // 使用 power2.out，开始更快
          onComplete: resolve
        })
      })
    }
  } else {
    // 目标元素不在 horizontal 容器内（在 hero 中），直接使用 scrollIntoView
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

</script>
<style>
.menu{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  width: 100px;
  transition: all ease-in-out 0.3s;
  .menu-icon{
    position: absolute;
    right: 20px;
    top: 30px;
    width: 37px;
    height: 33px;
    background-image: url("@/assets/images/menu/menu-icon.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .menu-wrapper{
    padding: 86px 30px;
    display: none;
    .first-level{
      border-top: 1px solid #fff;
      display: flex;
      position: relative;
      justify-content: flex-end;
      min-height: 200px;
      transition: all ease-in-out 0.5s;
      &:last-child{
        border-bottom: 1px solid #fff;
      }
      .first-title-wrapper{
        display: flex;
        align-items: center;
        position: absolute;
        cursor: pointer;
        right: 88px;
        top: 50%;
        transform: translateY(-50%);
        .first-title{
          font-size: 30px;
          color: #fff;
          white-space: nowrap;
        }
        .arrow{
          width: 19px;
          height: 22px;
          display: flex;
          background-image: url("@/assets/images/menu/menu-triangle.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          margin-left: 28px;
          position: absolute;
          top: 50%;
          right: -50px;
          transform: translateY(-50%);
          transform-origin: center center;
        }
      }
      .second-level{
        font-size: 21px;
        color: #fff;
        white-space: nowrap;
        line-height: 50px;
        text-align: right;
        .second-title{
          display: none;
          opacity: 0;
          cursor: pointer;
        }
      }
    }
    .first-level-active{
      .second-level{
        display: block;
      }
    }
  }
  .menu-wrapper-active{
    display: block;
  }
}
.menuActive{
  background-color: rgba(0,0,0,0.3);
  height: 100vh;
  width: 384px;
}
</style>