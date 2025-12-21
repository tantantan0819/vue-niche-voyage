<template>
    <div class="new-china-container">
        <!-- <div class="snap-panel"></div> -->
        <!-- 第一屏 -->
        <div class="snap-panel panel-01"></div>
        <!-- 第二屏 -->
        <div 
            class="snap-panel panel-02"
            data-parallax="true"
            data-parallax-axis="x"
            data-parallax-from="800"
            data-parallax-to="-800"
            data-parallax-speed="1.3"
            data-parallax-center-lock="true">
            <div class="background-cloud-img"></div>
            <div class="national-flag-img" ></div>
            <div class="sticker-container">
                <div class="sticker-img"></div>
                <div class="note-container" ref="numberRef">
                    <div  
                        class="note-number"
                        data-parallax="true"
                        data-parallax-axis="x"
                        data-parallax-from="100"
                        data-parallax-to="-100"
                        data-parallax-speed="1.3"
                        data-parallax-center-lock="true">
                        {{ displayNumber }}
                    </div>
                </div>
            </div>
        </div>
        <!-- 第三屏 -->
        <div class="snap-panel panel-03">
             <div 
                class="text-title"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="300"
                data-parallax-to="-600"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true">
                雪域新章</div>
             <div 
                class="text-content text-font"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="100"
                data-parallax-to="-100"
                data-parallax-speed="1.1"
                data-parallax-center-lock="true"
                >
                <p>新中国成立后，人民当家作主，雪域儿女真正成为了这片土地的主人。</p>
                <p>1951年5月23日，中央人民政府和西藏地方政府全权代表在北京签订了《中央人民政府和西藏地方政府关于和平解放西藏办法的协议》，宣告西藏和平解放。</p>
             </div>
             <div 
                class="picture-container"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="300"
                data-parallax-to="-300"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true">
                <div class="_flex">
                    <img class="picture-left" src="../../../../assets/images/newChina/1949-image-1.jpg" alt="">
                    <img class="picture-right" src="../../../../assets/images/newChina/1949-image-2.jpg" alt="">
                </div>
                <div class="illustration-title-font">中华人民政府和西藏地方政府关于和平解放西藏办法的协议（汉文本及藏文本）</div>
             </div>
             <div 
                class="dove-img"></div>
        </div>
        <!-- 第四屏 -->
        <div class="snap-panel panel-04">
            <div class="background-img"></div>
            <div data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="300"
                data-parallax-to="-300"
                data-parallax-speed="1.2"
                data-parallax-center-lock="true">
            <div class="picture-container">
                <div 
                    class="picture-left-container"
                    data-parallax="true"
                    data-parallax-axis="x"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.2"
                    data-parallax-center-lock="true"
                  >
                    <img class="picture-left" src="../../../../assets/images/newChina/1949-image-3.jpg" alt="">
                    <div class="illustration-title-font">20世纪50年代的昌都小学</div>
                </div>
                <div 
                    class="picture-right-container"
                    data-parallax="true"
                    data-parallax-axis="x"
                    data-parallax-from="200"
                    data-parallax-to="-200"
                    data-parallax-speed="1.3"
                    data-parallax-center-lock="true">
                    <img class="picture-right" src="../../../../assets/images/newChina/1949-image-4.jpg" alt="">
                    <div class="illustration-title-font">
                        <span>1954年12月15日，庆祝康藏公路（今川藏公路）、青藏公路通车典礼大会在拉萨举办</span>
                        <DotPopover class="dot-popover" title="内容来自" content="《浸润与融通：西藏各民族交往、交流与交融的故事.当代卷》 四川民族出版社 2022"></DotPopover>
                    </div>
                </div>
            </div>
            <div class="text-container-1 text-font" >
                1956年开始，甘肃、四川、青海等省藏区陆续进行民主改革。在云南，通过和平协商的办法于1956年废除了傈僳族、景颇族、佤族的家长奴隶制和永宁摩梭人的奴隶制；1958年又废除了宁蒗小凉山彝族奴隶制和迪庆藏族地区的封建农奴制；
            </div>
            <div class="text-container-2 text-font">
                <p class="text-content">
                    1956年初至1957年底，四川省凉山彝族聚居区开展民主改革，彻底废除了奴隶制度；1959年，西藏进行民主改革，终于废除农奴制，这是西藏历史上最广泛、最深刻、最伟大的社会变革。
                </p>
            </div>
            </div>
        </div>
        <!-- 第五屏 -->
        <div class="snap-panel panel-05">
            <div 
                class="picture-container panel-05-picture-container"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="200"
                data-parallax-to="-200"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true"
                >
                <div class="dove-img"></div>
                <img class="picture-img" src="../../../../assets/images/newChina/1949-image-5.jpg" alt="">
                <div class="panel-05-illustration illustration-title-font">
                    <DotPopover class="dot-popover" title="内容来自" content="《感光雪域》 四川民族出版社 2010 "></DotPopover>
                    <span>藏北牧民在赛马会上纷纷拿出收录机在格萨尔演唱舞台边进行录音 1983年</span>
                </div>
            </div>
            <div class="text-container text-font">民主改革运动解放了社会生产力，确立了新型的社会主义制度和社会主义民族关系，完成了史称“一步跨千年”的从封建农奴制社会到社会主义社会的伟大跨越.</div>
           
        </div>
        <!-- 第六屏 -->
        <div class="snap-panel panel-06">
            <div class="text-container text-font">
                <p>如果说民族区域自治制度为人民当家作主提供制度保障，那改革开放则为社会经济全面发展插上腾飞的翅膀。</p>
                <p>拉林铁路让“复兴号”开进雪域高原，原生态的自然保护区和国家公园守护着高原净土，电力和光纤网络也架设起新时代的“天路”。清洁能源、绿色工业、高新数字、文化旅游等现代产业在高原随处可见，真正走出了一条“生态优先”的高质量发展之路。</p>
            </div>
            <div 
                class="train-forest-container" 
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="200"
                data-parallax-to="-200"
                data-parallax-speed="1.2"
                data-parallax-center-lock="true">
                <div class="train-img"></div>
                <div class="forest-container">
                    <div class="forest-img"></div>
                </div>
            </div>
            <div 
                class="dove-img" 
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="300"
                data-parallax-to="-300"
                data-parallax-speed="1.2"
                data-parallax-center-lock="true"></div>
        </div>
        <!-- 第七屏 -->
        <div class="snap-panel panel-07" >
            <div class="background-cloud-img"></div>
            <div class="picture-container-left"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="200"
                data-parallax-to="-200"
                data-parallax-speed="1.1"
                data-parallax-center-lock="true">
                <img class="picture-left" src="../../../../assets/images/newChina/1949-image-6.jpg" alt="">
                <div class="illustration-title-font">拉林铁路上的复兴号动车组列车 </div>
            </div>
            <div class="picture-container-right"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="300"
                data-parallax-to="-300"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true"
                >
                <div class="illustration-title-font"> 阿坝藏族羌族自治州的兰措玛光伏电站 </div>
                <img class="picture-right" src="../../../../assets/images/newChina/1949-image-7.jpg" alt="">
              
            </div>
        </div>
        <!-- 第八屏 -->
        <div class="panel-08"></div>
        <!-- 第九屏 -->
        <div class="snap-panel panel-09">
            <div 
                class="text-container text-font"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="300"
                data-parallax-to="-300"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true">
                如今，青藏高原盛开民族团结进步之花。各民族像石榴籽一样紧紧抱在一起，携手共进、同舟共济，沿着中国特色社会主义道路，共同迈向推进强国建设，民族复兴伟业的美好明天!
            </div>
        </div>
        <!-- 第十屏 -->
         <div class="snap-panel panel-10">
            <div class="background-cloud-img"></div>
            <div class="text-container"
                data-parallax="true"
                data-parallax-axis="x"
                data-parallax-from="200"
                data-parallax-to="-200"
                data-parallax-speed="1.3"
                data-parallax-center-lock="true">
                <p>走过云影掠动的群峰，翻罢岁月雕琢的时光。</p>
                <p>现在</p>
                <p>请暂时从宏阔的自然与历史中抽身，</p>
            </div>
         </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap';
import { pxToVw, pxToVh } from '@/utils/viewportUtils';
import DotPopover from '@/components/dotPopover.vue';
import { useAnimateNumber } from '@/utils/animateNumber';

const numberRef = ref(null)
const { displayValue: displayNumber, cleanup: cleanupNumberAnimation } = useAnimateNumber({
  elementRef: numberRef,
  targetValue: 1949,
  startValue: 1000,
  duration: 1,
  ease: 'power2.out'
})
const initGsapAnimation = () => {
    gsap.to('.panel-04 .text-container-1', {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.panel-04 .text-container-1', // 触发元素
            scroller: '.horizontal-scroll-container',
            horizontal: true,
            start: 'left right',
            end: 'left left',
        }
    });

    gsap.to('.panel-04 .text-content', {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.panel-04 .text-container-1', // 触发元素
            scroller: '.horizontal-scroll-container',
            horizontal: true,
            start: 'left right',
            end: 'left left',
        }
    });
    gsap.to('.panel-05 .text-container', {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.panel-05 .text-container', // 触发元素
            scroller: '.horizontal-scroll-container',
            horizontal: true,
            start: 'left center',
            end: 'left left',
        }
    });
    gsap.to('.panel-06 .text-container', {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.panel-06 .text-container', // 触发元素
            scroller: '.horizontal-scroll-container',
            horizontal: true,
            start: 'left center',
            end: 'left left',
        }
    });
}
onMounted(() => {
  initGsapAnimation()
})

onUnmounted(() => {
  // 清理数字动画
  cleanupNumberAnimation()
})
</script>
<style scoped>
    .text-font{
        font: 33px/54px "Alibaba-PuHuiTi-Regular";
        color: #504137;
        word-break: break-all;
        white-space: normal;
        word-wrap: break-word;
    }
    .illustration-title-font{
        font-size: 25px;
        font-weight: 300;
        font-family: 'Alibaba-PuHuiTi-Light';
        line-height: 50px;
        color: #504137;
        word-break: break-all;
        white-space: normal;
        word-wrap: break-word;
    }
    .new-china-container{
        margin-left: -1px;
        display: flex;
        width: 18251px;
        height: 1080px;
        overflow-y: hidden;
        overflow-x: auto; /* 关键：允许水平滚动 */
        background: url('@/assets/images/newChina/1949-bg.jpg') no-repeat center center / cover;
    }
    .snap-panel{
        position: relative;
        width: 100vw;
        height: 100vh;
    }
    .panel-01{
        
    }
    .panel-02{
        .background-cloud-img{
            position: absolute;
            top: 0px;
            left: -900px;
            width: 3153px;
            height: 1080px;
            background: url('@/assets/images/newChina/1949-element-1.png') no-repeat center center / cover;
        }
        .national-flag-img{
            position: absolute;
            top: 0;
            width: 1448px;
            height: 100vh;
            background: url('@/assets/images/newChina/1949-element-2.png') no-repeat center center / cover;
        }
        .sticker-container{
            position: absolute;
            top: 50px;
            right: 60px;
            .sticker-img{
                position: absolute;
                right: 100px;
                width: 106px;
                height: 180px;
                background: url('@/assets/images/newChina/1949-element-4.png') no-repeat center center / cover;
            }
             .note-container{
                display: flex;
                align-items: center;
                width: 925px;
                height: 434px;
                background: url('@/assets/images/newChina/1949-element-3.png') no-repeat center center / cover;
            }
            .note-number{
                width: 500px;
                font-size: 219px;
                line-height: 229px;
                margin-left: 100px;
                color: #b11a22;
                font-family: 'EarlySummerSerif-Bold' !important;
            }
        }
        
    }
    .panel-03{
        .text-title{
            position: absolute;
            top: 50px;
            left: 500px;
            font-size:90px;
            writing-mode: vertical-lr;
            color: antiquewhite;
            font-family: 'EarlySummerSerif-Bold';
        }
        .text-content{
            position: absolute;
            top: 150px;
            left: 50%;
            transform: translateX(-50%);
            width: 1050px;
        }
        .picture-container{
            position: absolute;
            left: 50%;
            bottom: 100px;
            transform: translateX(-50%);
            margin-top: 30px;
            .picture-left{
                height: 400px;
                margin-right: 10px;
            }
            .picture-right{
                height: 400px;
            }
        }
        .dove-img{
            position: absolute;
            top: 260px;
            right: 300px;
            width: 254px;
            height: 276px;
            background: url('@/assets/images/newChina/1949-element-11.png') no-repeat center center / cover;
        }
    }
    .panel-04{
        .background-img{
            position: absolute;
            top: 300px;
            left: 300px;
            width: 1287px;
            height: 467px;
            background: url('@/assets/images/newChina/1949-element-5.png') no-repeat center center / cover;
        }
        .picture-left-container{
            position: absolute;
            top: 100px;
            left: 100px;
             z-index: 999;
            .picture-left{
                width: 400px;
            }
        }
        .picture-right-container{
            position: absolute;
            top: 450px;
            left: 400px;
            width: 500px;
            z-index: 9999;
            .picture-right{
                width: 400px;
            }
            .dot-popover{
                top: 20px;
                left: 30px;
            }
            .dot-popover >>> .popover-container{
                top: -50px;
                left: 100px;
            }
        }
        .text-container-1{
            position: absolute;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            width: 800px;
            opacity: 0;
            z-index: 9999;
        }
        .text-container-2{
            position: absolute;
            top: 300px;
            right: 200px;
            .text-content{
                position: absolute;
                top: 130px;
                right: 50px;
                width: 800px;
                opacity: 0;
            }
        }
    }
    .panel-05{
        .picture-container{
            position: absolute;
            top: 200px;
            left: 200px;
            .dove-img{
                position: absolute;
                top: -180px;
                left: -120px;
                width: 264px;
                height: 276px;
                background: url('@/assets/images/newChina/1949-element-12.png') no-repeat center center / cover;
            }
            .picture-img{
                width: 600px;
            }
        }
        .text-container{
            position: absolute;
            top: 50%;
            right: 200px;
            transform: translateY(-50%);
            width: 800px;
            opacity: 0;
        }
        .panel-05-illustration{
            position: absolute;
            top: 530px;
            left: 640px;
            width: 900px;
            .dot-popover{
                top: 20px;
                left:0px;
                z-index: 999;
            }
            .dot-popover >>> .popover-container{
                top: -180px;
                left: 30px;
            }
        }
    }
    .panel-06{
        margin-left: 150px;
        margin-right: 150px;
        .text-container{
            position: absolute;
            top: 200px;
            left: 260px;
            width: 1200px;
            opacity: 0;
        }
        .dove-img{
            position: absolute;
            top: 20%;
            right:  -100px;
            width: 402px;
            height: 244px;
            background: url('@/assets/images/newChina/1949-element-13.png') no-repeat center center / cover;
        }
        .train-forest-container{
            position:absolute;
            right: -100px;
            bottom:0;
            .train-img{
                width: 2619px;
                height: 396px;
                background: url('@/assets/images/newChina/1949-element-6.png') no-repeat center center / cover;
            }
            .forest-img{
                position: absolute;
                right: -400px;
                bottom: -50px;
                width: 1377px;
                height: 359px;
                background: url('@/assets/images/newChina/1949-element-7.png') no-repeat center center / cover;
            }
        }
    }
    .panel-07{
        .background-cloud-img{
            position: absolute;
            left: -1800px;
            bottom: 0px;
            width: 5942px;
            height: 1079px;
            background: url('@/assets/images/newChina/1949-element-8.png') no-repeat center center / cover;
        }
        .picture-container-left{
            position: absolute;
            top: 100px;
            left: 200px;
            .picture-left{
                width: 1100px;
            }
        }
        .picture-container-right{
            position: absolute;
            right: -400px;
            bottom: 100px;
            text-align: right;
            .picture-right{
                width: 1200px;
                height: 500px;
            }
        }
    }
    .panel-08{
        width: 70vw;
    }
    .panel-09{
        display: flex;
        justify-content: center;
        align-items: center;
        .text-container{
            width: 900px;
        }
    }
    .panel-10{
        padding-top: 500px;
        z-index: 2;
        .text-container{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
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
        .background-cloud-img{
            width: 3962px;
            height: 1826px;
            background-image: url("@/assets/images/architecture/architecture-element-cloud.png");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            position: absolute;
            top: 200px;
            left: -1700px;
        }
    }
</style>