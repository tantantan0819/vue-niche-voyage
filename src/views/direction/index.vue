<template>
  <div class="scroll-root" ref="root">
<!--    <section class="vertical">-->
<!--      <art></art>-->
<!--    </section>-->


    <section class="horizontal" ref="horizontal">
      <div class="horizontal-track" ref="hTrack">
        <xiangxiong></xiangxiong>
        <yuan></yuan>
        <chamagudao></chamagudao>
        <jindai></jindai>
      </div>
    </section>

    <section class="vertical">
      <art></art>
    </section>
    <section class="diagonal" ref="diagonal">Diagonal Section</section>


    <section class="pin-section">
      <h1 class="title">Pinned Title</h1>
      <p class="desc">Scroll to animate</p>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import art from '../art/index.vue'
import yuan from '../history/yuan.vue'
import chamagudao from '../history/chamagudao.vue'
import jindai from '../history/jindai.vue'
import xiangxiong from '../history/xiangxiong.vue'


gsap.registerPlugin(ScrollTrigger)


const horizontal = ref(null)
const hTrack = ref(null)


onMounted(() => {
  const totalWidth = hTrack.value.scrollWidth
  const scrollLength = totalWidth * 1.2   // 👈 放大滚动距离
  console.log(222)
  gsap.to(hTrack.value, {
    x: () => -(totalWidth - window.innerWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: horizontal.value,
      start: 'top top',
      end: `+=${scrollLength}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      markers: true,  // 👈 强烈建议先打开
      onUpdate: (self=>{
        console.log(self.progress)
      })
    }
  })
  gsap.fromTo('.diagonal',
      { x: 0, y: 0 },
      {
        x: -600,
        y: 400,
        scrollTrigger: {
          trigger: '.diagonal',
          start: 'top bottom',
          end: '+=1000',
          scrub: 1,
          markers: true
        }
      }
  )

})

</script>


<style scoped>
.horizontal {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.horizontal-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.scroll-root {
  height: auto;
  overflow-y: auto;
}

.diagonal {
  position: relative;
  transform: translate3d(0, 0, 0);
  height: 100vh;
}
.vertical {
  /* height: 100vh; */
  background: #eee;
}

.pin-section {
  height: 100vh;
}
</style>