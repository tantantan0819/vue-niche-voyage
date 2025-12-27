<template>
  <div class="grology">
<!--    <div class="grology-origin" ref="originContainer">-->
<!--      <video-->
<!--          ref="welcomeVideo"-->
<!--          class="welcome-video"-->
<!--          :src="welcomeVideoSrc"-->
<!--          preload="auto"-->
<!--          muted-->
<!--          playsinline-->
<!--          :style="{ display: showWelcomeVideo ? 'block' : 'none' }"-->
<!--      ></video>-->
<!--      <video-->
<!--          ref="originVideo"-->
<!--          class="origin-video"-->
<!--          :src="originInfos[originCurrentIndex].videoUrl"-->
<!--          preload="auto"-->
<!--          :muted="!isSoundOn"-->
<!--          playsinline-->
<!--          :style="{ display: showWelcomeVideo ? 'none' : 'block' }"-->
<!--          @loadeddata="onOriginVideoLoaded"-->
<!--          @ended="onOriginVideoEnded"-->
<!--      ></video>-->
<!--      <div class="video-accessories" :style="{ opacity: showAccessories ? 1 : 0, pointerEvents: showAccessories ? 'auto' : 'none' }">-->
<!--        <div class="video-description">-->
<!--          <p class="video-title">{{ originInfos[originCurrentIndex].title }}</p>-->
<!--          <p :style="{width: originInfos[originCurrentIndex].width}">{{ currentDescription }}</p>-->
<!--        </div>-->
<!--        <div-->
<!--            class="video-sound"-->
<!--            :class="{ active: isSoundOn }"-->
<!--            @click="toggleSound"-->
<!--        ></div>-->
<!--        <div class="video-indicator">-->
<!--          <div-->
<!--              class="video-dot"-->
<!--              v-for="(item, index) in originInfos.length"-->
<!--              :key="index"-->
<!--              :class="{ active: originCurrentIndex === index }"-->
<!--              @click="switchVideo(index)"-->
<!--          ></div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="grology-water" style="margin-top: 500px">
      <div class="water-cloud-1"></div>
<!--      <div class="water-bg-video">-->
<!--        <video-->
<!--            ref="climateVideo1"-->
<!--            src="@/assets/images/geology/geology-to-water-climate-video.mp4"-->
<!--            preload="auto"-->
<!--            autoplay-->
<!--            muted-->
<!--            playsinline-->
<!--            @ended="climateVideoEnded"-->
<!--            @timeupdate="onClimateVideo1TimeUpdate"-->
<!--        ></video>-->
<!--        <div class="climate-wrapper">-->
<!--          <div class="climate-title">从雪山到雨林</div>-->
<!--          <div class="climate-description">-->
<!--            <p>准备好了吗？</p>-->
<!--            <p>我们先深入高原内部，感受阳光、雨雪和温度！</p>-->
<!--          </div>-->
<!--          <div class="climate-btn">深入探索</div>-->
<!--        </div>-->
<!--      </div>-->
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
        <div class="first-screen-bg-1"></div>
        <div class="first-screen-bg-2"></div>
        <div class="mountain-img"></div>
        <div class="cloud-img"></div>
        <div class="goose">
          <div class="goose-info" @click="showGooseDescription">
            <div class="goose-img"></div>
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
            <div class="panthera-name panthera-chinese">雪豹</div>
            <div class="panthera-name panthera-english">Panthera uncia</div>
          </div>
          <div class="panthera-description" ref="pantheraDescription" @click="closePantheraDescription">
            <div class="panthera-description-img"></div>
            <div class="panthera-description-text">主要分布于青藏高原和新疆、青海、四川等地，国家一级保护野生动物。全身呈灰白色且满布黑斑，尾巴粗长，超过体长的2／3，四肢短粗。喜欢栖居在海拔3000—6000米的高山空旷多岩地带。主要捕食野羊、岩羊，有时也猎取狍子、旱獭、黄鼠、野兔等动物。</div>
          </div>
        </div>
      </div>
      <div class="horizontal-02">
        <div class="third-screen">
          <div class="cloud-img-1"></div>
          <div class="cloud-img-2"></div>
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
              <div class="panda-name panda-chinese">大熊猫</div>
              <div class="panda-name panda-english">Ailuropoda melanoleuca</div>
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
        <div class="text-1">
          <p>这里的生态系统脆弱而独特。</p>
          <p>保护高原上的精灵，必要且紧迫。</p>
        </div>
        <div class="text-2">
          <p>青藏高原不仅是<span>万千生灵</span>的生生家园</p>
          <p>也储藏着巨量的宝藏。</p>
        </div>
      </div>
      <div class="second-screen screen">
          <div class="secret-title">
            <p>雪域</p>
            <p>秘藏</p>
          </div>
          <div class="secret-description">
            <p>高原资源多样而独具优势，是我国重要的清洁能源与战略资源库。</p>
          </div>
         <div class="secret-btn">深入探索</div>
      </div>
      <div class="third-screen screen">
        <div class="text-wrapper">
          <p>自20万年前，<span>人类足迹</span>初现于青藏高原，</p>
<!--          <p>关于生态保护与资源开发之间平衡的探索便已开启。</p>-->
          <p>独特的气候条件和生态环境的特殊性，没有阻挡人类文明的生根与延续。</p>
          <p>相反，正是在与自然的对话与调适中，</p>
          <p>高原文明展现出非凡的韧性，最终孕育出多元而璀璨的文明图景。</p>
        </div>
      </div>
      <div class="four-screen screen">
        <div class="text-wrapper">
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
import { onMounted, onUnmounted, ref, nextTick, computed } from "vue";
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
const originContainer = ref(null);
const originVideo = ref(null);
let scrollTrigger = null;
let originScrollTrigger = null;
let welcomeVideoDuration = 0;
let originVideoDurations = [0, 0, 0]; // 存储每个视频的时长
const videoProgressProxy = { progress: 0 };
const isSoundOn = ref(true);
const showWelcomeVideo = ref(true); // 控制显示 welcomeVideo 还是 originVideo
const showAccessories = ref(false); // 控制 video-accessories 的显示
const originCurrentIndex = ref(0); // 当前视频索引
const descriptionIndex = ref(0); // 当前 description 索引
const welcomeVideoCompleted = ref(false); // welcomeVideo 是否播放完成
const originVideoCompleted = ref([false, false, false]); // 每个 originVideo 是否播放完成
const descriptionSwitchCompleted = ref(false); // description 切换是否完成
const descriptionSwitchTime = ref(0); // description 切换完成的时间戳（用于1秒等待）

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

// 加载视频元数据
const loadVideoMetadata = (video) => {
    return new Promise((resolve) => {
      if (video.readyState >= 2) {
      resolve(video.duration);
      } else {
        video.addEventListener('loadedmetadata', () => {
        resolve(video.duration);
        }, { once: true });
      }
    });
  };

// 初始化视频滚动播放
const initVideoScroll = async () => {
  await nextTick();

  if (!welcomeVideo.value || !originContainer.value) return;

  // 加载 welcomeVideo 元数据
  welcomeVideoDuration = await loadVideoMetadata(welcomeVideo.value);
  if (!welcomeVideoDuration) {
    console.warn('Welcome video duration not available');
    return;
  }

  // 预加载所有 originVideo 的元数据
  for (let i = 0; i < originInfos.value.length; i++) {
    const video = document.createElement('video');
    video.src = originInfos.value[i].videoUrl;
    video.preload = 'metadata';
    originVideoDurations[i] = await loadVideoMetadata(video);
  }

  // 设置 welcomeVideo 初始状态（不自动播放，等待用户滚动）
  welcomeVideo.value.currentTime = 0;
  welcomeVideo.value.pause();
  
  // 监听 welcomeVideo 播放完成
  welcomeVideo.value.addEventListener('ended', () => {
    welcomeVideoCompleted.value = true;
    if (welcomeVideo.value) {
      welcomeVideo.value.currentTime = Math.max(0, welcomeVideoDuration - 0.1);
      welcomeVideo.value.pause();
    }
  });

  // 固定 originContainer
  originScrollTrigger = ScrollTrigger.create({
    trigger: originContainer.value,
    start: "top top",
    end: () => {
      // 计算总滚动距离
      let totalDistance = welcomeVideoDuration * window.innerHeight;
      // 为每个 originVideo 添加滚动距离
      originVideoDurations.forEach(duration => {
        totalDistance += duration * window.innerHeight;
      });
      // 为 description 切换添加滚动距离
      originInfos.value.forEach((info, index) => {
        if (info.description.length > 1) {
          totalDistance += window.innerHeight * (info.description.length - 1);
        }
      });
      // 为 video-accessories 显示/隐藏添加滚动距离
      // 每个视频播放完成后，需要100px滚动显示 accessories
      totalDistance += 100 * originInfos.value.length; // 每个视频的 accessories 显示
      // 第一个视频的 description 切换
      if (originInfos.value[0].description.length > 1) {
        totalDistance += window.innerHeight; // 第二个 description 的滚动距离
      }
      // 其他视频的 accessories 隐藏（准备下一个视频）
      if (originInfos.value.length > 1) {
        totalDistance += 100 * (originInfos.value.length - 1); // 隐藏 accessories 的滚动距离
      }
      return `+=${totalDistance}`;
    },
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      handleScrollUpdate(self);
    }
  });
};

// 处理滚动更新
const handleScrollUpdate = (self) => {
  const viewportHeight = window.innerHeight;
  // 使用 ScrollTrigger 的 progress 来计算当前位置
  const progress = self.progress;
  const start = self.start;
  const end = self.end;
  const currentScroll = start + progress * (end - start);
  
  // 阶段1: welcomeVideo 播放 (0 到 welcomeVideoDuration * viewportHeight)
  const welcomeVideoEnd = welcomeVideoDuration * viewportHeight;
  
  // 如果已经切换到 originVideo，允许向上滚动回到 welcomeVideo
  if (!showWelcomeVideo.value && currentScroll <= welcomeVideoEnd) {
    // 向上滚动回到 welcomeVideo
    showWelcomeVideo.value = true;
    showAccessories.value = false;
    descriptionIndex.value = 0;
    if (welcomeVideo.value) {
      // 根据滚动位置设置视频时间
      const welcomeProgress = Math.min(currentScroll / welcomeVideoEnd, 1);
      welcomeVideo.value.currentTime = welcomeProgress * welcomeVideoDuration;
      if (welcomeProgress < 1 && !welcomeVideoCompleted.value) {
        welcomeVideo.value.play().catch(err => {
          console.warn('Welcome video play failed:', err);
        });
      } else {
        welcomeVideo.value.pause();
      }
    }
    return;
  }
  
  if (currentScroll <= welcomeVideoEnd) {
    
    if (showWelcomeVideo.value) {
      if (welcomeVideo.value) {
        // 如果开始滚动（currentScroll > 0），确保视频在播放
        if (currentScroll > 0 && welcomeVideo.value.paused && !welcomeVideoCompleted.value) {
          welcomeVideo.value.play().catch(err => {
            console.warn('Welcome video play failed:', err);
          });
        }
        
        // 如果视频未播放完成，限制滚动不能超过视频播放进度
        // 但不影响视频的自动播放
        if (!welcomeVideoCompleted.value) {
          const videoProgress = welcomeVideo.value.currentTime / welcomeVideoDuration;
          const maxAllowedScroll = videoProgress * welcomeVideoEnd;
          
          // 如果用户尝试滚动超过视频播放进度，限制滚动位置
          if (currentScroll > maxAllowedScroll) {
            const targetScroll = start + maxAllowedScroll;
            // 使用 requestAnimationFrame 来避免滚动冲突
            requestAnimationFrame(() => {
              window.scrollTo({
                top: targetScroll,
                behavior: 'auto'
              });
            });
            return;
          }
          
          // 视频自动播放，不通过滚动控制播放进度
          // 只限制滚动不能超过播放进度
      } else {
          // 视频已播放完成，允许正常滚动，但不更新视频时间
          // 视频停留在最后一帧
        }
      }
    }
    return;
  }

  // 切换到 originVideo（第一次切换）
  if (showWelcomeVideo.value) {
    // 确保 welcomeVideo 已播放完成
    if (!welcomeVideoCompleted.value) {
      return;
    }
    
    // 执行视频切换
    const performVideoSwitch = () => {
      descriptionIndex.value = 0;
      originCurrentIndex.value = 0;
      showAccessories.value = false;
      
      // 直接切换，无过渡效果
      if (welcomeVideo.value && originVideo.value) {
        // 确保 originVideo 在第一帧
        originVideo.value.currentTime = 0;
        originVideoCompleted.value[0] = false;
        
        // 监听视频播放完成
        originVideo.value.removeEventListener('ended', onOriginVideoEnded);
        originVideo.value.addEventListener('ended', () => {
          originVideoCompleted.value[originCurrentIndex.value] = true;
          if (originVideo.value) {
            originVideo.value.currentTime = Math.max(0, (originVideoDurations[originCurrentIndex.value] || 0) - 0.1);
            originVideo.value.pause();
          }
        }, { once: true });
        
        // 直接切换显示状态
        showWelcomeVideo.value = false;
        
        // 开始播放 originVideo
        nextTick(() => {
          if (originVideo.value) {
            originVideo.value.play().catch(err => {
              console.warn('Origin video autoplay failed:', err);
            });
          }
        });
      } else {
        // 如果 GSAP 不可用，使用简单的切换
        showWelcomeVideo.value = false;
        nextTick(() => {
          if (originVideo.value) {
            originVideo.value.currentTime = 0;
            originVideoCompleted.value[0] = false;
            originVideo.value.addEventListener('ended', () => {
              originVideoCompleted.value[originCurrentIndex.value] = true;
              if (originVideo.value) {
                originVideo.value.currentTime = Math.max(0, (originVideoDurations[originCurrentIndex.value] || 0) - 0.1);
                originVideo.value.pause();
              }
            }, { once: true });
            originVideo.value.play().catch(err => {
              console.warn('Origin video autoplay failed:', err);
            });
          }
        });
      }
    };
    
    // 预加载 originVideo 的第一帧，确保切换时无缝衔接
    if (originVideo.value && originVideo.value.readyState < 2) {
      // 如果视频还没加载，先加载第一帧
      originVideo.value.currentTime = 0;
      originVideo.value.load();
      // 等待视频加载第一帧
      const waitForFirstFrame = () => {
        if (originVideo.value && originVideo.value.readyState >= 2) {
          // 视频已加载，开始切换
          performVideoSwitch();
        } else {
          requestAnimationFrame(waitForFirstFrame);
        }
      };
      waitForFirstFrame();
    } else {
      // 视频已加载，直接切换
      performVideoSwitch();
    }
  }

  let scrollOffset = welcomeVideoEnd;

  // 处理每个视频的流程
  for (let videoIndex = 0; videoIndex < originInfos.value.length; videoIndex++) {
    const videoDuration = originVideoDurations[videoIndex] || 0;
    const videoStart = scrollOffset;
    const videoEnd = scrollOffset + videoDuration * viewportHeight;
    // 视频播放完成后，需要滚动一小段距离才显示 accessories
    const showAccessoriesStart = videoEnd;
    const showAccessoriesEnd = showAccessoriesStart + 100; // 100px 滚动距离显示 accessories
    
    // 视频播放阶段
    if (currentScroll >= videoStart && currentScroll < videoEnd) {
      // 如果视频已经播放完成，不应该重新播放，应该跳过这个阶段
      // 对于所有视频，如果已完成就跳过播放阶段
      if (originVideoCompleted.value[videoIndex]) {
        // 视频已完成，跳过播放阶段，直接进入下一个阶段
        // 确保视频停留在最后一帧
        if (originVideo.value && originCurrentIndex.value === videoIndex) {
          originVideo.value.currentTime = Math.max(0, videoDuration - 0.1);
          originVideo.value.pause();
        }
        scrollOffset = videoEnd;
        continue;
      }
      
      if (originCurrentIndex.value !== videoIndex) {
        // 如果切换到新视频，需要确保前一个视频已播放完成（除了第一个视频）
        if (videoIndex > 0) {
          // 对于第二个视频，需要确保第一个视频的 description 切换完成且等待1秒
          if (videoIndex === 1) {
            if (!descriptionSwitchCompleted.value) {
              return;
            }
            const timeSinceSwitch = Date.now() - descriptionSwitchTime.value;
            if (timeSinceSwitch < 1000) {
              return;
            }
          } else if (!originVideoCompleted.value[videoIndex - 1]) {
            return;
          }
        }
        originCurrentIndex.value = videoIndex;
        descriptionIndex.value = 0;
        showAccessories.value = false;
        originVideoCompleted.value[videoIndex] = false;
        // 重置 description 切换状态（仅对第一个视频）
        if (videoIndex === 0) {
          descriptionSwitchCompleted.value = false;
          descriptionSwitchTime.value = 0;
        }
        nextTick(() => {
          if (originVideo.value) {
            originVideo.value.currentTime = 0;
            // 移除之前的监听器，添加新的
            originVideo.value.removeEventListener('ended', () => {});
            originVideo.value.addEventListener('ended', () => {
              originVideoCompleted.value[originCurrentIndex.value] = true;
              if (originVideo.value) {
                originVideo.value.currentTime = Math.max(0, videoDuration - 0.1);
                originVideo.value.pause();
              }
            }, { once: true });
            originVideo.value.play().catch(err => {
              console.warn('Origin video autoplay failed:', err);
            });
          }
        });
      }

      // 如果视频未播放完成，限制滚动不能超过视频播放进度
      if (!originVideoCompleted.value[videoIndex] && originVideo.value && originCurrentIndex.value === videoIndex) {
        const videoProgress = originVideo.value.currentTime / videoDuration;
        const maxAllowedScroll = videoStart + videoProgress * (videoEnd - videoStart);
        
        // 如果用户尝试滚动超过视频播放进度，限制滚动位置
        if (currentScroll > maxAllowedScroll) {
          const targetScroll = start + maxAllowedScroll;
          requestAnimationFrame(() => {
            window.scrollTo({
              top: targetScroll,
              behavior: 'auto'
            });
          });
          return;
        }
        
        // 视频自动播放，滚动跟随视频播放进度
        // 不通过滚动控制视频播放，只限制滚动不能超过播放进度
        if (originVideo.value.paused && originVideo.value.readyState >= 2) {
          originVideo.value.play().catch(err => {
            console.warn('Origin video play failed:', err);
          });
        }
      } else if (originVideo.value && originCurrentIndex.value === videoIndex) {
        // 视频已播放完成，停留在最后一帧，不允许通过滚动控制视频
        originVideo.value.currentTime = Math.max(0, videoDuration - 0.1);
        originVideo.value.pause();
      }
      return;
    }

    // 视频播放完毕，停留在最后一帧
    if (currentScroll >= videoEnd) {
      // 确保视频已播放完成才能进入这个阶段
      if (!originVideoCompleted.value[videoIndex]) {
        // 如果视频未完成，限制滚动不能超过视频结束位置
        const targetScroll = start + videoEnd;
        requestAnimationFrame(() => {
          window.scrollTo({
            top: targetScroll,
            behavior: 'auto'
          });
        });
        return;
      }
      
      // 确保当前视频索引正确
      if (originCurrentIndex.value !== videoIndex) {
        originCurrentIndex.value = videoIndex;
      }
      
      if (originVideo.value && originCurrentIndex.value === videoIndex) {
        originVideo.value.currentTime = Math.max(0, videoDuration - 0.1);
        originVideo.value.pause();
      }
      
      // 处理第一个视频的特殊逻辑
      if (videoIndex === 0) {
        // 阶段1: 视频播放完成后，用户下滑显示 video-accessories（第一个 description）
        if (currentScroll >= videoEnd && currentScroll < showAccessoriesEnd) {
          if (!showAccessories.value) {
            showAccessories.value = true;
            descriptionIndex.value = 0;
          }
          scrollOffset = showAccessoriesEnd;
          return;
        }
        
        // 阶段2: 继续滚动切换 description（如果有多个）
        if (originInfos.value[0].description.length > 1) {
          const secondDescStart = showAccessoriesEnd;
          const secondDescEnd = secondDescStart + viewportHeight;
          
          if (currentScroll >= secondDescStart && currentScroll < secondDescEnd) {
            // 切换到第二个 description
            if (descriptionIndex.value !== 1) {
              descriptionIndex.value = 1;
              // 记录切换完成时间
              if (!descriptionSwitchCompleted.value) {
                descriptionSwitchCompleted.value = true;
                descriptionSwitchTime.value = Date.now();
              }
            }
            scrollOffset = secondDescEnd;
            return;
          }
          
          // 阶段3: description 切换完成后，等待1秒，期间禁止滚动
          if (currentScroll >= secondDescEnd) {
            // 确保 description 切换已完成
            if (!descriptionSwitchCompleted.value) {
              descriptionSwitchCompleted.value = true;
              descriptionSwitchTime.value = Date.now();
            }
            
            const timeSinceSwitch = Date.now() - descriptionSwitchTime.value;
            if (timeSinceSwitch < 1000) {
              // 1秒内禁止滚动
              const targetScroll = start + secondDescEnd;
              requestAnimationFrame(() => {
                window.scrollTo({
                  top: targetScroll,
                  behavior: 'auto'
                });
              });
              return;
            }
            
            // 1秒后，允许滚动到下一个视频（隐藏 accessories 并播放第二个视频）
            const hideAccessoriesStart = secondDescEnd;
            const hideAccessoriesEnd = hideAccessoriesStart + 100; // 100px 滚动距离
            
            if (currentScroll >= hideAccessoriesStart && currentScroll < hideAccessoriesEnd) {
              if (showAccessories.value) {
                showAccessories.value = false;
              }
              scrollOffset = hideAccessoriesEnd;
              continue;
            }
            scrollOffset = hideAccessoriesEnd;
          } else {
            scrollOffset = secondDescEnd;
          }
        } else {
          // 如果只有一个 description，在 showAccessoriesEnd 位置等待1秒
          if (currentScroll >= showAccessoriesEnd) {
            if (!descriptionSwitchCompleted.value) {
              descriptionSwitchCompleted.value = true;
              descriptionSwitchTime.value = Date.now();
            }
            const timeSinceSwitch = Date.now() - descriptionSwitchTime.value;
            if (timeSinceSwitch < 1000) {
              const targetScroll = start + showAccessoriesEnd;
              requestAnimationFrame(() => {
                window.scrollTo({
                  top: targetScroll,
                  behavior: 'auto'
                });
              });
              return;
            }
            
            // 1秒后，允许滚动到下一个视频（隐藏 accessories 并播放第二个视频）
            const hideAccessoriesStart = showAccessoriesEnd;
            const hideAccessoriesEnd = hideAccessoriesStart + 100; // 100px 滚动距离
            
            if (currentScroll >= hideAccessoriesStart && currentScroll < hideAccessoriesEnd) {
              if (showAccessories.value) {
                showAccessories.value = false;
              }
              scrollOffset = hideAccessoriesEnd;
              continue;
            }
            scrollOffset = hideAccessoriesEnd;
          } else {
            scrollOffset = showAccessoriesEnd;
          }
        }
      } else {
        // 其他视频（第二个、第三个等）的逻辑
        // 阶段1: 视频播放完成后，用户下滑显示 video-accessories
        if (currentScroll >= videoEnd && currentScroll < showAccessoriesEnd) {
          // 确保当前视频索引正确
          if (originCurrentIndex.value !== videoIndex) {
            originCurrentIndex.value = videoIndex;
          }
          
          if (originVideo.value && originCurrentIndex.value === videoIndex) {
            originVideo.value.currentTime = Math.max(0, videoDuration - 0.1);
            originVideo.value.pause();
          }
          
          if (!showAccessories.value) {
            showAccessories.value = true;
            descriptionIndex.value = 0;
          }
          scrollOffset = showAccessoriesEnd;
          return;
        }
        
        // 阶段2: 继续滚动，隐藏 accessories 并准备下一个视频
        if (videoIndex < originInfos.value.length - 1) {
          const hideAccessoriesStart = showAccessoriesEnd;
          const hideAccessoriesEnd = hideAccessoriesStart + 100; // 100px 滚动距离
          
          if (currentScroll >= hideAccessoriesStart && currentScroll < hideAccessoriesEnd) {
            if (showAccessories.value) {
              showAccessories.value = false;
            }
            scrollOffset = hideAccessoriesEnd;
            continue;
          }
          scrollOffset = hideAccessoriesEnd;
        } else {
          // 最后一个视频，只显示 accessories
          scrollOffset = showAccessoriesEnd;
        }
      }
      
      continue;
    }
    
    // 如果滚动位置超过了当前视频的所有阶段，更新 scrollOffset 继续处理下一个视频
    if (currentScroll >= scrollOffset) {
      continue;
    }
  }
};


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

// 计算当前显示的 description
const currentDescription = computed(() => {
  const descriptions = originInfos.value[originCurrentIndex.value]?.description || [];
  return descriptions[descriptionIndex.value] || descriptions[0] || '';
})

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
  if (originVideo.value) {
    const video = originVideo.value;
    // 将视频暂停在最后一帧，避免黑屏
    setTimeout(() => {
      if (video && video.duration && isFinite(video.duration)) {
        video.currentTime = Math.max(0, video.duration - 0.1);
        video.pause();
      }
    }, 0);
  }
}

// 监听第一个视频的时间更新
const onClimateVideo1TimeUpdate = () => {
  if (!climateVideo1.value) return;
  
  // 获取视频时长（如果还没有获取）
  if (!climateVideo1Duration && climateVideo1.value.duration) {
    climateVideo1Duration = climateVideo1.value.duration;
  }
};

// 启用滚动锁定
const enableScrollLock = () => {
  if (scrollDisabled) return;
  scrollDisabled = true;
  
  // 阻止滚动事件
  scrollDisabledHandler = (e) => {
    // 阻止所有滚动行为
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  
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
    window.removeEventListener('wheel', scrollDisabledHandler);
    window.removeEventListener('touchmove', scrollDisabledHandler);
    window.removeEventListener('scroll', scrollDisabledHandler);
    
    if (scrollDisabledHandler._keyHandler) {
      window.removeEventListener('keydown', scrollDisabledHandler._keyHandler);
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
    climateVideo1.value.currentTime = 0;
    climateVideo1.value.pause();
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
        climateVideo1.value.currentTime = 0;
        climateVideo1.value.play().catch(err => {
          console.warn('Climate video 1 play failed:', err);
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
    y: -900,
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.water-cloud-1',
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: 'top top-=500', // 当元素顶部到达视口顶部时结束
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
    y: -600,
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.water-cloud-2',
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: 'top top-=500', // 当元素顶部到达视口顶部时结束
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
    y: -800,
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
    x: -1200, // 比 first-screen 的 -960px 移动得更快
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.lives .first-screen',
      start: 'top top', // 当 first-screen 顶部到达视口顶部时开始
      end: '+=960', // 滚动 960px（与 first-screen 的横向移动距离一致）
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
    y: 30 
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
    y: 30,
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

// 第一个视频播放完成
const climateVideoEnded = () => {
  climateVideo1Completed = true;
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
    end: '+=960', // 滚动 960px
    scrub: true, // 与滚动同步，平滑跟随
    pin: true, // 在横向滚动期间固定容器
    anticipatePin: 1,
    animation: gsap.to('.lives .first-screen', {
      x: -960, // 横向移动 960px
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
        end: 'center center+=100',
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
    end: '+=1920', // 滚动 1920px（横向移动 1920px）
    scrub: true, // 与滚动同步，平滑跟随
    pin: true, // 在横向滚动期间固定容器
    anticipatePin: 1,
    animation: gsap.to('.horizontal-02', {
      x: -1920, // 横向移动 1920px（从第一个屏幕移动到第二个屏幕）
      ease: 'none' // 线性动画，与滚动完全同步
    }),
    invalidateOnRefresh: true,
  });
}
onMounted(() => {
  initVideoScroll();
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
  
  if (scrollTrigger) {
    scrollTrigger.kill();
  }
  if (originScrollTrigger) {
    originScrollTrigger.kill();
  }
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
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars?.trigger === originContainer.value) {
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

.grology-origin {
  position: relative;
  width: 1920px;
  height: 1080px;
  opacity: 1;
  pointer-events: auto;
  z-index: 10;
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
.video-accessories{
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
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
        width: 270px;
        height: 80px;
        background-color: rgba(66,145,196,0.5);
        font-size: 40px;
        color: #fff;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        margin-top: 70px;
        text-align: center;
        line-height: 80px;
        margin-left: 150px;
        cursor: pointer;
        transition: all ease-in-out 0.3s;
        &:hover{
          background-color: rgba(66,145,196,0.7);
        }
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
    width: 270px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 40px;
    border-radius: 30px;
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
    .cloud-img-2{
      width: 901px;
      height: 514px;
      background-image: url("@/assets/images/lives/lives-transition-cloud-4.png");
      background-size: cover;
      position: absolute;
      top: -200px;
      right: -500px;
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
        top: 60px;
        left: 570px;
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
</style>