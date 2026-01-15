import { createApp } from 'vue'
import './style.css'
import '../src/assets/styles/common.css'
import App from './App.vue'
import router from './router'
import lazyLoad from 'vue3-lazyload'
const app = createApp(App)

// 注册路由
app.use(router)
// 注册插件 + 核心配置（重点是preLoad和背景图修饰符）
app.use(lazyLoad, {
  preLoad: 1.5, // 核心！提前1.5倍屏高加载（用户滚动到前就加载完）
  silent: true, // 关闭日志，避免控制台冗余输出
  // 自定义修饰符：专门处理背景图（关键适配你的CSS背景图场景）
  modifier: {
    bg: {
      bind(el, binding) {
        // 把背景图URL存到元素的data-bg属性里
        el.setAttribute('data-bg', binding.value)
      },
      update(el, binding) {
        el.setAttribute('data-bg', binding.value)
      }
    }
  }
})

app.mount('#app')
