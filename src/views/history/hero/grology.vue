<template>
  <div class="grology">
    <div class="grology-origin" ref="originContainer">
      <div class="welcome-video-wrapper">
        <!-- 视频元素1 -->
        <video
            ref="welcomeVideo1"
            class="welcome-video"
            :src="welcomeVideoSrc"
            preload="auto"
            muted
            playsinline
            :style="{ opacity: activeWelcomeVideo === 1 ? 1 : 0, position: 'absolute' }"
            @ended="onWelcomeVideoEnded"
        ></video>
        <!-- 视频元素2 -->
        <video
            ref="welcomeVideo2"
            class="welcome-video"
            preload="auto"
            muted
            playsinline
            :style="{ opacity: activeWelcomeVideo === 2 ? 1 : 0, position: 'absolute' }"
            @ended="onWelcomeVideoEnded"
        ></video>
        <div class="welcome-video-roller" ref="welcomeVideoRoller"></div>
      </div>
      <div class="origin-video-wrapper" ref="originVideoWrapper">
        <!-- 视频元素1 -->
        <video
            ref="originVideo1"
            class="origin-video"
            preload="auto"
            playsinline
            :muted="isMuted"
            :style="{ opacity: activeOriginVideo === 1 ? 1 : 0, position: 'absolute' }"
            @ended="onOriginVideoEnded"
            @timeupdate="onOriginVideoTimeUpdate"
        ></video>
        <!-- 视频元素2 -->
        <video
            ref="originVideo2"
            class="origin-video"
            preload="auto"
            playsinline
            :muted="isMuted"
            :style="{ opacity: activeOriginVideo === 2 ? 1 : 0, position: 'absolute' }"
            @ended="onOriginVideoEnded"
            @timeupdate="onOriginVideoTimeUpdate"
        ></video>
        <div class="video-sound" @click="toggleSound">
          <div :class="isMuted ? 'video-sound-icon-off' : 'video-sound-icon-open'"></div>
        </div>
        <div class="video-accessories" ref="videoAccessories">
          <div class="video-description" ref="videoDescription">
            <p class="video-title">{{ originInfos[originCurrentIndex].title }}</p>
            <p :style="{width: originInfos[originCurrentIndex].width}">{{ originInfos[originCurrentIndex].description[0] }}</p>
          </div>
          <div class="video-indicator">
            <div
                class="video-dot"
                v-for="(item, index) in originInfos.length"
                :key="index"
                :class="{ active: originCurrentIndex === index }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="grology-water">
      <div class="water-cloud-1"></div>
      <div class="water-bg-video" id="page-mountains-to-rainforests">
        <video
            ref="climateVideo1"
            src="@/assets/images/geology/geology-to-water-climate-video.mp4"
            preload="auto"
            muted
            playsinline
            @ended="climateVideoEnded"
            @timeupdate="onClimateVideo1TimeUpdate"
            @loadeddata="onClimateVideo1LoadedData"
        ></video>
        <div class="climate-wrapper" id="climateHome">
          <div class="climate-title">从雪山到雨林</div>
          <div class="climate-description">
            <p>准备好了吗？</p>
            <p>我们先深入高原内部，感受阳光、雨雪和温度！</p>
          </div>
          <div class="climate-btn explore-btn" @click="linkTo('/voyage/climate')">深入探索</div>
        </div>
      </div> 
      <div class="water-cloud-2-wrapper">
        <div class="water-cloud-2"></div>
      </div>
      <div class="water-description">
        <div class="water-description-line"></div>
        <div class="page-the-asian-water-tower" id="page-the-asian-water-tower"></div>
        <div class="title">亚洲水塔</div>
        <div class="water-detail water-detail-1">
          <p>这里，</p>
          <p>滋养着世界上人口最多最稠密的大洲。</p>
        </div>
        <div class="water-detail water-detail-2">
          <p>众多冰川提供源源融水，让湖泊映照星空和雪山，</p>
          <p>河流自此奔涌而下，流向远方的土地……</p>
        </div>
        <div class="explore-button explore-btn"  @click="linkTo('/voyage/landscape')">深入探索</div>
      </div>
      <div class="biology">
        <div class="page-highland-spirit-trail page-point" id="page-highland-spirit-trail"></div>
        <div class="biology-detail-1"
             data-parallax="true"
             data-parallax-axis="y"
             data-parallax-from="150"
             data-parallax-to="-150"
             data-parallax-speed="1.1"
             data-parallax-center-lock="true"
        >
          <p>青藏高原是世界屋脊，</p>
          <p>也是独特的生物多样性宝库。</p>
        </div>
        <div class="biology-detail-2"
             data-parallax="true"
             data-parallax-axis="y"
             data-parallax-from="150"
             data-parallax-to="-150"
             data-parallax-speed="1.1"
             data-parallax-center-lock="true">
          <p>草原、湖泊、高山和密林为动植物提供了</p>
          <p>多样的栖息环境。</p>
        </div>
        <div
            class="biology-title"
            data-parallax="true"
            data-parallax-axis="y"
            data-parallax-from="250"
            data-parallax-to="-250"
            data-parallax-speed="1.1"
            data-parallax-center-lock="true"
        ></div>
        <div class="cloud-1"></div>
        <div class="cloud-2"
             data-parallax-axis="y"
             data-parallax-from="350"
             data-parallax-to="-350"
             data-parallax-speed="1.1"
             data-parallax-center-lock="true"></div>
        <div class="bird"></div>
      </div>
    </div>
    <div class="lives">
      <div class="first-screen" >
        <div class="first-screen-bg-1"></div>
        <div class="first-screen-bg-2"></div>
        <div class="mountain-img"></div>
        <div class="cloud-img"></div>
        <div class="goose">
          <div class="goose-info" @click="showGooseDescription">
            <div class="goose-img"></div>
            <div class="goose-tip"></div>
            <div class="goose-chinese goose-name">斑头雁</div>
            <div class="goose-english goose-name">Anser indicus</div>
          </div>
          <div class="goose-description" ref="gooseDescription" @click="closeGooseDescription">
            <div class="goose-description-img"></div>
            <div class="goose-description-text">主要繁殖在我国青海、西藏、新疆西部的高山湖泊等地区，越冬迁飞至陕西、湖南、四川、云南等地。身体大都呈现灰褐色，头顶具两道黑斑纹，嘴和脚呈现黄色。喜欢栖息在高原湖泊沼泽，飞行能力极强，能翻越喜马拉雅山，是世界上飞行高度最高的鸟类之一。</div>
          </div>
        </div>
      </div>
<!--      <div class="second-screen">-->
<!--        <div class="second-screen-bg"></div>-->
<!--        <div class="cloud-img-1"></div>-->
<!--        <div class="cloud-img-2"></div>-->
<!--        <div class="mountain-img"></div>-->
<!--        <div class="panthera">-->
<!--          <div class="panthera-info" @click="showPantheraDescription">-->
<!--            <div class="panthera-img"></div>-->
<!--            <div class="panthera-name panthera-chinese"  data-parallax="true"-->
<!--                 data-parallax-axis="y"-->
<!--                 data-parallax-from="100"-->
<!--                 data-parallax-to="0"-->
<!--                 data-parallax-speed="1.1"-->
<!--                 data-parallax-center-lock="true">雪豹</div>-->
<!--            <div class="panthera-name panthera-english"-->
<!--                 data-parallax="true"-->
<!--                 data-parallax-axis="y"-->
<!--                 data-parallax-from="100"-->
<!--                 data-parallax-to="0"-->
<!--                 data-parallax-speed="1.1"-->
<!--                 data-parallax-center-lock="true">Panthera uncia</div>-->
<!--          </div>-->
<!--          <div class="panthera-description" ref="pantheraDescription" @click="closePantheraDescription">-->
<!--            <div class="panthera-description-img"></div>-->
<!--            <div class="panthera-description-text">主要分布于青藏高原和新疆、青海、四川等地，国家一级保护野生动物。全身呈灰白色且满布黑斑，尾巴粗长，超过体长的2／3，四肢短粗。喜欢栖居在海拔3000—6000米的高山空旷多岩地带。主要捕食野羊、岩羊，有时也猎取狍子、旱獭、黄鼠、野兔等动物。</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="second-screen-new">
        <div class="hill-bg"></div>
        <div class="mountain-bg"></div>
        <div class="panthera">
          <div class="panthera-info" @click="showPantheraDescription">
            <div class="panthera-img"></div>
            <div class="panthera-name panthera-chinese"  data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">雪豹</div>
            <div class="panthera-name panthera-english"
                 data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">Panthera uncia</div>
          </div>
          <div class="panthera-description" ref="pantheraDescription" @click="closePantheraDescription">
            <div class="panthera-description-img"></div>
            <div class="panthera-description-text">主要分布于青藏高原和新疆、青海、四川等地，国家一级保护野生动物。全身呈灰白色且满布黑斑，尾巴粗长，超过体长的2／3，四肢短粗。喜欢栖居在海拔3000—6000米的高山空旷多岩地带。主要捕食野羊、岩羊，有时也猎取狍子、旱獭、黄鼠、野兔等动物。</div>
          </div>
        </div>
        <div class="snowlotus">
          <div class="snowlotus-info" @click="showPantheraDescription">
            <div class="snowlotus-img"></div>
            <div class="snowlotus-name snowlotus-chinese"  data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">唐古特雪莲</div>
            <div class="snowlotus-name snowlotus-english"
                 data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">Saussurea tangutica</div>
          </div>
          <div class="snowlotus-description" >
            <div class="snowlotus-description-img"></div>
            <div class="snowlotus-description-text">主要分布于我国甘肃、青海、西藏、四川等地，生长在海拔3800—5000米的高山流石滩、高山草甸地带。株高约30—70厘米，茎有稀疏的白色长柔毛，能适应高寒极端环境。药用则有清热解毒的功效。</div>
          </div>
        </div>
        <div class="sheep">
          <div class="sheep-info" @click="showPantheraDescription">
            <div class="sheep-img"></div>
            <div class="sheep-name sheep-chinese"  data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">岩羊</div>
            <div class="sheep-name sheep-english"
                 data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">Pseudois nayaur</div>
          </div>
          <div class="sheep-description" >
            <div class="sheep-description-img"></div>
            <div class="sheep-description-text">主要分布于中国西北、青藏高原等地，国家二级保护野生动物。体形中等，形态介于野山羊与野绵羊之间。两性都长角，雄性角粗大且弯曲。毛色多为青灰、褐灰色。栖息在海拔4000-5500米林线以上的高原、丘原和高山裸岩等地带，行动敏捷，善攀岩，以青草和各种灌丛枝叶为食。</div>
          </div>
        </div>
      </div>
      <div class="horizontal-03">
        <!--   草原部分     -->
        <div class="prairie">
          <div class="prairie-bg-hill"></div>
          <div class="prairie-bg-grass"></div>
          <!--   黑颈鹤     -->
          <div class="grus">
            <div class="grus-info" @click="showPantheraDescription">
              <div class="grus-img"></div>
              <div class="grus-name grus-chinese"  data-parallax="true"
                   data-parallax-axis="y"
                   data-parallax-from="100"
                   data-parallax-to="0"
                   data-parallax-speed="1.1"
                   data-parallax-center-lock="true">黑颈鹤</div>
              <div class="grus-name grus-english"
                   data-parallax="true"
                   data-parallax-axis="y"
                   data-parallax-from="100"
                   data-parallax-to="0"
                   data-parallax-speed="1.1"
                   data-parallax-center-lock="true">Grus nigricollis</div>
            </div>
            <div class="grus-description" >
              <div class="grus-description-img"></div>
              <div class="grus-description-text">唯一在高原生长繁殖的鹤类，主要分布在青藏高原和云贵高原，国家一级保护野生动物，也是拉萨市的“市鸟”。通体较白，头、枕和整个颈部均为黑色，眼先和头顶裸露皮肤为红色。主要栖息在高山沼泽、草甸、湖周沼泽地和河谷沼泽区，以植物的根、昆虫、鱼、蛙等为食。</div>
            </div>
          </div>
          <!--   鼠兔    -->
          <div class="rabbit">
            <div class="rabbit-info" @click="showPantheraDescription">
              <div class="rabbit-img"></div>
              <div class="rabbit-name rabbit-chinese"  data-parallax="true"
                   data-parallax-axis="y"
                   data-parallax-from="100"
                   data-parallax-to="0"
                   data-parallax-speed="1.1"
                   data-parallax-center-lock="true">高原鼠兔</div>
              <div class="rabbit-name rabbit-english"
                   data-parallax="true"
                   data-parallax-axis="y"
                   data-parallax-from="100"
                   data-parallax-to="0"
                   data-parallax-speed="1.1"
                   data-parallax-center-lock="true">Ochotona curzoniae</div>
            </div>
            <div class="rabbit-description" >
              <div class="rabbit-description-img"></div>
              <div class="rabbit-description-text">主要分布于西藏、青海、甘肃、四川等地。体型中等，体长约120-190毫米，体重可达178克，耳朵呈现圆形，唇鼻周围呈黑色，背毛为沙灰色，腹毛呈现脏白色。栖息于海拔4000米左右的高山草甸中，穴居且家族式群居，白天活动，不冬眠也不储草。</div>
            </div>
          </div>
          <!--   藏羚羊    -->
          <div class="sheep">
            <div class="sheep-info" @click="showPantheraDescription">
              <div class="sheep-img"></div>
              <div class="sheep-name sheep-chinese"  data-parallax="true"
                   data-parallax-axis="y"
                   data-parallax-from="100"
                   data-parallax-to="0"
                   data-parallax-speed="1.1"
                   data-parallax-center-lock="true">藏羚</div>
              <div class="sheep-name sheep-english"
                   data-parallax="true"
                   data-parallax-axis="y"
                   data-parallax-from="100"
                   data-parallax-to="0"
                   data-parallax-speed="1.1"
                   data-parallax-center-lock="true">Pantholops hodgsonii</div>
            </div>
            <div class="sheep-description" >
              <div class="sheep-description-img"></div>
              <div class="sheep-description-text">也叫藏羚羊、长角羊，青藏高原特有物种，国家一级保护野生动物。体长120-140厘米，上体毛色呈现淡棕褐色，胸腹部和四肢内侧为白色。雄性角细长似鞭，乌黑发亮。栖息于海拔4000-5000米的高山草原和荒漠地带，善于奔跑，群居性强，以草类植物为食。</div>
            </div>
          </div>
        </div>
        <!--   森林     -->
        <div class="forest">
          <div class="forest-bg-hill"></div>
          <div class="forest-bg-grass"></div>
        </div>
      </div>
      <div class="horizontal-02">
        <div class="cloud-img-2-extended"></div>
        <div class="third-screen">
          <div class="cloud-img-1"></div>
          <div class="chiru">
            <div class="chiru-info" @click="showChiruDescription">
              <div class="chiru-img"></div>
              <div class="chiru-name chiru-chinese">藏羚</div>
              <div class="chiru-name chiru-english">Pantholops hodgsonii</div>
            </div>
            <div class="chiru-description" ref="chiruDescription" @click="closeChiruDescription">
              <div class="chiru-description-img"></div>
              <div class="chiru-description-text">也叫藏羚羊、长角羊，青藏高原特有物种，国家一级保护野生动物。体长120-140厘米，上体毛色呈现淡棕褐色，胸腹部和四肢内侧为白色。雄性角细长似鞭，乌黑发亮。栖息于海拔4000-5000米的高山草原和荒漠地带，善于奔跑，群居性强，以草类植物为食。</div>
            </div>
          </div>
        </div>
        <div class="four-screen">
          <div class="four-screen-bg"></div>
          <div class="four-screen-tree"></div>
          <div class="panda">
            <div class="panda-info" @click="showPandaDescription">
              <div class="panda-img"></div>
              <div class="panda-grass"></div>
              <div class="panda-name panda-chinese"
                   data-parallax="true"
                   data-parallax-axis="y"
                   data-parallax-from="100"
                   data-parallax-to="0"
                   data-parallax-speed="1.1"
                   data-parallax-center-lock="true">大熊猫</div>
              <div class="panda-name panda-english"
                   data-parallax="true"
                   data-parallax-axis="y"
                   data-parallax-from="100"
                   data-parallax-to="0"
                   data-parallax-speed="1.1"
                   data-parallax-center-lock="true">Ailuropoda melanoleuca</div>
            </div>
            <div class="panda-description" ref="pandaDescription" @click="closePandaDescription">
              <div class="panda-description-img"></div>
              <div class="panda-description-text">主要分布于四川、陕西和甘肃的部分山区，国家一级保护野生动物。体形似熊，但头部宽而短，毛色以黑白相间为特征，眼圈、肩部及四肢为黑色。多栖息在海拔2600—3500米的高山竹林地带，喜欢湿润、凉爽的气候。大熊猫性情较温顺，以竹子为主食，偶尔也吃小型动物。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="secret">
      <div class="first-screen screen">
        <div class="clouds">
          <div class="cloud-img-1"></div>
          <div class="cloud-img-2"></div>
        </div>
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
import { onMounted, onUnmounted, ref, nextTick, computed } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRouter } from 'vue-router'
import { pxToVw, pxToVh, pxToVwPx, pxToVhPx  } from '@/utils/viewportUtils';
import startPage1 from '@/assets/images/geology/start-page-1.mp4'
import startPage2 from '@/assets/images/geology/start-page-2.mp4'
import geologyVideo1 from '@/assets/images/geology/geology-video-1.mp4'
import geologyVideo2 from '@/assets/images/geology/geology-video-2.mp4'
import geologyVideo3 from '@/assets/images/geology/geology-video-3.mp4'

const router = useRouter()

// 定义 emits
const emit = defineEmits(['thirdVideoEnded'])

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const linkTo = path =>{
  router.push(path)
}

const welcomeVideoSrc = ref(startPage1); // 初始为 startPage1

const welcomeVideo1 = ref(null);
const welcomeVideo2 = ref(null);
const activeWelcomeVideo = ref(1); // 当前激活的 welcomeVideo 元素 (1 或 2)
const isSwitchingWelcomeVideo = ref(false); // 是否正在切换 welcomeVideo

const originContainer = ref(null);
const originVideo1 = ref(null);
const originVideo2 = ref(null);
const activeOriginVideo = ref(1); // 当前激活的 originVideo 元素 (1 或 2)
const isSwitchingOriginVideo = ref(false); // 是否正在切换 originVideo

// 兼容性：保留原有的 ref，指向当前激活的视频
const welcomeVideo = computed(() => activeWelcomeVideo.value === 1 ? welcomeVideo1.value : welcomeVideo2.value);
const originVideo = computed(() => activeOriginVideo.value === 1 ? originVideo1.value : originVideo2.value);

const welcomeVideoRoller = ref(null);
const originVideoWrapper = ref(null);
const videoAccessories = ref(null);
const videoDescription = ref(null);
// 动效相关变量已移除，保留基础数据
const originCurrentIndex = ref(0); // 当前视频索引（保留用于显示）
const welcomeVideoStarted = ref(false); // welcomeVideo 是否已开始播放
const welcomeVideoCompleted = ref(false); // welcomeVideo 是否播放完成
const welcomeVideoHidden = ref(false); // welcomeVideo 是否已隐藏
const startPage1Completed = ref(false); // startPage1 是否播放完成
const startPage2Started = ref(false); // startPage2 是否已开始播放
const originVideoStarted = ref(false); // originVideo 是否已开始播放
const originVideoCompleted = ref(false); // originVideo 是否播放完成
const videoAccessoriesShown = ref(false); // video-accessories 是否已显示
const firstDescriptionShown = ref(false); // 第一个 description 是否已显示
const secondDescriptionShown = ref(false); // 第二个 description 是否已显示
const secondVideoStarted = ref(false); // 第二个视频是否已开始播放
const secondVideoCompleted = ref(false); // 第二个视频是否已播放完成
const videoDescriptionShownAfterSecondVideo = ref(false); // 第二个视频播放完成后 video-description 是否已显示
const thirdVideoStarted = ref(false); // 第三个视频是否已开始播放
const thirdVideoCompleted = ref(false); // 第三个视频是否已播放完成
const videoDescriptionShownAfterThirdVideo = ref(false); // 第三个视频播放完成后 video-description 是否已显示
const isProcessingScroll = ref(false); // 是否正在处理滚动事件，防止快速连续触发
let lastRollbackTime = 0; // 上次回滚的时间戳，用于防抖
const ROLLBACK_DEBOUNCE_TIME = 800; // 回滚防抖时间（毫秒），至少0.8秒才能执行下一个动画
let lastForwardScrollTime = 0; // 上次正向滚动的时间戳，用于防抖
const FORWARD_SCROLL_DEBOUNCE_TIME = 500; // 正向滚动防抖时间（毫秒）
const canSkipToEnd = ref(false); // 视频是否已播放1秒，允许跳过到结尾
const isSwitchedFromMenu = ref(false); // 是否通过菜单跳转播放视频
let welcomeVideoScrollHandler = null; // welcomeVideo 滚动事件处理器
let switchToOriginVideoHandler = null; // 切换到 originVideo 的滚动事件处理器
let playStartPage2Handler = null; // 播放 startPage2 的滚动事件处理器
let showVideoAccessoriesHandler = null; // 显示 video-accessories 的滚动事件处理器
let showFirstDescriptionHandler = null; // 显示第一个 description 的滚动事件处理器
let showSecondDescriptionHandler = null; // 显示第二个 description 的滚动事件处理器
let playSecondVideoHandler = null; // 播放第二个视频的滚动事件处理器
let showVideoDescriptionAfterSecondVideoHandler = null; // 第二个视频播放完成后显示 video-description 的滚动事件处理器
let hideVideoDescriptionAndPlayThirdVideoHandler = null; // 隐藏 video-description 并播放第三个视频的滚动事件处理器
let showVideoDescriptionAfterThirdVideoHandler = null; // 第三个视频播放完成后显示 video-description 的滚动事件处理器
let skipToVideoEndHandler = null; // 跳过到视频结尾的滚动事件处理器
let scrollBackToOriginVideoHandler = null; // 检测滚动回到 originVideo 区域的监听器
let scrollStableTimer = null; // 用于检测滚动稳定的定时器
let preventOverscrollHandler = null; // 防止漏白的全局滚动监听器
let rollbackStableTime = 0; // 回滚到 originVideo 区域的稳定时间戳
const ROLLBACK_STABLE_DURATION = 500; // 回滚稳定期持续时间（毫秒），至少500ms后才能执行回滚逻辑

// climate video 相关的 refs 和状态
const climateVideo1 = ref(null);
let climateVideo1Duration = 0;
let waterCloud1ScrollTrigger = null; // water-cloud-1 的 ScrollTrigger 实例
let waterCloud2ScrollTrigger = null; // water-cloud-2 的 ScrollTrigger 实例
let waterVideoScrollTrigger = null; // water-bg-video 的 ScrollTrigger 实例
let gooseInfoScrollTrigger = null; // 大雁 的 ScrollTrigger 实例
let climateVideo1Completed = false; // 第一个视频是否播放完成
let canSkipClimateVideoToEnd = false; // 气候视频是否已播放1秒，允许跳过到结尾
let skipToClimateVideoEndHandler = null; // 跳过到气候视频结尾的滚动事件处理器
let scrollDisabled = false; // 是否禁用滚动
let scrollDisabledHandler = null; // 滚动禁用事件处理器
let lightScrollLockHandler = null; // 轻量级滚动锁定处理器（不修改body样式）
const gooseDescription = ref(null); // goose-description 的 ref
const gooseDescriptionShown = ref(false); // goose-description 是否已显示
const pantheraDescription = ref(null); // panthera-description 的 ref
const pantheraDescriptionShown = ref(false); // panthera-description 是否已显示
const chiruDescription = ref(null); // chiru-description 的 ref
const chiruDescriptionShown = ref(false); // chiru-description 是否已显示
const pandaDescription = ref(null); // panda-description 的 ref
const pandaDescriptionShown = ref(false); // panda-description 是否已显示

// 声音控制
const isMuted = ref(false); // 是否静音，默认为 false（声音开启）

// 通用的详情介绍弹出/关闭管理器
let currentDescriptionHandler = null; // 当前打开的详情介绍的事件处理器

// 动效相关函数已移除：loadVideoMetadata, initVideoScroll

// 动效相关函数已移除：handleScrollUpdate


// 源起万万年
const originInfos = ref([
  {
    width: pxToVw(700),
    videoUrl: geologyVideo1,
    title: '特提斯洋的终曲',
    description: [
        '距今约3.6亿年前的远古时期，地球上只存在两个超级大陆：北半球的劳亚大陆和南半球的冈瓦纳大陆，大陆之间则是波涛汹涌的古特提斯洋',
        '大约3亿年前，大陆开始解体。劳亚大陆分裂成了北美大陆和欧亚大陆，而冈瓦纳大陆的裂离则更加破碎。分裂出的大陆块有印度、南极、澳大利亚等，小陆块则有羌塘板块、拉萨板块等。辽阔的特提斯洋也被众多大陆块阻隔切割，迎来了落幕的序章……',
    ]
  },
  {
    width: pxToVw(640),
    videoUrl: geologyVideo2,
    title: '崛起的高原',
    description: ['当特提斯洋被切割的同时，从冈瓦纳大陆裂离的板块也逐次朝北移动。先是昆仑板块，然后是可可西里板块，接着是羌塘板块和拉萨板块。它们经过漫长的漂移，由南向北，碰撞挤压到新的欧亚大陆的南缘。最后裂离向北起航的是印度板块，它极速追赶前面的拉萨板块，最终在6500万年前左右，印度板块在北纬13度线附近与已经成为新欧亚板块南缘的拉萨板块发生猛烈碰撞。随着碰撞挤压的持续，摧枯拉朽，造成了超大面积的地表隆起，一个全新的高原开始崛起……'],
  },
  {
    width: pxToVw(694),
    videoUrl: geologyVideo3,
    title: '永恒的进行时',
    description: ['当特提斯洋的波涛退去，古海化为陆地，青藏大地的轮廓初现。但印度板块和欧亚板块的挤压还在持续，巨大的断裂带在高原上纵横交错，地壳不断厚缩与隆起。约2500万年前，印度板块插入欧亚板块下，造成了喜马拉雅山的快速隆升，约到1500万年前，喜马拉雅山脉到达了现今的高度。但直至今日，世界屋脊的活动也从未停止。无论是雪峰与谷地的隆升、喷出蒸汽的热泉，还是频繁的地震，都预示着关于青藏高原的故事，正在继续……']
  },
])

// 动效相关函数已移除：currentDescription, switchVideo, onOriginVideoLoaded, onOriginVideoEnded

// 切换声音
const toggleSound = () => {
  isMuted.value = !isMuted.value;
};

// 监听第一个视频的时间更新
const onClimateVideo1TimeUpdate = () => {
  if (!climateVideo1.value) return;
  
  // 获取视频时长（如果还没有获取）
  if (!climateVideo1Duration && climateVideo1.value.duration) {
    climateVideo1Duration = climateVideo1.value.duration;
  }
  
  // 如果视频已播放1秒，允许跳过
  if (climateVideo1.value.currentTime >= 1 && !canSkipClimateVideoToEnd) {
    canSkipClimateVideoToEnd = true;
    // 初始化跳过到气候视频结尾的滚动监听
    initSkipToClimateVideoEndScroll();
  }
};

// 监听第一个视频的数据加载完成
const onClimateVideo1LoadedData = () => {
  if (!climateVideo1.value) return;
  
  // 确保视频从开头开始，防止显示最后一帧
  if (climateVideo1.value.currentTime > 0 && !climateVideo1Completed) {
    climateVideo1.value.currentTime = 0;
  }
};

// 启用滚动锁定
const enableScrollLock = () => {
  if (scrollDisabled) return;
  scrollDisabled = true;
  
  // 保存当前滚动位置
  const scrollY = window.scrollY || window.pageYOffset;
  
  // 给 body 添加样式来完全禁止滚动
  const body = document.body;
  const html = document.documentElement;
  
  // 创建滚动事件处理器
  scrollDisabledHandler = (e) => {
    // 阻止所有滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 确保滚动位置保持在顶部
    window.scrollTo(0, 0);
    
    return false;
  };
  
  // 保存原始样式到处理器对象上
  scrollDisabledHandler._originalBodyOverflow = body.style.overflow;
  scrollDisabledHandler._originalBodyPosition = body.style.position;
  scrollDisabledHandler._originalBodyTop = body.style.top;
  scrollDisabledHandler._originalBodyWidth = body.style.width;
  scrollDisabledHandler._originalHtmlOverflow = html.style.overflow;
  scrollDisabledHandler._scrollY = scrollY;
  
  // 设置 body 样式来禁止滚动
  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}px`;
  body.style.width = '100%';
  html.style.overflow = 'hidden';
  
  // 监听多种滚动事件
  window.addEventListener('wheel', scrollDisabledHandler, { passive: false });
  window.addEventListener('touchmove', scrollDisabledHandler, { passive: false });
  window.addEventListener('scroll', scrollDisabledHandler, { passive: false });
  
  // 阻止键盘滚动
  const keyHandler = (e) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
      e.preventDefault();
      return false;
    }
  };
  window.addEventListener('keydown', keyHandler);
  scrollDisabledHandler._keyHandler = keyHandler;
};

// 禁用滚动锁定
const disableScrollLock = () => {
  if (!scrollDisabled) return;
  scrollDisabled = false;
  
  if (scrollDisabledHandler) {
    // 移除事件监听
    window.removeEventListener('wheel', scrollDisabledHandler);
    window.removeEventListener('touchmove', scrollDisabledHandler);
    window.removeEventListener('scroll', scrollDisabledHandler);
    
    if (scrollDisabledHandler._keyHandler) {
      window.removeEventListener('keydown', scrollDisabledHandler._keyHandler);
    }
    
    // 恢复 body 和 html 的原始样式
    const body = document.body;
    const html = document.documentElement;
    
    if (scrollDisabledHandler._originalBodyOverflow !== undefined) {
      body.style.overflow = scrollDisabledHandler._originalBodyOverflow || '';
    }
    if (scrollDisabledHandler._originalBodyPosition !== undefined) {
      body.style.position = scrollDisabledHandler._originalBodyPosition || '';
    }
    if (scrollDisabledHandler._originalBodyTop !== undefined) {
      body.style.top = scrollDisabledHandler._originalBodyTop || '';
    }
    if (scrollDisabledHandler._originalBodyWidth !== undefined) {
      body.style.width = scrollDisabledHandler._originalBodyWidth || '';
    }
    if (scrollDisabledHandler._originalHtmlOverflow !== undefined) {
      html.style.overflow = scrollDisabledHandler._originalHtmlOverflow || '';
    }
    
    // 恢复滚动位置
    if (scrollDisabledHandler._scrollY !== undefined) {
      window.scrollTo(0, scrollDisabledHandler._scrollY);
    }
    
    scrollDisabledHandler = null;
  }
};

// 启用轻量级滚动锁定（不修改body样式，只阻止滚动事件，用于ScrollTrigger pin区域）
// scrollTriggerInstance: ScrollTrigger 实例，用于获取锁定位置
const enableLightScrollLock = (scrollTriggerInstance = null) => {
  if (lightScrollLockHandler) return;
  
  // 跟踪触摸起始位置，用于区分点击和滚动
  let touchStartY = null;
  let touchStartX = null;
  const CLICK_THRESHOLD = 10; // 移动距离小于10px认为是点击
  
  // 触摸开始事件处理器
  const touchStartHandler = (e) => {
    if (e.touches && e.touches.length === 1) {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    }
  };
  
  // 创建滚动事件处理器
  lightScrollLockHandler = (e) => {
    // 对于 touchmove 事件，检查是否是真正的滚动（移动距离大于阈值）
    if (e.type === 'touchmove' && touchStartY !== null && touchStartX !== null) {
      if (e.touches && e.touches.length === 1) {
        const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
        const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
        // 如果移动距离很小，可能是点击，不阻止
        if (deltaY < CLICK_THRESHOLD && deltaX < CLICK_THRESHOLD) {
          return;
        }
      }
    }
    
    // 阻止滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 如果有 ScrollTrigger 实例，使用它的 start 位置；否则使用当前滚动位置
    let targetScrollY;
    if (scrollTriggerInstance && scrollTriggerInstance.start) {
      targetScrollY = scrollTriggerInstance.start;
    } else {
      targetScrollY = window.scrollY || window.pageYOffset;
    }
    
    // 保持滚动位置不变
    window.scrollTo(0, targetScrollY);
    
    return false;
  };
  
  // 触摸结束事件处理器
  const touchEndHandler = () => {
    touchStartY = null;
    touchStartX = null;
  };
  
  // 保存 ScrollTrigger 实例到处理器
  lightScrollLockHandler._scrollTrigger = scrollTriggerInstance;
  lightScrollLockHandler._touchStartHandler = touchStartHandler;
  lightScrollLockHandler._touchEndHandler = touchEndHandler;
  
  // 监听触摸开始和结束事件
  window.addEventListener('touchstart', touchStartHandler, { passive: true });
  window.addEventListener('touchend', touchEndHandler, { passive: true });
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', lightScrollLockHandler, { passive: false });
  window.addEventListener('touchmove', lightScrollLockHandler, { passive: false });
  window.addEventListener('scroll', lightScrollLockHandler, { passive: false });
  
  // 阻止键盘滚动
  const keyHandler = (e) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
      e.preventDefault();
      return false;
    }
  };
  window.addEventListener('keydown', keyHandler);
  lightScrollLockHandler._keyHandler = keyHandler;
};

// 禁用轻量级滚动锁定
const disableLightScrollLock = () => {
  if (!lightScrollLockHandler) return;
  
  // 移除事件监听
  window.removeEventListener('wheel', lightScrollLockHandler);
  window.removeEventListener('touchmove', lightScrollLockHandler);
  window.removeEventListener('scroll', lightScrollLockHandler);
  
  if (lightScrollLockHandler._touchStartHandler) {
    window.removeEventListener('touchstart', lightScrollLockHandler._touchStartHandler);
  }
  if (lightScrollLockHandler._touchEndHandler) {
    window.removeEventListener('touchend', lightScrollLockHandler._touchEndHandler);
  }
  if (lightScrollLockHandler._keyHandler) {
    window.removeEventListener('keydown', lightScrollLockHandler._keyHandler);
  }
  
  lightScrollLockHandler = null;
};

// 初始化 water-bg-video 的滚动固定
const initWaterVideoScroll = async () => {
  await nextTick();
  
  const waterBgVideo = document.querySelector('.water-bg-video');
  if (!waterBgVideo || !climateVideo1.value) return;
  
  // 如果已经创建过，先销毁
  if (waterVideoScrollTrigger) {
    waterVideoScrollTrigger.kill();
  }
  
  // 加载视频时长
  if (!climateVideo1Duration && climateVideo1.value.duration) {
    climateVideo1Duration = climateVideo1.value.duration;
  } else if (!climateVideo1Duration) {
    // 如果还没有加载完成，等待加载
    await new Promise((resolve) => {
      if (climateVideo1.value) {
        if (climateVideo1.value.readyState >= 2) {
          climateVideo1Duration = climateVideo1.value.duration;
          resolve(climateVideo1Duration);
        } else {
          climateVideo1.value.addEventListener('loadedmetadata', () => {
            climateVideo1Duration = climateVideo1.value.duration;
            resolve(climateVideo1Duration);
          }, { once: true });
        }
      } else {
        resolve(0);
      }
    });
  }
  
  // 计算滚动距离：视频时长 + climate-wrapper 显示时间（约0.5秒）
  const scrollDistance = climateVideo1Duration * 100 + 500; // 假设每1秒视频需要100px滚动距离
  
  // 重置状态
  climateVideo1Completed = false;
  canSkipClimateVideoToEnd = false;
  
  // 移除之前的跳过滚动事件监听
  if (skipToClimateVideoEndHandler) {
    window.removeEventListener('wheel', skipToClimateVideoEndHandler, { passive: false });
    window.removeEventListener('touchmove', skipToClimateVideoEndHandler, { passive: false });
    window.removeEventListener('scroll', skipToClimateVideoEndHandler, { passive: false });
    skipToClimateVideoEndHandler = null;
  }
  
  if (climateVideo1.value) {
    // 确保视频重置到开头并暂停
    climateVideo1.value.currentTime = 0;
    climateVideo1.value.pause();
    // 等待一帧确保 currentTime 设置生效
    await new Promise(resolve => requestAnimationFrame(resolve));
    // 再次确保 currentTime 为 0（防止 autoplay 导致的问题）
    if (climateVideo1.value.currentTime > 0) {
      climateVideo1.value.currentTime = 0;
    }
  }
  
  // 创建 ScrollTrigger 来固定容器
  waterVideoScrollTrigger = ScrollTrigger.create({
    trigger: waterBgVideo,
    start: 'top top', // 当容器顶部到达视口顶部时开始
    end: `+=${scrollDistance}`, // 滚动距离
    pin: true, // 固定容器
    pinSpacing: true, // 保持间距
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onStart: () => {
      // 当视频从底部出现时就开始播放（在固定之前）
      if (climateVideo1.value && !climateVideo1Completed) {
        // 确保从开头开始播放
        if (climateVideo1.value.currentTime > 0) {
          climateVideo1.value.currentTime = 0;
        }
        // 等待 currentTime 设置生效后再播放
        requestAnimationFrame(() => {
          if (climateVideo1.value && !climateVideo1Completed) {
            climateVideo1.value.play().catch(err => {
              console.warn('Climate video 1 play failed:', err);
            });
          }
        });
      }
    },
    onEnter: (self) => {
      // 当进入固定区域时，启用轻量级滚动锁定并开始播放视频
      enableLightScrollLock(self);
      if (climateVideo1.value && !climateVideo1Completed) {
        // 确保从开头开始播放
        if (climateVideo1.value.currentTime > 0) {
          climateVideo1.value.currentTime = 0;
        }
        climateVideo1.value.play().catch(err => {
          console.warn('Climate video 1 play failed:', err);
        });
      }
    },
    onUpdate: (self) => {
      // 如果视频未播放完成，保持滚动锁定
      if (!climateVideo1Completed && climateVideo1.value && climateVideo1Duration > 0) {
        // 如果视频暂停了，尝试播放
        if (climateVideo1.value.paused && self.progress > 0) {
          climateVideo1.value.play().catch(err => {
            console.warn('Climate video 1 play failed:', err);
          });
        }
        // 更新滚动锁定处理器的 ScrollTrigger 实例引用
        if (lightScrollLockHandler) {
          lightScrollLockHandler._scrollTrigger = self;
        }
      } else if (climateVideo1Completed) {
        // 视频播放完成后，允许滚动
        disableLightScrollLock();
      }
    },
    onLeave: () => {
      // 离开固定区域时，禁用滚动锁定并暂停视频
      disableLightScrollLock();
      if (climateVideo1.value) {
        climateVideo1.value.pause();
      }
    },
    onEnterBack: (self) => {
      // 向上滚动回到固定区域时，启用滚动锁定并恢复播放
      enableLightScrollLock(self);
      if (climateVideo1.value && !climateVideo1Completed) {
        // 如果视频已经播放完成或接近完成，重置到开头
        if (climateVideo1.value.currentTime >= climateVideo1Duration - 0.1) {
          climateVideo1.value.currentTime = 0;
          // 重置跳过状态
          canSkipClimateVideoToEnd = false;
          // 移除之前的跳过滚动事件监听
          if (skipToClimateVideoEndHandler) {
            window.removeEventListener('wheel', skipToClimateVideoEndHandler, { passive: false });
            window.removeEventListener('touchmove', skipToClimateVideoEndHandler, { passive: false });
            window.removeEventListener('scroll', skipToClimateVideoEndHandler, { passive: false });
            skipToClimateVideoEndHandler = null;
          }
        }
        climateVideo1.value.play().catch(err => {
          console.warn('Climate video 1 play failed:', err);
        });
      }
    }
  });
};

// 初始化 water-cloud-1 的滚动动画
const initWaterCloud1Animation = async () => {
  await nextTick();
  
  const waterCloud1 = document.querySelector('.water-cloud-1');
  if (!waterCloud1) return;
  
  // 如果已经创建过，先销毁
  if (waterCloud1ScrollTrigger) {
    waterCloud1ScrollTrigger.kill();
  }

  waterCloud1ScrollTrigger = gsap.to('.water-cloud-1', {
    y: pxToVh(-1400),
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.water-cloud-1',
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: `top top-=${pxToVhPx(500)}`, // 当元素顶部到达视口顶部时结束
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });
};
// 初始化 water-cloud-2 的滚动动画
const initWaterCloud2Animation = async () => {
  await nextTick();

  const waterCloud2 = document.querySelector('.water-cloud-2');
  if (!waterCloud2) return;

  // 如果已经创建过，先销毁
  if (waterCloud2ScrollTrigger) {
    waterCloud2ScrollTrigger.kill();
  }

  waterCloud2ScrollTrigger = gsap.to('.water-cloud-2', {
    y: pxToVh(-1000),
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.water-cloud-2',
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: `top top-=${pxToVhPx(500)}`, // 当元素顶部到达视口顶部时结束
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });
};
// 初始化 大雁 的滚动动画
const initGooseAnimation = async () => {
  await nextTick();

  const firstScreen = document.querySelector('.first-screen');
  if (!firstScreen) return;

  // 如果已经创建过，先销毁
  if (gooseInfoScrollTrigger) {
    gooseInfoScrollTrigger.kill();
  }

  // 竖向视差动画：当 first-screen 从底部到顶部时，goose-info 向上移动
  const verticalAnimation = gsap.to('.goose-info', {
    y: pxToVh(-800),
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.lives .first-screen',
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: 'top top', // 当元素顶部到达视口顶部时结束
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });

  // 横向视差动画：当 first-screen 横向移动时，goose-info 移动得更快
  // first-screen 移动 -960px，goose-info 移动 -1200px（更快）
  const horizontalAnimation = gsap.to('.goose-info', {
    x: pxToVw(-1200), // 比 first-screen 的 -960px 移动得更快
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.lives .first-screen',
      start: 'top top', // 当 first-screen 顶部到达视口顶部时开始
      end: `+=${pxToVwPx(960)}`, // 滚动 960px（与 first-screen 的横向移动距离一致）
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });

  // 保存两个动画的引用（如果需要单独销毁）
  gooseInfoScrollTrigger = {
    vertical: verticalAnimation,
    horizontal: horizontalAnimation,
    kill: () => {
      verticalAnimation.scrollTrigger?.kill();
      horizontalAnimation.scrollTrigger?.kill();
    }
  };
};

// 通用的详情介绍弹出方法
// elementRef: 详情介绍元素的 ref
// isShownRef: 是否已显示的 ref
// onClose: 关闭时的回调函数（可选）
const showDescription = (elementRef, isShownRef, onClose) => {
  if (!elementRef.value || isShownRef.value) return;
  
  isShownRef.value = true;
  
  // 使用轻量级滚动锁定，不移动 body（只阻止滚动事件）
  enableLightScrollLock();
  
  // 确保元素可见并重置状态
  if (elementRef.value) {
    // 确保元素可见
    elementRef.value.style.display = 'block';
    elementRef.value.style.pointerEvents = 'auto';
    elementRef.value.style.visibility = 'visible';
    
    // 将详情介绍改为 fixed 定位，确保即使 body 移动也能显示在视口中
    const computedStyle = window.getComputedStyle(elementRef.value);
    if (computedStyle.position !== 'fixed') {
      // 保存原始定位
      elementRef.value._originalPosition = computedStyle.position;
      elementRef.value._originalTop = computedStyle.top;
      elementRef.value._originalLeft = computedStyle.left;
      elementRef.value._originalRight = computedStyle.right;
      
      // 获取元素相对于视口的位置
      const rect = elementRef.value.getBoundingClientRect();
      elementRef.value.style.position = 'fixed';
      elementRef.value.style.top = `${rect.top}px`;
      // 保持原有的 left 或 right 定位
      if (computedStyle.left !== 'auto' && computedStyle.left !== '') {
        elementRef.value.style.left = `${rect.left}px`;
        elementRef.value.style.right = 'auto';
      } else if (computedStyle.right !== 'auto' && computedStyle.right !== '') {
        elementRef.value.style.right = `${window.innerWidth - rect.right}px`;
        elementRef.value.style.left = 'auto';
      }
    }
    
    // 清除之前的变换，确保从干净的状态开始
    gsap.set(elementRef.value, { 
      clearProps: 'transform',
      opacity: 0,
      scale: 1,
      x: 0,
      y: 0
    });
  }
  
  // 等待一帧确保 DOM 更新
  requestAnimationFrame(() => {
    if (!elementRef.value) return;
    
    // 设置初始状态：向下偏移并透明
    gsap.set(elementRef.value, { 
      opacity: 0, 
      y: pxToVh(30)
    });
    
    // 显示详情介绍，带有上浮动画效果
    gsap.to(elementRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        // 添加关闭事件监听器
        setupDescriptionCloseHandler(elementRef, isShownRef, onClose);
      }
    });
  });
};

// 通用的详情介绍关闭方法
const closeDescription = (elementRef, isShownRef, onClose) => {
  if (!elementRef.value || !isShownRef.value) return;
  
  isShownRef.value = false;
  
  // 隐藏详情介绍，带有下沉动画效果
  gsap.to(elementRef.value, {
    opacity: 0,
    y: pxToVh(30),
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      // 禁用 pointer-events
      if (elementRef.value) {
        elementRef.value.style.pointerEvents = 'none';
        
        // 恢复原始的定位方式
        if (elementRef.value._originalPosition !== undefined) {
          elementRef.value.style.position = elementRef.value._originalPosition || '';
          if (elementRef.value._originalTop !== undefined) {
            elementRef.value.style.top = elementRef.value._originalTop || '';
          }
          if (elementRef.value._originalLeft !== undefined) {
            elementRef.value.style.left = elementRef.value._originalLeft || '';
          }
          if (elementRef.value._originalRight !== undefined) {
            elementRef.value.style.right = elementRef.value._originalRight || '';
          }
          // 清除保存的原始值
          delete elementRef.value._originalPosition;
          delete elementRef.value._originalTop;
          delete elementRef.value._originalLeft;
          delete elementRef.value._originalRight;
        }
        
        // 完全重置变换，确保下次打开时从正确位置开始
        gsap.set(elementRef.value, { 
          clearProps: 'transform'
        });
      }
      
      // 恢复滚动（使用轻量级滚动锁定）
      disableLightScrollLock();
      
      // 清理事件监听器
      if (currentDescriptionHandler) {
        document.removeEventListener('click', currentDescriptionHandler.click);
        window.removeEventListener('wheel', currentDescriptionHandler.scroll);
        window.removeEventListener('touchmove', currentDescriptionHandler.scroll);
        currentDescriptionHandler = null;
      }
      
      // 执行自定义回调
      if (onClose) {
        onClose();
      }
    }
  });
};

// 设置关闭详情介绍的事件处理器
const setupDescriptionCloseHandler = (elementRef, isShownRef, onClose) => {
  if (currentDescriptionHandler) return;
  
  // 点击页面关闭
  const clickHandler = (e) => {
    // 如果点击的是详情介绍本身，不关闭（防止点击内容时关闭）
    if (elementRef.value && elementRef.value.contains(e.target)) {
      return;
    }
    closeDescription(elementRef, isShownRef, onClose);
  };
  
  // 滚动页面关闭
  const scrollHandler = () => {
    closeDescription(elementRef, isShownRef, onClose);
  };
  
  // 添加事件监听器
  document.addEventListener('click', clickHandler, { once: true });
  window.addEventListener('wheel', scrollHandler, { once: true, passive: true });
  window.addEventListener('touchmove', scrollHandler, { once: true, passive: true });
  
  currentDescriptionHandler = {
    click: clickHandler,
    scroll: scrollHandler
  };
};

// 显示大雁详情介绍
const showGooseDescription = () => {
  showDescription(gooseDescription, gooseDescriptionShown);
};

// 关闭大雁详情介绍
const closeGooseDescription = () => {
  closeDescription(gooseDescription, gooseDescriptionShown);
};

// 显示雪豹详情介绍
const showPantheraDescription = () => {
  showDescription(pantheraDescription, pantheraDescriptionShown);
};

// 关闭雪豹详情介绍
const closePantheraDescription = () => {
  closeDescription(pantheraDescription, pantheraDescriptionShown);
};

// 显示藏羚详情介绍
const showChiruDescription = () => {
  showDescription(chiruDescription, chiruDescriptionShown);
};

// 关闭藏羚详情介绍
const closeChiruDescription = () => {
  closeDescription(chiruDescription, chiruDescriptionShown);
};

// 显示大熊猫详情介绍
const showPandaDescription = () => {
  showDescription(pandaDescription, pandaDescriptionShown);
};

// 关闭大熊猫详情介绍
const closePandaDescription = () => {
  closeDescription(pandaDescription, pandaDescriptionShown);
};

// welcomeVideo 滚动处理
const handleWelcomeVideoScroll = () => {
  // 如果已经触发过，不再处理
  if (welcomeVideoStarted.value || welcomeVideoCompleted.value) return;
  
  // 标记已开始
  welcomeVideoStarted.value = true;
  
  // 隐藏 welcome-video-roller
  if (welcomeVideoRoller.value) {
    gsap.to(welcomeVideoRoller.value, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        if (welcomeVideoRoller.value) {
          welcomeVideoRoller.value.style.display = 'none';
        }
      }
    });
  }
  
  // 开始播放 welcomeVideo
  if (welcomeVideo.value) {
    welcomeVideo.value.play().catch(err => {
      console.warn('Welcome video play failed:', err);
    });
    
    // 禁用滚动
    enableScrollLock();
  }
};

// welcomeVideo 播放完成
const onWelcomeVideoEnded = () => {
  // 如果播放的是 startPage1
  if (!startPage1Completed.value) {
    startPage1Completed.value = true;
    
    // 让视频停留在最后一帧
    if (welcomeVideo.value) {
      welcomeVideo.value.pause();
      // 确保停留在最后一帧
      if (welcomeVideo.value.duration) {
        welcomeVideo.value.currentTime = welcomeVideo.value.duration;
      }
    }
    
    // 移除滚动事件监听
    if (welcomeVideoScrollHandler) {
      window.removeEventListener('wheel', welcomeVideoScrollHandler, { passive: false });
      window.removeEventListener('touchmove', welcomeVideoScrollHandler, { passive: false });
      window.removeEventListener('scroll', welcomeVideoScrollHandler, { passive: false });
      welcomeVideoScrollHandler = null;
    }
    
    // 添加播放 startPage2 的滚动监听
    initPlayStartPage2Scroll();
  } else {
    // 如果播放的是 startPage2，播放完成后自动切换到 originVideo
    welcomeVideoCompleted.value = true;
    
    // 让视频停留在最后一帧
    if (welcomeVideo.value) {
      welcomeVideo.value.pause();
      // 确保停留在最后一帧
      if (welcomeVideo.value.duration) {
        welcomeVideo.value.currentTime = welcomeVideo.value.duration;
      }
    }
    
    // 移除滚动事件监听
    if (playStartPage2Handler) {
      window.removeEventListener('wheel', playStartPage2Handler, { passive: false });
      window.removeEventListener('touchmove', playStartPage2Handler, { passive: false });
      window.removeEventListener('scroll', playStartPage2Handler, { passive: false });
      playStartPage2Handler = null;
    }
    
    // 自动切换到 originVideo
    switchToOriginVideo();
  }
};

// 切换 originVideo 的视频（类似 landscape 的 changeVideo，用于无缝切换）
const changeOriginVideo = async (videoSrc) => {
  if (isSwitchingOriginVideo.value) return; // 防止重复触发
  
  isSwitchingOriginVideo.value = true;
  const newVideoUrl = videoSrc;
  
  // 确定要使用的下一个视频元素
  const nextVideoElement = activeOriginVideo.value === 1 ? originVideo2.value : originVideo1.value;
  if (!nextVideoElement) {
    isSwitchingOriginVideo.value = false;
    return;
  }
  
  // 如果是同一个视频，不需要切换
  const currentVideoElement = activeOriginVideo.value === 1 ? originVideo1.value : originVideo2.value;
  if (currentVideoElement && currentVideoElement.src && currentVideoElement.src.includes(newVideoUrl)) {
    isSwitchingOriginVideo.value = false;
    return;
  }
  
  try {
    // 设置新视频源并加载
    nextVideoElement.src = newVideoUrl;
    
    // 等待视频加载并准备好播放
    await new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => reject(new Error('视频加载超时')), 5000);
      
      nextVideoElement.oncanplaythrough = () => {
        clearTimeout(timeoutId);
        resolve();
      };
      
      nextVideoElement.oncanplay = () => {
        if (!nextVideoElement._loaded) {
          nextVideoElement._loaded = true;
          clearTimeout(timeoutId);
          resolve();
        }
      };
      
      nextVideoElement.onerror = (error) => {
        clearTimeout(timeoutId);
        reject(error);
      };
      
      nextVideoElement.load();
    });
    
    // 确保视频开始播放
    nextVideoElement.currentTime = 0;
    await nextVideoElement.play().catch(error => {
      console.error('视频播放失败:', error);
    });
    
    // 切换显示的视频
    activeOriginVideo.value = activeOriginVideo.value === 1 ? 2 : 1;
    isSwitchingOriginVideo.value = false;
  } catch (error) {
    console.error('视频切换失败:', error);
    isSwitchingOriginVideo.value = false;
  }
};

// 切换到 originVideo
const switchToOriginVideo = async () => {
  // 如果已经切换过，不再处理
  if (welcomeVideoHidden.value) return;
  
  welcomeVideoHidden.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 先加载 originVideo 的第一个视频到备用元素（避免闪烁）
  if (originInfos.value.length > 0) {
    originCurrentIndex.value = 0;
    const firstVideoUrl = originInfos.value[0].videoUrl;
    
    // 确定要使用的视频元素（使用备用元素）
    const nextVideoElement = activeOriginVideo.value === 1 ? originVideo2.value : originVideo1.value;
    
    if (nextVideoElement) {
      try {
        nextVideoElement.src = firstVideoUrl;
        await new Promise((resolve, reject) => {
          const timeoutId = setTimeout(() => reject(new Error('视频加载超时')), 5000);
          
          nextVideoElement.oncanplaythrough = () => {
            clearTimeout(timeoutId);
            resolve();
          };
          
          nextVideoElement.oncanplay = () => {
            if (!nextVideoElement._loaded) {
              nextVideoElement._loaded = true;
              clearTimeout(timeoutId);
              resolve();
            }
          };
          
          nextVideoElement.onerror = (error) => {
            clearTimeout(timeoutId);
            reject(error);
          };
          
          nextVideoElement.load();
        });
      } catch (error) {
        console.error('Origin video 加载失败:', error);
      }
    }
  }
  
  // 隐藏 welcomeVideo
  if (welcomeVideo.value && welcomeVideo.value.parentElement) {
    gsap.to(welcomeVideo.value.parentElement, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (welcomeVideo.value && welcomeVideo.value.parentElement) {
          welcomeVideo.value.parentElement.style.display = 'none';
        }
      }
    });
  }
  
  // 显示 origin-video-wrapper
  if (originVideoWrapper.value) {
    originVideoWrapper.value.style.display = 'block';
    gsap.fromTo(originVideoWrapper.value, 
      { opacity: 0 },
      { 
        opacity: 1,
        duration: 0.5
      }
    );
  }
  
  // 播放 originVideo 的第一个视频（使用已加载的备用元素）
  if (originInfos.value.length > 0) {
    // 重置跳过状态
    canSkipToEnd.value = false;
    originVideoCompleted.value = false;
    
    // 等待 Vue 更新 DOM 后播放视频
    await nextTick();
    
    // 切换到已加载的备用视频元素
    await nextTick(); // 确保 DOM 已更新
    if (activeOriginVideo.value === 1 && originVideo2.value && originVideo2.value.readyState >= 2) {
      activeOriginVideo.value = 2;
    } else if (activeOriginVideo.value === 2 && originVideo1.value && originVideo1.value.readyState >= 2) {
      activeOriginVideo.value = 1;
    } else {
      // 如果备用元素没有加载完成，使用当前元素加载
      if (originVideo1.value && activeOriginVideo.value === 1) {
        originVideo1.value.src = firstVideoUrl;
        originVideo1.value.load();
        await new Promise((resolve) => {
          if (originVideo1.value.readyState >= 2) {
            resolve();
          } else {
            originVideo1.value.addEventListener('loadedmetadata', () => resolve(), { once: true });
          }
        });
      }
    }
    
    await nextTick(); // 确保 activeOriginVideo 更新后 DOM 已更新
    
    if (originVideo.value) {
      // 确保视频开始播放
      originVideo.value.currentTime = 0;
      originVideo.value.play().catch(err => {
        console.warn('Origin video play failed:', err);
      });
      
      // 标记已开始播放
      originVideoStarted.value = true;
      
      // 禁用滚动
      enableScrollLock();
    }
  }
  
  // 移除切换滚动事件监听
  if (switchToOriginVideoHandler) {
    window.removeEventListener('wheel', switchToOriginVideoHandler, { passive: false });
    window.removeEventListener('touchmove', switchToOriginVideoHandler, { passive: false });
    window.removeEventListener('scroll', switchToOriginVideoHandler, { passive: false });
    switchToOriginVideoHandler = null;
  }
};

// originVideo 时间更新监听
const onOriginVideoTimeUpdate = () => {
  if (!originVideo.value) return;
  
  // 如果视频已播放1秒，允许跳过
  if (originVideo.value.currentTime >= 1 && !canSkipToEnd.value) {
    canSkipToEnd.value = true;
    // 初始化跳过到视频结尾的滚动监听
    initSkipToVideoEndScroll();
  }
};

// 跳过到视频结尾并显示 videoDescription
const skipToVideoEnd = () => {
  // 如果视频未播放1秒或正在处理，不允许跳过
  if (!canSkipToEnd.value || isProcessingScroll.value) return;
  
  // 如果视频已经完成，不再处理
  if (originVideoCompleted.value) return;
  
  isProcessingScroll.value = true;
  originVideoCompleted.value = true;
  
  // 视频跳到结尾后，仍然保留监听器以支持回滚到首帧
  // 不需要移除 skipToVideoEndHandler
  
  // 让视频停留在最后一帧
  if (originVideo.value) {
    originVideo.value.pause();
    // 确保停留在最后一帧
    if (originVideo.value.duration) {
      originVideo.value.currentTime = originVideo.value.duration;
    }
  }
  
  // 根据当前视频索引处理不同的逻辑
  if (originCurrentIndex.value === 0) {
    // 如果是第一个视频，自动显示 video-accessories 和 video-description
    // 保持滚动锁定，直到显示 video-accessories
    // 确保处理标志已重置，允许显示 video-accessories
    isProcessingScroll.value = false;
    
    // 如果 videoAccessories 已经显示（比如通过菜单切换），直接显示第一个 description
    if (videoAccessoriesShown.value) {
      console.log('[skipToVideoEnd] videoAccessories 已显示，准备显示第一个 description');
      // 重置第一个 description 的显示状态，确保可以重新显示
      firstDescriptionShown.value = false;
      // 确保 isProcessingScroll 已重置
      isProcessingScroll.value = false;
      setTimeout(() => {
        showFirstDescription();
      }, 300);
    } else {
      console.log('[skipToVideoEnd] videoAccessories 未显示，显示 videoAccessories');
      // 如果 videoAccessories 还没有显示，正常流程显示
      showVideoAccessories();
    }
  } else if (originCurrentIndex.value === 1) {
    // 如果是第二个视频，停留在最后一帧，显示 video-description
    secondVideoCompleted.value = true;
    
    // 确保处理标志已重置，允许显示 video-description
    isProcessingScroll.value = false;
    // 显示 video-description
    setTimeout(() => {
      showVideoDescriptionAfterSecondVideo();
    }, 300);
  } else if (originCurrentIndex.value === 2) {
    // 如果是第三个视频，停留在最后一帧，显示 video-description
    thirdVideoCompleted.value = true;
    
    // 确保处理标志已重置，允许显示 video-description
    isProcessingScroll.value = false;
    // 显示 video-description
    setTimeout(() => {
      showVideoDescriptionAfterThirdVideo();
    }, 300);
    
    // 注意：不再在这里发出事件，改为在气候视频播放完毕时发出
  } else {
    // 其他视频播放完成后，解除滚动禁用
    disableScrollLock();
  }
};

// 检测滚动方向（返回 true 表示向下，false 表示向上）
let lastTouchY = 0;
let lastScrollY = 0;
const getScrollDirection = (e) => {
  if (e.type === 'wheel') {
    return e.deltaY > 0;
  } else if (e.type === 'touchmove') {
    // 对于触摸事件，需要与之前的触摸位置比较
    if (e.touches && e.touches[0]) {
      const currentY = e.touches[0].clientY;
      if (lastTouchY === 0) {
        lastTouchY = currentY;
        return true; // 默认向下
      }
      const isDown = currentY > lastTouchY;
      lastTouchY = currentY;
      return isDown;
    }
    return true;
  } else if (e.type === 'touchstart') {
    // 记录触摸开始位置
    if (e.touches && e.touches[0]) {
      lastTouchY = e.touches[0].clientY;
    }
    return true;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    // 清除触摸位置
    lastTouchY = 0;
    return true;
  } else if (e.type === 'scroll') {
    // 对于 scroll 事件，通过比较当前和上次的 scrollY 来判断方向
    const currentScrollY = window.scrollY || window.pageYOffset || 0;
    const isDown = currentScrollY > lastScrollY;
    lastScrollY = currentScrollY;
    return isDown;
  }
  // 默认返回 true（向下）
  return true;
};

// 跳转到上一个视频的首帧
const jumpToPreviousVideoFirstFrame = () => {
  // 注意：这个函数在被调用时，isProcessingScroll.value 可能已经是 true
  // 所以这里不检查 isProcessingScroll.value，而是直接执行跳转逻辑
  
  // 确保视频已暂停且在首帧
  // 如果视频正在播放，绝对不允许跳转到上一个视频
  if (originVideo.value && !originVideo.value.paused) {
    console.log('[jumpToPreviousVideoFirstFrame] 视频正在播放，不允许跳转，先跳转到当前视频首帧');
    // 如果视频正在播放，不应该跳转，先跳转到当前视频的首帧
    originVideo.value.currentTime = 0;
    originVideo.value.pause();
    originVideoCompleted.value = false;
    isProcessingScroll.value = false; // 重置处理标志
    initSkipToVideoEndScroll();
    return;
  }
  
  // 如果视频不在首帧，也不允许跳转
  const currentTime = originVideo.value ? (originVideo.value.currentTime || 0) : 0;
  if (currentTime > 0.1) {
    console.log('[jumpToPreviousVideoFirstFrame] 视频不在首帧，不允许跳转，先跳转到当前视频首帧');
    // 如果视频不在首帧，不应该跳转，先跳转到当前视频的首帧
    if (originVideo.value) {
      originVideo.value.currentTime = 0;
      originVideo.value.pause();
      originVideoCompleted.value = false;
      isProcessingScroll.value = false; // 重置处理标志
      initSkipToVideoEndScroll();
    }
    return;
  }
  
  // 确保 isProcessingScroll 已设置
  if (!isProcessingScroll.value) {
    isProcessingScroll.value = true;
  }
  
  const currentIndex = originCurrentIndex.value;
  console.log('[jumpToPreviousVideoFirstFrame] 被调用，当前索引:', currentIndex);
  
  // 根据当前视频索引，跳转到上一个视频
  if (currentIndex === 2) {
    console.log('[jumpToPreviousVideoFirstFrame] 从第三个视频跳转到第二个视频');
    // 从第三个视频跳转到第二个视频的首帧
    originCurrentIndex.value = 1;
    originVideoCompleted.value = false;
    canSkipToEnd.value = false;
    thirdVideoStarted.value = false;
    thirdVideoCompleted.value = false;
    videoDescriptionShownAfterThirdVideo.value = false;
    // 重置第二个视频的相关状态
    secondVideoStarted.value = false;
    secondVideoCompleted.value = false;
    videoDescriptionShownAfterSecondVideo.value = false;
    
    // 使用 changeOriginVideo 无缝切换视频
    changeOriginVideo(originInfos.value[1].videoUrl).then(() => {
      nextTick(() => {
        if (originVideo.value) {
          originVideo.value.currentTime = 0;
          originVideo.value.pause();
          // 隐藏 description
          if (videoDescription.value) {
            gsap.to(videoDescription.value, {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                if (videoDescription.value) {
                  videoDescription.value.style.display = 'none';
                }
                // 动画完成后再重置处理标志
                enableScrollLock();
                isProcessingScroll.value = false;
                // 更新回滚时间戳，确保动画完成后还要等待防抖时间才能执行下一个动画
                lastRollbackTime = Date.now();
                // 重新初始化跳过监听
                initSkipToVideoEndScroll();
              }
            });
          } else {
            // 如果没有 description，立即重置处理标志
            enableScrollLock();
            isProcessingScroll.value = false;
            // 更新回滚时间戳，确保动画完成后还要等待防抖时间才能执行下一个动画
            lastRollbackTime = Date.now();
            // 重新初始化跳过监听
            initSkipToVideoEndScroll();
          }
        } else {
          isProcessingScroll.value = false;
        }
      });
    }).catch(error => {
      console.error('切换视频失败:', error);
      isProcessingScroll.value = false;
    });
  } else if (currentIndex === 1) {
    console.log('[jumpToPreviousVideoFirstFrame] 从第二个视频跳转到第一个视频');
    // 从第二个视频跳转到第一个视频的首帧
    originCurrentIndex.value = 0;
    originVideoCompleted.value = false;
    canSkipToEnd.value = false;
    secondVideoStarted.value = false;
    secondVideoCompleted.value = false;
    videoDescriptionShownAfterSecondVideo.value = false;
    // 重置第一个视频的描述状态
    firstDescriptionShown.value = false;
    secondDescriptionShown.value = false;
    
    // 使用 changeOriginVideo 无缝切换视频
    changeOriginVideo(originInfos.value[0].videoUrl).then(() => {
      nextTick(() => {
        if (originVideo.value) {
          originVideo.value.currentTime = 0;
          originVideo.value.pause();
          // 隐藏 description（回滚时只隐藏，不立即显示，等视频播放完成后再显示）
          if (videoDescription.value) {
            gsap.to(videoDescription.value, {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                if (videoDescription.value) {
                  videoDescription.value.style.display = 'none';
                }
                // 动画完成后再重置处理标志
                enableScrollLock();
                isProcessingScroll.value = false;
                // 更新回滚时间戳，确保动画完成后还要等待防抖时间才能执行下一个动画
                lastRollbackTime = Date.now();
                // 重新初始化跳过监听
                initSkipToVideoEndScroll();
              }
            });
          } else {
            // 如果没有 description，立即重置处理标志
            enableScrollLock();
            isProcessingScroll.value = false;
            // 更新回滚时间戳，确保动画完成后还要等待防抖时间才能执行下一个动画
            lastRollbackTime = Date.now();
            // 重新初始化跳过监听
            initSkipToVideoEndScroll();
          }
        } else {
          isProcessingScroll.value = false;
        }
      });
    }).catch(error => {
      console.error('切换视频失败:', error);
      isProcessingScroll.value = false;
    });
  } else {
    // 第一个视频，无法再往前跳转
    // 隐藏 description
    if (videoDescription.value) {
      gsap.to(videoDescription.value, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          if (videoDescription.value) {
            videoDescription.value.style.display = 'none';
          }
          // 动画完成后再重置处理标志
          isProcessingScroll.value = false;
        }
      });
    } else {
      // 如果没有 description，立即重置处理标志
      isProcessingScroll.value = false;
    }
  }
};

// 初始化跳过到视频结尾的滚动监听（同时处理回滚）
const initSkipToVideoEndScroll = () => {
  // 如果正在处理，不再初始化
  if (isProcessingScroll.value) return;
  
  // 如果视频不存在，不再初始化
  if (!originVideo.value) return;
  
  // 如果已经存在处理器，先移除
  if (skipToVideoEndHandler) {
    window.removeEventListener('wheel', skipToVideoEndHandler, { passive: false });
    window.removeEventListener('touchmove', skipToVideoEndHandler, { passive: false });
    window.removeEventListener('scroll', skipToVideoEndHandler, { passive: false });
    skipToVideoEndHandler = null;
  }
  
  // 创建滚动事件处理器
  skipToVideoEndHandler = (e) => {
    // 如果正在处理，不再处理
    if (isProcessingScroll.value) return;
    
    // 检测滚动方向
    const isScrollingDown = getScrollDirection(e);
    
    if (isScrollingDown) {
      // 向下滚动：处理播放逻辑
      
      // 检查当前滚动位置
      const scrollY = window.scrollY || window.pageYOffset || 0;
      
      // 关键修复：当滚动位置已经在顶部（scrollY <= 0）时，阻止向下滚动以避免漏白（弹性滚动）
      const isAtTop = scrollY <= 0;
      if (isAtTop) {
        // 检查是否在 originVideo 区域
        let isInOriginVideoArea = false;
        if (originVideoWrapper.value) {
          const rect = originVideoWrapper.value.getBoundingClientRect();
          isInOriginVideoArea = rect.top >= 0 && rect.top < window.innerHeight;
        }
        
        // 只有在 originVideo 区域时才阻止向下滚动，防止漏白
        if (isInOriginVideoArea) {
          // 如果已经在顶部，阻止向下滚动，防止出现漏白
          e.preventDefault();
          e.stopPropagation();
          
          // 确保滚动位置保持在顶部（防止出现负值）
          if (scrollY < 0) {
            window.scrollTo(0, 0);
          }
        }
      }
      
      if (originVideo.value) {
        const currentTime = originVideo.value.currentTime || 0;
        const isPaused = originVideo.value.paused;
        const currentIndex = originCurrentIndex.value;
        const isLastVideo = currentIndex === originInfos.value.length - 1;
        
        // 如果视频在首帧且暂停，自动播放
        if (currentTime <= 0.1 && isPaused) {
          // 如果视频已完成，重置完成状态，允许重新播放
          if (originVideoCompleted.value) {
            originVideoCompleted.value = false;
          }
          // 重置 canSkipToEnd，确保需要播放1秒后才能跳过
          canSkipToEnd.value = false;
          // 如果不在顶部，也需要阻止默认滚动行为
          if (!isAtTop) {
            e.preventDefault();
            e.stopPropagation();
          }
          originVideo.value.play().catch(err => {
            console.warn('Video play failed:', err);
          });
          return false;
        }
        
        // 如果视频已经完成，检查是否是最后一个视频
        if (originVideoCompleted.value) {
          // 如果是最后一个视频且已完成，允许继续向下滚动（移除监听器，不阻止默认行为）
          if (isLastVideo) {
            console.log('[向下滚动] 最后一个视频已完成，允许继续向下滚动，移除监听器');
            // 移除监听器，允许正常滚动
            if (skipToVideoEndHandler) {
              window.removeEventListener('wheel', skipToVideoEndHandler, { passive: false });
              window.removeEventListener('touchmove', skipToVideoEndHandler, { passive: false });
              window.removeEventListener('scroll', skipToVideoEndHandler, { passive: false });
              skipToVideoEndHandler = null;
            }
            // 不阻止默认滚动行为，允许继续向下滚动
            return true;
          }
          // 如果不是最后一个视频，阻止默认滚动行为
          if (!isAtTop) {
            e.preventDefault();
            e.stopPropagation();
          }
          return false;
        }
        
        // 如果视频未播放1秒，不允许跳过
        if (!canSkipToEnd.value) {
          // 阻止默认滚动行为
          if (!isAtTop) {
            e.preventDefault();
            e.stopPropagation();
          }
          return false;
        }
        
        // 跳过到视频结尾
        // 阻止默认滚动行为
        if (!isAtTop) {
          e.preventDefault();
          e.stopPropagation();
        }
        skipToVideoEnd();
      }
      
      return false;
    } else {
      // 向上滚动：回滚逻辑
      // 只要视频存在且正在播放或已完成，就允许回滚
      if (!originVideo.value) return;
      
      // 检查当前滚动位置
      const scrollY = window.scrollY || window.pageYOffset || 0;
      
      // 关键修复：当滚动位置已经在顶部（scrollY <= 0）时，阻止向上滚动以避免漏白（弹性滚动）
      if (scrollY <= 0) {
        // 检查是否在 originVideo 区域
        let isInOriginVideoArea = false;
        if (originVideoWrapper.value) {
          const rect = originVideoWrapper.value.getBoundingClientRect();
          isInOriginVideoArea = rect.top >= 0 && rect.top < window.innerHeight;
        }
        
        // 只有在 originVideo 区域时才阻止向上滚动，防止漏白
        if (isInOriginVideoArea) {
          // 如果已经在顶部，阻止向上滚动，防止出现漏白
          e.preventDefault();
          e.stopPropagation();
          
          // 确保滚动位置保持在顶部（防止出现负值）
          if (scrollY < 0) {
            window.scrollTo(0, 0);
          }
        }
      }
      
      // 关键修复：只有当滚动位置已经在顶部（scrollY === 0）时，才执行回滚逻辑
      // 这样可以确保只有在用户明确向上滚动时才执行，而不是在检测到回滚到originVideo区域时自动触发
      if (scrollY > 0) {
        // 如果滚动位置不在顶部，不执行回滚逻辑，允许正常滚动
        return true;
      }
      
      // 首先检查：如果正在处理滚动，立即忽略此次滚动（最优先检查）
      if (isProcessingScroll.value) {
        console.log('[回滚] 正在处理滚动，忽略此次滚动');
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      
      // 关键修复：检查是否在稳定期内，如果在稳定期内，不执行回滚逻辑
      const now = Date.now();
      if (rollbackStableTime > 0 && now - rollbackStableTime < ROLLBACK_STABLE_DURATION) {
        console.log('[回滚] 稳定期内，忽略此次滚动，剩余时间:', ROLLBACK_STABLE_DURATION - (now - rollbackStableTime), 'ms');
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      
      // 如果已经过了稳定期，清除稳定时间戳
      if (rollbackStableTime > 0 && now - rollbackStableTime >= ROLLBACK_STABLE_DURATION) {
        console.log('[回滚] 稳定期已过，允许执行回滚逻辑');
        rollbackStableTime = 0; // 清除稳定时间戳
      }
      
      // 防抖：如果距离上次回滚时间太短，忽略此次滚动
      if (now - lastRollbackTime < ROLLBACK_DEBOUNCE_TIME) {
        console.log('[回滚] 防抖：距离上次回滚时间太短，忽略此次滚动');
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      
      // 阻止默认滚动行为
      e.preventDefault();
      e.stopPropagation();
      
      // 立即设置处理标志和更新时间戳，防止重复触发（在检查之后立即设置）
      isProcessingScroll.value = true;
      lastRollbackTime = now;
      
      // 检查视频是否在首帧
      const currentTime = originVideo.value.currentTime || 0;
      const isPaused = originVideo.value.paused;
      const currentIndex = originCurrentIndex.value;
      const duration = originVideo.value.duration || 0;
      const readyState = originVideo.value.readyState || 0;
      
      // 判断是否在首帧（允许0.1秒的误差）
      const isAtFirstFrame = currentTime <= 0.1;
      
      // 调试日志
      console.log('[回滚] 状态检查:', {
        currentIndex,
        currentTime: currentTime.toFixed(3),
        isPaused,
        isAtFirstFrame,
        readyState,
        duration: duration.toFixed(2),
        originVideoCompleted: originVideoCompleted.value,
        videoEnded: originVideo.value.ended
      });
      
      // 关键修复：如果视频正在播放（!isPaused），必须先暂停并跳转到当前视频的首帧
      // 这是最优先的条件：只要视频在播放，就跳转到当前视频的首帧，绝不跳转到上一个视频
      if (!isPaused) {
        console.log('[回滚] 视频正在播放，跳转到当前视频首帧，当前索引:', currentIndex);
        // 视频正在播放，跳转到当前视频的首帧并暂停
        originVideo.value.currentTime = 0;
        originVideo.value.pause();
        // 重置完成状态，允许重新播放
        originVideoCompleted.value = false;
        // 隐藏 description
        if (videoDescription.value) {
          gsap.to(videoDescription.value, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              if (videoDescription.value) {
                videoDescription.value.style.display = 'none';
              }
              // 动画完成后再重置处理标志
              isProcessingScroll.value = false;
              // 更新回滚时间戳，确保动画完成后还要等待防抖时间才能执行下一个动画
              lastRollbackTime = Date.now();
              // 重新初始化跳过监听
              initSkipToVideoEndScroll();
            }
          });
        } else {
          // 如果没有 description，立即重置处理标志
          isProcessingScroll.value = false;
          // 更新回滚时间戳，确保动画完成后还要等待防抖时间才能执行下一个动画
          lastRollbackTime = Date.now();
          initSkipToVideoEndScroll();
        }
        // 重置所有描述状态
        firstDescriptionShown.value = false;
        secondDescriptionShown.value = false;
        videoDescriptionShownAfterSecondVideo.value = false;
        videoDescriptionShownAfterThirdVideo.value = false;
        return false;
      }
      
      // 视频已暂停，判断是否在首帧或最后一帧
      // 判断是否在最后一帧（允许0.1秒的误差）
      const isAtLastFrame = duration > 0 && Math.abs(currentTime - duration) <= 0.1;
      
      // 如果视频在最后一帧（已完成状态），跳转到当前视频的首帧
      // 这是用户主动向上滚动时的回滚逻辑
      if (isAtLastFrame && originVideoCompleted.value) {
        console.log('[回滚] 视频在最后一帧且已完成，跳转到当前视频首帧，当前索引:', currentIndex, 'currentTime:', currentTime.toFixed(3));
        // 在最后一帧且已完成，跳转到当前视频的首帧并暂停
        originVideo.value.currentTime = 0;
        originVideo.value.pause();
        // 重置完成状态，允许重新播放
        originVideoCompleted.value = false;
        // 隐藏 description
        if (videoDescription.value) {
          gsap.to(videoDescription.value, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              if (videoDescription.value) {
                videoDescription.value.style.display = 'none';
              }
              // 动画完成后再重置处理标志
              isProcessingScroll.value = false;
              // 更新回滚时间戳，确保动画完成后还要等待防抖时间才能执行下一个动画
              lastRollbackTime = Date.now();
              // 重新初始化跳过监听
              initSkipToVideoEndScroll();
            }
          });
        } else {
          // 如果没有 description，立即重置处理标志
          isProcessingScroll.value = false;
          // 更新回滚时间戳，确保动画完成后还要等待防抖时间才能执行下一个动画
          lastRollbackTime = Date.now();
          // 重新初始化跳过监听
          initSkipToVideoEndScroll();
        }
        // 重置所有描述状态
        firstDescriptionShown.value = false;
        secondDescriptionShown.value = false;
        videoDescriptionShownAfterSecondVideo.value = false;
        videoDescriptionShownAfterThirdVideo.value = false;
      } else if (isAtFirstFrame && currentIndex > 0 && readyState >= 2 && currentTime <= 0.1) {
        // 只有在首帧且暂停，且不是第一个视频时，才跳转到上一个视频
        // 额外检查：确保视频已经加载了元数据（readyState >= 2），避免在视频加载时误判
        // 重要：还要检查视频是否真的在首帧（currentTime 必须 <= 0.1）
        console.log('[回滚] 视频在首帧且暂停，跳转到上一个视频，当前索引:', currentIndex);
        // 已经在首帧且暂停，且不是第一个视频，且视频已加载，跳转到上一个视频的首帧
        // 注意：jumpToPreviousVideoFirstFrame 内部会设置 isProcessingScroll，这里不需要重置
        jumpToPreviousVideoFirstFrame();
      } else if (!isAtFirstFrame && !isAtLastFrame) {
        // 不在首帧也不在最后一帧，跳转到当前视频的首帧并暂停
        console.log('[回滚] 视频不在首帧也不在最后一帧，跳转到当前视频首帧，当前索引:', currentIndex, 'currentTime:', currentTime.toFixed(3));
        originVideo.value.currentTime = 0;
        originVideo.value.pause();
        // 重置完成状态，允许重新播放
        originVideoCompleted.value = false;
        // 隐藏 description
        if (videoDescription.value) {
          gsap.to(videoDescription.value, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              if (videoDescription.value) {
                videoDescription.value.style.display = 'none';
              }
              // 动画完成后再重置处理标志
              isProcessingScroll.value = false;
              // 更新回滚时间戳，确保动画完成后还要等待防抖时间才能执行下一个动画
              lastRollbackTime = Date.now();
              // 重新初始化跳过监听
              initSkipToVideoEndScroll();
            }
          });
        } else {
          // 如果没有 description，立即重置处理标志
          isProcessingScroll.value = false;
          // 更新回滚时间戳，确保动画完成后还要等待防抖时间才能执行下一个动画
          lastRollbackTime = Date.now();
          // 重新初始化跳过监听
          initSkipToVideoEndScroll();
        }
        // 重置所有描述状态
        firstDescriptionShown.value = false;
        secondDescriptionShown.value = false;
        videoDescriptionShownAfterSecondVideo.value = false;
        videoDescriptionShownAfterThirdVideo.value = false;
      } else {
        // 如果视频在最后一帧但未完成，或者在首帧但是是第一个视频或未加载完成，不做操作
        console.log('[回滚] 视频在最后一帧但未完成，或在首帧但是是第一个视频或未加载完成，不做操作');
        // 重置处理标志
        isProcessingScroll.value = false;
      }
      // 如果已经在首帧且是第一个视频，或视频未加载完成，不做任何操作
      
      return false;
    }
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', skipToVideoEndHandler, { passive: false });
  window.addEventListener('touchmove', skipToVideoEndHandler, { passive: false });
  window.addEventListener('scroll', skipToVideoEndHandler, { passive: false });
};

// originVideo 播放完成
const onOriginVideoEnded = () => {
  originVideoCompleted.value = true;
  
  // 视频完成后，仍然保留监听器以支持回滚到首帧
  // 不需要移除 skipToVideoEndHandler
  
  // 让视频停留在最后一帧
  if (originVideo.value) {
    originVideo.value.pause();
    // 确保停留在最后一帧
    if (originVideo.value.duration) {
      originVideo.value.currentTime = originVideo.value.duration;
    }
  }
  
  // 根据当前视频索引处理不同的逻辑
  if (originCurrentIndex.value === 0) {
    // 如果是第一个视频，自动显示 video-accessories 和 video-description
    // 保持滚动锁定，直到显示 video-accessories
    // 确保处理标志已重置，允许显示 video-accessories
    isProcessingScroll.value = false;
    
    // 如果 videoAccessories 已经显示（比如通过菜单切换），直接显示第一个 description
    if (videoAccessoriesShown.value) {
      console.log('[onOriginVideoEnded] videoAccessories 已显示，准备显示第一个 description');
      // 重置第一个 description 的显示状态，确保可以重新显示
      firstDescriptionShown.value = false;
      // 确保 isProcessingScroll 已重置
      isProcessingScroll.value = false;
      setTimeout(() => {
        showFirstDescription();
      }, 300);
    } else {
      console.log('[onOriginVideoEnded] videoAccessories 未显示，显示 videoAccessories');
      // 如果 videoAccessories 还没有显示，正常流程显示
      showVideoAccessories();
    }
  } else if (originCurrentIndex.value === 1) {
    // 如果是第二个视频，停留在最后一帧，自动显示 video-description
    secondVideoCompleted.value = true;
    
    // 确保处理标志已重置，允许显示 video-description
    isProcessingScroll.value = false;
    // 自动显示 video-description
    setTimeout(() => {
      showVideoDescriptionAfterSecondVideo();
    }, 300);
  } else if (originCurrentIndex.value === 2) {
    // 如果是第三个视频，停留在最后一帧，自动显示 video-description
    thirdVideoCompleted.value = true;
    
    // 确保处理标志已重置，允许显示 video-description
    isProcessingScroll.value = false;
    // 自动显示 video-description
    setTimeout(() => {
      showVideoDescriptionAfterThirdVideo();
    }, 300);
    
    // 注意：不再在这里发出事件，改为在气候视频播放完毕时发出
  } else {
    // 其他视频播放完成后，解除滚动禁用
    disableScrollLock();
  }
};

// 初始化播放 startPage2 的滚动监听
const initPlayStartPage2Scroll = () => {
  // 如果已经播放过，不再初始化
  if (startPage2Started.value) return;
  
  // 创建滚动事件处理器
  playStartPage2Handler = (e) => {
    // 如果已经播放过，不再处理
    if (startPage2Started.value) return;
    
    // 检测滚动方向
    const isScrollingDown = getScrollDirection(e);
    
    // 只处理向下滚动
    if (!isScrollingDown) return;
    
    // 防抖：如果距离上次正向滚动时间太短，忽略此次滚动
    const now = Date.now();
    if (now - lastForwardScrollTime < FORWARD_SCROLL_DEBOUNCE_TIME) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    
    // 更新时间戳，防止重复触发
    lastForwardScrollTime = now;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 播放 startPage2
    playStartPage2();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', playStartPage2Handler, { passive: false });
  window.addEventListener('touchmove', playStartPage2Handler, { passive: false });
  window.addEventListener('scroll', playStartPage2Handler, { passive: false });
};

// 切换 welcomeVideo 的视频（类似 landscape 的 changeVideo，用于无缝切换）
const changeWelcomeVideo = async (videoSrc) => {
  if (isSwitchingWelcomeVideo.value) return; // 防止重复触发
  
  isSwitchingWelcomeVideo.value = true;
  const newVideoUrl = videoSrc;
  
  // 确定要使用的下一个视频元素
  const nextVideoElement = activeWelcomeVideo.value === 1 ? welcomeVideo2.value : welcomeVideo1.value;
  if (!nextVideoElement) {
    isSwitchingWelcomeVideo.value = false;
    return;
  }
  
  // 如果是同一个视频，不需要切换
  const currentVideoElement = activeWelcomeVideo.value === 1 ? welcomeVideo1.value : welcomeVideo2.value;
  if (currentVideoElement && currentVideoElement.src && currentVideoElement.src.includes(newVideoUrl)) {
    isSwitchingWelcomeVideo.value = false;
    return;
  }
  
  try {
    // 设置新视频源并加载
    nextVideoElement.src = newVideoUrl;
    
    // 等待视频加载并准备好播放
    await new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => reject(new Error('视频加载超时')), 5000);
      
      nextVideoElement.oncanplaythrough = () => {
        clearTimeout(timeoutId);
        resolve();
      };
      
      nextVideoElement.oncanplay = () => {
        if (!nextVideoElement._loaded) {
          nextVideoElement._loaded = true;
          clearTimeout(timeoutId);
          resolve();
        }
      };
      
      nextVideoElement.onerror = (error) => {
        clearTimeout(timeoutId);
        reject(error);
      };
      
      nextVideoElement.load();
    });
    
    // 确保视频开始播放
    nextVideoElement.currentTime = 0;
    await nextVideoElement.play().catch(error => {
      console.error('视频播放失败:', error);
    });
    
    // 切换显示的视频
    activeWelcomeVideo.value = activeWelcomeVideo.value === 1 ? 2 : 1;
    isSwitchingWelcomeVideo.value = false;
  } catch (error) {
    console.error('视频切换失败:', error);
    isSwitchingWelcomeVideo.value = false;
  }
};

// 播放 startPage2
const playStartPage2 = async () => {
  // 如果已经播放过，不再处理
  if (startPage2Started.value) return;
  
  startPage2Started.value = true;
  
  // 移除滚动事件监听
  if (playStartPage2Handler) {
    window.removeEventListener('wheel', playStartPage2Handler, { passive: false });
    window.removeEventListener('touchmove', playStartPage2Handler, { passive: false });
    window.removeEventListener('scroll', playStartPage2Handler, { passive: false });
    playStartPage2Handler = null;
  }
  
  // 使用 changeWelcomeVideo 无缝切换到 startPage2
  await changeWelcomeVideo(startPage2);
  
  // 更新 welcomeVideoSrc（用于显示）
  welcomeVideoSrc.value = startPage2;
};

// 初始化切换到 originVideo 的滚动监听
const initSwitchToOriginVideoScroll = () => {
  // 如果已经切换过，不再初始化
  if (welcomeVideoHidden.value) return;
  
  // 创建滚动事件处理器
  switchToOriginVideoHandler = (e) => {
    // 如果已经切换过，不再处理
    if (welcomeVideoHidden.value) return;
    
    // 防抖：如果距离上次正向滚动时间太短，忽略此次滚动
    const now = Date.now();
    if (now - lastForwardScrollTime < FORWARD_SCROLL_DEBOUNCE_TIME) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    
    // 更新时间戳，防止重复触发
    lastForwardScrollTime = now;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 切换到 originVideo
    switchToOriginVideo();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', switchToOriginVideoHandler, { passive: false });
  window.addEventListener('touchmove', switchToOriginVideoHandler, { passive: false });
  window.addEventListener('scroll', switchToOriginVideoHandler, { passive: false });
};

// 显示 video-accessories
const showVideoAccessories = () => {
  // 如果已经显示过或正在处理，不再处理
  if (videoAccessoriesShown.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  videoAccessoriesShown.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除显示滚动事件监听
  if (showVideoAccessoriesHandler) {
    window.removeEventListener('wheel', showVideoAccessoriesHandler, { passive: false });
    window.removeEventListener('touchmove', showVideoAccessoriesHandler, { passive: false });
    window.removeEventListener('scroll', showVideoAccessoriesHandler, { passive: false });
    showVideoAccessoriesHandler = null;
  }
  
  // 显示 video-accessories
  if (videoAccessories.value) {
    // 启用 pointer-events
    videoAccessories.value.style.pointerEvents = 'auto';
    
    // 隐藏 video-description（初始状态）
    if (videoDescription.value) {
      videoDescription.value.style.display = 'block';
      gsap.set(videoDescription.value, { opacity: 0 });
    }
    
    // 显示 video-accessories，带有淡入动画
    gsap.to(videoAccessories.value, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        // 动画完成后自动显示第一个 description
        // 注意：保持滚动锁定，直到所有 originInfos 步骤完成
        // 重置处理标志，允许显示第一个 description
        isProcessingScroll.value = false;
        // 延迟一小段时间后自动显示第一个 description
        setTimeout(() => {
          showFirstDescription();
        }, 300);
      }
    });
  } else {
    // 如果没有 video-accessories 元素，直接显示第一个 description
    // 注意：保持滚动锁定，直到所有 originInfos 步骤完成
    // 重置处理标志，允许显示第一个 description
    isProcessingScroll.value = false;
    setTimeout(() => {
      showFirstDescription();
    }, 300);
  }
};

// 初始化显示 video-accessories 的滚动监听
const initShowVideoAccessoriesScroll = () => {
  // 如果已经显示过，不再初始化
  if (videoAccessoriesShown.value) return;
  
  // 创建滚动事件处理器
  showVideoAccessoriesHandler = (e) => {
    // 如果已经显示过或正在处理，不再处理
    if (videoAccessoriesShown.value || isProcessingScroll.value) return;
    
    // 防抖：如果距离上次正向滚动时间太短，忽略此次滚动
    const now = Date.now();
    if (now - lastForwardScrollTime < FORWARD_SCROLL_DEBOUNCE_TIME) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    
    // 更新时间戳，防止重复触发
    lastForwardScrollTime = now;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 显示 video-accessories
    showVideoAccessories();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', showVideoAccessoriesHandler, { passive: false });
  window.addEventListener('touchmove', showVideoAccessoriesHandler, { passive: false });
  window.addEventListener('scroll', showVideoAccessoriesHandler, { passive: false });
};

// 显示第一个 description
const showFirstDescription = () => {
  console.log('[showFirstDescription] 被调用，firstDescriptionShown:', firstDescriptionShown.value, 'isProcessingScroll:', isProcessingScroll.value);
  
  // 如果正在处理，不再处理（但允许重新显示，所以不检查 firstDescriptionShown）
  if (isProcessingScroll.value) {
    console.log('[showFirstDescription] 正在处理滚动，跳过显示');
    return;
  }
  
  isProcessingScroll.value = true;
  firstDescriptionShown.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除显示第一个 description 的滚动事件监听
  if (showFirstDescriptionHandler) {
    window.removeEventListener('wheel', showFirstDescriptionHandler, { passive: false });
    window.removeEventListener('touchmove', showFirstDescriptionHandler, { passive: false });
    window.removeEventListener('scroll', showFirstDescriptionHandler, { passive: false });
    showFirstDescriptionHandler = null;
  }
  
  // 显示第一个 description
  if (videoDescription.value && originInfos.value[0] && originInfos.value[0].description[0]) {
    // 确保显示第一个 description
    const descriptionElement = videoDescription.value.querySelector('p:last-child');
    if (descriptionElement) {
      descriptionElement.textContent = originInfos.value[0].description[0];
    }
    
    // 更新标题为第一个视频的标题
    const titleElement = videoDescription.value.querySelector('.video-title');
    if (titleElement && originInfos.value[0] && originInfos.value[0].title) {
      titleElement.textContent = originInfos.value[0].title;
    }
    
    // 先设置 display: block，然后显示 video-description，带有淡入动画
    videoDescription.value.style.display = 'block';
    gsap.set(videoDescription.value, { opacity: 0 });
    gsap.to(videoDescription.value, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        // 动画完成后才添加下一个步骤的监听
        isProcessingScroll.value = false;
        
        // 无论是通过菜单跳转还是正常流程，都需要用户滚动才显示第二个 description
        initShowSecondDescriptionScroll();
      }
    });
  } else {
    // 如果没有数据，直接完成
    isProcessingScroll.value = false;
    
    // 无论是通过菜单跳转还是正常流程，都需要用户滚动才显示第二个 description
    initShowSecondDescriptionScroll();
  }
};

// 初始化显示第一个 description 的滚动监听
const initShowFirstDescriptionScroll = () => {
  // 如果已经显示过，不再初始化
  if (firstDescriptionShown.value) return;
  
  // 创建滚动事件处理器
  showFirstDescriptionHandler = (e) => {
    // 如果已经显示过或正在处理，不再处理
    if (firstDescriptionShown.value || isProcessingScroll.value) return;
    
    // 防抖：如果距离上次正向滚动时间太短，忽略此次滚动
    const now = Date.now();
    if (now - lastForwardScrollTime < FORWARD_SCROLL_DEBOUNCE_TIME) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    
    // 更新时间戳，防止重复触发
    lastForwardScrollTime = now;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 显示第一个 description
    showFirstDescription();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', showFirstDescriptionHandler, { passive: false });
  window.addEventListener('touchmove', showFirstDescriptionHandler, { passive: false });
  window.addEventListener('scroll', showFirstDescriptionHandler, { passive: false });
};

// 显示第二个 description
const showSecondDescription = () => {
  // 如果已经显示过或正在处理，不再处理
  if (secondDescriptionShown.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  secondDescriptionShown.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除显示第二个 description 的滚动事件监听
  if (showSecondDescriptionHandler) {
    window.removeEventListener('wheel', showSecondDescriptionHandler, { passive: false });
    window.removeEventListener('touchmove', showSecondDescriptionHandler, { passive: false });
    window.removeEventListener('scroll', showSecondDescriptionHandler, { passive: false });
    showSecondDescriptionHandler = null;
  }
  
  // 显示第二个 description
  if (videoDescription.value && originInfos.value[0] && originInfos.value[0].description[1]) {
    // 更新 description 内容为第二个
    const descriptionElement = videoDescription.value.querySelector('p:last-child');
    if (descriptionElement) {
      gsap.to(descriptionElement, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          descriptionElement.textContent = originInfos.value[0].description[1];
          gsap.to(descriptionElement, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
              // 动画完成后才添加下一个步骤的监听
              isProcessingScroll.value = false;
              
              // 继续正常的正向流程：播放第二个视频
              initPlaySecondVideoScroll();
            }
          });
        }
      });
    } else {
      // 如果没有 description 元素，直接完成
      isProcessingScroll.value = false;
      
      // 继续正常的正向流程：播放第二个视频
      initPlaySecondVideoScroll();
    }
  } else {
    // 如果没有数据，直接完成
    isProcessingScroll.value = false;
    
    // 如果是通过菜单跳转的，显示完第二个 description 后解除滚动锁定
    if (isSwitchedFromMenu.value) {
      disableScrollLock();
      isSwitchedFromMenu.value = false; // 重置标志
    } else {
      initPlaySecondVideoScroll();
    }
  }
};

// 初始化显示第二个 description 的滚动监听
const initShowSecondDescriptionScroll = () => {
  // 如果已经显示过，不再初始化
  if (secondDescriptionShown.value) return;
  
  // 创建滚动事件处理器
  showSecondDescriptionHandler = (e) => {
    // 如果已经显示过或正在处理，不再处理
    if (secondDescriptionShown.value || isProcessingScroll.value) return;
    
    // 防抖：如果距离上次正向滚动时间太短，忽略此次滚动
    const now = Date.now();
    if (now - lastForwardScrollTime < FORWARD_SCROLL_DEBOUNCE_TIME) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    
    // 更新时间戳，防止重复触发
    lastForwardScrollTime = now;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 显示第二个 description
    showSecondDescription();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', showSecondDescriptionHandler, { passive: false });
  window.addEventListener('touchmove', showSecondDescriptionHandler, { passive: false });
  window.addEventListener('scroll', showSecondDescriptionHandler, { passive: false });
};

// 播放第二个视频
const playSecondVideo = () => {
  // 如果已经播放过或正在处理，不再处理
  if (secondVideoStarted.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  secondVideoStarted.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除播放第二个视频的滚动事件监听
  if (playSecondVideoHandler) {
    window.removeEventListener('wheel', playSecondVideoHandler, { passive: false });
    window.removeEventListener('touchmove', playSecondVideoHandler, { passive: false });
    window.removeEventListener('scroll', playSecondVideoHandler, { passive: false });
    playSecondVideoHandler = null;
  }
  
  // 隐藏 video-description
  if (videoDescription.value) {
    gsap.to(videoDescription.value, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (videoDescription.value) {
          videoDescription.value.style.display = 'none';
        }
        // 动画完成后才切换到第二个视频
        switchToSecondVideo();
      }
    });
  } else {
    // 如果没有 video-description，直接切换到第二个视频
    switchToSecondVideo();
  }
};

// 切换到第二个视频并播放
const switchToSecondVideo = async () => {
  // 切换到第二个视频
  if (originInfos.value.length > 1) {
    // 设置当前索引为 1
    originCurrentIndex.value = 1;
    
    // 重置视频完成状态和跳过状态
    originVideoCompleted.value = false;
    canSkipToEnd.value = false;
    
    // 移除之前的跳过滚动事件监听
    if (skipToVideoEndHandler) {
      window.removeEventListener('wheel', skipToVideoEndHandler, { passive: false });
      window.removeEventListener('touchmove', skipToVideoEndHandler, { passive: false });
      window.removeEventListener('scroll', skipToVideoEndHandler, { passive: false });
      skipToVideoEndHandler = null;
    }
    
    // 使用 changeOriginVideo 无缝切换视频
    await changeOriginVideo(originInfos.value[1].videoUrl);
    
    // 等待 Vue 更新 DOM
    await nextTick();
    
    if (originVideo.value) {
      // 确保视频开始播放
      originVideo.value.currentTime = 0;
      originVideo.value.play().catch(err => {
        console.warn('Second origin video play failed:', err);
      });
      
      // 禁用滚动
      enableScrollLock();
      // 重置处理标志，允许视频播放
      isProcessingScroll.value = false;
      // 立即初始化跳过监听（支持回滚）
      initSkipToVideoEndScroll();
    } else {
      isProcessingScroll.value = false;
    }
  } else {
    isProcessingScroll.value = false;
  }
};

// 初始化播放第二个视频的滚动监听
const initPlaySecondVideoScroll = () => {
  // 如果已经播放过，不再初始化
  if (secondVideoStarted.value) return;
  
  // 创建滚动事件处理器
  playSecondVideoHandler = (e) => {
    // 如果已经播放过或正在处理，不再处理
    if (secondVideoStarted.value || isProcessingScroll.value) return;
    
    // 防抖：如果距离上次正向滚动时间太短，忽略此次滚动
    const now = Date.now();
    if (now - lastForwardScrollTime < FORWARD_SCROLL_DEBOUNCE_TIME) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    
    // 更新时间戳，防止重复触发
    lastForwardScrollTime = now;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 播放第二个视频
    playSecondVideo();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', playSecondVideoHandler, { passive: false });
  window.addEventListener('touchmove', playSecondVideoHandler, { passive: false });
  window.addEventListener('scroll', playSecondVideoHandler, { passive: false });
};

// 显示 video-description（第二个视频播放完成后）
const showVideoDescriptionAfterSecondVideo = () => {
  // 如果已经显示过或正在处理，不再处理
  if (videoDescriptionShownAfterSecondVideo.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  videoDescriptionShownAfterSecondVideo.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除显示 video-description 的滚动事件监听
  if (showVideoDescriptionAfterSecondVideoHandler) {
    window.removeEventListener('wheel', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
    window.removeEventListener('touchmove', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
    window.removeEventListener('scroll', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
    showVideoDescriptionAfterSecondVideoHandler = null;
  }
  
  // 显示 video-description
  if (videoDescription.value) {
    // 更新为第二个视频的 description
    const descriptionElement = videoDescription.value.querySelector('p:last-child');
    if (descriptionElement && originInfos.value[1] && originInfos.value[1].description[0]) {
      descriptionElement.textContent = originInfos.value[1].description[0];
    }
    
    // 更新标题为第二个视频的标题
    const titleElement = videoDescription.value.querySelector('.video-title');
    if (titleElement && originInfos.value[1] && originInfos.value[1].title) {
      titleElement.textContent = originInfos.value[1].title;
    }
    
    // 设置初始状态
    videoDescription.value.style.display = 'block';
    gsap.set(videoDescription.value, { opacity: 0 });
    
    // 显示 video-description，带有淡入动画
    gsap.to(videoDescription.value, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        // 动画完成后，使用 requestAnimationFrame 确保在下一帧才重置处理标志并添加下一个滚动监听
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            isProcessingScroll.value = false;
            
            // 继续正常的正向流程：隐藏 description 并播放第三个视频
            initHideVideoDescriptionAndPlayThirdVideoScroll();
          });
        });
      }
    });
  } else {
    // 如果没有 video-description 元素，使用 requestAnimationFrame 确保在下一帧才重置标志并添加滚动监听
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isProcessingScroll.value = false;
        
        // 继续正常的正向流程：隐藏 description 并播放第三个视频
        initHideVideoDescriptionAndPlayThirdVideoScroll();
      });
    });
  }
};

// 初始化显示 video-description 的滚动监听（第二个视频播放完成后）
const initShowVideoDescriptionAfterSecondVideoScroll = () => {
  // 如果已经显示过，不再初始化
  if (videoDescriptionShownAfterSecondVideo.value) return;
  
  // 创建滚动事件处理器
  showVideoDescriptionAfterSecondVideoHandler = (e) => {
    // 如果已经显示过或正在处理，不再处理
    if (videoDescriptionShownAfterSecondVideo.value || isProcessingScroll.value) return;
    
    // 防抖：如果距离上次正向滚动时间太短，忽略此次滚动
    const now = Date.now();
    if (now - lastForwardScrollTime < FORWARD_SCROLL_DEBOUNCE_TIME) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    
    // 更新时间戳，防止重复触发
    lastForwardScrollTime = now;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 显示 video-description
    showVideoDescriptionAfterSecondVideo();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
  window.addEventListener('touchmove', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
  window.addEventListener('scroll', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
};

// 隐藏 video-description 并播放第三个视频
const hideVideoDescriptionAndPlayThirdVideo = () => {
  // 如果已经播放过或正在处理，不再处理
  if (thirdVideoStarted.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  thirdVideoStarted.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除隐藏并播放第三个视频的滚动事件监听
  if (hideVideoDescriptionAndPlayThirdVideoHandler) {
    window.removeEventListener('wheel', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
    window.removeEventListener('touchmove', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
    window.removeEventListener('scroll', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
    hideVideoDescriptionAndPlayThirdVideoHandler = null;
  }
  
  // 隐藏 video-description
  if (videoDescription.value) {
    gsap.to(videoDescription.value, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (videoDescription.value) {
          videoDescription.value.style.display = 'none';
        }
        // 动画完成后切换到第三个视频
        switchToThirdVideo();
      }
    });
  } else {
    // 如果没有 video-description，直接切换到第三个视频
    switchToThirdVideo();
  }
};

// 切换到第三个视频并播放
const switchToThirdVideo = async () => {
  // 切换到第三个视频
  if (originInfos.value.length > 2) {
    // 设置当前索引为 2
    originCurrentIndex.value = 2;
    
    // 重置视频完成状态和跳过状态
    originVideoCompleted.value = false;
    canSkipToEnd.value = false;
    
    // 移除之前的跳过滚动事件监听
    if (skipToVideoEndHandler) {
      window.removeEventListener('wheel', skipToVideoEndHandler, { passive: false });
      window.removeEventListener('touchmove', skipToVideoEndHandler, { passive: false });
      window.removeEventListener('scroll', skipToVideoEndHandler, { passive: false });
      skipToVideoEndHandler = null;
    }
    
    // 使用 changeOriginVideo 无缝切换视频
    await changeOriginVideo(originInfos.value[2].videoUrl);
    
    // 等待 Vue 更新 DOM
    await nextTick();
    
    if (originVideo.value) {
      // 确保视频开始播放
      originVideo.value.currentTime = 0;
      originVideo.value.play().catch(err => {
        console.warn('Third origin video play failed:', err);
      });
      
      // 禁用滚动
      enableScrollLock();
      // 重置处理标志，允许视频播放
      isProcessingScroll.value = false;
      // 立即初始化跳过监听（支持回滚）
      initSkipToVideoEndScroll();
    } else {
      isProcessingScroll.value = false;
    }
  } else {
    isProcessingScroll.value = false;
  }
};

// 根据标题切换到对应的视频并播放（供外部调用）
const switchToOriginVideoByTitle = async (title) => {
  // 标记这是通过菜单跳转的
  isSwitchedFromMenu.value = true;
  
  // 根据标题找到对应的索引
  const targetIndex = originInfos.value.findIndex(info => info.title === title);
  if (targetIndex === -1) {
    console.warn(`未找到标题为 "${title}" 的视频`);
    return;
  }
  
  // 确保 welcomeVideo 已隐藏，显示 originVideo
  if (!welcomeVideoHidden.value) {
    welcomeVideoHidden.value = true;
    
    // 隐藏 welcomeVideo
    if (welcomeVideo.value && welcomeVideo.value.parentElement) {
      gsap.to(welcomeVideo.value.parentElement, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          if (welcomeVideo.value && welcomeVideo.value.parentElement) {
            welcomeVideo.value.parentElement.style.display = 'none';
          }
        }
      });
    }
    
    // 显示 origin-video-wrapper
    if (originVideoWrapper.value) {
      originVideoWrapper.value.style.display = 'block';
      gsap.fromTo(originVideoWrapper.value, 
        { opacity: 0 },
        { 
          opacity: 1,
          duration: 0.3
        }
      );
    }
  }
  
  // 滚动到视频位置
  if (originContainer.value) {
    const containerRect = originContainer.value.getBoundingClientRect();
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const targetScroll = currentScroll + containerRect.top;
    
    await new Promise((resolve) => {
      gsap.to(window, {
        scrollTo: {
          y: targetScroll,
          autoKill: false
        },
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: resolve
      });
    });
  }
  
  // 切换到目标视频
  if (originVideo.value && originInfos.value.length > targetIndex) {
    // 设置当前索引
    originCurrentIndex.value = targetIndex;
    
    // 重置视频完成状态和跳过状态
    originVideoCompleted.value = false;
    canSkipToEnd.value = false;
    
    // 根据不同的视频索引重置相应的状态标志
    if (targetIndex === 0) {
      // 第一个视频：重置第一个视频相关状态
      firstDescriptionShown.value = false;
      secondDescriptionShown.value = false;
    } else if (targetIndex === 1) {
      // 第二个视频：重置第二个视频相关状态
      secondVideoStarted.value = false;
      secondVideoCompleted.value = false;
      videoDescriptionShownAfterSecondVideo.value = false;
    } else if (targetIndex === 2) {
      // 第三个视频：重置第三个视频相关状态
      thirdVideoStarted.value = false;
      thirdVideoCompleted.value = false;
      videoDescriptionShownAfterThirdVideo.value = false;
    }
    
    // 确保 videoAccessories 已显示（如果还没有显示）
    if (!videoAccessoriesShown.value && videoAccessories.value) {
      videoAccessories.value.style.pointerEvents = 'auto';
      videoAccessories.value.style.opacity = '1';
      videoAccessoriesShown.value = true;
    }
    
    // 确保 videoDescription 在播放开始时是隐藏的
    if (videoDescription.value) {
      videoDescription.value.style.display = 'block';
      gsap.set(videoDescription.value, { opacity: 0 });
    }
    
    // 移除之前的跳过滚动事件监听
    if (skipToVideoEndHandler) {
      window.removeEventListener('wheel', skipToVideoEndHandler, { passive: false });
      window.removeEventListener('touchmove', skipToVideoEndHandler, { passive: false });
      window.removeEventListener('scroll', skipToVideoEndHandler, { passive: false });
      skipToVideoEndHandler = null;
    }
    
    // 使用 changeOriginVideo 无缝切换视频
    await changeOriginVideo(originInfos.value[targetIndex].videoUrl);
    
    // 等待 Vue 更新 DOM
    await nextTick();
    
    if (originVideo.value) {
      // 确保视频开始播放
      originVideo.value.currentTime = 0;
      originVideo.value.play().catch(err => {
        console.warn(`Origin video (${title}) play failed:`, err);
      });
      
      // 禁用滚动
      enableScrollLock();
      // 重置处理标志，允许视频播放
      isProcessingScroll.value = false;
    }
  }
};

// 初始化隐藏 video-description 并播放第三个视频的滚动监听
const initHideVideoDescriptionAndPlayThirdVideoScroll = () => {
  // 如果已经播放过或正在处理，不再初始化
  if (thirdVideoStarted.value || isProcessingScroll.value) return;
  
  // 创建滚动事件处理器
  hideVideoDescriptionAndPlayThirdVideoHandler = (e) => {
    // 如果已经播放过或正在处理，不再处理
    if (thirdVideoStarted.value || isProcessingScroll.value) return;
    
    // 防抖：如果距离上次正向滚动时间太短，忽略此次滚动
    const now = Date.now();
    if (now - lastForwardScrollTime < FORWARD_SCROLL_DEBOUNCE_TIME) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    
    // 更新时间戳，防止重复触发
    lastForwardScrollTime = now;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 隐藏 video-description 并播放第三个视频
    hideVideoDescriptionAndPlayThirdVideo();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
  window.addEventListener('touchmove', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
  window.addEventListener('scroll', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
};

// 显示 video-description（第三个视频播放完成后）
const showVideoDescriptionAfterThirdVideo = () => {
  // 如果已经显示过或正在处理，不再处理
  if (videoDescriptionShownAfterThirdVideo.value || isProcessingScroll.value) return;
  
  isProcessingScroll.value = true;
  videoDescriptionShownAfterThirdVideo.value = true;
  
  // 确保页面滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 移除显示 video-description 的滚动事件监听
  if (showVideoDescriptionAfterThirdVideoHandler) {
    window.removeEventListener('wheel', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
    window.removeEventListener('touchmove', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
    window.removeEventListener('scroll', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
    showVideoDescriptionAfterThirdVideoHandler = null;
  }
  
  // 显示 video-description
  if (videoDescription.value) {
    // 更新为第三个视频的 description
    const descriptionElement = videoDescription.value.querySelector('p:last-child');
    if (descriptionElement && originInfos.value[2] && originInfos.value[2].description[0]) {
      descriptionElement.textContent = originInfos.value[2].description[0];
    }
    
    // 更新标题为第三个视频的标题
    const titleElement = videoDescription.value.querySelector('.video-title');
    if (titleElement && originInfos.value[2] && originInfos.value[2].title) {
      titleElement.textContent = originInfos.value[2].title;
    }
    
    // 设置初始状态
    videoDescription.value.style.display = 'block';
    gsap.set(videoDescription.value, { opacity: 0 });
    
    // 显示 video-description，带有淡入动画
    gsap.to(videoDescription.value, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        // 动画完成后重置处理标志
        isProcessingScroll.value = false;
        
        // 解除 origin-video-wrapper 的固定
        if (originVideoWrapper.value) {
          originVideoWrapper.value.style.position = 'relative';
        }
        
        // 移除所有可能还在阻止滚动的滚动事件监听器
        if (showVideoAccessoriesHandler) {
          window.removeEventListener('wheel', showVideoAccessoriesHandler, { passive: false });
          window.removeEventListener('touchmove', showVideoAccessoriesHandler, { passive: false });
          window.removeEventListener('scroll', showVideoAccessoriesHandler, { passive: false });
          showVideoAccessoriesHandler = null;
        }
        if (showFirstDescriptionHandler) {
          window.removeEventListener('wheel', showFirstDescriptionHandler, { passive: false });
          window.removeEventListener('touchmove', showFirstDescriptionHandler, { passive: false });
          window.removeEventListener('scroll', showFirstDescriptionHandler, { passive: false });
          showFirstDescriptionHandler = null;
        }
        if (showSecondDescriptionHandler) {
          window.removeEventListener('wheel', showSecondDescriptionHandler, { passive: false });
          window.removeEventListener('touchmove', showSecondDescriptionHandler, { passive: false });
          window.removeEventListener('scroll', showSecondDescriptionHandler, { passive: false });
          showSecondDescriptionHandler = null;
        }
        if (playSecondVideoHandler) {
          window.removeEventListener('wheel', playSecondVideoHandler, { passive: false });
          window.removeEventListener('touchmove', playSecondVideoHandler, { passive: false });
          window.removeEventListener('scroll', playSecondVideoHandler, { passive: false });
          playSecondVideoHandler = null;
        }
        if (showVideoDescriptionAfterSecondVideoHandler) {
          window.removeEventListener('wheel', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
          window.removeEventListener('touchmove', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
          window.removeEventListener('scroll', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
          showVideoDescriptionAfterSecondVideoHandler = null;
        }
        if (hideVideoDescriptionAndPlayThirdVideoHandler) {
          window.removeEventListener('wheel', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
          window.removeEventListener('touchmove', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
          window.removeEventListener('scroll', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
          hideVideoDescriptionAndPlayThirdVideoHandler = null;
        }
        if (showVideoDescriptionAfterThirdVideoHandler) {
          window.removeEventListener('wheel', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
          window.removeEventListener('touchmove', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
          window.removeEventListener('scroll', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
          showVideoDescriptionAfterThirdVideoHandler = null;
        }
        
        // 移除跳过到视频结尾的滚动监听（第三个视频完成后不再需要）
        if (skipToVideoEndHandler) {
          window.removeEventListener('wheel', skipToVideoEndHandler, { passive: false });
          window.removeEventListener('touchmove', skipToVideoEndHandler, { passive: false });
          window.removeEventListener('scroll', skipToVideoEndHandler, { passive: false });
          skipToVideoEndHandler = null;
        }
        
        // 解除滚动锁定，允许用户正常滚动页面
        disableScrollLock();
        
        // 如果是通过菜单跳转的，重置标志
        if (isSwitchedFromMenu.value) {
          isSwitchedFromMenu.value = false;
        }
        
        // 初始化滚动监听，检测用户是否回到 originVideo 区域
        initScrollBackToOriginVideoListener();
      }
    });
  } else {
    // 如果没有 video-description 元素，直接重置标志并解除固定
    isProcessingScroll.value = false;
    
    // 移除跳过到视频结尾的滚动监听（第三个视频完成后不再需要）
    if (skipToVideoEndHandler) {
      window.removeEventListener('wheel', skipToVideoEndHandler, { passive: false });
      window.removeEventListener('touchmove', skipToVideoEndHandler, { passive: false });
      window.removeEventListener('scroll', skipToVideoEndHandler, { passive: false });
      skipToVideoEndHandler = null;
    }
    
    // 解除 origin-video-wrapper 的固定
    if (originVideoWrapper.value) {
      originVideoWrapper.value.style.position = 'relative';
    }
    
    // 移除所有可能还在阻止滚动的滚动事件监听器
    if (showVideoAccessoriesHandler) {
      window.removeEventListener('wheel', showVideoAccessoriesHandler, { passive: false });
      window.removeEventListener('touchmove', showVideoAccessoriesHandler, { passive: false });
      window.removeEventListener('scroll', showVideoAccessoriesHandler, { passive: false });
      showVideoAccessoriesHandler = null;
    }
    if (showFirstDescriptionHandler) {
      window.removeEventListener('wheel', showFirstDescriptionHandler, { passive: false });
      window.removeEventListener('touchmove', showFirstDescriptionHandler, { passive: false });
      window.removeEventListener('scroll', showFirstDescriptionHandler, { passive: false });
      showFirstDescriptionHandler = null;
    }
    if (showSecondDescriptionHandler) {
      window.removeEventListener('wheel', showSecondDescriptionHandler, { passive: false });
      window.removeEventListener('touchmove', showSecondDescriptionHandler, { passive: false });
      window.removeEventListener('scroll', showSecondDescriptionHandler, { passive: false });
      showSecondDescriptionHandler = null;
    }
    if (playSecondVideoHandler) {
      window.removeEventListener('wheel', playSecondVideoHandler, { passive: false });
      window.removeEventListener('touchmove', playSecondVideoHandler, { passive: false });
      window.removeEventListener('scroll', playSecondVideoHandler, { passive: false });
      playSecondVideoHandler = null;
    }
    if (showVideoDescriptionAfterSecondVideoHandler) {
      window.removeEventListener('wheel', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
      window.removeEventListener('touchmove', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
      window.removeEventListener('scroll', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
      showVideoDescriptionAfterSecondVideoHandler = null;
    }
    if (hideVideoDescriptionAndPlayThirdVideoHandler) {
      window.removeEventListener('wheel', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
      window.removeEventListener('touchmove', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
      window.removeEventListener('scroll', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
      hideVideoDescriptionAndPlayThirdVideoHandler = null;
    }
    if (showVideoDescriptionAfterThirdVideoHandler) {
      window.removeEventListener('wheel', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
      window.removeEventListener('touchmove', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
      window.removeEventListener('scroll', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
      showVideoDescriptionAfterThirdVideoHandler = null;
    }
    
    // 解除滚动锁定，允许用户正常滚动页面
    disableScrollLock();
    
    // 如果是通过菜单跳转的，重置标志
    if (isSwitchedFromMenu.value) {
      isSwitchedFromMenu.value = false;
    }
    
    // 解除 origin-video-wrapper 的固定
    if (originVideoWrapper.value) {
      originVideoWrapper.value.style.position = 'relative';
    }
    
    // 初始化滚动监听，检测用户是否回到 originVideo 区域
    initScrollBackToOriginVideoListener();
    
    // 移除所有可能还在阻止滚动的滚动事件监听器
    if (showVideoAccessoriesHandler) {
      window.removeEventListener('wheel', showVideoAccessoriesHandler, { passive: false });
      window.removeEventListener('touchmove', showVideoAccessoriesHandler, { passive: false });
      window.removeEventListener('scroll', showVideoAccessoriesHandler, { passive: false });
      showVideoAccessoriesHandler = null;
    }
    if (showFirstDescriptionHandler) {
      window.removeEventListener('wheel', showFirstDescriptionHandler, { passive: false });
      window.removeEventListener('touchmove', showFirstDescriptionHandler, { passive: false });
      window.removeEventListener('scroll', showFirstDescriptionHandler, { passive: false });
      showFirstDescriptionHandler = null;
    }
    if (showSecondDescriptionHandler) {
      window.removeEventListener('wheel', showSecondDescriptionHandler, { passive: false });
      window.removeEventListener('touchmove', showSecondDescriptionHandler, { passive: false });
      window.removeEventListener('scroll', showSecondDescriptionHandler, { passive: false });
      showSecondDescriptionHandler = null;
    }
    if (playSecondVideoHandler) {
      window.removeEventListener('wheel', playSecondVideoHandler, { passive: false });
      window.removeEventListener('touchmove', playSecondVideoHandler, { passive: false });
      window.removeEventListener('scroll', playSecondVideoHandler, { passive: false });
      playSecondVideoHandler = null;
    }
    if (showVideoDescriptionAfterSecondVideoHandler) {
      window.removeEventListener('wheel', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
      window.removeEventListener('touchmove', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
      window.removeEventListener('scroll', showVideoDescriptionAfterSecondVideoHandler, { passive: false });
      showVideoDescriptionAfterSecondVideoHandler = null;
    }
    if (hideVideoDescriptionAndPlayThirdVideoHandler) {
      window.removeEventListener('wheel', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
      window.removeEventListener('touchmove', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
      window.removeEventListener('scroll', hideVideoDescriptionAndPlayThirdVideoHandler, { passive: false });
      hideVideoDescriptionAndPlayThirdVideoHandler = null;
    }
    if (showVideoDescriptionAfterThirdVideoHandler) {
      window.removeEventListener('wheel', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
      window.removeEventListener('touchmove', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
      window.removeEventListener('scroll', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
      showVideoDescriptionAfterThirdVideoHandler = null;
    }
    
    // 解除滚动锁定，允许用户正常滚动页面
    disableScrollLock();
    
    // 初始化滚动监听，检测用户是否回到 originVideo 区域
    initScrollBackToOriginVideoListener();
  }
};

// 初始化滚动监听，检测用户是否回到 originVideo 区域
const initScrollBackToOriginVideoListener = () => {
  // 如果已经存在监听器，先移除
  if (scrollBackToOriginVideoHandler) {
    window.removeEventListener('scroll', scrollBackToOriginVideoHandler, { passive: true });
    scrollBackToOriginVideoHandler = null;
  }
  
  // 创建滚动监听器
  scrollBackToOriginVideoHandler = () => {
    // 清除之前的定时器
    if (scrollStableTimer) {
      clearTimeout(scrollStableTimer);
      scrollStableTimer = null;
    }
    
    // 检查滚动位置是否接近顶部（在 originVideo 区域）
    const scrollY = window.scrollY || window.pageYOffset || 0;
    
    // 如果滚动位置接近顶部（小于 100px），且 originVideo 存在，重新初始化回滚监听
    if (scrollY < 100 && originVideo.value && originVideoWrapper.value) {
      // 检查 originVideoWrapper 是否在视口中
      const rect = originVideoWrapper.value.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.top < window.innerHeight;
      
      if (isInViewport && !skipToVideoEndHandler) {
        // 等待滚动稳定后再初始化监听器（延迟300ms，确保滚动已经停止）
        scrollStableTimer = setTimeout(() => {
          const finalScrollY = window.scrollY || window.pageYOffset || 0;
          // 再次检查滚动位置和视口状态，确保滚动已经稳定
          if (finalScrollY < 100 && originVideo.value && originVideoWrapper.value) {
            const finalRect = originVideoWrapper.value.getBoundingClientRect();
            const finalIsInViewport = finalRect.top >= 0 && finalRect.top < window.innerHeight;
            
            if (finalIsInViewport && !skipToVideoEndHandler) {
              console.log('[initScrollBackToOriginVideoListener] 检测到回到 originVideo 区域且滚动已稳定，重新初始化回滚监听');
              // 设置回滚稳定时间戳，表示用户刚刚回滚到 originVideo 区域
              rollbackStableTime = Date.now();
              console.log('[initScrollBackToOriginVideoListener] 设置回滚稳定时间戳，需要等待', ROLLBACK_STABLE_DURATION, 'ms后才能执行回滚逻辑');
              
              // 重新初始化跳过监听（支持回滚）
              // 注意：只有在视频已完成或已暂停时才初始化，避免干扰视频播放
              if (originVideo.value.paused || originVideoCompleted.value) {
                // 如果视频在首帧，重置 canSkipToEnd，确保向下滑动时先播放视频
                const currentTime = originVideo.value.currentTime || 0;
                if (currentTime <= 0.1 && originVideo.value.paused) {
                  console.log('[initScrollBackToOriginVideoListener] 视频在首帧，重置 canSkipToEnd 为 false');
                  canSkipToEnd.value = false;
                  // 如果视频已完成，重置完成状态，允许重新播放
                  if (originVideoCompleted.value) {
                    originVideoCompleted.value = false;
                  }
                }
                initSkipToVideoEndScroll();
              }
            }
          }
          scrollStableTimer = null;
        }, 300);
      }
    }
  };
  
  // 监听滚动事件（使用 passive: true，因为不需要阻止默认行为）
  window.addEventListener('scroll', scrollBackToOriginVideoHandler, { passive: true });
};

// 初始化显示 video-description 的滚动监听（第三个视频播放完成后）
const initShowVideoDescriptionAfterThirdVideoScroll = () => {
  // 如果已经显示过，不再初始化
  if (videoDescriptionShownAfterThirdVideo.value) return;
  
  // 创建滚动事件处理器
  showVideoDescriptionAfterThirdVideoHandler = (e) => {
    // 如果已经显示过或正在处理，不再处理
    if (videoDescriptionShownAfterThirdVideo.value || isProcessingScroll.value) return;
    
    // 防抖：如果距离上次正向滚动时间太短，忽略此次滚动
    const now = Date.now();
    if (now - lastForwardScrollTime < FORWARD_SCROLL_DEBOUNCE_TIME) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    
    // 更新时间戳，防止重复触发
    lastForwardScrollTime = now;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 显示 video-description
    showVideoDescriptionAfterThirdVideo();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
  window.addEventListener('touchmove', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
  window.addEventListener('scroll', showVideoDescriptionAfterThirdVideoHandler, { passive: false });
};

// 初始化 welcomeVideo 滚动监听
const initWelcomeVideoScroll = () => {
  // 如果已经触发过或已完成，不再初始化
  if (welcomeVideoStarted.value || welcomeVideoCompleted.value) return;
  
  // 创建滚动事件处理器
  welcomeVideoScrollHandler = (e) => {
    // 如果已经触发过，不再处理
    if (welcomeVideoStarted.value || welcomeVideoCompleted.value) return;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 触发视频播放
    handleWelcomeVideoScroll();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', welcomeVideoScrollHandler, { passive: false });
  window.addEventListener('touchmove', welcomeVideoScrollHandler, { passive: false });
  window.addEventListener('scroll', welcomeVideoScrollHandler, { passive: false });
};

// 跳过到气候视频结尾
const skipToClimateVideoEnd = () => {
  // 如果视频未播放1秒或正在处理，不允许跳过
  if (!canSkipClimateVideoToEnd) return;
  
  // 如果视频已经完成，不再处理
  if (climateVideo1Completed) return;
  
  climateVideo1Completed = true;
  
  // 移除跳过滚动事件监听
  if (skipToClimateVideoEndHandler) {
    window.removeEventListener('wheel', skipToClimateVideoEndHandler, { passive: false });
    window.removeEventListener('touchmove', skipToClimateVideoEndHandler, { passive: false });
    window.removeEventListener('scroll', skipToClimateVideoEndHandler, { passive: false });
    skipToClimateVideoEndHandler = null;
  }
  
  // 让视频停留在最后一帧
  if (climateVideo1.value) {
    climateVideo1.value.pause();
    // 确保停留在最后一帧
    if (climateVideo1.value.duration) {
      climateVideo1.value.currentTime = climateVideo1.value.duration;
    }
  }
  
  // 恢复滚动（禁用轻量级滚动锁定）
  disableLightScrollLock();
  // 显示 climate-wrapper
  gsap.to('.climate-wrapper', { 
    opacity: 1, 
    duration: 0.5,
    onComplete: () => {
      // climate-wrapper 显示完毕后，解除固定状态
      if (waterVideoScrollTrigger) {
        // 先禁用 ScrollTrigger，避免页面跳动
        waterVideoScrollTrigger.disable();
        // 等待一帧后刷新 ScrollTrigger，确保页面位置正确
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          // 然后销毁 ScrollTrigger
          waterVideoScrollTrigger.kill();
          waterVideoScrollTrigger = null;
        });
      }
      
      // 发出事件，通知父组件气候视频播放完毕（用于显示侧边栏菜单）
      emit('thirdVideoEnded');
    }
  });
};

// 初始化跳过到气候视频结尾的滚动监听
const initSkipToClimateVideoEndScroll = () => {
  // 如果已经完成，不再初始化
  if (climateVideo1Completed) return;
  
  // 如果已经存在处理器，先移除
  if (skipToClimateVideoEndHandler) {
    window.removeEventListener('wheel', skipToClimateVideoEndHandler, { passive: false });
    window.removeEventListener('touchmove', skipToClimateVideoEndHandler, { passive: false });
    window.removeEventListener('scroll', skipToClimateVideoEndHandler, { passive: false });
    skipToClimateVideoEndHandler = null;
  }
  
  // 创建滚动事件处理器
  skipToClimateVideoEndHandler = (e) => {
    // 如果已经完成，不再处理
    if (climateVideo1Completed) return;
    
    // 如果视频未播放1秒，不允许跳过
    if (!canSkipClimateVideoToEnd) return;
    
    // 阻止默认滚动行为
    e.preventDefault();
    e.stopPropagation();
    
    // 跳过到视频结尾
    skipToClimateVideoEnd();
    
    return false;
  };
  
  // 监听滚动事件（使用 passive: false，以便阻止默认行为）
  window.addEventListener('wheel', skipToClimateVideoEndHandler, { passive: false });
  window.addEventListener('touchmove', skipToClimateVideoEndHandler, { passive: false });
  window.addEventListener('scroll', skipToClimateVideoEndHandler, { passive: false });
};

// 第一个视频播放完成
const climateVideoEnded = () => {
  climateVideo1Completed = true;
  
  // 移除跳过滚动事件监听
  if (skipToClimateVideoEndHandler) {
    window.removeEventListener('wheel', skipToClimateVideoEndHandler, { passive: false });
    window.removeEventListener('touchmove', skipToClimateVideoEndHandler, { passive: false });
    window.removeEventListener('scroll', skipToClimateVideoEndHandler, { passive: false });
    skipToClimateVideoEndHandler = null;
  }
  
  // 让视频停留在最后一帧
  if (climateVideo1.value) {
    climateVideo1.value.pause();
    // 确保停留在最后一帧
    if (climateVideo1.value.duration) {
      climateVideo1.value.currentTime = climateVideo1.value.duration;
    }
  }
  
  // 恢复滚动（禁用轻量级滚动锁定）
  disableLightScrollLock();
  // 显示 climate-wrapper
  gsap.to('.climate-wrapper', { 
    opacity: 1, 
    duration: 0.5,
    onComplete: () => {
      // climate-wrapper 显示完毕后，解除固定状态
      if (waterVideoScrollTrigger) {
        // 先禁用 ScrollTrigger，避免页面跳动
        waterVideoScrollTrigger.disable();
        // 等待一帧后刷新 ScrollTrigger，确保页面位置正确
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          // 然后销毁 ScrollTrigger
          waterVideoScrollTrigger.kill();
          waterVideoScrollTrigger = null;
        });
      }
      
      // 发出事件，通知父组件气候视频播放完毕（用于显示侧边栏菜单）
      emit('thirdVideoEnded');
    }
  });
};

// 生物部分视角位移
let viewDisplacementTrigger = null;
const viewDisplacement = async () => {
  await nextTick();

  const firstScreen = document.querySelector('.lives .first-screen');

  if (!firstScreen) return;

  // 如果已经创建过，先清理
  if (viewDisplacementTrigger) {
    viewDisplacementTrigger.kill();
  }

  // 当 first-screen 的顶部到达浏览器顶部时，再往下滑 960px，first-screen 就横向移动 960px
  viewDisplacementTrigger = ScrollTrigger.create({
    trigger: '.lives .first-screen',
    start: 'top top', // 当元素顶部到达视口顶部时开始
    end: `+=${pxToVwPx(960)}`, // 滚动 960px
    scrub: true, // 与滚动同步，平滑跟随
    pin: true, // 在横向滚动期间固定容器
    anticipatePin: 1,
    animation: gsap.to('.lives .first-screen', {
      x: pxToVw(-960), // 横向移动 960px
      ease: 'none' // 线性动画，与滚动完全同步
    }),
    invalidateOnRefresh: true,
  });
}


let viewDisplacementTrigger2 = null;
let viewDisplacementTrigger3 = null;

const viewDisplacement2 = async () => {
  await nextTick();

  const secondScreen = document.querySelector('.lives .second-screen-new');

  if (!secondScreen) return;

  // 如果已经创建过，先清理
  if (viewDisplacementTrigger2) {
    viewDisplacementTrigger2.kill();
  }
  if (viewDisplacementTrigger3) {
    viewDisplacementTrigger3.kill();
  }

  // 第一阶段：当元素顶部到达浏览器顶部时，向右移动（x: -1920）
  viewDisplacementTrigger2 = ScrollTrigger.create({
    trigger: '.lives .second-screen-new',
    start: 'top top', // 当元素顶部到达视口顶部时开始
    end: `+=${pxToVwPx(1920)}`, // 滚动 1920px
    scrub: true, // 与滚动同步，平滑跟随
    pin: true, // 在横向滚动期间固定容器
    pinSpacing: true, // 保持间距
    anticipatePin: 1,
    animation: gsap.to('.lives .second-screen-new', {
      x: pxToVw(-1920), // 向右移动 1920px
      ease: 'none' // 线性动画，与滚动完全同步
    }),
    invalidateOnRefresh: true,
  });

  // 等待第一个 ScrollTrigger 创建完成并刷新
  await nextTick();
  ScrollTrigger.refresh();

  // 第二阶段：当滚动到距离元素底部 540px 时，开始左移
  // 使用第一个 ScrollTrigger 的结束位置作为起始点
  const firstEndScroll = viewDisplacementTrigger2.end;
  viewDisplacementTrigger3 = ScrollTrigger.create({
    trigger: '.lives .second-screen-new',
    start: `${firstEndScroll} bottom-=${pxToVwPx(540)}`, // 在第一个结束后，当元素底部距离视口底部 540px 时开始
    end: `+=${pxToVwPx(1920)}`, // 滚动 1920px，让左移动画与滚动平滑绑定
    scrub: true, // 与滚动同步，平滑跟随
    pin: false, // 不 pin，避免与第一个冲突，元素已经被第一个 pin 住了
    animation: gsap.to('.lives .second-screen-new', {
      x: 0, // 从当前值（-1920）左移回到 0
      ease: 'none' // 线性动画，与滚动完全同步
    }),
    invalidateOnRefresh: true,
  });
}



const viewDisplacement3 = async () => {
  await nextTick();

  const secondScreen = document.querySelector('.lives .second-screen-new');

  if (!secondScreen) return;

  // 如果已经创建过，先清理
  if (viewDisplacementTrigger3) {
    viewDisplacementTrigger3.kill();
  }

  // 当元素差540到底部的位置到达浏览器的底部，就开始左移，直到元素左边到达浏览器左边
  viewDisplacementTrigger3 = ScrollTrigger.create({
    trigger: '.lives .second-screen-new',
    start: `bottom+${pxToVwPx(540)} bottom`, // 当元素差540到底部的位置到达浏览器的底部，就开始左移，直到元素左边到达浏览器左边
    end: `left left`,
    scrub: true, // 与滚动同步，平滑跟随
    pin: true, // 在横向滚动期间固定容器
    anticipatePin: 1,
    animation: gsap.to('.lives .second-screen-new', {
      x: pxToVw(-1920), // 左移直到元素左边到达浏览器左边
      ease: 'none' // 线性动画，与滚动完全同步
    }),
    invalidateOnRefresh: true,
  });
}

let viewDisplacementTrigger4 = null;
let viewDisplacementTrigger5 = null;

const viewDisplacement4 = async () => {
  await nextTick();

  const secondScreen = document.querySelector('.lives .horizontal-03');

  if (!secondScreen) return;

  // 如果已经创建过，先清理
  if (viewDisplacementTrigger4) {
    viewDisplacementTrigger4.kill();
  }
  if (viewDisplacementTrigger5) {
    viewDisplacementTrigger5.kill();
  }

  // 第一阶段：当元素顶部到达浏览器顶部时，向右移动（x: -7680）
  viewDisplacementTrigger4 = ScrollTrigger.create({
    trigger: '.lives .horizontal-03',
    start: `top+=${pxToVwPx(1080)} top`, // 当元素顶部到达视口顶部时开始
    end: `+=${pxToVwPx(5760)}`, // 滚动 7680px
    scrub: true, // 与滚动同步，平滑跟随
    pin: true, // 在横向滚动期间固定容器
    pinSpacing: true, // 保持间距
    anticipatePin: 1,
    animation: gsap.to('.lives .horizontal-03', {
      x: pxToVw(-5760), // 向右移动 7680px
      ease: 'none' // 线性动画，与滚动完全同步
    }),
    invalidateOnRefresh: true,
  });

  // // 等待第一个 ScrollTrigger 创建完成并刷新
  // await nextTick();
  // ScrollTrigger.refresh();
  //
  // // 第二阶段：当滚动到距离元素底部 540px 时，开始左移
  // // 使用第一个 ScrollTrigger 的结束位置作为起始点
  // const firstEndScroll = viewDisplacementTrigger2.end;
  // viewDisplacementTrigger3 = ScrollTrigger.create({
  //   trigger: '.lives .second-screen-new',
  //   start: `${firstEndScroll} bottom-=${pxToVwPx(540)}`, // 在第一个结束后，当元素底部距离视口底部 540px 时开始
  //   end: `+=${pxToVwPx(1920)}`, // 滚动 1920px，让左移动画与滚动平滑绑定
  //   scrub: true, // 与滚动同步，平滑跟随
  //   pin: false, // 不 pin，避免与第一个冲突，元素已经被第一个 pin 住了
  //   animation: gsap.to('.lives .second-screen-new', {
  //     x: 0, // 从当前值（-1920）左移回到 0
  //     ease: 'none' // 线性动画，与滚动完全同步
  //   }),
  //   invalidateOnRefresh: true,
  // });
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
// horizontal-02 横向滚动
let horizontal02ScrollTrigger = null;
const initHorizontal02Scroll = async () => {
  await nextTick();

  const horizontal02 = document.querySelector('.horizontal-02');

  if (!horizontal02) return;

  // 如果已经创建过，先清理
  if (horizontal02ScrollTrigger) {
    horizontal02ScrollTrigger.kill();
  }

  // 当 horizontal-02 的顶部到达浏览器顶部时，再往下滑 1920px，horizontal-02 就横向移动 1920px
  horizontal02ScrollTrigger = ScrollTrigger.create({
    trigger: '.horizontal-02',
    start: 'top top', // 当元素顶部到达视口顶部时开始
    end: `+=${pxToVwPx(1920)}`, // 滚动 1920px（横向移动 1920px）
    scrub: true, // 与滚动同步，平滑跟随
    pin: true, // 在横向滚动期间固定容器
    anticipatePin: 1,
    animation: gsap.to('.horizontal-02', {
      x: pxToVw(-1920), // 横向移动 1920px（从第一个屏幕移动到第二个屏幕）
      ease: 'none' // 线性动画，与滚动完全同步
    }),
    invalidateOnRefresh: true,
  });
}
onMounted(() => {
  // 确保页面初始滚动位置在顶部
  window.scrollTo(0, 0);
  
  // 添加防止漏白的 CSS 样式（仅在需要时，不影响其他功能）
  const body = document.body;
  const html = document.documentElement;
  const originalBodyOverscroll = body.style.overscrollBehavior;
  const originalHtmlOverscroll = html.style.overscrollBehavior;
  
  // 设置 overscroll-behavior 防止漏白（仅在顶部时生效）
  body.style.overscrollBehavior = 'none';
  html.style.overscrollBehavior = 'none';
  
  // 保存原始样式以便清理
  if (!body._originalOverscrollBehavior) {
    body._originalOverscrollBehavior = originalBodyOverscroll;
  }
  if (!html._originalOverscrollBehavior) {
    html._originalOverscrollBehavior = originalHtmlOverscroll;
  }
  
  // 初始化 welcomeVideo 滚动监听
  initWelcomeVideoScroll();
  // initVideoScroll(); // 动效已移除
  // 视角位移
  viewDisplacement();
  viewDisplacement2()
  viewDisplacement4()
  // 初始化 water-bg-video 滚动固定
  initWaterVideoScroll();
  // 初始化 water-cloud-1 动画
  initWaterCloud1Animation();
  // 初始化 water-cloud-2 动画
  initWaterCloud2Animation();
  // 大雁动画
  initGooseAnimation();
  // 初始化 horizontal-02 横向滚动
  initHorizontal02Scroll();
  // fragment 透明度动画
  initFragmentOpacityAnimation();
  
  // 将切换视频的方法暴露到全局，供 SiderMenu 使用
  if (typeof window !== 'undefined') {
    window.__grologyVideoControl = {
      switchToOriginVideoByTitle
    };
  }
});


onUnmounted(() => {
  // 清理全局暴露的方法
  if (typeof window !== 'undefined' && window.__grologyVideoControl) {
    delete window.__grologyVideoControl;
  }
  
  // 恢复防止漏白的 CSS 样式
  const body = document.body;
  const html = document.documentElement;
  if (body._originalOverscrollBehavior !== undefined) {
    body.style.overscrollBehavior = body._originalOverscrollBehavior || '';
    delete body._originalOverscrollBehavior;
  }
  if (html._originalOverscrollBehavior !== undefined) {
    html.style.overscrollBehavior = html._originalOverscrollBehavior || '';
    delete html._originalOverscrollBehavior;
  }
  
  // 恢复滚动锁定
  disableScrollLock();
  // 禁用轻量级滚动锁定
  disableLightScrollLock();
  
  // 清理 welcomeVideo 滚动事件监听
  if (welcomeVideoScrollHandler) {
    window.removeEventListener('wheel', welcomeVideoScrollHandler);
    window.removeEventListener('touchmove', welcomeVideoScrollHandler);
    window.removeEventListener('scroll', welcomeVideoScrollHandler);
    welcomeVideoScrollHandler = null;
  }
  
  // 清理切换到 originVideo 的滚动事件监听
  if (switchToOriginVideoHandler) {
    window.removeEventListener('wheel', switchToOriginVideoHandler);
    window.removeEventListener('touchmove', switchToOriginVideoHandler);
    window.removeEventListener('scroll', switchToOriginVideoHandler);
    switchToOriginVideoHandler = null;
  }
  
  // 清理显示 video-accessories 的滚动事件监听
  if (showVideoAccessoriesHandler) {
    window.removeEventListener('wheel', showVideoAccessoriesHandler);
    window.removeEventListener('touchmove', showVideoAccessoriesHandler);
    window.removeEventListener('scroll', showVideoAccessoriesHandler);
    showVideoAccessoriesHandler = null;
  }
  
  // 清理显示第一个 description 的滚动事件监听
  if (showFirstDescriptionHandler) {
    window.removeEventListener('wheel', showFirstDescriptionHandler);
    window.removeEventListener('touchmove', showFirstDescriptionHandler);
    window.removeEventListener('scroll', showFirstDescriptionHandler);
    showFirstDescriptionHandler = null;
  }
  
  // 清理显示第二个 description 的滚动事件监听
  if (showSecondDescriptionHandler) {
    window.removeEventListener('wheel', showSecondDescriptionHandler);
    window.removeEventListener('touchmove', showSecondDescriptionHandler);
    window.removeEventListener('scroll', showSecondDescriptionHandler);
    showSecondDescriptionHandler = null;
  }
  
  // 清理播放第二个视频的滚动事件监听
  if (playSecondVideoHandler) {
    window.removeEventListener('wheel', playSecondVideoHandler);
    window.removeEventListener('touchmove', playSecondVideoHandler);
    window.removeEventListener('scroll', playSecondVideoHandler);
    playSecondVideoHandler = null;
  }
  
  // 清理显示 video-description 的滚动事件监听（第二个视频播放完成后）
  if (showVideoDescriptionAfterSecondVideoHandler) {
    window.removeEventListener('wheel', showVideoDescriptionAfterSecondVideoHandler);
    window.removeEventListener('touchmove', showVideoDescriptionAfterSecondVideoHandler);
    window.removeEventListener('scroll', showVideoDescriptionAfterSecondVideoHandler);
    showVideoDescriptionAfterSecondVideoHandler = null;
  }
  
  // 清理隐藏 video-description 并播放第三个视频的滚动事件监听
  if (hideVideoDescriptionAndPlayThirdVideoHandler) {
    window.removeEventListener('wheel', hideVideoDescriptionAndPlayThirdVideoHandler);
    window.removeEventListener('touchmove', hideVideoDescriptionAndPlayThirdVideoHandler);
    window.removeEventListener('scroll', hideVideoDescriptionAndPlayThirdVideoHandler);
    hideVideoDescriptionAndPlayThirdVideoHandler = null;
  }
  
  // 清理显示 video-description 的滚动事件监听（第三个视频播放完成后）
  if (showVideoDescriptionAfterThirdVideoHandler) {
    window.removeEventListener('wheel', showVideoDescriptionAfterThirdVideoHandler);
    window.removeEventListener('touchmove', showVideoDescriptionAfterThirdVideoHandler);
    window.removeEventListener('scroll', showVideoDescriptionAfterThirdVideoHandler);
    showVideoDescriptionAfterThirdVideoHandler = null;
  }
  
  // 清理跳过到视频结尾的滚动事件监听
  if (skipToVideoEndHandler) {
    window.removeEventListener('wheel', skipToVideoEndHandler);
    window.removeEventListener('touchmove', skipToVideoEndHandler);
    window.removeEventListener('scroll', skipToVideoEndHandler);
    skipToVideoEndHandler = null;
  }
  
  // 清理跳过到气候视频结尾的滚动事件监听
  if (skipToClimateVideoEndHandler) {
    window.removeEventListener('wheel', skipToClimateVideoEndHandler);
    window.removeEventListener('touchmove', skipToClimateVideoEndHandler);
    window.removeEventListener('scroll', skipToClimateVideoEndHandler);
    skipToClimateVideoEndHandler = null;
  }
  
  // originScrollTrigger 相关清理已移除（动效已移除）
  if (viewDisplacementTrigger) {
    viewDisplacementTrigger.kill();
  }
  if (viewDisplacementTrigger2) {
    viewDisplacementTrigger2.kill();
  }
  if (viewDisplacementTrigger3) {
    viewDisplacementTrigger3.kill();
  }
  if (waterVideoScrollTrigger) {
    waterVideoScrollTrigger.kill();
  }
  if (waterCloud1ScrollTrigger) {
    waterCloud1ScrollTrigger.kill();
  }
  if (waterCloud2ScrollTrigger) {
    waterCloud2ScrollTrigger.kill();
  }
  if (gooseInfoScrollTrigger) {
    gooseInfoScrollTrigger.kill();
  }
  if (horizontal02ScrollTrigger) {
    horizontal02ScrollTrigger.kill();
  }
  // originContainer 相关的 ScrollTrigger 清理已移除（动效已移除）
});

</script>
<style scoped>
.grology {
  width: 1920px;
  min-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

.grology-welcome {
  position: relative;
}

.grology-origin {
  position: relative;
  width: 1920px;
  min-width: 100vw;
  height: 1080px;
  min-height: 100vh;
  opacity: 1;
  pointer-events: auto;
  z-index: 10;
}

.welcome-video-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-width: 1920px;
  min-height: 1080px;
  z-index: 100;
}

.welcome-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1920px;
  min-height: 1080px;
  object-fit: cover;
  display: block;
  /* 不使用 CSS transition，完全由 GSAP 控制 */
  z-index: 1;
}

.origin-video-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-width: 1920px;
  min-height: 1080px;
  display: none; /* 初始状态隐藏 */
  z-index: 99;
}

.origin-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1920px;
  min-height: 1080px;
  object-fit: cover;
  /* 不使用 CSS transition，完全由 GSAP 控制 */
  z-index: 2;
}

.video-sound {
  width: 50px;
  height: 50px;
  background-image: url("@/assets/images/menu/button_audio_bg_intial_4x.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 70px;
  left: 70px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all ease-in-out 0.2s;
  z-index: 1000;
  pointer-events: auto;
  &:hover{
    background-image: url("@/assets/images/menu/button_audio_bg_hover_4x.png");
  }
  .video-sound-icon-open{
    width: 28px;
    height: 22px;
    background-image: url("@/assets/images/menu/button_audio_on_4x.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .video-sound-icon-off{
    width: 28px;
    height: 22px;
    background-image: url("@/assets/images/menu/button_audio_off_4x.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
}
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

.video-indicator {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateY(-50%);
}

.video-dot {
  width: 12px;
  height: 12px;
  background-color: rgba(255,255,255,0.6);
  transition: all ease-in-out 0.1s;
  margin-right: 56px;
  border-radius: 50%;
  cursor: pointer;
}

.video-dot:last-child {
  margin-right: 0;
}

.video-dot.active {
  width: 16px;
  height: 16px;
  background-color: #fff;
}
.video-accessories{
  width: 100%;
  height: 100%;
  min-width: 1920px;
  min-height: 1080px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
}
.video-description {
  position: absolute;
  top: 620px;
  left: 70px;
  color: #fff;
  padding: 24px 16px;
  background-color: rgba(0,0,0,0.3);
  border-radius: 20px;
  height: auto;
  font-size: 22px;
  line-height: 34px;
}

.video-title{
  font-size: 25px;
  color: #fff;
  margin-bottom: 20px;
  font-family: 'Alibaba-PuHuiTi-M';
}
.grology-water{
  position: relative;
  width: 1920px;
  min-width: 100vw;
  height: 8096px;
  min-height: 100vh;
  background-image: url("@/assets/images/geology/geology-to-water-bg.jpg");
  background-size: 1920px 9276px;
  background-repeat: no-repeat;
  background-position: center -1080px;
  margin-top: 700px;

  .water-cloud-1{
    width: 1920px;
    height: 1054px;
    background-image: url("@/assets/images/geology/geology-to-water-element-1.png");
    background-size: cover;
    margin-top: -300px;
    position: absolute;
    top: 0;
    z-index: 99;
  }
  .water-cloud-2-wrapper{
    width: 1920px;
    height: 746px;
    background-color: #e1e1e1;
    position: absolute;
    top: 1080px;
  }
  .water-cloud-2{
    width: 1920px;
    height: 1146px;
    background-image: url("@/assets/images/geology/geology-to-water-element-2.png");
    background-size: cover;
    z-index: 99;
    position: relative;
  }
  .water-bg-video{
    position: relative;
    width: 100vw;
    min-width: 1920px;
    height: 100vh;
    min-height: 1080px;
    margin-top: -200px;
    will-change: transform;
    transform: translateZ(0);
    overflow: hidden;

    video{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      min-width: 1920px;
      min-height: 1080px;
      object-fit: cover;
      transition: opacity 0.3s ease;
      will-change: transform;
      transform: translateZ(0);
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .climate-wrapper{
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      top: 300px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      .climate-title{
        font-size: 80px;
        color: #4291c4;
        text-align: center;
      }
      .climate-description{
        font-size: 26px;
        color: #4291c4;
        line-height: 34px;
        margin-top: 52px;
        text-align: center;
      }
      .climate-btn{
        margin-left: 150px;
      }
    }
  }
  .water-description{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 1080px;
    position: relative;
    //background-image: url("@/assets/images/geology/geology-to-water-bg.jpg");

    .water-description-line{
      width: 1792px;
      height: 314px;
      background-image: url("@/assets/images/geology/geology-to-water-element-3.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 200px
    }
    .title{
      color: #366294;
      font-size: 80px;
      z-index: 99;
      font-family: 'Alibaba-PuHuiTi-Light';
    }
    .page-the-asian-water-tower{
      width: 20px;
      height: 20px;
      //background-color: red;
      position: relative;
      top: 200px;
    }
  }
  .water-detail-1{
    font-size: 26px;
    line-height: 40px;
    color: #366294;
    margin-top: 280px;
    text-align: center;
  }
  .water-detail-2{
    font-size: 40px;
    line-height: 60px;
    color: #366294;
    margin-top: 240px;
    text-align: center;

  }
  .explore-button{
    //width: 270px;
    //height: 80px;
    //display: flex;
    //justify-content: center;
    //align-items: center;
    //color: #fff;
    //font-size: 40px;
    //border-radius: 30px;
    //background-color: rgba(159,184,198, 0.5);
    cursor: pointer;
    margin-top: 150px;
  }
}
.biology{
  width: 1920px;
  height: 1520px;
  position: absolute;
  left: 0;
  bottom: 0;
  .page-highland-spirit-trail{
    top: -100px;
  }
  .biology-detail-1{
    font-size: 32px;
    line-height: 48px;
    position: absolute;
    left: 268px;
    color: #286f86;
    width: 660px;
  }
  .biology-detail-2{
    font-size: 32px;
    line-height: 48px;
    position: absolute;
    left: 1064px;
    top: 626px;
    color: #2d5f98;
    white-space: nowrap;
  }
  .biology-title{
    width: 1383px;
    height: 331px;
    background-image: url("@/assets/images/geology/geology-to-water-character-1.png");
    background-size: cover;
    left: 274px;
    top: 186px;
    position: absolute;
  }
  .cloud-1{
    width: 1301px;
    height: 994px;
    background-image: url("@/assets/images/geology/geology-to-water-element-4.png");
    background-size: cover;
    right: -70px;
    top: -526px;
    position: absolute;
  }
  .cloud-2{
    width: 1391px;
    height: 1238px;
    background-image: url("@/assets/images/geology/geology-to-water-element-5.png");
    background-size: cover;
    left: 0px;
    bottom: 0;
    //top: 306px;
    position: absolute;
    z-index: 2;
  }
  .bird{
    width: 637px;
    height: 372px;
    background-image: url("@/assets/images/geology/geology-to-water-element-6.png");
    background-size: cover;
    position: relative;
    left: 162px;
    top: 540px;
    z-index: 3;
  }
}
.lives{
  //width: 1920px;
  //height: 1080px;
  //overflow: hidden;
//overflow-x: hidden; /* 隐藏横向溢出，确保位移效果正常 */
  .first-screen{
    width: 2880px;
    height: 2160px;
    background-color: #fff;
    background-image: url("@/assets/images/lives/lives-bg.png");
    background-size: cover;
    position: relative;
    top: -1px;
    .first-screen-bg-1{
      width: 2880px;
      height: 2160px;
      background-image: url("@/assets/images/lives/lives-bty-bg.png");
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
    .first-screen-bg-2{
      width: 2873px;
      height: 1472px;
      background-image: url("@/assets/images/lives/lives-bty-snow.png");
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
    .mountain-img{
      width: 2880px;
      height: 1605px;
      background-image: url("@/assets/images/lives/lives-bty-mountain.png");
      background-size: cover;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .cloud-img{
      width: 2880px;
      height: 1190px;
      background-image: url("@/assets/images/lives/lives-bty-cloud.png");
      background-size: cover;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .goose{
      position: absolute;
      top: 278px;
      left: 468px;
      .goose-info{
        position: relative;
        top: 800px;
        cursor: pointer;
      }
      .goose-img{
        width: 814px;
        height: 397px;
        background-image: url("@/assets/images/lives/lives-bty.png");
        background-size: cover;
      }
      .goose-tip{
        width: 350px;
        height: 33px;
        background-image: url("@/assets/images/lives/lives-prompt.png");
        background-size: cover;
        position: absolute;
        left: -356px;
        top: 300px;
      }
      .goose-name{
        font-size: 36px;
        color: #4b4b4b;
        white-space: nowrap;
      }
      .goose-english{
        margin-top: 20px;
        font-style: italic;
      }
      .goose-description{
        padding: 30px;
        width: 590px;
        border-radius: 20px;
        background-color: rgba(112,168,203,0.8);
        position: absolute;
        top: -30px;
        left: 570px;
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        .goose-description-img{
          width: 530px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-bty-image.jpg");
          background-size: cover;
        }
        .goose-description-text{
          font-size: 22px;
          color: #fff;
          line-height: 48px;
          width: 530px;
          margin-top: 40px;
        }
      }
    }
  }
  .second-screen{
    width: 3840px;
    height: 2700px;
    position: relative;
    background-color: #fff;
    .second-screen-bg{
      width: 1920px;
      height: 2740px;
      background-image: url("@/assets/images/lives/lives-xm-bg.png");
      background-size: cover;
      left: 0px;
      top: 0px;
      position: absolute;
    }
    .cloud-img-1{
      width: 1611px;
      height: 753px;
      background-image: url("@/assets/images/lives/lives-transition-cloud-1.png");
      background-size: cover;
      left: -300px;
      top: -340px;
      position: absolute;
    }
    .cloud-img-2{
      width: 1792px;
      height: 959px;
      background-image: url("@/assets/images/lives/lives-transition-cloud-2.png");
      background-size: cover;
      right: -600px;
      top: -540px;
      position: absolute;
    }
    .mountain-img{
      width: 1920px;
      height: 736px;
      background-image: url("@/assets/images/lives/lives-xb-hill.png");
      background-size: cover;
      left: 0;
      bottom: 0;
      position: absolute;
    }
    .panthera{
      position: absolute;
      left: 680px;
      bottom: 240px;
      .panthera-info{
        cursor: pointer;
      }
      .panthera-img{
        width: 657px;
        height: 451px;
        background-image: url("@/assets/images/lives/lives-xb.png");
        background-size: cover;
      }
      .panthera-name{
        white-space: nowrap;
        font-size: 36px;
        color: #434343;
        position: absolute;
        top: 50px;
        left: 730px;
        width: 100px;
      }
      .panthera-english{
        margin-top: 20px;
        position: absolute;
        top: 100px;
        left: 730px;
        font-style: italic;

      }

      .panthera-description{
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        padding: 30px;
        width: 590px;
        border-radius: 30px;
        background-color: rgba(214,230,244,0.7);
        position: absolute;
        top: -250px;
        left: -440px;
        .panthera-description-img{
          width: 530px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-xb-image.jpg");
          background-size: cover;
        }
        .panthera-description-text{
          font-size: 22px;
          color: #434343;
          line-height: 48px;
          width: 530px;
          margin-top: 40px;
        }
      }
    }
  }
  .second-screen-new{
    width: 3840px;
    height: 2700px;
    position: relative;
    background-image: url("@/assets/images/lives/lives-zlyetc-bg.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    .hill-bg{
      width: 3826px;
      height: 1467px;
      background-image: url("@/assets/images/lives/lives-xb-hill.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 164px
    }
    .mountain-bg{
      width: 5829px;
      height: 2879px;
      background-image: url("@/assets/images/lives/lives-yyetc-hill.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      left: -800px;
    }
    .panthera{
      position: absolute;
      left: 456px;
      top: 430px;
      .panthera-info{
        cursor: pointer;
      }
      .panthera-img{
        width: 657px;
        height: 451px;
        background-image: url("@/assets/images/lives/lives-xb.png");
        background-size: cover;
      }
      .panthera-name{
        white-space: nowrap;
        font-size: 36px;
        color: #fff;
        position: absolute;
        top: 50px;
        left: 700px;
        width: 100px;
      }
      .panthera-english{
        margin-top: 20px;
        position: absolute;
        top: 100px;
        left: 700px;
        font-style: italic;

      }

      .panthera-description{
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        padding: 30px;
        width: 590px;
        border-radius: 30px;
        background-color: rgba(214,230,244,0.7);
        position: absolute;
        top: -250px;
        left: -250px;
        //position: fixed;
        //top: 200px;
        //left: 200px;
        .panthera-description-img{
          width: 530px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-xb-image.jpg");
          background-size: cover;
        }
        .panthera-description-text{
          font-size: 22px;
          color: #434343;
          line-height: 48px;
          width: 530px;
          margin-top: 40px;
        }
      }
    }
    .snowlotus{
      position: absolute;
      right: 220px;
      top: 700px;
      .snowlotus-info{
        cursor: pointer;
      }
      .snowlotus-img{
        width: 359px;
        height: 362px;
        background-image: url("@/assets/images/lives/lives-tgtxl.png");
        background-size: cover;
      }
      .snowlotus-name{
        white-space: nowrap;
        font-size: 36px;
        color: #434343;
        position: absolute;
        top: -100px;
        left: -100px;
        width: 380px;
      }
      .snowlotus-english{
        margin-top: 20px;
        position: absolute;
        top: -70px;
        left: -100px;
        font-style: italic;

      }

      .snowlotus-description{
        //opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        padding: 30px;
        width: 590px;
        border-radius: 30px;
        background-color: rgba(214,230,244,0.7);
        position: absolute;
        top: -250px;
        right: 640px;
        //position: fixed;
        //top: 200px;
        //left: 200px;
        .snowlotus-description-img{
          width: 530px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-tgtxl-image.jpg");
          background-size: cover;
        }
        .snowlotus-description-text{
          font-size: 22px;
          color: #434343;
          line-height: 48px;
          width: 530px;
          margin-top: 40px;
        }
      }
    }
    .sheep{
      position: absolute;
      right: 960px;
      top: 1250px;
      .sheep-info{
        cursor: pointer;
      }
      .sheep-img{
        width: 790px;
        height: 617px;
        background-image: url("@/assets/images/lives/lives-yy.png");
        background-size: cover;
      }
      .sheep-name{
        white-space: nowrap;
        font-size: 36px;
        color: #fff;
        position: absolute;
        bottom: -10px;
        right: -260px;
        width: 380px;
      }
      .sheep-english{
        color: #fff;
        margin-top: 20px;
        position: absolute;
        bottom: -60px;
        right: -260px;
        font-style: italic;

      }

      .sheep-description{
      //opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        padding: 30px;
        width: 590px;
        border-radius: 30px;
        background-color: rgba(121,143,167,0.7);
        position: absolute;
        top: -80px;
        right: -820px;
      //position: fixed;
      //top: 200px;
      //left: 200px;
        .sheep-description-img{
          width: 530px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-yy-image.jpg");
          background-size: cover;
        }
        .sheep-description-text{
          font-size: 22px;
          color: #fff;
          line-height: 48px;
          width: 530px;
          margin-top: 40px;
        }
      }
    }

  }
  .third-screen{
    width: 1920px;
    height: 1080px;
    //background-color: #fff;
    background-image: url("@/assets/images/lives/lives-zl-bg.png");
    background-size: cover;
    position: relative;
    z-index: 2;
    .cloud-img-1{
      width: 2139px;
      height: 912px;
      background-image: url("@/assets/images/lives/lives-transition-cloud-3.png");
      background-size: cover;
      position: absolute;
      top: -500px;
      left: -500px;
    }
    .chiru{
      position: absolute;
      bottom: 150px;
      left: 586px;
      .chiru-img{
        width: 682px;
        height: 843px;
        background-image: url("@/assets/images/lives/lives-zl.png");
        background-size: cover;
      }
      .chiru-name{
        white-space: nowrap;
        font-size: 36px;
        color: #ffffff;
      }
      .chiru-chinese{
        position: absolute;
        top: 460px;
        left: -220px;
      }
      .chiru-english{
        margin-top: 20px;
        position: absolute;
        top: 520px;
        left: -220px;
        font-style: italic;

      }
      .chiru-description{
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        padding: 30px;
        width: 590px;
        border-radius: 30px;
        background-color: rgba(207,213,165,0.6);
        position: absolute;
        top: 50px;
        left: 380px;
        .chiru-description-img{
          width: 530px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-zl-image.jpg");
          background-size: cover;
        }
        .chiru-description-text{
          font-size: 22px;
          color: #434343;
          line-height: 48px;
          width: 530px;
          margin-top: 40px;
        }
      }
    }

  }
  .four-screen{
    width: 1920px;
    height: 2160px;
    background-image: url("@/assets/images/lives/lives-xm-bg.png");
    background-size: cover;
    position: relative;
    .four-screen-bg{
      width: 2343px;
      height: 1974px;
      background-image: url("@/assets/images/lives/lives-xm-ground.png");
      background-size: cover;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .four-screen-tree{
      width: 1234px;
      height: 1854px;
      background-image: url("@/assets/images/lives/lives-xm-tree.png");
      background-size: cover;
      position: absolute;
      bottom: 280px;
      left: -420px;
    }
    .panda{
      position: absolute;
      bottom: 75px;
      left: 90px;
      .panda-info{
        cursor: pointer;
        position: relative; /* 确保能够接收点击事件 */
      }
      .panda-img{
        width: 985px;
        height: 550px;
        background-image: url("@/assets/images/lives/lives-xm.png");
        background-size: cover;
        cursor: pointer;
      }
      .panda-grass{
        width: 1264px;
        height: 208px;
        background-image: url("@/assets/images/lives/lives-xm-grass.png");
        background-size: cover;
        position: absolute;
        bottom: 0;
        left: -50px;
        pointer-events: none; /* 不阻止点击事件，让点击冒泡到父元素 */
      }
      .panda-name{
        white-space: nowrap;
        font-size: 36px;
        color: #ffffff;
        cursor: pointer;
      }
      .panda-chinese{
        position: absolute;
        top: -120px;
        left: 640px;
      }
      .panda-english{
        margin-top: 20px;
        position: absolute;
        top: -84px;
        left: 640px;
        font-style: italic;

      }
      .panda-description{
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        padding: 30px;
        width: 570px;
        border-radius: 30px;
        background-color: rgba(156,173,139,0.6);
        position: absolute;
        top: -270px;
        right: -720px;
        .panda-description-img{
          width: 510px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-xm-image.jpg");
          background-size: cover;
        }
        .panda-description-text{
          font-size: 22px;
          color: #fff;
          line-height: 48px;
          width: 510px;
          margin-top: 40px;
        }
      }
    }

  }
  .horizontal-03{
    width: 7680px;
    height: 2700px;
    position: relative;
    overflow: hidden;
    .prairie{
      width: 3840px;
      height: 2160px;
      background-image: url("@/assets/images/lives/lives-zlyetc-bg.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 0;
      .prairie-bg-hill{
        width: 3864px;
        height: 517px;
        background-image: url("@/assets/images/lives/lives-zlyetc-hill.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        top: 866px;
        left: 0;
      }
      .prairie-bg-grass{
        width: 3871px;
        height: 1187px;
        background-image: url("@/assets/images/lives/lives-zlyetc-grassland.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .grus{
        position: absolute;
        left: 830px;
        bottom: 590px;
        .grus-info{
          cursor: pointer;
        }
        .grus-img{
          width: 427px;
          height: 409px;
          background-image: url("@/assets/images/lives/lives-hjh.png");
          background-size: cover;
        }
        .grus-name{
          white-space: nowrap;
          font-size: 36px;
          color: #fff;
          position: absolute;
          top: -50px;
          right: -20px;
          width: 100px;
        }
        .grus-english{
          margin-top: 20px;
          position: absolute;
          top: -20px;
          right: -20px;
          font-style: italic;
        }

        .grus-description{
          //opacity: 0;
          pointer-events: none;
          cursor: pointer;
          z-index: 1000;
          padding: 30px;
          width: 590px;
          border-radius: 30px;
          background-color: rgba(213,204,152,0.7);
          position: absolute;
          top: -506px;
          left: -626px;
        //position: fixed;
        //top: 200px;
        //left: 200px;
          .grus-description-img{
            width: 530px;
            height: 340px;
            background-image: url("@/assets/images/lives/lives-hjh-image.jpg");
            background-size: cover;
          }
          .grus-description-text{
            font-size: 22px;
            color: #fff;
            line-height: 48px;
            width: 530px;
            margin-top: 40px;
          }
        }
      }
      .rabbit{
        position: absolute;
        left: 324px;
        bottom: 256px;
        .rabbit-info{
          cursor: pointer;
        }
        .rabbit-img{
          width: 310px;
          height: 314px;
          background-image: url("@/assets/images/lives/lives-gyst.png");
          background-size: cover;
        }
        .rabbit-name{
          white-space: nowrap;
          font-size: 36px;
          color: #fff;
          position: absolute;
          top: 40px;
          right: -120px;
          width: 100px;
          font-weight: bold;
        }
        .rabbit-english{
          margin-top: 20px;
          position: absolute;
          top: 70px;
          right: -120px;
          font-style: italic;
          font-weight: bold;
        }

        .rabbit-description{
        //opacity: 0;
          pointer-events: none;
          cursor: pointer;
          z-index: 1000;
          padding: 30px;
          width: 590px;
          border-radius: 30px;
          background-color: rgba(213,204,152,0.7);
          position: absolute;
          top: -250px;
          right: -1162px;
        //position: fixed;
        //top: 200px;
        //left: 200px;
          .rabbit-description-img{
            width: 530px;
            height: 340px;
            background-image: url("@/assets/images/lives/lives-gyst-image.jpg");
            background-size: cover;
          }
          .rabbit-description-text{
            font-size: 22px;
            color: #fff;
            line-height: 48px;
            width: 530px;
            margin-top: 40px;
          }
        }
      }
      .sheep{
        position: absolute;
        left: 2050px;
        bottom: 190px;
        .sheep-info{
          cursor: pointer;
        }
        .sheep-img{
          width: 617px;
          height: 764px;
          background-image: url("@/assets/images/lives/lives-zly.png");
          background-size: cover;
        }
        .sheep-name{
          white-space: nowrap;
          font-size: 36px;
          color: #fff;
          position: absolute;
          bottom: 120px;
          left: 0px;
          width: 100px;
        }
        .sheep-english{
          margin-top: 20px;
          position: absolute;
          bottom: 80px;
          left: 0px;
          font-style: italic;
          font-weight: bold;
        }

        .sheep-description{
        //opacity: 0;
          pointer-events: none;
          cursor: pointer;
          z-index: 1000;
          padding: 30px;
          width: 590px;
          border-radius: 30px;
          background-color: rgba(213,204,152,0.7);
          position: absolute;
          top: 90px;
          right: -700px;
        //position: fixed;
        //top: 200px;
        //left: 200px;
          .sheep-description-img{
            width: 530px;
            height: 340px;
            background-image: url("@/assets/images/lives/lives-zl-image.jpg");
            background-size: cover;
          }
          .sheep-description-text{
            font-size: 22px;
            color: #fff;
            line-height: 48px;
            width: 530px;
            margin-top: 40px;
          }
        }
      }

    }
    .forest{
      width: 3840px;
      height: 2160px;
      background-image: url("@/assets/images/lives/lives-zlyetc-bg.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      left: 3840px;
      .forest-bg-hill{
        width: 3864px;
        height: 517px;
        background-image: url("@/assets/images/lives/lives-zlyetc-hill.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        top: 866px;
        left: 0;
      }
      .forest-bg-grass{
        width: 4532px;
        height: 1651px;
        background-image: url("@/assets/images/lives/lives-xmetc-forest.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
}
.secret{
  width: 1920px;
  height: 8840px;
  background-image: url("@/assets/images/secret/resource-to-history-bg.jpg");
  background-size: cover;
  background-position: center -1080px;
  overflow: hidden;
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

    .clouds{
      position: relative;
      top: 0;
      height: 1042px;
      z-index: 2;
      opacity: 0;
      .cloud-img-1{
        width: 1375px;
        height: 999px;
        background-image: url("@/assets/images/secret/resource-to-history-element-1-1.png");
        background-size: cover;
        position: absolute;
        right: 0px;
      }
      .cloud-img-2{
        width: 1570px;
        height: 1042px;
        background-image: url("@/assets/images/secret/resource-to-history-element-1-2.png");
        background-size: cover;
        position: absolute;
        left: 0px;
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

.horizontal-02{
  width: 3840px;
  height: 2160px;
  position: relative;
  .cloud-img-2-extended{
    width: 901px; /* 增加宽度，从 901px 增加到 1501px，让它更明显地延伸到第四屏 */
    height: 514px;
    background-image: url("@/assets/images/lives/lives-transition-cloud-4.png");
    background-size: cover;
    position: absolute;
    top: -200px;
    left: 1420px; /* 从 third-screen 的右侧（1920px - 500px = 1420px）开始，延伸到 four-screen */
    z-index: 4; /* 确保显示在 four-screen 上方，能够延伸到第四屏 */
  }
  .third-screen{
    position: absolute;
    top: 0;
    left: 0;
  }
  .four-screen{
    position: absolute;
    top: 0;
    left: 1920px;
    z-index: 3; /* 确保 four-screen 及其子元素在 third-screen 上方 */
  }
}
.welcome-video-wrapper {
  .welcome-video-roller {
    width: 100px;
    height: 160px;
    cursor: pointer;
    position: absolute;
    background-image: url("@/assets/images/menu/roll-icon.gif");
    background-size: cover;
    z-index: 9;
    left: 50%;
    transform: translateX(-50%);
    top: 880px;
  }
}
</style>