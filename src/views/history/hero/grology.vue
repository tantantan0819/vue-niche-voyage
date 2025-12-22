<template>
  <div class="grology">
    <div class="grology-welcome" ref="videoContainer">
      <video
          ref="welcomeVideo"
          class="welcome-video"
          :src="welcomeVideoSrc"
          preload="auto"
          muted
          playsinline
      ></video>
    </div>
    <div class="grology-origin" ref="originContainer">
      <video
          ref="originVideo"
          class="origin-video"
          :src="originInfos[originCurrentIndex].videoUrl"
          preload="auto"
          :muted="!isSoundOn"
          playsinline
          @loadeddata="onOriginVideoLoaded"
          @ended="onOriginVideoEnded"
      ></video>
      <div class="video-accessories">
        <div class="video-description">
          <p class="video-title">{{ originInfos[originCurrentIndex].title }}</p>
          <p :style="{width: originInfos[originCurrentIndex].width}">{{ originInfos[originCurrentIndex].description }}</p>
        </div>
        <div
          class="video-sound"
          :class="{ active: isSoundOn }"
          @click="toggleSound"
        ></div>
        <div class="video-indicator">
          <div
            class="video-dot"
            v-for="(item, index) in originInfos.length"
            :key="index"
            :class="{ active: originCurrentIndex === index }"
            @click="switchVideo(index)"
          ></div>
        </div>
      </div>
    </div>
    <div class="grology-water" style="margin-top: 1000px">
      <div class="water-cloud-1"></div>
      <div class="water-bg-video">
          <video
              src="@/assets/images/geology/geology-to-water-climate-video.mp4"
              autoplay
              preload="auto"
              muted
              playsinline
          ></video>
        <video
            src="@/assets/images/geology/geology-to-water-climate-snow-video.webm"
            autoplay
            preload="auto"
            muted
            loop
            playsinline
        ></video>
      </div>
      <div class="water-cloud-2"></div>
      <div class="water-description">
        <div class="title">亚洲水塔</div>
        <div class="water-detail water-detail-1">
          <p>这里，</p>
          <p>滋养着世界上人口最多最稠密的大洲。</p>
        </div>
        <div class="water-detail water-detail-2">
          <p>众多冰川提供源源融水，让湖泊映照星空和雪山，</p>
          <p>河流自此奔涌而下，流向远方的土地……</p>
        </div>
        <div class="explore-button">深入探索</div>
      </div>
      <div class="biology">
        <div class="biology-detail-1">
          <p>青藏高原是世界屋脊，</p>
          <p>也是独特的生物多样性宝库。</p>
        </div>
        <div class="biology-detail-2">
          <p>草原、湖泊、高山和密林为动植物提供了</p>
          <p>多样的栖息环境。</p>
        </div>
        <div class="biology-title"></div>
        <div class="cloud-1"></div>
        <div class="cloud-2"></div>
        <div class="bird"></div>
      </div>
    </div>
    <div class="lives">
      <div class="first-screen">
          <div class="mountain-img"></div>
          <div class="cloud-img"></div>
          <div class="goose">
            <div class="goose-img"></div>
            <div class="goose-chinese goose-name">斑头雁</div>
            <div class="goose-english goose-name">Anser indicus</div>
            <div class="goose-description">
              <div class="goose-description-img"></div>
              <div class="goose-description-text">主要繁殖在我国青海、西藏、新疆西部的高山湖泊等地区，越冬迁飞至陕西、湖南、四川、云南等地。身体大都呈现灰褐色，头顶具两道黑斑纹，嘴和脚呈现黄色。喜欢栖息在高原湖泊沼泽，飞行能力极强，能翻越喜马拉雅山，是世界上飞行高度最高的鸟类之一。</div>
            </div>
          </div>
      </div>
      <div class="second-screen">
        <div class="second-screen-bg"></div>
        <div class="cloud-img"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pxToVw, pxToVh } from '@/utils/viewportUtils';
import geologyVideo1 from '@/assets/images/geology/geology-video-1.mp4'
import geologyVideo2 from '@/assets/images/geology/geology-video-2.mp4'
import geologyVideo3 from '@/assets/images/geology/geology-video-3.mp4'


gsap.registerPlugin(ScrollTrigger);

const welcomeVideoSrc = new URL(
    "@/assets/images/geology/start-page-1.mp4",
    // "@/assets/videos/resource-animation-baking.mp4",
    import.meta.url
).href;

const welcomeVideo = ref(null);
const videoContainer = ref(null);
const originContainer = ref(null);
const originVideo = ref(null);
let scrollTrigger = null;
let originScrollTrigger = null;
let videoDuration = 0;
const videoProgressProxy = { progress: 0 };
const isSoundOn = ref(true);

// 初始化视频滚动播放
const initVideoScroll = async () => {
  await nextTick();

  if (!welcomeVideo.value || !videoContainer.value) return;

  const video = welcomeVideo.value;

  // 等待视频元数据加载完成
  const loadVideoMetadata = () => {
    return new Promise((resolve) => {
      if (video.readyState >= 2) {
        // 元数据已加载
        videoDuration = video.duration;
        resolve();
      } else {
        video.addEventListener('loadedmetadata', () => {
          videoDuration = video.duration;
          resolve();
        }, { once: true });
      }
    });
  };

  await loadVideoMetadata();

  if (!videoDuration) {
    console.warn('Video duration not available');
    return;
  }

  // 设置视频初始状态
  video.currentTime = 0;
  videoProgressProxy.progress = 0;

  // 初始隐藏 grology-origin
  if (originContainer.value) {
    gsap.set(originContainer.value, { opacity: 0, pointerEvents: 'none' });
  }

  // 创建时间轴动画
  const timeline = gsap.timeline({
    defaults: { ease: "none" }
  });

  // 视频播放动画
  timeline.to(videoProgressProxy, {
    progress: 1,
    duration: videoDuration * 0.5, // 视频播放时间，可以根据需要调整倍数
    onUpdate: () => {
      if (!video) return;
      const targetTime = videoProgressProxy.progress * videoDuration;
      // 只有当时间差大于阈值时才更新，避免频繁更新导致卡顿
      if (Math.abs(video.currentTime - targetTime) > 0.02) {
        video.currentTime = targetTime;
      }
    }
  });

  // 创建 ScrollTrigger
  scrollTrigger = ScrollTrigger.create({
    trigger: videoContainer.value,
    start: "top top",
    end: () => `+=${window.innerHeight * videoDuration * 0.5}`, // 滚动距离与视频时长相关
    scrub: true,
    pin: true,
    anticipatePin: 1,
    animation: timeline,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      // 根据 welcomeVideo 的播放进度控制 grology-origin 的显示/隐藏
      if (!originContainer.value) return;

      // 当 welcomeVideo 播放完成（progress >= 1）时显示 grology-origin
      if (self.progress >= 1) {
        gsap.to(originContainer.value, {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.3,
          ease: 'power2.out'
        });
        // 初始化 grology-origin 的 pin（只初始化一次）
        if (!originScrollTrigger) {
          initOriginPin();
        }
        // 默认第一个视频
        switchVideo(0)

      } else {
        // 回滚时，如果还没播放完成，隐藏 grology-origin
        gsap.to(originContainer.value, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.3,
          ease: 'power2.out'
        });
        // 清理 origin pin
        if (originScrollTrigger) {
          originScrollTrigger.kill();
          originScrollTrigger = null;
        }
      }
    }
  });
};

// 初始化 grology-origin 的 pin
const initOriginPin = () => {
  if (!originContainer.value) return;

  // 如果已经创建过，先清理
  if (originScrollTrigger) {
    originScrollTrigger.kill();
  }

  // 创建新的 ScrollTrigger 来 pin 住 grology-origin
  originScrollTrigger = ScrollTrigger.create({
    trigger: originContainer.value,
    start: "top top",
    end: "+=2000", // 可以根据需要调整滚动距离
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true
  });
};

// 源起万万年
const originCurrentIndex = ref(2)
const originInfos = ref([
  {
    width: pxToVw(700),
    videoUrl: geologyVideo1,
    title: '特提斯洋的终曲',
    description: '距今约3.6亿年前的远古时期，地球上只存在两个超级大陆：北半球的劳亚大陆和南半球的冈瓦纳大陆，大陆之间则是波涛汹涌的古特提斯'
  },
  {
    width: pxToVw(640),
    videoUrl: geologyVideo2,
    title: '永恒的进行时',
    description: '当特提斯洋的波涛退去，古海化为陆地，青藏大地的轮廓初现。但印度板块和欧亚板块的挤压还在持续，巨大的断裂带在高原上纵横交错，地壳不断厚缩与隆起。约2500万年前，印度板块插入欧亚板块下，造成了喜马拉雅山的快速隆升，约到1500万年前，喜马拉雅山脉到达了现今的高度。但直至今日，世界屋脊的活动也从未停止。无论是雪峰与谷地的隆升、喷出蒸汽的热泉，还是频繁的地震，都预示着关于青藏高原的故事，正在继续……',
  },
  {
    width: pxToVw(694),
    videoUrl: geologyVideo3,
    title: '崛起的高原',
    description: '当特提斯洋被切割的同时，从冈瓦纳大陆裂离的板块也逐次朝北移动。先是昆仑板块，然后是可可西里板块，接着是羌塘板块和拉萨板块。它们经过漫长的漂移，由南向北，碰撞挤压到新的欧亚大陆的南缘。最后裂离向北起航的是印度板块，它极速追赶前面的拉萨板块，最终在6500万年前左右，印度板块在北纬13度线附近与已经成为新欧亚板块南缘的拉萨板块发生猛烈碰撞。随着碰撞挤压的持续，摧枯拉朽，造成了超大面积的地表隆起，一个全新的高原开始崛起……',
  },
])
// 展示详情等

const showAccessories = () =>{
  gsap.set('.video-accessories',{opacity: 1, y: -50, duration: 0.5})

}

// 切换视频
const switchVideo = (index) => {
  // 切换视频是隐藏当前的详情等，等到视频播放结束以后再浮现
  gsap.set('.video-accessories',{opacity: 0, y: 50})
  if (index === originCurrentIndex.value) return;
  originCurrentIndex.value = index;
  // Vue 的响应式绑定会自动更新视频源，loadeddata 事件会触发自动播放
  // 但第一次展示时，需要主动检查并播放视频
  nextTick(() => {
    if (originVideo.value) {
      // 为了通过浏览器自动播放策略，确保视频是静音的
      if (!originVideo.value.muted) {
        originVideo.value.muted = true;
        // 同步 isSoundOn 状态
        isSoundOn.value = false;
      }
      // 添加 ended 事件监听器
      originVideo.value.removeEventListener('ended', onOriginVideoEnded);
      originVideo.value.addEventListener('ended', onOriginVideoEnded);
      // 如果视频已经加载了足够的数据，直接播放
      if (originVideo.value.readyState >= 2) {
        originVideo.value.play().catch(err => {
          console.warn('Video autoplay failed:', err);
        });
      } else {
        // 如果视频还没有加载完成，添加一个备用监听确保播放
        // 使用 once: true 避免重复监听，因为 onOriginVideoLoaded 也会处理
        const playWhenReady = () => {
          if (originVideo.value && originVideo.value.readyState >= 2) {
            originVideo.value.play().catch(err => {
              console.warn('Video autoplay failed:', err);
            });
          }
        };
        originVideo.value.addEventListener('loadeddata', playWhenReady, { once: true });
        // 也监听 canplay 事件作为备用
        originVideo.value.addEventListener('canplay', playWhenReady, { once: true });
      }
    }
  });
}

// 切换声音
const toggleSound = () => {
  isSoundOn.value = !isSoundOn.value;
  if (originVideo.value) {
    originVideo.value.muted = !isSoundOn.value;
  }
}

// 视频加载完成后的处理
const onOriginVideoLoaded = () => {
  if (originVideo.value) {
    // 为了通过浏览器自动播放策略，确保视频是静音的
    if (!originVideo.value.muted) {
      originVideo.value.muted = true;
      // 同步 isSoundOn 状态
      isSoundOn.value = false;
    }
    // 移除之前可能存在的 ended 监听器，然后添加新的
    originVideo.value.removeEventListener('ended', onOriginVideoEnded);
    originVideo.value.addEventListener('ended', onOriginVideoEnded);
    originVideo.value.play().catch(err => {
      console.warn('Video autoplay failed:', err);
    });
  }
}

// 视频播放结束后的处理
const onOriginVideoEnded = () => {
  console.log('视频播放完毕了')
  if (originVideo.value) {
    const video = originVideo.value;
    // 将视频暂停在最后一帧，避免黑屏
    // 使用 setTimeout 确保在 ended 事件处理完成后再设置 currentTime
    setTimeout(() => {
      if (video && video.duration && isFinite(video.duration)) {
        // 设置到最后一帧（duration - 0.1 秒）
        video.currentTime = Math.max(0, video.duration - 0.1);
        // 确保视频暂停在最后一帧
        video.pause();
      }
    }, 0);
  }
  showAccessories();
}
// 生物部分视角位移
let viewDisplacementTrigger = null;
const viewDisplacement = async () => {
  await nextTick();
  
  const firstScreen = document.querySelector('.first-screen');

  if (!firstScreen) return;
  
  // 如果已经创建过，先清理
  if (viewDisplacementTrigger) {
    viewDisplacementTrigger.kill();
  }
  
  // viewDisplacementTrigger = ScrollTrigger.create({
  //   trigger: '.lives',
  //   start: 'top top', // 当容器顶部到达视口顶部时开始
  //   end: () => `+=960`, // 横向滚动需要的滚动距离（1倍视口高度）
  //   scrub: true, // 与滚动同步，平滑跟随
  //   pin: true, // 在横向滚动期间固定容器，防止向下滚动
  //   anticipatePin: 1,
  //   animation: gsap.to('.first-screen', {
  //     x: -960, // 横向位移到最右边
  //     ease: 'none' // 线性动画，与滚动完全同步
  //   }),
  //   invalidateOnRefresh: true,
  // });
}

onMounted(() => {
  initVideoScroll();
  // 视角位移
  viewDisplacement();
});


onUnmounted(() => {
  if (scrollTrigger) {
    scrollTrigger.kill();
  }
  if (originScrollTrigger) {
    originScrollTrigger.kill();
  }
  if (viewDisplacementTrigger) {
    viewDisplacementTrigger.kill();
  }
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars?.trigger === videoContainer.value || trigger.vars?.trigger === originContainer.value) {
      trigger.kill();
    }
  });
});

</script>
<style scoped>
.grology {
  width: 1920px;
  overflow-x: hidden;
}

.grology-welcome {
  position: relative;
}

.welcome-video {
  width: 1920px;
  height: 1080px;
  display: block;
}
.grology-origin {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  z-index: 10;
}

.origin-video {
  width: 1920px;
  height: 1080px;
}

.video-sound {
  width: 50px;
  height: 50px;
  background-image: url("@/assets/images/geology/geology-sound-botton.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 70px;
  left: 70px;
  cursor: pointer;
}

.video-sound.active {
  background-color: red;
}

.video-indicator {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateY(-50%);
}

.video-dot {
  width: 12px;
  height: 12px;
  background-color: rgba(255,255,255,0.6);
  transition: all ease-in-out 0.1s;
  margin-right: 56px;
  border-radius: 50%;
  cursor: pointer;
}

.video-dot:last-child {
  margin-right: 0;
}

.video-dot.active {
  width: 16px;
  height: 16px;
  background-color: #fff;
}

.video-description {
  position: absolute;
  top: 620px;
  left: 70px;
  color: #fff;
  padding: 24px 16px;
  background-color: rgba(97,97,07,0.15);
  border-radius: 20px;
  height: auto;
  .video-description{
    font-size: 22px;
    line-height: 34px;
  }
}

.video-title{
  font-size: 25px;
  color: #fff;
  margin-bottom: 20px;
}
.grology-water{
  position: relative;
  width: 1920px;
  height: 8096px;
  background-image: url("@/assets/images/geology/geology-to-water-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  //background-position: center -1080px;

  .water-cloud-1{
    width: 1920px;
    height: 1054px;
    background-image: url("@/assets/images/geology/geology-to-water-element-1.png");
    background-size: cover;
    margin-top: -300px;
    position: relative;
    z-index: 99;
  }
  .water-cloud-2{
    width: 1920px;
    height: 1146px;
    background-image: url("@/assets/images/geology/geology-to-water-element-2.png");
    background-size: cover;
    margin-top: -300px;
    position: relative;
    z-index: 99;
  }
  .water-bg-video{
    position: relative;
    width: 1920px;
    height: 1080px;
    margin-top: -200px;

    video{
      width: 1920px;
      height: 1080px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .water-description{
    display: flex;
    align-items: center;
    flex-direction: column;
    .title{
      color: #366294;
      font-size: 40px;
    }
  }
  .water-detail-1{
    font-size: 26px;
    line-height: 40px;
    color: #366294;
    margin-top: 280px;
    text-align: center;
  }
  .water-detail-2{
    font-size: 40px;
    line-height: 60px;
    color: #366294;
    margin-top: 240px;
    text-align: center;

  }
  .explore-button{
    width: 270px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 40px;
    border-radius: 20px;
    background-color: rgba(159,184,198, 0.5);
    margin-top: 150px;
    cursor: pointer;
  }
}
.biology{
  width: 1920px;
  height: 1520px;
  position: absolute;
  left: 0;
  bottom: 0;
  .biology-detail-1{
    font-size: 32px;
    line-height: 54px;
    position: absolute;
    left: 254px;
    color: #286f86;
  }
  .biology-detail-2{
    font-size: 32px;
    line-height: 54px;
    position: absolute;
    left: 1064px;
    top: 626px;
    color: #2d5f98;

  }
  .biology-title{
    width: 1383px;
    height: 331px;
    background-image: url("@/assets/images/geology/geology-to-water-character-1.png");
    background-size: cover;
    left: 274px;
    top: 186px;
    position: absolute;
  }
  .cloud-1{
    width: 1301px;
    height: 994px;
    background-image: url("@/assets/images/geology/geology-to-water-element-4.png");
    background-size: cover;
    right: -70px;
    top: -526px;
    position: absolute;
  }
  .cloud-2{
    width: 1391px;
    height: 1238px;
    background-image: url("@/assets/images/geology/geology-to-water-element-5.png");
    background-size: cover;
    left: 0px;
    top: 306px;
    position: absolute;
  }
}
.lives{
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  //overflow-x: hidden; /* 隐藏横向溢出，确保位移效果正常 */
  .first-screen{
    width: 2880px;
    height: 2160px;
    background-image: url("@/assets/images/lives/lives-bty-bg.png");
    background-size: cover;
    position: relative;
    &:before{
      content: '';
      width: 2873px;
      height: 1472px;
      background-image: url("@/assets/images/lives/lives-bty-snow.png");
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
    .mountain-img{
      width: 2880px;
      height: 1605px;
      background-image: url("@/assets/images/lives/lives-bty-mountain.png");
      background-size: cover;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .cloud-img{
      width: 2880px;
      height: 1190px;
      background-image: url("@/assets/images/lives/lives-bty-cloud.png");
      background-size: cover;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .goose{
      position: absolute;
      top: 278px;
      left: 468px;
      .goose-img{
        width: 814px;
        height: 397px;
        background-image: url("@/assets/images/lives/lives-bty.png");
        background-size: cover;
      }
     .goose-name{
       font-size: 36px;
       color: #4b4b4b;
     }
      .goose-english{
        margin-top: 20px;
      }
      .goose-description{
        padding: 30px;
        width: 590px;
        border-radius: 30px;
        background-color: rgba(112,168,203,0.8);
        position: absolute;
        top: -30px;
        left: 570px;
        .goose-description-img{
          width: 530px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-bty-image.jpg");
          background-size: cover;
        }
        .goose-description-text{
          font-size: 22px;
          color: #fff;
          line-height: 54px;
          width: 530px;
          margin-top: 40px;
        }
      }
    }
  }
  .second-screen{
    width: 1080px;
    height: 1920px;
    position: relative;
    .second-screen-bg{
      width: 1920px;
      height: 2740px;
      background-image: url("@/assets/images/lives/lives-xm-bg.png");
      background-size: cover;
      left: 0px;
      top: 0px;
      position: absolute;
    }
    .cloud-img{
      width: 2139px;
      height: 912px;
      background-image: url("@/assets/images/lives/lives-transition-cloud-3.png");
      background-size: cover;
      left: 0px;
      top: -300px;
      position: absolute;
    }
  }

}

</style>