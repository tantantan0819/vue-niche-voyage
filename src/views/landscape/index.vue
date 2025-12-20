<template>
  <div class="landscape" @click="handleScreenClick">
    <!-- 返回按钮 -->
    <return-button/>
    <div class="landscape-video">
      <!-- 视频元素1 -->
      <video
          ref="videoRef1"
          muted
          playsinline
          preload="auto"
          :style="{ opacity: activeVideo === 1 ? 1 : 0, position: 'absolute' }"
      ></video>
      <!-- 视频元素2 -->
      <video
          ref="videoRef2"
          muted
          playsinline
          preload="auto"
          :style="{ opacity: activeVideo === 2 ? 1 : 0, position: 'absolute' }"
      ></video>
    </div>
    <!--  总介绍  -->
    <div class="landscape-description">
      {{ landscapeInfos[navIndex].description }}
    </div>
    <!--  详情介绍  -->
    <div v-if="currentPoint">
      <div :class="['landscape-detail-description',`${currentPoint.position}`,`${landscapeInfos[navIndex].name}`]">
        <img :src="currentPoint.img" alt="">
        <p><span>{{currentPoint.name}}:</span> {{ currentPoint.description}}</p>
      </div>
    </div>

    <!--  闪光层  -->
    <div :class="['landscape-breathing-lamp',`${landscapeInfos[navIndex].name}`]">
      <div
        v-for="(point, index) in landscapeInfos[navIndex].shiningPoints"
        :key="index || point.name || 'point-' + index"
        class="lamp-item-wrap"
        @click.stop="handlePointClick(point)"
      >
        <div class="lamp-item-core"></div>
        <div class="lamp-item"></div>
      </div>
    </div>
   <!--  导航栏  -->
    <div class="landscape-nav">
      <div class="landscape-nav-wrapper">
        <div
            v-for="(item, index) in landscapeInfos"
            :key="index"
            :class="['landscape-nav-item',{'active': navIndex == index}]"
            @click="changeNav(index)"
        >
          <div :class="item.name"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import gsap from "gsap";
import ReturnButton from "@/components/ReturnButton.vue";

// 入场视频
import glacierInto from '@/assets/images/landscape/videos/glacier-into.mp4'
import lakeInto from '@/assets/images/landscape/videos/lake-into.mp4'
import riverInto from '@/assets/images/landscape/videos/river-into.mp4'
// 场景转换视频
import glacierIn1 from '@/assets/images/landscape/videos/glacier1-in.mp4'
import glacierOut1 from '@/assets/images/landscape/videos/glacier1-out.mp4'
import glacierIn2 from '@/assets/images/landscape/videos/glacier2-in.mp4'
import glacierOut2 from '@/assets/images/landscape/videos/glacier2-out.mp4'
import glacierIn3 from '@/assets/images/landscape/videos/glacier3-in.mp4'
import glacierOut3 from '@/assets/images/landscape/videos/glacier3-out.mp4'
import glacierIn4 from '@/assets/images/landscape/videos/glacier4-in.mp4'
import glacierOut4 from '@/assets/images/landscape/videos/glacier4-out.mp4'
import glacierIn5 from '@/assets/images/landscape/videos/glacier5-in.mp4'
import glacierOut5 from '@/assets/images/landscape/videos/glacier5-out.mp4'
import lakeIn1 from '@/assets/images/landscape/videos/lake1-in.mp4'
import lakeOut1 from '@/assets/images/landscape/videos/lake1-out.mp4'
import lakeIn2 from '@/assets/images/landscape/videos/lake2-in.mp4'
import lakeOut2 from '@/assets/images/landscape/videos/lake2-out.mp4'
import lakeIn3 from '@/assets/images/landscape/videos/lake3-in.mp4'
import lakeOut3 from '@/assets/images/landscape/videos/lake3-out.mp4'
import lakeIn4 from '@/assets/images/landscape/videos/lake4-in.mp4'
import lakeOut4 from '@/assets/images/landscape/videos/lake4-out.mp4'
import riverIn1 from '@/assets/images/landscape/videos/river1-in.mp4'
import riverOut1 from '@/assets/images/landscape/videos/river1-out.mp4'
import riverIn2 from '@/assets/images/landscape/videos/river2-in.mp4'
import riverOut2 from '@/assets/images/landscape/videos/river2-out.mp4'
import riverIn3 from '@/assets/images/landscape/videos/river3-in.mp4'
import riverOut3 from '@/assets/images/landscape/videos/river3-out.mp4'
import riverIn4 from '@/assets/images/landscape/videos/river4-in.mp4'
import riverOut4 from '@/assets/images/landscape/videos/river4-out.mp4'
import riverIn5 from '@/assets/images/landscape/videos/river5-in.mp4'
import riverOut5 from '@/assets/images/landscape/videos/river5-out.mp4'
// 详情图片
import glacierImg1 from '@/assets/images/landscape/watersystem-glacier-1.jpg'
import glacierImg2 from '@/assets/images/landscape/watersystem-glacier-2.jpg'
import glacierImg3 from '@/assets/images/landscape/watersystem-glacier-3.jpg'
import glacierImg4 from '@/assets/images/landscape/watersystem-glacier-4.jpg'
import glacierImg5 from '@/assets/images/landscape/watersystem-glacier-5.jpg'
import lakeImg1 from '@/assets/images/landscape/watersystem-lake-1.jpg'
import lakeImg2 from '@/assets/images/landscape/watersystem-lake-2.jpg'
import lakeImg3 from '@/assets/images/landscape/watersystem-lake-3.jpg'
import lakeImg4 from '@/assets/images/landscape/watersystem-lake-4.jpg'
import riverImg1 from '@/assets/images/landscape/watersystem-river-1.jpg'
import riverImg2 from '@/assets/images/landscape/watersystem-river-2.jpg'
import riverImg3 from '@/assets/images/landscape/watersystem-river-3.jpg'
import riverImg4 from '@/assets/images/landscape/watersystem-river-4.jpg'
import riverImg5 from '@/assets/images/landscape/watersystem-river-5.jpg'




const videoRef1 = ref(null);
const videoRef2 = ref(null);
const videoUrl = ref(glacierInto);
const activeVideo = ref(1); // 当前激活的视频元素 (1 或 2)
const isLoadingVideo = ref(false);
const nextVideoUrl = ref(null); // 下一个要播放的视频URL

const landscapeInfos = ref([
  // 冰川
  {
    name: 'glacier',
    intoVideo: glacierInto,
    description: '青藏高原是地球上除南北极地区之外拥有冰川最多的地方，中国冰川的80％分布在青藏高原，由喀喇昆仑山、昆仑山、祁连山、喜马拉雅山、念青唐古拉山及横断山等山系构成。这个地区不仅冰雪储量巨大，而且是我国及东亚地区大江河发源的基础及径流的重要补给源，被誉为“亚洲水塔”。',
    shiningPoints: [
      {
        name: '喀拉昆仑山现代冰川',
        videoIn: glacierIn3,
        videoOut: glacierOut3,
        img: glacierImg3,
        position: 'right',
        description: '它是世界山岳冰川最发达的山系之一。世界中低纬度山地冰川长度超过50公里的共有8条，其中喀喇昆仑山占6条，山脉的冰川总面积达1.86万平方公里。其中位于乔戈里峰西北侧的音苏盖提冰川总长约42公里，覆盖面积达380平方公里，是中国境内已知长度最长，面积最大的山谷冰川。'
      },
      {
        name: '喜马拉雅现代冰川',
        videoIn: glacierIn1,
        videoOut: glacierOut1,
        img: glacierImg1,
        position: 'left',
        description: '喜马拉雅山脉是世界海拔最高、面积最大的山地冰川分布区，是“亚洲水塔”的重要组成部分。这里雪峰连绵，冰川众多，是冰川发育的中心。著名的有珠穆朗玛峰的绒布冰川、卓奥友峰北侧的加布拉冰川等。冰川总面积3.3万平方千米，中国境内约占1／3。'
      },
      {
        name: '羌塘高原现代冰川',
        videoIn: glacierIn5,
        videoOut: glacierOut5,
        img: glacierImg5,
        position: 'left',
        description: '羌塘高原分布着十多个规模巨大的平顶冰川。其中便有被誉为“世界第三极极点”的普若岗日冰原。其覆盖面积422.85平方公里，被确认为迄今为止除两极地区以外最大的冰川，也是世界上最大的中低纬度冰川，近400米的冰层厚度也让其成为青藏高原上最厚的冰川。'
      },
      {
        name: '念青唐古拉山现代冰川',
        videoIn: glacierIn2,
        videoOut: glacierOut2,
        img: glacierImg2,
        position: 'right',
        description: '这里主要是以山地冰川为主的现代冰川，冰川面积7536平方公里，为青藏高原东南部最大的冰川区。其中有27条冰川长度超过10公里：如易贡八玉沟的卡钦冰川长达33公里，冰川末端海拔仅2530米，为西藏最大冰川，也是中国最大的海洋性冰川。'
      },
      {
        name: '横断山现代冰川',
        videoIn: glacierIn4,
        videoOut: glacierOut4,
        img: glacierImg4,
        position: 'right',
        description: '横断山是四川西部最大的冰川作用区，也是青藏高原东部海洋型冰川的集中分布区，较大的冰川有海螺沟冰川、燕子沟冰川、磨子沟冰川、南门关沟冰川、大小贡巴冰川等。其中，四川贡嘎山海螺沟冰川冰瀑布是我国已知最大的冰瀑布，而阿坝藏族羌族自治州黑水县的达古冰川则被认为是最年轻，离城市最近的冰川。'
      },

    ]
  },
  // 湖泊
  {
    name: 'lake',
    intoVideo: lakeInto,
    description:'青藏高原湖泊密集，分布有地球海拔最高、数量最多的高原湖泊群，面积超过全国湖泊的50%以上。高原湖泊不仅数量众多、景色壮美，还储存着丰富的水资源，成为高原上一颗颗闪耀的明珠。',
    shiningPoints: [
      {
        name: '玛旁雍错',
        videoIn: lakeIn3,
        videoOut: lakeOut3,
        img: lakeImg3,
        position: 'left',
        description: '玛旁雍错位于冈仁波齐东南，为三大圣湖之首。海拔约4,500米，面积400多平方公里。是高海拔地区最大的淡水湖泊之一，也是中国实测透明度最大的淡水湖。'
      },

      {
        name: '纳木错',
        videoIn: lakeIn2,
        videoOut: lakeOut2,
        img: lakeImg2,
        position: 'left',
        description: '纳木错位于西藏拉萨市以北，海拔约4,718米，是西藏三大圣湖之一，总面积约1,920平方公里，是世界上海拔最高的大湖。四周群山环抱，景色壮丽。在为高原生态系统提供水源、调节区域气候和河流补给等方面有着重要作用。'
      },
      {
        name: '扎陵湖和鄂陵湖',
        videoIn: lakeIn4,
        videoOut: lakeOut4,
        img: lakeImg4,
        position: 'left',
        description: '扎陵湖和鄂陵湖位于青藏高原东北部黄河上游区域，属于高原淡水湖。两湖紧邻，是“黄河源头的姊妹湖”。两湖古称“柏海”，是中原通往西藏的通道之一。历史上，松赞干布就在这里迎娶文成公主。'
      },
      {
        name: '青海湖',
        videoIn: lakeIn1,
        videoOut: lakeOut1,
        img: lakeImg1,
        position: 'left',
        description: '青海湖位于青藏高原东北部，是中国最大的内陆咸水湖，总面积约4600平方公里。湖水碧蓝广阔。四周被祁连山、阿尔金山等山脉环绕。青海湖不仅是候鸟迁徙的重要栖息地，也以湖光山色和环湖草原闻名，是高原生态环境和旅游资源的重要象征。'
      },
    ]
  },
  // 河流
  {
    name: 'river',
    intoVideo: riverInto,
    description:'青藏高原是我国乃至亚洲众多大江大河的发源地。高原海拔高、地形复杂，冰川、积雪与降水共同孕育了纵横交错且类型多样的河流网络。它们不仅塑造了高原独特的峡谷与河谷地貌，也为下游地区提供灌溉、饮水以及丰富的水能资源。',
    shiningPoints: [
      {
        name: '雅鲁藏布江',
        videoIn: riverIn5,
        videoOut: riverOut5,
        img: riverImg5,
        position: 'left',
        description: '雅鲁藏布江发源于青藏高原杰马央宗冰川，中国境内约2057公里。它自西向东横贯高原，到达林芝一带后，江水突然转折向南，造就了举世闻名的雅鲁藏布大峡谷。出境后最终注入印度洋。作为高原母亲河之一，雅鲁藏布江以独特的地理走向和巨大的落差，展现出青藏高原的雄奇与壮丽。'
      },
      {
        name: '长江',
        videoIn: riverIn2,
        videoOut: riverOut2,
        img: riverImg2,
        position: 'left',
        description: '长江是亚洲第一长河、世界第三长河，全长约6300公里。干流源于唐古拉山脉各拉丹冬峰，以沱沱河为正源。河水自高原奔涌而下，穿越横断山脉，形成壮丽峡谷；进入中下游后，江势渐宽，汇纳支流，滋养广袤的长江中下游平原。长江不仅塑造了中华大地的自然格局，也孕育了璀璨的文明。'
      },
      {
        name: '怒江',
        videoIn: riverIn4,
        videoOut: riverOut4,
        img: riverImg4,
        position: 'left',
        description: '发源于青藏高原唐古拉山南麓，在中国境内称怒江，境内长度约2013公里，流出国境后称萨尔温江，最终奔入印度洋。怒江以其壮阔而原始的姿态，展现了青藏高原水系的磅礴力量。'
      },
      {
        name: '澜沧江',
        videoIn: riverIn3,
        videoOut: riverOut3,
        img: riverImg3,
        position: 'right',
        description: '发源于青藏高原唐古拉山东北部，在中国境内称澜沧江，境内长度约2139公里，出境后称湄公河，最终注入南海。作为跨境大河，澜沧江既是青藏高原上的重要水系，也串联起多样的自然与人文景观。'
      },
      {
        name: '黄河',
        videoIn: riverIn1,
        videoOut: riverOut1,
        img: riverImg1,
        position: 'right',
        description: '发源于青藏高原巴颜喀拉山脉。河水经高原东北部流向远方，串联起中国9个省份，最终注入渤海。全长约5464公里，是中国第二长河。黄河水系在中国的地形格局塑造、流域生态维系以及中华文明的孕育与发展中都发挥着不可替代的作用。'
      },



    ]
  },
]);


const isFirstPlayVideo = ref(true)

// 移除原有的onMounted中的视频事件监听，使用上面新定义的
//浮现导航栏
const emergentNav = () =>{
  gsap.fromTo('.landscape-nav',{
    bottom: 26,
    opacity: 0,

  },{
    bottom: 46,
    opacity: 1,
    duration: 1,
    ease: "power4.out"
  })
}

//隐藏导航栏
const hiddenNav = () =>{
  gsap.fromTo('.landscape-nav',{
    bottom: 46,
    opacity: 1,

  },{
    bottom: 26,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  })
}
// 浮现介绍文字
const emergentIntroduction = () =>{
  gsap.fromTo('.landscape-description',{
    bottom: 30,
    opacity: 0,
    scale: 0.5,

  },{
    bottom: 100,
    opacity: 1,
    duration: 1,
    scale: 1,
    ease: "power4.out"
  })
}

// 隐藏介绍文字
const hiddenIntroduction = (index) =>{
  gsap.fromTo('.landscape-description',{
    bottom: 100,
    opacity: 1,
    scale: 1,

  },{
    bottom: 30,
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "power4.out"
  })
}

const emergentLampGsp = ref(null)
// 浮现闪光点层
const emergentLamp = () =>{
  emergentLampGsp.value = gsap.fromTo('.landscape-breathing-lamp',{
    opacity: 0,
    display: 'none',
  },{
    display: 'block',
    opacity: 1,
    ease: "power4.out",
    duration: 2,
    delay: 2
  })
}
// 隐藏闪光点层
const hiddenLamp = () =>{
  emergentLampGsp.value.paused()
  // 先杀死之前可能存在的动画，防止冲突
  gsap.killTweensOf('.landscape-breathing-lamp');

  // // 强制设置为可见状态，确保动画从正确状态开始
  // gsap.set('.landscape-breathing-lamp', {
  //   opacity: 1,
  //   display: 'block'
  // });

  // 执行隐藏动画
  gsap.to('.landscape-breathing-lamp',{
    opacity: 0,
    onComplete: () => {
      // 动画完成后才设置display为none
      gsap.set('.landscape-breathing-lamp', {
        display: 'none'
      });
    },
    ease: "power4.out",
    // duration: 0.8,
  })
}

// 显示详情介绍
const emergentDetail = () =>{
 setTimeout(()=>{
   const tl = gsap.timeline()
   tl.fromTo('.landscape-detail-description',{
     opacity: 0,
     scale: 0.3,
     display: 'none',
     top: '30%',
   },{
     display: 'block',
     opacity: 1,
     scale: 1,
     top: '50%',
     ease: "power4.inOut",
     duration: 2,
   })
 })
}

// 隐藏详情介绍
const hiddenDetail = () =>{
  gsap.fromTo('.landscape-detail-description',{
    display: 'block',
    opacity: 1,
    scale: 1,
    top: '50%',
  },{
    scale: 0.3,
    opacity: 0,
    top: '30%',
    display: 'none',
    ease: "power4.out",
    duration: 1,
  })
}


const navIndex = ref(0)

const changeNav = index => {
  navIndex.value = index;
  changeVideo(landscapeInfos.value[navIndex.value].intoVideo);
  // 浮现介绍文字
  emergentIntroduction()
  hiddenLamp();
  // 浮现光点层
  emergentLamp()
}

// 是否进入地图详情
const videoToDetail = ref(false)
const currentPoint = ref(null)
// 处理光点点击事件
const handlePointClick = (point) => {
  if (isLoadingVideo.value) return; // 防止在视频加载中点击

  videoToDetail.value= true;
  currentPoint.value = point
  if (point.videoIn) {
    changeVideo(point.videoIn);
    hiddenNav();
    hiddenLamp();
    hiddenIntroduction();
    emergentDetail();
  }
}

// 处理屏幕点击事件
const handleScreenClick = () => {
  if (videoToDetail.value && currentPoint.value && currentPoint.value.videoOut) {
    changeVideo(currentPoint.value.videoOut);
    videoToDetail.value = false;
    currentPoint.value = null;
    hiddenDetail();
    // 恢复界面元素显示
    setTimeout(()=>{
      emergentNav();
      emergentLamp(); // 传递索引1
      emergentIntroduction();
    },1000)

  }
}

// 初始化第一个视频
onMounted(async () => {
  // 初始化source标签并加载视频
  const initVideoWithSource = async (videoRef, videoSrc) => {
    if (videoRef.value) {
      // 清空现有source标签
      const existingSources = videoRef.value.querySelectorAll('source');
      existingSources.forEach(src => src.remove());

      // 创建新的source标签
      const source = document.createElement('source');
      source.src = new URL(videoSrc, import.meta.url).href;
      source.type = 'video/mp4';
      videoRef.value.appendChild(source);

      // 加载视频
      videoRef.value.load();
    }
  };

  if (videoRef1.value) {
    await initVideoWithSource(videoRef1, glacierInto);

    // 等待视频加载完成后再播放
    await new Promise((resolve) => {
      videoRef1.value.oncanplaythrough = () => {
        // 视频完全加载后播放
        videoRef1.value.play().then(() => {
          resolve();
        }).catch(error => {
          console.error('初始视频播放失败:', error);
          resolve(); // 即使播放失败也继续执行
        });
      };
      // 也监听canplay事件作为备选，确保视频能够正常开始
      videoRef1.value.oncanplay = () => {
        if (!videoRef1.value.playing) {
          videoRef1.value.play().catch(error => {
            console.warn('视频提前开始播放:', error);
          });
        }
      };
    });
  }

  // 播放完2秒以后浮现底部按钮
  if (videoRef1.value) {
    videoRef1.value.addEventListener('ended', handleVideoEnded);
  }

  if (videoRef2.value) {
    videoRef2.value.addEventListener('ended', handleVideoEnded);
  }
});

// 处理视频播放结束事件
const handleVideoEnded = () => {
  setTimeout(() => {
    if(isFirstPlayVideo.value) {
      // 浮现导航栏
      emergentNav();
      //浮现介绍文字
      emergentIntroduction();
      // 浮现闪光点 - 传递正确的索引参数
      emergentLamp();
    }
    isFirstPlayVideo.value = false;
  }, 2000);
};

// 切换视频
const changeVideo = async (videoSrc) => {
  if (isLoadingVideo.value) return; // 防止重复触发

  isLoadingVideo.value = true;
  const newVideoUrl = new URL(videoSrc, import.meta.url).href;

  // 如果是同一个视频，不需要切换
  if ((activeVideo.value === 1 && videoRef1.value?.src === newVideoUrl) ||
      (activeVideo.value === 2 && videoRef2.value?.src === newVideoUrl)) {
    isLoadingVideo.value = false;
    return;
  }

  try {
    // 确定要使用的下一个视频元素
    const nextVideoElement = activeVideo.value === 1 ? videoRef2.value : videoRef1.value;
    if (!nextVideoElement) {
      throw new Error('视频元素未初始化');
    }

    // 设置新视频源并加载
    nextVideoElement.src = newVideoUrl;

    // 等待视频加载并准备好播放
    await new Promise((resolve, reject) => {
      // 设置超时以防止加载时间过长
      const timeoutId = setTimeout(() => reject(new Error('视频加载超时')), 5000);

      // 使用oncanplaythrough确保视频完全加载
      nextVideoElement.oncanplaythrough = () => {
        clearTimeout(timeoutId);
        resolve();
      };

      // 同时监听canplay作为备选，提高兼容性
      nextVideoElement.oncanplay = () => {
        // 如果还没有解决promise，就使用canplay事件
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
    // 确保在视频完全加载后再播放
    await nextVideoElement.play().catch(error => {
      console.error('视频播放失败:', error);
      // 即使播放失败也继续执行，避免整个流程中断
    });

    // 平滑过渡到新视频
    const timeline = gsap.timeline();

    // 淡出当前视频
    // const currentVideoElement = activeVideo.value === 1 ? videoRef1.value : videoRef2.value;
    // if (currentVideoElement) {
    //   timeline.to(currentVideoElement.style, {
    //     opacity: 0,
    //     duration: 0.5,
    //     ease: "power2.in"
    //   }, 0);
    // }
    //
    // // 淡入新视频（稍微延迟以确保平滑过渡）
    // timeline.to(nextVideoElement.style, {
    //   opacity: 1,
    //   duration: 0.5,
    //   ease: "power2.out"
    // }, 0.1);

    timeline.eventCallback("onComplete", () => {
      // 更新当前激活的视频标记
      activeVideo.value = activeVideo.value === 1 ? 2 : 1;
      isLoadingVideo.value = false;
    });
  } catch (error) {
    console.error('视频切换失败:', error);
    isLoadingVideo.value = false;
  }
}




</script>
<style scoped>
.landscape{
  background: #000;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  position: relative;
}
.landscape-description{
  position: absolute;
  font-family: 'Alibaba-PuHuiTi-Regular';
  border-radius: 20px;
  font-size: 26px;
  width: 630px;
  color: #fefdf6;
  padding: 20px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 20px;
  z-index: 99;
  bottom: 120px;
  left: 70px;
  opacity: 0;
}
.landscape-video{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    transition: opacity 0.5s ease;
  }
}
.landscape-detail-description{
  opacity: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  position: absolute;
  z-index: 9;
  top:50%;
  transform: translateY(-50%);
  background-color: rgba(68,72,53,0.87);
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.1);
  img{
    width: 550px;
    height: 364px;
    border-radius: 10px;
  }
  p{
    width: 550px;
    font-size: 25px;
    color: #fefdf6;
    margin-top: 10px;
    line-height: 50px;
    font-family: 'Alibaba-PuHuiTi-Regular';
    span{
      font-weight: bold;
      margin-right: 10px;
      font-family: 'Alibaba-PuHuiTi-Bold';
    }
  }
}
.landscape-detail-description.left{
  left: 140px;
}
.landscape-detail-description.right{
  right: 140px;
}
.landscape-detail-description.glacier{
  p{
    font-size: 26px;
  }
}
.landscape-breathing-lamp{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .glacier{
    .lamp-item-wrap{
      &:nth-child(1){
        top: 400px;
        left: 390px;
      }
      &:nth-child(2){
        top: 810px;
        left: 918px;
      }
      &:nth-child(3){
        top: 468px;
        left: 1014px;
      }
      &:nth-child(4){
        top: 670px;
        left: 1354px;
      }
      &:nth-child(5){
        top: 728px;
        left: 1794px;
      }
    }
  }
  .lake{
    .lamp-item-wrap{
      &:nth-child(1){
        top: 650px;
        left: 630px;
      }
      &:nth-child(2){
        top: 650px;
        left: 1094px;
      }
      &:nth-child(3){
        top: 434px;
        left: 1458px;
      }
      &:nth-child(4){
        top: 344px;
        left: 1600px;
      }
    }
  }
.river{
  .lamp-item-wrap{
    &:nth-child(1){
      top: 733px;
      left: 836px;
    }
    &:nth-child(2){
      top: 446px;
      left: 1180px;
    }
    &:nth-child(3){
      top: 610px;
      left: 1190px;
    }
    &:nth-child(4){
      top: 516px;
      left: 1400px;
    }
    &:nth-child(5){
      top: 430px;
      left: 1500px;
    }
  }
}

  .lamp-item-wrap {
    position: absolute;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: translate(-50%, -50%);
    &:hover{
      .lamp-item{
        /* 强制覆盖动画的缩放值，确保目标大小统一（!important 提升优先级） */
        transform: scale(1.2) !important;
        /* 暂停动画，停在当前帧 */
        animation-play-state: paused;
        border: 3px solid #fff;
      //border: 3px solid #fff;
      }
    }
  }

  .lamp-item-core {
    position: absolute;
    width: 26px;
    height: 26px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    //animation: pulse 2s infinite;
  }

  .lamp-item {
    position: absolute;
    width: 38px;
    height: 38px;
    //background-color: rgba(255, 255, 255, 0.4);
    border: 2px solid #fff;
    border-radius: 50%;
    animation: pulseOuter 2s infinite;
    transition: transform 0.3s ease-in-out;

  }



  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes pulseOuter {
    0% {
      transform: scale(1);
      //opacity: 0.6;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      //opacity: 0.6;
    }
  }
.landscape-nav{
  width: 100%;
  position: absolute;
  bottom: 26px;
  opacity: 0;
  display: flex;
  justify-content: center;
  z-index: 99;
  .landscape-nav-wrapper{
    display: flex;
    justify-content: center;
    position: relative;
    &:before{
      content: '';
      width: 245px;
      height: 1px;
      background-image: url("@/assets/images/landscape/buttons/bottom-lines-left.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    left: -275px;
    }
    &:after{
      content: '';
      width: 245px;
      height: 1px;
      background-image: url("@/assets/images/landscape/buttons/bottom-lines-left.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      top: 50%;
      transform: translateY(-50%) rotate(180deg);
      right: -275px;
    }
  }

  .landscape-nav-item{
    width: 54px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    opacity: 0.6;
    cursor: pointer;
    transition: 0.3s ease-in;
    &:hover{
      opacity: 1;
    }
    &:last-child{
      margin-right: 0;
    }
    .glacier{
      width: 44px;
      height: 30px;
      background-image: url("@/assets/images/landscape/buttons/bottom-icons-lake.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .lake{
      width: 30px;
      height: 27px;
      background-image: url("@/assets/images/landscape/buttons/bottom-icons-river.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .river{
      width: 42px;
      height: 32px;
      background-image: url("@/assets/images/landscape/buttons/bottom-icons-glacier.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

  }
  .active{
    opacity: 1;
    scale: 1.5;
  }
}

@keyframes lamp-breath {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.2;
  }
   100% {
     scale: 1;
   }
}

</style>