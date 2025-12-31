<template>
  <div class="xiangxiong">
    <div class="xiangxiong-bg"></div>
    <div class="first-screen">
      <p
          class="first-screen-title"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="800"
          data-parallax-to="-800"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true">约公元前<span ref="bcNumberRef">{{bcNumber}}</span>世纪-公元<span>{{adNumber}}</span>世纪</p>
      <div
          id="page-xiangxiong-civilization"
          class="first-screen-stone"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="500"
          data-parallax-to="-500"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true"></div>
    </div>
    <div class="second-screen">
      <p 
        class="title"
        data-parallax="true"
        data-parallax-axis="x"
        data-parallax-from="300"
        data-parallax-to="-300"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">象雄文明</p>
      <div class="palace"></div>
      <div class="stone"></div>
    </div>
    <div class="third-screen">
      <div class="palace"></div>
      <!-- 视差元素：wind -->
      <div class="wind" data-speed="1.2"></div>
      <p 
          class="description-0 description"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="300"
          data-parallax-to="-300"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true">象雄文明是吐蕃兴起前青藏高原的核心文明，约公元前4世纪至公元7世纪存续。其宗教与文字都深刻影响了此后高原社会的各个方面。</p>
      <p 
          class="description-1 description"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="300"
          data-parallax-to="-300"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true">据相关典籍所载，象雄分为里象雄、中象雄和外象雄三部分。虽至今没有确切的地域范围，但中象雄大致位于今西藏西部阿里地区冈底斯山脉附近，以象泉河流域札达盆地为中心，国都“穹窿银城”也位于中象雄境内。</p>

      <div
          class="description-container"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="300"
          data-parallax-to="-300"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true">
          <p class="description-2 description xiangxiongPinText">“象雄”一词，可引申译为“受穹鸟护佑的人们居住的地方”，古代汉文文献中则被记载为“羊同”。</p>
          <p class="description-3 xiangxiongPinTextNew">唐代史学家杜佑所著《通典·边防卷六》中就载有：“大羊同东接吐蕃，西接小羊同，北直于阗，东西千余里，胜兵八九万人。”</p>
      </div>
    </div>
    <div class="four-screen screen">
      <p
          class="description description-new"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="150"
          data-parallax-to="-150"
          data-parallax-speed="1.1"
          data-parallax-center-lock="true"
      >虽然有关象雄文明的官方史料较少，但近年来一系列的考古发现可以让我们一窥古象雄的踪迹。</p>
      <div
          class="cloud-1"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="900"
          data-parallax-to="-900"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      ></div>
      <div
          class="cloud-2"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="900"
          data-parallax-to="-900"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      ></div>
      <div
          class="mountain-1"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="-100"
          data-parallax-to="100"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      ></div>
      <div
          class="mountain-2"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="200"
          data-parallax-to="-200"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      ></div>
    </div>
    <div class="five-screen screen">
      <div class="brocade">
        <div class="brocade-wrapper">
          <div 
              class="brocade-img-1"
              data-parallax="true"
              data-parallax-axis="x"
              data-parallax-from="200"
              data-parallax-to="-200"
              data-parallax-speed="1.2"
              data-parallax-center-lock="true"
            ></div>
          <div 
              class="brocade-img-2"
              data-parallax="true"
              data-parallax-axis="x"
              data-parallax-from="300"
              data-parallax-to="-300"
              data-parallax-speed="1.2"
              data-parallax-center-lock="true"></div>
        </div>
        <div 
            class="description description-wrapper description-new"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="200"
            data-parallax-to="-200"
            data-parallax-speed="1.2"
            data-parallax-center-lock="true"
            >
          <p class="brocade-title">王侯”汉字织锦</p>
          <p class="brocade-first">出土于阿里地区象泉河流域的著名苯教寺院故如甲木寺。 根据科学测定，其年代可追溯到东汉时期。</p>
          <p class="brocade-second">该织物为平纹织锦，有波浪、祥云、对鸟、神树、朱雀、白虎、青龙、玄武等纹饰。空白处可见“王侯”及其镜像的反字。此类织锦被学界认为是中原官方制作赐予地方藩王的物品，可能经新疆一带输入到西藏地区，也是青藏高原上发现的最早的丝绸。</p>
        </div>
      </div>
      <div class="mask">
        <div class="mask-img-wrapper">
          <div class="mask-img-1"></div>
          <div class="mask-img-2"></div>
        </div>
        <div class="description description-wrapper description-1">
          <p>黄金面具</p>
          <p>故如甲木墓地出土的黄金面具，被用来遮盖死者面部。</p>
        </div>
        <div class="description description-2 description-new">
          <p>黄金面具在中亚和我国新疆等地的墓葬并不少见。“其酋豪死，抉去其脑，实以珠玉，剖其五脏，易以黄金，假造金鼻银齿，以人为殉”则是《通典》对这一习俗的记载。</p>
        </div>
        <div
            class="mountain-1"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="100"
            data-parallax-to="-100"
            data-parallax-speed="1.1"
            data-parallax-center-lock="true"
        ></div>
        <div
            class="cloud-1"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="400"
            data-parallax-to="-400"
            data-parallax-speed="1.2"
            data-parallax-center-lock="true"
        ></div>
      </div>
      <div class="popularization">
        <div >
          <div
              class="description description-new"
              data-parallax="true"
              data-parallax-axis="x"
              data-parallax-from="200"
              data-parallax-to="-200"
              data-parallax-speed="1.2"
              data-parallax-center-lock="true"
          >
            无论是汉字织锦还是黄金面具，都彰示着多元文化在象雄时代的高原上已然发生碰撞与融合，也是阿里地区与祖国新疆、内地乃至中亚地区文化交流的铁证。
          </div>
          <div class="popularization-parallax"
               data-parallax="true"
               data-parallax-axis="x"
               data-parallax-from="200"
               data-parallax-to="-200"
               data-parallax-speed="1.2"
               data-parallax-center-lock="true">
            <annotation-dot>
              <p class="popularization-content">《物里中华：一文一物话西藏》四川民族出版社 2025</p>
            </annotation-dot>
          </div>

        </div>

        <div
            class="mountain-1"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="400"
            data-parallax-to="-400"
            data-parallax-speed="1.2"
            data-parallax-center-lock="true"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { pxToVw, pxToVh } from '@/utils/viewportUtils';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnnotationDot from '@/components/AnnotationDot.vue';
gsap.registerPlugin(ScrollTrigger);

const bcNumberRef = ref(null);
const bcNumber = ref(9);
const adNumber = ref(9);

const initXiangxiongNumberAnimation = () => {
  // 确保元素已准备好
  if (!bcNumberRef.value) {
    console.warn('bcNumberRef not ready');
    return;
  }

  // 象雄数字变化
  ScrollTrigger.create({
    trigger: bcNumberRef.value,
    scroller: '.horizontal-scroll-container',
    horizontal: true,
    start: 'left right',
    end: 'left center',
    scrub: true,
    onUpdate: (self) => {
      if (self.progress >= 1) {
        bcNumber.value = '4';
        adNumber.value = '9';
      } else if (self.isActive) {
        bcNumber.value = (Math.floor(Math.random() * 9) + 1).toString();
        adNumber.value = (Math.floor(Math.random() * 9) + 1).toString();
      }
    },
  });

  // 宫殿动画
  // const palaceAnim = gsap.quickTo('.second-screen .palace', 'y', {
  //   duration: 0.4,
  //   ease: 'power1.out'
  // });
  // const titleAnim = gsap.quickTo('.second-screen .title', 'opacity', {
  //   duration: 0.3,
  //   ease: 'power1.out',
  //   delay: 1
  // });
  // ScrollTrigger.create({
  //   trigger: '.second-screen .stone',
  //   scroller: '.horizontal-scroll-container',
  //   horizontal: true,
  //   start: 'left left',
  //   end: '+=200',
  //   scrub: true,
  //   onUpdate: (self) => {
  //     palaceAnim(-1200 * self.progress);
  //     titleAnim(self.progress > 0 ? 1 : 0);
  //   },
  // });

  // stone pin 动画
  // ScrollTrigger.create({
  //   trigger: '.second-screen .stone',
  //   scroller: '.horizontal-scroll-container',
  //   horizontal: true,
  //   start: 'center-=300px left',
  //   end: '+=350',
  //   pin: true,
  //   pinSpacing: false,
  //   pinType: "transform",
  //   anticipatePin: 1,
  //   invalidateOnRefresh: true,
  //   scrub: 4,
  // });

  // 象雄描述文本切换动画
  // const descriptionTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.xiangxiong .third-screen',
  //     scroller: '.horizontal-scroll-container',
  //     horizontal: true,
  //     start: 'right-=200 center',
  //     end: '+=600',
  //     pin: true,
  //     pinSpacing: false,
  //     pinType: "transform",
  //     anticipatePin: 1,
  //     invalidateOnRefresh: true,
  //     scrub: 4,
  //   }
  // });
  // descriptionTl.to('.xiangxiongPinText', { opacity: 1, duration: 0.5 }, 0)
  //     .to('.xiangxiongPinText', { opacity: 1, duration: 1 }, '+=0')
  //     .to('.xiangxiongPinText', { opacity: 0, duration: 0.3 }, '+=0')
  //     .to('.xiangxiongPinTextNew', { opacity: 1, duration: 0.3 }, '-=0.2');

  // 象雄背景同步pin效果
  ScrollTrigger.create({
    trigger: '.xiangxiong .third-screen',
    scroller: '.horizontal-scroll-container',
    horizontal: true,
    start: 'right-=200 center',
    end: '+=600',
    pin: '.xiangxiong-bg',
    pinSpacing: false,
    pinType: "transform",
    anticipatePin: 1,
    invalidateOnRefresh: true,
    scrub: 4,
  });

  // 织锦文本切换动画
  const brocadeTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.brocade',
      scroller: '.horizontal-scroll-container',
      horizontal: true,
      start: 'left-=300 left',
      end: '+=800',
      pin: true,
      pinSpacing: false,
      pinType: "transform",
      anticipatePin: 1,
      invalidateOnRefresh: true,
      scrub: 4,
    }
  });
  // 织锦背景同步pin效果
  ScrollTrigger.create({
    trigger: '.brocade',
    scroller: '.horizontal-scroll-container',
    horizontal: true,
    start: 'left-=300 left',
    end: '+=800',
    pin: '.xiangxiong-bg',
    pinSpacing: false,
    pinType: "transform",
    anticipatePin: 1,
    invalidateOnRefresh: true,
    scrub: 4,
  });
  // brocadeTl.to('.brocade-first', { opacity: 1, duration: 0.5 }, 0)
  //     .to('.brocade-first', { opacity: 1, duration: 1 }, '+=0')
  //     .to('.brocade-first', { opacity: 0, duration: 0.3 }, '+=0')
  //     .to('.brocade-second', { opacity: 1, duration: 0.3 }, '-=0.2');

  // 黄金面具位移动画
  gsap.to('.xiangxiong .mask-img-1', {
    x: pxToVw(-400),
    scrollTrigger: {
      trigger: '.xiangxiong .mask-img-1',
      scroller: '.horizontal-scroll-container',
      horizontal: true,
      start: 'left right',
      end: 'center center',
      pinSpacing: false,
      scrub: 4,
    }
  });

  // 黄金面具描述位移动画
  gsap.to('.mask .description-2', {
    x: pxToVw(+400),
    scrollTrigger: {
      trigger: '.xiangxiong .description-2',
      scroller: '.horizontal-scroll-container',
      horizontal: true,
      start: 'left center',
      end: 'left left',
      pinSpacing: false,
      scrub: 4,
    }
  });
};
const initDescriptionOpacityAnimation = () => {
  document.querySelectorAll('.description').forEach((desc) => {
    gsap.fromTo(
        desc,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: desc,
            scroller: '.horizontal-scroll-container',
            horizontal: true,
            start: 'left-=300px center',
            end: 'right right-=400px',
            scrub: true,
          },
        }
    );
  });
};
onMounted(async ()=>{
  // 等待DOM完全渲染
  await nextTick();
  // 确保ref已准备好
  if (bcNumberRef.value) {
    initXiangxiongNumberAnimation();
  } else {
    // 如果还没准备好，延迟执行
    setTimeout(() => {
      if (bcNumberRef.value) {
        initXiangxiongNumberAnimation();
      }
    }, 100);
  }
})

</script>
<style>
.description{
  font-size: 33px;
  color: #534833;
  line-height: 54px;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
}
.xiangxiong{
  display: flex;
  width: 19676px;
  height: 1080px;
  padding-right: 2400px;
  position: relative;
  .xiangxiong-bg{
    width: 19676px;
    height: 1080px;
    background-image: url("@/assets/images/xiangxiong/xx-bg.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
  }
  .first-screen{
    .first-screen-title{
      font-family: 'EarlySummerSerif-Bold';
      font-size: 90px;
      color: #675d46;
      margin-left: 2900px;
      margin-top: 450px;
    }
    .first-screen-stone{
      margin-left: 860px;
      width: 4380px;
      height: 1998px;
      background-image: url("@/assets/images/xiangxiong/xx-image-1.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      z-index: 3;
      position: relative;
      top: 50px;
    }
  }
  .second-screen{
    position: relative;
    margin-left: -200px;
    .title{
      font-family: 'EarlySummerSerif-Bold';
      width: 100px;
      font-size: 90px;
      color: #675d46;
      display: flex;
      flex-direction: column;
      writing-mode: vertical-rl;
      text-orientation: upright;
      margin-top: 30px;
      position: relative;
      z-index: 2;
      left: 150px;
      /* opacity: 0; */
    }
    .palace{
      width: 2861px;
      height: 1205px;
      background-image: url("@/assets/images/xiangxiong/xx-image-2-wind.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 140px;
      left: -1300px;
    }
    .stone{
      width: 4071px;
      height: 881px;
      background-image: url("@/assets/images/xiangxiong/xx-image-3-wind.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      z-index: 2;
      position: relative;
      left: -1800px;
      top: 290px;
    }
  }
  .third-screen{
    position: relative;
    margin-left: -2900px;
    margin-right: 600px;
    padding-right: 1000px;
    .palace{
      width: 1958px;
      height: 572px;
      background-color: rgba(255, 255, 255, 0.01);
      background-image: url("@/assets/images/xiangxiong/xx-multiply-line-art.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      mix-blend-mode: multiply;
      position: relative;
      top: 510px;
      left: 1200px;
      z-index: 4;
    }
    .wind{
      width: 2542px;
      height: 936px;
      background-image: url("@/assets/images/xiangxiong/xx-elements-wind-strong.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      mix-blend-mode: multiply;
      position: absolute;
      bottom: 0;
      z-index: 5;
      left: -100px;
    }
    .description-0{
      width: 680px;
      position: absolute;
      top: 200px;
      left: -300px;
    }
    .description-1{
      width: 850px;
      position: absolute;
      top: 400px;
      left: 500px;
      /* opacity: 0; */
    }
    .description-container{
      width: 920px;
      position: absolute;
       top: 380px;
      left: 3000px;
    }
    .description-2{
      margin-bottom:20px;
    }
    /* .description-2{
      width: 920px;
      white-space: normal;
      word-wrap: break-word;
      word-break: break-all;
      position: absolute;
      top: 480px;
      left: 2400px;
    }
    .description-3{
      width: 920px;
      white-space: normal;
      word-wrap: break-word;
      word-break: break-all;
      position: absolute;
      top: 480px;
      left: 2400px;
      opacity: 0;
    } */
    .xiangxiongPinTextNew{
      font-size: 33px;
      color: #534833;
      line-height: 54px;
      white-space: normal;
      word-wrap: break-word;
      word-break: break-all;
    }
  }
  .four-screen{
    margin-left: 140px;
    margin-right: 600px;
    .description{
      width: 790px;
      position: absolute;
      top: 500px;
      left: 1200px;
    }
    .cloud-1{
      width: 1561px;
      height: 669px;
      background-image: url("@/assets/images/xiangxiong/xx-cloud-1.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;
      bottom: -640px;
      left: -400px;
      z-index: 3;
      animation: cloudFloat 8s infinite alternate ease-in-out;
    }
    .cloud-2{
      width: 1561px;
      height: 669px;
      background-image: url("@/assets/images/xiangxiong/xx-cloud-2.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;
      top: -940px;
      left: 1400px;
      z-index: 3;
      animation: cloudFloat 8s infinite alternate ease-in-out;
      animation-delay: 3s;
    }
    .mountain-1{
      width: 1926px;
      height: 1056px;
      background-image: url("@/assets/images/xiangxiong/xx-bg-mountain-ink-1.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 420px;
      left: -260px;
      z-index: 2;
    }
    .mountain-2{
      width: 1888px;
      height: 1128px;
      background-image: url("@/assets/images/xiangxiong/xx-bg-mountain-ink-2.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 150px;
      left: 980px;
      z-index: 2;
    }
  }
  .five-screen{
    display: flex;
    .brocade{
      position: relative;
      display: flex;
      margin-right: 800px;
      .brocade-wrapper{
        position: relative;
        bottom: 270px;

        .brocade-img-1{
          width: 857px;
          height: 575px;
          background-image: url("@/assets/images/xiangxiong/xx-artifact-silk-lineart-brighter.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          position: absolute;
          bottom: 0;
          left: 0;
          animation: light-breath 2s infinite 1s;
        }
        .brocade-img-2{
          width: 645px;
          height: 391px;
          background-image: url("@/assets/images/xiangxiong/xx-artifact-silk.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          position: absolute;
          bottom: 0;
          left: -80px;
        }
      }
      .description{
        width: 650px;
        font-size: 25px;
        position: relative;
        top: 300px;
        left: 950px;
        opacity: 0;
      }
      .brocade-first{
        /* position: absolute; */
        /* opacity: 0; */
        /* top: 50px; */
      }
      .brocade-second{
        /* position: absolute; */
        /* opacity: 0; */
        /* top: 50px; */
      }
    }
    .mask{
      display: flex;
      position: relative;
      margin-left: 1800px;
      .mask-img-wrapper{
        position: relative;
        top: 330px;
        .mask-img-1{
          width: 577px;
          height: 541px;
          background-image: url("@/assets/images/xiangxiong/xx-artifact-goidmask-lineart-brighter.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          position: absolute;
          animation: light-breath 2s infinite;
          top: 0;
          left: 400px;
        }
        .mask-img-2{
          width: 379px;
          height: 344px;
          background-image: url("@/assets/images/xiangxiong/xx-artifact-goldmask.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          position: absolute;
          top: -20px;
          left: -150px;
        }
      }
      .description-1{
        position: absolute;
        bottom: 270px;
        left: -150px;
        width: 800px;
      }
      .description-2{
        width: 740px;
        top: 440px;
        left: 260px;
        position: absolute;
        opacity: 0;
      }
      .mountain-1{
        width: 1926px;
        height: 1056px;
        background-image: url("@/assets/images/xiangxiong/xx-bg-mountain-ink-3.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        left: 860px;
      }
      .cloud-1{
        width: 1561px;
        height: 670px;
        background-image: url("@/assets/images/xiangxiong/xx-cloud-3.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        top: -260px;
        left: 580px;
        animation: cloudFloat 8s infinite alternate ease-in-out;
        animation-delay: 2s;
      }
    }
    .popularization{
      position: relative;
      margin-left: 2000px;
      .description{
        width: 800px;
        font-size: 33px;
        line-height: 54px;
        position: absolute;
        top: 480px;
        opacity: 0;
      }
      .popularization-parallax{
        position: absolute;
        top: 0px;
        left: 50px;
        z-index: 100;
        width: auto;
        height: auto;
        pointer-events: auto;
      }
      .popularization-description{
        position: absolute;
        top: 488px;
        left: 850px;
      }
      .mountain-1{
        width: 3808px;
        height: 1652px;
        background-image: url("@/assets/images/xiangxiong/xx-bg-mountain-ink-4.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        top: -260px;
        left: -1500px;
      }
    }
  }
}
</style>
