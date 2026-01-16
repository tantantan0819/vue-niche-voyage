<template>
  <div class="climate">
     <!-- 返回按钮 -->
     <return-button type="climate" @close="handleClose" />
     <!-- 滚动指示器（从第二屏开始显示，共5个点） -->
     <div class="scroll-indicator" v-show="currentScreenIndex >= 1">
       <div class="indicator-dots">
         <div class="dot" :class="{ active: currentScreenIndex === 1 }"></div>
         <div class="dot" :class="{ active: currentScreenIndex === 2 }"></div>
         <div class="dot" :class="{ active: currentScreenIndex === 3 }"></div>
         <div class="dot" :class="{ active: currentScreenIndex === 4 }"></div>
         <div class="dot" :class="{ active: currentScreenIndex === 5 }"></div>
       </div>
     </div>
    <div class="first-content-wrapper">
      <div class="first-screen screen">
        <div class="mountain-1"></div>
        <div class="mountain-2"></div>
        <div class="mountain-3"></div>
        <div class="mountain-4"></div>
        <div class="mountain-5"></div>
        <div class="cloud-1"></div>
        <div class="cloud-2"></div>
        <div class="cloud-3"></div>
        <div class="cloud-4"></div>
        <div class="cloud-5"></div>
        <div class="cloud-6"></div>
        <div class="text"><span>青藏高原</span>的平均海拔超过<span>4000</span>米，从冰雪冻原到山地雨林，从干燥荒漠到温润谷地，高原以独特的气候节律，铺展出一幅壮丽而多变的自然画卷。</div>
      </div>
    </div>
    <div class="content-box">
      <div class="second-screen screen second-single">
        <div class="img-bg"></div>
        <div class="content-wrapper">
          <div class="img-map"></div>
          <div class="img-picture"></div>
          <div class="detail">
            <div class="title">羌塘高原区域</div>
            <p>羌塘高原大部分地区都寒冷干燥，特别是北部羌塘高原，日最低气温几乎全年都在0℃以下。这里降水量稀少，而且主要以固态形式，比如降雪、冰雹为主。冬春季节多有大风、酷寒，气候十分恶劣。因为高寒和干燥，这里的植被也稀疏而贫瘠。即便是南部羌塘高原，要种植农作物也难以正常生长成熟。属于我国高原寒带干旱和高原亚寒带半干旱气候区。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-box">
      <div class="third-screen screen second-single">
        <div class="img-bg"></div>
        <div class="img-bg-video">
          <video
              src="@/assets/images/climate/climate-cdm-storm.mov"
              autoplay
              loop
              disablePictureInPicture
              muted
              playsinline
          ></video>
        </div>
        <div class="content-wrapper">
          <div class="img-map"></div>
          <div class="img-picture"></div>
          <div class="detail">
            <div class="title">柴达木盆地区域</div>
            <p>大风、干燥、黄沙，可能是柴达木盆地给人们的第一印象。由于青藏高原抬升阻挡了印度洋季风水汽，使得这里年降水量自东南部的200毫米可以逐渐递减到西北部的15毫米，是我国著名的干旱盆地之一。柴达木盆地的风力也极为强盛，8级以上大风日数全年可达25～75天，也正因如此，奇特的风蚀地貌在这里非常常见。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-box">
      <div class="four-screen screen second-single">
        <div class="img-bg">
          <video
              src="@/assets/images/climate/climate-zngd-bg-1.mp4"
              autoplay
              loop
              muted
              playsinline
              disablePictureInPicture
          ></video>
        </div>
        <div class="img-bg-2"></div>
        <div class="content-wrapper">
          <div class="img-map"></div>
          <div class="img-picture"></div>
          <div class="detail">
            <div class="title">藏南谷地区域</div>
            <p>这里被誉为“西藏粮仓”，也是西藏古文明的发祥地，属于我国的高原温带半干旱气候区。藏南谷地位于冈底斯山至念青唐古拉山以南、雅鲁藏布江中游的宽谷地带。最暖月平均气温在10-15℃，年降水量约400毫米，普遍在夜间降雨，是青藏高原夜雨最多的地区之一。因此，藏南谷地也成为高原上最为重要的农业区：小麦、青稞等作物都能获得较高的产量。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-box">
      <div class="five-screen screen second-single">
        <div class="img-bg"></div>
        <div class="img-bg-2">
          <video
              src="@/assets/images/climate/climate-hds-cloud.mov"
              autoplay
              loop
              muted
              playsinline
              disablePictureInPicture
          ></video>
        </div>
        <div class="content-wrapper">
          <div class="img-map"></div>
          <div class="img-picture"></div>
          <div class="detail">
            <div class="title">横断山脉区域</div>
            <p>横断山脉地处青藏高原的东部边缘，地形复杂、山高谷深、海拔垂直变化大，所以这里的气候也具有明显的垂直气候分布差异。海拔较高处主要以冷杉等针叶林为主，往下则以桦树、铁杉等针阔混交林和落叶阔叶林为主。受南亚季风和东亚季风共同影响，横断山脉区域的降水较为丰沛，年降水量约500-1000毫米，属于我国高原温带湿润气候区。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-box">
      <div class="six-screen screen second-single">
        <div class="img-bg-video img-bg">
          <video
              src="@/assets/images/climate/climate-zdn-bg.mp4"
              autoplay
              loop
              muted
              playsinline
              disablePictureInPicture
          ></video>
        </div>
        <div class="content-wrapper">
          <div class="img-map"></div>
          <div class="img-picture"></div>
          <div class="detail">
            <div class="title">藏东南区域</div>
            <p>这里是喜马拉雅山脉南翼低山地区。因为水流侵蚀，峡谷深切，垂直高差很大，察隅、墨脱等地都处在这个区域。越靠近喜马拉雅山南翼外缘，海拔越低，全年日平均气温越高，几乎都在10℃以上，降水量多达2500毫米。气候温暖湿润，热带常绿雨林、季雨林在这里非常常见，甚至可以种植香蕉等热带水果。属于我国亚热带和热带山地湿润气候区。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap';
import { pxToVw, pxToVh } from '@/utils/viewportUtils';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReturnButton from "@/components/ReturnButton.vue";
gsap.registerPlugin(ScrollTrigger)

// 定义 emits
const emit = defineEmits(['close'])

// 当前屏幕索引，用于指示器
const currentScreenIndex = ref(0)

// 处理关闭
const handleClose = () => {
  emit('close')
}

const calDistance = (distance) =>{
  return distance / 6480
}
const firstAnimation = () =>{
  // 设置所有 screen 的初始状态
  gsap.set('.first-screen', { opacity: 1, zIndex: 10 })
  gsap.set('.second-screen', { opacity: 0, zIndex: 9 })
  gsap.set('.third-screen', { opacity: 0, zIndex: 8 })
  gsap.set('.four-screen', { opacity: 0, zIndex: 7 })
  gsap.set('.five-screen', { opacity: 0, zIndex: 6 })
  gsap.set('.six-screen', { opacity: 0, zIndex: 5 })
  
  // 第一屏：元素向Z轴移动的动效
  const firstTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.climate-overlay',
      start: 'top top',
      end: '+=2400', // 增加到 2400，确保第二屏能完全显示
      scrub: 0.1,
      onComplete: () => {
        firstTl.scrollTrigger.kill()
      }
    }
  })
  
  // 根据层级向Z轴移动，后面元素移动更多，前面元素移动较少
  // 最远的背景层 - 移动最多
  firstTl.to('.first-screen .mountain-1', {
    translateZ: 300,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.in'
  }, 0)
  // 中后层 - 移动较多
  firstTl.to([
    '.first-screen .mountain-2',
    '.first-screen .mountain-3',
    '.first-screen .cloud-1',
    '.first-screen .cloud-2'
  ], {
    translateZ: 250,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.in'
  }, 0)
  // 中层 - 移动中等
  firstTl.to([
    '.first-screen .mountain-4',
    '.first-screen .mountain-5',
    '.first-screen .cloud-5',
    '.first-screen .cloud-6'
  ], {
    translateZ: 200,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.in'
  }, 0)
  // 前层 - 移动较少
  firstTl.to([
    '.first-screen .cloud-3',
    '.first-screen .cloud-4'
  ], {
    translateZ: 150,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.in'
  }, 0)
  // 最前面的文字层 - 移动最少
  firstTl.to('.first-screen .text', {
    translateZ: 100,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.in'
  }, 0)
  
  // 第一屏动效完成后（约在 800px 位置），第一屏快速消失
  const transitionPoint = 800 / 2400 // 约 0.33
  firstTl.to('.first-screen', {
    opacity: 0,
    duration: 0.3, // 快速消失
    ease: 'power2.in'
  }, transitionPoint)
  
  // 第二屏淡入（在第一屏完全消失后，约在 1600px 位置）
  const secondScreenPoint = 1600 / 2400 // 约 0.67
  firstTl.to('.second-screen', {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  }, secondScreenPoint) // 在第一屏淡出完成后

}

const contentAnimation = () => {
  // 从第二屏开始的屏幕列表
  const screens = ['.second-screen', '.third-screen', '.four-screen', '.five-screen', '.six-screen']
  
  // 设置所有屏幕内容的初始状态
  screens.forEach(selector => {
    gsap.set(`${selector} .content-wrapper`, { y: -100, opacity: 0 })
    gsap.set(`${selector} .img-picture`, { y: -200, opacity: 0 })
    gsap.set(`${selector} .img-map`, { y: 0, opacity: 1 })
  })
  
  // 创建一个统一的 timeline，控制所有屏幕的动画
  // 总滚动距离：第一屏2400px + 5屏各2000px = 12400px，使用13000px确保足够
  const totalScrollDistance = 13000
  
  const masterTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.climate-overlay',
      start: 'top top',
      end: `+=${totalScrollDistance}`,
      scrub: 0.5,
      onUpdate: () => {
        // 检查每个屏幕的可见性，控制视频播放和指示器
        let visibleScreenIndex = -1
        let maxOpacity = 0
        
        // 检查第二到第六屏
        screens.forEach((screenSelector, index) => {
          const screen = document.querySelector(screenSelector)
          if (!screen) return
          
          const opacity = gsap.getProperty(screen, 'opacity') || 0
          
          // 找出可见度最高的屏幕（opacity > 0.5）
          if (opacity > 0.5 && opacity > maxOpacity) {
            maxOpacity = opacity
            visibleScreenIndex = index + 1 // 第二屏是索引1，第三屏是索引2，以此类推
          }
          
          // 控制视频播放
          const videos = screen.querySelectorAll('video')
          if (videos.length > 0) {
            videos.forEach(video => {
              // 如果屏幕可见（opacity > 0.5）且视频暂停，则播放
              if (opacity > 0.5 && video.paused) {
                video.play().catch(err => console.log('Video play failed:', err))
              }
              // 如果屏幕不可见（opacity < 0.5）且视频正在播放，则暂停
              else if (opacity < 0.5 && !video.paused) {
                video.pause()
              }
            })
          }
        })
        
        // 更新指示器（回退时也会更新）
        if (visibleScreenIndex >= 0) {
          currentScreenIndex.value = visibleScreenIndex
        }
      },
      onComplete: () => {
        masterTl.scrollTrigger.kill()
      }
    }
  })
  
  // 为每个屏幕创建动画，使用绝对滚动位置（像素）
  screens.forEach((currentScreen, index) => {
    const nextScreen = screens[index + 1]
    const isLast = index === screens.length - 1
    
    // 每个屏幕的滚动范围：第二屏从2400开始，每屏占2000px
    const scrollStart = 2400 + index * 2000  // 当前屏开始位置
    const contentStart = scrollStart + 400    // 内容开始位置（屏幕显示后400px）
    const mapStart = scrollStart + 600        // 地图开始下滑位置
    const mapDuration = 600                   // 地图下滑消失的滚动距离（像素）
    const mapEnd = mapStart + mapDuration     // 地图完全消失位置
    const pictureStart = mapStart + 450       // 图片开始显示位置（地图下滑到约75%时，还没完全消失）
    const fadeOutStart = scrollStart + 1400   // 当前屏消失开始位置
    const fadeOutEnd = scrollStart + 1700     // 当前屏完全消失位置
    
    // 转换为 timeline 的相对位置（0-1之间，相对于 totalScrollDistance）
    const screenShowPos = scrollStart / totalScrollDistance
    const contentStartPos = contentStart / totalScrollDistance
    const mapStartPos = mapStart / totalScrollDistance
    const mapEndPos = mapEnd / totalScrollDistance
    const pictureStartPos = pictureStart / totalScrollDistance
    const fadeOutStartPos = fadeOutStart / totalScrollDistance
    const fadeOutEndPos = fadeOutEnd / totalScrollDistance
    
    // 计算 duration（作为总滚动距离的比例）
    // 在 scrubbed timeline 中，duration 是滚动距离的比例（0-1）
    const screenShowDuration = 500 / totalScrollDistance
    const contentDuration = 600 / totalScrollDistance
    const mapDurationRatio = mapDuration / totalScrollDistance
    const pictureDuration = 600 / totalScrollDistance
    const fadeOutDuration = 300 / totalScrollDistance
    
    // 当前屏显示（第二屏在第一屏动画中已处理，跳过）
    if (currentScreen !== '.second-screen') {
      masterTl.to(currentScreen, {
        opacity: 1,
        duration: screenShowDuration,
        ease: 'power2.out',
        onStart: () => {
          // 在屏幕显示时播放视频（onUpdate 也会处理，但这里确保立即播放）
          const videos = document.querySelectorAll(`${currentScreen} video`)
          videos.forEach(video => {
            video.play().catch(err => console.log('Video play failed:', err))
          })
        }
      }, screenShowPos)
    }
    
    // 内容滑动显示
    masterTl.to(`${currentScreen} .content-wrapper`, {
      y: 0,
      opacity: 1,
      duration: contentDuration,
      ease: 'power2.out'
    }, contentStartPos)
    
    // 地图先开始下滑消失
    masterTl.to(`${currentScreen} .img-map`, {
      y: 300,
      opacity: 0,
      duration: mapDurationRatio,
      ease: 'power2.in'
    }, mapStartPos)
    
    // 图片在地图下滑过程中（还没完全消失）开始进入显示
    masterTl.to(`${currentScreen} .img-picture`, {
      y: 0,
      opacity: 1,
      duration: pictureDuration,
      ease: 'power2.out'
    }, pictureStartPos)
    
    // 如果不是最后一屏，当前屏消失，下一屏显示
    if (!isLast && nextScreen) {
      // 当前屏快速消失（视频暂停由 onUpdate 处理）
      masterTl.to(currentScreen, {
        opacity: 0,
        duration: fadeOutDuration,
        ease: 'power2.in'
      }, fadeOutStartPos)
      
      // 下一屏淡入（在当前屏完全消失后）
      const nextScreenShowPos = fadeOutEnd / totalScrollDistance
      masterTl.to(nextScreen, {
        opacity: 1,
        duration: screenShowDuration,
        ease: 'power2.out',
        onStart: () => {
          // 在下一屏显示时播放视频（onUpdate 也会处理，但这里确保立即播放）
          const videos = document.querySelectorAll(`${nextScreen} video`)
          videos.forEach(video => {
            video.play().catch(err => console.log('Video play failed:', err))
          })
        }
      }, nextScreenShowPos)
    }
  })
}

// 初始化视频播放控制
onMounted(()=>{
  // 初始暂停所有视频（避免页面加载就播放）
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach(video => {
    video.pause();
  });

  firstAnimation()
  contentAnimation()
})
</script>
<style scoped>
.content-warpper{
  /* padding-top: 1000px; */
  /* margin-bottom: 1000px; */
}
.img-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  contain: paint;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
  }
}
.climate {
  position: relative;
  height: 18000px; /* 为滚动提供足够空间：第一屏2400px + 5个屏幕各2000px = 12400px，使用14000px确保足够 */
  
  /* 滚动指示器（从第二屏开始显示） */
  .scroll-indicator {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    pointer-events: none;
    transition: opacity 0.3s ease;
    
    .indicator-dots {
      display: flex;
      flex-direction: row;
      gap: 16px;
      align-items: center;
      
      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
        cursor: pointer;
        pointer-events: auto;
        
        &:hover {
          background-color: rgba(255, 255, 255, 0.6);
          transform: scale(1.2);
        }
        
        &.active {
          width: 16px;
          height: 16px;
          background-color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
}
.screen{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  opacity: 0;
}

.first-screen{
  overflow: hidden;
  background-image: url("@/assets/images/climate/climate-intro-bg.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  perspective: 200px;
  transform-style: preserve-3d;
  transform: translateZ(0);
  will-change: transform;
  z-index: 10;
  .mountain-1{
    width: 1588px;
    height: 612px;
    background-image: url("@/assets/images/climate/climate-intro-mountain-1.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 0;
    /* z: -600; */
  }
  .mountain-2{
    width: 1551px;
    height: 802px;
    background-image: url("@/assets/images/climate/climate-intro-mountain-2.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    right: 0;
    /* z: -400; */
  }
  .mountain-3{
    width: 551px;
    height: 565px;
    background-image: url("@/assets/images/climate/climate-intro-mountain-3.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    right: 0;
    /* z: -400; */
  }
  .mountain-4{
    width: 1805px;
    height: 288px;
    background-image: url("@/assets/images/climate/climate-intro-mountain-4.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .mountain-5{
    width: 1345px;
    height: 225px;
    background-image: url("@/assets/images/climate/climate-intro-mountain-5.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .cloud-1{
    width: 1121px;
    height: 367px;
    background-image: url("@/assets/images/climate/climate-intro-cloud-1.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    right: 0px;
  }
  .cloud-2{
    width: 1494px;
    height: 424px;
    background-image: url("@/assets/images/climate/climate-intro-cloud-2.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 0px;
  }
  .cloud-3{
    width: 265px;
    height: 94px;
    background-image: url("@/assets/images/climate/climate-intro-cloud-3.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 510px;
    left: 548px;
  }
  .cloud-4{
    width: 411px;
    height: 330px;
    background-image: url("@/assets/images/climate/climate-intro-cloud-4.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 392px;
    left: 100px;
  }
  .cloud-5{
    width: 554px;
    height: 509px;
    background-image: url("@/assets/images/climate/climate-intro-cloud-5.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
  .cloud-6{
    width: 620px;
    height: 235px;
    background-image: url("@/assets/images/climate/climate-intro-cloud-6.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 302px;
    right: 46px;
  }
  .text{
    font-size: 25px;
    color: #293643;
    width: 910px;
    line-height: 48px;
    position: absolute;
    top: 266px;
    left: 122px;
    right: 0;
    transformStyle: 'preserve-3d';
    z: -400;
    span{
      font-size: 50px;
      color: #3d531a;
    }
  }
}
.second-screen{
  z-index: 9;
  background-image: url("@/assets/images/climate/climate-qtgy-bg-1.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  .img-bg{
    width: 1920px;
    height: 356px;
    background-image: url("@/assets/images/climate/climate-qtgy-bg-2.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .img-map{
    width: 699px;
    height: 353px;
    background-image: url("@/assets/images/climate/climate-qtgy-map.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 362px;
    right: 152px;
  }
  .img-picture{
    width: 727px;
    height: 482px;
    background-image: url("@/assets/images/climate/climate-qtgy-picture.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 300px;
    right: 140px;
    border-radius: 20px;
  }
  .detail{
    position: absolute;
    top: 390px;
    left: 140px;
    .title{
      font-size: 52px;
      color: #fff;
      margin-bottom: 44px;
      font-family: 'Alibaba-PuHuiTi-M';
    }
    p{
      width: 790px;
      font-size: 24px;
      color: #fff;
      line-height: 48px;
    }
  }
}
.third-screen{
  z-index: 8;
  background-image: url("@/assets/images/climate/climate-cdm-bg-1.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  .img-bg{
    width: 1920px;
    height: 492px;
    background-image: url("@/assets/images/climate/climate-cdm-bg-2.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
  .img-map{
    width: 699px;
    height: 350px;
    background-image: url("@/assets/images/climate/climate-cdm-map.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 362px;
    right: 152px;
  }
  .img-picture{
    width: 721px;
    height: 481px;
    background-image: url("@/assets/images/climate/climate-cdm-picture.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 300px;
    right: 140px;
    border-radius: 20px;
  }
  .detail{
    position: absolute;
    top: 390px;
    left: 140px;
    .title{
      font-size: 52px;
      color: #fff;
      margin-bottom: 44px;
      font-family: 'Alibaba-PuHuiTi-M';
    }
    p{
      width: 790px;
      font-size: 24px;
      color: #fff;
      line-height: 48px;
    }
  }
}
.four-screen{
  z-index: 7;
  /* background-image: url("@/assets/images/climate/climate-zngd-bg-2.png"); */
  /* background-size: cover; */
  /* background-position: center center; */
  /* background-repeat: no-repeat; */

  .img-bg{
    video{
      width: 1920px;
      height: 1080px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .img-bg-2{
    width: 1920px;
    height: 1080px;
    background-image: url("@/assets/images/climate/climate-zngd-bg-2.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    /* z-index: 3; */
  }
  .img-map{
    width: 699px;
    height: 350px;
    background-image: url("@/assets/images/climate/climate-zngd-map.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 362px;
    right: 152px;
  }
  .img-picture{
    width: 721px;
    height: 481px;
    background-image: url("@/assets/images/climate/climate-zngd-picture.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 300px;
    right: 140px;
    border-radius: 20px;
  }
  .detail{
    position: absolute;
    top: 390px;
    left: 140px;
    .title{
      font-size: 52px;
      color: #fff;
      margin-bottom: 44px;
      font-family: 'Alibaba-PuHuiTi-M';
    }
    p{
      width: 790px;
      font-size: 24px;
      color: #fff;
      line-height: 48px;
    }
  }
}
.five-screen{
  z-index: 6;
  background: #557ea3;

  .img-bg{
    width: 1920px;
    height: 768px;
    background-image: url("@/assets/images/climate/climate-hds-bg-2.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .img-bg-2{
    video{
      width: 1920px;
      height: 1080px;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .img-map{
    width: 699px;
    height: 350px;
    background-image: url("@/assets/images/climate/climate-hds-map.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 362px;
    right: 152px;
  }
  .img-picture{
    width: 721px;
    height: 481px;
    background-image: url("@/assets/images/climate/climate-hds-picture.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 300px;
    right: 140px;
    border-radius: 20px;
  }
  .detail{
    position: absolute;
    top: 390px;
    left: 140px;
    .title{
      font-size: 52px;
      color: #fff;
      margin-bottom: 44px;
      font-family: 'Alibaba-PuHuiTi-M';
    }
    p{
      width: 790px;
      font-size: 24px;
      color: #fff;
      line-height: 48px;
    }
  }
}
.six-screen{
  z-index: 5;
  /* background-image: url("@/assets/images/climate/climate-zngd-bg-2.png"); */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  .img-map{
    width: 699px;
    height: 350px;
    background-image: url("@/assets/images/climate/climate-zdn-map.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 362px;
    right: 152px;
  }
  .img-picture{
    width: 721px;
    height: 481px;
    background-image: url("@/assets/images/climate/climate-zdn-picture.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 300px;
    right: 140px;
    border-radius: 20px;
  }
  .detail{
    position: absolute;
    top: 390px;
    left: 140px;
    .title{
      font-size: 52px;
      color: #fff;
      margin-bottom: 44px;
      font-family: 'Alibaba-PuHuiTi-M';
    }
    p{
      width: 790px;
      font-size: 24px;
      color: #fff;
      line-height: 48px;
    }
  }
}
</style>