<template>
  <div class="system-config">
    <div class="page-title">系统配置</div>
    <div class="config-form">
      <div class="form-group">
        <label class="form-label">系统名称</label>
        <input type="text" class="form-input" v-model="systemName" placeholder="请输入系统名称">
      </div>
      <div class="form-group">
        <label class="form-label">系统版本</label>
        <input type="text" class="form-input" v-model="systemVersion" placeholder="请输入系统版本">
      </div>
      <div class="form-group">
        <label class="form-label">API地址</label>
        <input type="text" class="form-input" v-model="apiBaseUrl" placeholder="请输入API地址">
      </div>
      <div class="form-group">
        <label class="form-label">缓存时间（分钟）</label>
        <input type="number" class="form-input" v-model.number="cacheTime" placeholder="请输入缓存时间">
      </div>
      <div class="form-group">
        <label class="form-label">调试模式</label>
        <label class="switch">
          <input type="checkbox" v-model="debugMode">
          <span class="slider"></span>
        </label>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" @click="saveConfig">保存配置</button>
        <button class="btn btn-default" @click="resetConfig">重置</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 系统配置数据
const systemName = ref('Niche Voyage');
const systemVersion = ref('1.0.0');
const apiBaseUrl = ref('https://api.example.com');
const cacheTime = ref(30);
const debugMode = ref(false);

// 保存配置
const saveConfig = () => {
  const config = {
    systemName: systemName.value,
    systemVersion: systemVersion.value,
    apiBaseUrl: apiBaseUrl.value,
    cacheTime: cacheTime.value,
    debugMode: debugMode.value
  };
  
  console.log('保存配置:', config);
  // 这里可以添加保存配置的API调用逻辑
  alert('配置保存成功！');
};

// 重置配置
const resetConfig = () => {
  systemName.value = 'Niche Voyage';
  systemVersion.value = '1.0.0';
  apiBaseUrl.value = 'https://api.example.com';
  cacheTime.value = 30;
  debugMode.value = false;
};
</script>

<style scoped>
.system-config {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
}

.config-form {
  max-width: 600px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e5e7eb;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #3b82f6;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.form-actions {
  margin-top: 30px;
  display: flex;
  gap: 12px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.btn-default {
  background-color: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}

.btn-default:hover {
  background-color: #e5e7eb;
}
</style>