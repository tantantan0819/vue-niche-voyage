<template>
  <div class="challenge">
    <div class="challenge-wrapper">
      <div class="answer">
        <div class="answer-wrapper-outer">
          <div class="answer-content">
            <div class="answer-content-full">
              <div class="answer-full-screen">
                <div class="answer-wrapper">
                  <div class="cloud-1"></div>
                  <div class="answer-tip">功能开发中，敬请期待</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
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
}

.answer {
  position: relative;
}

.answer-wrapper-outer {

  .answer-content {
    width: 1920px;
    overflow: hidden;

    .answer-content-full {
      display: flex;
      flex-direction: row;

      .answer-full-screen {
        width: 1920px;
        height: 1080px;

        .answer-wrapper {
          border-radius: 50px;
          width: 1500px;
          padding: 50px 60px 110px;
          height: 500px;
          margin: 0 210px;
          background: rgba(250,237,224,0.9);
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          .answer-tip{
            font-size: 38px;
            color: #42210b;
          }
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
        }
      }
    }
  }
}



</style>