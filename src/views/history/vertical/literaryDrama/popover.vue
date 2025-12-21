<template>
    <div class="popover-container">
        <div class="popover-title">·{{ title }}</div>
        <div class="popover-divider"></div>
        <div class="popover-content">{{ content }}</div>
    </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  content: String
});
</script>
<style scoped>
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