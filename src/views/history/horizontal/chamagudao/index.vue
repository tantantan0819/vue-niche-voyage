<template>
  <div class="chamagudao" ref="chamagudaoRef" :data-bg="cmgd_bg">
    <div class="first-screen screen">
      <div
          class="road"
          :data-bg="cmgd_mural_detail_1"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.1"
          data-parallax-center-lock="true"
      ></div>
      <div class="tea" :data-bg="tea_falling"></div>
    </div>
    <div class="second-screen screen" id="page-yidaowanli">
      <div class="light-bg" :data-bg="cmgd_silutu_lineart"></div>
      <div
          class="title"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="2"
          data-parallax-center-lock="true"
      >公元<span class="change-number" ref="number14Ref">{{ displayNumber14 }}</span>世纪-<span class="change-number" ref="number19Ref">{{ displayNumber19 }}</span>世纪</div>
      <div
          class="grass"
          :data-bg="cmgd_mural_tea"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="450"
          data-parallax-to="-450"
          data-parallax-speed="1.1"
          data-parallax-center-lock="true"
      ></div>
    </div>
    <div class="third-screen screen">
      <div
          class="title"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.5"
          data-parallax-center-lock="true"
      >易道万里</div>
      <div
          class="tree"
          :data-bg="tree_gif"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="500"
          data-parallax-to="-500"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      ></div>
      <div
          class="description"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      >
        <p>番人嗜乳酪，</p>
        <p>不得茶则困以病。</p>
        <p>故唐、宋以来，</p>
        <p>行以茶易马法，</p>
        <p>用制羌戎。</p>
        <p>——《明史・食货志》</p>
      </div>
      <div
          class="wine-1"
          :data-bg="cmgd_basin"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="100"
          data-parallax-to="-400"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      ></div>
      <div
          class="wine-2"
          :data-bg="cmgd_tea_boiling"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      ></div>
    </div>
    <div class="ml-80 four-screen screen">
      <div
          class="stone"
          :data-bg="cmgd_stone"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.5"
          data-parallax-center-lock="true"
      ></div>
      <div
          class="person"
          :data-bg="cmgd_mural_detail_2"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      ></div>
      <div
          class="detail detail-1"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      >
        <p>茶马古道，兴于唐宋，盛于明清。</p>
        <p>马帮铃响穿越山谷，</p>
        <p>汉、藏、羌等民族在贸易与治理中交织出鲜活的图景。</p>
      </div>
      <div
          class="detail detail-2"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      >
        <p>藏人依赖茶叶解油腻，汉人则需藏区良马。</p>
        <p>汉族茶商驮茶砖，羌族脚夫引路，与藏族牧民换马。</p>
        <p>市集上汉话、藏语、羌语交织，皮毛、茶叶、盐巴互通，</p>
        <p>古道旁兴起多民族聚居的小镇，</p>
        <p>为区域间的经济文化交流提供了有效途径。</p>
      </div>
    </div>
    <div class="ml-80 five-screen screen">
      <div
          class="temple"
          :data-bg="cmgd_ruins_chamasi"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.5"
          data-parallax-center-lock="true"
      ></div>
      <div
          class="tree"
          :data-bg="terr_brach_2"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="600"
          data-parallax-to="-600"
          data-parallax-speed="1.5"
          data-parallax-center-lock="true"
      ></div>
      <div
          class="detail"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="500"
          data-parallax-to="-500"
          data-parallax-speed="1.8"
          data-parallax-center-lock="true"
      >
        <div class="title">茶马司遗址</div>
        <p>位于四川省雅安市名山区新店镇长春村的茶马司遗址，它始建于宋代，是全国现存唯一的宋代茶马交易官衙遗址，在明清时期重修。这座遗址见证了各民族间的经济文化交流历史。</p>
      </div>
    </div>
    <div
        class="six-screen screen"
        data-parallax="true"
        data-parallax-axis="x"
        data-parallax-from="400"
        data-parallax-to="-400"
        data-parallax-speed="1.1"
        data-parallax-center-lock="true"
    >
      <div class="inform-img" :data-bg="cmgd_artifact_chamahushibugao_large"></div>
      <div class="detail">
        <div class="title">《茶马互市布告》</div>
        <p>这则布告发布于明万历二十年，用最明白晓畅的白话文向藏民昭示了政府的茶马互市政策。</p>
        <p>茶”与“马”喻示着中原与边疆，农耕与游牧之间不可分离的依存和互补关系。</p>
      </div>
      <annotation-dot>
        <div>
          <p class="popularization-content">《何以中华：一百件文物中的中华民族共同体历</p>
          <p class="popularization-content">史记忆》（汉藏双语）四川民族出版社 2023</p>
        </div>
      </annotation-dot>
    </div>
    <div class="seven-screen screen">
      <div
          class="description detail"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="500"
          data-parallax-to="-500"
          data-parallax-speed="1.1"
          data-parallax-center-lock="true"
      >
        <p>道路的通达极大促进了中原与边疆的交流和贸易的繁荣，</p>
        <p>实际上这也正体现出中央在治藏制度上的不断发展。</p>
      </div>
      <div
          class="house"
          :data-bg="cmgd_mural_detail_3"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="300"
          data-parallax-to="-300"
          data-parallax-speed="1.05"
          data-parallax-center-lock="true"
      ></div>
    </div>
    <div class="eight-screen screen">
      <div
          class="detail"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="500"
          data-parallax-to="-500"
          data-parallax-speed="1.5"
          data-parallax-center-lock="true"
      >
        <p>明朝建立后，基本沿用了元朝的治藏制度。中央收缴藏区各部旧印，重新颁发给他们新的印信，通过“多封众建”以及设立朵甘行都指挥使司和乌思藏行都指挥使司的方式行使主权。</p>
        <p>清朝建立后，雍正帝在拉萨设驻藏大臣管理藏区事务，这是清朝在藏区直接派遣常驻官员的开始；乾隆帝则颁《钦定藏内善后章程》，明确驻藏大臣职权和“金瓶掣签”制度，使中央对西藏地方施政发展到了最高阶段。</p>
      </div>
      <div
          class="tree"
          :data-bg="terr_brach_1"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="600"
          data-parallax-to="-600"
          data-parallax-speed="1.5"
          data-parallax-center-lock="true"
      ></div>
      <div class="bottle">
        <div
            class="bottle-img"
            :data-bg="cmgd_artifact_benbaping"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="600"
            data-parallax-to="-600"
            data-parallax-speed="1.3"
            data-parallax-center-lock="true"
        ></div>
        <div
            class="bottle-wrapper"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="500"
            data-parallax-to="-500"
            data-parallax-speed="1.2"
            data-parallax-center-lock="true"
        >
          <div class="bottle-detail">“金瓶掣签”苯巴瓶</div>
          <p>用于甄选活佛转世灵童的金苯巴瓶，</p>
          <p>是维护西藏稳定，巩固国家统一的历史见证。</p>
        </div>
      </div>
      <annotation-dot 
          class="popularization-description" title="图片来自"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="500"
          data-parallax-to="-500"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true">
        <div>
          <p class="popularization-content">《何以中华：一百件文物中的中华民族共同体历</p>
          <p class="popularization-content">史记忆》（汉藏双语）四川民族出版社 2023</p>
        </div>
      </annotation-dot>
      <!-- <div
          class="popularization-description"
          data-parallax="true"
          data-parallax-axis="x"
          data-parallax-from="500"
          data-parallax-to="-500"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true"
      >
        <div class="lamp-item-wrap" @click="openBottle">
          <div class="lamp-item-core"></div>
          <div class="lamp-item"></div>
        </div>
        <div class="popularization-wrapper">
          <div class="close" @click="closeBottle">x</div>
          <div class="title"><span>·</span>内容来自</div>
          <div class="popularization-content">
            <p>《何以中华：一百件文物中的中华民族共同体历</p>
            <p>史记忆：汉文、藏文》四川民族出版社 2023</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue';
import { gsap } from 'gsap';
import { pxToVw, pxToVh } from '@/utils/viewportUtils';
import AnnotationDot from "@/components/AnnotationDot.vue";
import { useAnimateNumber } from '@/utils/animateNumber';

// 背景图资源懒加载
const cmgd_bg = new URL('@/assets/images/chamagudao/cmgd-bg.jpg', import.meta.url).href;
const cmgd_mural_detail_1 = new URL('@/assets/images/chamagudao/cmgd-mural-detail-1.png', import.meta.url).href;
const tea_falling = new URL('@/assets/images/chamagudao/tea-falling.gif', import.meta.url).href;
const cmgd_silutu_lineart = new URL('@/assets/images/chamagudao/cmgd-silutu-lineart.png', import.meta.url).href;
const cmgd_mural_tea = new URL('@/assets/images/chamagudao/cmgd-mural-tea.png', import.meta.url).href;
const tree_gif = new URL('@/assets/images/chamagudao/tree.gif', import.meta.url).href;
const cmgd_basin = new URL('@/assets/images/chamagudao/cmgd-basin.png', import.meta.url).href;
const cmgd_tea_boiling = new URL('@/assets/images/chamagudao/cmgd-tea-boiling.png', import.meta.url).href;
const cmgd_stone = new URL('@/assets/images/chamagudao/cmgd-stone.png', import.meta.url).href;
const cmgd_mural_detail_2 = new URL('@/assets/images/chamagudao/cmgd-mural-detail-2.png', import.meta.url).href;
const cmgd_ruins_chamasi = new URL('@/assets/images/chamagudao/cmgd-ruins-chamasi.png', import.meta.url).href;
const terr_brach_2 = new URL('@/assets/images/chamagudao/terr-brach-2.gif', import.meta.url).href;
const cmgd_artifact_chamahushibugao_large = new URL('@/assets/images/chamagudao/cmgd-artifact-chamahushibugao-large.jpg', import.meta.url).href;
const cmgd_mural_detail_3 = new URL('@/assets/images/chamagudao/cmgd-mural-detail-3.png', import.meta.url).href;
const terr_brach_1 = new URL('@/assets/images/chamagudao/terr-brach-1.gif', import.meta.url).href;
const cmgd_artifact_benbaping = new URL('@/assets/images/chamagudao/cmgd-artifact-benbaping.png', import.meta.url).href;

/**
 * 初始化所有描述文本渐显动画
 */
const chamagudaoRef = ref(null)
const initDescriptionOpacityAnimation = () => {
  chamagudaoRef.value.querySelectorAll('.description').forEach((desc) => {
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

onMounted(() =>{
  initDescriptionOpacityAnimation()
})


/**
 * 打开宣政院弹窗
 */
const openBottle = () => {
  gsap.to('.eight-screen .popularization-wrapper', {
    x: pxToVw(-50),
    scale: 1,
    opacity: 1,
    duration: 0.5
  });
  const tl = gsap.timeline();
  tl.to('.eight-screen .lamp-item-core', { scale: 0.6, duration: 0.1 })
      .to('.eight-screen .lamp-item-core', { scale: 1, duration: 0.1 });
};

/**
 * 关闭宣政院弹窗
 */
const closeBottle = () => {
  gsap.to('.eight-screen .popularization-wrapper', {
    x: pxToVw(+50),
    scale: 0.5,
    opacity: 0,
    duration: 0.5
  });
};

// 数字动画 refs
const number14Ref = ref(null)
const number19Ref = ref(null)

// 数字动画
const { 
  displayValue: displayNumber14, 
  cleanup: cleanupNumber14
} = useAnimateNumber({
  elementRef: number14Ref,
  targetValue: 14,
  startValue: 0,
  duration: 1,
  ease: 'power2.out'
})

const { 
  displayValue: displayNumber19, 
  cleanup: cleanupNumber19
} = useAnimateNumber({
  elementRef: number19Ref,
  targetValue: 19,
  startValue: 0,
  duration: 1,
  ease: 'power2.out'
})

onUnmounted(() => {
  cleanupNumber14()
  cleanupNumber19()
})
</script>
<style scoped>
[data-bg] {
  --bg-image: attr(data-bg url);
  background-image: var(--bg-image);
}

.screen{
  position: relative;
  width: 1920px;
  height: 1080px;
}
.ml-80{
  margin-left: 80px;
}
.chamagudao{
  width: 17764px;
  height: 1080px;
  margin-left: -1800px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  .first-screen{
    width: 1920px;
    height: 1080px;
    position: relative;
    .road{
      width: 2997px;
      height: 655px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      right: -2400px;
    }
    .tea{
      width: 1208px;
      height: 687px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      right: -800px;
      z-index: 2;
    }
  }
  .second-screen{
    width: 1920px;
    height: 1080px;
    position: relative;
    .light-bg{
      width: 3725px;
      height: 918px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      z-index: 2;
      top: 0;
      left: -1900px;
    }
    .title{
      font-size: 90px;
      font-family: 'EarlySummerSerif-Bold';
      color: #4e4832;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    .grass{
      width: 577px;
      height: 158px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      left: 824px;
    }
  }
  .third-screen{
    .title{
      font-size: 90px;
      font-family: 'EarlySummerSerif-Bold';
      color: #4e4832;
      position: relative;
      writing-mode: vertical-rl;
      left: 200px;
      top: 250px;
    }
    .description{
      font-size: 33px;
      line-height: 90px;
      color: #4e4832;
      position: absolute;
      writing-mode: vertical-rl;
      left: 660px;
      top: 440px;
      p{
        font-family: 'EarlySummerSerif-Bold' !important;
      }
    }
    .tree{
      width: 2030px;
      height: 1157px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: -300px;
    }
    .wine-1{
      width: 167px;
      height: 131px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 64px;
      right: 480px;
    }
    .wine-2{
      width: 134px;
      height: 144px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 120px;
      right: 344px;
    }
  }
  .four-screen{
    .detail{
      font-size: 33px;
      line-height: 54px;
      color: #4e4832;
    }
    .detail-1{
      position: absolute;
      left: 30px;
      top: 260px;
    }
    .detail-2{
      position: absolute;
      left: 950px;
      top: 200px;
    }
    .stone{
      width: 886px;
      height: 232px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      left: -300px;
    }
    .person{
      width: 2088px;
      height: 556px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      left: -80px;
    }
  }
  .five-screen{
    .detail{
      position: relative;
      top: 200px;
      left: 100px;
      .title{
        font-size: 33px;
        margin-bottom: 10px;
        font-family: 'Alibaba-PuHuiTi-Light';
      }
      p{
        font-size: 25px;
        line-height: 50px;
        width: 700px;
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all;
        font-family: 'Alibaba-PuHuiTi-Light';
      }
    }
    .temple{
      width: 1797px;
      height: 629px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      left: 280px;
    }
    .tree{
      width: 1622px;
      height: 1021px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      right: -520px;
    }
  }
  .six-screen{
    .inform-img{
      width: 1447px;
      height: 353px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 270px;
      left: 240px;
    }
    .detail{
      position: absolute;
      left: 230px;
      bottom: 260px;
      .title{
        font-size: 33px;
        color: #2c2108;
        margin-bottom: 10px;
        font-family: 'Alibaba-PuHuiTi-Light';
      }
      p{
        font-size: 25px;
        line-height: 50px;
        color: #2c2108;
        font-family: 'Alibaba-PuHuiTi-Light';
      }
    }
    .popularization-description{
      position: absolute;
      bottom: 40px;
      left: 1130px;
    }
    :deep(.popularization-wrapper){
        position: relative;
        top: -60px;
    }
   
  }
  .seven-screen{
    .detail{
      font-size: 33px;
      color: #605334;
      position: absolute;
      bottom: 220px;
      left: 130px;
      white-space: nowrap;
    }
    .house{
      width: 1404px;
      height: 980px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      right: 0px;
      bottom: 0px;
    }
  }
  .eight-screen{
    position: relative;
    .detail{
      width: 880px;
      font-size: 33px;
      line-height: 50px;
      color: #605334;
      white-space: normal;
      word-wrap: break-word;
      word-break: break-all;
      position: relative;
      top: 330px;
      left: 140px;
      p{
        margin-bottom: 10px;
        &:nth-child(1){
          margin-bottom: 10px;
        }
      }
    }
    .tree{
      width: 1789px;
      height: 1054px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      right: -790px;
      top: -20px;
    }
    .bottle{
      .bottle-img{
        width: 470px;
        height: 591px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        right: 100px;
        bottom: 70px;
      }
      .bottle-wrapper{
        position: absolute;
        right: 520px;
        bottom: 130px;
        .bottle-detail{
          font-size: 33px;
          color: #2c2108;
          margin-bottom: 10px;
          font-family: 'Alibaba-PuHuiTi-Light';
        }
        p{
          font-size: 25px;
          line-height: 50px;
          color: #2c2108;
          font-family: 'Alibaba-PuHuiTi-Light';
        }
      }
    }
    .popularization-description{
      position: absolute;
      bottom: 22px;
      right: 580px;
    }
    :deep(.popularization-wrapper){
        position: relative;
        top: -80px;
        left: -560px;
      }
  }

}

</style>