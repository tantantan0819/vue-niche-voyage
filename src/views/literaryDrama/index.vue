<template>
  <!-- 第八屏字体需要更换 -->

  <div class="literary-drama">
    <!-- 第一屏 -->
    <div class="screen first-screen"></div>
    <!-- 第二屏 -->
    <div class="screen second-screen">
      <div class="second-screen-left">
        <div class="mountain-img-1"></div>
        <div class="mountain-img-2"></div>
        <div class="mountain-img-3"></div>
      </div>
      <!-- 中间标题部分 -->
      <div class="second-screen-center">
        <div class="drama-crane-left-img"></div>
        <div class="drama-character-title">
        </div>
        <div class="drama-character-subtitle">
           <div class="drama-crane-right-img"></div>
        </div>
      </div>
       <div class="second-screen-right">
          <div class="mountain-img-4"></div>
          <div class="mountain-img-5"></div>
          <div class="mountain-img-6"></div>
          <div class="mountain-img-7"></div>
        </div>
    </div>
    <!-- 第三屏 -->
    <div class="screen third-screen">
      <div class="background-silk-img"></div>
      <div class="left-pattern-container">
        <div class="fire-img-1"></div>
        <div class="cloud-img-1"></div>
        <div class="cloud-img-2"></div>
        <div class="character-img"></div>
      </div>
      <div class="text-content text-font">
        “很久很久以前，天灾人祸遍及高原，妖怪横行，百姓遭殃。菩萨为了普渡众生逃出苦海，便向佛祖请求派天神之子下凡降魔。天神之子推巴噶瓦来到人间，他就是格萨尔。”
      </div>
      <div class="right-pattern-container">
        <div class="fire-container">
          <div class="fire-img-2"></div>
          <div class="fire-img-3"></div>
        </div>
        <div class="clound-img-3"></div>
      </div>
    </div>
    <!-- 第四屏 -->
    <div class="screen forth-screen">
      <div class="portrait-container">
          <img class="portrait-img" src="../../assets/images/literaryDrama/drama-image-1.jpg"></img>
          <div class="portrait-detail">
            <p class="illustration-title-font">格萨尔王和三十员大将降伏恶魔</p>
            <div class="dot-content-container">
              <Dot @click="showForthPopover" />
              <Popover title="内容来自" content="《情系高原——新藏画精品细赏》 四川民族出版社 2025" v-if="forthScreenPopover"></Popover>
            </div>
          </div>
      </div>
      <div class="text-container">
        <div class="text-containter-wrapper">
          <div class="background-text-img"></div>
          <p class="text-font">《格萨尔》是一部传颂千年的民族史诗，讲述了藏族英雄格萨尔王降妖伏魔、造福百姓的征战事迹，被誉为“东方的荷马史诗”，也是世界上篇幅最长、规模最大、唯一“活态”的民间文学作品。</p>
        </div>
      </div>
      <div class="cane-clound-container">
        <div class="cane-img"></div>
        <div class="cloud-img"></div>
      </div>
    </div>
    <!-- 第五屏 -->
    <div class="screen fifth-screen">
      <div class="wrapper">
        <div class="fifth-screen-content text-font">
          <span>在我国境内，《格萨尔》史诗广泛传布在西藏、内蒙古、新疆、青海、甘肃、四川、云南地区，被藏、蒙古、土、裕固、东乡、撒拉、纳西、门巴、珞巴、普米、白、独龙、傈僳13个民族传唱千年，已内化为各民族的传统文化，构建起了各民族共有共享的精神家园。</span>
          <div class="dot-content-container">
              <Dot @click="showFifthPopover" />
              <Popover title="阅读更多" content="《雪域雄狮:除暴安良格萨尔王》 四川民族出版社 2024" v-if="fifthScreenPopover"></Popover>
          </div>
          <div class="background-text-img"></div>
        </div>
        <div class="character-img"></div>
      </div>
    </div>
    <!-- 第六屏 -->
    <div class="screen sixth-screen">
      <div class="portrait-container">
          <img class="portrait-img" src="../../assets/images/literaryDrama/drama-image-2.jpg"></img>
          <p class="illustration-title-font">四川德格竹庆格萨尔藏戏</p>
      </div>
      <div class="forest-img"></div>
      <div class="silk-ribbon-img"></div>
    </div>
    <!-- 第七屏 -->
    <div class="screen seventh-screen">
      <div class="forest-container">
        <div class="tree-img"></div>
        <div class="rock-img"></div>
      </div>
      <div class="text-container text-font">
         <p>彝族英雄史诗《支格阿鲁》同样以口头文本形式在云南、四川、贵州等地的彝族民间代代相传，影响广泛。</p>
         <p>
          <span>相传在远古时代，支格阿鲁的母亲原是一位待字闺中的姑娘。一天，她在屋外纺线织布时，空中飞过一只雄鹰，三滴鹰血落在她身上，使她感孕并生下了支格阿鲁（彝语中“鲁”意为“龙”）。阿鲁出生后整日啼哭，哭声惊扰天界。天帝恩体古子遂派食人魔王塔博阿莫前来捉拿母子。当母子二人被抓至空中时，母亲为救儿子，将阿鲁抛下，使他落入万丈深渊的龙巢。阿鲁在龙的养育下成长为一位神力无比、降妖除魔的英雄。</span>
          <div class="dot-content-container">
              <Dot @click="showSeventhPopover" />
              <Popover title="阅读更多" content="《支格阿龙1》四川民族出版社 2018" v-if="seventhScreenPopover"></Popover>
          </div>
         </p>
      </div>
    </div>
    <!-- 第八屏 -->
    <div class="screen eighth-screen">
      <div class="tree-img"></div>
      <div class="text-container">
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
          <div class="dot-content-container">
              <Dot @click="showEighthPopover" />
              <Popover title="内容来自" content="《文成公主·诺桑王子》 四川民族出版社 2023" v-if="eighthScreenPopover"></Popover>
          </div>
        </p>
      </div>
    </div>
    <!-- 第九屏 -->
    <div class="screen ninth-screen">
      <div class="text-container text-font">这是藏戏《文成公主》中太宗皇帝送别女儿时的谆谆教诲，通过艺术家的演绎，在雪域高原上流传至今，成为人们耳熟能详的经典篇章。</div>
      <div class="background-text-img"></div>
      <div class="portrait-container">
          <img class="portrait-img" src="../../assets/images/literaryDrama/drama-image-3.jpg"></img>
          <div class="portrait-detail">
             <div class="dot-content-container">
              <Dot @click="showNinthPopover" />
              <Popover title="内容来自" content="《情系高原——新藏画精品细赏》 四川民族出版社 2025" v-if="ninthScreenPopover"></Popover>
            </div>
            <span class="illustration-title-font">文成公主入藏图</span>
          </div>
      </div>
    </div>
    <!-- 第十屏 -->
    <div class="screen tenth-screen">
      <div class="cloud-img"></div>
      <!-- <div class="portrait-container">
          <img class="portrait-img" src="../../assets/images/literaryDrama/drama-image-3.jpg"></img>
          <p class="illustration-title-font">文成公主入藏图</p>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dot from './dot.vue';
import Popover from './popover.vue';

const forthScreenPopover = ref(false)
const fifthScreenPopover = ref(false)
const seventhScreenPopover = ref(false)
const eighthScreenPopover = ref(false)
const ninthScreenPopover = ref(false)
const showForthPopover = () => {
  forthScreenPopover.value = !forthScreenPopover.value
}
const showFifthPopover = () => {
  fifthScreenPopover.value = !fifthScreenPopover.value
}
const showSeventhPopover = () => {
  seventhScreenPopover.value = !seventhScreenPopover.value
}
const showEighthPopover = () => {
  eighthScreenPopover.value = !eighthScreenPopover.value
}
const showNinthPopover = () => {
  ninthScreenPopover.value = !ninthScreenPopover.value
}
</script>

<style scoped>
.text-font{
  font: 33px/54px "Alibaba-PuHuiTi-Regular";
  color: #534833;
}
.illustration-title-font{
  font-size: 33px;
  font-family: 'Alibaba-PuHuiTi-Light';
  line-height: 50px;
  color: #534833;
}
.dot-content-container{
  position: relative;
  display: inline-block;
}
.literary-drama {
  width: 100vw;
  position: relative;
  background: url('../../assets/images/literaryDrama/drama-bg.jpg') no-repeat center center / cover;
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
    background: url('../../assets/images/literaryDrama/drama-character-1.png') no-repeat center center / cover;
  }
  .drama-character-subtitle{
    position: relative;
    top: -50px;
    width: 950px;
    height: 152px;
    background: url('../../assets/images/literaryDrama/drama-character-2.png') no-repeat center center / cover;
  }
  .drama-crane-left-img{
    align-self: flex-start;
    position: absolute;
    top: -230px;
    left: -120px;
    width: 391px;
    height: 288px;
    background: url('../../assets/images/literaryDrama/drama-element-1-9.png') no-repeat center center / cover;
  }
  .drama-crane-right-img{
    position: absolute;
    top: -85%;
    right: -35%;
    width: 592px;
    height: 298px;
    background: url('../../assets/images/literaryDrama/drama-element-1-8.png') no-repeat center center / cover;
  }
  .second-screen-left{
    .mountain-img-1{
      position: absolute;
      top: 30px;
      left: 10px;
      width: 386px;
      height: 310px;
      background: url('../../assets/images/literaryDrama/drama-element-1-3.png') no-repeat center center / cover;
    }
    .mountain-img-2{
      position: absolute;
      top: 200px;
      left: 300px;
      width: 386px;
      height: 310px;
      background: url('../../assets/images/literaryDrama/drama-element-1-4.png') no-repeat center center / cover;
    }
     .mountain-img-3{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 680px;
      height: 560px;
      background: url('../../assets/images/literaryDrama/drama-element-1-6.png') no-repeat center center / cover;
    }
  }
  .second-screen-right{
    .mountain-img-4{
      position: absolute;
      top: 30px;
      right: 10px;
      width: 381px;
      height: 535px;
      background: url('../../assets/images/literaryDrama/drama-element-1-1.png') no-repeat center center / cover;
    }
    .mountain-img-5{
      position: absolute;
      top:220px;
      right: 100px;
      width: 371px;
      height: 323px;
      background: url('../../assets/images/literaryDrama/drama-element-1-2.png') no-repeat center center / cover;
    }
    .mountain-img-6{
      position: absolute;
      top:220px;
      right: 0;
      width: 621px;
      height: 667px;
      background: url('../../assets/images/literaryDrama/drama-element-1-5.png') no-repeat center center / cover;
    }
    .mountain-img-7{
      position: absolute;
      bottom:0;
      right: 0;
      width: 739px;
      height: 329px;
      background: url('../../assets/images/literaryDrama/drama-element-1-7.png') no-repeat center center / cover;
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
    background: url('../../assets/images/literaryDrama/drama-element-1-13.png') no-repeat center center / cover;
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
      background: url('../../assets/images/literaryDrama/drama-element-1-11.png') no-repeat center center / cover;
    }
    .cloud-img-1{
      position: absolute;
      left: -10px;
      bottom: 0px;
      width: 600px;
      height: 160px;
      z-index: 999;
      background: url('../../assets/images/literaryDrama/drama-element-1-16.png') no-repeat center center / cover;
    }
    .cloud-img-2{
      position: absolute;
      left: -10px;
      bottom: 0;
      width: 320px;
      height: 260px;
      z-index: 999;
      background: url('../../assets/images/literaryDrama/drama-element-1-17.png') no-repeat center center / cover;
    }
    .character-img{
      position: absolute;
      left: 200px;
      bottom: 100px;
      width: 321px;
      height: 345px;
      background: url('../../assets/images/literaryDrama/drama-element-1-15.png') no-repeat center center / cover;
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
          background: url('../../assets/images/literaryDrama/drama-element-1-10.png') no-repeat center center / cover;
      }
       .fire-img-3{
        width: 435px;
        height: 199px;
        background: url('../../assets/images/literaryDrama/drama-element-1-12.png') no-repeat center center / cover;
      }
    }
    .clound-img-3{
      position: absolute;
      top: 160px;
      right: 0;
      width: 470px;
      height: 165px;
      background: url('../../assets/images/literaryDrama/drama-element-1-14.png') no-repeat center center / cover;
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
    .portrait-img{
      height: 520px;
    }
    .portrait-detail{
      display: flex;
      .popover-container{
        top: -60px; 
        left: 50px;
      }
    }
  }
  .text-containter-wrapper{
    position: relative;
    width: 900px;
    height: 450px;
    .background-text-img{
      position: absolute;
      top: -130px;
      right: 0;
      width: 502px;
      height: 161px;
      background: url('../../assets/images/literaryDrama/drama-character-3.png') no-repeat center center / cover;
    }
  }
  .cane-clound-container{
    .cane-img{
      position: absolute;
      right: 150px;
      bottom: 100px;
      width: 420px;
      height: 386px;
      background: url('../../assets/images/literaryDrama/drama-element-2-1.png') no-repeat center center / cover;
    }
    .cloud-img{
      position: absolute;
      right: -80px;
      bottom: -200px;
      width: 461px;
      height: 445px;
      background: url('../../assets/images/literaryDrama/drama-element-2-2.png') no-repeat center center / cover;
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
  .text-container{
    display: flex;
  }
  .character-img{
    position: relative;
    top:-50px;
    left: 50px;
    width:640px;
    height:280px;
    background: url('../../assets/images/literaryDrama/drama-element-2-3.gif') no-repeat center center / cover;
  }
  .background-text-img{
    position: relative;
    top: -100px;
    width:1147px;
    height:359px;
    background: url('../../assets/images/literaryDrama/drama-character-4.png') no-repeat center center / contain;
  }
  .popover-container{
    top: 0;
    left: 30px;
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
  }
  .forest-img{
    position: absolute;
    top: 180px;
    right: 0;
    width: 981px;
    height: 653px;
    background: url('../../assets/images/literaryDrama/drama-element-2-4.png') no-repeat center center / cover; 
  }
  .silk-ribbon-img{
    position: absolute;
    left: 0;
    bottom: -60%;
    width: 821px;
    height: 801px;
    background: url('../../assets/images/literaryDrama/drama-element-2-7.png') no-repeat center center / cover;
  }
}
.seventh-screen{
  position: relative;
  margin-bottom: 40px;
  .tree-img{
    position: absolute;
    left: 0;
    bottom: 100px;
    width: 695px;
    height: 472px;
    background: url('../../assets/images/literaryDrama/drama-element-2-5.png') no-repeat center center / cover;
  }
  .rock-img{
    position: absolute;
    left: 0;
    bottom: -40px;
    width: 701px;
    height: 205px;
    background: url('../../assets/images/literaryDrama/drama-element-2-6.png') no-repeat center center / cover;
  }
  .text-container{
    position: absolute;
    top: 100px;
    right: 200px;
    width: 1000px;
  }
  .dot-content-container{
    top: 20px;
    .popover-container{
      position: absolute;
      left: 30px;
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
    background: url('../../assets/images/literaryDrama/drama-element-2-8.png') no-repeat center center / cover;
  }
  .text-container{
    position: absolute;
    top: 50%;
    left: 200px;
    transform: translateY(-50%);
    writing-mode: vertical-rl; /* 从右向左 从上向下 */
    /* font-family: ; */
    font-size: 40px;
    line-height: 80px;
    color: #534833;
  }
  .popover-container{
    top: 30px;
    left: 40px;
    writing-mode:horizontal-tb; 
  }
}
.ninth-screen{
  .text-container{
    position: absolute;
    top: 200px;
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
    background: url('../../assets/images/literaryDrama/drama-character-6.png') no-repeat center center / cover;
  }
  .portrait-container{
    position: absolute;
    right: 100px;
    bottom: 120px;
    .portrait-img{
      width: 900px;
    }
    .portrait-detail{
      text-align: right;
    }
    .dot-content-container{
      right: 10px;
    }
    .popover-container{
      text-align: left;
      top: -20px;
      right: 40px;
    }
  }
}
.tenth-screen{
  .cloud-img{
    position: absolute;
    top: 40px;
    left: 0;
    width: 655px;
    height: 325px;
    background: url('../../assets/images/literaryDrama/drama-element-2-9.png') no-repeat center center / cover;
  }
}
</style>
