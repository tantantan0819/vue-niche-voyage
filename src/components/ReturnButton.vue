<template>
  <div class="return-btn" @click="returnHome">
    <div class="return-btn-core">
      <div class="arrow"></div>
      <div class="text"></div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const returnHome = () => {
  router.push('/home')
}
</script>
<style scoped>
.return-btn{
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 999;
  width: 130px;
  height: 78px;
  transition: all ease-in-out 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  .return-btn-core{
    width: 112px;
    height: 56px;
    border: 1px solid #fff;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    background-color: rgba(255,255,255,0.15);
    .arrow{
      width: 18px;
      height: 21px;
      background-image: url("@/assets/images/return/arrow.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      margin-right: 10px;
    }
    .text{
      width: 35px;
      height: 23px;
      background-image: url("@/assets/images/return/text.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  &:hover{
    border: 1px dotted  rgba(255,255,255,0.5);
    border-radius: 46px;
    .return-btn-core{
      background-color: rgba(255,255,255,0.35);
    }
  }
}
</style>