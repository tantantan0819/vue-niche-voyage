<template>
   <div class="dot-content-container">
     <div class="dot-box"  @click="showPopover" >
        <div class="dot-outer"> <div class="dot-inner"> </div></div>
     </div>
     <div class="popover-container" v-if="popoverVisible">
        <div class="popover-title">·{{ title }}</div>
        <div class="popover-divider"></div>
        <div class="popover-content">{{ content }}</div>
    </div>
   </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: String,
  content: String
});
const popoverVisible = ref(false);
const showPopover = () => {
  popoverVisible.value = !popoverVisible.value;
}
</script>
<style scoped>
    .dot-content-container{
        position: relative;
        display: inline-block;
    }
    .dot-box{
      position: relative;
      width: 26px;
      height: 26px;
      cursor: pointer;
      z-index: 9999;
    }
    .dot-inner{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 36px;
      height: 36px;
      background: url('../../assets/images/literaryDrama/drama-dot-outer-1.png') no-repeat center center / cover;
    }
    .dot-outer{
      position: relative;
      width: 49px;
      height: 46px;
      background: url('../../assets/images/literaryDrama/drama-dot-inner-1.png') no-repeat center center / cover;
    }
     .popover-container{
        position: absolute;
        width: 549px;
        height: 165px;
        padding: 20px;
        background: url('../../assets/images/literaryDrama/drama-popup-bib-1.png') no-repeat center center / cover;
        font-size: 20px;
        font-family: 'Alibaba-PuHuiTi-Light';
        line-height: 40px;
        color: #403321;
        font-weight: 300;
        .popover-divider{
            height: 2px;
            margin: 10px 0;
            background: url('../../assets/images/literaryDrama/drama-popup-divider-1.png') no-repeat center center / cover;
        }
    }
</style>