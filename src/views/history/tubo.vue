<template>
  <div class="tubo">
    <div class="tubo-bg"></div>
    <div class="first-screen">
      <div class="moon" data-speed="1.2"></div>
      <div class="first-img-1"></div>
      <div class="first-img-2"></div>
      <p class="description tubo-ad">
        公元<span ref="tuboBcNumberRef">{{tuboBcNumber}}</span>世纪-<span>{{tuboAdNumber}}</span>世纪
      </p>
      <div class="description tubo-description">
        <p class="title">吐蕃王朝</p>
        <div class="descriptions">
          <p>吐蕃，在长安之西八千里，</p>
          <p>本汉西羌之地也……</p>
          <p>弄赞弱冠嗣位，性骁武，多英略，</p>
          <p>其邻国羊同及诸羌并宾伏之。</p>
          <p> ——《旧唐书》</p>
        </div>
      </div>
      <div class="first-img-bg">
        <div class="persons"></div>
        <div class="antelope-1"></div>
        <div class="antelope-2"></div>
      </div>
    </div>
    <div class="second-screen-wrapper">
      <div class="second-screen">
        <div class="map-bg"></div>
        <div class="map-bg2"></div>
        <div class="map"></div>
        <div class="description-1 description">吐蕃的历史发展大体上可以分成两个时期：初始期是藏文典籍中所谓的“小邦时期”，另外一个时期则是7—9世纪间吐蕃建立统治直到其瓦解消亡的时期。</div>
        <div class="description-2">公元629年（大唐贞观三年），即位吐蕃赞普的松赞干布，平定内部叛乱，并在之后数十年间征服毗、羊同（象雄）等部落，建立起强大的吐蕃王朝，完成了西藏高原的统一。</div>
      </div>
    </div>
    <div class="half-screen"></div>
    <div class="third-screen">
      <div class="cloud-1"></div>
      <div class="cloud-2"></div>
      <div class="cloud-3"></div>
      <div class="description description-1">
        <p>十五年，妻以宗女文成公主，</p>
        <p>诏江夏王道宗持节护送，</p>
        <p>筑馆河源王之国，</p>
        <p>弄赞率兵次柏海亲迎见道宗执婿礼恭甚，</p>
        <p>见中国服饰之美，缩缩媿沮。</p>
        <p class="_flex_end">——《新唐书》</p>
      </div>
      <div class="description description-2">
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
        <div class="procession-description">
          <div class="lamp-item-wrap" @click="openProcession">
            <div class="lamp-item-core"></div>
            <div class="lamp-item"></div>
          </div>
          <div class="popularization-wrapper">
            <div class="close" @click="closeProcession">x</div>
            <div class="title"><span>·</span>内容来自</div>
            <p class="popularization-content">《浸润与融通 : 西藏各民族交往、交流与交融的故事.古代卷》四川民族出版社 2022</p>
          </div>
        </div>
      </div>
      <div class="person-left"></div>
      <div class="person-right"></div>
    </div>
    <div class="five-screen">
      <div class="cloud-1"></div>
      <div class="cloud-2"></div>
      <!--          <div class="cloud-3"></div>-->
      <!--          <div class="cloud-4"></div>-->
      <div class="description">
        公元710年，唐中宗李显又以金城公主嫁予36任赞普赤德祖赞。两次和亲不仅促进汉藏文化深度交流，也成为稳定唐蕃关系的重要纽带。
      </div>
    </div>
    <div class="six-screen">
      <div class="cloud-1"></div>
      <div class="cloud-2"></div>
      <div class="cloud-3"></div>
      <div class="stele-img-1"></div>
      <div class="stele-description stele-description-tl description">
        <p>大唐文武孝德皇帝与大蕃神圣赞普，</p>
        <p>舅甥二主，商议社稷如一，</p>
        <p>结立大和盟约，永无渝替！</p>
        <p>神人俱以证知，世世代代，</p>
        <p>使其称赞。是以盟文节目，</p>
        <p>题之于碑也。</p>
        <p class="_flex_end">——唐蕃会盟碑</p>
      </div>
      <div class="stele-description stele-description-fixed">
        <p class="title">唐蕃会盟碑</p>
        <p>唐蕃会盟碑是长庆三年（公元823年），唐和吐蕃为纪念长庆元年双方成功会盟而设立的纪念碑，碑文使用汉藏两种文字铭刻。长庆会盟是唐与吐蕃数次会盟中最为成功的一次，开启了双方长期和平友好的</p>
      </div>
    </div>
    <div class="seven-screen">
      <div class="cloud-1"></div>
      <div class="cloud-2"></div>
      <div class="cloud-3"></div>
      <div class="description">
        吐蕃王朝存续二百余年，是青藏高原文明发展的关键阶段。它深刻影响藏地历史，成为汉藏交融、中华民族多元一体格局的重要见证。
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { pxToVw, pxToVh } from '../../utils/viewportUtils';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const tuboBcNumberRef = ref(null);
const tuboBcNumber = ref(9);
const tuboAdNumber = ref(9);


const initTuboNumberAnimation = () => {
  // 吐蕃数字滚动变化动画
  ScrollTrigger.create({
    trigger: tuboBcNumberRef.value,
    scroller: '.horizontal-scroll-container',
    horizontal: true,
    start: 'left right',
    end: 'left center',
    scrub: true,
    onUpdate: (self) => {
      if (self.progress >= 1) {
        tuboBcNumber.value = '7';
        tuboAdNumber.value = '9';
      } else if (self.isActive) {
        tuboBcNumber.value = (Math.floor(Math.random() * 9) + 1).toString();
        tuboAdNumber.value = (Math.floor(Math.random() * 9) + 1).toString();
      }
    },
  });

  // 吐蕃first-img-bg pin动画
  ScrollTrigger.create({
    trigger: '.tubo .first-screen .first-img-bg',
    scroller: '.horizontal-scroll-container',
    horizontal: true,
    start: 'left+=760 left',
    end: '+=3500',
    pin: true,
    pinSpacing: false,
    pinType: "transform",
    anticipatePin: 1,
    invalidateOnRefresh: true,
    scrub: 2,
  });


  // 吐蕃地图文本切换动画
  const tuboMapTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: '.tubo .second-screen-wrapper .second-screen',
      scroller: '.horizontal-scroll-container',
      horizontal: true,
      start: 'left left',
      end: `+=2000`,
      pin: true,
      pinSpacing: false,
      pinType: "transform",
      anticipatePin: 1,
      invalidateOnRefresh: true,
      scrub: 4,
    }
  });
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
  tuboMapTimeLine.to('.tubo .second-screen .description-1', { opacity: 1, duration: 0.2 }, 0)
      .to('.tubo .second-screen .description-1', { opacity: 0, duration: 0.3 }, '+=0')
      .to('.tubo .second-screen .map-bg2', { opacity: 1, duration: 0.1 }, '+=0')
      .to('.tubo .second-screen .description-2', { opacity: 1, duration: 0.3 }, '-=0.1')
      .to('.tubo .second-screen .map', { opacity: 1, duration: 0.3 }, '-=0.2')

  // 碑帖动画
  const steleTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: '.tubo .six-screen',
      scroller: '.horizontal-scroll-container',
      horizontal: true,
      start: 'center+=130 center',
      end: '+=2000',
      pin: true,
      pinSpacing: false,
      pinType: "transform",
      anticipatePin: 1,
      invalidateOnRefresh: true,
      scrub: 4,
    }
  })
  // pin住背景
  ScrollTrigger.create({
    trigger: '.tubo .six-screen',
    scroller: '.horizontal-scroll-container',
    horizontal: true,
    start: 'center+=130 center',
    end: '+=2000',
    pin: '.tubo-bg',
    pinSpacing: false,
    pinType: "transform",
    anticipatePin: 1,
    invalidateOnRefresh: true,
    scrub: 4,
  });
  steleTimeLine.to('.tubo .six-screen .stele-description-tl', { opacity: 0, duration: 0.1 }, '+=0.1')
      .to('.tubo .six-screen .stele-img-1', { opacity: 1, duration: 0.1 }, '+=0')
      .to('.tubo .six-screen .stele-img-1', { x: pxToVw(-800), duration: 0.1 }, '-=0.05')
      .to('.tubo .six-screen .stele-description-fixed', { opacity: 1, duration: 0.1 },'-=0.05')
};
onMounted(()=>{
  initTuboNumberAnimation();
})

/**
 * 打开步辇图弹窗
 */
const openProcession = () => {
  gsap.to('.procession-description .popularization-wrapper', {
    x: pxToVw(-50),
    scale: 1,
    opacity: 1,
    duration: 0.5
  });
  const tl = gsap.timeline();
  tl.to('.procession-description .lamp-item-core', { scale: 0.6, duration: 0.1 })
      .to('.procession-description .lamp-item-core', { scale: 1, duration: 0.1 });
};

/**
 * 关闭步辇图弹窗
 */
const closeProcession = () => {
  gsap.to('.procession-description .popularization-wrapper', {
    x: pxToVw(+50),
    scale: 0.5,
    opacity: 0,
    duration: 0.5
  });
};
</script>
<style>
.tubo .first-screen .first-img-bg,
.tubo {
  @extend .pin-trigger; /* 继承pin基础样式 */
}
.tubo{
  display: flex;
  position: relative;
  width: 21930px;
  height: 1080px;
  .tubo-bg{
    width: 20930px;
    height: 1080px;
    background-image: url("@/assets/images/tubo/tb-bg-tangdynasty.png");
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
    width: 7900px;
    height: 1080px;
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
      width: 4923px;
      height: 166px;
      background-image: url("@/assets/images/tubo/tb-desert.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0px;
      left: 0;
      z-index: 3;
      will-change: transform;
      transform: translateZ(0);
      .persons{
        width: 1920px;
        height: 632px;
        background-image: url("@/assets/images/tubo/tb-gif-camelcaravan.gif");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -110px;
        left: 34%;
        transform: translateX(-50%);
        z-index: 3;
      }
      .antelope-1{
        width: 1158px;
        height: 1008px;
        background-image: url("@/assets/images/tubo/tb-gif-deer.gif");
        background-size: cover;
        transform: scale(0.6);
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -220px;
        right: 200px;
        z-index: 3;
      }
      .antelope-2{
        width: 1158px;
        height: 1008px;
        background-image: url("@/assets/images/tubo/tb-gif-deer.gif");
        background-size: cover;
        transform: scale(0.6) scaleX(-1);
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -220px;
        right: -100px;
        z-index: 3;
      }
    }
    .tubo-ad{
      font-size: 90px;
      font-family: 'EarlySummerSerif-Bold';
      color: #f1ddb6;
      position: absolute;
      top: 410px;
      left: 4400px
    }
    .tubo-description{
      position: absolute;
      top: 280px;
      left: 6100px;
      writing-mode: vertical-rl;
      font-size: 33px;
      line-height: 90px;
      font-family: 'EarlySummerSerif-Bold';
      color: #f1ddb6;
      .title{
        font-size: 90px;
        font-family: 'EarlySummerSerif-Bold';
        position: absolute;
        right: 660px;
        top: -180px;
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
    overflow: hidden;
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
    //right: 140px;
      right: 50px;
      transform: translateY(-50%);
      opacity: 0;
    }
    .description-1{
      width: 844px;
      font-size: 33px;
      line-height: 54px;
      color: #f1ddb6;
      position: absolute;
      left: 170px;
      top: 420px;
      opacity: 0;
      word-break: break-all;
      white-space: normal;
      word-wrap: break-word;
    //top: 420px;
    }
    .description-2{
      width: 844px;
      font-size: 33px;
      line-height: 54px;
      color: #f1ddb6;
      position: absolute;
      left: 170px;
      top: 420px;
      opacity: 0;
      word-break: break-all;
      white-space: normal;
      word-wrap: break-word;
    }
  }
  .half-screen{
    width: 3200px;
    height: 1080px;
  //background: #e75252;
    z-index: 9;
  }
  .third-screen{
    width: 2000px;
    height: 1080px;
    position: relative;
    .description-1{
      writing-mode: vertical-rl;
      font-size: 33px;
      line-height: 90px;
      font-family: 'EarlySummerSerif-Bold';
      color: #f1ddb6;
      position: absolute;
      top: 280px;
      left: 300px;
    }
    .description-2{
      font-size: 33px;
      line-height: 54px;
      color: #f1ddb6;
      position: absolute;
      top: 460px;
      left: 1200px;
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
      left: 0px;
      animation: cloudFloat 5s infinite alternate ease-in-out;
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
      left: 650px;
      animation: cloudFloat 5s infinite alternate ease-in-out;
      animation-delay: 2s;
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
      right: -400px;
      animation: cloudFloat 5s infinite alternate ease-in-out;
      animation-delay: 4s;
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
      left: 320px;
      z-index: 5;
    }
    .procession-description{
      position: relative;
      top: 150px;
      right: -280px;
    }
    .popularization-wrapper{
      position: absolute;
      left: -420px;
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
      bottom: -260px;
      left: -200px;
    }
    .person-right{
      width: 1000px;
      height: 940px;
      background-image: url("@/assets/images/tubo/tb-gif-buniantu-right.gif");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: -50px;
      right: -600px;
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
      left: 0px;
      animation: cloudFloat 5s infinite alternate ease-in-out;
    }
    .description{
      font-size: 33px;
      color: #f1ddb6;
      line-height: 54px;
      width: 760px;
      position: absolute;
      top: 470px;
      left: 1250px;
    }
  }
  .six-screen{
    width: 1500px;
    height: 1080px;
    position: relative;
    display: flex;
    margin-right: 2000px;
    .cloud-1{
      width: 802px;
      height: 796px;
      background-image: url("@/assets/images/tubo/tb-cloud-7.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: -180px;
      left: -100px;
      animation: cloudFloat 8s infinite alternate ease-in-out;
      animation-delay: 3s;
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
      left: 0px;
      animation: cloudFloat 8s infinite alternate ease-in-out;
      animation-delay: 1s;
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
      left: -500px;
      animation: cloudFloat 8s infinite alternate ease-in-out;
      animation-delay: 2s;
    }
    .stele-img-1{
      width: 248px;
      height: 667px;
      background-image: url("@/assets/images/tubo/tb-artifact-tbhmb-large.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 5;
      top: 50%;
      left: 900px;
      transform: translateY(-50%);
      opacity: 0;
    }
    .stele-description{
      font-size: 25px;
      color: #f1ddb6;
      line-height: 50px;
      width: 670px;
      position: absolute;
      top: 440px;
      left: 460px;
      word-break: break-all;
      white-space: normal;
      word-wrap: break-word;
      .title{
        font-size: 33px;
        margin-bottom: 10px;
      }
      opacity: 0;
    }
    .stele-description-tl{
      writing-mode: vertical-rl;
    }
  }
  .seven-screen{
    width: 850px;
    height: 1080px;
    position: relative;
    display: flex;
    margin-left: 500px;
    .description{
      font-size: 33px;
      color: #f1ddb6;
      line-height: 50px;
      width: 850px;
      position: absolute;
      font-weight: bold;
      top: 470px;
      left: 0;
    }
    .cloud-1{
      width: 630px;
      height: 517px;
      background-image: url("@/assets/images/tubo/tb-cloud-8.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: -30px;
      left: -420px;
      animation: cloudSmallFloat 8s infinite alternate ease-in-out;
      animation-delay: 3s;
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
      right: -240px;
      animation: cloudSmallFloat 8s infinite alternate ease-in-out;
      animation-delay: 5s;
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
      top: 620px;
      right: -100px;
      animation: cloudSmallFloat 8s infinite alternate ease-in-out;
      animation-delay: 1s;
      z-index: 3;
    }
  }
}
</style>