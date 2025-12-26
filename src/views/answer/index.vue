<template>
  <div class="challenge">
    <div class="challenge-wrapper">
      <!-- 规则介绍部分 -->
      <div class="rule">
        <div class="rule-wrapper">
          <div class="rule-description">
            <p>欢迎您<span>XXX</span></p>
            <p>本次挑战一共将回答<span>10道</span>选择题</p>
            <p>每位用户每天最多可以挑战3次今日您还剩<span>1次</span>机会</p>
            <p>中途退出意味着您挑战失败并浪费一次机会</p>
            <p>完成挑战有机会获得挑战徽章答对全部题目将获得<span>2个积分</span></p>
            <p>准备好了吗</p>
          </div>
          <div class="rule-bottom">
            <div class="rule-submit-btn" @click="startAnswer">开始答题</div>
            <div class="rule-submit-btn" @click="goBack">返回极境之旅</div>
          </div>
        </div>
      </div>
      <!-- 答题部分 -->
      <div class="answer">
        <div class="answer-wrapper-outer">
          <div class="answer-top">
            <div class="current-index">
              <span>{{ currentQuestionIndex + 1 }}</span>
              <span>10</span>
            </div>
            <div class="progress">
              <div class="current-progress"></div>
            </div>
            <div class="answer-close medal-close" @click="challengeAgain"></div>
          </div>
          <div class="answer-content">
            <div class="answer-content-full">
              <div class="answer-full-screen" v-for="(question, index) in questionList" :key="index">
                <div class="answer-wrapper">
                  <div class="title">{{ question.title }}</div>
                  <div class="cloud-1"></div>
                  <div class="answer-options">
                    <div class="item" 
                         v-for="(option, optionIndex) in question.options" 
                         :key="optionIndex" 
                         @click="selectAnswer($event, currentQuestionIndex, optionIndex)" 
                         :class="{ active: selectedAnswers[currentQuestionIndex] === optionIndex }">
                      <div class="index">{{ questionSerialNumber[optionIndex] }}</div>
                      <p>{{ option.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="answer-bottom">
<!--            <div class="answer-submit-btn answer-prev-btn" @click="prevQuestion" v-show="currentQuestionIndex > 0">上一题</div>-->
            <div class="answer-submit-btn answer-next-btn" @click="nextQuestion">{{ currentQuestionIndex === questionList.length - 1 ? '提交' : '下一题' }}</div>
          </div>
        </div>
        <div class="medal">
          <div class="medal-content">
            <div class="medal-close" @click="challengeAgain"></div>
            <div class="medal-img">
              <div class="medal-img-inner"></div>
            </div>
            <div class="medal-title">
              <div class="medal-cloud medal-cloud-1"></div>
              <p>极境大师</p>
              <div class="medal-cloud medal-cloud-2"></div>
            </div>
            <div class="medal-description">
              <p>全部答对，您获得了极境大师徽章，并获得2个积分</p>
              <p>太厉害了，实力已达顶尖水平</p>
            </div>
            <div class="medal-submit-btn" @click="challengeAgain">再次挑战</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { pxToVw } from '@/utils/viewportUtils'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

// 路由
const router = useRouter()

// 答题状态
const currentQuestionIndex = ref(0)
const selectedAnswers = ref({})

const questionSerialNumber = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F'
}

const questionList = ref([
  {
    title: '被选为拉萨市“市鸟”，也是唯一在青藏高原上生长繁殖的鹤类是~',
    options: [
      { title: '丹顶鹤' },
      { title: '黑颈鹤' },
      { title: '灰鹤' },
      { title: '斑头雁' }
    ]
  },
  {
    title: '青藏高原被称为“世界屋脊”，它的平均海拔大约是多少？',
    options: [
      { title: '3000米' },
      { title: '4000米' },
      { title: '5000米' },
      { title: '6000米' }
    ]
  },
  {
    title: '青藏高原的形成与什么地质运动有关？',
    options: [
      { title: '火山喷发' },
      { title: '板块碰撞' },
      { title: '水流侵蚀' },
      { title: '海底地震' }
    ]
  }
])

// 内容在屏幕中移动后退
const QUESTION_WIDTH = 1920
const PROGRESS_STEP = 150
const moveToQuestion = (index) => {
  gsap.to('.answer-content-full', {
    x: pxToVw(-QUESTION_WIDTH * index),
    duration: 0.5
  })

  gsap.to('.current-progress', {
    x: pxToVw(PROGRESS_STEP * index),
    duration: 0.5
  })
}

const clickAnimation = (target) => {
  gsap.fromTo(
      target,
      { scale: 1 },
      {
        y: 3,
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
      }
  )
}

//文本入场动画
let splitInstance

onMounted(() => {
  splitInstance = SplitText.create('.rule-description', {
    type: 'chars,words,lines'
  })

  gsap.from(splitInstance.lines, {
    rotationX: -30,
    transformOrigin: '50% 50% -160px',
    opacity: 0,
    duration: 0.8,
    ease: 'power3',
    stagger: 0.25
  })
})

onBeforeUnmount(() => {
  splitInstance && splitInstance.revert()
})


// 开始答题
const startAnswer = () => {
  gsap.to('.challenge-wrapper', {
    x: pxToVw(-QUESTION_WIDTH),
    duration: 0.5
  })
}

// 选择答案
const selectAnswer = (event, questionIndex, optionIndex) => {
  selectedAnswers.value[questionIndex] = optionIndex
  clickAnimation(event.currentTarget)
}

// 下一题
const nextQuestion = () => {
  clickAnimation('.answer-next-btn')

  if (currentQuestionIndex.value === questionList.value.length - 1) {
    showMedal()
    return
  }

  currentQuestionIndex.value++
  moveToQuestion(currentQuestionIndex.value)
}

// 上一题（目前未启用）
const prevQuestion = () => {
  if (currentQuestionIndex.value === 0) return

  clickAnimation('.answer-prev-btn')
  currentQuestionIndex.value--
  moveToQuestion(currentQuestionIndex.value)
}

//  奖章弹窗
const showMedal = () => {
  const tl = gsap.timeline()

  tl.to('.medal', {
    display: 'block',
    opacity: 1,
    scale: 1,
    duration: 0.3
  })

  tl.fromTo(
      '.medal-content',
      { y: 500 },
      { y: 0, duration: 0.3, ease: 'power2.inOut' }
  )

  tl.set('.medal-img-inner', { rotateY: 0 })

  tl.fromTo(
      '.medal-img-inner',
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.2 }
  )

  tl.to('.medal-img-inner', {
    rotateY: 360,
    duration: 6,
    ease: 'power1.inOut'
  })

  tl.fromTo(
      '.medal-cloud-1',
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      '<'
  )

  tl.fromTo(
      '.medal-cloud-2',
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      '<'
  )

  tl.fromTo(
      '.medal-title p',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 },
      '<'
  )

  tl.fromTo(
      '.medal-description',
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '<'
  )
}

// 再次挑战
const challengeAgain = () => {
  gsap.to('.medal', {
    display: 'none',
    opacity: 0,
    duration: 0.1
  })

  gsap.to('.challenge-wrapper', {
    x: 0,
    duration: 0.5
  })

  currentQuestionIndex.value = 0
  selectedAnswers.value = {}

  moveToQuestion(0)
}

const goBack = () => {
  router.push('/voyage/answer')
}
</script>


<style scoped>
.medal-close {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #b3b3b3;
  background-image: url("@/assets/images/answer/questionspage-close.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: rotate(180deg);
  }
}

.challenge {
  width: 1920px;
  height: 1080px;
  background-image: url("@/assets/images/answer/questionspage_background.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  
  .challenge-wrapper {
    display: flex;
  }
  
  .rule {
    width: 1920px;
    height: 1080px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .rule-wrapper {
      width: 1500px;
      
      .rule-description {
        width: 100%;
        font-size: 36px;
        font-weight: bold;
        border-radius: 50px;
        color: #fff;
        text-align: center;
        background: #8c6239b0;
        border: 6px solid rgba(242,187,105,0.9);
        
        p {
          padding: 24px 0;
          
          span {
            color: #fbb03b;
          }
        }
      }
      
      .rule-bottom {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 40px;
        
        .rule-submit-btn {
          user-select: none;
          cursor: pointer;
          width: 400px;
          height: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 36px;
          color: #42210b;
          background-color: #fff4e9;
          border-radius: 50px;
          border: 2px solid #988473;
          transition: all ease-in-out 0.3s;
          
          &:hover {
            background-color: #e6e6e6;
            color: #333333;
            border-color: #949494;
          }
        }
      }
    }
  }
  
  .answer {
    position: relative;
  }
  
  .answer-wrapper-outer {
    .answer-top {
      padding: 70px 210px 0;
      position: relative;
      
      .current-index {
        width: 170px;
        height: 60px;
        border-radius: 24px;
        overflow: hidden;
        display: flex;
        
        span {
          width: 85px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          
          &:nth-child(1) {
            background: #8c6239;
            color: #f4eeea;
          }
          
          &:nth-child(2) {
            background: #f4eeea;
            color: #8c6239;
          }
        }
      }
      
      .progress {
        width: 100%;
        height: 26px;
        border-radius: 10px;
        background: #f8eadc;
        margin: 30px 0;
        overflow: hidden;
        position: relative;
        
        .current-progress {
          position: absolute;
          width: 100%;
          height: 26px;
          border-radius: 10px;
          background: #8c6239;
          top: 0;
          left: -1350px;
        }
      }
      
      .answer-close {
        position: absolute;
        top: 40px;
        right: 40px;
        background-image: url("@/assets/images/answer/questionspage-close-1.png");
      }
    }
    
    .answer-content {
      width: 1920px;
      overflow: hidden;
      
      .answer-content-full {
        display: flex;
        flex-direction: row;
        
        .answer-full-screen {
          width: 1920px;
          
          .answer-wrapper {
            border-radius: 50px;
            width: 1500px;
            padding: 50px 60px 110px;
            margin: 0 210px;
            background: rgba(250,237,224,0.9);
            position: relative;
            
            .cloud-1 {
              width: 484px;
              height: 162px;
              background-image: url("@/assets/images/answer/questionspage-cloud.png");
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
              position: absolute;
              right: 14px;
              bottom: 16px;
            }
            
            .title {
              font-size: 36px;
              line-height: 36px;
              color: #42210b;
              margin-bottom: 120px;
            }
            
            .answer-options {
              display: flex;
              flex-direction: column;
              width: fit-content;
              position: relative;
              z-index: 2;
              
              .item {
                display: flex;
                min-width: 660px;
                padding: 24px 50px;
                border-radius: 40px;
                background: #c69c6d;
                margin-bottom: 20px;
                color: #ffffff;
                font-size: 36px;
                line-height: 36px;
                
                &:last-child {
                  margin-bottom: 0;
                }
                
                .index {
                  margin-right: 20px;
                }
              }
              
              .active {
                background: #8c6239;
              }
            }
          }
        }
      }
    }
    
    .answer-bottom {
      padding: 20px 210px 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      
      .answer-submit-btn {
        user-select: none;
        cursor: pointer;
        width: 210px;
        height: 80px;
        background: #8c6239;
        font-size: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        color: #fff;
        
        &:last-child {
          margin-left: auto;
        }
      }
    }
  }
  
  .medal {
    width: 1920px;
    height: 1080px;
    z-index: 3;
    background-color: rgba(28, 28, 28, 0.32);
    position: absolute;
    display: none;
    //scale: 0;
    opacity: 0;
    top: 0;
    left: 0;
    
    .medal-content {
      background-color: #fff4e9;
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 12px solid #8c6239;
      width: 880px;
      position: absolute;
      top: 110px;
      left: 508px;
      border-radius: 50px;
      
      .medal-close {
        position: absolute;
        top: 50px;
        right: 50px;
      }
      
      .medal-img {
        width: 346px;
        height: 380px;
        overflow: hidden;
        //background-color: red;
        position: relative;
        .medal-img-inner{
          width: 346px;
          height: 380px;
          background-image: url("@/assets/images/answer/questionspage-medal.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          position: absolute;
          top: 0;
          left: 0;
          //position: absolute;
          //top: -150px;
          //left: -800px;
        }
      }
      
      .medal-title {
        display: flex;
        
        .medal-cloud {
          width: 221px;
          height: 114px;
          background-image: url("@/assets/images/answer/questionspage-cloud-1.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
        
        .medal-cloud-2 {
          transform: rotateY(180deg);
        }
        
        p {
          font-size: 70px;
          color: #333333;
          line-height: 105px;
        }
      }
      
      .medal-description {
        font-size: 36px;
        color: #42210b;
        text-align: center;
        margin-top: 40px;
      }
      
      .medal-submit-btn {
        cursor: pointer;
        width: 380px;
        height: 92px;
        font-size: 36px;
        color: #42210b;
        line-height: 92px;
        text-align: center;
        background-color: #c69c6d;
        border-radius: 30px;
        margin-top: 46px;
        
        &:hover {
          background-color: #c09463;
        }
      }
    }
  }
}
</style>