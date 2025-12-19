<template>
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
          <p class="illustration-title-font">格萨尔王和三十员大将降伏恶魔</p>
      </div>
      <div class="text-container">
        <div class="text-containter-wrapper">
          <div class="background-text-img"></div>
          <p class="text-font">《格萨尔》是一部传颂千年的民族史诗，讲述了藏族英雄格萨尔王降妖伏魔、造福百姓的征战事迹，被誉为“东方的荷马史诗”，也是世界上篇幅最长、规模最大、唯一“活态”的民间文学作品。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
.literary-drama {
  width: 100vw;
  /* height: 100vh; */
  position: relative;
  background: url('../../assets/images/literaryDrama/drama-bg.jpg') no-repeat center center / cover;
  .screen {
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
  .portrait-container{
    .portrait-img{
      height: 520px;
    }
  }
  .text-containter-wrapper{
    width: 900px;
    height: 450px;
    .background-text-img{
      
    }
  }
}

</style>
