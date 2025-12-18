import { createApp } from 'vue'
import './style.css'
import '../src/assets/styles/common.css'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

// 注册路由
app.use(router)

// 配置并注册图片懒加载插件
app.use(VueLazyload, {
  preLoad: 1.3,
  error: '/error.png', // 错误占位图
  loading: '/loading.png', // 加载占位图
  attempt: 1,
  // 支持高分辨率屏幕
  highQualityPrefix: 'high-',
  // 配置响应式图片
  observerOptions: {
    rootMargin: '0px 0px 50px 0px',
    threshold: 0.1
  }
})

app.mount('#app')
