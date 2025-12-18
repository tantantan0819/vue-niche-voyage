/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 响应式断点扩展
      screens: {
        'xs': '360px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      // 字体配置
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // 安全区域配置
      padding: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [],
}