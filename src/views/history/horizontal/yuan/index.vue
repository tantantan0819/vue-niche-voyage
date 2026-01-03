<template>
    <div class="yuan" ref="container">
      <div class="first-screen">
        <div
            id="page-unification"
          class="cloud-1"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="1200"
          data-parallax-to="-1200"
          data-parallax-speed="2"
          data-parallax-center-lock="true"
        ></div>
        <div
          class="cloud-2"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="800"
          data-parallax-to="-800"
          data-parallax-speed="2"
          data-parallax-center-lock="true"
        ></div>
        <div
          class="title"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.5"
          data-parallax-center-lock="true"
        >公元<span class="change-number" ref="number1247Ref">{{ displayNumber1247 }}</span>年</div>
      </div>
      <div class="second-screen">
        <div class="description title">盟启一统</div>
        <div class="description-wrapper">
          <div 
            class="cloud-1"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="600"
            data-parallax-to="-600"
            data-parallax-speed="1.5"
            data-parallax-center-lock="true"
          ></div>
          <div 
            class="person"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="400"
            data-parallax-to="-400"
            data-parallax-speed="1.5"
            data-parallax-center-lock="true"
          ></div>
          <div class="description yuan-descript-1">
            <p>吐蕃王朝瓦解后，</p>
            <p>高原经历了一个从赞普王系割据到佛教教派竞立的分治过程，</p>
            <p>直到13世纪，北方强势崛起的蒙古将目光对准这里。</p>
          </div>
          <div class="description yuan-descript-1">
            <p>公元1247年，一次重要的会谈在河西走廊上举行了。</p>
            <p>蒙古阔端在凉州（今甘肃武威）与萨迦班智达举行会盟，史称“凉州会盟”。</p>
          </div>
        </div>
      </div>
      <div class="third-screen">
          <div 
            class="description yuan-descript-1"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="50"
            data-parallax-to="-800"
            data-parallax-speed="1.5"
            data-parallax-center-lock="true"
          >
            这次会盟总体过程很顺利。会后，萨迦班智达向藏区各派发布了著名的
            《萨迦班智达致蕃人书》，为此后西藏纳入元朝的版图奠定了坚实基础。这是西藏地方与祖国关系发展史上具有里程碑意义的重大事件，是蒙藏民族共同为缔造祖国和平统一、发展民族团结关系作出的重大贡献。
          </div>
          <div class="mountain"></div>
      </div>
      <div class="four-screen">
        <div 
            class="description yuan-descript-1"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="0"
            data-parallax-to="-400"
            data-parallax-speed="2"
            data-parallax-center-lock="true"
          >
          <p>随着世祖忽必烈最终建立元朝，</p>
          <p>中央政府对藏区的管辖逐渐制度化。</p>
        </div>
        <div
            class="horse"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="400"
            data-parallax-to="-400"
            data-parallax-speed="1.8"
            data-parallax-center-lock="true"
        ></div>
        <div 
            class="cloud-1"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="600"
            data-parallax-to="-600"
            data-parallax-speed="3"
            data-parallax-center-lock="true"
          ></div> 
      </div>
      <div class="five-screen">
        <div class="description yuan-descript-1">
          1264年，忽必烈设“总制院”，让时任国师的萨迦班智达之侄八思巴担任该机构负责人。1288年，元廷又取用“吐蕃朝唐之际，皇帝在宣政殿接见”的历史典故，更名为“宣政院”，并扩大机构规模，设立三个宣慰使司都帅府，专门负责统辖全国佛教事宜和管理藏区军政事务。
        </div>
<!--        <annotation-dot>-->
<!--          <p class="popularization-content">《藏族史要》 四川民族出版社 1982</p>-->
<!--        </annotation-dot>-->
        <div
          class="person"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.5"
          data-parallax-center-lock="true"
        ></div>
      </div>
      <div class="six-screen screen">
        <div 
          class="cloud-1"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="600"
          data-parallax-to="-600"
          data-parallax-speed="3"
          data-parallax-center-lock="true"
        ></div>
        <div class="seal yuan-descript-1">
          <div class="seal-img"></div>
          <p>统领释教大元国师印</p>
          <annotation-dot>
            <p class="popularization-content">《物里中华：一文一物话西藏》 四川民族出版社 2025</p>
          </annotation-dot>
        </div>
        <div class="description yuan-descript-1">这枚印章被学者认为与八思巴有关，因印而制信，体现了中央治藏方式的制度化。</div>
      </div>
      <div class="seven-screen screen">
        <div 
          class="description yuan-descript-1"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="200"
          data-parallax-to="-200"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
        >总而言之，“宣政院”以及宣慰使司都帅府的建立是中国历史上，中央政府首次对全国藏区实现系统化的行政管辖，开创了中央专管民族地区的先例，将青藏高原正式纳入统一的行政体系，奠定了此后多元一体的民族格局。</div>
      </div>
      <div class="eight-screen">
        <div class="mountain"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue';
  import { gsap } from 'gsap';
  import { pxToVw, pxToVh } from '@/utils/viewportUtils';
  import AnnotationDot from '@/components/AnnotationDot.vue';
  import { useAnimateNumber } from '@/utils/animateNumber';

  /**
 * 初始化所有描述文本渐显动画
 */
const container = ref(null)
const initDescriptionOpacityAnimation = () => {
  container.value.querySelectorAll('.description').forEach((desc) => {
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

onMounted(() => {
  initDescriptionOpacityAnimation()
})

  // 数字动画 refs
  const number1247Ref = ref(null)

  // 数字动画
  const { 
    displayValue: displayNumber1247, 
    cleanup: cleanupNumber1247
  } = useAnimateNumber({
    elementRef: number1247Ref,
    targetValue: 1247,
    startValue: 1000,
    duration: 1.5,
    ease: 'power2.out'
  })

  onUnmounted(() => {
    cleanupNumber1247()
  })
  </script>
  
  <style scoped>
  .screen{
    position: relative;
    width: 1920px;
    height: 1080px;
  }
  
  .yuan {
    width: 18530px;
    //height: 100%;
    height: 1080px;
    margin-left: -1px;
    background-image: url("@/assets/images/yuan/yuan-bg.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    display: flex;
    .yuan-descript-1{
      font-size: 33px;
      line-height: 54px;
      color: #68614f;
      word-break: break-all;
      white-space: normal;
      word-wrap: break-word;
    }
    .first-screen {
      width: 3176px;
      height: 100%;
      background-image: url("@/assets/images/yuan/yuan-bg-mountain-1.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;
      .cloud-1 {
        width: 929px;
        height: 390px;
        background-image: url("@/assets/images/yuan/yuan-cloud-1.png");
        background-size: cover;
        position: absolute;
        top: -60px;
        left: 1000px;
        animation: cloudFloat 8s infinite alternate ease-in-out;
        will-change: transform;
        transform-origin: center;
      }
  
      .cloud-2 {
        width: 1571px;
        height: 480px;
        background-image: url("@/assets/images/yuan/yuan-cloud-2.png");
        background-size: cover;
        position: absolute;
        bottom: -140px;
        right: -1100px;
        animation: cloudFloat 7s infinite alternate ease-in-out;
        animation-delay: 3s;
        will-change: transform;
        transform-origin: center;
      }
      .title{
        font-size: 90px;
        font-family: 'EarlySummerSerif-Bold';
        color: #68614f;
        position: absolute;
        top: 460px;
        right: 0;
      }
    }
    .second-screen{
      width: 1920px;
      height: 1080px;
      margin-left: 820px;
      display: flex;
      .title{
        font-size: 90px;
        font-family: 'EarlySummerSerif-Bold';
        color: #68614f;
        writing-mode: vertical-rl;
        position: relative;
        top: 74px;
      }
      .description-wrapper{
        position: relative;
        top: 210px;
        .description{
          margin-top: 50px;
          margin-left: 100px;
        }
      }
      .cloud-1 {
        width: 1571px;
        height: 480px;
        background-image: url("@/assets/images/yuan/yuan-cloud-3.png");
        background-size: cover;
        position: absolute;
        top: -290px;
        left: 780px;
        animation: cloudFloat 8s infinite alternate ease-in-out;
        will-change: transform;
        transform-origin: center;
      }
      .person {
        width: 800px;
        height: 1422px;
        background-image: url("@/assets/images/yuan/animated/gif-huimengtu.gif");
        background-size: cover;
        position: absolute;
        transform: scale(0.7);
        bottom: -200px;
        left: 980px;
      }
    }
    .third-screen{
      position: relative;
      width: 1920px;
      height: 1080px;
      left: 450px;
      .description{
        position: relative;
        width: 1000px;
        top: 430px;
      }
      .mountain{
        width: 1305px;
        height: 932px;
        background-image: url("@/assets/images/yuan/yuan-bg-mountain-2.png");
        background-size: cover;
        position: absolute;
        bottom: 0px;
        left: 780px;
      }
    }
    .four-screen{
      position: relative;
      width: 1920px;
      height: 1080px;
      .description{
        position: relative;
        top: 480px;
        left: 300px;
      }
      .horse{
        width: 800px;
        height: 1422px;
        background-image: url("@/assets/images/yuan/animated/gif-hubilie.gif");
        background-size: cover;
        position: absolute;
        bottom: -300px;
        right: 300px;
        transform: scale(0.82);
      }
      .cloud-1 {
        width: 1571px;
        height: 480px;
        background-image: url("@/assets/images/yuan/yuan-cloud-4.png");
        background-size: cover;
        position: absolute;
        bottom: -240px;
        right: -840px;
        animation: cloudFloat 8s infinite alternate ease-in-out;
        animation-delay: 5s;
        will-change: transform;
        transform-origin: center;
      }
    }
    .five-screen{
      width: 1920px;
      height: 1080px;
      position: relative;
      .description{
        position: relative;
        width: 870px;
        top: 420px;
        left: 300px;
      }
      .person{
        width: 800px;
        height: 1422px;
        background-image: url("@/assets/images/yuan/animated/gif-basiba.gif");
        background-size: cover;
        position: relative;
        transform: scale(0.53);
        top: -360px;
        left: 1050px;
      }
      .popularization-description{
        position: absolute;
        bottom: 210px;
        left: 930px;
        .popularization-wrapper{
          position: relative;
          top: -60px;
        }
      }
    }
    .six-screen{
      .cloud-1 {
        width: 1571px;
        height: 480px;
        background-image: url("@/assets/images/yuan/yuan-cloud-5.png");
        background-size: cover;
        position: absolute;
        top: -100px;
        left: -600px;
        animation: cloudFloat 8s infinite alternate ease-in-out;
        animation-delay: 2s;
        will-change: transform;
        transform-origin: center;
      }
      .seal{
        position: relative;
        top: 380px;
        left: 480px;
        .seal-img{
          width: 305px;
          height: 306px;
          background-image: url("@/assets/images/yuan/yuan-artifact-guoshiyin.png");
          background-size: cover;
  
        }
        .popularization-description{
          position: absolute;
          bottom: -200px;
          left: 340px;
          .popularization-wrapper{
            position: relative;
            top: -60px;
          }
        }
      }
      .description{
        width: 700px;
        position: absolute;
        top: 520px;
        left: 920px;
      }
    }
    .seven-screen{
      .description{
        width: 950px;
        position: absolute;
        top: 436px;
        left: 260px;
      }
    }
    .eight-screen{
      width: 3156px;
      height: 1080px;
      .mountain{
        width: 3002px;
        height: 1173px;
        background-image: url("@/assets/images/yuan/yuan-fuchunshanjutu.png");
        background-size: cover;
        position: relative;
        z-index: 4;
      }
  
    }
  }
  @keyframes cloudFloat {
    0% { transform: translate(0, 0); }
    25% { transform: translate(20px, -10px); }
    50% { transform: translate(40px, 5px); }
    75% { transform: translate(60px, -5px); }
    100% { transform: translate(0, 0); }
  }
  
  
  
  
  
  </style>