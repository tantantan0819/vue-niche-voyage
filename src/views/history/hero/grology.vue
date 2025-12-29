<template>
  <div class="grology">
<!--    <div class="grology-origin" ref="originContainer">-->
<!--      <div class="welcome-video-wrapper">-->
<!--        <video-->
<!--            ref="welcomeVideo"-->
<!--            class="welcome-video"-->
<!--            :src="welcomeVideoSrc"-->
<!--            preload="auto"-->
<!--            muted-->
<!--            playsinline-->
<!--            @ended="onWelcomeVideoEnded"-->
<!--        ></video>-->
<!--        <div class="welcome-video-roller" ref="welcomeVideoRoller"></div>-->
<!--      </div>-->
<!--      <div class="origin-video-wrapper" ref="originVideoWrapper">-->
<!--        <video-->
<!--            ref="originVideo"-->
<!--            class="origin-video"-->
<!--            :src="originInfos[originCurrentIndex].videoUrl"-->
<!--            preload="auto"-->
<!--            playsinline-->
<!--            @ended="onOriginVideoEnded"-->
<!--        ></video>-->
<!--        <div class="video-accessories" ref="videoAccessories">-->
<!--          <div class="video-description" ref="videoDescription">-->
<!--            <p class="video-title">{{ originInfos[originCurrentIndex].title }}</p>-->
<!--            <p :style="{width: originInfos[originCurrentIndex].width}">{{ originInfos[originCurrentIndex].description[0] }}</p>-->
<!--          </div>-->
<!--          <div class="video-sound"></div>-->
<!--          <div class="video-indicator">-->
<!--            <div-->
<!--                class="video-dot"-->
<!--                v-for="(item, index) in originInfos.length"-->
<!--                :key="index"-->
<!--                :class="{ active: originCurrentIndex === index }"-->
<!--            ></div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="grology-water" style="margin-top: 500px">
      <div class="water-cloud-1"></div>
      <div class="water-bg-video">
        <video
            ref="climateVideo1"
            src="@/assets/images/geology/geology-to-water-climate-video.mp4"
            preload="auto"
            muted
            playsinline
            @ended="climateVideoEnded"
            @timeupdate="onClimateVideo1TimeUpdate"
            @loadeddata="onClimateVideo1LoadedData"
        ></video>
        <div class="climate-wrapper">
          <div class="climate-title">从雪山到雨林</div>
          <div class="climate-description">
            <p>准备好了吗？</p>
            <p>我们先深入高原内部，感受阳光、雨雪和温度！</p>
          </div>
          <div class="climate-btn explore-btn" @click="linkTo('/voyage/climate')">深入探索</div>
        </div>
      </div> 
      <div class="water-cloud-2-wrapper">
        <div class="water-cloud-2"></div>
      </div>
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
        <div class="explore-button explore-btn"  @click="linkTo('/voyage/landscape')">深入探索</div>
      </div>
      <div class="biology">
        <div class="biology-detail-1"
             data-parallax="true"
             data-parallax-axis="y"
             data-parallax-from="150"
             data-parallax-to="-150"
             data-parallax-speed="1.1"
             data-parallax-center-lock="true"
        >
          <p>青藏高原是世界屋脊，</p>
          <p>也是独特的生物多样性宝库。</p>
        </div>
        <div class="biology-detail-2"
             data-parallax="true"
             data-parallax-axis="y"
             data-parallax-from="150"
             data-parallax-to="-150"
             data-parallax-speed="1.1"
             data-parallax-center-lock="true">
          <p>草原、湖泊、高山和密林为动植物提供了</p>
          <p>多样的栖息环境。</p>
        </div>
        <div
            class="biology-title"
            data-parallax="true"
            data-parallax-axis="y"
            data-parallax-from="250"
            data-parallax-to="-250"
            data-parallax-speed="1.1"
            data-parallax-center-lock="true"
        ></div>
        <div class="cloud-1"></div>
        <div class="cloud-2"
             data-parallax-axis="y"
             data-parallax-from="350"
             data-parallax-to="-350"
             data-parallax-speed="1.1"
             data-parallax-center-lock="true"></div>
        <div class="bird"></div>
      </div>
    </div>
    <div class="lives">
      <div class="first-screen">
        <div class="first-screen-bg-1"></div>
        <div class="first-screen-bg-2"></div>
        <div class="mountain-img"></div>
        <div class="cloud-img"></div>
        <div class="goose">
          <div class="goose-info" @click="showGooseDescription">
            <div class="goose-img"></div>
            <div class="goose-tip"></div>
            <div class="goose-chinese goose-name">斑头雁</div>
            <div class="goose-english goose-name">Anser indicus</div>
          </div>
          <div class="goose-description" ref="gooseDescription" @click="closeGooseDescription">
            <div class="goose-description-img"></div>
            <div class="goose-description-text">主要繁殖在我国青海、西藏、新疆西部的高山湖泊等地区，越冬迁飞至陕西、湖南、四川、云南等地。身体大都呈现灰褐色，头顶具两道黑斑纹，嘴和脚呈现黄色。喜欢栖息在高原湖泊沼泽，飞行能力极强，能翻越喜马拉雅山，是世界上飞行高度最高的鸟类之一。</div>
          </div>
        </div>
      </div>
      <div class="second-screen">
        <div class="second-screen-bg"></div>
        <div class="cloud-img-1"></div>
        <div class="cloud-img-2"></div>
        <div class="mountain-img"></div>
        <div class="panthera">
          <div class="panthera-info" @click="showPantheraDescription">
            <div class="panthera-img"></div>
            <div class="panthera-name panthera-chinese"  data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">雪豹</div>
            <div class="panthera-name panthera-english"
                 data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">Panthera uncia</div>
          </div>
          <div class="panthera-description" ref="pantheraDescription" @click="closePantheraDescription">
            <div class="panthera-description-img"></div>
            <div class="panthera-description-text">主要分布于青藏高原和新疆、青海、四川等地，国家一级保护野生动物。全身呈灰白色且满布黑斑，尾巴粗长，超过体长的2／3，四肢短粗。喜欢栖居在海拔3000—6000米的高山空旷多岩地带。主要捕食野羊、岩羊，有时也猎取狍子、旱獭、黄鼠、野兔等动物。</div>
          </div>
        </div>
      </div>
      <div class="horizontal-02">
        <div class="cloud-img-2-extended"></div>
        <div class="third-screen">
          <div class="cloud-img-1"></div>
          <div class="chiru">
            <div class="chiru-info" @click="showChiruDescription">
              <div class="chiru-img"></div>
              <div class="chiru-name chiru-chinese">藏羚</div>
              <div class="chiru-name chiru-english">Pantholops hodgsonii</div>
            </div>
            <div class="chiru-description" ref="chiruDescription" @click="closeChiruDescription">
              <div class="chiru-description-img"></div>
              <div class="chiru-description-text">也叫藏羚羊、长角羊，青藏高原特有物种，国家一级保护野生动物。体长120-140厘米，上体毛色呈现淡棕褐色，胸腹部和四肢内侧为白色。雄性角细长似鞭，乌黑发亮。栖息于海拔4000-5000米的高山草原和荒漠地带，善于奔跑，群居性强，以草类植物为食。</div>
            </div>
          </div>
        </div>
        <div class="four-screen">
          <div class="four-screen-bg"></div>
          <div class="four-screen-tree"></div>
          <div class="panda">
            <div class="panda-info" @click="showPandaDescription">
              <div class="panda-img"></div>
              <div class="panda-grass"></div>
              <div class="panda-name panda-chinese"
                   data-parallax="true"
                   data-parallax-axis="y"
                   data-parallax-from="100"
                   data-parallax-to="0"
                   data-parallax-speed="1.1"
                   data-parallax-center-lock="true">大熊猫</div>
              <div class="panda-name panda-english"
                   data-parallax="true"
                   data-parallax-axis="y"
                   data-parallax-from="100"
                   data-parallax-to="0"
                   data-parallax-speed="1.1"
                   data-parallax-center-lock="true">Ailuropoda melanoleuca</div>
            </div>
            <div class="panda-description" ref="pandaDescription" @click="closePandaDescription">
              <div class="panda-description-img"></div>
              <div class="panda-description-text">主要分布于四川、陕西和甘肃的部分山区，国家一级保护野生动物。体形似熊，但头部宽而短，毛色以黑白相间为特征，眼圈、肩部及四肢为黑色。多栖息在海拔2600—3500米的高山竹林地带，喜欢湿润、凉爽的气候。大熊猫性情较温顺，以竹子为主食，偶尔也吃小型动物。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="secret">
      <div class="first-screen screen">
        <div class="clouds">
          <div class="cloud-img-1"></div>
          <div class="cloud-img-2"></div>
        </div>
        <div class="circle">
          <div class="circle-img-1"></div>
          <div class="circle-img-2"></div>
        </div>
        <div class="dove-img">
          <div class="dove-img-1"></div>
          <div class="dove-img-2"></div>
        </div>
        <div class="text-1"
             data-parallax="true"
             data-parallax-axis="y"
             data-parallax-from="100"
             data-parallax-to="-100"
             data-parallax-speed="1.1"
             data-parallax-center-lock="true">
          <p>这里的生态系统脆弱而独特。</p>
          <p>保护高原上的精灵，必要且紧迫。</p>
        </div>
        <div class="text-2"
             data-parallax="true"
             data-parallax-axis="y"
             data-parallax-from="100"
             data-parallax-to="-100"
             data-parallax-speed="1.1"
             data-parallax-center-lock="true">
          <p>青藏高原不仅是<span>万千生灵</span>的生生家园</p>
          <p>也储藏着巨量的宝藏。</p>
        </div>
      </div>
      <div class="second-screen screen">
          <div class="secret-title"
               data-parallax="true"
               data-parallax-axis="y"
               data-parallax-from="100"
               data-parallax-to="-100"
               data-parallax-speed="1.1"
               data-parallax-center-lock="true">
            <p>雪域</p>
            <p>秘藏</p>
          </div>
          <div class="secret-description"
               data-parallax="true"
               data-parallax-axis="y"
               data-parallax-from="100"
               data-parallax-to="-100"
               data-parallax-speed="1.1"
               data-parallax-center-lock="true">
            <p>高原资源多样而独具优势，是我国重要的清洁能源与战略资源库。</p>
          </div>
         <div class="secret-btn explore-btn"
              data-parallax="true"
              data-parallax-axis="y"
              data-parallax-from="100"
              data-parallax-to="-100"
              data-parallax-speed="1.1"
              data-parallax-center-lock="true" @click="linkTo('/voyage/resource')">深入探索</div>
      </div>
      <div class="third-screen screen">
        <div class="text-wrapper"
             data-parallax="true"
             data-parallax-axis="y"
             data-parallax-from="100"
             data-parallax-to="-100"
             data-parallax-speed="1.1"
             data-parallax-center-lock="true">
          <p>自20万年前，<span>人类足迹</span>初现于青藏高原，</p>
<!--          <p>关于生态保护与资源开发之间平衡的探索便已开启。</p>-->
          <p>独特的气候条件和生态环境的特殊性，没有阻挡人类文明的生根与延续。</p>
          <p>相反，正是在与自然的对话与调适中，</p>
          <p>高原文明展现出非凡的韧性，最终孕育出多元而璀璨的文明图景。</p>
        </div>
      </div>
      <div class="four-screen screen">
        <div class="text-wrapper"
             data-parallax="true"
             data-parallax-axis="y"
             data-parallax-from="100"
             data-parallax-to="-100"
             data-parallax-speed="1.1"
             data-parallax-center-lock="true">
          <p>出发，</p>
          <p>前往青藏高原东缘</p>
        </div>
      </div>
      <div class="five-screen screen">
        <div class="light-img-1"></div>
        <div class="light-img-2"></div>
        <div class="light-img-3"></div>
      </div>
      <div class="screen six-screen" >
        <div class="fragment">
          <div class="fragment-img"></div>
        </div>
        <div class="fragment">
          <div class="fragment-img"></div>
        </div>
        <div class="fragment">
          <div class="fragment-img"></div>
        </div>
        <div class="fragment">
          <div class="fragment-img"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from 'vue-router'
import { pxToVw, pxToVh, pxToVwPx, pxToVhPx  } from '@/utils/viewportUtils';
import geologyVideo1 from '@/assets/images/geology/geology-video-1.mp4'
import geologyVideo2 from '@/assets/images/geology/geology-video-2.mp4'
import geologyVideo3 from '@/assets/images/geology/geology-video-3.mp4'

const router = useRouter()

gsap.registerPlugin(ScrollTrigger);

const linkTo = path =>{
  router.push(path)
}

const welcomeVideoSrc = new URL(
    "@/assets/images/geology/start-page-1.mp4",
    // "@/assets/videos/resource-animation-baking.mp4",
    import.meta.url
).href;

const welcomeVideo = ref(null);
const originContainer = ref(null);
const originVideo = ref(null);
const welcomeVideoRoller = ref(null);
const originVideoWrapper = ref(null);
const videoAccessories = ref(null);
const videoDescription = ref(null);
// 动效相关变量已移除，保留基础数据
const originCurrentIndex = ref(0); // 当前视频索引（保留用于显示）
const welcomeVideoStarted = ref(false); // welcomeVideo 是否已开始播放
const welcomeVideoCompleted = ref(false); // welcomeVideo 是否播放完成
const welcomeVideoHidden = ref(false); // welcomeVideo 是否已隐藏
const originVideoStarted = ref(false); // originVideo 是否已开始播放
const originVideoCompleted = ref(false); // originVideo 是否播放完成
const videoAccessoriesShown = ref(false); // video-accessories 是否已显示
const firstDescriptionShown = ref(false); // 第一个 description 是否已显示
const secondDescriptionShown = ref(false); // 第二个 description 是否已显示
const secondVideoStarted = ref(false); // 第二个视频是否已开始播放
const secondVideoCompleted = ref(false); // 第二个视频是否已播放完成
const videoDescriptionShownAfterSecondVideo = ref(false); // 第二个视频播放完成后 video-description 是否已显示
const thirdVideoStarted = ref(false); // 第三个视频是否已开始播放
const thirdVideoCompleted = ref(false); // 第三个视频是否已播放完成
const videoDescriptionShownAfterThirdVideo = ref(false); // 第三个视频播放完成后 video-description 是否已显示
const isProcessingScroll = ref(false); // 是否正在处理滚动事件，防止快速连续触发
let welcomeVideoScrollHandler = null; // welcomeVideo 滚动事件处理器
let switchToOriginVideoHandler = null; // 切换到 originVideo 的滚动事件处理器
let showVideoAccessoriesHandler = null; // 显示 video-accessories 的滚动事件处理器
let showFirstDescriptionHandler = null; // 显示第一个 description 的滚动事件处理器
let showSecondDescriptionHandler = null; // 显示第二个 description 的滚动事件处理器
let playSecondVideoHandler = null; // 播放第二个视频的滚动事件处理器
let showVideoDescriptionAfterSecondVideoHandler = null; // 第二个视频播放完成后显示 video-description 的滚动事件处理器
let hideVideoDescriptionAndPlayThirdVideoHandler = null; // 隐藏 video-description 并播放第三个视频的滚动事件处理器
let showVideoDescriptionAfterThirdVideoHandler = null; // 第三个视频播放完成后显示 video-description 的滚动事件处理器

// climate video 相关的 refs 和状态
const climateVideo1 = ref(null);
let climateVideo1Duration = 0;
let waterCloud1ScrollTrigger = null; // water-cloud-1 的 ScrollTrigger 实例
let waterCloud2ScrollTrigger = null; // water-cloud-2 的 ScrollTrigger 实例
let waterVideoScrollTrigger = null; // water-bg-video 的 ScrollTrigger 实例
let gooseInfoScrollTrigger = null; // 大雁 的 ScrollTrigger 实例
let climateVideo1Completed = false; // 第一个视频是否播放完成
let scrollDisabled = false; // 是否禁用滚动
let scrollDisabledHandler = null; // 滚动禁用事件处理器
const gooseDescription = ref(null); // goose-description 的 ref
const gooseDescriptionShown = ref(false); // goose-description 是否已显示
const pantheraDescription = ref(null); // panthera-description 的 ref
const pantheraDescriptionShown = ref(false); // panthera-description 是否已显示
const chiruDescription = ref(null); // chiru-description 的 ref
const chiruDescriptionShown = ref(false); // chiru-description 是否已显示
const pandaDescription = ref(null); // panda-description 的 ref
const pandaDescriptionShown = ref(false); // panda-description 是否已显示

// 通用的详情介绍弹出/关闭管理器
let currentDescriptionHandler = null; // 当前打开的详情介绍的事件处理器

// 动效相关函数已移除：loadVideoMetadata, initVideoScroll

// 动效相关函数已移除：handleScrollUpdate


// 源起万万年
const originInfos = ref([
  {
    width: pxToVw(700),
    videoUrl: geologyVideo1,
    title: '特提斯洋的终曲',
    description: [
        '距今约3.6亿年前的远古时期，地球上只存在两个超级大陆：北半球的劳亚大陆和南半球的冈瓦纳大陆，大陆之间则是波涛汹涌的古特提斯',
        '大约3亿年前，大陆开始解体。劳亚大陆分裂成了北美大陆和欧亚大陆，而冈瓦纳大陆的裂离则更加破碎。分裂出的大陆块有印度、南极、澳大利亚等，小陆块则有羌塘板块、拉萨板块等。辽阔的特提斯洋也被众多大陆块阻隔切割，迎来了落幕的序章……',
    ]
  },
  {
    width: pxToVw(640),
    videoUrl: geologyVideo2,
    title: '永恒的进行时',
    description: ['当特提斯洋的波涛退去，古海化为陆地，青藏大地的轮廓初现。但印度板块和欧亚板块的挤压还在持续，巨大的断裂带在高原上纵横交错，地壳不断厚缩与隆起。约2500万年前，印度板块插入欧亚板块下，造成了喜马拉雅山的快速隆升，约到1500万年前，喜马拉雅山脉到达了现今的高度。但直至今日，世界屋脊的活动也从未停止。无论是雪峰与谷地的隆升、喷出蒸汽的热泉，还是频繁的地震，都预示着关于青藏高原的故事，正在继续……'],
  },
  {
    width: pxToVw(694),
    videoUrl: geologyVideo3,
    title: '崛起的高原',
    description: ['当特提斯洋被切割的同时，从冈瓦纳大陆裂离的板块也逐次朝北移动。先是昆仑板块，然后是可可西里板块，接着是羌塘板块和拉萨板块。它们经过漫长的漂移，由南向北，碰撞挤压到新的欧亚大陆的南缘。最后裂离向北起航的是印度板块，它极速追赶前面的拉萨板块，最终在6500万年前左右，印度板块在北纬13度线附近与已经成为新欧亚板块南缘的拉萨板块发生猛烈碰撞。随着碰撞挤压的持续，摧枯拉朽，造成了超大面积的地表隆起，一个全新的高原开始崛起……'],
  },
])

// 动效相关函数已移除：currentDescription, switchVideo, toggleSound, onOriginVideoLoaded, onOriginVideoEnded

// 监听第一个视频的时间更新
const onClimateVideo1TimeUpdate = () => {
  if (!climateVideo1.value) return;
  
  // 获取视频时长（如果还没有获取）
  if (!climateVideo1Duration && climateVideo1.value.duration) {
    climateVideo1Duration = climateVideo1.value.duration;
  }
};

// 监听第一个视频的数据加载完成
const onClimateVideo1LoadedData = () => {
  if (!climateVideo1.value) return;
  
  // 确保视频从开头开始，防止显示最后一帧
  if (climateVideo1.value.currentTime > 0 && !climateVideo1Completed) {
    climateVideo1.value.currentTime = 0;
  }
};

// 启用滚动锁定
const enableScrollLock = () => {
  if (scrollDisabled) return;
  scrollDisabled = true;
  
  // 保存当前滚动位置
  const scrollY = window.scrollY || window.pageYOffset;
  
  // 给 body 添加样式来完全禁止滚动
  const body = document.body;
  const html = document.documentElement;
  
  // 创建滚动事件处理器
  scrollDisabledHandler = (e) => {
    // 阻止所有滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 确保滚动位置保持在顶部
    window.scrollTo(0, 0);
    
    return false;
  };
  
  // 保存原始样式到处理器对象上
  scrollDisabledHandler._originalBodyOverflow = body.style.overflow;
  scrollDisabledHandler._originalBodyPosition = body.style.position;
  scrollDisabledHandler._originalBodyTop = body.style.top;
  scrollDisabledHandler._originalBodyWidth = body.style.width;
  scrollDisabledHandler._originalHtmlOverflow = html.style.overflow;
  scrollDisabledHandler._scrollY = scrollY;
  
  // 设置 body 样式来禁止滚动
  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}px`;
  body.style.width = '100%';
  html.style.overflow = 'hidden';
  
  // 监听多种滚动事件
  window.addEventListener('wheel', scrollDisabledHandler, { passive: false });
  window.addEventListener('touchmove', scrollDisabledHandler, { passive: false });
  window.addEventListener('scroll', scrollDisabledHandler, { passive: false });
  
  // 阻止键盘滚动
  const keyHandler = (e) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
      e.preventDefault();
      return false;
    }
  };
  window.addEventListener('keydown', keyHandler);
  scrollDisabledHandler._keyHandler = keyHandler;
};

// 禁用滚动锁定
const disableScrollLock = () => {
  if (!scrollDisabled) return;
  scrollDisabled = false;
  
  if (scrollDisabledHandler) {
    // 移除事件监听
    window.removeEventListener('wheel', scrollDisabledHandler);
    window.removeEventListener('touchmove', scrollDisabledHandler);
    window.removeEventListener('scroll', scrollDisabledHandler);
    
    if (scrollDisabledHandler._keyHandler) {
      window.removeEventListener('keydown', scrollDisabledHandler._keyHandler);
    }
    
    // 恢复 body 和 html 的原始样式
    const body = document.body;
    const html = document.documentElement;
    
    if (scrollDisabledHandler._originalBodyOverflow !== undefined) {
      body.style.overflow = scrollDisabledHandler._originalBodyOverflow || '';
    }
    if (scrollDisabledHandler._originalBodyPosition !== undefined) {
      body.style.position = scrollDisabledHandler._originalBodyPosition || '';
    }
    if (scrollDisabledHandler._originalBodyTop !== undefined) {
      body.style.top = scrollDisabledHandler._originalBodyTop || '';
    }
    if (scrollDisabledHandler._originalBodyWidth !== undefined) {
      body.style.width = scrollDisabledHandler._originalBodyWidth || '';
    }
    if (scrollDisabledHandler._originalHtmlOverflow !== undefined) {
      html.style.overflow = scrollDisabledHandler._originalHtmlOverflow || '';
    }
    
    // 恢复滚动位置
    if (scrollDisabledHandler._scrollY !== undefined) {
      window.scrollTo(0, scrollDisabledHandler._scrollY);
    }
    
    scrollDisabledHandler = null;
  }
};

// 初始化 water-bg-video 的滚动固定
const initWaterVideoScroll = async () => {
  await nextTick();
  
  const waterBgVideo = document.querySelector('.water-bg-video');
  if (!waterBgVideo || !climateVideo1.value) return;
  
  // 如果已经创建过，先销毁
  if (waterVideoScrollTrigger) {
    waterVideoScrollTrigger.kill();
  }
  
  // 加载视频时长
  if (!climateVideo1Duration && climateVideo1.value.duration) {
    climateVideo1Duration = climateVideo1.value.duration;
  } else if (!climateVideo1Duration) {
    // 如果还没有加载完成，等待加载
    await new Promise((resolve) => {
      if (climateVideo1.value) {
        if (climateVideo1.value.readyState >= 2) {
          climateVideo1Duration = climateVideo1.value.duration;
          resolve(climateVideo1Duration);
        } else {
          climateVideo1.value.addEventListener('loadedmetadata', () => {
            climateVideo1Duration = climateVideo1.value.duration;
            resolve(climateVideo1Duration);
          }, { once: true });
        }
      } else {
        resolve(0);
      }
    });
  }
  
  // 计算滚动距离：视频时长 + climate-wrapper 显示时间（约0.5秒）
  const scrollDistance = climateVideo1Duration * 100 + 500; // 假设每1秒视频需要100px滚动距离
  
  // 重置状态
  climateVideo1Completed = false;
  if (climateVideo1.value) {
    // 确保视频重置到开头并暂停
    climateVideo1.value.currentTime = 0;
    climateVideo1.value.pause();
    // 等待一帧确保 currentTime 设置生效
    await new Promise(resolve => requestAnimationFrame(resolve));
    // 再次确保 currentTime 为 0（防止 autoplay 导致的问题）
    if (climateVideo1.value.currentTime > 0) {
      climateVideo1.value.currentTime = 0;
    }
  }
  
  // 创建 ScrollTrigger 来固定容器
  waterVideoScrollTrigger = ScrollTrigger.create({
    trigger: waterBgVideo,
    start: 'top top', // 当容器顶部到达视口顶部时开始
    end: `+=${scrollDistance}`, // 滚动距离
    pin: true, // 固定容器
    pinSpacing: true, // 保持间距
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onStart: () => {
      // 当视频从底部出现时就开始播放（在固定之前）
      if (climateVideo1.value && !climateVideo1Completed) {
        // 确保从开头开始播放
        if (climateVideo1.value.currentTime > 0) {
          climateVideo1.value.currentTime = 0;
        }
        // 等待 currentTime 设置生效后再播放
        requestAnimationFrame(() => {
          if (climateVideo1.value && !climateVideo1Completed) {
            climateVideo1.value.play().catch(err => {
              console.warn('Climate video 1 play failed:', err);
            });
          }
        });
      }
    },
    onEnter: () => {
      // 当进入固定区域时，禁用滚动
      enableScrollLock();
    },
    onUpdate: (self) => {
      // 如果视频未播放完成，完全禁止滚动
      if (!climateVideo1Completed && climateVideo1.value && climateVideo1Duration > 0) {
        // 如果视频暂停了，尝试播放
        if (self.progress > 0 && climateVideo1.value.paused) {
          // 确保从正确的位置开始播放（如果 currentTime 已经到达或超过 duration，重置到开头）
          if (climateVideo1.value.currentTime >= climateVideo1Duration - 0.1) {
            climateVideo1.value.currentTime = 0;
          }
          climateVideo1.value.play().catch(err => {
            console.warn('Climate video 1 play failed:', err);
          });
        }
        // 如果用户尝试滚动，立即阻止并恢复到固定位置
        if (self.progress > 0) {
          requestAnimationFrame(() => {
            window.scrollTo({
              top: self.start,
              behavior: 'auto'
            });
          });
        }
      } else if (climateVideo1Completed) {
        // 视频播放完成后，允许滚动
        disableScrollLock();
      }
    },
    onLeave: () => {
      // 离开固定区域时，暂停视频并恢复滚动
      disableScrollLock();
      if (climateVideo1.value) {
        climateVideo1.value.pause();
      }
    },
    onEnterBack: () => {
      // 向上滚动回到固定区域时，恢复播放并禁用滚动
      enableScrollLock();
      if (climateVideo1.value && !climateVideo1Completed) {
        // 如果视频已经播放完成或接近完成，重置到开头
        if (climateVideo1.value.currentTime >= climateVideo1Duration - 0.1) {
          climateVideo1.value.currentTime = 0;
        }
        climateVideo1.value.play().catch(err => {
          console.warn('Climate video 1 play failed:', err);
        });
      }
    }
  });
};

// 初始化 water-cloud-1 的滚动动画
const initWaterCloud1Animation = async () => {
  await nextTick();
  
  const waterCloud1 = document.querySelector('.water-cloud-1');
  if (!waterCloud1) return;
  
  // 如果已经创建过，先销毁
  if (waterCloud1ScrollTrigger) {
    waterCloud1ScrollTrigger.kill();
  }

  waterCloud1ScrollTrigger = gsap.to('.water-cloud-1', {
    y: pxToVh(-900),
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.water-cloud-1',
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: `top top-=${pxToVhPx(500)}`, // 当元素顶部到达视口顶部时结束
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });
};
// 初始化 water-cloud-2 的滚动动画
const initWaterCloud2Animation = async () => {
  await nextTick();

  const waterCloud2 = document.querySelector('.water-cloud-2');
  if (!waterCloud2) return;

  // 如果已经创建过，先销毁
  if (waterCloud2ScrollTrigger) {
    waterCloud2ScrollTrigger.kill();
  }

  waterCloud2ScrollTrigger = gsap.to('.water-cloud-2', {
    y: pxToVh(-600),
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.water-cloud-2',
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: `top top-=${pxToVhPx(500)}`, // 当元素顶部到达视口顶部时结束
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });
};
// 初始化 大雁 的滚动动画
const initGooseAnimation = async () => {
  await nextTick();

  const firstScreen = document.querySelector('.first-screen');
  if (!firstScreen) return;

  // 如果已经创建过，先销毁
  if (gooseInfoScrollTrigger) {
    gooseInfoScrollTrigger.kill();
  }

  // 竖向视差动画：当 first-screen 从底部到顶部时，goose-info 向上移动
  const verticalAnimation = gsap.to('.goose-info', {
    y: pxToVh(-800),
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.lives .first-screen',
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: 'top top', // 当元素顶部到达视口顶部时结束
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });

  // 横向视差动画：当 first-screen 横向移动时，goose-info 移动得更快
  // first-screen 移动 -960px，goose-info 移动 -1200px（更快）
  const horizontalAnimation = gsap.to('.goose-info', {
    x: pxToVw(-1200), // 比 first-screen 的 -960px 移动得更快
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.lives .first-screen',
      start: 'top top', // 当 first-screen 顶部到达视口顶部时开始
      end: `+=${pxToVwPx(960)}`, // 滚动 960px（与 first-screen 的横向移动距离一致）
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });

  // 保存两个动画的引用（如果需要单独销毁）
  gooseInfoScrollTrigger = {
    vertical: verticalAnimation,
    horizontal: horizontalAnimation,
    kill: () => {
      verticalAnimation.scrollTrigger?.kill();
      horizontalAnimation.scrollTrigger?.kill();
    }
  };
};

// 通用的详情介绍弹出方法
// elementRef: 详情介绍元素的 ref
// isShownRef: 是否已显示的 ref
// onClose: 关闭时的回调函数（可选）
const showDescription = (elementRef, isShownRef, onClose) => {
  if (!elementRef.value || isShownRef.value) return;
  
  isShownRef.value = true;
  
  // 禁用滚动
  enableScrollLock();
  
  // 启用 pointer-events，允许点击详情介绍
  if (elementRef.value) {
    elementRef.value.style.pointerEvents = 'auto';
  }
  
  // 设置初始状态：向下偏移并透明
  gsap.set(elementRef.value, { 
    opacity: 0, 
    y: pxToVh(30)
  });
  
  // 显示详情介绍，带有上浮动画效果
  gsap.to(elementRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: 'power2.out',
    onComplete: () => {
      // 添加关闭事件监听器
      setupDescriptionCloseHandler(elementRef, isShownRef, onClose);
    }
  });
};

// 通用的详情介绍关闭方法
const closeDescription = (elementRef, isShownRef, onClose) => {
  if (!elementRef.value || !isShownRef.value) return;
  
  isShownRef.value = false;
  
  // 隐藏详情介绍，带有下沉动画效果
  gsap.to(elementRef.value, {
    opacity: 0,
    y: pxToVh(30),
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      // 禁用 pointer-events
      if (elementRef.value) {
        elementRef.value.style.pointerEvents = 'none';
      }
      
      // 恢复滚动
      disableScrollLock();
      
      // 清理事件监听器
      if (currentDescriptionHandler) {
        document.removeEventListener('click', currentDescriptionHandler.click);
        window.removeEventListener('wheel', currentDescriptionHandler.scroll);
        window.removeEventListener('touchmove', currentDescriptionHandler.scroll);
        currentDescriptionHandler = null;
      }
      
      // 执行自定义回调
      if (onClose) {
        onClose();
      }
    }
  });
};

// 设置关闭详情介绍的事件处理器
const setupDescriptionCloseHandler = (elementRef, isShownRef, onClose) => {
  if (currentDescriptionHandler) return;
  
  // 点击页面关闭
  const clickHandler = (e) => {
    // 如果点击的是详情介绍本身，不关闭（防止点击内容时关闭）
    if (elementRef.value && elementRef.value.contains(e.target)) {
      return;
    }
    closeDescription(elementRef, isShownRef, onClose);
  };
  
  // 滚动页面关闭
  const scrollHandler = () => {
    closeDescription(elementRef, isShownRef, onClose);
  };
  
  // 添加事件监听器
  document.addEventListener('click', clickHandler, { once: true });
  window.addEventListener('wheel', scrollHandler, { once: true, passive: true });
  window.addEventListener('touchmove', scrollHandler, { once: true, passive: true });
  
  currentDescriptionHandler = {
    click: clickHandler,
    scroll: scrollHandler
  };
};

// 显示大雁详情介绍
const showGooseDescription = () => {
  showDescription(gooseDescription, gooseDescriptionShown);
};

// 关闭大雁详情介绍
const closeGooseDescription = () => {
  closeDescription(gooseDescription, gooseDescriptionShown);
};

// 显示雪豹详情介绍
const showPantheraDescription = () => {
  showDescription(pantheraDescription, pantheraDescriptionShown);
};

// 关闭雪豹详情介绍
const closePantheraDescription = () => {
  closeDescription(pantheraDescription, pantheraDescriptionShown);
};

// 显示藏羚详情介绍
const showChiruDescription = () => {
  showDescription(chiruDescription, chiruDescriptionShown);
};

// 关闭藏羚详情介绍
const closeChiruDescription = () => {
  closeDescription(chiruDescription, chiruDescriptionShown);
};

// 显示大熊猫详情介绍
const showPandaDescription = () => {
  showDescription(pandaDescription, pandaDescriptionShown);
};

// 关闭大熊猫详情介绍
const closePandaDescription = () => {
  closeDescription(pandaDescription, pandaDescriptionShown);
};

// welcomeVideo 滚动处理
const handleWelcomeVideoScroll = () => {
  // 如果已经触发过，不再处理
  if (welcomeVideoStarted.value || welcomeVideoCompleted.value) return;
  
  // 标记已开始
  welcomeVideoStarted.value = true;
  
  // 隐藏 welcome-video-roller
  if (welcomeVideoRoller.value) {
    gsap.to(welcomeVideoRoller.value, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        if (welcomeVideoRoller.value) {
          welcomeVideoRoller.value.style.display = 'none';
        }
      }
    });
  }
  
  // 开始播放 welcomeVideo
  if (welcomeVideo.value) {
    welcomeVideo.value.play().catch(err => {
      console.warn('Welcome video play failed:', err);
    });
    
    // 禁用滚动
    enableScrollLock();
  }
};

// welcomeVideo 播放完成
const onWelcomeVideoEnded = () => {
  welcomeVideoCompleted.value = true;
  
  // 让视频停留在最后一帧
  if (welcomeVideo.value) {
    welcomeVideo.value.pause();
    // 确保停留在最后一帧
    if (welcomeVideo.value.duration) {
      welcomeVideo.value.currentTime = welcomeVideo.value.duration;
    }
  }
  
  // 保持滚动锁定，直到 originVideo 播放完成
  // 不解除滚动禁用，继续保持在顶部
  
  // 移除滚动事件监听
  if (welcomeVideoScrollHandler) {
    window.removeEventListener('wheel', welcomeVideoScrollHandler, { passive: false });
    window.removeEventListener('touchmove', welcomeVideoScrollHandler, { passive: false });
    window.removeEventListener('scroll', welcomeVideoScrollHandler, { passive: false });
    welcomeVideoScrollHandler = null;
  }
  
  // 添加切换到 originVideo 的滚动监听
  initSwitchToOriginVideoScroll();
};

// 切换到 originVideo
const switchToOriginVideo = () => {
  // 如果已经切换过，不再处理
  if (welcomeVideoHidden.value) return;
  
  welcomeVideoHidden.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 隐藏 welcomeVideo
  if (welcomeVideo.value && welcomeVideo.value.parentElement) {
    gsap.to(welcomeVideo.value.parentElement, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (welcomeVideo.value && welcomeVideo.value.parentElement) {
          welcomeVideo.value.parentElement.style.display = 'none';
        }
      }
    });
  }
  
  // 显示 origin-video-wrapper
  if (originVideoWrapper.value) {
    originVideoWrapper.value.style.display = 'block';
    gsap.fromTo(originVideoWrapper.value, 
      { opacity: 0 },
      { 
        opacity: 1,
        duration: 0.5
      }
    );
  }
  
  // 播放 originVideo 的第一个视频
  if (originVideo.value && originInfos.value.length > 0) {
    // 设置当前索引为 0
    originCurrentIndex.value = 0;
    
    // 等待 Vue 更新 DOM 后加载和播放视频
    nextTick(() => {
      if (originVideo.value) {
        // 确保视频源已更新，然后加载
        originVideo.value.load();
        
        // 等待视频元数据加载完成后再播放
        const playVideo = () => {
          if (originVideo.value) {
            originVideo.value.play().catch(err => {
              console.warn('Origin video play failed:', err);
            });
            
            // 标记已开始播放
            originVideoStarted.value = true;
            
            // 禁用滚动
            enableScrollLock();
          }
        };
        
        // 如果视频已经加载了元数据，直接播放
        if (originVideo.value.readyState >= 2) {
          playVideo();
        } else {
          // 否则等待元数据加载完成
          originVideo.value.addEventListener('loadedmetadata', playVideo, { once: true });
        }
      }
    });
  }
  
  // 移除切换滚动事件监听
  if (switchToOriginVideoHandler) {
    window.removeEventListener('wheel', switchToOriginVideoHandler, { passive: false });
    window.removeEventListener('touchmove', switchToOriginVideoHandler, { passive: false });
    window.removeEventListener('scroll', switchToOriginVideoHandler, { passive: false });
    switchToOriginVideoHandler = null;
  }
};

// originVideo 播放完成
const onOriginVideoEnded = () => {
  originVideoCompleted.value = true;
  
  // 让视频停留在最后一帧
  if (originVideo.value) {
    originVideo.value.pause();
    // 确保停留在最后一帧
    if (originVideo.value.duration) {
      originVideo.value.currentTime = originVideo.value.duration;
    }
  }
  
  // 根据当前视频索引处理不同的逻辑
  if (originCurrentIndex.value === 0) {
    // 如果是第一个视频，添加滚动监听来显示 video-accessories
    // 保持滚动锁定，直到显示 video-accessories
    initShowVideoAccessoriesScroll();
  } else if (originCurrentIndex.value === 1) {
    // 如果是第二个视频，停留在最后一帧，确保 video-description 隐藏
    secondVideoCompleted.value = true;
    
    // 确保 video-description 隐藏
    if (videoDescription.value) {
      videoDescription.value.style.display = 'none';
      gsap.set(videoDescription.value, { opacity: 0 });
    }
    
    // 保持滚动锁定，防止后面的内容显示，并添加显示 video-description 的滚动监听
    // 注意：不解除滚动锁定，直到第三个 video-description 展示完成后才解除
    initShowVideoDescriptionAfterSecondVideoScroll();
  } else if (originCurrentIndex.value === 2) {
    // 如果是第三个视频，停留在最后一帧，确保 video-description 隐藏
    thirdVideoCompleted.value = true;
    
    // 确保 video-description 隐藏
    if (videoDescription.value) {
      videoDescription.value.style.display = 'none';
      gsap.set(videoDescription.value, { opacity: 0 });
    }
    
    // 保持滚动锁定，防止后面的内容显示，并添加显示 video-description 的滚动监听
    // 注意：不解除滚动锁定，直到第三个 video-description 展示完成后才解除
    initShowVideoDescriptionAfterThirdVideoScroll();
  } else {
    // 其他视频播放完成后，解除滚动禁用
    disableScrollLock();
  }
};

// 初始化切换到 originVideo 的滚动监听
const initSwitchToOriginVideoScroll = () => {
  // 如果已经切换过，不再初始化
  if (welcomeVideoHidden.value) return;
  
  // 创建滚动事件处理器
  switchToOriginVideoHandler = (e) => {
    // 如果已经切换过，不再处理
    if (welcomeVideoHidden.value) return;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 切换到 originVideo
    switchToOriginVideo();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', switchToOriginVideoHandler, { passive: false });
  window.addEventListener('touchmove', switchToOriginVideoHandler, { passive: false });
  window.addEventListener('scroll', switchToOriginVideoHandler, { passive: false });
};

// 显示 video-accessories
const showVideoAccessories = () => {
  // 如果已经显示过或正在处理，不再处理
  if (videoAccessoriesShown.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  videoAccessoriesShown.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除显示滚动事件监听
  if (showVideoAccessoriesHandler) {
    window.removeEventListener('wheel', showVideoAccessoriesHandler, { passive: false });
    window.removeEventListener('touchmove', showVideoAccessoriesHandler, { passive: false });
    window.removeEventListener('scroll', showVideoAccessoriesHandler, { passive: false });
    showVideoAccessoriesHandler = null;
  }
  
  // 显示 video-accessories
  if (videoAccessories.value) {
    // 启用 pointer-events
    videoAccessories.value.style.pointerEvents = 'auto';
    
    // 隐藏 video-description（初始状态）
    if (videoDescription.value) {
      videoDescription.value.style.display = 'block';
      gsap.set(videoDescription.value, { opacity: 0 });
    }
    
    // 显示 video-accessories，带有淡入动画
    gsap.to(videoAccessories.value, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        // 动画完成后添加下一个步骤的监听
        // 注意：保持滚动锁定，直到所有 originInfos 步骤完成
        isProcessingScroll.value = false;
        // 添加显示第一个 description 的滚动监听
        initShowFirstDescriptionScroll();
      }
    });
  } else {
    // 如果没有 video-accessories 元素，直接完成
    // 注意：保持滚动锁定，直到所有 originInfos 步骤完成
    isProcessingScroll.value = false;
    initShowFirstDescriptionScroll();
  }
};

// 初始化显示 video-accessories 的滚动监听
const initShowVideoAccessoriesScroll = () => {
  // 如果已经显示过，不再初始化
  if (videoAccessoriesShown.value) return;
  
  // 创建滚动事件处理器
  showVideoAccessoriesHandler = (e) => {
    // 如果已经显示过或正在处理，不再处理
    if (videoAccessoriesShown.value || isProcessingScroll.value) return;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 显示 video-accessories
    showVideoAccessories();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', showVideoAccessoriesHandler, { passive: false });
  window.addEventListener('touchmove', showVideoAccessoriesHandler, { passive: false });
  window.addEventListener('scroll', showVideoAccessoriesHandler, { passive: false });
};

// 显示第一个 description
const showFirstDescription = () => {
  // 如果已经显示过或正在处理，不再处理
  if (firstDescriptionShown.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  firstDescriptionShown.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除显示第一个 description 的滚动事件监听
  if (showFirstDescriptionHandler) {
    window.removeEventListener('wheel', showFirstDescriptionHandler, { passive: false });
    window.removeEventListener('touchmove', showFirstDescriptionHandler, { passive: false });
    window.removeEventListener('scroll', showFirstDescriptionHandler, { passive: false });
    showFirstDescriptionHandler = null;
  }
  
  // 显示第一个 description
  if (videoDescription.value && originInfos.value[0] && originInfos.value[0].description[0]) {
    // 确保显示第一个 description
    const descriptionElement = videoDescription.value.querySelector('p:last-child');
    if (descriptionElement) {
      descriptionElement.textContent = originInfos.value[0].description[0];
    }
    
    // 更新标题为第一个视频的标题
    const titleElement = videoDescription.value.querySelector('.video-title');
    if (titleElement && originInfos.value[0] && originInfos.value[0].title) {
      titleElement.textContent = originInfos.value[0].title;
    }
    
    // 显示 video-description，带有淡入动画
    gsap.to(videoDescription.value, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        // 动画完成后才添加下一个步骤的监听
        isProcessingScroll.value = false;
        initShowSecondDescriptionScroll();
      }
    });
  } else {
    // 如果没有数据，直接完成
    isProcessingScroll.value = false;
    initShowSecondDescriptionScroll();
  }
};

// 初始化显示第一个 description 的滚动监听
const initShowFirstDescriptionScroll = () => {
  // 如果已经显示过，不再初始化
  if (firstDescriptionShown.value) return;
  
  // 创建滚动事件处理器
  showFirstDescriptionHandler = (e) => {
    // 如果已经显示过或正在处理，不再处理
    if (firstDescriptionShown.value || isProcessingScroll.value) return;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 显示第一个 description
    showFirstDescription();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', showFirstDescriptionHandler, { passive: false });
  window.addEventListener('touchmove', showFirstDescriptionHandler, { passive: false });
  window.addEventListener('scroll', showFirstDescriptionHandler, { passive: false });
};

// 显示第二个 description
const showSecondDescription = () => {
  // 如果已经显示过或正在处理，不再处理
  if (secondDescriptionShown.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  secondDescriptionShown.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除显示第二个 description 的滚动事件监听
  if (showSecondDescriptionHandler) {
    window.removeEventListener('wheel', showSecondDescriptionHandler, { passive: false });
    window.removeEventListener('touchmove', showSecondDescriptionHandler, { passive: false });
    window.removeEventListener('scroll', showSecondDescriptionHandler, { passive: false });
    showSecondDescriptionHandler = null;
  }
  
  // 显示第二个 description
  if (videoDescription.value && originInfos.value[0] && originInfos.value[0].description[1]) {
    // 更新 description 内容为第二个
    const descriptionElement = videoDescription.value.querySelector('p:last-child');
    if (descriptionElement) {
      gsap.to(descriptionElement, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          descriptionElement.textContent = originInfos.value[0].description[1];
          gsap.to(descriptionElement, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
              // 动画完成后才添加下一个步骤的监听
              isProcessingScroll.value = false;
              initPlaySecondVideoScroll();
            }
          });
        }
      });
    } else {
      // 如果没有 description 元素，直接完成
      isProcessingScroll.value = false;
      initPlaySecondVideoScroll();
    }
  } else {
    // 如果没有数据，直接完成
    isProcessingScroll.value = false;
    initPlaySecondVideoScroll();
  }
};

// 初始化显示第二个 description 的滚动监听
const initShowSecondDescriptionScroll = () => {
  // 如果已经显示过，不再初始化
  if (secondDescriptionShown.value) return;
  
  // 创建滚动事件处理器
  showSecondDescriptionHandler = (e) => {
    // 如果已经显示过或正在处理，不再处理
    if (secondDescriptionShown.value || isProcessingScroll.value) return;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 显示第二个 description
    showSecondDescription();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', showSecondDescriptionHandler, { passive: false });
  window.addEventListener('touchmove', showSecondDescriptionHandler, { passive: false });
  window.addEventListener('scroll', showSecondDescriptionHandler, { passive: false });
};

// 播放第二个视频
const playSecondVideo = () => {
  // 如果已经播放过或正在处理，不再处理
  if (secondVideoStarted.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  secondVideoStarted.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除播放第二个视频的滚动事件监听
  if (playSecondVideoHandler) {
    window.removeEventListener('wheel', playSecondVideoHandler, { passive: false });
    window.removeEventListener('touchmove', playSecondVideoHandler, { passive: false });
    window.removeEventListener('scroll', playSecondVideoHandler, { passive: false });
    playSecondVideoHandler = null;
  }
  
  // 隐藏 video-description
  if (videoDescription.value) {
    gsap.to(videoDescription.value, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (videoDescription.value) {
          videoDescription.value.style.display = 'none';
        }
        // 动画完成后才切换到第二个视频
        switchToSecondVideo();
      }
    });
  } else {
    // 如果没有 video-description，直接切换到第二个视频
    switchToSecondVideo();
  }
};

// 切换到第二个视频并播放
const switchToSecondVideo = () => {
  // 切换到第二个视频
  if (originVideo.value && originInfos.value.length > 1) {
    // 设置当前索引为 1
    originCurrentIndex.value = 1;
    
    // 重置视频完成状态
    originVideoCompleted.value = false;
    
    // 等待 Vue 更新 DOM 后加载和播放视频
    nextTick(() => {
      if (originVideo.value) {
        // 确保视频源已更新，然后加载
        originVideo.value.load();
        
        // 等待视频元数据加载完成后再播放
        const playVideo = () => {
          if (originVideo.value) {
            originVideo.value.play().catch(err => {
              console.warn('Second origin video play failed:', err);
            });
            
            // 禁用滚动
            enableScrollLock();
            // 重置处理标志，允许视频播放
            isProcessingScroll.value = false;
          }
        };
        
        // 如果视频已经加载了元数据，直接播放
        if (originVideo.value.readyState >= 2) {
          playVideo();
        } else {
          // 否则等待元数据加载完成
          originVideo.value.addEventListener('loadedmetadata', playVideo, { once: true });
        }
      } else {
        isProcessingScroll.value = false;
      }
    });
  } else {
    isProcessingScroll.value = false;
  }
};

// 初始化播放第二个视频的滚动监听
const initPlaySecondVideoScroll = () => {
  // 如果已经播放过，不再初始化
  if (secondVideoStarted.value) return;
  
  // 创建滚动事件处理器
  playSecondVideoHandler = (e) => {
    // 如果已经播放过或正在处理，不再处理
    if (secondVideoStarted.value || isProcessingScroll.value) return;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 播放第二个视频
    playSecondVideo();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', playSecondVideoHandler, { passive: false });
  window.addEventListener('touchmove', playSecondVideoHandler, { passive: false });
  window.addEventListener('scroll', playSecondVideoHandler, { passive: false });
};

// 显示 video-description（第二个视频播放完成后）
const showVideoDescriptionAfterSecondVideo = () => {
  // 如果已经显示过或正在处理，不再处理
  if (videoDescriptionShownAfterSecondVideo.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  videoDescriptionShownAfterSecondVideo.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除显示 video-description 的滚动事件监听
  if (showVideoDescriptionAfterSecondVideoHandler) {
    window.removeEventListener('wheel', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
    window.removeEventListener('touchmove', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
    window.removeEventListener('scroll', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
    showVideoDescriptionAfterSecondVideoHandler = null;
  }
  
  // 显示 video-description
  if (videoDescription.value) {
    // 更新为第二个视频的 description
    const descriptionElement = videoDescription.value.querySelector('p:last-child');
    if (descriptionElement && originInfos.value[1] && originInfos.value[1].description[0]) {
      descriptionElement.textContent = originInfos.value[1].description[0];
    }
    
    // 更新标题为第二个视频的标题
    const titleElement = videoDescription.value.querySelector('.video-title');
    if (titleElement && originInfos.value[1] && originInfos.value[1].title) {
      titleElement.textContent = originInfos.value[1].title;
    }
    
    // 设置初始状态
    videoDescription.value.style.display = 'block';
    gsap.set(videoDescription.value, { opacity: 0 });
    
    // 显示 video-description，带有淡入动画
    gsap.to(videoDescription.value, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        // 动画完成后，使用 requestAnimationFrame 确保在下一帧才重置处理标志并添加下一个滚动监听
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            isProcessingScroll.value = false;
            initHideVideoDescriptionAndPlayThirdVideoScroll();
          });
        });
      }
    });
  } else {
    // 如果没有 video-description 元素，使用 requestAnimationFrame 确保在下一帧才重置标志并添加滚动监听
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isProcessingScroll.value = false;
        initHideVideoDescriptionAndPlayThirdVideoScroll();
      });
    });
  }
};

// 初始化显示 video-description 的滚动监听（第二个视频播放完成后）
const initShowVideoDescriptionAfterSecondVideoScroll = () => {
  // 如果已经显示过，不再初始化
  if (videoDescriptionShownAfterSecondVideo.value) return;
  
  // 创建滚动事件处理器
  showVideoDescriptionAfterSecondVideoHandler = (e) => {
    // 如果已经显示过或正在处理，不再处理
    if (videoDescriptionShownAfterSecondVideo.value || isProcessingScroll.value) return;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 显示 video-description
    showVideoDescriptionAfterSecondVideo();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
  window.addEventListener('touchmove', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
  window.addEventListener('scroll', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
};

// 隐藏 video-description 并播放第三个视频
const hideVideoDescriptionAndPlayThirdVideo = () => {
  // 如果已经播放过或正在处理，不再处理
  if (thirdVideoStarted.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  thirdVideoStarted.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除隐藏并播放第三个视频的滚动事件监听
  if (hideVideoDescriptionAndPlayThirdVideoHandler) {
    window.removeEventListener('wheel', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
    window.removeEventListener('touchmove', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
    window.removeEventListener('scroll', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
    hideVideoDescriptionAndPlayThirdVideoHandler = null;
  }
  
  // 隐藏 video-description
  if (videoDescription.value) {
    gsap.to(videoDescription.value, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (videoDescription.value) {
          videoDescription.value.style.display = 'none';
        }
        // 动画完成后切换到第三个视频
        switchToThirdVideo();
      }
    });
  } else {
    // 如果没有 video-description，直接切换到第三个视频
    switchToThirdVideo();
  }
};

// 切换到第三个视频并播放
const switchToThirdVideo = () => {
  // 切换到第三个视频
  if (originVideo.value && originInfos.value.length > 2) {
    // 设置当前索引为 2
    originCurrentIndex.value = 2;
    
    // 重置视频完成状态
    originVideoCompleted.value = false;
    
    // 等待 Vue 更新 DOM 后加载和播放视频
    nextTick(() => {
      if (originVideo.value) {
        // 确保视频源已更新，然后加载
        originVideo.value.load();
        
        // 等待视频元数据加载完成后再播放
        const playVideo = () => {
          if (originVideo.value) {
            originVideo.value.play().catch(err => {
              console.warn('Third origin video play failed:', err);
            });
            
            // 禁用滚动
            enableScrollLock();
            // 重置处理标志，允许视频播放
            isProcessingScroll.value = false;
          }
        };
        
        // 如果视频已经加载了元数据，直接播放
        if (originVideo.value.readyState >= 2) {
          playVideo();
        } else {
          // 否则等待元数据加载完成
          originVideo.value.addEventListener('loadedmetadata', playVideo, { once: true });
        }
      } else {
        isProcessingScroll.value = false;
      }
    });
  } else {
    isProcessingScroll.value = false;
  }
};

// 初始化隐藏 video-description 并播放第三个视频的滚动监听
const initHideVideoDescriptionAndPlayThirdVideoScroll = () => {
  // 如果已经播放过或正在处理，不再初始化
  if (thirdVideoStarted.value || isProcessingScroll.value) return;
  
  // 创建滚动事件处理器
  hideVideoDescriptionAndPlayThirdVideoHandler = (e) => {
    // 如果已经播放过或正在处理，不再处理
    if (thirdVideoStarted.value || isProcessingScroll.value) return;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 隐藏 video-description 并播放第三个视频
    hideVideoDescriptionAndPlayThirdVideo();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
  window.addEventListener('touchmove', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
  window.addEventListener('scroll', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
};

// 显示 video-description（第三个视频播放完成后）
const showVideoDescriptionAfterThirdVideo = () => {
  // 如果已经显示过或正在处理，不再处理
  if (videoDescriptionShownAfterThirdVideo.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  videoDescriptionShownAfterThirdVideo.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除显示 video-description 的滚动事件监听
  if (showVideoDescriptionAfterThirdVideoHandler) {
    window.removeEventListener('wheel', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
    window.removeEventListener('touchmove', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
    window.removeEventListener('scroll', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
    showVideoDescriptionAfterThirdVideoHandler = null;
  }
  
  // 显示 video-description
  if (videoDescription.value) {
    // 更新为第三个视频的 description
    const descriptionElement = videoDescription.value.querySelector('p:last-child');
    if (descriptionElement && originInfos.value[2] && originInfos.value[2].description[0]) {
      descriptionElement.textContent = originInfos.value[2].description[0];
    }
    
    // 更新标题为第三个视频的标题
    const titleElement = videoDescription.value.querySelector('.video-title');
    if (titleElement && originInfos.value[2] && originInfos.value[2].title) {
      titleElement.textContent = originInfos.value[2].title;
    }
    
    // 设置初始状态
    videoDescription.value.style.display = 'block';
    gsap.set(videoDescription.value, { opacity: 0 });
    
    // 显示 video-description，带有淡入动画
    gsap.to(videoDescription.value, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        // 动画完成后重置处理标志
        isProcessingScroll.value = false;
        
        // 解除 origin-video-wrapper 的固定
        if (originVideoWrapper.value) {
          originVideoWrapper.value.style.position = 'relative';
        }
        
        // 移除所有可能还在阻止滚动的滚动事件监听器
        if (showVideoAccessoriesHandler) {
          window.removeEventListener('wheel', showVideoAccessoriesHandler, { passive: false });
          window.removeEventListener('touchmove', showVideoAccessoriesHandler, { passive: false });
          window.removeEventListener('scroll', showVideoAccessoriesHandler, { passive: false });
          showVideoAccessoriesHandler = null;
        }
        if (showFirstDescriptionHandler) {
          window.removeEventListener('wheel', showFirstDescriptionHandler, { passive: false });
          window.removeEventListener('touchmove', showFirstDescriptionHandler, { passive: false });
          window.removeEventListener('scroll', showFirstDescriptionHandler, { passive: false });
          showFirstDescriptionHandler = null;
        }
        if (showSecondDescriptionHandler) {
          window.removeEventListener('wheel', showSecondDescriptionHandler, { passive: false });
          window.removeEventListener('touchmove', showSecondDescriptionHandler, { passive: false });
          window.removeEventListener('scroll', showSecondDescriptionHandler, { passive: false });
          showSecondDescriptionHandler = null;
        }
        if (playSecondVideoHandler) {
          window.removeEventListener('wheel', playSecondVideoHandler, { passive: false });
          window.removeEventListener('touchmove', playSecondVideoHandler, { passive: false });
          window.removeEventListener('scroll', playSecondVideoHandler, { passive: false });
          playSecondVideoHandler = null;
        }
        if (showVideoDescriptionAfterSecondVideoHandler) {
          window.removeEventListener('wheel', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
          window.removeEventListener('touchmove', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
          window.removeEventListener('scroll', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
          showVideoDescriptionAfterSecondVideoHandler = null;
        }
        if (hideVideoDescriptionAndPlayThirdVideoHandler) {
          window.removeEventListener('wheel', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
          window.removeEventListener('touchmove', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
          window.removeEventListener('scroll', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
          hideVideoDescriptionAndPlayThirdVideoHandler = null;
        }
        if (showVideoDescriptionAfterThirdVideoHandler) {
          window.removeEventListener('wheel', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
          window.removeEventListener('touchmove', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
          window.removeEventListener('scroll', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
          showVideoDescriptionAfterThirdVideoHandler = null;
        }
        
        // 解除滚动锁定，允许用户正常滚动页面
        disableScrollLock();
      }
    });
  } else {
    // 如果没有 video-description 元素，直接重置标志并解除固定
    isProcessingScroll.value = false;
    
    // 解除 origin-video-wrapper 的固定
    if (originVideoWrapper.value) {
      originVideoWrapper.value.style.position = 'relative';
    }
    
    // 移除所有可能还在阻止滚动的滚动事件监听器
    if (showVideoAccessoriesHandler) {
      window.removeEventListener('wheel', showVideoAccessoriesHandler, { passive: false });
      window.removeEventListener('touchmove', showVideoAccessoriesHandler, { passive: false });
      window.removeEventListener('scroll', showVideoAccessoriesHandler, { passive: false });
      showVideoAccessoriesHandler = null;
    }
    if (showFirstDescriptionHandler) {
      window.removeEventListener('wheel', showFirstDescriptionHandler, { passive: false });
      window.removeEventListener('touchmove', showFirstDescriptionHandler, { passive: false });
      window.removeEventListener('scroll', showFirstDescriptionHandler, { passive: false });
      showFirstDescriptionHandler = null;
    }
    if (showSecondDescriptionHandler) {
      window.removeEventListener('wheel', showSecondDescriptionHandler, { passive: false });
      window.removeEventListener('touchmove', showSecondDescriptionHandler, { passive: false });
      window.removeEventListener('scroll', showSecondDescriptionHandler, { passive: false });
      showSecondDescriptionHandler = null;
    }
    if (playSecondVideoHandler) {
      window.removeEventListener('wheel', playSecondVideoHandler, { passive: false });
      window.removeEventListener('touchmove', playSecondVideoHandler, { passive: false });
      window.removeEventListener('scroll', playSecondVideoHandler, { passive: false });
      playSecondVideoHandler = null;
    }
    if (showVideoDescriptionAfterSecondVideoHandler) {
      window.removeEventListener('wheel', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
      window.removeEventListener('touchmove', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
      window.removeEventListener('scroll', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
      showVideoDescriptionAfterSecondVideoHandler = null;
    }
    if (hideVideoDescriptionAndPlayThirdVideoHandler) {
      window.removeEventListener('wheel', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
      window.removeEventListener('touchmove', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
      window.removeEventListener('scroll', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
      hideVideoDescriptionAndPlayThirdVideoHandler = null;
    }
    if (showVideoDescriptionAfterThirdVideoHandler) {
      window.removeEventListener('wheel', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
      window.removeEventListener('touchmove', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
      window.removeEventListener('scroll', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
      showVideoDescriptionAfterThirdVideoHandler = null;
    }
    
    // 解除滚动锁定，允许用户正常滚动页面
    disableScrollLock();
  }
};

// 初始化显示 video-description 的滚动监听（第三个视频播放完成后）
const initShowVideoDescriptionAfterThirdVideoScroll = () => {
  // 如果已经显示过，不再初始化
  if (videoDescriptionShownAfterThirdVideo.value) return;
  
  // 创建滚动事件处理器
  showVideoDescriptionAfterThirdVideoHandler = (e) => {
    // 如果已经显示过或正在处理，不再处理
    if (videoDescriptionShownAfterThirdVideo.value || isProcessingScroll.value) return;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 显示 video-description
    showVideoDescriptionAfterThirdVideo();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
  window.addEventListener('touchmove', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
  window.addEventListener('scroll', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
};

// 初始化 welcomeVideo 滚动监听
const initWelcomeVideoScroll = () => {
  // 如果已经触发过或已完成，不再初始化
  if (welcomeVideoStarted.value || welcomeVideoCompleted.value) return;
  
  // 创建滚动事件处理器
  welcomeVideoScrollHandler = (e) => {
    // 如果已经触发过，不再处理
    if (welcomeVideoStarted.value || welcomeVideoCompleted.value) return;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 触发视频播放
    handleWelcomeVideoScroll();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', welcomeVideoScrollHandler, { passive: false });
  window.addEventListener('touchmove', welcomeVideoScrollHandler, { passive: false });
  window.addEventListener('scroll', welcomeVideoScrollHandler, { passive: false });
};

// 第一个视频播放完成
const climateVideoEnded = () => {
  climateVideo1Completed = true;
  
  // 让视频停留在最后一帧
  if (climateVideo1.value) {
    climateVideo1.value.pause();
    // 确保停留在最后一帧
    if (climateVideo1.value.duration) {
      climateVideo1.value.currentTime = climateVideo1.value.duration;
    }
  }
  
  // 恢复滚动
  disableScrollLock();
  // 显示 climate-wrapper
  gsap.to('.climate-wrapper', { 
    opacity: 1, 
    duration: 0.5,
    onComplete: () => {
      // climate-wrapper 显示完毕后，解除固定状态
      if (waterVideoScrollTrigger) {
        // 先禁用 ScrollTrigger，避免页面跳动
        waterVideoScrollTrigger.disable();
        // 等待一帧后刷新 ScrollTrigger，确保页面位置正确
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          // 然后销毁 ScrollTrigger
          waterVideoScrollTrigger.kill();
          waterVideoScrollTrigger = null;
        });
      }
    }
  });
}

// 生物部分视角位移
let viewDisplacementTrigger = null;
const viewDisplacement = async () => {
  await nextTick();

  const firstScreen = document.querySelector('.lives .first-screen');

  if (!firstScreen) return;

  // 如果已经创建过，先清理
  if (viewDisplacementTrigger) {
    viewDisplacementTrigger.kill();
  }

  // 当 first-screen 的顶部到达浏览器顶部时，再往下滑 960px，first-screen 就横向移动 960px
  viewDisplacementTrigger = ScrollTrigger.create({
    trigger: '.lives .first-screen',
    start: 'top top', // 当元素顶部到达视口顶部时开始
    end: `+=${pxToVwPx(960)}`, // 滚动 960px
    scrub: true, // 与滚动同步，平滑跟随
    pin: true, // 在横向滚动期间固定容器
    anticipatePin: 1,
    animation: gsap.to('.lives .first-screen', {
      x: pxToVw(-960), // 横向移动 960px
      ease: 'none' // 线性动画，与滚动完全同步
    }),
    invalidateOnRefresh: true,
  });
}

// 初始化 fragment 透明度动画
const initFragmentOpacityAnimation = async () => {
  await nextTick();
  const fragments = document.querySelectorAll('.six-screen .fragment');
  fragments.forEach((fragment) => {
    gsap.set(fragment, { opacity: 0 });
    
    gsap.to(fragment, {
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: fragment,
        start: 'center bottom',
        end: `center center+=${pxToVhPx(100)}`,
        scrub: true, // 与滚动同步
        invalidateOnRefresh: true
      }
    });
  });
};
// horizontal-02 横向滚动
let horizontal02ScrollTrigger = null;
const initHorizontal02Scroll = async () => {
  await nextTick();

  const horizontal02 = document.querySelector('.horizontal-02');

  if (!horizontal02) return;

  // 如果已经创建过，先清理
  if (horizontal02ScrollTrigger) {
    horizontal02ScrollTrigger.kill();
  }

  // 当 horizontal-02 的顶部到达浏览器顶部时，再往下滑 1920px，horizontal-02 就横向移动 1920px
  horizontal02ScrollTrigger = ScrollTrigger.create({
    trigger: '.horizontal-02',
    start: 'top top', // 当元素顶部到达视口顶部时开始
    end: `+=${pxToVwPx(1920)}`, // 滚动 1920px（横向移动 1920px）
    scrub: true, // 与滚动同步，平滑跟随
    pin: true, // 在横向滚动期间固定容器
    anticipatePin: 1,
    animation: gsap.to('.horizontal-02', {
      x: pxToVw(-1920), // 横向移动 1920px（从第一个屏幕移动到第二个屏幕）
      ease: 'none' // 线性动画，与滚动完全同步
    }),
    invalidateOnRefresh: true,
  });
}
onMounted(() => {
  // 确保页面初始滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 初始化 welcomeVideo 滚动监听
  initWelcomeVideoScroll();
  // initVideoScroll(); // 动效已移除
  // 视角位移
  viewDisplacement();
  // 初始化 water-bg-video 滚动固定
  initWaterVideoScroll();
  // 初始化 water-cloud-1 动画
  initWaterCloud1Animation();
  // 初始化 water-cloud-2 动画
  initWaterCloud2Animation();
  // 大雁动画
  initGooseAnimation();
  // 初始化 horizontal-02 横向滚动
  initHorizontal02Scroll();
  // fragment 透明度动画
  initFragmentOpacityAnimation();
});


onUnmounted(() => {
  // 恢复滚动锁定
  disableScrollLock();
  
  // 清理 welcomeVideo 滚动事件监听
  if (welcomeVideoScrollHandler) {
    window.removeEventListener('wheel', welcomeVideoScrollHandler);
    window.removeEventListener('touchmove', welcomeVideoScrollHandler);
    window.removeEventListener('scroll', welcomeVideoScrollHandler);
    welcomeVideoScrollHandler = null;
  }
  
  // 清理切换到 originVideo 的滚动事件监听
  if (switchToOriginVideoHandler) {
    window.removeEventListener('wheel', switchToOriginVideoHandler);
    window.removeEventListener('touchmove', switchToOriginVideoHandler);
    window.removeEventListener('scroll', switchToOriginVideoHandler);
    switchToOriginVideoHandler = null;
  }
  
  // 清理显示 video-accessories 的滚动事件监听
  if (showVideoAccessoriesHandler) {
    window.removeEventListener('wheel', showVideoAccessoriesHandler);
    window.removeEventListener('touchmove', showVideoAccessoriesHandler);
    window.removeEventListener('scroll', showVideoAccessoriesHandler);
    showVideoAccessoriesHandler = null;
  }
  
  // 清理显示第一个 description 的滚动事件监听
  if (showFirstDescriptionHandler) {
    window.removeEventListener('wheel', showFirstDescriptionHandler);
    window.removeEventListener('touchmove', showFirstDescriptionHandler);
    window.removeEventListener('scroll', showFirstDescriptionHandler);
    showFirstDescriptionHandler = null;
  }
  
  // 清理显示第二个 description 的滚动事件监听
  if (showSecondDescriptionHandler) {
    window.removeEventListener('wheel', showSecondDescriptionHandler);
    window.removeEventListener('touchmove', showSecondDescriptionHandler);
    window.removeEventListener('scroll', showSecondDescriptionHandler);
    showSecondDescriptionHandler = null;
  }
  
  // 清理播放第二个视频的滚动事件监听
  if (playSecondVideoHandler) {
    window.removeEventListener('wheel', playSecondVideoHandler);
    window.removeEventListener('touchmove', playSecondVideoHandler);
    window.removeEventListener('scroll', playSecondVideoHandler);
    playSecondVideoHandler = null;
  }
  
  // 清理显示 video-description 的滚动事件监听（第二个视频播放完成后）
  if (showVideoDescriptionAfterSecondVideoHandler) {
    window.removeEventListener('wheel', showVideoDescriptionAfterSecondVideoHandler);
    window.removeEventListener('touchmove', showVideoDescriptionAfterSecondVideoHandler);
    window.removeEventListener('scroll', showVideoDescriptionAfterSecondVideoHandler);
    showVideoDescriptionAfterSecondVideoHandler = null;
  }
  
  // 清理隐藏 video-description 并播放第三个视频的滚动事件监听
  if (hideVideoDescriptionAndPlayThirdVideoHandler) {
    window.removeEventListener('wheel', hideVideoDescriptionAndPlayThirdVideoHandler);
    window.removeEventListener('touchmove', hideVideoDescriptionAndPlayThirdVideoHandler);
    window.removeEventListener('scroll', hideVideoDescriptionAndPlayThirdVideoHandler);
    hideVideoDescriptionAndPlayThirdVideoHandler = null;
  }
  
  // 清理显示 video-description 的滚动事件监听（第三个视频播放完成后）
  if (showVideoDescriptionAfterThirdVideoHandler) {
    window.removeEventListener('wheel', showVideoDescriptionAfterThirdVideoHandler);
    window.removeEventListener('touchmove', showVideoDescriptionAfterThirdVideoHandler);
    window.removeEventListener('scroll', showVideoDescriptionAfterThirdVideoHandler);
    showVideoDescriptionAfterThirdVideoHandler = null;
  }
  
  if (scrollTrigger) {
    scrollTrigger.kill();
  }
  // originScrollTrigger 相关清理已移除（动效已移除）
  if (viewDisplacementTrigger) {
    viewDisplacementTrigger.kill();
  }
  if (waterVideoScrollTrigger) {
    waterVideoScrollTrigger.kill();
  }
  if (waterCloud2ScrollTrigger) {
    waterCloud2ScrollTrigger.kill();
  }
  if (gooseInfoScrollTrigger) {
    gooseInfoScrollTrigger.kill();
  }
  if (horizontal02ScrollTrigger) {
    horizontal02ScrollTrigger.kill();
  }
  // originContainer 相关的 ScrollTrigger 清理已移除（动效已移除）
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

.grology-origin {
  position: relative;
  width: 1920px;
  height: 1080px;
  opacity: 1;
  pointer-events: auto;
  z-index: 10;
}

.welcome-video-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  z-index: 100;
}

.welcome-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  display: block;
  /* 不使用 CSS transition，完全由 GSAP 控制 */
  z-index: 1;
}

.origin-video-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  display: none; /* 初始状态隐藏 */
  z-index: 99;
}

.origin-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  /* 不使用 CSS transition，完全由 GSAP 控制 */
  z-index: 2;
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

.explore-btn{
  width: 260px;
  height: 80px;
  font-size: 36px;
  color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 70px;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  background-color: rgba(80,163,223,0.5);
  &:hover{
    background-color: #4291c4;
  }
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
.video-accessories{
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
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
  background-size: 1920px 9276px;
  background-repeat: no-repeat;
  background-position: center -1080px;

  .water-cloud-1{
    width: 1920px;
    height: 1054px;
    background-image: url("@/assets/images/geology/geology-to-water-element-1.png");
    background-size: cover;
    margin-top: -300px;
    position: absolute;
    top: 0;
    z-index: 99;
  }
  .water-cloud-2-wrapper{
    width: 1920px;
    height: 1146px;
    background-color: #d9ddde;
    position: absolute;
    top: 1080px;
  }
  .water-cloud-2{
    width: 1920px;
    height: 1146px;
    background-image: url("@/assets/images/geology/geology-to-water-element-2.png");
    background-size: cover;

    //margin-top: -100px;
    //position: relative;
    z-index: 99;
  }
  .water-bg-video{
    position: relative;
    width: 1920px;
    height: 1080px;
    margin-top: -200px;
    will-change: transform;
    transform: translateZ(0);

    video{
      width: 1920px;
      height: 1080px;
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 0.3s ease;
      will-change: transform;
      transform: translateZ(0);
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .climate-wrapper{
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      top: 300px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      .climate-title{
        font-size: 80px;
        color: #4291c4;
      }
      .climate-description{
        font-size: 26px;
        color: #4291c4;
        line-height: 34px;
        margin-top: 52px;
        text-align: center;
      }
      .climate-btn{
        margin-left: 150px;
      }
    }
  }
  .water-description{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1080px;
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
    //width: 270px;
    //height: 80px;
    //display: flex;
    //justify-content: center;
    //align-items: center;
    //color: #fff;
    //font-size: 40px;
    //border-radius: 30px;
    //background-color: rgba(159,184,198, 0.5);
    cursor: pointer;
    margin-top: 150px;
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
    width: 500px;
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
    bottom: 0;
    //top: 306px;
    position: absolute;
    z-index: 2;
  }
  .bird{
    width: 637px;
    height: 372px;
    background-image: url("@/assets/images/geology/geology-to-water-element-6.png");
    background-size: cover;
    position: relative;
    left: 162px;
    top: 540px;
    z-index: 3;
  }
}
.lives{
  //width: 1920px;
  //height: 1080px;
  //overflow: hidden;
//overflow-x: hidden; /* 隐藏横向溢出，确保位移效果正常 */
  .first-screen{
    width: 2880px;
    height: 2160px;
    background-color: #fff;
    background-image: url("@/assets/images/lives/lives-bg.png");
    background-size: cover;
    position: relative;
    top: -1px;
    .first-screen-bg-1{
      width: 2880px;
      height: 2160px;
      background-image: url("@/assets/images/lives/lives-bty-bg.png");
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
    .first-screen-bg-2{
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
      .goose-info{
        position: relative;
        top: 800px;
      }
      .goose-img{
        width: 814px;
        height: 397px;
        background-image: url("@/assets/images/lives/lives-bty.png");
        background-size: cover;
      }
      .goose-tip{
        width: 350px;
        height: 33px;
        background-image: url("@/assets/images/lives/lives-prompt.png");
        background-size: cover;
        position: absolute;
        left: -356px;
        top: 300px;
      }
      .goose-name{
        font-size: 36px;
        color: #4b4b4b;
        white-space: nowrap;
      }
      .goose-english{
        margin-top: 20px;
      }
      .goose-description{
        padding: 30px;
        width: 590px;
        border-radius: 20px;
        background-color: rgba(112,168,203,0.8);
        position: absolute;
        top: -30px;
        left: 570px;
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
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
    width: 1920px;
    height: 1080px;
    position: relative;
    background-color: #fff;
    .second-screen-bg{
      width: 1920px;
      height: 2740px;
      background-image: url("@/assets/images/lives/lives-xm-bg.png");
      background-size: cover;
      left: 0px;
      top: 0px;
      position: absolute;
    }
    .cloud-img-1{
      width: 1611px;
      height: 753px;
      background-image: url("@/assets/images/lives/lives-transition-cloud-1.png");
      background-size: cover;
      left: -300px;
      top: -340px;
      position: absolute;
    }
    .cloud-img-2{
      width: 1792px;
      height: 959px;
      background-image: url("@/assets/images/lives/lives-transition-cloud-2.png");
      background-size: cover;
      right: -600px;
      top: -540px;
      position: absolute;
    }
    .mountain-img{
      width: 1920px;
      height: 736px;
      background-image: url("@/assets/images/lives/lives-xb-hill.png");
      background-size: cover;
      left: 0;
      bottom: 0;
      position: absolute;
    }
    .panthera{
      position: absolute;
      left: 680px;
      bottom: 240px;
      .panthera-img{
        width: 657px;
        height: 451px;
        background-image: url("@/assets/images/lives/lives-xb.png");
        background-size: cover;
      }
      .panthera-name{
        white-space: nowrap;
        font-size: 36px;
        color: #434343;
        position: absolute;
        top: 50px;
        left: 730px;
        width: 100px;
      }
      .panthera-english{
        margin-top: 20px;
        position: absolute;
        top: 100px;
        left: 730px;
      }

      .panthera-description{
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        padding: 30px;
        width: 590px;
        border-radius: 30px;
        background-color: rgba(214,230,244,0.7);
        position: absolute;
        top: -250px;
        left: -440px;
        .panthera-description-img{
          width: 530px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-xb-image.jpg");
          background-size: cover;
        }
        .panthera-description-text{
          font-size: 22px;
          color: #434343;
          line-height: 54px;
          width: 530px;
          margin-top: 40px;
        }
      }
    }
  }
  .third-screen{
    width: 1920px;
    height: 1080px;
    //background-color: #fff;
    background-image: url("@/assets/images/lives/lives-zl-bg.png");
    background-size: cover;
    position: relative;
    z-index: 2;
    .cloud-img-1{
      width: 2139px;
      height: 912px;
      background-image: url("@/assets/images/lives/lives-transition-cloud-3.png");
      background-size: cover;
      position: absolute;
      top: -500px;
      left: -500px;
    }
    .chiru{
      position: absolute;
      bottom: 150px;
      left: 586px;
      .chiru-img{
        width: 682px;
        height: 843px;
        background-image: url("@/assets/images/lives/lives-zl.png");
        background-size: cover;
      }
      .chiru-name{
        white-space: nowrap;
        font-size: 36px;
        color: #ffffff;
      }
      .chiru-chinese{
        position: absolute;
        top: 460px;
        left: -220px;
      }
      .chiru-english{
        margin-top: 20px;
        position: absolute;
        top: 520px;
        left: -220px;
      }
      .chiru-description{
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        padding: 30px;
        width: 590px;
        border-radius: 30px;
        background-color: rgba(207,213,165,0.6);
        position: absolute;
        top: 50px;
        left: 380px;
        .chiru-description-img{
          width: 530px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-zl-image.jpg");
          background-size: cover;
        }
        .chiru-description-text{
          font-size: 22px;
          color: #434343;
          line-height: 54px;
          width: 530px;
          margin-top: 40px;
        }
      }
    }

  }
  .four-screen{
    width: 1920px;
    height: 2160px;
    background-image: url("@/assets/images/lives/lives-xm-bg.png");
    background-size: cover;
    position: relative;
    .four-screen-bg{
      width: 2343px;
      height: 1974px;
      background-image: url("@/assets/images/lives/lives-xm-ground.png");
      background-size: cover;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .four-screen-tree{
      width: 1234px;
      height: 1854px;
      background-image: url("@/assets/images/lives/lives-xm-tree.png");
      background-size: cover;
      position: absolute;
      bottom: 280px;
      left: -420px;
    }
    .panda{
      position: absolute;
      bottom: 75px;
      left: 90px;
      .panda-img{
        width: 985px;
        height: 550px;
        background-image: url("@/assets/images/lives/lives-xm.png");
        background-size: cover;
      }
      .panda-grass{
        width: 1264px;
        height: 208px;
        background-image: url("@/assets/images/lives/lives-xm-grass.png");
        background-size: cover;
        position: absolute;
        bottom: 0;
        left: -50px;
      }
      .panda-name{
        white-space: nowrap;
        font-size: 36px;
        color: #ffffff;
      }
      .panda-chinese{
        position: absolute;
        top: -120px;
        left: 640px;
      }
      .panda-english{
        margin-top: 20px;
        position: absolute;
        top: -84px;
        left: 640px;
      }
      .panda-description{
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        padding: 30px;
        width: 570px;
        border-radius: 30px;
        background-color: rgba(156,173,139,0.6);
        position: absolute;
        top: -270px;
        right: -720px;
        .panda-description-img{
          width: 510px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-xm-image.jpg");
          background-size: cover;
        }
        .panda-description-text{
          font-size: 22px;
          color: #fff;
          line-height: 54px;
          width: 510px;
          margin-top: 40px;
        }
      }
    }

  }
}
.secret{
  width: 1920px;
  height: 9540px;
  background-image: url("@/assets/images/secret/resource-to-history-bg.jpg");
  background-size: cover;
  background-position: center -1080px;
  overflow: hidden;
  .screen{
    width: 1920px;
    height: 1080px;
    position: relative;
  }
  .first-screen{
    .circle{
      width: 1920px;
      height: 1080px;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      .circle-img-2{
        width: 1919px;
        height: 1559px;
        background-image: url("@/assets/images/secret/resource-to-history-element-2-2.png");
        background-size: cover;
        position: absolute;
        top: -840px;
        left: 50%;
        transform: translateX(-50%);
      }
      .circle-img-1{
        width: 1657px;
        height: 1040px;
        background-image: url("@/assets/images/secret/resource-to-history-element-2-1.png");
        background-size: cover;
        position: absolute;
        top: -410px;
        left: 50%;
        transform: translateX(-50%);
      }

    }

    .clouds{
      position: relative;
      top: 0;
      height: 1042px;
      z-index: 2;
      opacity: 0;
      .cloud-img-1{
        width: 1375px;
        height: 999px;
        background-image: url("@/assets/images/secret/resource-to-history-element-1-1.png");
        background-size: cover;
        position: absolute;
        right: 0px;
      }
      .cloud-img-2{
        width: 1570px;
        height: 1042px;
        background-image: url("@/assets/images/secret/resource-to-history-element-1-2.png");
        background-size: cover;
        position: absolute;
        left: 0px;
      }
    }
    .text-1{
      text-align: center;
      font-size: 26px;
      color: #7264a0;
      line-height: 40px;
      position: absolute;
      top: 752px;
      left: 50%;
      transform: translateX(-50%);
    }
    .text-2{
      text-align: center;
      font-size: 26px;
      color: #366294;
      line-height: 40px;
      position: absolute;
      top: 1050px;
      left: 50%;
      transform: translateX(-50%);
      span{
        font-size: 90px;
      }
      p{
        &:nth-child(1){
          margin-left: -60px;
        }
        &:nth-child(2){
          margin-top: 20px;
        }
      }
    }
    .dove-img{
      .dove-img-1{
        width: 187px;
        height: 141px;
        background-image: url("@/assets/images/secret/resource-to-history-element-2-3.png");
        background-size: cover;
        position: absolute;
        top: 460px;
        left: 504px;
      }
      .dove-img-2{
        width: 134px;
        height: 200px;
        background-image: url("@/assets/images/secret/resource-to-history-element-2-4.png");
        background-size: cover;
        position: absolute;
        top: 524px;
        left: 1268px;
      }
    }
  }
  .second-screen{
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .secret-title{
      color: #fff;
      font-size: 190px;
      line-height: 200px;
      margin-top: 240px;
    }
    .secret-description{
      font-size: 26px;
      color: #fff;
    }
    .secret-btn{
      width: 268px;
      height: 84px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 40px;
      background-color: rgba(84,120,147,0.5);
      border-radius: 30px;
      margin-top: 56px;
    }
  }
  .third-screen{
    .text-wrapper{
      position: absolute;
      top: 490px;
      left: 50%;
      transform: translateX(-50%);
    }
    p{
      font-size: 26px;
      line-height: 60px;
      color: #e9ead9;
      text-align: center;
      span{
        font-size: 90px;
      }
    }
  }
  .four-screen{
    .text-wrapper{
      position: absolute;
      margin-top: 130px;
      //top: 50%;
      left: 50%;
      transform: translateX(-50%);
    }
    p{
      font-size: 90px;
      line-height: 120px;
      color: #e9ead9;
      text-align: center;
    }
  }
  .five-screen{
    .light-img-1{
      width: 313px;
      height: 974px;
      background-image: url("@/assets/images/secret/resource-to-history-element-3-1.png");
      background-size: cover;
      position: absolute;
      top: -660px;
      left: 778px;
    }
    .light-img-2{
      width: 313px;
      height: 974px;
      background-image: url("@/assets/images/secret/resource-to-history-element-3-2.png");
      background-size: cover;
      position: absolute;
      top: -180px;
      left: 606px;
    }
    .light-img-3{
      width: 313px;
      height: 974px;
      background-image: url("@/assets/images/secret/resource-to-history-element-3-3.png");
      background-size: cover;
      position: absolute;
      top: 160px;
      left: 852px;
    }
  }
  .six-screen{
    height: 4320px;
    .fragment{
      width: 800px;
      height: 800px;
      background-image: url("@/assets/images/secret/resource-to-history-element-4-2.png");
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(1){
        position: absolute;
        top: 70px;
        left: 560px;
        .fragment-img{
          width: 107px;
          height: 113px;
          background-image: url("@/assets/images/secret/resource-to-history-element-4-1.png");
        }
      }
      &:nth-child(2){
        position: absolute;
        top: 680px;
        left: 80px;
        .fragment-img{
          width: 247px;
          height: 178px;
          background-image: url("@/assets/images/secret/resource-to-history-element-4-3.png");
        }
      }
      &:nth-child(3){
        position: absolute;
        top: 1488px;
        right: 80px;
        .fragment-img{
          width: 230px;
          height: 171px;
          background-image: url("@/assets/images/secret/resource-to-history-element-4-5.png");
        }
      }
      &:nth-child(4){
        position: absolute;
        top: 2290px;
        left: 50%;
        transform: translateX(-50%);
        .fragment-img{
          width: 243px;
          height: 244px;
          background-image: url("@/assets/images/secret/resource-to-history-element-4-7.png");
        }
      }
    }
  }
}

.horizontal-02{
  width: 3840px;
  height: 2160px;
  position: relative;
  .cloud-img-2-extended{
    width: 901px; /* 增加宽度，从 901px 增加到 1501px，让它更明显地延伸到第四屏 */
    height: 514px;
    background-image: url("@/assets/images/lives/lives-transition-cloud-4.png");
    background-size: cover;
    position: absolute;
    top: -200px;
    left: 1420px; /* 从 third-screen 的右侧（1920px - 500px = 1420px）开始，延伸到 four-screen */
    z-index: 4; /* 确保显示在 four-screen 上方，能够延伸到第四屏 */
  }
  .third-screen{
    position: absolute;
    top: 0;
    left: 0;
  }
  .four-screen{
    position: absolute;
    top: 0;
    left: 1920px;
    z-index: 3; /* 确保 four-screen 及其子元素在 third-screen 上方 */
  }
}
.welcome-video-wrapper {
  .welcome-video-roller {
    width: 100px;
    height: 160px;
    cursor: pointer;
    position: absolute;
    background-image: url("@/assets/images/menu/roll-icon.gif");
    background-size: cover;
    z-index: 9;
    left: 50%;
    transform: translateX(-50%);
    top: 880px;
  }
}
</style>