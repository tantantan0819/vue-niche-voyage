<template>
  <div class="gsap" ref="gsapContainer">
    <!-- 返回按钮 -->
    <return-button/>
    <div class="wrapper">
      <div class="resource-background-wrapper">
        <div class="resource-background-wrapper-bg" ref="backgroundBgRef"></div>
        <!-- 光能 -->
        <div class="light-energy-warpper">
          <div class="light-energy-introduction">
            <div class="light-energy-title">
              <p>光能</p>
              <p>
                高原日照强烈、晴天多、空气稀薄。除东部、南部少数地区年日照时数较少外，多数地区可达2500–3400小时，比同纬度的东部地区几乎多了一半。
              </p>
            </div>
            <div class="light-energy-windmill">
              <img
                  src="@/assets/images/resource/resource-element-solar-panel.png"
                  alt=""
              />
            </div>
          </div>
          <div class="light-energy-station">
            <div class="light-energy-station-img scroller-img">

            </div>
          </div>
          <div class="light-energy-radiation">
            <div class="light-energy-radiation-wrapper">
              <p >
                这里太阳辐射强度极强，并且季节分配比较均匀。因此，高原光伏发电潜力巨大，可大规模开发可再生能源。
              </p>
              <div class="light-energy-radiation-img-wrapper">
                <div class="light-energy-radiation-img scroller-img"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 水能 -->
        <div class="water-energy-warpper">
          <div class="water-energy-station">
            <div class="river"></div>
            <div class="mountain"></div>
            <div class="dam"></div>
          </div>
          <div class="water-energy-introduction">
            <p>水能</p>
            <p>
              青藏高原被誉为“亚洲水塔”，孕育了黄河、长江、雅鲁藏布江、澜沧江、怒江等大河。特别是高原东部和南部，地势起伏大、落差集中，使其具备得天独厚的水能条件。
            </p>
          </div>
          <div class="water-energy-introduction-img1-wrapper">
            <div class="water-energy-introduction-img1 scroller-img"></div>
          </div>
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
              <div class="salt-energy-introduction-img1-wrapper">
                <div class="salt-energy-introduction-img1 scroller-img"></div>
              </div>
              <!--              <img-->
              <!--                  -->
              <!--                  src="@/assets/images/resource/media/resource-picture-4.jpg"-->
              <!--                  alt=""-->
              <!--              />-->
            </div>
          </div>
          <div class="salt-energy-introduction-1">
            <p>
              这里的盐湖锂盐资源十分丰富，储量占我国锂资源总储量的80%以上，占世界盐湖锂总储量的1/3，是全球重要的新能源金属（锂）资源地，为锂电产业提供战略保障。
            </p>
          </div>
          <div class="salt-energy-introduction-2-wrapper">
            <div class="salt-energy-introduction-2 scroller-img"></div>
          </div>
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
          <div class="copper-mine-interduction-img-wrapper">
            <div class="copper-mine-interduction-img scroller-img"></div>
          </div>
          <div class="copper-mine-interduction-img-1-wrapper">
            <div class="copper-mine-interduction-img-1 scroller-img"></div>
          </div>
        </div>
        <!-- 地热 -->
        <div class="geothermy-enery-wrapper">
          <video
              class="geothermy-video"
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
              class="geothermy-enery-video"
              src="@/assets/videos/resource-animation-alpha-smoke-2.webm"
              autoplay
              loop
              muted
          ></video>
          <div class="geothermy-enery-line">
            <!-- 喷泉 -->
            <div class="fountain-wrapper">
              <div class="fountain scroller-img"></div>
            </div>
            <!-- 热田 -->
            <div class="atsuta-wrapper">
              <div class="atsuta scroller-img"></div>
            </div>
            <div class="atsuta-interduction">
              地热资源可用于发电、供暖及旅游开发，是一种洁净且蕴藏量巨大的能源，在国家能源建设方面有巨大价值。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ReturnButton from "@/components/ReturnButton.vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pxToVw, pxToVh } from '../../utils/viewportUtils';
gsap.registerPlugin(ScrollTrigger);

const gsapContainer = ref<HTMLDivElement | null>(null);
let wheelDeltaBuffer = 0;
let wheelRafId: number | null = null;

const applyBufferedWheel = () => {
  wheelRafId = null;
  const el = gsapContainer.value;
  if (!el) return;
  // 纵向滚轮转为横向滚动
  const nextLeft = el.scrollLeft + wheelDeltaBuffer;
  wheelDeltaBuffer = 0;
  const maxScroll = el.scrollWidth - el.clientWidth;
  el.scrollLeft = Math.max(0, Math.min(nextLeft, maxScroll));
};

const handleWheel = (e: WheelEvent) => {
  const el = gsapContainer.value;
  if (!el) return;
  // 仅在容器内拦截，防止页面默认纵向滚动
  e.preventDefault();
  wheelDeltaBuffer += e.deltaY;
  if (!wheelRafId) {
    wheelRafId = requestAnimationFrame(applyBufferedWheel);
  }
};

onMounted(() => {
  if (gsapContainer.value) {
    gsapContainer.value.addEventListener("wheel", handleWheel, {
      passive: false,
    });
  }

  // 太阳板顺时针旋转动画
  gsap.to(".light-energy-windmill img", {
    rotation: 360,
    duration: 10,
    ease: "linear",
    repeat: -1,
    transformOrigin: "center center",
    overwrite: true, // 确保不会有动画冲突
  });

  // 图片水平视差位移
  const imgEls = document.querySelectorAll(".scroller-img");
  if (!imgEls) return;
  imgEls.forEach(item=>{
    // 创建动画并关联 ScrollTrigger
    gsap.to(item, {
      // 随滚动移动的距离（可根据需求调整）
      x: pxToVw(-300),
      scrollTrigger: {
        trigger: item, // 监听的触发元素
        scroller: ".gsap", // 关键：指定水平滚动的容器（非window）
        start: "left right", // trigger左侧进入scroller右侧时开始
        end: "right left", // trigger右侧离开scroller左侧时结束
        scrub: 4, // 滚动联动的平滑度
        horizontal: true, // 明确监听水平滚动
        invalidateOnRefresh: true, // 响应式窗口重计算
        markers: false, // 调试标记（上线后可删除，帮助查看触发点）
      },
    });
  })

  // 水电站升起
  const stationTimeLine = gsap.timeline({
    scrollTrigger:{
      trigger: '.water-energy-station', // 监听的触发元素
      scroller: ".gsap", // 关键：指定水平滚动的容器（非window）
      start: "left+=500 right", // trigger左侧进入scroller右侧时开始
      end: "+=500", // trigger右侧离开scroller左侧时结束
      scrub: 4, // 滚动联动的平滑度
      horizontal: true, // 明确监听水平滚动
      invalidateOnRefresh: true, // 响应式窗口重计算
      markers: false, // 调试标记（上线后可删除，帮助查看触发点）
    }
  })

  stationTimeLine.to('.water-energy-station .river',{
    y: pxToVh(-700),
    duration: 0.1
  })
  stationTimeLine.to('.water-energy-station .mountain',{
    y: pxToVh(-500),
    duration: 0.1
  })
  stationTimeLine.to('.water-energy-station .dam',{
    y: pxToVh(-700),
    duration: 0.1
  },'-=0.1')

  const tl = gsap.timeline()
  // 高山拔地而起
  tl.to('.tjaele-enery-interduction-img1', {
    y: pxToVh(-704),
    scrollTrigger: {
      trigger: '.tjaele-enery-interduction-img1',
      scroller: ".gsap",
      start: "left right",
      end: "+=1300",
      scrub: 4,
      horizontal: true,
      invalidateOnRefresh: true,
      markers: false,
    },
  });
  tl.to('.tjaele-enery-interduction-img2', {
    y: pxToVh(-541),
    scrollTrigger: {
      trigger: '.tjaele-enery-interduction-img2',
      scroller: ".gsap",
      start: "left right",
      end: "+=1200",
      scrub: 4,
      horizontal: true,
      invalidateOnRefresh: true,
      markers: false,
    },
  });
  tl.to('.tjaele-enery-interduction-img3', {
    y: pxToVh(-416),
    scrollTrigger: {
      trigger: '.tjaele-enery-interduction-img3',
      scroller: ".gsap",
      start: "left right",
      end: "+=1100",
      scrub: 4,
      horizontal: true,
      invalidateOnRefresh: true,
      markers: false,
    },
  });
  // 背景图视差
  tl.to('.resource-background-wrapper-bg', {
    x: pxToVw(-700),
    scrollTrigger: {
      trigger: '.resource-background-wrapper-bg',
      scroller: ".gsap",
      start: "left right",
      end: "right left",
      scrub: 4,
      horizontal: true,
      invalidateOnRefresh: true,
      markers: false,
    },
  });
});

onUnmounted(() => {
  if (gsapContainer.value) {
    gsapContainer.value.removeEventListener("wheel", handleWheel);
  }
  if (wheelRafId) {
    cancelAnimationFrame(wheelRafId);
    wheelRafId = null;
  }
});
</script>

<style scoped>
.gsap {
  height: 1080px;
  overflow-y: hidden;
  overflow-x: auto; /* 关键：允许水平滚动 */
  scrollbar-width: none; /* 可选：隐藏滚动条 */
}
.gsap::-webkit-scrollbar {
  display: none; /* 可选：隐藏滚动条 */
}

.wrapper {
  display: flex;
  width: 20000px; /* 足够的水平滚动空间 */
  width: 20000px; /* 足够的水平滚动空间 */
  height: 100vh;
}



.content-wrapper {
  display: flex;
  height: 1080px;
  overflow-y: hidden;
  overflow-x: auto;
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
  position: relative;
  .resource-background-wrapper-bg{
    position: absolute;
    top: 0;
    left: 0px;
    height: 100vh;
    width: 18940px;
    background-image: url("@/assets/images/resource/resource-background-2.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
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
    position: relative;
    overflow: hidden;
    .light-energy-station-img{
      width: 1900px;
      height: 928px;
      background-image: url("@/assets/images/resource/media/resource-picture-1.jpg");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 0;
    }
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
    top: 50%;
    transform: translateY(-100%);
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
      .light-energy-radiation-img-wrapper{
        position: absolute;
        width: 753px;
        height: 501px;
        top: -500px;
        left: 990px;
        overflow: hidden;
        .light-energy-radiation-img{
          width: 953px;
          height: 501px;
          background-image: url("@/assets/images/resource/media/resource-picture-2.jpg");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          position: absolute;
          top: 0;
          left: 0;
        }
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
    transform-style: preserve-3d; /* 保持子元素的 3D 空间 */
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
      width: 384px;
      height: 100%;
      position: absolute;
      bottom: -508px;
      right: 0;
    }
    .river {
      background-image: url("@/assets/images/resource/resource-element-river.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100vw;
      height: 700px;
      position: absolute;
      bottom: -700px;
    }
    .dam {
      background-image: url("@/assets/images/resource/resource-element-dam.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100vw;
      height: 60vh;
      position: absolute;
      bottom: -700px;
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
  .water-energy-introduction-img1-wrapper{
    width: 1160px;
    height: 869px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    &::after {
      content: "黄河辫状水系";
      font-size: 24px;
      bottom: 60px;
      position: absolute;
      left: -200px;
      color: #ead9c9;
    }
    .water-energy-introduction-img1 {
      width: 1360px;
      height: 869px;
      background-image: url("@/assets/images/resource/media/resource-picture-3.jpg");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .water-energy-introduction-1 {
    width: 1100px;
    border-top: 1px dotted #838383;
    margin-top: 260px;
    border-top:  1px dotted #838383;
    position: relative;
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
    &::before {
      content: "青海贵德龙羊峡水电站";
      font-size: 24px;
      bottom: 50px;
      position: absolute;
      left: -300px;
      color: #ead9c9;
    }
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
      padding-top: 20px;
      .salt-energy-introduction-img1-wrapper{
        width: 838px;
        height: 472px;
        margin-left: 50px;
        position: relative;
        overflow: hidden;
        .salt-energy-introduction-img1{
          width: 1038px;
          height: 472px;
          background-image: url("@/assets/images/resource/media/resource-picture-4.jpg");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      p {
        font-size: 42px;
        color: #ead9c9;
        width: 460px;
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
  .salt-energy-introduction-2-wrapper{
    max-width: 100vw;
    max-height: 100vh;
    width: 1683px;
    height: 1124px;
    margin: 0 400px 0 220px;
    position: relative;
    overflow: hidden;
    &::after {
      content: "察尔汗盐湖";
      font-size: 24px;
      bottom: 40px;
      position: absolute;
      right: -170px;
      color: #ead9c9;
    }
  }
  .salt-energy-introduction-2 {
    width: 1883px;
    height: 1124px;
    background-image: url("@/assets/images/resource/media/resource-picture-5.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    top: 0;
    left: 0;
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
    bottom: -704px;
    left: 0;
    width: 2920px;
    height: 704px;
    background-image: url("@/assets/images/resource/resource-tjaele-mountain.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .tjaele-enery-interduction-img2 {
    position: absolute;
    bottom: -541px;
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
    bottom: -416px;
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
  padding-right: 80px;
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
    right: -550px;
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
  .copper-mine-interduction-img-wrapper{
    width: 400px;
    height: 400px;
  //background-image: url("@/assets/images/resource/media/resource-picture-6.jpg");
  //background-size: cover;
  //background-position: center center;
  //background-repeat: no-repeat;
    position: relative;
    margin-right: 100px;
    transform: translateY(-300px);
    overflow: hidden;
    &::after {
      content: "玉龙铜矿";
      font-size: 24px;
      bottom: 0px;
      position: absolute;
      left: -170px;
      color: #ead9c9;
    }
  }
  .copper-mine-interduction-img {
    width: 600px;
    height: 400px;
    background-image: url("@/assets/images/resource/media/resource-picture-6.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
  }
  .copper-mine-interduction-img-1-wrapper{
    max-width: 100vw;
    max-height: 100vh;
    width: 1730px;
    height: 918px;
    position: relative;
    overflow: hidden;
    z-index: 2;
    &::after {
      content: "驱龙铜矿";
      font-size: 24px;
      bottom: 40px;
      position: absolute;
      left: -170px;
      color: #ead9c9;
    }
    .copper-mine-interduction-img-1 {
      max-width: 100vw;
      max-height: 100vh;
      width: 1930px;
      height: 918px;
      background-image: url("@/assets/images/resource/media/resource-picture-7.jpg");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 0;
    }

  }
}
.geothermy-enery-wrapper {
  width: 1330px;
  height: 100vh;
  position: relative;
  .geothermy-video {
  //width: 100%;
    position: absolute;
    bottom: -8px;
    width: 1330px;
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
  overflow: hidden;
  .geothermy-enery-video{
    width: 3060px;
    height: 1380px;
  }
  .geothermy-enery-line {
    margin-right: 40px;
    width: 3060px;
    position: absolute;
    top: 50%;
    border-top: 1px dotted #838383;
    .fountain-wrapper{
      width: 600px;
      height: 340px;
      position: absolute;
      top: -60px;
      left: 200px;
      overflow: hidden;
      &::after {
        content: "达格架喷泉";
        font-size: 24px;
        bottom: 0;
        position: absolute;
        right: -180px;
        color: #ead9c9;
      }
      .fountain {
        width: 800px;
        height: 340px;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url("@/assets/images/resource/media/resource-picture-8.jpg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
    }
    .atsuta-wrapper{
      width: 600px;
      height: 340px;
      position: absolute;
      top: -240px;
      left: 840px;
      overflow: hidden;
      &::after {
        content: "羊八井地热田";
        font-size: 24px;
        top: 0;
        position: absolute;
        right: -200px;
        color: #ead9c9;
      }
      .atsuta {
        width: 800px;
        height: 340px;
        position: absolute;
        top: 0;
        left:0;
        background-image: url("@/assets/images/resource/media/resource-picture-9.jpg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
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