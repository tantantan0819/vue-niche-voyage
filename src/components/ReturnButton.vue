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
import { inject } from 'vue'

const router = useRouter()

const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  onClose: {
    type: Function,
    default: null
  }
})

const emit = defineEmits(['close','backTohistory'])

// 尝试注入关闭弹窗的函数
const closeDetailModal = inject('closeDetailModal', null)

const returnHome = async () => {
  // 如果提供了 onClose 回调，优先使用它
  if (props.onClose) {
    props.onClose()
    return
  }
  
  // 如果注入了关闭弹窗函数，使用它（在弹窗模式下）
  if (closeDetailModal) {
    closeDetailModal()
    return
  }
  
  // 如果是气候页面，触发 close 事件（由父组件处理关闭）
  if(props.type === 'climate'){
    emit('close')
    return
  }
  
  // 如果触发了 close 事件，使用它
  emit('close')
  
  // 否则使用原来的路由跳转逻辑
  router.push('/home')
}
</script>
<style scoped>
.return-btn{
  position: fixed;
  top: 40px;
  left: 40px;
  z-index: 999;
  width: 112px;
  height: 56px;
  transition: all ease-in-out 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 28px;
  /* border: 1px dotted transparent; */

  .return-btn-core{
    width: 112px;
    height: 56px;
    border: 1px solid #fff;
    border-radius: 28px;
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
    border-color: rgba(255,255,255,0.35);
    .return-btn-core{
      /* transform: scale(1.1); */
      background-color: rgba(255,255,255,0.35);
    }
  }
}
</style>