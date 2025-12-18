<template>
  <div class="error-page">
    <div class="error-content">
      <div class="error-code">404</div>
      <div class="error-title">页面不存在</div>
      <div class="error-message">抱歉，您访问的页面不存在或已被移除</div>
      <router-link to="/" class="back-home-btn">返回首页</router-link>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.error-content {
  text-align: center;
  max-width: 500px;
  padding: 40px;
  border-radius: 8px;
}

.error-code {
  font-size: 120px;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 20px;
  line-height: 1;
}

.error-title {
  font-size: 28px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
}

.error-message {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 32px;
  line-height: 1.5;
}

.back-home-btn {
  display: inline-block;
  padding: 10px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.back-home-btn:hover {
  background: #2563eb;
}
</style>