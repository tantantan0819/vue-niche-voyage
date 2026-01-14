<template>
  <div class="secret-wrapper">
    <div class="clouds-wrapper-3">
      <div class="cloud-img-1"></div>
      <div class="cloud-img-2"></div>
    </div>
    <div class="secret">

      <div class="first-screen screen">
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
      <div class="second-screen screen" id="page-snow-covered-treasures">
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
import { onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from 'vue-router'
import { pxToVhPx } from '@/utils/viewportUtils';

const router = useRouter()

gsap.registerPlugin(ScrollTrigger);

const linkTo = path => {
  router.push(path)
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

onMounted(() => {
  // fragment 透明度动画
  initFragmentOpacityAnimation();
});
</script>
<style scoped>
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
    background-color: #4291c4!important;
  }
}

.secret-wrapper{
  position: relative;
  .clouds-wrapper-3{
    position: absolute;
    top: -200px; /* 向上移动，覆盖前一屏 */
    right: 0;
    height: 1200px;
    z-index: 9999;
    width: 1920px;
    .cloud-img-1{
      width: 1920px;
      height: 975px;
      background-image: url("@/assets/images/secret/resource-to-history-element-bg.png");
      background-size: cover;
      position: absolute;
      left: 0px;
    }
  }

  .secret{
    width: 1920px;
    height: 8840px;
    background-image: url("@/assets/images/secret/resource-to-history-bg.jpg");
    background-size: cover;
    background-position: center -1080px;
    overflow: hidden;
    position: relative;
    z-index: 1000; /* 确保.secret容器的z-index高于前一屏 */
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

      .text-1{
        text-align: center;
        font-size: 26px;
        color: #7264a0;
        line-height: 40px;
        position: absolute;
        top: 752px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
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
        white-space: nowrap;
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
        display: flex;
        flex-direction: column;
        white-space: nowrap;
      }
      .secret-description{
        font-size: 26px;
        color: #fff;
        white-space: nowrap;
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
        white-space: nowrap;
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
        white-space: nowrap;
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
            background-image: url("@/assets/images/secret/resource-to-history-element-4-1.png") ;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
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
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
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
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
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
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
          }
        }
      }
    }
  }

}
</style>
