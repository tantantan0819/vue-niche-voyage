<template>
  <div class="tubo">
    <div class="tubo-bg"></div>
    <div class="first-screen">
      <div class="red-cloud-container">
        <div class="mask-red-cloud"></div>
        <div class="red-cloud-1"></div>
        <div class="red-cloud-2"></div>
        <div class="red-cloud-3"></div>
      </div>
      <div class="page-point"  id="page-tubo-dynasty"></div>
      <!-- <div class="moon" data-speed="1.2"></div>
      <div class="first-img-1"></div>
      <div class="first-img-2"></div> -->
      <p
        class="description tubo-ad"
        data-parallax="true"
        data-parallax-axis="x"
        data-parallax-from="400"
        data-parallax-to="-400"
        data-parallax-speed="1.2"
        data-parallax-center-lock="true">
        公元<span class="change-number" ref="number7Ref">{{ displayNumber7 }}</span>世纪-<span class="change-number" ref="number9Ref">{{ displayNumber9 }}</span>世纪
      </p>
      <div 
        class="description tubo-description"
        data-parallax="true"
        data-parallax-axis="x"
        data-parallax-from="300"
        data-parallax-to="-300"
        data-parallax-speed="1.2"
        data-parallax-center-lock="true">
        <p class="title">吐蕃王朝</p>
        <div class="descriptions">
          <p>吐蕃，在长安之西八千里，</p>
          <p>本汉西羌之地也……</p>
          <p>弄赞弱冠嗣位，性骁武，多英略，</p>
          <p>其邻国羊同及诸羌并宾伏之。</p>
          <p class="last-description"> ——《旧唐书》</p>
        </div>
      </div>
      <div 
        class="deer-img-container"
        data-parallax="true"
        data-parallax-axis="x"
        data-parallax-from="800"
        data-parallax-to="-800"
        data-parallax-speed="1.2"
        data-parallax-center-lock="true">
        <div class="deer-img-1"></div>
        <div class="deer-img-2"></div>
      </div>
      <div class="first-img-bg">
        <div 
          class="persons"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="600"
          data-parallax-to="-600"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true"></div>
      </div>
    </div>
    <div class="second-screen-wrapper">
      <div class="second-screen">
        <div class="map-bg"></div>
        <div class="map-bg2"></div>
        <div 
          class="map"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="600"
          data-parallax-to="-600"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true"></div>
        <div 
          class="description-container description-new"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="300"
          data-parallax-to="-300"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true">
            <div class="description-1 description">吐蕃的历史发展大体上可以分成两个时期：初始期是藏文典籍中所谓的“小邦时期”，另外一个时期则是7—9世纪间吐蕃建立统治直到其瓦解消亡的时期。</div>
            <div class="description-2">公元629年（大唐贞观三年），即位吐蕃赞普的松赞干布，平定内部叛乱，并在之后数十年间征服毗、羊同（象雄）等部落，建立起强大的吐蕃王朝，完成了西藏高原的统一。</div>
            <div class="description-3">为推动发展，松赞干布派大臣吞弥·桑布扎赴天竺（印度）学习，创制统一吐蕃文字（藏文前身），结束了“无文字，刻木结绳为约”的历史，并开始与唐王朝展开深度交流。</div>
        </div>
      </div>
    </div>
    <!-- <div class="half-screen"></div> -->
    <div 
      class="third-screen"
      data-parallax="true"
      data-parallax-axis="x"
      data-parallax-from="300"
      data-parallax-to="-300"
      data-parallax-speed="1.2"
      data-parallax-center-lock="true"
      >
      <div class="cloud-1"></div>
      <div class="cloud-2"></div>
      <div class="cloud-3"></div>
      <div 
        class="description description-1"
        data-parallax="true"
        data-parallax-axis="x"
        data-parallax-from="200"
        data-parallax-to="-200"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">
        <p>十五年，妻以宗女文成公主，</p>
        <p>诏江夏王道宗持节护送，</p>
        <p>筑馆河源王之国，</p>
        <p>弄赞率兵次柏海亲迎见道宗执婿礼恭甚，</p>
        <p>见中国服饰之美，缩缩媿沮。</p>
        <p class="_flex_end">——《新唐书》</p>
      </div>
      <div 
        class="description description-2"
        data-parallax="true"
        data-parallax-axis="x"
        data-parallax-from="200"
        data-parallax-to="-200"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">
        <p>大唐贞观十五年（公元641年），松赞干布经过数次请婚，唐太宗将文成公主嫁往吐蕃。文成公主带去中原的农耕、历法、医药等知识，推动了高原社会发展。</p>
      </div>
    </div>
    <div class="four-screen">
      <div class="description description-1">
        <div class="description-wrapper">
          <p>《步辇图》</p>
          <p>唐朝著名画家、政治家</p>
          <p>阎立本所绘，</p>
          <p>现藏于故宫博物院。</p>
          <p>画面描绘了唐蕃关系史上</p>
          <p>的重要瞬间：</p>
          <p>贞观十四年，</p>
          <p>普松赞干布派使者禄东赞到</p>
          <p>长安通聘朝见唐太宗，</p>
          <p>太宗端坐在步辇上，</p>
          <p>四周有宫女执扇、抬辇</p>
          <p>簇拥而行，左边三人</p>
          <p>从右向左依次为</p>
          <p>鸿胪寺官员、吐蕃使臣</p>
          <p>禄东赞、鸿胪寺译员。</p>
        </div>
        <annotation-dot>
          <p class="popularization-content">《浸润与融通 : 西藏各民族交往、交流与交融的故事.古代卷》四川民族出版社 2022</p>
        </annotation-dot>
      </div>
      <div 
          class="person-left"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="500"
          data-parallax-to="-500"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true"></div>
      <div 
          class="person-right"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="200"
          data-parallax-to="-200"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"></div>
    </div>
    <div class="five-screen">
      <div class="cloud-1"></div>
      <!-- <div class="cloud-2"></div> -->
      <!--          <div class="cloud-3"></div>-->
      <!--          <div class="cloud-4"></div>-->
      <div 
        class="description"
        data-parallax="true"
        data-parallax-axis="x"
        data-parallax-from="400"
        data-parallax-to="-400"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">
        公元710年，唐中宗李显又以金城公主嫁予36任赞普赤德祖赞。两次和亲不仅促进汉藏文化深度交流，也成为稳定唐蕃关系的重要纽带。
      </div>
    </div>
    <div class="six-screen">
      <div class="cloud-1"></div>
      <div class="cloud-2"></div>
      <div class="cloud-3"></div>
      <div 
          class="stele-img-container"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="800"
          data-parallax-to="-800"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true">
        <div class="stele-img-1"></div>
        <div class="stele-img-2"></div>
      </div>
      <div 
        class="stele-description stele-description-tl description"
        data-parallax="true"
        data-parallax-axis="x"
        data-parallax-from="300"
        data-parallax-to="-300"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">
        <p>大唐文武孝德皇帝与大蕃神圣赞普，</p>
        <p>舅甥二主，商议社稷如一，</p>
        <p>结立大和盟约，永无渝替！</p>
        <p>神人俱以证知，世世代代，使其称赞。</p>
        <p>是以盟文节目，题之于碑也。</p>
        <p class="_flex_end">——唐蕃会盟碑</p>
      </div>
      <div 
          class="stele-description stele-description-fixed"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="500"
          data-parallax-to="-500"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true">
        <p class="title">唐蕃会盟碑</p>
        <p>唐蕃会盟碑是长庆三年（公元823年），唐和吐蕃为纪念长庆元年双方成功会盟而设立的纪念碑，碑文使用汉藏两种文字铭刻。长庆会盟是唐与吐蕃数次会盟中最为成功的一次，开启了双方长期和平友好的局面。</p>
        <dot-popover class="dotPopover" title="内容来自" content="《物里中华：一文一物话西藏》四川民族出版社 2025"></dot-popover>
      </div>
    </div>
    <div class="seven-screen">
      <div 
        class="cloud-1"
        data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="300"
          data-parallax-to="-300"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true"></div>
      <div class="cloud-2"></div>
      <div class="cloud-3"></div>
      <div 
          class="description"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="300"
          data-parallax-to="-300"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true">
        吐蕃王朝存续二百余年，是青藏高原文明发展的关键阶段。它深刻影响藏地历史，成为汉藏交融、中华民族多元一体格局的重要见证。
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
import { useAnimateNumber } from '@/utils/animateNumber';
import DotPopover from '../../../../components/dotPopover.vue';

gsap.registerPlugin(ScrollTrigger);

// 数字动画 refs
const number7Ref = ref(null)
const number9Ref = ref(null)

// 数字动画
const { 
  displayValue: displayNumber7, 
  cleanup: cleanupNumber7
} = useAnimateNumber({
  elementRef: number7Ref,
  targetValue: 7,
  startValue: 0,
  duration: 1,
  ease: 'power2.out'
})

const { 
  displayValue: displayNumber9, 
  cleanup: cleanupNumber9
} = useAnimateNumber({
  elementRef: number9Ref,
  targetValue: 9,
  startValue: 0,
  duration: 1,
  ease: 'power2.out'
})


const initTuboNumberAnimation = () => {

  // 吐蕃first-img-bg pin动画
  // ScrollTrigger.create({
  //   trigger: '.tubo .first-screen .first-img-bg',
  //   scroller: '.horizontal-scroll-container',
  //   horizontal: true,
  //   start: 'left+=760 left',
  //   end: '+=3500',
  //   pin: true,
  //   pinSpacing: false,
  //   pinType: "transform",
  //   anticipatePin: 1,
  //   invalidateOnRefresh: true,
  //   scrub: 2,
  // });


  // 吐蕃地图文本切换动画
  // const tuboMapTimeLine = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.tubo .second-screen-wrapper .second-screen',
  //     scroller: '.horizontal-scroll-container',
  //     horizontal: true,
  //     start: 'left left',
  //     end: `+=2000`,
  //     pin: true,
  //     pinSpacing: false,
  //     pinType: "transform",
  //     anticipatePin: 1,
  //     invalidateOnRefresh: true,
  //     scrub: 4,
  //   }
  // });
  // pin住背景
  ScrollTrigger.create({
    trigger: '.tubo .second-screen-wrapper .second-screen',
    scroller: '.horizontal-scroll-container',
    horizontal: true,
    start: 'left left',
    end: `+=2000`,
    pin: '.tubo-bg',
    pinSpacing: false,
    pinType: "transform",
    anticipatePin: 1,
    invalidateOnRefresh: true,
    scrub: 4,
  });
  // tuboMapTimeLine.to('.tubo .second-screen .description-1', { opacity: 1, duration: 0.2 }, 0)
  //     .to('.tubo .second-screen .description-1', { opacity: 0, duration: 0.3 }, '+=0')
  //     .to('.tubo .second-screen .map-bg2', { opacity: 1, duration: 0.1 }, '+=0')
  //     .to('.tubo .second-screen .description-2', { opacity: 1, duration: 0.3 }, '-=0.1')
  //     .to('.tubo .second-screen .map', { opacity: 1, duration: 0.3 }, '-=0.2')
  //
  // // 碑帖动画
  // const steleTimeLine = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.tubo .six-screen',
  //     scroller: '.horizontal-scroll-container',
  //     horizontal: true,
  //     start: 'center+=130 center',
  //     end: '+=2000',
  //     pin: true,
  //     pinSpacing: false,
  //     pinType: "transform",
  //     anticipatePin: 1,
  //     invalidateOnRefresh: true,
  //     scrub: 4,
  //   }
  // })
  // // pin住背景
  // ScrollTrigger.create({
  //   trigger: '.tubo .six-screen',
  //   scroller: '.horizontal-scroll-container',
  //   horizontal: true,
  //   start: 'center+=130 center',
  //   end: '+=2000',
  //   pin: '.tubo-bg',
  //   pinSpacing: false,
  //   pinType: "transform",
  //   anticipatePin: 1,
  //   invalidateOnRefresh: true,
  //   scrub: 4,
  // });
  // steleTimeLine.to('.tubo .six-screen .stele-description-tl', { opacity: 0, duration: 0.1 }, '+=0.1')
  //     .to('.tubo .six-screen .stele-img-1', { opacity: 1, duration: 0.1 }, '+=0')
  //     .to('.tubo .six-screen .stele-img-1', { x: pxToVw(-800), duration: 0.1 }, '-=0.05')
  //     .to('.tubo .six-screen .stele-description-fixed', { opacity: 1, duration: 0.1 },'-=0.05')
};
onMounted(async ()=>{
  // 等待DOM完全渲染
  // await nextTick();
  // initTuboNumberAnimation();
})

onUnmounted(() => {
  cleanupNumber7()
  cleanupNumber9()
})

</script>
<style>
.tubo .first-screen .first-img-bg,
.tubo {
  @extend .pin-trigger; /* 继承pin基础样式 */
}
.tubo{
  display: flex;
  position: relative;
   width: 18856px;
  /* width: 21930px; */
  height: 1080px;
  .tubo-bg{
    width: 18856px;
    /* width: 20930px; */
    height: 1080px;
    background-image: url("@/assets/images/tubo/tb-bg.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
  }
  .first-screen{
    display: flex;
    position: relative;
    /* width: 7900px; */
    width: 5760px;
    height: 1080px;
    .page-point{
      left: 2450px;
    }
    .mask-red-cloud{
      position: absolute;
      left: 600px;
      bottom: 20px;
      width: 1924px;
      height: 330px;
      background-image: url("@/assets/images/tubo/tb-mask-redcloud.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .red-cloud-1{
      position: absolute;
      left: 500px;
      bottom: 360px;
      width: 1804px;
      height: 110px;
      background-image: url("@/assets/images/tubo/tb-redcloud-1.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .red-cloud-2{
      position: absolute;
      left: 900px;
      bottom: 280px;
      width: 1962px;
      height: 118px;
      background-image: url("@/assets/images/tubo/tb-redcloud-2.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .red-cloud-3{
      position: absolute;
      left: 1000px;
      bottom: 210px;
      width: 1511px;
      height: 60px;
      background-image: url("@/assets/images/tubo/tb-redcloud-3.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .first-img-1{
      width: 8535px;
      height: 1080px;
      background-image: url("@/assets/images/tubo/tb-bg-silkroad.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;
    }
    .first-img-2{
      width: 1678px;
      height: 453px;
      background-image: url("@/assets/images/tubo/tb-foreground-moon.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      left: 1900px;
      z-index: 3;
    }
    .moon{
      width: 846px;
      height: 579px;
      background-image: url("@/assets/images/tubo/tb-moon.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 200px;
      left: 2500px;
      z-index: 2;
    }
    .first-img-bg{
      width: 5015px;
      height: 166px;
      background-image: url("@/assets/images/tubo/tb-desert.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 90px;
      left: 1700px;
      z-index: 3;
      will-change: transform;
      transform: translateZ(0);
      .persons{
        width: 1912px;
        height: 538px;
        background-image: url("@/assets/images/tubo/tb-gif-camelcaravan.gif");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -50px;
        left: 34%;
        transform: translateX(-50%);
        z-index: 3;
      }
    }
    .tubo-ad{
      font-size: 90px;
      font-family: 'EarlySummerSerif-Bold';
      color: #f1ddb6;
      position: absolute;
      top: 390px;
      left: 3200px;
      width: 1000px;
    }
    .tubo-description{
      position: absolute;
      top: 260px;
      left: 4800px;
      writing-mode: vertical-rl;
      font-size: 33px;
      line-height: 90px;
      color: #f1ddb6;
      .title{
        font-size: 90px;
        font-family: 'EarlySummerSerif-Bold';
        position: absolute;
        right: 660px;
        top: -200px;
      }
      .descriptions p{
         font-family: 'EarlySummerSerif-Bold';
      }
      .last-description{
        text-align: right;
      }
    }
    .deer-img-container{
      position: absolute;
      right: -720px;
      bottom: -130px;
      z-index: 999;
      .deer-img-1{
        width: 1158px;
        height: 1008px;
        background-image: url("@/assets/images/tubo/tb-gif-deer.gif");
        background-size: cover;
        transform: scale(0.6);
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0px;
        right: 330px;
        z-index: 3;
      }
      .deer-img-2{
        width: 1158px;
        height: 1008px;
        background-image: url("@/assets/images/tubo/tb-gif-deer.gif");
        background-size: cover;
        transform: scale(0.6) scaleX(-1);
        background-position: center center;
        background-repeat: no-repeat;
        /* position: relative; */
        /* bottom: -220px;
        right: -100px; */
        z-index: 3;
      }
    }
    
  }
  .second-screen{
    width: 1920px;
    height: 1080px;
    position: relative;
    top: 0;
    left: 400px;
    z-index: 8;
    /* overflow: hidden; */
    .map-bg{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1920px;
      height: 1080px;
      background: url("@/assets/images/tubo/tb-bg-map.png") center/cover no-repeat;
    }
    .map-bg2{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1920px;
      height: 1080px;
      background: url("@/assets/images/tubo/tb-bg-mapline.png") center/cover no-repeat;
      opacity: 0;
    }
    .map{
      width: 804px;
      height: 527px;
      background-image: url("@/assets/images/tubo/tb-minimap.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 50%;
      right: 50px;
      transform: translateY(-60%);
      z-index: 999;
    }
    .description-container{
      position: absolute;
      left: 300px;
      top: 220px;
      opacity: 0;
    }
    .description-1{
      width: 860px;
      font-size: 33px;
      line-height: 54px;
      color: #f1ddb6;
      word-break: break-all;
      white-space: normal;
      word-wrap: break-word;
    }
    .description-2{
      width: 860px;
      font-size: 33px;
      line-height: 54px;
      color: #f1ddb6;
      word-break: break-all;
      white-space: normal;
      word-wrap: break-word;
    }
     .description-3{
      width: 860px;
      font-size: 33px;
      line-height: 54px;
      color: #f1ddb6;
      word-break: break-all;
      white-space: normal;
      word-wrap: break-word;
      margin-top: 40px;
    }
  }
  .half-screen{
    width: 3200px;
    height: 1080px;
  /* background: #e75252; */
    z-index: 9;
  }
  .third-screen{
    width: 2200px;
    height: 1080px;
    position: relative;
    .description-1{
      writing-mode: vertical-rl;
      font-size: 33px;
      line-height: 90px;
      color: #f1ddb6;
      position: absolute;
      top: 280px;
      left: 1100px;
      p{
         font-family: 'EarlySummerSerif-Bold';
      }
      ._flex_end{
        text-align: right;
      }
    }
    .description-2{
      font-size: 33px;
      line-height: 54px;
      color: #f1ddb6;
      position: absolute;
      top: 460px;
      left: 1700px;
      width: 860px;
    }
    .cloud-1{
      width: 1042px;
      height: 478px;
      background-image: url("@/assets/images/tubo/tb-cloud-1.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 0px;
      left: 700px;
      /* animation: cloudFloat 5s infinite alternate ease-in-out; */
    }
    .cloud-2{
      width: 665px;
      height: 514px;
      background-image: url("@/assets/images/tubo/tb-cloud-2.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0px;
      left: 1250px;
      /* animation: cloudFloat 5s infinite alternate ease-in-out;
      animation-delay: 2s; */
    }
    .cloud-3{
      width: 608px;
      height: 475px;
      background-image: url("@/assets/images/tubo/tb-cloud-3.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 0px;
      right: -700px;
      /* animation: cloudFloat 5s infinite alternate ease-in-out;
      animation-delay: 4s; */
    }
  }
  .four-screen{
    position: relative;
    margin-left: 370px;
    width: 1120px;
    height: 1080px;
    .description-wrapper{
      writing-mode: vertical-rl;
      font-size: 25px;
      line-height: 60px;
      color: #f1ddb6;
      position: absolute;
      top: 130px;
      left: 820px;
      z-index: 5;
    }
    .procession-description{
      position: relative;
      top: 150px;
      right: -800px;
    }
    .popularization-wrapper{
      position: absolute;
      left: -500px;
      top: 50px;
      .title{
        border-color: #967c58;
      }
      .popularization-content{
        width: 400px;
      }
    }
    .person-left{
      width: 960px;
      height: 960px;
      background-image: url("@/assets/images/tubo/tb-gif-buniantu-left.gif");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: -120px;
      left: 500px;
    }
    .person-right{
      width: 900px;
      height: 840px;
      background-image: url("@/assets/images/tubo/tb-gif-buniantu-right.gif");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 60px;
      right: -1120px;
      z-index: 2;
    }
  }
  .five-screen{
    width: 3000px;
    position: relative;
    height: 1080px;
    .cloud-1{
      width: 1918px;
      height: 1080px;
      background-image: url("@/assets/images/tubo/tb-cloud-4.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 0px;
      left: 1800px;
      /* animation: cloudFloat 5s infinite alternate ease-in-out; */
    }
    .description{
      font-size: 33px;
      color: #f1ddb6;
      line-height: 54px;
      width: 760px;
      position: absolute;
      top: 420px;
      left: 1300px;
    }
  }
  .six-screen{
    width:3500px;
    height: 1080px;
    position: relative;
    display: flex;
    /* margin-right: 2000px; */
    .cloud-1{
      width: 802px;
      height: 796px;
      background-image: url("@/assets/images/tubo/tb-cloud-7.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: -180px;
      left: 1400px;
      /* animation: cloudFloat 8s infinite alternate ease-in-out;
      animation-delay: 3s; */
      z-index: 3;
    }
    .cloud-2{
      width: 1141px;
      height: 722px;
      background-image: url("@/assets/images/tubo/tb-cloud-6.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0px;
      left: 1050px;
      /* animation: cloudFloat 8s infinite alternate ease-in-out;
      animation-delay: 1s; */
    }
    .cloud-3{
      width: 921px;
      height: 739px;
      background-image: url("@/assets/images/tubo/tb-cloud-5.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: -100px;
      left: 500px;
      /* animation: cloudFloat 8s infinite alternate ease-in-out;
      animation-delay: 2s; */
    }
    .stele-img-container{
      position: absolute;
      z-index: 5;
      top: 50%;
      left: 2100px;
      transform: translateY(-50%);
    }
    .stele-img-1{
      width: 188px;
      height: 667px;
      background-image: url("@/assets/images/tubo/tb-artifact-tbhmb-1.jpg");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .stele-img-2{
      position: absolute;
      top: 0;
      left: 240px;
      width: 108px;
      height: 667px;
      background-image: url("@/assets/images/tubo/tb-artifact-tbhmb-2.jpg");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .stele-description{
      font-size: 25px;
      color: #f1ddb6;
      line-height: 50px;
      width: 670px;
      position: absolute;
      top: 140px;
      left: 100px;
      word-break: break-all;
      white-space: normal;
      word-wrap: break-word;
      .title{
        font-family: 'Alibaba-PuHuiTi-Light' !important;
        font-size: 33px;
        margin-bottom: 10px;
      }
    
      ._flex_end{
        text-align: right;
      }
      /* opacity: 0; */
    }
    .stele-description-tl{
      writing-mode: vertical-rl;
        p{
        font-size: 30px;
        margin-right: 30px;
        font-family: 'EarlySummerSerif-Bold';
      }
    }
    .stele-description-fixed{
      position: absolute;
      top: 400px;
      left: 2200px;
      width: 800px;
      font-family: 'Alibaba-PuHuiTi-Light' !important;
    }
    .dotPopover{
      top: 20px;
    }
  }
  .seven-screen{
    flex: 1;
    /* width: 1050px; */
    height: 1080px;
    position: relative;
    display: flex;
    /* margin-left: 500px; */
    .description{
      font-size: 33px;
      color: #f1ddb6;
      line-height: 50px;
      width: 850px;
      position: absolute;
      font-weight: bold;
      top: 420px;
      left: -200px;
    }
    .cloud-1{
      width: 630px;
      height: 517px;
      background-image: url("@/assets/images/tubo/tb-cloud-8.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 100px;
      left: -720px;
      /* animation: cloudSmallFloat 8s infinite alternate ease-in-out;
      animation-delay: 3s; */
      z-index: 3;
    }
    .cloud-2{
      width: 314px;
      height: 365px;
      background-image: url("@/assets/images/tubo/tb-cloud-9.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 290px;
      right: 40px;
      /* animation: cloudSmallFloat 8s infinite alternate ease-in-out;
      animation-delay: 5s; */
      z-index: 3;
    }
    .cloud-3{
      width: 248px;
      height: 164px;
      background-image: url("@/assets/images/tubo/tb-cloud-10.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 630px;
      right: 220px;
      /* animation: cloudSmallFloat 8s infinite alternate ease-in-out;
      animation-delay: 1s; */
      z-index: 3;
    }
  }
}
</style>