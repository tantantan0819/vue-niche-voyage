<template>
  <div>
    <ScrollLayout>
      <!-- 第一屏：横向 -->
      <div
        class="scroll-section-item"
        direction="horizontal"
        ref="carouselContainerRef"
      >
        <div class="content-wrapper">
          <!-- 资源简介 -->
          <div class="resource-introduction-video">
            <div class="scroll-video-wrapper">
              <video
                ref="introductionVideoRef"
                class="video"
                preload="auto"
                muted
                playsinline
              >
                <source
                  src="@/assets/videos/resource-animation-baking.mp4"
                  type="video/mp4"
                />
              </video>
              <div class="spacer"></div>
            </div>
          </div>
          <div class="resource-background-wrapper">
            <!-- 光能 -->
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
                    alt=""
                  />
                </div>
              </div>
              <div class="light-energy-station scroll-item"></div>
              <div class="light-energy-radiation">
                <div class="light-energy-radiation-wrapper">
                  <p class="scroll-item">
                    这里太阳辐射强度极强，并且季节分配比较均匀。因此，高原光伏发电潜力巨大，可大规模开发可再生能源。
                  </p>
                  <img
                    class="scroll-item"
                    src="@/assets/images/resource/media/resource-picture-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <!-- 水能 -->
            <div class="water-energy-warpper">
              <div class="water-energy-station scroll-item">
                <div class="river"></div>
                <div class="mountain"></div>
                <div class="dam"></div>
                <!--                <img src="@/assets/images/resource/resource-element-dam.png" alt="">-->
                <!--                <img src="@/assets/images/resource/resource-element-mountain.png" alt="">-->
              </div>
              <div class="water-energy-introduction">
                <p>水能</p>
                <p>
                  青藏高原被誉为“亚洲水塔”，孕育了黄河、长江、雅鲁藏布江、澜沧江、怒江等大河。特别是高原东部和南部，地势起伏大、落差集中，使其具备得天独厚的水能条件。
                </p>
              </div>
              <div class="water-energy-introduction-img1"></div>
              <div class="water-energy-introduction-1">
                <p>
                  当前，高原水电资源储量有巨大潜力，已成为国家清洁能源供给的重要支点，这对优化能源结构、保障电力稳定输送具有战略意义。
                </p>
              </div>
              <div class="salt-energy-video">
                <video
                  class="video"
                  preload="auto"
                  autoplay
                  loop
                  muted
                  playsinline
                >
                  <source
                    src="@/assets/images/resource/media/resource-video-1.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <!-- 盐矿 -->
            <div class="salt-energy-wrapper">
              <div class="salt-energy-mine">
                <div class="salt-energy-introduction">
                  <p>高原上存在众多盐湖，尤其是在柴达木盆地。</p>
                  <img
                    class="scroll-item"
                    src="@/assets/images/resource/media/resource-picture-4.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="salt-energy-introduction-1">
                <p>
                  这里的盐湖锂盐资源十分丰富，储量占我国锂资源总储量的80%以上，占世界盐湖锂总储量的1/3，是全球重要的新能源金属（锂）资源地，为锂电产业提供战略保障。
                </p>
              </div>
              <div class="salt-energy-introduction-2"></div>
            </div>
          </div>
          <div class="green-wrapper">
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
            <!-- 铜矿 -->
            <div class="copper-mine-warpper">
              <div class="copper-mine-interduction-1">
                <p>铜矿</p>
                <p>
                  高原之上，金属矿产丰富，主要有铜矿、铬铁矿、铅锌矿等，其中铜矿储量最大，占全国的三分之二以上。
                </p>
              </div>
              <div class="copper-mine-interduction-2">
                <p>
                  这些矿产资源主要分布在班公湖—怒江成矿带、冈底斯成矿带和三江成矿带。铜矿开发对高原经济发展和国家战略意义重大。
                </p>
              </div>
              <div class="copper-mine-interduction-img"></div>
              <div class="copper-mine-interduction-img-1"></div>
            </div>
            <!-- 地热 -->
            <div class="geothermy-enery-wrapper">
              <video
                src="@/assets/videos/resource-animation-alpha-smoke-1.webm"
                autoplay
                loop
                muted
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
                <div class="fountain"></div>
                <!-- 热田 -->
                <div class="atsuta"></div>
                <div class="atsuta-interduction">
                  地热资源可用于发电、供暖及旅游开发，是一种洁净且蕴藏量巨大的能源，在国家能源建设方面有巨大价值。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollLayout>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from "vue";
import ScrollLayout from "@/components/ScrollLayout.vue";
import PlayVideo from "@/components/PlayVideo.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// 在组件级别声明 ref，这样才能与模板中的 ref 关联
const carouselContainerRef = ref(null);
const introductionVideoRef = ref(null);

onMounted(() => {
  // 资源板块视频滚动特效
  const video = introductionVideoRef.value;
  video.addEventListener("loadedmetadata", () => {
    const duration = video.duration;
    video.pause();
    video.currentTime = 0;
    const updateTime = gsap.quickTo(video, "currentTime", {
      duration: 0.1,
      ease: "none",
    });
    // 动画序列
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-video-wrapper",
        start: "top top",
        end: "bottom+=800 top",
        scrub: 4,
        pin: true,
        onUpdate: (self) => {
          updateTime(self.progress * duration);
        },
      },
    });
  });

  // 添加滑动屏幕吸附动画
  ScrollTrigger.create({
    trigger: carouselContainerRef.value, // 触发滚动的容器
    scroller: carouselContainerRef.value, // 滚动的容器（这里和 trigger 是同一个）
    start: "top top", // 滚动开始的位置
    end: () => `+=${carouselContainerRef.value.scrollWidth}`, // 滚动结束的位置（容器总宽度）
    snap: {
      // 核心吸附配置
      targets: ".scroll-item", // 吸附到 .scroll-item 元素
      align: "center center", // 对齐方式：item 的中心对齐到 scroller 的中心
      duration: 0.5, // 吸附动画的时长（秒）
      ease: "power3.out", // 吸附动画的缓动函数
    },
    // 可选：添加一个回调函数，在吸附发生时触发
    onSnap: (self) => {
      console.log("吸附到了元素:", self.snapTarget);
    },
  });
  // 太阳板顺时针旋转动画
  gsap.to(".light-energy-windmill img", {
    rotation: 360,
    duration: 10,
    ease: "linear",
    repeat: -1,
    transformOrigin: "center center",
    overwrite: true, // 确保不会有动画冲突
  });
  // 光能的标题
  gsap.fromTo(
    ".light-energy-title",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".light-energy-title",
        start: "left right",
        end: "+=1400",
        scrub: true,
      },
    }
  );

  // 高山拔起
  gsap.from(".tjaele-enery-interduction-img1", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".tjaele-enery-interduction-img1r",
      start: "right left",
      end: "+=1400",
      scrub: true,
    },
  });

  // 冻土高山拔起
  // const tjaeleTimeLine = gsap.timeline();
  // tjaeleTimeLine.from('.tjaele-enery-interduction-img1',{
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: ".tjaele-enery-wrapper",
  //     start: "right left",
  //     end: "+=1400",
  //     scrub: true,
  //   },
  // })
});
</script>

<style scoped>
.content-wrapper {
  display: flex;
}
.resource-introduction-video {
  video {
    width: 100vw;
    height: 100vh;
  }
}
.resource-background-wrapper {
  display: flex;
  height: 100vh;
  width: 18940px;
  background-image: url("@/assets/images/resource/resource-background-2.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.light-energy-warpper {
  display: flex;
  align-items: center;
  .light-energy-introduction {
    /* margin-left: 600px; */
    width: 1720px;
    height: 100vh;
    border-left: 1px dotted #838383;
    position: relative;
    .light-energy-title {
      padding-top: 200px;
      display: flex;
      padding-bottom: 10px;
      border-bottom: 1px dotted #838383;
      p {
        margin-left: 60px;
        &:nth-child(1) {
          display: flex;
          font-size: 62px;
          color: #ead9c9;
        }
        &:nth-child(2) {
          font-size: 42px;
          color: #ead9c9;
          width: 1100px;
        }
      }
    }
    .light-energy-windmill {
      position: absolute;
      right: 460px;
      bottom: -130px;
      img {
        width: 480px;
        height: 483px;
      }
    }
  }
  .light-energy-station {
    width: 1651px;
    height: 928px;
    background-image: url("@/assets/images/resource/media/resource-picture-1.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    &::after {
      content: "青海省德令哈熔盐光能电站";
      font-size: 24px;
      bottom: 60px;
      position: absolute;
      left: -350px;
      color: #ead9c9;
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
      height: 300px;
      margin-left: 50px;
      p {
        font-size: 40px;
        color: #ead9c9;
        width: 910px;
      }
      img {
        position: absolute;
        width: 753px;
        height: 501px;
        top: -500px;
        left: 990px;
        transition: transform 0.3s ease;
        cursor: pointer;
      }
    }
  }
}
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
      height: 40vh;
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
      }
    }
  }
  .water-energy-introduction-img1 {
    width: 1160px;
    height: 869px;
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
    }
  }
  .water-energy-introduction-1 {
    width: 1100px;
    border-top: 1px dotted #838383;
    margin-top: 260px;
    height: calc(100vh-260px);
    p {
      font-size: 42px;
      width: 862px;
      color: #ead9c9;
      height: 100%;
      padding: 20px 0 0 20px;
      border-left: 1px dotted #838383;
      margin-left: 250px;
    }
  }
  .salt-energy-video {
    width: 1930px;
    height: 1086px;
    max-width: 100vw;
    max-height: 100vh;
    margin-left: 370px;
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
    }
  }
}
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
      top: 50%;
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
        position: relative;
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
    background-image: url("@/assets/images/resource/media/resource-picture-5.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0 1000px 0 220px;
    position: relative;
    &::after {
      content: "察尔汗盐湖";
      font-size: 24px;
      bottom: 40px;
      position: absolute;
      right: -170px;
      color: #ead9c9;
    }
  }
}
.green-wrapper {
  background-color: #1b1d10;
  height: 100vh;
  display: flex;
}
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
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
  }
  p {
    &:nth-child(2) {
      font-size: 62px;
      color: #ead9c9;
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
  }
}
.geothermy-enery-interduction {
  width: 3060px;
  height: 1080px;
  max-height: 100vh;
  position: relative;
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
</style>
