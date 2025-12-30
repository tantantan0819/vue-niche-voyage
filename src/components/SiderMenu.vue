<template>
  <div :class="['menu',{'menuActive': isExpandMenu}]">
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
    x: 0, // 重置 transform，因为现在使用 left 定位
    clearProps: 'x', // 清除 x transform
    left: '50%',
    width: 300,
    duration: 0.2,
    ease: 'power2.in'
  })
  
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
      { title: '从雪山到雨林' },
      { title: '亚洲水塔' },
      { title: '高原灵踪' },
      { title: '雪域秘藏' },
    ]
  },
  {
    title: '极境史诗',
    options: [
      { title: '史前回响' },
      { title: '象雄文明' },
      { title: '吐蕃王朝' },
      { title: '盟启一统' },
      { title: '易道万里' },
      { title: '雪域新章' },
      { title: '守土抗侵' },
    ]
  },
  {
    title: '极境华章',
    options: [
      { title: '雪域巍阁-建筑篇' },
      { title: '高原瑰艺-美术篇' },
      { title: '吟诵千古-文学与戏剧篇' },
      { title: '极境风土 -民俗篇' },
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
      x: 0, // 重置 transform，因为现在使用 left 定位
      clearProps: 'x', // 清除 x transform
      left: '50%',
      width: 300,
      duration: 0.5,
      ease: 'power2.in'
    })
    
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
        x: 0, // 重置 transform，因为现在使用 left 定位
        clearProps: 'x', // 清除 x transform
        left: '50%',
        width: 300,
        duration: 0.2,
        ease: 'power2.in'
      })
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