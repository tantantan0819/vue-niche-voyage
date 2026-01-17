<template>
    <div class="sqhx-container" :data-bg="sqhx_bg">
      <div class="black-screen-wrapper" id="page-prehistoric-echoes">
        <div class="black-screen">
          <!-- 第一幕 -->
          <div
              class="screen first-screen"
              data-parallax="true"
              data-parallax-axis="x"
              data-parallax-from="400"
              data-parallax-to="-400"
              data-parallax-speed="1.3"
              data-parallax-center-lock="true">
            <div class="first-screen-title">
              <span ref="numberRef">{{ displayNumber }}</span>
              <span>万年前</span>
            </div>
            <div class="first-screen-cloud-img-1" :data-bg="sqhx_element_cloud_1"></div>
            <div
            class="first-screen-cloud-img-2"
            :data-bg="sqhx_element_cloud_2"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="900"
            data-parallax-to="-900"
            data-parallax-speed="1.3"
            data-parallax-center-lock="true"></div>
                <div
                class="chip-img-1"
                :data-bg="sqhx_element_chip_1"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="-30"
                data-parallax-to="30"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true"></div>
          </div>
        </div>
      </div>
          <!-- 第二幕 -->
        <div
              class="second-screen"
              data-parallax="true"
              data-parallax-axis="x"
              data-parallax-from="400"
              data-parallax-to="-400"
              data-parallax-speed="1.3"
              data-parallax-center-lock="true">
            <div
                class="second-screen-title"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="200"
                data-parallax-to="-200"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true">史前回响</div>
            <!-- <div
                class="chip-img-1"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="-50"
                data-parallax-to="50"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true"></div> -->
            <div class="chip-img-2" :data-bg="sqhx_element_chip_2"></div>
            <div class="chip-img-3" :data-bg="sqhx_element_chip_3"></div>
            <div class="second-screen-picture" :data-bg="sqhx_element_chip_4"></div>
          </div>
        <!-- 第三幕 -->
        <div 
            class="screen third-screen"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="200"
            data-parallax-to="-200"
            data-parallax-speed="1.3"
            data-parallax-center-lock="true">
            <div 
                class="third-screen-cloud-img"
                :data-bg="sqhx_element_cloud_3"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="400"
                data-parallax-to="-400"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true"></div>
            <div class="third-screen-text-content text-font">
                <p class="first-paragragh">稻城皮洛遗址位于四川甘孜稻城县金珠镇，海拔约3750米，占地近百万平方米，是川西高原发现的最大旧石器时代遗址。</p>
                <p>这里保存着超过20万年的远古遗迹，考古人员出土了6000多件石制工具，从最早的砾石工具，到精巧的手斧和石片工具，完整地展现了古人类技术的发展。</p>
            </div>
            <div class="third-screen-pattern-img" :data-bg="sqhx_element_pattern"></div>
        </div>
        <!-- 第四幕 -->
        <div 
            class="screen forth-screen"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="200"
            data-parallax-to="-200"
            data-parallax-speed="1.3"
            data-parallax-center-lock="true">
            <div class="forth-screen-picture-container">
                <div class="picture-img" :data-bg="sqhx_element_stone_1"></div>
                <div class="illustration-title-font">稻城皮洛遗址出土的阿舍利技术手斧和薄刃斧</div>
            </div>
            <div class="forth-screen-text-content text-font">
                <p class="first-paragragh">阿舍利技术体系是古人类石器技术史上一个重要的发展阶段，是人类早期智慧与技能发展到一种高峰的标志。稻城皮洛遗址发现该技术石器，不仅是东亚最具代表性的发现，也是目前世界上海拔最高的同类遗存。彻底解决了中国乃至东亚没有真正阿舍利技术体系的争议。</p>
                <p>稻城皮洛遗址已启动保护与利用工程，未来将建设遗址公园，让更多人走近这段高原上的远古记忆。</p>
            </div>
            <div 
                class="forth-screen-cloud-img"
                :data-bg="sqhx_element_cloud_4"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="800"
                data-parallax-to="-800"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true"></div>
        </div>
        <!-- 第五幕 -->
        <div 
            class="screen fifth-screen"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="200"
            data-parallax-to="-200"
            data-parallax-speed="1.3"
            data-parallax-center-lock="true">
            <div class="center-stone-container">
                <div class="fifth-screen-stone-img-1" :data-bg="sqhx_element_stone_2"></div>
            <div class="fifth-screen-stone-img-2" :data-bg="sqhx_element_stone_3"></div>
            </div>
            <div 
                class="fifth-screen-text-content text-font"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="200"
                data-parallax-to="-200"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true">
                而位于藏北羌塘高原，距今4-3万年前的尼阿底遗址则被认为是早期现代人登陆高原腹地的最早考古证据。作为一处旧石器时代旷野遗址，这里石制品分布密集，地层保存完整。
            </div>
            <div class="fifth-screen-stone-img-3" :data-bg="sqhx_element_stone_4"></div>
        </div>
        <!-- 第六幕 -->
        <div class="screen sixth-screen">
            <div 
                class="sixth-screen-stone-img"
                :data-bg="sqhx_element_stone_5"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="200"
                data-parallax-to="-200"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true"></div>
            <div 
                class="sixth-screen-text-content text-font"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="200"
                data-parallax-to="-200"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true">
                其中，尼阿底遗址第3地点的发现尤为重要。该地点是典型的以细石叶技术占主导的遗址。细石叶技术与阿舍利技术不同，它是旧石器晚期出现并广泛传播的一种石器打制方式，广泛分布于中国北方、日本列岛等地。如果说阿舍利技术石器更大更厚，那么细石叶技术则小而薄，更加精细化。
            </div>
        </div>
        <!-- 第七幕 -->
        <div

            class="seventh-screen"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="300"
            data-parallax-to="-300"
            data-parallax-speed="1.3"
            data-parallax-center-lock="true">
            <div class="seventh-screen-circle-img" :data-bg="sqhx_element_circle"></div>
            <div 
                class="seventh-screen-text-content-1 text-font"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="100"
                data-parallax-to="-100"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true">
                <span>考古学家认为，尼阿底遗址发现的细石叶明晰了该技术从华北，经青藏高原东北缘，深入高原腹地的过程；揭示了青藏高原史前人类演化和迁徙的历史，为西藏地区人群的起源与族群形成提供了重要线索。</span>
                <DotPopover class="dot-popover" title="内容来自" content="《物里中华：一文一物话西藏》 四川民族出版社 2025"></DotPopover>
            </div>
            <div class="seventh-screen-mountain-img" :data-bg="sqhx_element_mountain"></div>
            <div 
            class="seventh-screen-text-content-2 text-font"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="100"
            data-parallax-to="-100"
            data-parallax-speed="1.3"
            data-parallax-center-lock="true">
               除此之外，距今8000-10000年前的切热遗址、8500-7500年前的夏达错遗址，以及昌都卡若遗址、拉萨曲贡遗址、山南昌果沟遗址等，都展现了早期人类在极端环境中不断适应与探索的历史，勾勒出他们在这片“世界屋脊”上生存与发展的完整图景。
            </div>
        </div>
    </div>
</template>
<script setup>
import DotPopover from '@/components/dotPopover.vue';
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useAnimateNumber } from '@/utils/animateNumber';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pxToVw, pxToVh, pxToVwPx, pxToVhPx  } from '@/utils/viewportUtils';
// 背景图资源导入
import sqhx_bg from '@/assets/images/sqhx/sqhx-bg.jpg'
import sqhx_element_cloud_1 from '@/assets/images/sqhx/sqhx-element-cloud-1.png'
import sqhx_element_cloud_2 from '@/assets/images/sqhx/sqhx-element-cloud-2.png'
import sqhx_element_chip_1 from '@/assets/images/sqhx/sqhx-element-chip-1.png'
import sqhx_element_chip_2 from '@/assets/images/sqhx/sqhx-element-chip-2.png'
import sqhx_element_chip_3 from '@/assets/images/sqhx/sqhx-element-chip-3.png'
import sqhx_element_chip_4 from '@/assets/images/sqhx/sqhx-element-chip-4.png'
import sqhx_element_cloud_3 from '@/assets/images/sqhx/sqhx-element-cloud-3.png'
import sqhx_element_pattern from '@/assets/images/sqhx/sqhx-element-pattern.png'
import sqhx_element_stone_1 from '@/assets/images/sqhx/sqhx-element-stone-1.png'
import sqhx_element_cloud_4 from '@/assets/images/sqhx/sqhx-element-cloud-4.png'
import sqhx_element_stone_2 from '@/assets/images/sqhx/sqhx-element-stone-2.png'
import sqhx_element_stone_3 from '@/assets/images/sqhx/sqhx-element-stone-3.png'
import sqhx_element_stone_4 from '@/assets/images/sqhx/sqhx-element-stone-4.png'
import sqhx_element_stone_5 from '@/assets/images/sqhx/sqhx-element-stone-5.png'
import sqhx_element_mountain from '@/assets/images/sqhx/sqhx-element-mountain.png'
import sqhx_element_circle from '@/assets/images/sqhx/sqhx-element-circle.png'


const numberRef = ref(null)
const { displayValue: displayNumber, cleanup: cleanupNumberAnimation } = useAnimateNumber({
  elementRef: numberRef,
  targetValue: 20,
  startValue: 0,
  duration: 3,
  ease: 'power2.out',
   keyframes: [
        { value: 80 }, // 第一阶段：0 → 80（默认占总时长 1/2，即 1.5 秒）
        { value: 20 }, // 第二阶段：80 → 20（默认占总时长 1/2，即 1.5 秒）
      ],
})

onMounted(()=> {
  gsap.set('.black-screen-wrapper', {background: '#000'})
  gsap.set('.black-screen', {opacity: 0})
  
  // 等待 DOM 完全渲染和父容器的 ScrollTrigger 初始化完成
  nextTick(() => {
    // 延迟创建，确保父容器的 ScrollTrigger 已经初始化
    requestAnimationFrame(() => {
      const triggerEl = document.querySelector('.black-screen-wrapper')
      const horizontalContainer = document.querySelector('.horizontal-scroll-container')
      if (!triggerEl || !horizontalContainer) return
      
      ScrollTrigger.create({
        trigger: triggerEl,
        start: 'top top',
        end: 'left right',
        scrub: 2,
        // scroller: horizontalContainer,
        // horizontal: true,
        invalidateOnRefresh: true,
        animation: gsap.timeline()
          .to('.black-screen-wrapper', {
            background: 'transparent',
            ease: 'none'
          })
          .to('.black-screen', {
            opacity: 1,
            ease: 'none'
          }, '<'),
        onLeaveBack: () => {
          // 回滚离开时，确保恢复到初始状态
          gsap.set('.black-screen-wrapper', {background: '#000'})
          gsap.set('.black-screen', {opacity: 0})
        },
      })
      // 刷新 ScrollTrigger 确保位置计算正确
      ScrollTrigger.refresh()
    })
  })
})

onUnmounted(() => {
  // 清理数字动画
  cleanupNumberAnimation()
})

</script>
<style scoped>
/* 背景图懒加载通用规则 */
[data-bg] {
  --bg-image: attr(data-bg url);
  background-image: var(--bg-image);
}

    .text-font{
        font: 33px/54px "Alibaba-PuHuiTi-Regular";
        color: #534833;
    }
    .illustration-title-font{
        font-size: 25px;
        font-weight: 300;
        font-family: 'Alibaba-PuHuiTi-Light';
        line-height: 50px;
        color: #534833;
    }
    .screen {
        position: relative;
        width: 100vw;
        height: 100vh;
    }
    .first-paragragh{
        margin-bottom: 10px;
    }
    .sqhx-container{
        display: flex;
        width: 17280px;
        height: 1080px;
        white-space: normal;
        overflow-y: hidden;
        overflow-x: auto; /* 关键：允许水平滚动 */


    }
    .black-screen{
      width: 150vw;
    }
    .first-screen{
        .first-screen-title{
            position: absolute;
            top: 50%;
            left: 60%;
            transform: translate(0%, -50%);
            font-family: 'EarlySummerSerif-Bold';
            font-size: 90px;
            color: #534833;
        }
        .first-screen-cloud-img-1{
            position: absolute;
            left: 100px;
            bottom: 0;
            width: 889px;
            height: 229px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
         .first-screen-cloud-img-2{
            position: absolute;
            top: -200px;
            right: -700px;
            width: 1116px;
            height: 478px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .chip-img-1{
            position: absolute;
            right: -600px;
            bottom: 0;
            width: 462px;
            height: 361px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
    .second-screen{
        position: relative;
        width: 3217px;
        margin-left: -40vw;
        box-sizing: border-box;
        height: 100vh;
        .second-screen-title{
            position: absolute;
            top: 84px;
            left: -150px;
            font-family: 'EarlySummerSerif-Bold';
            font-size: 90px;
            color: #534833;
            writing-mode: vertical-lr;
            height: 500px;
        }
        .chip-img-2{
            position: absolute;
            left: 100px;
            bottom: 200px;
            width: 228px;
            height: 213px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .chip-img-3{
            position: absolute;
            top: 200px;
            left: 200px;
            width: 279px;
            height: 271px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .second-screen-picture{
            position: absolute;
            top: 0;
            left: 500px;
            width: 2717px;
            height: 1080px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
    .third-screen{
        .third-screen-cloud-img{
            position: absolute;
            top: 0;
            left: -350px;
            width: 1202px;
            height: 288px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .third-screen-text-content{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-60%, -40%);
            width: 1150px;
        }
        .third-screen-pattern-img{
            position: absolute;
            right: 50px;
            bottom: 30px;
            width: 599px;
            height: 623px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
    .forth-screen{
        display: flex;
        justify-content: center;
        align-items: center;
        .picture-img{
            width: 796px;
            height: 450px;
            margin-bottom: 30px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .forth-screen-text-content{
            width: 740px;
            text-align: justify;
            margin-left: 100px;
            margin-top: 50px;
        }
        .forth-screen-cloud-img{
            position: absolute;
            right: -600px;
            bottom: 0;
            width: 1502px;
            height: 288px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
    .fifth-screen{
        .center-stone-container{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .fifth-screen-stone-img-1{
            width: 1526px;
            height: 325px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .fifth-screen-stone-img-2{
            position: absolute;
            top: -300px;
            right: 0;
            width: 339px;
            height: 352px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .fifth-screen-stone-img-3{
            position: absolute;
            right: 0;
            bottom: 0;
            width: 647px;
            height: 185px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .fifth-screen-text-content{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -40%);
            width: 1000px;
        }
    }
    .sixth-screen{
        display: flex;
        justify-content: center;
        align-items: center;
        .sixth-screen-stone-img{
            width: 581px;
            height: 375px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .sixth-screen-text-content{
            width: 830px;
            text-align: justify;
            margin-left: 100px;
            margin-top: 100px
        }
    }
    .seventh-screen{
        position: relative;
        flex: 1;
        height: 100vh;
        .seventh-screen-circle-img{
            position: absolute;
            top: 0;
            left: 800px;
            width: 1922px;
            height: 1080px;
            //background: url('@/assets/images/sqhx/sqhx-element-circle.png') no-repeat center center / cover;
        }
        .seventh-screen-text-content-1{
            position: absolute;
            top: 50%;
            left: 1200px;
            transform: translateY(-50%);
            width: 950px;
            z-index: 999;
            .dot-popover{
                top: 30px;
                left: 20px;
            }
            >>> .popover-container{
                top: -30px;
                left: 30px;
            }
        }
        .seventh-screen-mountain-img{
            position: absolute;
            right: 0px;
            bottom: -100px;
            width: 3373px;
            height: 901px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .seventh-screen-text-content-2{
            position: absolute;
            top: 50%;
            right: 400px;
            transform: translateY(-50%);
            width: 900px;
            text-align: justify;
        }
    }
</style>