<template>
  <div class="lives">
    <div class="first-screen" >
      <div class="first-screen-bg-1" v-lazy="lives_bty_bg"></div>
      <div class="first-screen-bg-2"></div>
      <div class="mountain-img"></div>
      <div class="cloud-img"></div>
      <div class="goose">
        <div class="goose-info" @click="handleGooseClick">
          <div class="goose-img"></div>
          <div class="goose-tip"></div>
          <div class="goose-chinese goose-name">斑头雁</div>
          <div class="goose-english goose-name">Anser indicus</div>
        </div>
        <div class="goose-description" ref="gooseDescription" @click="handleGooseClose">
          <div class="goose-description-img"></div>
          <div class="goose-description-text">主要繁殖在我国青海、西藏、新疆西部的高山湖泊等地区，越冬迁飞至陕西、湖南、四川、云南等地。身体大都呈现灰褐色，头顶具两道黑斑纹，嘴和脚呈现黄色。喜欢栖息在高原湖泊沼泽，飞行能力极强，能翻越喜马拉雅山，是世界上飞行高度最高的鸟类之一。</div>
        </div>
      </div>
    </div>
    <div class="second-screen-wrapper">
      <div class="second-screen-new">
        <div class="clouds-wrapper-1">
          <div class="clouds-img-1"></div>
          <div class="clouds-img-2"></div>
        </div>
        <div class="hill-bg"></div>
        <div class="mountain-bg"></div>
        <div class="panthera">
          <div class="panthera-info" @click="handlePantheraClick">
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
          <div class="panthera-description" ref="pantheraDescription" @click="handlePantheraClose">
            <div class="panthera-description-img"></div>
            <div class="panthera-description-text">主要分布于青藏高原和新疆、青海、四川等地，国家一级保护野生动物。全身呈灰白色且满布黑斑，尾巴粗长，超过体长的2／3，四肢短粗。喜欢栖居在海拔3000—6000米的高山空旷多岩地带。主要捕食野羊、岩羊，有时也猎取狍子、旱獭、黄鼠、野兔等动物。</div>
          </div>
        </div>
        <div class="flower">
          <div class="flower-info" @click="handleFlowerClick">
            <div class="flower-img"></div>
            <div class="flower-name flower-chinese"  data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">大花红景天</div>
            <div class="flower-name flower-english"
                 data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">Rhodiola crenulata</div>
          </div>
          <div class="flower-description" ref="flowerDescription" @click="handleFlowerClose">
            <div class="flower-description-img"></div>
            <div class="flower-description-text">主要分布于西藏、云南、四川等地，国家二级保护野生植物。生长海拔范围介于2800-5600米之间，常见于灌木丛和石缝之中。根长可达20厘米，以稻杆色或红色的花朵为标志，在高原环境中尤为显眼，也是红景天药材的唯一基原。</div>
          </div>
        </div>
        <div class="snowlotus">
          <div class="snowlotus-info" @click="handleSnowlotusClick">
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
          <div class="snowlotus-description" ref="snowlotusDescription" @click="handleSnowlotusClose">
            <div class="snowlotus-description-img"></div>
            <div class="snowlotus-description-text">主要分布于我国甘肃、青海、西藏、四川等地，生长在海拔3800—5000米的高山流石滩、高山草甸地带。株高约30—70厘米，茎有稀疏的白色长柔毛，能适应高寒极端环境。药用则有清热解毒的功效。</div>
          </div>
        </div>
        <div class="sheep1">
          <div class="sheep1-info" @click="handleSheep1Click">
            <div class="sheep1-img"></div>
            <div class="sheep1-name sheep1-chinese"  data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">岩羊</div>
            <div class="sheep1-name sheep1-english"
                 data-parallax="true"
                 data-parallax-axis="y"
                 data-parallax-from="100"
                 data-parallax-to="0"
                 data-parallax-speed="1.1"
                 data-parallax-center-lock="true">Pseudois nayaur</div>
          </div>
          <div class="sheep1-description" ref="sheepDescription1" @click="handleSheep1Close">
            <div class="sheep1-description-img"></div>
            <div class="sheep1-description-text">主要分布于中国西北、青藏高原等地，国家二级保护野生动物。体形中等，形态介于野山羊与野绵羊之间。两性都长角，雄性角粗大且弯曲。毛色多为青灰、褐灰色。栖息在海拔4000-5500米林线以上的高原、丘原和高山裸岩等地带，行动敏捷，善攀岩，以青草和各种灌丛枝叶为食。</div>
          </div>
        </div>
      </div>
    </div>
    <div class="horizontal-03-wrapper">
      <div class="horizontal-03">
        <!--   草原部分     -->
        <div class="prairie">
          <div class="clouds-wrapper-2">
            <div class="clouds-img-1"></div>
            <div class="clouds-img-2"></div>
          </div>
          <div class="prairie-bg-hill"></div>
          <div class="prairie-bg-grass"></div>
          <!--   黑颈鹤     -->
          <div class="grus">
            <div class="grus-info" @click="handleGrusClick">
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
            <div class="grus-description" ref="grusDescription" @click="handleGrusClose">
              <div class="grus-description-img"></div>
              <div class="grus-description-text">唯一在高原生长繁殖的鹤类，主要分布在青藏高原和云贵高原，国家一级保护野生动物，也是拉萨市的"市鸟"。通体较白，头、枕和整个颈部均为黑色，眼先和头顶裸露皮肤为红色。主要栖息在高山沼泽、草甸、湖周沼泽地和河谷沼泽区，以植物的根、昆虫、鱼、蛙等为食。</div>
            </div>
          </div>
          <!--   鼠兔    -->
          <div class="rabbit">
            <div class="rabbit-info" @click="handleRabbitClick">
              <div class="rabbit-img"></div>
              <div class="rabbit-img-grass"></div>
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
                   data-parallax-center-lock="true">Ochotona curzoniae</div>
            </div>
            <div class="rabbit-description" ref="rabbitDescription" @click="handleRabbitClose">
              <div class="rabbit-description-img"></div>
              <div class="rabbit-description-text">主要分布于西藏、青海、甘肃、四川等地。体型中等，体长约120-190毫米，体重可达178克，耳朵呈现圆形，唇鼻周围呈黑色，背毛为沙灰色，腹毛呈现脏白色。栖息于海拔4000米左右的高山草甸中，穴居且家族式群居，白天活动，不冬眠也不储草。</div>
            </div>
          </div>
          <!--   藏羚羊    -->
          <div class="sheep">
            <div class="sheep-info" @click="handleSheep2Click">
              <div class="sheep-img"></div>
              <div class="sheep-img-grass"></div>
              <div class="sheep-name sheep-chinese"  data-parallax="true"
                  >藏羚</div>
              <div class="sheep-name sheep-english"
                  >Pantholops hodgsonii</div>
            </div>
            <div class="sheep-description" ref="sheepDescription2" @click="handleSheep2Close">
              <div class="sheep-description-img"></div>
              <div class="sheep-description-text">也叫藏羚羊、长角羊，青藏高原特有物种，国家一级保护野生动物。体长120-140厘米，上体毛色呈现淡棕褐色，胸腹部和四肢内侧为白色。雄性角细长似鞭，乌黑发亮。栖息于海拔4000-5000米的高山草原和荒漠地带，善于奔跑，群居性强，以草类植物为食。</div>
            </div>
          </div>
          <!-- 野牦牛 -->
          <div class="bos-mutus">
            <div class="bos-mutus-info" @click="handleBosMutusClick">
              <div class="bos-mutus-img"></div>
              <div class="bos-mutus-img-grass"></div>
              <div class="bos-mutus-name bos-mutus-chinese"
              >野牦牛</div>
              <div class="bos-mutus-name bos-mutus-english"
              >Bos mutus</div>
            </div>
            <div class="bos-mutus-description" ref="bosMutusDescription" @click="handleBosMutusClose">
              <div class="bos-mutus-description-img"></div>
              <div class="bos-mutus-description-text">主要分布于西藏、青海、四川、甘肃、新疆等地，国家一级保护野生动物，是家牦牛的祖先。体型粗壮，体长可达2米有余。雌雄均有角，雄性更大。胸腹及腿部毛长如蓑衣，可达40厘米。常栖息于海拔4000-5000米的高山草甸和荒漠地带。</div>
            </div>
          </div>
        </div>
        <!--   森林     -->
        <div class="forest">
          <div class="clouds">
            <div class="cloud-img-1"></div>
            <div class="cloud-img-2"></div>
          </div>
          <div class="forest-bg-hill"></div>
          <div class="forest-bg-grass">
          </div>
          <div class="forest-single-grass-1"></div>
          <div class="forest-single-grass-2"></div>
          <div class="forest-wood-grass">
            <div class="forest-wood-img" src="@/assets/images/lives/lives-cjsh-wood.png"></div>
            <div class="forest-grass-img"></div>
          </div>
          <!-- 熊猫 -->
          <div class="panda">
            <div class="panda-info" @click="handlePandaClick">
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
            <div class="panda-description" ref="pandaDescription" @click="handlePandaClose">
              <div class="panda-description-img"></div>
              <div class="panda-description-text">主要分布于四川、陕西和甘肃的部分山区，国家一级保护野生动物。体形似熊，但头部宽而短，毛色以黑白相间为特征，眼圈、肩部及四肢为黑色。多栖息在海拔2600—3500米的高山竹林地带，喜欢湿润、凉爽的气候。大熊猫性情较温顺，以竹子为主食，偶尔也吃小型动物。</div>
            </div>
          </div>
          <!-- 川金丝猴 -->
          <div class="cjsh">
            <div class="cjsh-info" @click="handleCjshClick">
              <div class="cjsh-img"></div>
              <div class="cjsh-grass"></div>
              <div class="cjsh-name cjsh-chinese"
              >川金丝猴</div>
              <div class="cjsh-name cjsh-english"
              >Rhinopithecus roxellana</div>
            </div>
            <div class="cjsh-description" ref="cjshDescription" @click="handleCjshClose">
              <div class="cjsh-description-img"></div>
              <div class="cjsh-description-text">主要分布于四川、陕西、甘肃、湖北等地，国家一级保护野生动物。体型中等，尾长与体长相近，鼻孔上翘，颜面蓝色，颊部棕红，肩背部都披有金黄色长毛。常栖息于海拔1500—3300米的森林中，并随季节垂直迁移。食性很杂，但均以植物性食物为主。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pxToVw, pxToVh, pxToVwPx, pxToVhPx } from '@/utils/viewportUtils';
import lives_bty_bg from '@/assets/images/lives/lives-bty-bg.png'
gsap.registerPlugin(ScrollTrigger);

// 所有生物详情介绍的 refs
const gooseDescription = ref(null);
const gooseDescriptionShown = ref(false);
const pantheraDescription = ref(null);
const pantheraDescriptionShown = ref(false);
const snowlotusDescription = ref(null);
const snowlotusDescriptionShown = ref(false);
const flowerDescription = ref(null);
const flowerDescriptionShown = ref(false);
const sheepDescription1 = ref(null);
const sheepDescription1Shown = ref(false);
const grusDescription = ref(null);
const grusDescriptionShown = ref(false);
const rabbitDescription = ref(null);
const rabbitDescriptionShown = ref(false);
const sheepDescription2 = ref(null);
const sheepDescription2Shown = ref(false);
const bosMutusDescription = ref(null);
const bosMutusDescriptionShown = ref(false);
const pandaDescription = ref(null);
const pandaDescriptionShown = ref(false);
const cjshDescription = ref(null);
const cjshDescriptionShown = ref(false);

// 轻量级滚动锁定相关
let lightScrollLockHandler = null;
let currentDescriptionHandler = null;

// 启用轻量级滚动锁定（不修改body样式，只阻止滚动事件，用于ScrollTrigger pin区域）
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

// 通用的详情介绍弹出方法
const openDescription = (elementRef, isShownRef, onClose) => {
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

// 优化后的方法名：处理各种生物的点击事件
const handleGooseClick = () => openDescription(gooseDescription, gooseDescriptionShown);
const handleGooseClose = () => closeDescription(gooseDescription, gooseDescriptionShown);
const handlePantheraClick = () => openDescription(pantheraDescription, pantheraDescriptionShown);
const handlePantheraClose = () => closeDescription(pantheraDescription, pantheraDescriptionShown);
const handleFlowerClick = () => openDescription(flowerDescription, flowerDescriptionShown);
const handleFlowerClose = () => closeDescription(flowerDescription, flowerDescriptionShown);
const handleSnowlotusClick = () => openDescription(snowlotusDescription, snowlotusDescriptionShown);
const handleSnowlotusClose = () => closeDescription(snowlotusDescription, snowlotusDescriptionShown);
const handleSheep1Click = () => openDescription(sheepDescription1, sheepDescription1Shown);
const handleSheep1Close = () => closeDescription(sheepDescription1, sheepDescription1Shown);
const handleGrusClick = () => openDescription(grusDescription, grusDescriptionShown);
const handleGrusClose = () => closeDescription(grusDescription, grusDescriptionShown);
const handleRabbitClick = () => openDescription(rabbitDescription, rabbitDescriptionShown);
const handleRabbitClose = () => closeDescription(rabbitDescription, rabbitDescriptionShown);
const handleSheep2Click = () => openDescription(sheepDescription2, sheepDescription2Shown);
const handleSheep2Close = () => closeDescription(sheepDescription2, sheepDescription2Shown);
const handleBosMutusClick = () => openDescription(bosMutusDescription, bosMutusDescriptionShown);
const handleBosMutusClose = () => closeDescription(bosMutusDescription, bosMutusDescriptionShown);
const handlePandaClick = () => openDescription(pandaDescription, pandaDescriptionShown);
const handlePandaClose = () => closeDescription(pandaDescription, pandaDescriptionShown);
const handleCjshClick = () => openDescription(cjshDescription, cjshDescriptionShown);
const handleCjshClose = () => closeDescription(cjshDescription, cjshDescriptionShown);

// ScrollTrigger 实例引用
let firstScreenDisplacementTrigger = null;
let secondScreenDisplacementTrigger = null;
const thirdScreenDisplacementTrigger = ref(null);
let gooseParallaxTrigger = null;
let firstScreenBg2ParallaxTrigger = null;
let liveCloud1ScrollTrigger = null;
let liveCloud2ScrollTrigger = null;
let animalNameAnimations = [];

// 优化后的方法名：初始化第一屏视角位移动画
const setupFirstScreenDisplacement = async () => {
  await nextTick();

  const firstScreen = document.querySelector('.lives .first-screen');
  if (!firstScreen) return;

  // 如果已经创建过，先清理
  if (firstScreenDisplacementTrigger) {
    firstScreenDisplacementTrigger.kill();
  }

  // 当 first-screen 的顶部到达浏览器顶部时，再往下滑 960px，first-screen 就横向移动 960px
  firstScreenDisplacementTrigger = ScrollTrigger.create({
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
};

// 优化后的方法名：初始化第二屏视角位移动画
const setupSecondScreenDisplacement = async () => {
  await nextTick();

  const secondScreenWrapper = document.querySelector('.lives .second-screen-wrapper');
  if (!secondScreenWrapper) return;
  
  // 如果已经创建过，先清理
  if (secondScreenDisplacementTrigger) {
    secondScreenDisplacementTrigger.kill();
  }


  // 先让云朵隐藏，等滑到最左侧时再出现
  // gsap.set('.clouds-wrapper-2', { autoAlpha: 0 });

  // 使用 timeline 实现三个阶段的动画：向左 -> 向上 -> 向右
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.lives .second-screen-wrapper',
      start: 'top top', // 当元素顶部到达视口顶部时开始
      end: '+=4000', // 增加滚动距离，让动画更平滑（约3个视口高度）
      scrub: 1, // 平滑跟随，数值越大越平滑（1表示轻微延迟）
      pin: true, // 在滚动期间固定容器
      pinSpacing: true, // 保持间距
      anticipatePin: 1,
      invalidateOnRefresh: true,
    }
  });

  // 第一步：向左移动
  tl.to('.lives .second-screen-new', {
    x: pxToVw(-1920),
    duration: 1,
    ease: 'none'
  });

  // 雪莲名字向左移动
  tl.to('.lives .snowlotus-name', {
    x: pxToVw(-300),
    duration: 1,
    ease: 'none'
  },'<');

  // 第二步：向上移动
  tl.to('.lives .second-screen-new', {
    y: pxToVw(-1080),
    duration: 1,
    ease: 'none'
  });

  // 雪莲名字向上移动
  tl.to('.lives .snowlotus-name', {
    y: pxToVw(-200),
    duration: 1,
    ease: 'none'
  },'<');

  // 岩羊名字向上移动
  tl.to('.lives .sheep1-name ', {
    y: pxToVh(-300),
    duration: 1,
    ease: 'none'
  },'<');

  // 第三步：向右移动（回到初始 x 位置）
  tl.to('.lives .second-screen-new', {
    x: pxToVw(0),
    duration: 1,
    ease: 'none'
  });

  // 岩羊名字向右移动
  tl.to('.lives .sheep1-name ', {
    x: pxToVw(300),
    duration: 1,
    ease: 'none'
  },'<');

  // 大花红景天名字向右移动
  tl.to('.lives .flower-name ', {
    x: pxToVw(300),
    duration: 1,
    ease: 'none'
  },'<');

   // 到达最左侧后再显示云朵
  tl.to('.clouds-wrapper-2', {
    autoAlpha: 1,
    duration: 0.5,
    ease: 'none'
  });

  // 大花红景天名字向上移动（等clouds-wrapper-2显示完成后再移动）
  tl.to('.lives .flower-name ', {
    y: pxToVh(-200),
    duration: 0.5,
    ease: 'none'
  },'>');

  // 保存 ScrollTrigger 引用以便后续清理
  secondScreenDisplacementTrigger = tl.scrollTrigger;
};

// 优化后的方法名：初始化第三屏视角位移动画
const setupThirdScreenDisplacement = async () => {
  await nextTick();

  const screen = document.querySelector('.lives .horizontal-03-wrapper');
  if (!screen) return;

  // 如果已经创建过，先清理
  if (thirdScreenDisplacementTrigger.value) {
    thirdScreenDisplacementTrigger.value.kill();
  }

  // 使用 timeline 实现动画
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.lives .horizontal-03-wrapper',
      start: 'top top', // 当元素顶部到达视口顶部时开始
      end: '+=7500', // 增加滚动距离，让动画更平滑（约3个视口高度）
      scrub: 1, // 平滑跟随，数值越大越平滑（1表示轻微延迟）
      pin: true, // 在滚动期间固定容器
      pinSpacing: true, // 保持间距
      anticipatePin: 1,
      invalidateOnRefresh: true,
    }
  });

  // 第一步：向上移动
  tl.to('.lives .horizontal-03', {
    y: pxToVw(-1080),
    duration: 1,
    ease: 'none'
  });

  tl.to('.lives .grus-name', {
    y: pxToVh(-200),
    duration: 1,
    ease: 'none'
  },'<');

  tl.to('.lives .rabbit-name', {
    y: pxToVh(-200),
    duration: 1,
    ease: 'none'
  },'<');

  // 第二步：向左移动
  tl.to('.lives .horizontal-03', {
    x: pxToVw(-3840),
    duration: 3,
    ease: 'none'
  });

  tl.to('.lives .grus-name', {
    x: pxToVw(-300),
    duration: 1,
    ease: 'none'
  },'<');

  tl.to('.lives .rabbit-name', {
    x: pxToVw(-300),
    duration: 1,
    ease: 'none'
  },'<');

  tl.to('.lives .sheep-name', {
    x: pxToVw(-300),
    duration: 1,
    ease: 'none'
  },'<');

  tl.to('.lives .bos-mutus-name', {
    x: pxToVw(-600),
    duration: 3,
    ease: 'none'
  },'<');

  // 第三步：继续向上移动（如果需要）
  tl.to('.lives .horizontal-03', {
    y: pxToVw(-1620),
    duration: 0.5,
    ease: 'none'
  });

  tl.to('.lives .panda-name', {
    y: pxToVw(-100),
    duration: 0.5,
    ease: 'none'
  },'<');

  // 第四步：继续向左移动（如果需要）
  tl.to('.lives .horizontal-03', {
    x: pxToVw(-5760),
    duration: 1.5,
    ease: 'none'
  });

  tl.to('.lives .panda-name', {
    x: pxToVw(-300),
    duration: 1.5,
    ease: 'none'
  },'<');

  tl.to('.lives .cjsh-name', {
    x: pxToVw(-300),
    duration: 1,
    ease: 'none'
  },'<');

  tl.to('.clouds-wrapper-3', {
    y: pxToVh(-200),
    duration: 0.5,
    ease: 'none'
  });

  // tl.to('.lives .cjsh-name', {
  //   y: pxToVh(-100),
  //   duration: 0.5,
  //   ease: 'none'
  // },'>');

  // 保存 ScrollTrigger 引用以便后续清理
  thirdScreenDisplacementTrigger.value = tl.scrollTrigger;
};

// 优化后的方法名：初始化云朵1的滚动动画
const setupCloud1Parallax = async () => {
  await nextTick();

  const liveCloud = document.querySelector('.clouds-wrapper-1');
  if (!liveCloud) return;

  // 如果已经创建过，先销毁
  if (liveCloud1ScrollTrigger) {
    liveCloud1ScrollTrigger.kill();
  }

  liveCloud1ScrollTrigger = gsap.to(liveCloud, {
    y: pxToVh(-300),
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: liveCloud,
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: `top top`, // 当元素顶部到达视口顶部时结束
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });
};

// 优化后的方法名：初始化云朵2的滚动动画
const setupCloud2Parallax = async () => {
  await nextTick();

  const liveCloud = document.querySelector('.clouds-wrapper-2');
  if (!liveCloud) return;

  // 如果已经创建过，先销毁
  if (liveCloud2ScrollTrigger) {
    liveCloud2ScrollTrigger.kill();
  }

  liveCloud2ScrollTrigger = gsap.to(liveCloud, {
    y: pxToVh(-100),
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: liveCloud,
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: `top top`, // 当元素顶部到达视口顶部时结束
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true,
      onUpdate: self => {
        console.log(self.progress,'--第二朵云')
      }
    }
  });
};

// 优化后的方法名：初始化大雁的视差动画
const setupGooseParallax = async () => {
  await nextTick();

  const firstScreen = document.querySelector('.first-screen');
  if (!firstScreen) return;

  // 如果已经创建过，先销毁
  if (gooseParallaxTrigger) {
    gooseParallaxTrigger.kill();
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
  gooseParallaxTrigger = {
    vertical: verticalAnimation,
    horizontal: horizontalAnimation,
    kill: () => {
      verticalAnimation.scrollTrigger?.kill();
      horizontalAnimation.scrollTrigger?.kill();
    }
  };
};

// 优化后的方法名：初始化第一屏背景2的视差动画
const setupFirstScreenBg2Parallax = async () => {
  await nextTick();

  const firstScreen = document.querySelector('.first-screen');
  if (!firstScreen) return;
  
  gsap.set('.first-screen-bg-2',{
    x: pxToVw(300),
    y: pxToVw(1200),
  });
  
  // 竖向视差动画：与大雁完全一致
  const verticalAnimation = gsap.to('.first-screen-bg-2', {
    y: 0,
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.lives .first-screen',
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: 'top top', // 当元素顶部到达视口顶部时结束
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });
  
  // 横向视差动画：与大雁完全一致
  const horizontalAnimation = gsap.to('.first-screen-bg-2', {
    x: pxToVw(-300),
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.lives .first-screen',
      start: 'top top', // 当 first-screen 顶部到达视口顶部时开始
      end: `+=${pxToVwPx(960)}`, // 滚动 960px（与 first-screen 的横向移动距离一致）
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });

  // 保存两个动画的引用
  firstScreenBg2ParallaxTrigger = {
    vertical: verticalAnimation,
    horizontal: horizontalAnimation,
    kill: () => {
      verticalAnimation.scrollTrigger?.kill();
      horizontalAnimation.scrollTrigger?.kill();
    }
  };
};

// 优化后的方法名：初始化雪豹名称的视差动画
const setupPantheraNameParallax = async () => {
  await nextTick();

  const secondScreen = document.querySelector('.second-screen-new');
  if (!secondScreen) return;
  
  // 设置雪豹名称的默认位移（与云朵一致）
  gsap.set('.panthera-name',{
    x: pxToVw(0),
    y: pxToVw(300),
  });
  
  // 竖向视差动画：与云朵完全一致
  const verticalAnimation = gsap.to('.panthera-name', {
    y: 0,
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.lives .second-screen-new',
      start: 'top bottom', // 当元素顶部到达视口底部时开始
      end: 'top top', // 当元素顶部到达视口顶部时结束
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });
  
  // 横向视差动画：与云朵完全一致
  const horizontalAnimation = gsap.to('.panthera-name', {
    x: pxToVw(-300),
    ease: 'none', // 线性动画，与滚动完全同步
    scrollTrigger: {
      trigger: '.lives .second-screen-new',
      start: 'top top', // 当 second-screen-new 顶部到达视口顶部时开始
      end: `+=${pxToVwPx(960)}`, // 滚动 960px（与 second-screen-new 的横向移动距离一致）
      scrub: true, // 与滚动同步，平滑跟随
      invalidateOnRefresh: true
    }
  });

  // 保存两个动画的引用到数组中
  const animation = {
    vertical: verticalAnimation,
    horizontal: horizontalAnimation,
    kill: () => {
      verticalAnimation.scrollTrigger?.kill();
      horizontalAnimation.scrollTrigger?.kill();
    }
  };
  
  animalNameAnimations.push(animation);
  return animation;
};

// 优化后的方法名：初始化黑颈鹤名称的视差动画
const setupGrusNameParallax = async () => {
  await nextTick();

  // 设置黑颈鹤名称的默认位移（与雪豹一致）
  gsap.set('.grus-name',{
    x: pxToVw(0),
    y: pxToVw(300),
  });

  // 竖向视差动画：与雪豹完全一致
  const verticalAnimation = gsap.to('.grus-name', {
    y: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.grus-name',
      start: `center bottom`,
      end: `center center`,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate:(self=>{
        console.log(self.progress)
      })
    }
  });

  // 保存动画的引用到数组中
  const animation = {
    vertical: verticalAnimation,
    kill: () => {
      verticalAnimation.scrollTrigger?.kill();
    }
  };

  animalNameAnimations.push(animation);
  return animation;
};

// 优化后的方法名：初始化高原鼠兔名称的视差动画
const setupRabbitNameParallax = async () => {
  await nextTick();

  // 设置高原鼠兔名称的默认位移（与黑颈鹤一致）
  gsap.set('.rabbit-name',{
    x: pxToVw(0),
    y: pxToVw(300),
  });

  // 竖向视差动画：以草原容器为准触发
  const verticalAnimation = gsap.to('.rabbit-name', {
    y: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.prairie',
      start: `top+=${pxToVw(1080)} bottom`,
      end: `top+=${pxToVw(1080)} center`,
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  // 横向视差动画：以自己元素为准触发
  const horizontalAnimation = gsap.to('.rabbit-name', {
    x: pxToVw(-300),
    ease: 'none',
    scrollTrigger: {
      trigger: '.rabbit-name',
      start: `center center`,
      end: `+=${pxToVwPx(960)}`,
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  // 保存两个动画的引用到数组中
  const animation = {
    vertical: verticalAnimation,
    horizontal: horizontalAnimation,
    kill: () => {
      verticalAnimation.scrollTrigger?.kill();
      horizontalAnimation.scrollTrigger?.kill();
    }
  };

  animalNameAnimations.push(animation);
  return animation;
};

// 优化后的方法名：初始化藏羚名称的视差动画
const setupSheepNameParallax = async () => {
  await nextTick();

  // 设置藏羚名称的默认位移（与黑颈鹤一致）
  gsap.set('.sheep-name',{
    x: pxToVw(0),
    y: pxToVw(300),
  });

  // 竖向视差动画：以草原容器为准触发
  const verticalAnimation = gsap.to('.sheep-name', {
    y: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.prairie',
      start: `top+=${pxToVw(2000)} bottom`,
      end: `top+=${pxToVw(2000)} center`,
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  // 横向视差动画：以自己元素为准触发
  const horizontalAnimation = gsap.to('.sheep-name', {
    x: pxToVw(-300),
    ease: 'none',
    scrollTrigger: {
      trigger: '.sheep-name',
      start: `center center`,
      end: `+=${pxToVwPx(960)}`,
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  // 保存两个动画的引用到数组中
  const animation = {
    vertical: verticalAnimation,
    horizontal: horizontalAnimation,
    kill: () => {
      verticalAnimation.scrollTrigger?.kill();
      horizontalAnimation.scrollTrigger?.kill();
    }
  };

  animalNameAnimations.push(animation);
  return animation;
};

// 优化后的方法名：初始化野牦牛名称的视差动画
const setupBosMutusNameParallax = async () => {
  await nextTick();

  // 设置野牦牛名称的默认位移（与黑颈鹤一致）
  gsap.set('.bos-mutus-name',{
    x: pxToVw(0),
    y: pxToVw(300),
  });

  // 竖向视差动画：以草原容器为准触发
  const verticalAnimation = gsap.to('.bos-mutus-name', {
    y: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.prairie',
      start: `top+=${pxToVw(1080)} bottom`,
      end: `top+=${pxToVw(1080)} center`,
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  // 横向视差动画：以自己元素为准触发
  const horizontalAnimation = gsap.to('.bos-mutus-name', {
    x: pxToVw(-300),
    ease: 'none',
    scrollTrigger: {
      trigger: '.bos-mutus-name',
      start: `center center`,
      end: `+=${pxToVwPx(960)}`,
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  // 保存两个动画的引用到数组中
  const animation = {
    vertical: verticalAnimation,
    horizontal: horizontalAnimation,
    kill: () => {
      verticalAnimation.scrollTrigger?.kill();
      horizontalAnimation.scrollTrigger?.kill();
    }
  };

  animalNameAnimations.push(animation);
  return animation;
};

// 优化后的方法名：初始化大熊猫名称的视差动画
const setupPandaNameParallax = async () => {
  await nextTick();

  // 设置大熊猫名称的默认位移（与雪豹一致）
  gsap.set('.panda-name',{
    x: pxToVw(0),
  });

  // 横向视差动画：与雪豹完全一致，但使用自己作为触发器
  const horizontalAnimation = gsap.to('.panda-name', {
    x: pxToVw(-300),
    ease: 'none',
    scrollTrigger: {
      trigger: '.panda-name',
      start: 'left+1080 right',
      end: `+=${pxToVwPx(960)}`,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: self=>{
        console.log(self.progress,'---大熊猫')
      }
    }
  });

  // 保存动画的引用到数组中
  const animation = {
    horizontal: horizontalAnimation,
    kill: () => {
      horizontalAnimation.scrollTrigger?.kill();
    }
  };

  animalNameAnimations.push(animation);
  return animation;
};

// 优化后的方法名：初始化川金丝猴名称的视差动画
const setupCjshNameParallax = async () => {
  await nextTick();

  // 设置川金丝猴名称的默认位移（与雪豹一致）
  gsap.set('.cjsh-name',{
    x: pxToVw(0),
    y: pxToVw(300),
  });

  // 竖向视差动画：与雪豹完全一致，但使用自己作为触发器
  const verticalAnimation = gsap.to('.cjsh-name', {
    y: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.cjsh-name',
      start: 'center bottom',
      end: 'center top',
      scrub: true,
      invalidateOnRefresh: true
    }
  });
  
  // 横向视差动画：与雪豹完全一致，但使用自己作为触发器
  const horizontalAnimation = gsap.to('.cjsh-name', {
    x: pxToVw(-300),
    ease: 'none',
    scrollTrigger: {
      trigger: '.cjsh-name',
      start: 'center center',
      end: `+=${pxToVwPx(960)}`,
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  // 保存两个动画的引用到数组中
  const animation = {
    vertical: verticalAnimation,
    horizontal: horizontalAnimation,
    kill: () => {
      verticalAnimation.scrollTrigger?.kill();
      horizontalAnimation.scrollTrigger?.kill();
    }
  };
  
  animalNameAnimations.push(animation);
  return animation;
};

onMounted(() => {
  // 视角位移动画
  setupFirstScreenDisplacement();
  setupSecondScreenDisplacement();
  setupThirdScreenDisplacement();
  
  // 云朵视差动画
  setupCloud1Parallax();
  setupCloud2Parallax();
  
  // 大雁视差动画
  setupGooseParallax();
  
  // first-screen-bg-2 视差动画
  setupFirstScreenBg2Parallax();
  
  // 动物名称视差动画
  setupPantheraNameParallax();
  // setupGrusNameParallax();
  // setupRabbitNameParallax();
  // setupSheepNameParallax();
  // setupBosMutusNameParallax();
  // setupPandaNameParallax();
  // setupCjshNameParallax();
});

onUnmounted(() => {
  // 禁用轻量级滚动锁定
  disableLightScrollLock();
  
  // 清理所有 ScrollTrigger 实例
  if (firstScreenDisplacementTrigger) {
    firstScreenDisplacementTrigger.kill();
  }
  if (secondScreenDisplacementTrigger) {
    secondScreenDisplacementTrigger.kill();
  }
  if (thirdScreenDisplacementTrigger.value) {
    thirdScreenDisplacementTrigger.value.kill();
  }
  if (gooseParallaxTrigger) {
    gooseParallaxTrigger.kill();
  }
  if (firstScreenBg2ParallaxTrigger) {
    firstScreenBg2ParallaxTrigger.kill();
  }
  if (liveCloud1ScrollTrigger) {
    liveCloud1ScrollTrigger.kill();
  }
  if (liveCloud2ScrollTrigger) {
    liveCloud2ScrollTrigger.kill();
  }
  
  // 清理所有动物名称视差动画
  if (animalNameAnimations && animalNameAnimations.length > 0) {
    animalNameAnimations.forEach(animation => {
      animation.kill();
    });
    animalNameAnimations = [];
  }
});
</script>
<style scoped>
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
      //background-image: url("@/assets/images/lives/lives-bty-bg.png");
      background-size: cover;
      position: absolute;
      top: -1px;
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
  .second-screen-wrapper{
    width: 1920px;
    height: 1080px;
    //overflow: hidden;
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
    .clouds-wrapper-1{
      position: absolute;
      z-index: 1000; /* 提高 z-index 确保覆盖上一屏 */
      top: -200px; /* 向上延伸更多，以便更好地覆盖上一屏 */
      left: 0;
      width: 1920px;
      height: 500px; /* 增加高度，给云朵更多显示空间 */
      .clouds-img-1{
        width: 1456px;
        height: 707px;
        background-image: url("@/assets/images/lives/lives-transition-cloud-1.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        left: -200px;
        z-index: 0;
      }
      .clouds-img-2{
        width: 1638px;
        height: 762px;
        background-image: url("@/assets/images/lives/lives-transition-cloud-3.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        right: -450px;
        z-index: 0;
      }
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
    .flower{
      position: absolute;
      left: 400px;
      bottom: 750px;
      .flower-info{
        cursor: pointer;
      }
      .flower-img{
        width: 773px;
        height: 566px;
        background-image: url("@/assets/images/lives/lives-dhhjt.png");
        background-size: cover;
      }
      .flower-name{
        white-space: nowrap;
        font-size: 36px;
        color: #fff;
        position: absolute;
        bottom: 160px;
        left: 300px;
        width: 100px;
      }
      .flower-english{
        margin-top: 20px;
        position: absolute;
        bottom: 100px;
        left: 250px;
        font-style: italic;

      }

      .flower-description{
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        z-index: 1000;
        padding: 30px;
        width: 590px;
        border-radius: 30px;
        background-color: rgba(121,143,167,0.7);
        position: absolute;
        top: -100px;
        right: -624px;
      //position: fixed;
      //top: 200px;
      //left: 200px;
        .flower-description-img{
          width: 530px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-dhhjt-image.jpg");
          background-size: cover;
        }
        .flower-description-text{
          font-size: 22px;
          color: #fff;
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
        top: -170px;
        left: 100px;
        width: 380px;
      }
      .snowlotus-english{
        margin-top: 20px;
        position: absolute;
        top: -140px;
        left: 100px;
        font-style: italic;

      }

      .snowlotus-description{
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
    .sheep1{
      position: absolute;
      right: 960px;
      top: 1250px;
      .sheep1-info{
        cursor: pointer;
      }
      .sheep1-img{
        width: 790px;
        height: 617px;
        background-image: url("@/assets/images/lives/lives-yy.png");
        background-size: cover;
      }
      .sheep1-name{
        white-space: nowrap;
        font-size: 36px;
        color: #fff;
        position: absolute;
        bottom: -300px;
        right: -260px;
        width: 380px;
      }
      .sheep1-english{
        color: #fff;
        margin-top: 20px;
        position: absolute;
        bottom: -350px;
        right: -260px;
        font-style: italic;

      }

      .sheep1-description{
        opacity: 0;
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
        .sheep1-description-img{
          width: 530px;
          height: 340px;
          background-image: url("@/assets/images/lives/lives-yy-image.jpg");
          background-size: cover;
        }
        .sheep1-description-text{
          font-size: 22px;
          color: #fff;
          line-height: 48px;
          width: 530px;
          margin-top: 40px;
        }
      }
    }

  }
  .horizontal-03-wrapper{
    width: 1920px;
    height: 1080px;
    .horizontal-03{
      width: 7680px;
      height: 2700px;
      position: relative;
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
        .clouds-wrapper-2{
          position: absolute;
          z-index: 1000; /* 确保云朵覆盖在second-screen-new上方 */
          top: -250px;
          left: 0; /* 向左延伸，覆盖到second-screen-new区域 */
          width: 3840px; /* 增加宽度，匹配second-screen-new的宽度 */
          height: 600px; /* 增加高度，确保足够覆盖区域 */
          .clouds-img-1{
            width: 6154px;
            height: 1380px;
            background-image: url("@/assets/images/lives/lives-clouds.png");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            position: absolute;
            top: -400px;
            left: -600px;
            z-index: 0;
          }
          .clouds-img-2{
            width: 1638px;
            height: 762px;
            background-image: url("@/assets/images/lives/lives-transition-cloud-3.png");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            position: absolute;
            top: 0;
            right: -450px;
            z-index: 0;
          }
        }
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
            top: 130px;
            right: -20px;
            width: 100px;
          }
          .grus-english{
            margin-top: 20px;
            position: absolute;
            top: 160px;
            right: -20px;
            font-style: italic;
          }

          .grus-description{
            opacity: 0;
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
          .rabbit-img-grass{
            width: 853px;
            height: 189px;
            background-image: url("@/assets/images/lives/lives-gyst-grass.png");
            background-size: cover;
            position: absolute;
            bottom: -30px;
            left: -300px;
          }
          .rabbit-name{
            white-space: nowrap;
            font-size: 36px;
            color: #fff;
            position: absolute;
            top: 240px;
            right: -120px;
            width: 100px;
          }
          .rabbit-english{
            margin-top: 20px;
            position: absolute;
            top: 270px;
            right: -120px;
            font-style: italic;
          }

          .rabbit-description{
            opacity: 0;
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
          .sheep-img-grass{
            width: 663px;
            height: 149px;
            background-image: url("@/assets/images/lives/lives-zly-grass.png");
            background-size: cover;
            position: absolute;
            bottom: -30px;
            left: 60px;
          }
          .sheep-name{
            white-space: nowrap;
            font-size: 36px;
            color: #fff;
            position: absolute;
            bottom: 120px;
            left: 200px;
            width: 100px;
          }
          .sheep-english{
            position: absolute;
            bottom: 10px;
            left: 200px;
            font-style: italic;
          }

          .sheep-description{
            opacity: 0;
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
        .bos-mutus{
          position: absolute;
          left: 2850px;
          bottom: 650px;
          .bos-mutus-info{
            cursor: pointer;
          }
          .bos-mutus-img{
            width: 353px;
            height: 289px;
            background-image: url("@/assets/images/lives/lives-ymn.png");
            background-size: cover;
          }
          .bos-mutus-img-grass{
            width: 336px;
            height: 75px;
            background-image: url("@/assets/images/lives/lives-ymn-grass.png");
            background-size: cover;
            position: absolute;
            bottom: -30px;
            left: 60px;
          }
          .bos-mutus-name{
            white-space: nowrap;
            font-size: 36px;
            color: #fff;
            position: absolute;
            top: 0px;
            right: -400px;
            width: 100px;
          }
          .bos-mutus-english{
            margin-top: 30px;
            position: absolute;
            top: 30px;
            right: -400px;
            font-style: italic;
          }

          .bos-mutus-description{
            opacity: 0;
            pointer-events: none;
            cursor: pointer;
            z-index: 1000;
            padding: 30px;
            width: 590px;
            border-radius: 30px;
            background-color: rgba(213,204,152,0.7);
            position: absolute;
            top: -50px;
            left: -700px;
            .bos-mutus-description-img{
              width: 530px;
              height: 340px;
              background-image: url("@/assets/images/lives/lives-ymn-image.jpg");
              background-size: cover;
            }
            .bos-mutus-description-text{
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
        .clouds{
          position: absolute;
          bottom: -1000px;
          right: 0;
          height: 1000px;
          z-index: 9999;
          width: 1920px;
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
          width: 4702px;
          height: 1651px;
          background-image: url("@/assets/images/lives/lives-xmetc-forest.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          position: absolute;
          bottom: 0;
          left: -500px;
          z-index: 2;
        }
        .forest-single-grass-1{
          position: absolute;
          left: -300px;
          top: 500px;
          width: 738px;
          height: 1170px;
          background-image: url("@/assets/images/lives/lives-xmetc-tree-1.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          z-index: 1;
        }
        .forest-single-grass-2{
          position: absolute;
          left: -200px;
          top: 600px;
          width: 738px;
          height: 1170px;
          background-image: url("@/assets/images/lives/lives-xmetc-tree-2.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          z-index: 1;
        }
        .forest-wood-grass{
          position: absolute;
          bottom: 0px;
          right: -1200px;
          .forest-wood-img{
            width: 3402px;
            height: 402px;
            background-image: url("@/assets/images/lives/lives-cjsh-wood.png");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
          }
          .forest-grass-img{
            position: absolute;
            right: 900px;
            bottom: 0;
            width: 2329px;
            height: 294px;
            background-image: url("@/assets/images/lives/lives-cjsh-grass.png");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            z-index: 999;
          }
        }
        .panda{
          position: absolute;
          bottom: 75px;
          left: 90px;
          z-index: 2;
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
            top: 20px;
            left: 740px;
          }
          .panda-english{
            margin-top: 20px;
            position: absolute;
            top: 50px;
            left: 740px;
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
            display: none;
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
        .cjsh{
          position: absolute;
          right: 500px;
          bottom: 0px;
          z-index: 2;
          .cjsh-info{
            cursor: pointer;
          }
          .cjsh-img{
            width: 427px;
            height: 508px;
            background-image: url("@/assets/images/lives/lives-cjsh.png");
            background-size: cover;
          }
          .cjsh-name{
            white-space: nowrap;
            font-size: 36px;
            color: #fff;
            position: absolute;
            top: 0px;
            left: -130px;
            width: 100px;
          }
          .cjsh-english{
            margin-top: 20px;
            position: absolute;
            top: 50px;
            left: -130px;
            font-style: italic;
          }

          .cjsh-description{
            opacity: 0;
            pointer-events: none;
            cursor: pointer;
            z-index: 1000;
            padding: 30px;
            width: 500px;
            border-radius: 30px;
            background-color: rgba(156,173,139,0.6);
            position: absolute;
            top: -500px;
            right: -480px;
            display: none;
            .cjsh-description-img{
              width: 440px;
              height: 340px;
              background-image: url("@/assets/images/lives/lives-cjsh-image.jpg");
              background-size: cover;
            }
            .cjsh-description-text{
              font-size: 22px;
              color: #fff;
              line-height: 48px;
              width: 440px;
              margin-top: 40px;
              text-align: justify;
            }
          }
        }
      }
    }
  }
}
</style>
