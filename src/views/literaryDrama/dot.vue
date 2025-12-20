<template>
    <div class="dot-box">
        <div class="dot-outer"> <div class="dot-inner"> </div></div>
    </div>
</template>
<style scoped>
    .dot-box{
      position: relative;
      width: 26px;
      height: 26px;
      cursor: pointer;
      z-index: 9999;
    }
    .dot-inner{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 26px;
      height: 26px;
      background: url('../../assets/images/literaryDrama/drama-dot-outer-1.png') no-repeat center center / cover;
    }
    .dot-outer{
      width: 26px;
      height: 26px;
      background: url('../../assets/images/literaryDrama/drama-dot-inner-1.png') no-repeat center center / cover;
    }
</style>