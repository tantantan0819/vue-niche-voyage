<template>
  <div class="horizontal-snap-page">
    <section ref="snapSection" class="snap-section">
      <div ref="snapTrack" class="snap-track">
        <div class="snap-panel panel-01">
          <div ref="panelOverlayBefore" class="panel-overlay-before">
            <p class="panel-index-before">从光能等可再生能源，到盐湖锂矿</p>
            <p class="panel-index-before">
              再到广布的冻土，让我们一览世界屋脊上的宝藏！
            </p>
          </div>
          <video
            ref="panelVideo"
            class="panel-video"
            :src="panelVideoSrc"
            preload="auto"
            muted
            playsinline
          ></video>
          <div ref="panelOverlay" class="panel-overlay">
            <div class="light-energy-warpper">
              <div class="light-energy-introduction">
                <div class="light-energy-title scroll-item">
                  <p>光能</p>
                  <p>
                    高原日照强烈、晴天多、空气稀薄。除东部、南部少数地区年日照时数较少外，多数地区可达2500–3400小时，比同纬度的东部地区几乎多了一半。
                  </p>
                </div>
                <div class="light-energy-windmill scroll-item">
                  <img
                    src="@/assets/images/resource/resource-element-solar-panel.png"
                    alt="solar panel"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref="panelTwo" class="snap-panel panel-02">
          <div class="light-energy-station scroll-item" id="scroll1"></div>
          <div class="light-energy-radiation">
            <div class="light-energy-radiation-wrapper">
              <p class="scroll-item" id="scroll2">
                这里太阳辐射强度极强，并且季节分配比较均匀。因此，高原光伏发电潜力巨大，可大规模开发可再生能源。
              </p>
              <img
                class="scroll-item"
                src="@/assets/images/resource/media/resource-picture-2.jpg"
                alt=""
                id="scroll3"
              />
            </div>
          </div>
        </div>
        <div class="snap-panel panel-03">
          <!-- 水能 -->
          <div class="water-energy-warpper">
            <div class="water-energy-station scroll-item" id="scroll4">
              <div class="river"></div>
              <div class="mountain"></div>
              <div class="dam"></div>
            </div>
          </div>
        </div>
        <div class="snap-panel panel-04">
          <div class="water-energy-introduction">
            <p>水能</p>
            <p id="scroll5">
              青藏高原被誉为“亚洲水塔”，孕育了黄河、长江、雅鲁藏布江、澜沧江、怒江等大河。特别是高原东部和南部，地势起伏大、落差集中，使其具备得天独厚的水能条件。
            </p>
          </div>
          <div class="water-energy-introduction-img1" id="scroll6"></div>
        </div>
        <div class="snap-panel panel-05">
          <div class="water-energy-introduction-1">
            <p id="scroll7">
              当前，高原水电资源储量有巨大潜力，已成为国家清洁能源供给的重要支点，这对优化能源结构、保障电力稳定输送具有战略意义。
            </p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="snap-panel panel-06">
          <div class="salt-energy-video">
            <video
              class="video"
              preload="auto"
              autoplay
              loop
              muted
              playsinline
              id="scroll8"
            >
              <source
                src="@/assets/images/resource/media/resource-video-1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div class="snap-panel panel-07">
          <!-- 盐矿 -->
          <div class="salt-energy-wrapper">
            <div class="salt-energy-mine">
              <div class="salt-energy-introduction">
                <p>高原上存在众多盐湖，尤其是在柴达木盆地。</p>
                <div style="padding-left: 20px; border-left: dotted 1px #fff">
                  <img
                    class="scroll-item"
                    src="@/assets/images/resource/media/resource-picture-4.jpg"
                    alt=""
                    id="scroll9"
                  />
                </div>
              </div>
            </div>
            <div class="salt-energy-introduction-1">
              <p id="scroll10">
                这里的盐湖锂盐资源十分丰富，储量占我国锂资源总储量的80%以上，占世界盐湖锂总储量的1/3，是全球重要的新能源金属（锂）资源地，为锂电产业提供战略保障。
              </p>
            </div>
            <div class="salt-energy-introduction-2" id="scroll11"></div>
          </div>
        </div>
        <div class="snap-panel panel-08" id="scroll12">
          <!-- 冻土 -->
          <div class="tjaele-enery-wrapper">
            <div class="tjaele-enery-interduction-img1"></div>
            <div class="tjaele-enery-interduction-img2"></div>
            <div class="tjaele-enery-interduction-img3"></div>
            <div class="tjaele-interduction-title">
              <p>冻土</p>
              <p>
                冻土是指地表下长期温度持续在0℃以下，并含有一定量冰的土壤或岩石。青藏高原广泛分布高寒永久冻土和季节性冻土，是全球中低纬度最大的多年冻土分布区。
              </p>
            </div>
            <div class="tjaele-interduction-explanation">
              冻土中储藏丰富的地下水与有机碳资源，同时对基础设施建设和生态系统稳定也具有重要影响。
            </div>
          </div>
        </div>
        <!-- 铜矿 -->
        <div class="copper-mine-warpper">
          <div class="copper-mine-interduction-1">
            <p>铜矿</p>
            <p>
              高原之上，金属矿产丰富，主要有铜矿、铬铁矿、铅锌矿等，其中铜矿储量最大，占全国的三分之二以上。
            </p>
          </div>
          <div class="copper-mine-interduction-2">
            <p id="scroll13">
              这些矿产资源主要分布在班公湖—怒江成矿带、冈底斯成矿带和三江成矿带。铜矿开发对高原经济发展和国家战略意义重大。
            </p>
          </div>
          <div class="copper-mine-interduction-img" id="scroll14"></div>
          <div class="copper-mine-interduction-img-1" id="scroll15"></div>
        </div>
        <!-- 地热 -->
        <div class="geothermy-enery-wrapper">
          <video
            src="@/assets/videos/resource-animation-alpha-smoke-1.webm"
            autoplay
            loop
            muted
            id="scroll16"
          ></video>
          <p>地热</p>
          <p>
            地热是一种来自于地球内部的可再生能源。强烈的地壳构造活动让这里地热资源丰富，尤其是高温地热资源，主要集中在青藏高原南部。在雅鲁藏布江流域及羊八井——那曲裂谷等地分布着数十处90℃以上的沸泉、喷泉，200余处热泉、温泉。
          </p>
        </div>
        <div class="geothermy-enery-video">
          <video
            class="video-bg"
            src="@/assets/images/resource/media/resource-video-2.mp4"
            autoplay
            loop
            muted
            playsinline
            id="scroll17"
          ></video>
        </div>
        <div class="geothermy-enery-interduction">
          <video
            src="@/assets/videos/resource-animation-alpha-smoke-2.webm"
            autoplay
            loop
            muted
          ></video>
          <div class="geothermy-enery-line">
            <!-- 喷泉 -->
            <div class="fountain" id="scroll18"></div>
            <!-- 热田 -->
            <div class="atsuta"></div>
            <div class="atsuta-interduction" id="scroll19">
              地热资源可用于发电、供暖及旅游开发，是一种洁净且蕴藏量巨大的能源，在国家能源建设方面有巨大价值。
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const snapSection = ref(null);
const snapTrack = ref(null);
const panelTwo = ref(null);
const panelVideo = ref(null);
const panelOverlayBefore = ref(null);
const panelOverlay = ref(null);
const panelVideoSrc = new URL(
  "@/assets/videos/resource-animation-baking.mp4",
  import.meta.url
).href;
const panelTwoImageSrc = new URL(
  "@/assets/images/resource/resource-element-station.png",
  import.meta.url
).href;
const VIDEO_SCRUB_AMPLIFIER = 0.4; // >1 extends scroll distance for the intro video

let scrollAnimation = null;
let panelVideoHandler = null;
let panelVideoReady = false;
let panelVideoDuration = 0;
const videoProgressProxy = { progress: 0 };
let overlayEnterOffset = 0;
let panelTwoActivationTrigger = null;
let scrollElementPositions = []; // 存储每个 scroll 元素对应的 timeline 进度值
let scroll4Animation = null; // scroll4 子元素的动画时间线
let scroll4Triggered = false; // 是否已经触发 scroll4 动画
let scroll12Animation = null; // scroll12 子元素的动画时间线
let scroll12Triggered = false; // 是否已经触发 scroll12 动画
const PARALLAX_TARGET_IDS = [
  "scroll1",
  "scroll3",
  "scroll6",
  "scroll9",
  "scroll11",
  "scroll14",
  "scroll15",
];
const PARALLAX_THRESHOLD = 0.003;
const parallaxStates = new Map(); // 记录各元素的视差激活状态

const resetParallaxTargets = () => {
  PARALLAX_TARGET_IDS.forEach((id) => {
    parallaxStates.set(id, false);
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove("is-parallax-active");
    }
  });
};

const updateParallaxTargets = (progress) => {
  if (scrollElementPositions.length === 0) return;
  PARALLAX_TARGET_IDS.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const position = scrollElementPositions.find((pos) => pos.id === id);
    if (!position) return;
    const shouldActivate =
      Math.abs(progress - position.progress) <= PARALLAX_THRESHOLD;
    if (shouldActivate === (parallaxStates.get(id) || false)) return;
    parallaxStates.set(id, shouldActivate);
    el.classList.toggle("is-parallax-active", shouldActivate);
  });
};

const refreshPanelTwoActivation = () => {
  panelTwoActivationTrigger?.kill();
  panelTwoActivationTrigger = null;
  const panelTwoEl = panelTwo.value;
  if (!panelTwoEl || !scrollAnimation) return;
  panelTwoEl.classList.remove("is-active");
  panelTwoActivationTrigger = ScrollTrigger.create({
    trigger: panelTwoEl,
    containerAnimation: scrollAnimation,
    start: "left left",
    end: "right left",
    onToggle: (self) => {
      if (!panelTwo.value) return;
      if (self.isActive) {
        panelTwo.value.classList.add("is-active");
      } else {
        panelTwo.value.classList.remove("is-active");
      }
    },
  });
};

const computeOverlayOffset = () => {
  const sectionWidth =
    (snapSection.value && snapSection.value.clientWidth) || window.innerWidth;
  return Math.max(sectionWidth * 0.6, 240);
};

const resetOverlayState = () => {
  overlayEnterOffset = computeOverlayOffset();
  if (panelOverlay.value) {
    panelOverlay.value.style.opacity = "0";
    panelOverlay.value.style.transform = `translateX(${overlayEnterOffset}px)`;
  }
};

// 设置 scroll4 子元素的初始状态和动画
const setupScroll4Animation = (videoFraction) => {
  // 清理之前的动画
  if (scroll4Animation) {
    scroll4Animation.kill();
    scroll4Animation = null;
  }
  scroll4Triggered = false;

  // 获取 scroll4 的三个子元素
  const scroll4El = document.getElementById("scroll4");
  if (!scroll4El) return;

  const riverEl = scroll4El.querySelector(".river");
  const damEl = scroll4El.querySelector(".dam");
  const mountainEl = scroll4El.querySelector(".mountain");

  if (!riverEl || !damEl || !mountainEl) return;

  // 设置初始状态：隐藏，scaleY 为 0，transformOrigin 为底部
  gsap.set([riverEl, damEl, mountainEl], {
    scaleY: 0,
    transformOrigin: "bottom",
    visibility: "hidden",
  });

  // 创建动画时间线（但不自动播放，由进度控制）
  // 总时长设为 1.0 秒（river 0.6s + 0.4s 错开时间）
  scroll4Animation = gsap.timeline({ paused: true });

  // 按照 river -> dam -> mountain 的顺序，错开时间
  // 每个动画持续 0.6 秒，错开 0.2 秒
  scroll4Animation
    .to(
      riverEl,
      {
        scaleY: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0
    ) // 从时间线开始
    .to(
      damEl,
      {
        scaleY: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0.2 // 在 river 动画开始 0.2 秒后开始
    )
    .to(
      mountainEl,
      {
        scaleY: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0.4 // 在 dam 动画开始 0.2 秒后开始（总共错开 0.4 秒）
    );
};

// 根据滚动进度更新 scroll4 子元素的动画
const updateScroll4Animation = (progress, videoFraction) => {
  if (!scroll4Animation) return;

  const scroll4El = document.getElementById("scroll4");
  if (!scroll4El) return;

  const riverEl = scroll4El.querySelector(".river");
  const damEl = scroll4El.querySelector(".dam");
  const mountainEl = scroll4El.querySelector(".mountain");

  if (!riverEl || !damEl || !mountainEl) return;

  const scroll4Position = scrollElementPositions.find(
    (pos) => pos.id === "scroll4"
  );

  if (!scroll4Position) return;

  const startProgress = scroll4Position.progress;
  const threshold = 0.001;

  if (progress < startProgress - threshold) {
    // 回到 scroll4 之前，重置动画并隐藏
    if (scroll4Triggered) {
      scroll4Triggered = false;
      scroll4Animation.pause(0);
    }
    gsap.set([riverEl, damEl, mountainEl], { visibility: "hidden" });
    return;
  }

  // scroll4 居中及之后，确保元素可见并播放动画
  gsap.set([riverEl, damEl, mountainEl], { visibility: "visible" });

  if (!scroll4Triggered) {
    scroll4Triggered = true;
    scroll4Animation.restart();
  }
};

// 设置 scroll12 子元素的初始状态和动画
const setupScroll12Animation = (videoFraction) => {
  // 清理之前的动画
  if (scroll12Animation) {
    scroll12Animation.kill();
    scroll12Animation = null;
  }
  scroll12Triggered = false;

  // 获取 scroll12 的三个子元素
  const scroll12El = document.getElementById("scroll12");
  if (!scroll12El) return;

  const img1El = scroll12El.querySelector(".tjaele-enery-interduction-img1");
  const img2El = scroll12El.querySelector(".tjaele-enery-interduction-img2");
  const img3El = scroll12El.querySelector(".tjaele-enery-interduction-img3");

  if (!img1El || !img2El || !img3El) return;

  // 设置初始状态：隐藏，scaleY 为 0，transformOrigin 为底部
  gsap.set([img1El, img2El, img3El], {
    scaleY: 0,
    transformOrigin: "bottom",
    visibility: "hidden",
  });

  // 创建动画时间线（但不自动播放，由进度控制）
  // 总时长设为 1.0 秒（img1 0.6s + 0.4s 错开时间）
  scroll12Animation = gsap.timeline({ paused: true });

  // 按照 img1 -> img2 -> img3 的顺序，错开时间
  // 每个动画持续 0.6 秒，错开 0.2 秒
  scroll12Animation
    .to(
      img1El,
      {
        scaleY: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0
    ) // 从时间线开始
    .to(
      img2El,
      {
        scaleY: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0.2 // 在 img1 动画开始 0.2 秒后开始
    )
    .to(
      img3El,
      {
        scaleY: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0.4 // 在 img2 动画开始 0.2 秒后开始（总共错开 0.4 秒）
    );
};

// 根据滚动进度更新 scroll12 子元素的动画
const updateScroll12Animation = (progress, videoFraction) => {
  if (!scroll12Animation) return;

  const scroll12El = document.getElementById("scroll12");
  if (!scroll12El) return;

  const img1El = scroll12El.querySelector(".tjaele-enery-interduction-img1");
  const img2El = scroll12El.querySelector(".tjaele-enery-interduction-img2");
  const img3El = scroll12El.querySelector(".tjaele-enery-interduction-img3");

  if (!img1El || !img2El || !img3El) return;

  const scroll12Position = scrollElementPositions.find(
    (pos) => pos.id === "scroll12"
  );

  if (!scroll12Position) return;

  const startProgress = scroll12Position.progress;
  const threshold = 0.001;

  if (progress < startProgress - threshold) {
    if (scroll12Triggered) {
      scroll12Triggered = false;
      scroll12Animation.pause(0);
    }
    gsap.set([img1El, img2El, img3El], { visibility: "hidden" });
    return;
  }

  gsap.set([img1El, img2El, img3El], { visibility: "visible" });

  if (!scroll12Triggered) {
    scroll12Triggered = true;
    scroll12Animation.restart();
  }
};

const calculateScrollElementPositions = (
  trackEl,
  horizontalDistance,
  videoFraction
) => {
  scrollElementPositions = [];
  const viewportWidth = window.innerWidth;

  // 确保 trackEl 在初始位置（x = 0）时计算元素位置
  gsap.set(trackEl, { x: 0 });

  // 等待两帧确保布局完全稳定
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // 收集所有 scroll1-scroll18 元素并计算位置
        for (let i = 1; i <= 18; i++) {
          const element = document.getElementById(`scroll${i}`);
          if (element && trackEl) {
            // 获取元素相对于 trackEl 的位置（在初始状态下）
            const elementRect = element.getBoundingClientRect();
            const trackRect = trackEl.getBoundingClientRect();

            // 计算元素中心点相对于 trackEl 的 x 坐标
            const elementCenterX =
              elementRect.left + elementRect.width / 2 - trackRect.left;

            // 计算需要移动 trackEl 多少距离才能让元素居中
            // 元素居中时，trackEl 需要向左移动：elementCenterX - viewportWidth / 2
            const targetX = -(elementCenterX - viewportWidth / 2);

            // 确保 targetX 在有效范围内
            const clampedTargetX = Math.max(
              -horizontalDistance,
              Math.min(0, targetX)
            );

            // 将 targetX 映射到 timeline 的进度值
            // targetX 的范围是 0 到 -horizontalDistance
            // 对应的进度值范围是 videoFraction 到 1
            const progress =
              horizontalDistance > 0
                ? videoFraction +
                  (Math.abs(clampedTargetX) / horizontalDistance) *
                    (1 - videoFraction)
                : videoFraction;

            scrollElementPositions.push({
              id: `scroll${i}`,
              progress: Math.max(videoFraction, Math.min(1, progress)),
              targetX: clampedTargetX,
            });
          }
        }

        // 按 progress 排序
        scrollElementPositions.sort((a, b) => a.progress - b.progress);
        resolve();
      });
    });
  });
};

const createScrollTrigger = async () => {
  const sectionEl = snapSection.value;
  const trackEl = snapTrack.value;
  if (!sectionEl || !trackEl || !panelVideoReady || !panelVideo.value) return;

  panelTwoActivationTrigger?.kill();
  panelTwoActivationTrigger = null;
  if (panelTwo.value) {
    panelTwo.value.classList.remove("is-active");
  }

  overlayEnterOffset = computeOverlayOffset();

  const panelCount =
    trackEl.querySelectorAll && trackEl.querySelectorAll(".snap-panel")
      ? trackEl.querySelectorAll(".snap-panel").length
      : 1;

  scrollAnimation?.scrollTrigger?.kill();
  scrollAnimation?.kill();
  scrollAnimation = null;

  gsap.set(trackEl, { x: 0 });

  const horizontalDistance = Math.max(
    trackEl.scrollWidth - window.innerWidth,
    0
  );

  const horizontalWeight = Math.max(panelCount - 1, 1);
  const videoWeight = Math.max(panelVideoDuration * VIDEO_SCRUB_AMPLIFIER, 0.1);
  const totalWeight =
    videoWeight + (horizontalDistance > 0 ? horizontalWeight : 0);
  if (totalWeight === 0) return;

  videoProgressProxy.progress = panelVideo.value
    ? panelVideo.value.currentTime / panelVideoDuration || 0
    : 0;

  const timeline = gsap.timeline({ defaults: { ease: "none" } });

  timeline.to(videoProgressProxy, {
    progress: 1,
    duration: videoWeight,
    onUpdate: () => {
      if (!panelVideo.value) return;
      const targetTime = videoProgressProxy.progress * panelVideoDuration;
      if (Math.abs(panelVideo.value.currentTime - targetTime) > 0.02) {
        panelVideo.value.currentTime = targetTime;
      }
      if (panelOverlayBefore.value && panelVideoDuration) {
        const elapsedSeconds = videoProgressProxy.progress * panelVideoDuration;
        const beforeProgress = Math.min(Math.max(elapsedSeconds / 2, 0), 1);
        panelOverlayBefore.value.style.transform = `translateX(-${
          beforeProgress * 120
        }px)`;
        panelOverlayBefore.value.style.opacity = (
          1 - beforeProgress
        ).toString();
      }
      if (panelOverlay.value && panelVideoDuration) {
        const elapsedSeconds = videoProgressProxy.progress * panelVideoDuration;
        const overlayProgress = Math.min(
          Math.max((elapsedSeconds - 3) / (panelVideoDuration - 3 || 1), 0),
          1
        );
        panelOverlay.value.style.opacity = overlayProgress.toString();
        panelOverlay.value.style.transform = `translateX(${
          overlayEnterOffset * (1 - overlayProgress)
        }px)`;
      }
    },
  });

  if (horizontalDistance > 0) {
    timeline.to(trackEl, {
      x: -horizontalDistance,
      duration: horizontalWeight,
    });
  }

  const videoFraction = videoWeight / totalWeight;

  // 计算每个 scroll 元素的位置
  await calculateScrollElementPositions(
    trackEl,
    horizontalDistance,
    videoFraction
  );
  resetParallaxTargets();

  // 设置 scroll4 子元素的初始状态和动画
  setupScroll4Animation(videoFraction);

  // 设置 scroll12 子元素的初始状态和动画
  setupScroll12Animation(videoFraction);

  scrollAnimation = timeline;
  scrollAnimation.scrollTrigger = ScrollTrigger.create({
    trigger: sectionEl,
    start: "top top",
    end: () => `+=${window.innerHeight * totalWeight}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    animation: timeline,
    onUpdate: (self) => {
      // 更新 scroll4 子元素的动画进度
      updateScroll4Animation(self.progress, videoFraction);
      // 更新 scroll12 子元素的动画进度
      updateScroll12Animation(self.progress, videoFraction);
      // 更新视差元素效果
      updateParallaxTargets(self.progress);
    },
    snap: {
      snapTo: (value) => {
        // panel01 的视频部分保持吸附效果
        if (value <= videoFraction) {
          return value;
        }

        // panel02 及之后，找到最近的 scroll 元素并吸附
        if (scrollElementPositions.length === 0) {
          return value;
        }

        // 找到最接近当前 value 的 scroll 元素
        let closestIndex = 0;
        let minDistance = Math.abs(value - scrollElementPositions[0].progress);

        for (let i = 1; i < scrollElementPositions.length; i++) {
          const distance = Math.abs(value - scrollElementPositions[i].progress);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = i;
          }
        }

        return scrollElementPositions[closestIndex].progress;
      },
      duration: 0.4,
      ease: "power1.inOut",
    },
  });

  refreshPanelTwoActivation();
};

const handleResize = () => {
  requestAnimationFrame(async () => {
    resetOverlayState();
    await createScrollTrigger();
  });
};

onMounted(() => {
  resetOverlayState();
  resetParallaxTargets();

  const videoEl = panelVideo.value;
  if (videoEl) {
    panelVideoHandler = () => {
      panelVideoReady = true;
      panelVideoDuration = videoEl.duration || 0;
      videoEl.pause();
      videoEl.currentTime = 0;
      if (panelOverlayBefore.value) {
        panelOverlayBefore.value.style.opacity = "1";
        panelOverlayBefore.value.style.transform = "translateX(0)";
      }
      if (panelOverlay.value) {
        panelOverlay.value.style.opacity = "0";
        panelOverlay.value.style.transform = `translateX(${overlayEnterOffset}px)`;
      }
      createScrollTrigger();
    };

    if (videoEl.readyState >= 1) {
      panelVideoHandler();
    } else {
      videoEl.addEventListener("loadedmetadata", panelVideoHandler);
    }
  }

  // fallback: ensure scroll setup if metadata already handled above
  createScrollTrigger();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  if (panelVideoHandler && panelVideo.value) {
    panelVideo.value.removeEventListener("loadedmetadata", panelVideoHandler);
  }
  resetParallaxTargets();
  panelTwoActivationTrigger?.kill();
  panelTwoActivationTrigger = null;
  scrollAnimation?.scrollTrigger?.kill();
  scrollAnimation?.kill();
  scrollAnimation = null;
  scroll4Animation?.kill();
  scroll4Animation = null;
});
</script>

<style>
@font-face {
  font-family: "alibaba";
  src: url("/fonts/Alibaba-PuHuiTi-Light.ttf") format("truetype");
  font-weight: 300;
  font-display: swap;
}

.panel-index-before {
  font-family: "alibaba", sans-serif;
}
.horizontal-snap-page {
  width: 100%;
  min-height: 100vh;
  background-color: #030303;
  color: #fff;
  overflow: hidden;
}

.snap-section {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.snap-track {
  display: flex;
  height: 100%;
  will-change: transform;
}

.snap-panel {
  flex: 0 0 120vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: url("@/assets/images/resource/resource-background-2.jpg");
  background-size: 2000% 100%;
  background-repeat: no-repeat;
  background-position: 0% center;
}

.panel-content {
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.4em;
}

.panel-01 .panel-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.panel-overlay {
  position: absolute;
  inset: 0;
  padding: 0 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.95);
  opacity: 0;
  transform: translateX(0);
  transition: opacity 0.2s linear, transform 0.2s linear;
}

.panel-overlay-before {
  position: absolute;
  top: 40%;
  left: 30%;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.4em;
  padding: 1.2rem 1.6rem;
  border-radius: 20px;
  transition: transform 0.2s linear, opacity 0.2s linear;
  opacity: 1;
  z-index: 999;
  font-size: 32px;
  transform: translateX(0);
}

.panel-desc {
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  margin-top: 1rem;
}

.panel-index {
  font-size: 5vw;
  font-weight: 700;
  margin-bottom: 1rem;
}

.panel-label {
  font-size: 1.2rem;
  letter-spacing: 0.3em;
}

.panel-01 {
  overflow: visible;
  background-position: 0% center;
}
.panel-02 {
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: justify-content 0.6s ease;
}
.panel-02.is-active {
  justify-content: center;
}
.panel-02-visual {
  /* width: 90vw; */
  /* max-width: 1200px; */
  border-radius: 32px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45);
  transform: translateX(0%) scale(0.95);
  transition: transform 0.6s ease, box-shadow 0.6s ease;
}
.panel-02.is-active .panel-02-visual {
  transform: translateX(0) scale(1);
}
.panel-02-visual img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 32px;
}
.panel-02 {
  background-position: 5.2632% center;
  display: flex;
  align-items: center;
  .light-energy-station {
    position: relative;
    overflow: hidden;
    /* width: 1651px;
    height: 928px; */
    width: 100rem;
    height: 72rem;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: url("@/assets/images/resource/media/resource-picture-1.jpg");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      transition: transform 0.6s ease;
      will-change: transform;
      z-index: 0;
      pointer-events: none;
    }
    &.is-parallax-active::before {
      transform: translateX(10px);
    }
    &::after {
      content: "青海省德令哈熔盐光能电站";
      font-size: 24px;
      bottom: 60px;
      position: absolute;
      left: -350px;
      color: #ead9c9;
      z-index: 1;
    }
  }
  .light-energy-radiation {
    position: relative;
    .light-energy-radiation-wrapper {
      width: 1724px;
      border-top: 1px dotted #838383;
      padding-top: 20px;
      padding-left: 80px;
      position: relative;
      margin-top: 20rem;
      /* height: 300px; */
      margin-left: 50px;
      font-family: "alibaba" !important;
      p {
        font-size: 40px;
        color: #ead9c9;
        width: 910px;
        font-family: "alibaba" !important;
      }
      img {
        position: absolute;
        /* width: 753px;
        height: 501px; */
        width: 47rem;
        height: 31.31rem;
        top: -30rem;
        left: 990px;
        object-fit: cover;
        object-position: center center;
        transition: object-position 0.6s ease;
        cursor: pointer;
        will-change: auto;
      }
      img.is-parallax-active {
        object-position: calc(50% + 10px) center;
      }
    }
  }
}
.panel-02,
.panel-03,
.panel-04,
.panel-05,
.panel-06,
.panel-07,
.panel-08,
.panel-09,
.panel-10,
.panel-11,
.panel-12,
.panel-13,
.panel-14,
.panel-15,
.panel-16,
.panel-17,
.panel-18,
.panel-19,
.panel-20 {
  background-image: url("@/assets/images/resource/resource-background-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.panel-03 {
  /* background-position: 10.5263% center;
  border: 2px solid #1dd1a1; */
  width: 18940px;
  .water-energy-warpper {
    display: flex;
    .water-energy-station {
      width: 100vw;
      height: 100vh;
      position: relative;
      margin-left: 50px;
      &::after {
        content: "藏木水电站";
        font-size: 24px;
        bottom: 620px;
        position: absolute;
        right: 410px;
        color: #ead9c9;
      }
      .mountain {
        background-image: url("@/assets/images/resource/resource-element-mountain.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        width: 20vw;
        height: 100%;
        position: absolute;
        bottom: 10vh;
        right: 0;
      }
      .river {
        background-image: url("@/assets/images/resource/resource-element-river.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        width: 100vw;
        height: 80vh;
        max-height: 80%;
        position: absolute;
        bottom: 0;
      }
      .dam {
        background-image: url("@/assets/images/resource/resource-element-dam.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        width: 100vw;
        height: 60vh;
        position: absolute;
        bottom: 10vh;
      }
    }
    .water-energy-introduction {
      width: 1600px;
      height: 2px;
      border-top: 1px dotted #838383;
      position: relative;
      top: 50%;
      p {
        &:nth-child(1) {
          color: #ead9c9;
          font-size: 62px;
          position: absolute;
          top: -340px;
          left: 60px;
          font-family: "alibaba" !important;
        }
        &:nth-child(2) {
          color: #ead9c9;
          font-size: 42px;
          width: 970px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 10px;
          line-height: 62px;
          font-family: "alibaba" !important;
        }
      }
    }
    .water-energy-introduction-img1 {
      width: 1160px;
      height: 1062px;
      max-width: 100vw;
      max-height: 100vh;
      background-image: url("@/assets/images/resource/media/resource-picture-3.jpg");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;
      &::after {
        content: "黄河辫状水系";
        font-size: 24px;
        bottom: 60px;
        position: absolute;
        left: -200px;
        color: #ead9c9;
        font-family: "alibaba" !important;
      }
    }
  }
}
.panel-04,
.panel-05 {
  /* background-position: 15.7895% center;
  border: 2px solid #54a0ff; */
  width: 18940px;

  .water-energy-introduction {
    width: 1600px;
    height: 2px;
    border-top: 1px dotted #838383;
    position: relative;
    /* top: 50%; */
    p {
      &:nth-child(1) {
        color: #ead9c9;
        font-size: 62px;
        position: absolute;
        top: -340px;
        left: 60px;
        font-family: "alibaba" !important;
      }
      &:nth-child(2) {
        color: #ead9c9;
        font-size: 42px;
        width: 970px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 10px;
        line-height: 62px;
        font-family: "alibaba" !important;
      }
    }
  }
  .water-energy-introduction-img1 {
    width: 1160px;
    height: 1062px;
    max-width: 100vw;
    max-height: 100vh;
    background-image: url("@/assets/images/resource/media/resource-picture-3.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    transition: background-position 0.6s ease;
    will-change: background-position;
    &.is-parallax-active {
      background-position: calc(50% + 10px) center;
    }
    &::after {
      content: "黄河辫状水系";
      font-size: 24px;
      bottom: 60px;
      position: absolute;
      left: -200px;
      color: #ead9c9;
    }
  }
  .water-energy-introduction-1 {
    width: 1100px;
    border-top: 1px dotted #838383;
    /* margin-top: 260px; */
    /* height: calc(100vh-260px); */
    p {
      font-size: 42px;
      width: 862px;
      color: #ead9c9;
      height: 100%;
      padding: 20px 0 0 20px;
      border-left: 1px dotted #838383;
      font-family: "alibaba" !important;
      margin-left: 250px;
    }
  }
}
.panel-05 {
  /* background-position: 21.0526% center;
  border: 2px solid #5f27cd; */
  width: 50vw;
  margin-right: -72vw;
  padding-right: 75vw;
}
.panel-06 {
  /* background-position: 26.3158% center;
  border: 2px solid #ff9ff3; */
  width: 110vw !important;
  .salt-energy-video {
    /* width: 1930px;
    height: 1086px;
    max-width: 100vw;
    max-height: 100vh; */
    margin-right: 370px;
    width: 100%;
    height: 100%;
    position: relative;
    &::after {
      content: "盐湖锂矿";
      font-size: 62px;
      bottom: 50px;
      position: absolute;
      right: -300px;
      color: #ead9c9;
    }
    video {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
  }
}
.panel-07 {
  /* background-position: 31.5789% center;
  border: 2px solid #ff9f43; */
  padding-left: 100vw;
  margin-right: 0vw;
  padding-right: 68vw;
  .salt-energy-wrapper {
    display: flex;
    margin-left: 300px;
    .salt-energy-mine {
      position: relative;
      width: 1480px;
      .salt-energy-introduction {
        width: 100%;
        border-top: 1px dotted #838383;
        display: flex;
        top: 70%;
        position: absolute;
        transform: translateY(-50%);
        padding-top: 20px;
        p {
          font-size: 42px;
          color: #ead9c9;
          width: 420px;
          text-align: center;
        }
        img {
          width: 838px;
          height: 472px;
          margin-left: 50px;
          border-left: 1px dotted #838383;
          position: relative;
          object-fit: cover;
          object-position: center center;
          transition: object-position 0.6s ease;
          will-change: auto;
        }
        img.is-parallax-active {
          object-position: calc(50% + 10px) center;
        }
        &::after {
          content: "茶卡盐湖";
          font-size: 24px;
          bottom: 0px;
          position: absolute;
          right: -20px;
          color: #ead9c9;
        }
      }
    }
    .salt-energy-introduction-1 {
      height: 100vh;
      position: relative;
      width: 800px;
      p {
        margin-left: 80px;
        width: 800px;
        font-size: 42px;
        color: #ead9c9;
        position: absolute;
        top: 50%;
        transform: translateY(-100%);
      }
    }
    .salt-energy-introduction-2 {
      max-width: 100vw;
      max-height: 100vh;
      width: 1683px;
      height: 1124px;
      position: relative;
      overflow: hidden;
      margin: 0 1000px 0 220px;
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("@/assets/images/resource/media/resource-picture-5.jpg");
        background-size: 85%;
        background-position: center center;
        background-repeat: no-repeat;
        transition: transform 0.6s ease;
        will-change: transform;
      }
      &.is-parallax-active::before {
        transform: translateX(10px);
      }
      &::after {
        content: "察尔汗盐湖";
        font-size: 24px;
        bottom: 40px;
        position: absolute;
        right: 70px;
        color: #ead9c9;
        z-index: 1;
      }
    }
  }
}
.panel-08 {
  background-position: 36.8421% center;
  /* border: 2px solid #48dbfb; */
  .tjaele-enery-wrapper {
    background-color: #1b1d10;
    height: 100vh;
    position: relative;
    width: 2920px;
    display: flex;
    .tjaele-enery-interduction-img1 {
      position: absolute;
      bottom: 0;
      left: 0;
      max-height: 100vh;
      width: 2920px;
      height: 704px;
      max-height: 80vh;
      background-image: url("@/assets/images/resource/resource-tjaele-mountain.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .tjaele-enery-interduction-img2 {
      position: absolute;
      bottom: 0;
      left: 0;
      max-height: 100vh;
      width: 2920px;
      height: 541px;
      max-height: 60%;
      background-image: url("@/assets/images/resource/resource-tjaele-grassland-2.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .tjaele-enery-interduction-img3 {
      position: absolute;
      bottom: 0;
      left: 0;
      max-height: 100vh;
      width: 2920px;
      height: 416px;
      max-height: 42%;
      background-image: url("@/assets/images/resource/resource-tjaele-grassland-1.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .tjaele-interduction-title {
      position: absolute;
      width: 960px;
      top: 100px;
      left: 70px;
      padding-left: 10rem;
      p {
        &:nth-child(1) {
          font-size: 62px;
          color: #ead9c9;
        }
        &:nth-child(2) {
          font-size: 42px;
          color: #ead9c9;
        }
      }
    }
    .tjaele-interduction-explanation {
      position: absolute;
      width: 960px;
      top: 200px;
      right: 70px;
      font-size: 42px;
      color: #ead9c9;
      padding-right: 10rem;
    }
  }
}
.copper-mine-warpper {
  border-right: 2px solid #fff;
  border-left: 2px solid #fff;
  display: flex;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    height: 1080px;
    max-height: 100vh;
    background-image: url("@/assets/images/resource/resource-element-contourlines.png");
    background-size: cover;
    background-position: center left;
    background-repeat: no-repeat;
    width: 3417px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
  .copper-mine-interduction-1 {
    position: relative;
    width: 1280px;
    height: 100vh;
    border-top: 1px dotted #838383;
    top: 50%;
    transform: translateY(-10%);
    p {
      &:nth-child(1) {
        position: absolute;
        font-size: 62px;
        color: #ead9c9;
        top: -90px;
        left: 80px;
      }
      &:nth-child(2) {
        font-size: 42px;
        color: #ead9c9;
        position: absolute;
        padding-left: 80px;
        padding-top: 10px;
        width: 860px;
      }
    }
  }
  .copper-mine-interduction-2 {
    height: 100vh;
    width: 798px;
    position: relative;
    p {
      width: 792px;
      font-size: 42px;
      color: #ead9c9;
      position: absolute;
      bottom: 230px;
      left: -330px;
    }
  }
  .copper-mine-interduction-img {
    width: 400px;
    height: 400px;
    background-image: url("@/assets/images/resource/media/resource-picture-6.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    margin-right: 100px;
    transform: translateY(-300px);
    transition: background-position 0.6s ease;
    will-change: background-position;
    &.is-parallax-active {
      background-position: calc(50% + 10px) center;
    }
    &::after {
      content: "玉龙铜矿";
      font-size: 24px;
      bottom: 0px;
      position: absolute;
      left: -170px;
      color: #ead9c9;
    }
  }

  .copper-mine-interduction-img-1 {
    max-width: 100vw;
    max-height: 100vh;
    width: 1730px;
    height: 918px;
    background-image: url("@/assets/images/resource/media/resource-picture-7.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    transition: background-position 0.6s ease;
    will-change: background-position;
    &.is-parallax-active {
      background-position: calc(50% + 10px) center;
    }
    &::after {
      content: "驱龙铜矿";
      font-size: 24px;
      bottom: 40px;
      position: absolute;
      left: -170px;
      color: #ead9c9;
    }
  }
}
.geothermy-enery-wrapper {
  width: 1330px;
  height: 100vh;
  position: relative;
  video {
    /* width: 100%; */
    /* height: 100%; */
    position: absolute;
    bottom: 0;
  }
  p {
    &:nth-child(2) {
      font-size: 62px;
      color: #ead9c9;
      width: 200px;
      position: absolute;
      top: 200px;
      left: 60px;
    }
    &:nth-child(3) {
      font-size: 42px;
      color: #ead9c9;
      position: absolute;
      left: 60px;
      top: 300px;
      width: 1080px;
    }
  }
}
.geothermy-enery-video {
  width: 100vw;
  height: 100vh;
  position: relative;
  padding-left: 50vw;
  &::after {
    content: "青海艾肯泉";
    font-size: 24px;
    bottom: 40px;
    position: absolute;
    left: -170px;
    color: #ead9c9;
  }
  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
}
.geothermy-enery-interduction {
  width: 3060px;
  height: 1080px;
  max-height: 100vh;
  padding-left: 50vw;

  position: relative;
  video {
    width: 125vw;
    height: 100vh;
    object-fit: cover;
  }
  .geothermy-enery-line {
    margin-right: 40px;
    width: 3060px;
    position: absolute;
    top: 50%;
    border-top: 1px dotted #838383;
    .fountain {
      width: 600px;
      height: 340px;
      position: absolute;
      top: -60px;
      left: 200px;
      background-image: url("@/assets/images/resource/media/resource-picture-8.jpg");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      &::after {
        content: "达格架喷泉";
        font-size: 24px;
        bottom: 0;
        position: absolute;
        right: -180px;
        color: #ead9c9;
      }
    }
    .atsuta {
      width: 600px;
      height: 340px;
      position: absolute;
      top: -240px;
      left: 840px;
      background-image: url("@/assets/images/resource/media/resource-picture-9.jpg");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      &::after {
        content: "羊八井地热田";
        font-size: 24px;
        top: 0;
        position: absolute;
        right: -200px;
        color: #ead9c9;
      }
    }
    .atsuta-interduction {
      font-size: 42px;
      color: #ead9c9;
      width: 900px;
      position: absolute;
      top: 10px;
      left: 1800px;
    }
  }
}
.panel-09 {
  background-position: 42.1053% center;
  /* border: 2px solid #222f3e; */
}
.panel-10 {
  background-position: 47.3684% center;
  /* border: 2px solid #ee5253; */
}
.panel-11 {
  background-position: 52.6316% center;
  /* border: 2px solid #10ac84; */
}
.panel-12 {
  background-position: 57.8947% center;
  /* border: 2px solid #341f97; */
}
.panel-13 {
  background-position: 63.1579% center;
  /* border: 2px solid #c8d6e5; */
}
.panel-14 {
  background-position: 68.4211% center;
  /* border: 2px solid #576574; */
}
.panel-15 {
  background-position: 73.6842% center;
  /* border: 2px solid #ff6f91; */
}
.panel-16 {
  background-position: 78.9474% center;
  /* border: 2px solid #f368e0; */
}
.panel-17 {
  background-position: 84.2105% center;
  /* border: 2px solid #00d2d3; */
}
.panel-18 {
  background-position: 89.4737% center;
  /* border: 2px solid #01a3a4; */
}
.panel-19 {
  background-position: 94.7368% center;
  /* border: 2px solid #2e86de; */
}
.panel-20 {
  background-position: 100% center;
  /* border: 2px solid #8395a7; */
}

.light-energy-warpper {
  display: flex;
  align-items: center;
  gap: 3vw;
  width: 100%;
  max-width: 90vw;
}

.light-energy-introduction {
  width: 35vw;
  height: 90vh;
  border-left: 1px dotted rgba(255, 255, 255, 0.45);
  padding-left: 3vw;
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 2rem;
}

.light-energy-title {
  width: 90vw;
  padding-top: 5rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.4);
  display: flex;
  font-family: "alibaba" !important;
}

.light-energy-title p:first-child {
  font-size: 5rem;
  color: #ead9c9;
  letter-spacing: 0.2em;
  margin-bottom: 0.5rem;
  margin-right: 2rem;
  font-family: "alibaba" !important;
}

.light-energy-title p:last-child {
  font-size: 2rem;
  width: 32vw;
  line-height: 1.8;
  color: #ead9c9;
  font-family: "alibaba" !important;
}

.light-energy-windmill {
  position: absolute;
  right: -30vw;
  bottom: -5vw;
  scale: 1.5;
}

.light-energy-windmill img {
  width: 16vw;
  height: auto;
  animation: rotate-panel 16s linear infinite;
}

@keyframes rotate-panel {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
