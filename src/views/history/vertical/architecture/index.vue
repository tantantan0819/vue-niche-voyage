<template>
  <div class="architecture" :data-bg="architecture_bg">
    <div class="first-screen screen">
      <div 
        class="text-wrapper"
      data-parallax="true"
      data-parallax-axis="y"
      data-parallax-from="200"
      data-parallax-to="-200"
      data-parallax-speed="1.2"
      data-parallax-center-lock="true"
      >
          <p>走过云影掠动的群峰，翻罢岁月雕琢的时光。</p>
          <p class="earlySummer-serif">现在</p>
          <p>请暂时从宏阔的自然与历史中抽身，</p>
      </div>
    </div>
    <div class="second-screen screen">
      <div class="cloud-1"
           :data-bg="architecture_element_cloud"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.1"
           data-parallax-center-lock="true"
      ></div>
      <div
          class="second-screen-img"
          data-parallax="true"
          data-parallax-axis="y"
          data-parallax-from="100"
          data-parallax-to="-100"
          data-parallax-speed="1.1"
          data-parallax-center-lock="true"
      >
        <div class="second-screen-img-3" :data-bg="architecture_element_arrow"></div>
        <div class="second-screen-img-1" :data-bg="architecture_element_speed_line_1"></div>
        <div class="second-screen-img-2" :data-bg="architecture_element_speed_line_2"></div>
      </div>
      <div class="content"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="800"
           data-parallax-to="-800"
           data-parallax-speed="1.5"
           data-parallax-center-lock="true"
      >
        <p>继续前行，感受极境之上，</p>
        <div class="architecture-text">
          <div class="architecture-text-1-wrapper">
            <div class="architecture-text-1" :data-bg="architecture_characters_1"></div>
            <p>的</p>
          </div>
          <p>温度与华彩。</p>
        </div>
      </div>
    </div>
    <div class="third-screen screen" >
      <div class="page-point" id="page-architecture-section"></div>
      <div class="third-screen-bg-1"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.1"
           data-parallax-center-lock="true"
           :data-bg="architecture_element_bg_1"
      ></div>
      <div class="third-screen-bg-2"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.1"
           data-parallax-center-lock="true"
           :data-bg="architecture_element_bg_2"
      ></div>
      <div class="third-screen-bg-3"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.2"
           data-parallax-center-lock="true"
           :data-bg="architecture_element_mg_1"
      ></div>
      <div class="third-screen-bg-4"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.2"
           data-parallax-center-lock="true"
           :data-bg="architecture_element_mg_2"
      ></div>
      <div class="third-screen-bg-text"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="600"
           data-parallax-to="-200"
           data-parallax-speed="1.5"
           data-parallax-center-lock="true"
           :data-bg="architecture_character_2"
      ></div>
      <p
          data-parallax="true"
          data-parallax-axis="y"
          data-parallax-from="600"
          data-parallax-to="-200"
          data-parallax-speed="1.5"
          data-parallax-center-lock="true">建筑篇</p>
      <div class="third-screen-bg-5"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.3"
           data-parallax-center-lock="true"
           :data-bg="architecture_element_fg_1"
      ></div>
      <div class="third-screen-bg-6"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.3"
           data-parallax-center-lock="true"
           :data-bg="architecture_element_fg_2"
      ></div>
      <div class="third-screen-bg-7"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="50"
           data-parallax-to="-50"
           data-parallax-speed="1.05"
           data-parallax-center-lock="true"
           :data-bg="architecture_element_bdlg"
      ></div>
    </div>
    <div class="four-screen screen">
      <div class="four-screen-bg-1" :data-bg="architecture_element_qzjz_1"></div>
      <div class="four-screen-bg-2"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="100"
           data-parallax-to="-100"
           data-parallax-speed="1.1"
           data-parallax-center-lock="true"
           :data-bg="architecture_element_qzjz_2"
      ></div>
      <div class="four-screen-bg-3"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="200"
           data-parallax-to="-200"
           data-parallax-speed="1.2"
           data-parallax-center-lock="true"
           :data-bg="architecture_element_wall"
      ></div>
      <div class="four-screen-detail"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="100"
           data-parallax-to="-100"
           data-parallax-speed="1.1"
           data-parallax-center-lock="true"
      >建筑，是一种综合性的文化表达。雪域之上的建筑不仅植根于民族文化，更是人与自然对话的结果。藏、羌等民族，以山地为蓝本、石木为材料，以中华民族深邃的天人思想和生态智慧，创造出独树一帜的建筑美学与文化体系。</div>
    </div>
    <div class="five-screen screen">
      <div class="img-wrapper-1"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.2"
           data-parallax-center-lock="true">
        <p class="alibaba-light">马尔康脚木足扎依碉楼</p>
        <div class="img-1" :data-bg="architecture_image_1"></div>
        <annotation-dot :openDirection="-50" :closeDirection="50">
          <p class="popularization-content">《嘉绒藏族古碉文明》四川民族出版社 2020</p>
        </annotation-dot>
      </div>

      <div class="five-screen-detail"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.2"
           data-parallax-center-lock="true">在横断山区的深谷与高坡之间，碉楼如同时间的锚点，静静见证着青藏高原东缘多民族交汇的历史脉络。川西地区的碉楼，在层层叠叠的石块与木构中，凝结着族群对山川的理解和对家园的守望，既是民族建筑记忆的交汇点，也是高原人文景观中最具力量的象征之一。 </div>
    </div>
    <div class="six-screen screen">
      <div class="six-screen-bg"></div>
      <div class="img-wrapper-1"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.1"
           data-parallax-center-lock="true">
        <div class="img-1" :data-bg="architecture_image_2"></div>
        <p class="alibaba-light">汶川县龙溪乡阿尔寨碉楼</p>
        <annotation-dot >
          <p class="popularization-content">《羌族建筑》 四川民族出版社 2021</p>
        </annotation-dot>
      </div>

      <div class="six-screen-detail"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.1"
           data-parallax-center-lock="true">
        <p>藏族民居建筑则更为复杂多样。</p>
        <p>从建筑结构上，可分为石木、土木、混合结构等；</p>
        <p>从功能类型上，又可分为百姓民居和吐司官寨。</p>
      </div>
    </div>
    <div class="seven-screen screen">

      <div class="seven-screen-bg" :data-bg="architecture_element_guidingline_2"></div>
      <div class="img-wrapper-1"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="200"
           data-parallax-to="-200"
           data-parallax-speed="1.1"
           data-parallax-center-lock="true">
        <div class="img-1" :data-bg="architecture_image_3"></div>
        <p class="alibaba-light">巴底吐司官寨结构图</p>
        <annotation-dot >
          <p class="popularization-content">《藏族美术集成·建筑艺术·民居建筑·川滇卷》（藏汉对照）</p>
          <p class="popularization-content">四川民族出版社 2023</p>
        </annotation-dot>
      </div>
      <div class="seven-screen-detail"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="200"
           data-parallax-to="-200"
           data-parallax-speed="1.1"
           data-parallax-center-lock="true">
        <p>装饰色彩是藏族建筑最鲜明的视觉符号之一。</p>
        <p>不同地区的人们根据自己的审美情趣和当地的自然环境，</p>
        <p>对民居外部的基本色彩都有自己的定位或习惯。</p>
      </div>
    </div>
    <div class="eight-screen screen">
      <div class="eight-screen-bg" :data-bg="architecture_element_guidingline_3"></div>
      <div class="eight-screen-detail"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.3"
           data-parallax-center-lock="true">比如，人们称巴塘民居为红藏房，乡城民居为白藏房，稻城民居为黑藏房，道孚民居为花藏房。其中，道孚民居装修精美，精雕细镂，描金绘彩，正因如此，道孚也被称为“藏民居艺术之都”。</div>
      <div class="eight-screen-detail nowrap"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="100"
           data-parallax-to="-100"
           data-parallax-speed="1.2"
           data-parallax-center-lock="true">
        <p>如果说民居与碉楼记录着高原的日常生活实践，</p>
        <p>那么宫堡式建筑则是建筑技艺与审美凝聚的最高表达，</p>
        <p>其中最恢宏的典范当属布达拉宫。</p>
      </div>
      <div class="img-wrapper-1"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="200"
           data-parallax-to="-200"
           data-parallax-speed="1.2"
           data-parallax-center-lock="true"
      >
        <div class="img-1" :data-bg="architecture_image_4"></div>
        <p class="alibaba-light">道孚民居原木风格的客厅</p>
        <annotation-dot :openDirection="-50" :closeDirection="50">
          <p class="popularization-content">《藏族美术集成·建筑艺术·民居建筑·川滇卷》（藏汉对照）<br>四川民族出版社 2023</p>
        </annotation-dot>
      </div>
    </div>
    <div class="nine-screen screen">

      <div class="img-wrapper-1"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="200"
           data-parallax-to="-200"
           data-parallax-speed="1.2"
           data-parallax-center-lock="true">
        <div class="img-1" :data-bg="architecture_image_6"></div>
        <p class="alibaba-light">布达拉宫近景</p>
      </div>
      <div class="img-wrapper-2"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="200"
           data-parallax-to="-200"
           data-parallax-speed="1.3"
           data-parallax-center-lock="true">
        <div class="img-2" :data-bg="architecture_image_5"></div>
        <p class="alibaba-light">布达拉宫</p>
        <p class="description">布达拉宫始建于公元7世纪，17世纪重建扩建后成为政治与宗教中心。它依山而筑，气势雄浑。红宫居中、白宫横展，十余层红墙与金色屋檐在高原阳光下熠熠生辉。1994年，布达拉宫被列入《世界遗产名录》，它不仅是文成公主入藏，汉藏交流等早期历史的见证，更成为中华民族文化互鉴融通的重要标志和全人类共同的文化财富。</p>
        <annotation-dot :openDirection="-50" :closeDirection="50">
          <p class="popularization-content">《物里中华：一文一物话西藏》 四川民族出版社 2025</p>
        </annotation-dot>
      </div>
    </div>
    <div class="ten-screen screen">
      <p
          data-parallax="true"
          data-parallax-axis="y"
          data-parallax-from="200"
          data-parallax-to="-200"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true">要论建筑风格融合的典范，位于西藏山南的桑耶寺必有一席之地。这座修建于吐蕃时期的寺庙，是西藏第一座剃度僧人出家的寺院，也被称为西藏第一座正规寺院。整座建筑坐西向东，殿高三层，汲取了藏、汉、 印三种不同的艺术风格。底层采用藏式建筑样式，中层采用汉式建筑形式，上层采用印式建筑形式。各层的壁画和塑像均按照各自不同的法式绘塑。正因为藏、汉、印合璧的建筑风格，因此该寺也被称为 “三样寺”。</p>
      <div class="img-1"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="600"
           data-parallax-to="-600"
           data-parallax-speed="1.2"
           data-parallax-center-lock="true"
           :data-bg="architecture_element_sys"
      ></div>
    </div>
    <div class="eleven-screen screen">
      <div class="eleven-screen-warpper-1"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="200"
           data-parallax-to="-200"
           data-parallax-speed="1.2"
           data-parallax-center-lock="true">
        <div class="img-1" :data-bg="architecture_image_7"></div>
        <p class="alibaba-light">桑耶寺乌孜大殿</p>
        <annotation-dot>
          <p class="popularization-content">《物里中华：一文一物话西藏》<br> 四川民族出版社 2025</p>
        </annotation-dot>
      </div>
      <div class="eleven-screen-warpper-2"
           data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="200"
           data-parallax-to="-200"
           data-parallax-speed="1.2"
           data-parallax-center-lock="true">
        <p class="alibaba-light">桑耶寺全景</p>
        <div class="img-2" :data-bg="architecture_image_8"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { gsap } from 'gsap';
import { pxToVw, pxToVh } from '@/utils/viewportUtils';
import AnnotationDot from "@/components/AnnotationDot.vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 背景图资源懒加载
const architecture_bg = new URL('@/assets/images/architecture/architecture-bg.jpg', import.meta.url).href;
const architecture_element_arrow = new URL('@/assets/images/architecture/architecture-element-arrow.png', import.meta.url).href;
const architecture_element_speed_line_1 = new URL('@/assets/images/architecture/architecture-element-speed-line-1.png', import.meta.url).href;
const architecture_element_speed_line_2 = new URL('@/assets/images/architecture/architecture-element-speed-line-2.png', import.meta.url).href;
const architecture_element_cloud = new URL('@/assets/images/architecture/architecture-element-cloud.png', import.meta.url).href;
const architecture_element_bg_2 = new URL('@/assets/images/architecture/architecture-element-bg-2.png', import.meta.url).href;
const architecture_element_mg_1 = new URL('@/assets/images/architecture/architecture-element-mg-1.png', import.meta.url).href;
const architecture_element_mg_2 = new URL('@/assets/images/architecture/architecture-element-mg-2.png', import.meta.url).href;
const architecture_character_2 = new URL('@/assets/images/architecture/architecture-characters-2.png', import.meta.url).href;
const architecture_element_fg_1 = new URL('@/assets/images/architecture/architecture-element-fg-1.png', import.meta.url).href;
const architecture_element_fg_2 = new URL('@/assets/images/architecture/architecture-element-fg-2.png', import.meta.url).href;
const architecture_element_bdlg = new URL('@/assets/images/architecture/architecture-element-bdlg.png', import.meta.url).href;
const architecture_element_qzjz_1 = new URL('@/assets/images/architecture/architecture-element-qzjz-1.png', import.meta.url).href;
const architecture_element_qzjz_2 = new URL('@/assets/images/architecture/architecture-element-qzjz-2.png', import.meta.url).href;
const architecture_element_wall = new URL('@/assets/images/architecture/architecture-element-wall.png', import.meta.url).href;
const architecture_image_1 = new URL('@/assets/images/architecture/architecture-image-1.jpg', import.meta.url).href;
const architecture_image_2 = new URL('@/assets/images/architecture/architecture-image-2.jpg', import.meta.url).href;
const architecture_image_3 = new URL('@/assets/images/architecture/architecture-image-3.png', import.meta.url).href;
const architecture_image_4 = new URL('@/assets/images/architecture/architecture-image-4.jpg', import.meta.url).href;
const architecture_image_5 = new URL('@/assets/images/architecture/architecture-image-5.jpg', import.meta.url).href;
const architecture_image_6 = new URL('@/assets/images/architecture/architecture-image-6.jpg', import.meta.url).href;
const architecture_image_7 = new URL('@/assets/images/architecture/architecture-image-7.jpg', import.meta.url).href;
const architecture_image_8 = new URL('@/assets/images/architecture/architecture-image-8.jpg', import.meta.url).href;
const architecture_element_guidingline_1 = new URL('@/assets/images/architecture/architecture-element-guidingline-1.png', import.meta.url).href;
const architecture_element_guidingline_2 = new URL('@/assets/images/architecture/architecture-element-guidingline-2.png', import.meta.url).href;
const architecture_element_guidingline_3 = new URL('@/assets/images/architecture/architecture-element-guidingline-3.png', import.meta.url).href;
const architecture_element_sys = new URL('@/assets/images/architecture/architecture-element-sys.png', import.meta.url).href;
const architecture_characters_1 = new URL('@/assets/images/architecture/architecture-characters-1.png', import.meta.url).href;
const architecture_element_bg_1 = new URL('@/assets/images/architecture/architecture-element-bg-1.png', import.meta.url).href;
const architecture_characters_2 = new URL('@/assets/images/architecture/architecture-characters-2.png', import.meta.url).href;

gsap.registerPlugin(ScrollTrigger);

// 初始化 text-wrapper 动画
const initTextWrapperAnimation = () => {
  const textWrapper = document.querySelector('.first-screen .text-wrapper');
  if (!textWrapper) return;

  // 先设置初始状态（立即应用）
  gsap.set(textWrapper, {
    x: pxToVw(1900),
    // y: pxToVh(300)
  });

  // 第一个动画：从右向左进入（横向滚动时执行）
  gsap.to(textWrapper, {
    x: 0,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.first-screen',
      scroller: '.horizontal-scroll-container',
      horizontal: true,
      start: 'left right',
      end: 'left left',
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  // 第二个动画：从下往上移动（向下滑动时执行）
  // gsap.to(textWrapper, {
  //   y: pxToVh(-300),
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '.first-screen',
  //     scroller: '.vertical-section',
  //     start: 'top 90%',
  //     end: 'bottom top',
  //     scrub: true
  //   }
  // });
};

// onMounted(async () => {
//   await nextTick();
//   await new Promise(resolve => setTimeout(resolve, 200));
//   initTextWrapperAnimation();
// });

// onBeforeUnmount(() => {
//   ScrollTrigger.getAll().forEach(trigger => {
//     if (trigger.vars?.trigger === '.first-screen') {
//       trigger.kill();
//     }
//   });
// });

</script>
<style>
/* 背景图懒加载通用规则 */
[data-bg] {
  --bg-image: attr(data-bg url);
  background-image: var(--bg-image);
}

.architecture{
  width: 1920px;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 12960px;
  /* background-position: center -1080px; */
  overflow-x: hidden;
  .first-screen{
    padding-top: 500px;
    z-index: 2;
    p{
      color: #6e643b;
      text-align: center;
      &:nth-child(1){
        font-size: 50px;
        margin-bottom: 170px;
      }
      &:nth-child(2){
        font-size: 100px;
      }
      &:nth-child(3){
        font-size: 25px;
      }
    }

  }
  .second-screen{
    display: flex;
    justify-content: center;
    .content{
      margin-top: 104px;
    }
    .second-screen-img{
      position: absolute;
      top: 0;
      width: 352px;
      .second-screen-img-3{
        width: 40px;
        height: 581px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        left: 166px;
        top: -50px;
      }
      .second-screen-img-1{
        width: 176px;
        height: 492px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        left: 0;
        top: 100px;
      }
      .second-screen-img-2{
        width: 176px;
        height: 492px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        right: 0;
        top: 0;
      }

    }
    .cloud-1{
      width: 3962px;
      height: 1826px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: -600px;
      left: -1020px;
    }
    p{
      font-size: 25px;
      color: #a89c45;
      position: relative;
      z-index: 2;
    }
    .architecture-text{
      position: relative;
      z-index: 2;
      white-space: nowrap;
      .architecture-text-1-wrapper{
        display: flex;
        align-items: flex-end;
        font-family: 'EarlySummerSerif-Bold';
        p{
          font-size: 70px;
          padding-left: 10px;
          line-height: 70px;
        }
      }
      .architecture-text-1{
        width: 396px;
        height: 94px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        margin-top: 10px;
      }
      p{
        font-size: 150px;
        color: #a89c45;
        padding-left: 110px;
        font-family: 'EarlySummerSerif-Bold';
      }
    }
  }
  .eleven-screen{
    padding: 180px 120px 0 140px;
    display: flex;
    flex-direction: column;
    .eleven-screen-warpper-1{
      display: flex;
      align-items: flex-end;
      position: relative;
      .img-1{
        width: 646px;
        height: 410px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      p{
        width: 260px;
        font-size: 33px;
        color: #534833;
        margin-left: 42px;
      }
      .popularization-description{
        position: absolute;
        bottom: -220px;
        left: 960px;
        .popularization-content{
          width: 300px;
        }
        .popularization-wrapper{
          position: relative;
          top: -160px;
          left: 0px;
        }
      }
    }
    .eleven-screen-warpper-2{
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      margin-top: 82px;
      .img-2{
        width: 610px;
        height: 408px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      p{
        width: 230px;

        font-size: 33px;
        color: #534833;
        margin-right: 42px;
      }
    }
  }
  .ten-screen{
    position: relative;
    p{
      font-size: 33px;
      line-height: 54px;
      color: #534833;
      width: 800px;
      margin: 300px 0 0 140px;
      position: absolute;
      bottom: 460px;
    }
    .img-1{
      width: 1448px;
      height: 817px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  .nine-screen{
    .popularization-description {
      position: absolute;
      top: 460px;
      left: -80px;
      width: 600px;
      .popularization-wrapper {
        position: relative;
        top: -100px;
        margin-top: 0px!important;
        left: -600px;
        height: 150px;
        .popularization-content{
          position: absolute;
          top: 80px;
          left: 20px;
        }
      }
    }
    .img-wrapper-1{
      display: flex;
      align-items: flex-end;
      position: absolute;
      left: 140px;
      bottom: 150px;
      .img-1{
        width: 360px;
        height: 470px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      p{
        font-size: 33px;
        color: #534833;
        margin-left: 38px;
      }
    }
    .img-wrapper-2{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      right: 120px;
      bottom: 0px;
      .img-2{
        width: 710px;
        height: 470px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      .description{
        margin-top: 148px;
      }
      p{
        width: 824px;
        font-size: 33px;
        line-height: 54px;
        color: #534833;
        &:nth-child(2){
          position: absolute;
          left: -50px;
          top: 430px;
        }
      }
    }
  }
  .eight-screen{
    .popularization-description{
      position: absolute;
      bottom: -260px;
      left: -30px;
      width: 600px;
      .popularization-wrapper{
        .popularization-content{
          width: 550px;
          position: relative;
        }
        position: relative;
        top: -150px;
        left: -600px;
      }
    }
    .eight-screen-bg{
      width: 1920px;
      height: 1488px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 500px
    }
    .eight-screen-detail{
      font-size: 33px;
      line-height: 54px;
      color: #534833;
      &:nth-child(2){
        width: 768px;
        position: absolute;
        top: 130px;
        left: 140px;
      }
      &:nth-child(3){
        position: absolute;
        bottom: -70px;
        left: 140px;
      }
    }
    .img-wrapper-1{
      position: absolute;
      top: 204px;
      right: 120px;
      .img-1{
        width: 694px;
        height: 524px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      p{
        margin-top: 30px;
        font-size: 33px;
        line-height: 54px;
        color: #534833;
      }
    }
  }
  .seven-screen{
    .popularization-description{
      position: absolute;
      top: 456px;
      left: 920px;
      width: 600px;
      .popularization-wrapper{
        .popularization-content{
          width: 550px;
          position: relative;
          /* left: 100px; */
        }
        position: relative;
        top: -100px;
      }
    }
    .seven-screen-bg{
      width: 1920px;
      height: 1488px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      position: absolute;
      top: -60px
    }
    .img-wrapper-1{
      position: absolute;
      top: -234px;
      left: 120px;
      display: flex;
      align-items: flex-end;
      .img-1{
        width: 672px;
        height: 484px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      p{
        font-size: 33px;
        line-height: 54px;
        color: #534833;
        margin-left: -86px;
      }
    }
    .seven-screen-detail{
      position: absolute;
      bottom: 292px;
      right: 120px;
      font-size: 33px;
      line-height: 54px;
      color: #534833;
      white-space: nowrap;
    }
  }
  .six-screen{
    .popularization-description{
      position: absolute;
      top: 396px;
      left: 1070px;
      width: 480px;
      .popularization-wrapper{
        position: relative;
        top: -140px;
        left: 0px;
      }
    }
    .six-screen-bg{
      width: 1920px;
      height: 1488px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 500px
    }
    .six-screen-detail{
      font-size: 33px;
      line-height: 54px;
      color: #534833;
      position: absolute;
      right: 190px;
      top: 530px;
      white-space: nowrap;
    }
    .img-wrapper-1{
      position: absolute;
      top: -42px;
      left: 120px;
      display: flex;
      align-items: flex-end;
      .img-1{
        width: 640px;
        height: 430px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      p{
        margin-left: 30px;
        font-size: 33px;
        line-height: 54px;
        color: #534833;
      }
    }
  }
  .five-screen{
    .five-screen-detail{
      width: 786px;
      font-size: 33px;
      line-height: 54px;
      color: #534833;
      position: absolute;
      left: 120px;
      top: 380px;
    }
    .img-wrapper-1{
      position: absolute;
      top: 216px;
      right: 120px;
      display: flex;
      align-items: flex-end;
      .img-1{
        width: 440px;
        height: 600px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      p{
        margin-right: 30px;
        font-size: 33px;
        line-height: 54px;
        color: #534833;
      }
    }
    .popularization-description{
      position: absolute;
      bottom: -200px;
      left: -30px;
      width: 500px;
      .popularization-wrapper{
        position: relative;
        top: -120px;
        left: -480px;
      }
    }
  }
  .four-screen{
    .four-screen-bg-1{
      width: 1920px;
      height: 1869px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: -300px;
    }
    .four-screen-bg-2{
      width: 1066px;
      height: 1306px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: -238px;
      right: 0;
    }
    .four-screen-bg-3{
      width: 1920px;
      height: 860px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 764px;
      left: 0;
    }
    .four-screen-detail{
      width: 860px;
      font-size: 33px;
      line-height: 54px;
      color: #534833;
      position: absolute;
      left: 120px;
      top: 390px;
    }
  }
  .third-screen{
    .page-point{
      top: -50px;
    }
    p{
      font-family: 'EarlySummerSerif-Bold';
    }
    .third-screen-bg-1{
      width: 455px;
      height: 507px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 60px;
    }
    .third-screen-bg-2{
      width: 455px;
      height: 538px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 110px;
      right: 0;
    }
    .third-screen-bg-3{
      width: 581px;
      height: 579px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 214px;
      left: 130px;
    }
    .third-screen-bg-4{
      width: 610px;
      height: 658px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 214px;
      right: 90px;
    /* right: 312px; */
    }
    .third-screen-bg-text{
      width: 1371px;
      height: 297px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 324px;
      left: 272px;
      white-space: nowrap;
    }
    p{
      font-size: 160px;
      color: #938a58;
      text-align: center;
      position: absolute;
      bottom: 344px;
      left: 730px;
      white-space: nowrap;
    }
    .third-screen-bg-5{
      width: 641px;
      height: 1105px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 238px;
    }
    .third-screen-bg-6{
      width: 569px;
      height: 980px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 272px;
      right: 0;
    }
    .third-screen-bg-7{
      width: 1920px;
      height: 424px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: -100px;
      right: 0;
    }
  }
}
</style>
<script setup>
</script>