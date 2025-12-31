<template>
  <div class="error-page">
    <!-- 背景层 -->
    <div class="error-background"></div>
    
    <!-- 装饰云朵 -->
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
    
    <!-- 主要内容 -->
    <div class="error-content">
      <div class="error-code">404</div>
      <div class="error-title">极境迷途</div>
      <div class="error-message">此页面已消失在雪域深处</div>
      <div class="error-sub-message">让我们重新启程，继续探索</div>
      <router-link to="/" class="back-home-btn">
        <span>返回首页</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // 404数字动画
  gsap.from('.error-code', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)'
  })
  
  // 标题和内容渐入动画
  gsap.from('.error-title', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    delay: 0.2,
    ease: 'power2.out'
  })
  
  gsap.from('.error-message', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: 'power2.out'
  })
  
  gsap.from('.error-sub-message', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    ease: 'power2.out'
  })
  
  // 按钮动画
  gsap.from('.back-home-btn', {
    y: 20,
    opacity: 1,
    duration: 0.6,
    delay: 0.7,
    ease: 'power2.out'
  })
  
  // 云朵浮动动画
  gsap.to('.cloud-1', {
    x: 30,
    y: -20,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
  
  gsap.to('.cloud-2', {
    x: -40,
    y: 15,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 0.5
  })
  
  gsap.to('.cloud-3', {
    x: 25,
    y: -10,
    duration: 9,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 1
  })
})
</script>

<style scoped>
.error-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* 背景层 - 答题背景图，设置淡一点 */
.error-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/answer/questionspage_background.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0.4; /* 让背景变淡 */
  z-index: 0;
}

/* 额外的白色遮罩让背景更淡 */
.error-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  z-index: 1;
}

/* 装饰云朵 */
.cloud {
  position: absolute;
  z-index: 1;
  opacity: 0.7;
}

.cloud-1 {
  width: 484px;
  height: 162px;
  background-image: url("@/assets/images/answer/questionspage-cloud.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  top: 15%;
  left: 5%;
}

.cloud-2 {
  width: 221px;
  height: 114px;
  background-image: url("@/assets/images/answer/questionspage-cloud-1.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  top: 20%;
  right: 8%;
  transform: rotateY(180deg);
}

.cloud-3 {
  width: 221px;
  height: 114px;
  background-image: url("@/assets/images/answer/questionspage-cloud-1.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  bottom: 15%;
  left: 10%;
}

/* 主要内容 */
.error-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 60px 80px;
  border-radius: 50px;
  background: rgba(250, 237, 224, 0.95);
  border: 6px solid rgba(140, 98, 57, 0.6);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.error-code {
  font-family: 'EarlySummerSerif-Bold', serif;
  font-size: 180px;
  font-weight: bold;
  color: #8c6239;
  margin-bottom: 30px;
  line-height: 1;
  text-shadow: 2px 2px 8px rgba(140, 98, 57, 0.2);
  letter-spacing: -5px;
}

.error-title {
  font-family: 'Alibaba-PuHuiTi-Bold', sans-serif;
  font-size: 48px;
  font-weight: bold;
  color: #42210b;
  margin-bottom: 24px;
  line-height: 1.3;
}

.error-message {
  font-family: 'Alibaba-PuHuiTi-Regular', sans-serif;
  font-size: 24px;
  color: #534833;
  margin-bottom: 16px;
  line-height: 1.8;
}

.error-sub-message {
  font-family: 'Alibaba-PuHuiTi-Light', sans-serif;
  font-size: 20px;
  color: #8c6239;
  margin-bottom: 50px;
  line-height: 1.6;
  opacity: 0.9;
}

.back-home-btn {
  display: inline-block;
  padding: 16px 50px;
  background: rgba(250, 237, 224, 0.9);
  color: #8c6239;
  border: 2px solid rgba(140, 98, 57, 0.5);
  border-radius: 50px;
  font-family: 'Alibaba-PuHuiTi-Regular', sans-serif;
  font-size: 28px;
  text-decoration: none;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  position: relative;
  overflow: visible;
  opacity: 1 !important;
  box-shadow: 0 4px 15px rgba(140, 98, 57, 0.2);
}

.back-home-btn:hover {
  background: rgba(250, 237, 224, 1);
  border-color: rgba(140, 98, 57, 0.8);
  box-shadow: 0 6px 20px rgba(140, 98, 57, 0.3);
  transform: translateY(-2px);
}

.back-home-btn span {
  position: relative;
  display: inline-block;
  transition: all ease-in-out 0.3s;
}

.back-home-btn:hover span {
  color: #6b4e2d;
}

.back-home-btn span::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -25px;
  transform: translateY(-50%);
  width: 22px;
  height: 10px;
  background: url('@/assets/images/menu/triangle-left.png') no-repeat center center / cover;
  transition: all ease-in-out 0.3s;
  opacity: 0.8;
}

.back-home-btn span::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
  width: 22px;
  height: 10px;
  background: url('@/assets/images/menu/triangle-right.png') no-repeat center center / cover;
  transition: all ease-in-out 0.3s;
  opacity: 0.8;
}

.back-home-btn:hover span::before {
  left: -50px;
  opacity: 1;
}

.back-home-btn:hover span::after {
  right: -50px;
  opacity: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .error-content {
    max-width: 90%;
    padding: 40px 30px;
    border-radius: 30px;
  }
  
  .error-code {
    font-size: 120px;
  }
  
  .error-title {
    font-size: 32px;
  }
  
  .error-message {
    font-size: 18px;
  }
  
  .error-sub-message {
    font-size: 16px;
  }
  
  .back-home-btn {
    padding: 12px 35px;
    font-size: 22px;
  }
  
  .back-home-btn span::before {
    left: -35px;
    width: 18px;
    height: 8px;
  }
  
  .back-home-btn span::after {
    right: -35px;
    width: 18px;
    height: 8px;
  }
  
  .back-home-btn:hover span::before {
    left: -40px;
  }
  
  .back-home-btn:hover span::after {
    right: -40px;
  }
  
  .cloud-1,
  .cloud-2,
  .cloud-3 {
    opacity: 0.4;
  }
}
</style>