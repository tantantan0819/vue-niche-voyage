<template>
  <div class="literary-drama" ref="container">
    <!-- 第一屏 -->
    <div class="screen first-screen"></div>
    <!-- 第二屏 -->
    <div class="screen second-screen" data-parallax="true"
           data-parallax-axis="y"
           data-parallax-from="300"
           data-parallax-to="-300"
           data-parallax-speed="1.1"
           data-parallax-center-lock="true"
    >
      <div class="second-screen-left">
        <div class="mountain-img-1" ></div>
        <div class="mountain-img-2"></div>
        <div 
          class="mountain-img-3"
          data-parallax="true"
          data-parallax-axis="y"
          data-parallax-from="200"
          data-parallax-to="-200"
          data-parallax-speed="1.1"
          data-parallax-center-lock="true"
         ></div>
      </div>
      <!-- 中间标题部分 -->
      <div class="second-screen-center">
        <div class="drama-crane-left-img"></div>
        <div 
          class="drama-character-title"
          data-parallax="true"
          data-parallax-axis="y"
          data-parallax-from="200"
          data-parallax-to="-200"
          data-parallax-speed="1.1"
          data-parallax-center-lock="true"></div>
        <div 
          class="drama-character-subtitle"
          data-parallax="true"
          data-parallax-axis="y"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true"
          >
        </div>
        <div 
          class="drama-crane-right-img"
          data-parallax="true"
          data-parallax-axis="y"
          data-parallax-from="400"
          data-parallax-to="-400"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true"
        ></div>
      </div>
       <div class="second-screen-right">
          <div class="mountain-img-4"></div>
          <div class="mountain-img-5"></div>
          <div class="mountain-img-6"></div>
          <div class="mountain-img-7"></div>
        </div>
    </div>
    <!-- 第三屏 -->
    <div 
        class="screen third-screen"  
    >
      <div class="background-silk-img"></div>
      <div 
        class="left-pattern-container"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="80"
        data-parallax-to="-80"
        data-parallax-speed="1.1"
        data-parallax-center-lock="true">
        <div class="fire-img-1"></div>
        <div class="cloud-img-1"></div>
        <div class="cloud-img-2"></div>
        <div class="character-img"></div>
      </div>
      <div 
        class="text-content text-font"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="200"
        data-parallax-to="-200"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">
        “很久很久以前，天灾人祸遍及高原，妖怪横行，百姓遭殃。菩萨为了普渡众生逃出苦海，便向佛祖请求派天神之子下凡降魔。天神之子推巴噶瓦来到人间，他就是格萨尔。”
      </div>
      <div 
        class="right-pattern-container" 
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="80"
        data-parallax-to="-80"
        data-parallax-speed="1.1"
        data-parallax-center-lock="true">
        <div class="fire-container">
          <div class="fire-img-2"></div>
          <div class="fire-img-3"></div>
        </div>
        <div class="clound-img-3"></div>
      </div>
    </div>
    <!-- 第四屏 -->
    <div class="screen forth-screen">
      <div 
        class="portrait-container"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="200"
        data-parallax-to="-200"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">
        <div
          data-parallax="true"
          data-parallax-axis="y"
          data-parallax-from="60"
          data-parallax-to="-60"
          data-parallax-speed="1.1"
          data-parallax-center-lock="true">
          <img class="portrait-img" src="../../../../assets/images/literaryDrama/drama-image-1.jpg"></img>
        </div>
          <div class="portrait-detail">
            <p class="illustration-title-font">格萨尔王和三十员大将降伏恶魔</p>
            <DotPopover class="dot-popover" title="内容来自" content="《情系高原——新藏画精品细赏》 四川民族出版社 2025"></DotPopover>
          </div>
      </div>
      <div class="text-container">
        <div class="text-containter-wrapper">
          <div class="background-text-img"></div>
          <p 
            class="text-font"
            data-parallax="true"
            data-parallax-axis="y"
            data-parallax-from="100"
            data-parallax-to="-100"
            data-parallax-speed="1.3"
            data-parallax-center-lock="true"
            >《格萨尔》是一部传颂千年的民族史诗，讲述了藏族英雄格萨尔王降妖伏魔、造福百姓的征战事迹，被誉为“东方的荷马史诗”，也是世界上篇幅最长、规模最大、唯一“活态”的民间文学作品。</p>
        </div>
      </div>
      <div class="cane-clound-container">
        <div class="cane-img"></div>
        <div 
          class="cloud-img"
            data-parallax="true"
            data-parallax-axis="y"
            data-parallax-from="50"
            data-parallax-to="-50"
            data-parallax-speed="1.1"
            data-parallax-center-lock="true"></div>
      </div>
    </div>
    <!-- 第五屏 -->
    <div class="screen fifth-screen">
      <div class="wrapper">
        <div class="fifth-screen-content text-font">
          <div
            class="fifth-screen-text"
            data-parallax="true"
            data-parallax-axis="y"
            data-parallax-from="100"
            data-parallax-to="-100"
            data-parallax-speed="1.2"
            data-parallax-center-lock="true">
            <span>在我国境内，《格萨尔》史诗广泛传布在西藏、内蒙古、新疆、青海、甘肃、四川、云南地区，被藏、蒙古、土、裕固、东乡、撒拉、纳西、门巴、珞巴、普米、白、独龙、傈僳13个民族传唱千年，已内化为各民族的传统文化，构建起了各民族共有共享的精神家园。</span>
            <DotPopover class="dot-popover" title="阅读更多" content="《雪域雄狮:除暴安良格萨尔王》 四川民族出版社 2024"></DotPopover>
          </div>
          <div class="background-text-img"></div>
        </div>
        <div 
          class="character-img"
          data-parallax="true"
          data-parallax-axis="y"
          data-parallax-from="300"
          data-parallax-to="-300"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true"
          ></div>
      </div>
    </div>
    <!-- 第六屏 -->
    <div class="screen sixth-screen"  
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="100"
        data-parallax-to="-100"
        data-parallax-speed="1.1"
        data-parallax-center-lock="true">
      <div 
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="150"
        data-parallax-to="-150"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">
        <div class="portrait-container">
          <div
            data-parallax="true"
            data-parallax-axis="y"
            data-parallax-from="60"
            data-parallax-to="-60"
            data-parallax-speed="1.1"
            data-parallax-center-lock="true">
            <img class="portrait-img" src="../../../../assets/images/literaryDrama/drama-image-2.jpg"></img>
          </div>
          <p class="illustration-title-font">四川德格竹庆格萨尔藏戏</p>
        </div>
        <div class="silk-ribbon-img"></div>
      </div>
      <div class="forest-img"></div>
      <!-- <div class="silk-ribbon-img"></div> -->
    </div>
    <!-- 第七屏 -->
    <div class="screen seventh-screen">
      <div 
        class="forest-container"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="300"
        data-parallax-to="-300"
        data-parallax-speed="1.1"
        data-parallax-center-lock="true">
        <div class="tree-img"></div>
        <div class="rock-img"></div>
      </div>
      <div 
        class="text-container"
      >
         <div class="background-text-img"></div>
         <div 
          class="text-font seventh-screen-text"
          data-parallax="true"
          data-parallax-axis="y"
          data-parallax-from="100"
          data-parallax-to="-100"
          data-parallax-speed="1.3"
          data-parallax-center-lock="true">
          <p>彝族英雄史诗《支格阿鲁》同样以口头文本形式在云南、四川、贵州等地的彝族民间代代相传，影响广泛。</p>
          <p>
            <span>相传在远古时代，支格阿鲁的母亲原是一位待字闺中的姑娘。一天，她在屋外纺线织布时，空中飞过一只雄鹰，三滴鹰血落在她身上，使她感孕并生下了支格阿鲁（彝语中“鲁”意为“龙”）。阿鲁出生后整日啼哭，哭声惊扰天界。天帝恩体古子遂派食人魔王塔博阿莫前来捉拿母子。当母子二人被抓至空中时，母亲为救儿子，将阿鲁抛下，使他落入万丈深渊的龙巢。阿鲁在龙的养育下成长为一位神力无比、降妖除魔的英雄。</span>
            <DotPopover class="dot-popover" title="阅读更多" content="《支格阿龙1》四川民族出版社 2018"></DotPopover>
          </p>
         </div>
      </div>
    </div>
    <!-- 第八屏 -->
    <div class="screen eighth-screen">
      <div 
        class="tree-img"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="300"
        data-parallax-to="-300"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true"></div>
      <div 
        class="text-container eighth-screen-text"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="200"
        data-parallax-to="-200"
        data-parallax-speed="1.2"
        data-parallax-center-lock="true">
        <p>难忍离舍的爱女，</p>
        <p>父王一席肺腑言，</p>
        <p>你应牢牢记心上。</p>
        <p>为服吐蕃众臣民，</p>
        <p>女儿事事要谨慎。</p>
        <p>第一心胸要开阔，</p>
        <p>第二里外需和睦，</p>
        <p>第三和颜与悦色，</p>
        <p>尊重国王爱臣民，</p>
        <p>四要知礼识廉耻，</p>
        <p>
          <span>四事牢牢记心间。</span>   
          <DotPopover class="dot-popover" title="内容来自" content="《文成公主·诺桑王子》 四川民族出版社 2023"></DotPopover>
        </p>
      </div>
    </div>
    <!-- 第九屏 -->
    <div class="screen ninth-screen">
      <div 
        class="text-container text-font ninth-screen-text"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="200"
        data-parallax-to="-200"
        data-parallax-speed="1.2"
        data-parallax-center-lock="true">这是藏戏《文成公主》中太宗皇帝送别女儿时的谆谆教诲，通过艺术家的演绎，在雪域高原上流传至今，成为人们耳熟能详的经典篇章。</div>
      <div class="background-text-img"></div>
      <div 
        class="portrait-container ninth-screen-portrait-container"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="260"
        data-parallax-to="-260"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">
          <div
            data-parallax="true"
            data-parallax-axis="y"
            data-parallax-from="60"
            data-parallax-to="-60"
            data-parallax-speed="1.1"
            data-parallax-center-lock="true">
            <img class="portrait-img" src="../../../../assets/images/literaryDrama/drama-image-3.jpg"></img>
          </div>
          <div class="portrait-detail">
            <DotPopover class="dot-popover" title="内容来自" content="《情系高原——新藏画精品细赏》 四川民族出版社 2025"></DotPopover>
            <span class="illustration-title-font">文成公主入藏图</span>
          </div>
      </div>
    </div>
    <!-- 第十屏 -->
    <div class="screen tenth-screen">
      <div 
        class="cloud-img tenth-screen-cloud-img"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="600"
        data-parallax-to="-600"
        data-parallax-speed="2"
        data-parallax-center-lock="true"></div>
      <div 
        class="portrait-container"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="200"
        data-parallax-to="-200"
        data-parallax-speed="1.2"
        data-parallax-center-lock="true">
          <div
            data-parallax="true"
            data-parallax-axis="y"
            data-parallax-from="60"
            data-parallax-to="-60"
            data-parallax-speed="1.1"
            data-parallax-center-lock="true">
            <img class="portrait-img" src="../../../../assets/images/literaryDrama/drama-image-4.jpg"></img>
          </div>
          <p class="illustration-title-font tenth-screen-illustration">
            长青春科尔寺僧人表演的康巴藏戏
          </p>
      </div>
      <div class="text-container text-font">
        <div class="background-text-img"></div>
        <div 
          class="tenth-screen-text"
          data-parallax="true"
          data-parallax-axis="y"
          data-parallax-from="100"
          data-parallax-to="-100"
          data-parallax-speed="1.2"
          data-parallax-center-lock="true">
          <p class="first-paragraph">藏戏是藏族传统戏剧形式，主要以面具遮面、结合歌舞表演故事，形成于14世纪，广泛流传于青藏高原地区。</p>
          <p>除了《文成公主》外，还有《诺桑法王》《朗萨雯蚌》《卓瓦桑姆》《苏吉尼玛》《白玛文巴》《顿月顿珠》和《智美更登》共八大传统剧目。这些剧目通过面具、舞蹈、唱腔等多种表现手法，生动再现历史故事和民族传说，反映藏族人民的生活信仰和思想情感。</p>
        </div>
      </div>
    </div>
    <!-- 第十一屏 -->
    <div class="screen eleventh-screen">
      <div 
        class="text-container eleventh-screen-text"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="150"
        data-parallax-to="-150"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">
        <div class="illustration-title-font">道孚惠远寺藏戏中的温巴面具</div>
        <div class="illustration-content-font">藏戏演出分“温巴顿”、“雄”、“扎西”三部分：“温巴顿”是开场戏，为观众祈福，求神祖护佑；“雄”即正戏，主要演出剧目为八大传统藏戏；“扎西”则为结尾，以歌舞形式向观众祝福致谢。贯穿全场的“温巴”角色负责串讲剧情、调节气氛。</div>
      </div>
      <div
        class="eleventh-screen-portrait-container"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="200"
        data-parallax-to="-200"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">
        <img class="portrait-img" src="../../../../assets/images/literaryDrama/drama-image-5.jpg" alt="">
      </div>
      <div 
        class="cloud-img"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="100"
        data-parallax-to="-100"
        data-parallax-speed="1.2"
        data-parallax-center-lock="true"></div>
    </div>
    <!-- 第十二屏 -->
    <div class="screen twelveth-screen">
      <div 
        class="text-container text-font"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="200"
        data-parallax-to="-200"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true">
        从雄浑壮阔的《格萨尔》到跌宕多姿的《支格阿鲁》，再到古朴动人的藏戏，高原文脉不但没有消失，反而历久弥新、广泛流传，绽放出新的生命力与光彩。
      </div>
      <div 
        class="cloud-container"
        data-parallax="true"
        data-parallax-axis="y"
        data-parallax-from="200"
        data-parallax-to="-200"
        data-parallax-speed="1.3"
        data-parallax-center-lock="true"
        >
        <div class="cloud-img-1"></div>
        <div class="cloud-img-2"></div>
      </div>
    </div>
    <!-- 第十三屏 -->
     <div class="last-screen"></div>
  </div>
</template>

<!-- <script setup>
import DotPopover from '@/components/dotPopover.vue';
</script> -->
<script setup>
import { ref, onMounted, onUnmounted,nextTick } from 'vue'
import { gsap } from 'gsap';
import DotPopover from '@/components/dotPopover.vue';

const initGsapAnimation = () => {
    gsap.to('.forth-screen .text-font', {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.forth-screen .text-font', // 触发元素
            start: 'bottom center+=400',
            end: 'top top',
        }
    });
    gsap.to('.fifth-screen-text', {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.fifth-screen-text', // 触发元素
            start: 'bottom center+=400',
            end: 'top top',
        }
    });
    gsap.to('.seventh-screen-text', {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.seventh-screen-text', // 触发元素
          start: 'bottom center+=400',
          end: 'top top',
        }
    });
    gsap.to('.eighth-screen-text', {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '.eighth-screen-text', // 触发元素
          start: 'bottom center+=400',
          end: 'top top',
        }
    });
    gsap.to('.tenth-screen-text', {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.tenth-screen-text', // 触发元素
          start: 'bottom center+=600',
          end: 'top top',
        }
    });
    gsap.to('.eleventh-screen-text', {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.eleventh-screen-text', // 触发元素
          start: 'bottom center+=400',
          end: 'top top',
        }
    });
  }
onMounted(() => {
  initGsapAnimation()
})





// import { ref, onMounted, onUnmounted, nextTick } from 'vue';
// import { gsap } from 'gsap';
import { pxToVw, pxToVh } from '@/utils/viewportUtils';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ===================== 全局初始化 =====================
gsap.registerPlugin(ScrollTrigger);
// GSAP 全局配置（优化性能和精度）
gsap.config({
  autoSleep: false, // 禁用自动休眠
  precision: 0.001  // 提高动画精度
});
ScrollTrigger.config({
  ignoreMobileResize: true, // 忽略移动端resize抖动
  force3D: true, // 强制硬件加速
  limitCallbacks: true // 限制重复回调
});

// ===================== DOM 引用 =====================
const container = ref(null);

// ===================== 批量视差功能 =====================
/**
 * 批量视差功能：基于ScrollTrigger和fromTo的高级视差控制
 * 支持通过data属性配置视差参数，并自动转换像素值为视口单位
 * 针对竖向滚动优化
 */
const initBatchParallax = async () => {
  await nextTick(); // 等待DOM完全渲染
  if (!container.value) return;

  // 获取所有带data-parallax属性的元素
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  parallaxElements.forEach(el => {
    // 解析视差配置
    const config = {
      // 视差方向：x 或 y
      axis: el.dataset.parallaxAxis || 'y',
      // 起始位置（元素进入视口时的位置）
      fromValue: parseFloat(el.dataset.parallaxFrom) || 0,
      // 结束位置（元素离开视口时的位置）
      toValue: parseFloat(el.dataset.parallaxTo) || 100,
      // 视差速度（影响动画进度）
      speed: parseFloat(el.dataset.parallaxSpeed) || 1,
      // 触发点：元素进入视口的位置（竖向滚动默认值）
      triggerStart: el.dataset.parallaxTriggerStart || "top bottom",
      // 结束点：元素离开视口的位置（竖向滚动默认值）
      triggerEnd: el.dataset.parallaxTriggerEnd || "bottom top",
      // 是否在视口中心时保持预期位置
      centerLock: el.dataset.parallaxCenterLock !== "false",
      // 动画缓动函数
      ease: el.dataset.parallaxEase || "power1.out"
    };

    // 根据视差轴选择合适的单位转换函数
    const convertUnit = config.axis === 'x' ? pxToVw : pxToVh;

    // 转换像素值为视口单位
    const convertValue = (value) => {
      // 如果值是字符串且包含单位，直接使用
      if (typeof value === 'string' && /[a-z%]/.test(value)) {
        return value;
      }
      // 否则将数值转换为视口单位
      return convertUnit(value);
    };

    // 计算中心锁定的位置（如果启用）
    let fromProps, toProps;
    if (config.centerLock) {
      // 中心锁定模式：元素在视口中心时保持原位置，进入和离开时产生视差
      const centerValue = 0;

      // 计算从起始位置到结束位置的总距离
      const totalDistance = Math.abs(config.toValue - config.fromValue);

      // 根据轴选择合适的视口单位转换函数
      const convertToViewportUnit = config.axis === 'x' ? pxToVw : pxToVh;

      // 将距离的一半转换为视口单位
      const halfDistance = convertToViewportUnit(totalDistance / 2);

      // 根据起始和结束位置的关系确定方向
      if (config.fromValue < config.toValue) {
        // 从左到右/从上到下移动
        fromProps = { [config.axis]: `-${halfDistance}` };
        toProps = { [config.axis]: halfDistance };
      } else {
        // 从右到左/从下到上移动
        fromProps = { [config.axis]: halfDistance };
        toProps = { [config.axis]: `-${halfDistance}` };
      }
    } else {
      // 普通模式：直接从fromValue动画到toValue，并转换为视口单位
      const convertToViewportUnit = config.axis === 'x' ? pxToVw : pxToVh;
      fromProps = { [config.axis]: convertToViewportUnit(config.fromValue) };
      toProps = { [config.axis]: convertToViewportUnit(config.toValue) };
    }

    // 解决CSS动画与GSAP视差冲突的核心方案
    // 创建一个包装元素来分离CSS动画和GSAP视差效果
    let parallaxWrapper;

    // 检查元素是否已经有包装器
    if (!el.dataset.parallaxWrapper) {
      // 获取元素的计算样式
      const computedStyle = window.getComputedStyle(el);

      // 创建包装器元素
      parallaxWrapper = document.createElement('div');
      parallaxWrapper.className = 'parallax-animation-wrapper';

      // 设置包装器的样式，使其与原元素完全一致
      parallaxWrapper.style.position = computedStyle.position;
      parallaxWrapper.style.top = computedStyle.top;
      parallaxWrapper.style.left = computedStyle.left;
      parallaxWrapper.style.right = computedStyle.right;
      parallaxWrapper.style.bottom = computedStyle.bottom;
      parallaxWrapper.style.width = computedStyle.width;
      parallaxWrapper.style.height = computedStyle.height;
      parallaxWrapper.style.margin = computedStyle.margin;
      parallaxWrapper.style.marginTop = computedStyle.marginTop;
      parallaxWrapper.style.marginRight = computedStyle.marginRight;
      parallaxWrapper.style.marginBottom = computedStyle.marginBottom;
      parallaxWrapper.style.marginLeft = computedStyle.marginLeft;
      parallaxWrapper.style.padding = computedStyle.padding;
      parallaxWrapper.style.display = computedStyle.display;
      parallaxWrapper.style.float = computedStyle.float;
      parallaxWrapper.style.zIndex = computedStyle.zIndex;

      // 复制 flex 相关属性，确保 flex 布局不被破坏
      parallaxWrapper.style.flexDirection = computedStyle.flexDirection;
      parallaxWrapper.style.alignItems = computedStyle.alignItems;
      parallaxWrapper.style.justifyContent = computedStyle.justifyContent;
      parallaxWrapper.style.flexWrap = computedStyle.flexWrap;
      parallaxWrapper.style.alignContent = computedStyle.alignContent;
      parallaxWrapper.style.gap = computedStyle.gap;

      // 关键：确保包装器不会影响布局
      parallaxWrapper.style.boxSizing = 'border-box';
      parallaxWrapper.style.transformStyle = 'preserve-3d';
      // 重要：对于有绝对定位子元素的元素，确保包装器不会创建新的定位上下文
      // 通过设置 will-change 来优化性能，但不影响定位
      parallaxWrapper.style.willChange = 'transform';

      // 将元素移动到包装器内
      el.parentNode.insertBefore(parallaxWrapper, el);
      parallaxWrapper.appendChild(el);

      // 标记元素已经有包装器
      el.dataset.parallaxWrapper = 'true';

      // 重置元素的定位属性，使其在包装器内正常显示
      // 但保留其他样式不变，确保CSS动画仍然有效
      // 重要：保持原元素的 position 属性，这样其绝对定位的子元素（如 annotation-dot）仍能正确定位
      el.style.position = computedStyle.position === 'static' ? 'relative' : computedStyle.position;
      el.style.top = 'auto';
      el.style.left = 'auto';
      el.style.right = 'auto';
      el.style.bottom = 'auto';
      // margin 已经在包装器上了，所以子元素的 margin 应该被移除
      el.style.margin = '0';

      // 如果原元素是 flex 容器，需要保持其 flex 属性，确保内部布局正常
      if (computedStyle.display === 'flex' || computedStyle.display === 'inline-flex') {
        el.style.display = computedStyle.display;
        el.style.flexDirection = computedStyle.flexDirection;
        el.style.alignItems = computedStyle.alignItems;
        el.style.justifyContent = computedStyle.justifyContent;
        el.style.flexWrap = computedStyle.flexWrap;
        el.style.alignContent = computedStyle.alignContent;
        el.style.gap = computedStyle.gap;
      }

      // 关键修复：确保原元素完全填充包装器，这样绝对定位的子元素能正确定位
      // 对于 flex 容器，保持自动尺寸；对于其他元素，填充包装器
      if (computedStyle.display === 'flex' || computedStyle.display === 'inline-flex') {
        // flex 容器保持自动尺寸，但确保它能正确填充
        el.style.width = '100%';
        el.style.height = '100%';
        el.style.minWidth = '0';
        el.style.minHeight = '0';
        el.style.boxSizing = 'border-box';
      } else {
        // 非 flex 元素：确保完全填充包装器
        if (!computedStyle.width || computedStyle.width === 'auto') {
          el.style.width = '100%';
        } else {
          el.style.width = computedStyle.width;
        }
        if (!computedStyle.height || computedStyle.height === 'auto') {
          el.style.height = '100%';
        } else {
          el.style.height = computedStyle.height;
        }
      }
    } else {
      // 如果已经有包装器，找到它（应该是父元素）
      parallaxWrapper = el.parentNode;
    }

    // 现在将视差效果应用到包装器上，而不是直接应用到有CSS动画的元素上
    // 这样CSS动画在内部元素上运行，视差效果在外部包装器上运行，两者互不干扰
    gsap.fromTo(parallaxWrapper,
        fromProps, // 起始状态
        {
          ...toProps, // 结束状态
          ease: config.ease,
          scrollTrigger: {
            trigger: parallaxWrapper, // 使用包装器作为触发器
            start: config.triggerStart,
            end: config.triggerEnd,
            scrub: config.speed, // scrub值控制视差速度
            invalidateOnRefresh: true
          }
        }
    );
  });
};

/**
 * 初始化描述文本渐显动画
 */
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
            start: 'bottom-=300px center+=100',
            end: 'top top+=100px',
            scrub: true,
          },
        }
    );
  });
};

onMounted(async () => {
  // 初始化视差效果
  await initBatchParallax();
  // 初始化描述文本渐显动画
  initDescriptionOpacityAnimation()
});

onUnmounted(() => {
  // 清理所有 ScrollTrigger 实例
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style scoped>
.text-font{
  font: 33px/54px "Alibaba-PuHuiTi-Regular";
  color: #534833;
}
.illustration-title-font{
  font-size: 33px;
  font-family: 'Alibaba-PuHuiTi-Light';
  font-weight: 300;
  line-height: 50px;
  color: #534833;
}
.illustration-content-font{
  font-size: 25px;
  font-family: 'Alibaba-PuHuiTi-Light';
  font-weight: 300;
  line-height: 50px;
  color: #534833;
}
.literary-drama {
  width: 100vw;
  position: relative;
  overflow-x: hidden;
  background: url('@/assets/images/literaryDrama/drama-bg.jpg') no-repeat center center / cover;
  .screen {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
}
.second-screen {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .second-screen-center {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  .drama-character-title{
    width: 1366px;
    height: 294px;
    background: url('@/assets/images/literaryDrama/drama-character-1.png') no-repeat center center / cover;
  }
  .drama-character-subtitle{
    position: relative;
    top: -130px;
    width: 950px;
    height: 152px;
    background: url('@/assets/images/literaryDrama/drama-character-2.png') no-repeat center center / cover;
  }
  .drama-crane-left-img{
    align-self: flex-start;
    position: absolute;
    top: -230px;
    left: -120px;
    width: 391px;
    height: 288px;
    background: url('@/assets/images/literaryDrama/drama-element-1-9.png') no-repeat center center / cover;
  }
  .drama-crane-right-img{
    position: absolute;
    top: 100px;
    right: -200px;
    width: 592px;
    height: 298px;
    background: url('@/assets/images/literaryDrama/drama-element-1-8.png') no-repeat center center / cover;
  }
  .second-screen-left{
    .mountain-img-1{
      position: absolute;
      top: 30px;
      left: 10px;
      width: 386px;
      height: 310px;
      background: url('@/assets/images/literaryDrama/drama-element-1-3.png') no-repeat center center / cover;
    }
    .mountain-img-2{
      position: absolute;
      top: 200px;
      left: 300px;
      width: 386px;
      height: 310px;
      background: url('@/assets/images/literaryDrama/drama-element-1-4.png') no-repeat center center / cover;
    }
     .mountain-img-3{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 680px;
      height: 560px;
      background: url('@/assets/images/literaryDrama/drama-element-1-6.png') no-repeat center center / cover;
    }
  }
  .second-screen-right{
    .mountain-img-4{
      position: absolute;
      top: 30px;
      right: 10px;
      width: 381px;
      height: 535px;
      background: url('@/assets/images/literaryDrama/drama-element-1-1.png') no-repeat center center / cover;
    }
    .mountain-img-5{
      position: absolute;
      top:220px;
      right: 100px;
      width: 371px;
      height: 323px;
      background: url('@/assets/images/literaryDrama/drama-element-1-2.png') no-repeat center center / cover;
    }
    .mountain-img-6{
      position: absolute;
      top:220px;
      right: 0;
      width: 621px;
      height: 667px;
      background: url('@/assets/images/literaryDrama/drama-element-1-5.png') no-repeat center center / cover;
    }
    .mountain-img-7{
      position: absolute;
      bottom:0;
      right: 0;
      width: 739px;
      height: 329px;
      background: url('@/assets/images/literaryDrama/drama-element-1-7.png') no-repeat center center / cover;
    }
  }
}
.third-screen{
  position: relative;
  .background-silk-img{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 400px;
    background: url('@/assets/images/literaryDrama/drama-element-1-13.png') no-repeat center center / cover;
  }
  .left-pattern-container{
    position: absolute;
    left: 0;
    bottom: 0;
    .fire-img-1{
      position: absolute;
      bottom: 200px;
      width: 150px;
      height: 420px;
      background: url('@/assets/images/literaryDrama/drama-element-1-11.png') no-repeat center center / cover;
    }
    .cloud-img-1{
      position: absolute;
      left: -10px;
      bottom: 0px;
      width: 600px;
      height: 160px;
      z-index: 999;
      background: url('@/assets/images/literaryDrama/drama-element-1-16.png') no-repeat center center / cover;
    }
    .cloud-img-2{
      position: absolute;
      left: -10px;
      bottom: 0;
      width: 320px;
      height: 260px;
      z-index: 999;
      background: url('@/assets/images/literaryDrama/drama-element-1-17.png') no-repeat center center / cover;
    }
    .character-img{
      position: absolute;
      left: 200px;
      bottom: 100px;
      width: 321px;
      height: 345px;
      background: url('@/assets/images/literaryDrama/drama-element-1-15.png') no-repeat center center / cover;
    }
  }
  .right-pattern-container{
    position: absolute;
    top: 30px;
    right: 0;
    .fire-container{
      display: flex;
       .fire-img-2{
          position: relative;
          top: 120px;
          left: 40px;
          width: 138px;
          height: 106px;
          background: url('@/assets/images/literaryDrama/drama-element-1-10.png') no-repeat center center / cover;
      }
       .fire-img-3{
        width: 435px;
        height: 199px;
        background: url('@/assets/images/literaryDrama/drama-element-1-12.png') no-repeat center center / cover;
      }
    }
    .clound-img-3{
      position: absolute;
      top: 120px;
      right: 0;
      width: 435px;
      height: 203px;
      background: url('@/assets/images/literaryDrama/drama-element-1-14.png') no-repeat center center / cover;
    }
  }
  .text-content{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 300px;
    width: 900px;
  }
}
.forth-screen{
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 200px;
  .portrait-container{
    margin-top: 200px;
    margin-left: 200px;
    .portrait-img{
      height: 520px;
    }
    .portrait-detail{
      display: flex;
      width: 600px;
      .dot-popover{
        top: 30px;
        left: 30px;
      }
      & >>> .popover-container{
        top: -60px; 
        left: 80px;
      }
    }
  }
  .text-containter-wrapper{
    position: relative;
    width: 900px;
    height: 450px;
    .text-font{
      opacity: 0;
    }
    .background-text-img{
      position: absolute;
      top: -130px;
      right: 0;
      width: 502px;
      height: 161px;
      background: url('@/assets/images/literaryDrama/drama-character-3.png') no-repeat center center / cover;
    }
  }
  .cane-clound-container{
    .cane-img{
      position: absolute;
      right: 150px;
      bottom: 100px;
      width: 420px;
      height: 386px;
      background: url('@/assets/images/literaryDrama/drama-element-2-1.png') no-repeat center center / cover;
    }
    .cloud-img{
      position: absolute;
      right: -80px;
      bottom: -200px;
      width: 461px;
      height: 445px;
      background: url('@/assets/images/literaryDrama/drama-element-2-2.png') no-repeat center center / cover;
    }
  }
  
}
.fifth-screen{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper{
    display: flex;
    align-items: start
  }
  .fifth-screen-content{
    width: 900px;
  }
  .fifth-screen-text{
    opacity: 0;
  }
  .text-container{
    display: flex;
  }
  .character-img{
    position: relative;
    top: 50px;
    left: 50px;
    width:640px;
    height:280px;
    background: url('@/assets/images/literaryDrama/drama-element-2-3.gif') no-repeat center center / cover;
  }
  .background-text-img{
    position: relative;
    top: -150px;
    width:1147px;
    height:359px;
    background: url('@/assets/images/literaryDrama/drama-character-4.png') no-repeat center center / contain;
  }
  .dot-popover{
    top: 30px;
    left: -360px;
    z-index: 999;
  }
   >>> .popover-container{
    top: 30px;
    left: 40px;
  }
}
.sixth-screen{
  position: relative;
  margin-bottom: 100px; 
  .portrait-container{
    position: absolute;
    top: 150px;
    left: 200px;
  }
  .portrait-img{
    width: 500px;
    margin-bottom: 20px;
  }
  .illustration-title-font{
    position: absolute;
    top: 340px;
  }
  .forest-img{
    position: absolute;
    top: 120px;
    right: 0;
    width: 981px;
    height: 653px;
    background: url('@/assets/images/literaryDrama/drama-element-2-4.png') no-repeat center center / cover; 
  }
  .silk-ribbon-img{
    position: absolute;
    top: 800px;
    left: 0px;
    
    width: 821px;
    height: 801px;
    background: url('@/assets/images/literaryDrama/drama-element-2-7.png') no-repeat center center / cover;
  }
}
.seventh-screen{
  position: relative;
  .tree-img{
    position: absolute;
    left: 0;
    top: 200px;
    width: 695px;
    height: 472px;
    background: url('@/assets/images/literaryDrama/drama-element-2-5.png') no-repeat center center / cover;
  }
  .rock-img{
    position: absolute;
    left: 50px;
    top: 600px;
    width: 701px;
    height: 205px;
    background: url('@/assets/images/literaryDrama/drama-element-2-6.png') no-repeat center center / cover;
  }
  .text-container{
    position: absolute;
    top: -100px;
    right: 200px;
    width: 1000px;
    .background-text-img{
      position: absolute;
      top: -100px;
      right: 0;
      width: 671px;
      height: 161px;
      background: url('@/assets/images/literaryDrama/drama-character-5.png') no-repeat center center / cover;
    }
    .seventh-screen-text{
      opacity: 0;
    }
  }
  .dot-popover{
    top: 20px;
    & >>> .popover-container{
      top: 20px;
      left: 60px;
    }
  }
}
.eighth-screen{
  .tree-img{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 535px;
    height: 866px;
    background: url('@/assets/images/literaryDrama/drama-element-2-8.png') no-repeat center center / cover;
  }
  .text-container{
    position: absolute;
    top: 50%;
    left: 200px;
    transform: translateY(-50%);
    writing-mode: vertical-rl; /* 从右向左 从上向下 */
    opacity: 0;
    p{
      font-family: 'EarlySummerSerif-Bold' !important;
      font-size: 40px;
      line-height: 80px;
      color: #534833;
    }
  }
  .dot-popover{
    top: 10px;
    left: 20px;
  }
   >>> .popover-container{
    top: 30px;
    left: 40px;
    writing-mode:horizontal-tb; 
  }
}
.ninth-screen{
  .text-container{
    position: absolute;
    top: 350px;
    left: 200px;
    width: 600px;
  }
  .background-text-img{
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translateX(-50%);
    width: 1302px;
    height: 350px;
    background: url('@/assets/images/literaryDrama/drama-character-6.png') no-repeat center center / cover;
  }
  .portrait-container{
    position: absolute;
    right: 100px;
    bottom: 400px;
    .portrait-img{
      width: 900px;
    }
    .portrait-detail{
      position: absolute;
      top: 380px;
      right: 0;
      text-align: right;
    }
    .dot-popover{
      top: 30px;
      right: 30px;
    }
    >>> .popover-container{
      text-align: left;
      top: -20px;
      right: 80px;
    }
  }
}
.tenth-screen{
  .cloud-img{
    position: absolute;
    top: 100px;
    left: 0;
    width: 655px;
    height: 352px;
    background: url('@/assets/images/literaryDrama/drama-element-2-9.png') no-repeat center center / cover;
  }
  .portrait-container{
    position: absolute;
    top: 380px;
    left: 300px;
    .portrait-img{
      width: 500px;
    }
    .tenth-screen-illustration{
      position: absolute;
      top: 360px;
      left: 0;
    }
  }
  .text-container{
    position: absolute;
    top: 300px;
    right: 200px;
    width: 800px;
    .tenth-screen-text{
      opacity: 0;
    }
    .first-paragraph{
      margin-bottom: 40px;
    }
  }
  .background-text-img{
    position: absolute;
    top: -100px;
    right: 0;
    width: 332px;
    height: 160px;
    background: url('@/assets/images/literaryDrama/drama-character-7.png') no-repeat center center / cover;
  }
}
.eleventh-screen{
  .text-container{
    position: absolute;
    top: 150px;
    left: 200px;
    width: 700px;
    opacity: 0;
  }
  .portrait-img{
    position: absolute;
    top: 100px;
    right: 200px;
    width: 650px;
  }
  .cloud-img{
    position: absolute;
    left: 0;
    bottom: 150px;
    transform: translateY(50%);
    width: 946px;
    height: 548px;
    background: url('@/assets/images/literaryDrama/drama-element-2-10.png') no-repeat center center / cover;
  }
}
.twelveth-screen{
  .text-container{
    position: absolute;
    top: 340px;
    left: 100px;
    width: 1200px;
  }
  .cloud-container{
    .cloud-img-1{
      position: absolute;
      right: 0;
      top: 200px;
      width: 537px;
      height: 611px;
      background: url('@/assets/images/literaryDrama/drama-element-2-11.png') no-repeat center center / cover;
    }
     .cloud-img-2{
      position: absolute;
      top: 560px;
      right: 200px;
      width: 709px;
      height: 445px;
      background: url('@/assets/images/literaryDrama/drama-element-2-12.png') no-repeat center center / cover;
    }
  }
}
.last-screen{
  width: 100vw;
  height: 80vh;
}
</style>
