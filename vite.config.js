import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import viteImagemin from 'vite-plugin-imagemin' // 已禁用：图片文件夹有814MB，524张图片，压缩会导致构建卡住
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    // 图片压缩已禁用：图片文件夹有814MB，524张图片，压缩会导致构建非常慢甚至卡住
    // 建议在开发前使用专业工具（如 ImageOptim、TinyPNG、Squoosh）预先优化图片
    // 如果需要启用，可以取消下面的注释，但建议降低压缩级别（optimizationLevel: 3, speed: 1）
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 7, // gif 压缩级别
    //     interlaced: false
    //   },
    //   optipng: {
    //     optimizationLevel: 7 // png 压缩级别
    //   },
    //   mozjpeg: {
    //     quality: 80, // jpg 质量（0-100，数值越小体积越小）
    //     progressive: true
    //   },
    //   pngquant: {
    //     quality: [0.7, 0.8], // png 质量范围
    //     speed: 4
    //   },
    //   svgo: {
    //     plugins: [
    //       { name: 'removeViewBox' },
    //       { name: 'removeEmptyAttrs', active: false }
    //     ]
    //   }
    // })
  ],
  // 静态资源处理：大文件不打包进 bundle，改为外部引用
  assetsInclude: ['**/*.mp4', '**/*.webm'],
  build: {
    // 代码分割：把第三方库和业务代码分开
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
        // 分割大 chunk
        manualChunks(id) {
          // node_modules 单独打包
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    },
    // 资源阈值：超过 4KB 的资源不内联，改为单独文件
    assetsInlineLimit: 4096,
    // 压缩：开启生产环境压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除 console
        drop_debugger: true // 移除 debugger
      }
    }
  },
  // 路径别名（可选，辅助开发）
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})