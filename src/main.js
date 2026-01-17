import { createApp } from 'vue'
import './style.css'
import '../src/assets/styles/common.css'
import App from './App.vue'
import router from './router'
import lazyLoad from 'vue3-lazyload'
const app = createApp(App)

// 注册路由
app.use(router)
// 注册插件 + 核心配置（重点是observerOptions.rootMargin实现提前加载）
app.use(lazyLoad, {
  observerOptions: {
    rootMargin: '300% 1000%', // 核心！垂直方向提前1倍屏高，水平方向提前10倍屏宽加载
    threshold: 0
  },
  log: false, // 关闭日志，避免控制台冗余输出
  loading: '', // 可选：设置加载中占位图
  error: '' // 可选：设置加载失败占位图
})

app.mount('#app')
