<template>
  <div class="user-profile">
    <div class="page-title">个人信息</div>
    <div class="profile-content">
      <div class="profile-header">
        <div class="avatar">
          <div class="avatar-circle">{{ user.name.charAt(0).toUpperCase() }}</div>
        </div>
        <div class="user-basic-info">
          <h3>{{ user.name }}</h3>
          <p class="user-role">{{ user.role }}</p>
          <p class="user-email">{{ user.email }}</p>
        </div>
      </div>
      
      <div class="profile-section">
        <h4 class="section-title">基本信息</h4>
        <div class="info-grid">
          <div class="info-item">
            <label>用户名</label>
            <span>{{ user.username }}</span>
          </div>
          <div class="info-item">
            <label>姓名</label>
            <span>{{ user.name }}</span>
          </div>
          <div class="info-item">
            <label>邮箱</label>
            <span>{{ user.email }}</span>
          </div>
          <div class="info-item">
            <label>电话</label>
            <span>{{ user.phone || '未设置' }}</span>
          </div>
          <div class="info-item">
            <label>部门</label>
            <span>{{ user.department || '未设置' }}</span>
          </div>
          <div class="info-item">
            <label>职位</label>
            <span>{{ user.position || '未设置' }}</span>
          </div>
          <div class="info-item">
            <label>注册时间</label>
            <span>{{ formatDate(user.createdAt) }}</span>
          </div>
          <div class="info-item">
            <label>最后登录</label>
            <span>{{ formatDate(user.lastLoginAt) }}</span>
          </div>
        </div>
      </div>
      
      <div class="profile-actions">
        <button class="btn btn-primary" @click="editProfile">编辑资料</button>
        <button class="btn btn-default" @click="changePassword">修改密码</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 用户信息（模拟）
const user = ref({
  id: 1,
  username: 'admin',
  name: '管理员',
  email: 'admin@example.com',
  phone: '13800138000',
  role: '管理员',
  department: '技术部',
  position: '系统管理员',
  createdAt: Date.now() - 30 * 24 * 60 * 60 * 1000,
  lastLoginAt: Date.now() - 2 * 24 * 60 * 60 * 1000
});

// 格式化日期
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// 编辑资料
const editProfile = () => {
  console.log('编辑个人资料');
  alert('编辑资料功能待实现');
};

// 修改密码
const changePassword = () => {
  console.log('修改密码');
  alert('修改密码功能待实现');
};
</script>

<style scoped>
.user-profile {
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

.profile-content {
  max-width: 800px;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
}

.avatar {
  margin-right: 24px;
}

.avatar-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
}

.user-basic-info h3 {
  margin: 0 0 8px 0;
  font-size: 24px;
  color: #111827;
}

.user-role,
.user-email {
  margin: 4px 0;
  color: #6b7280;
  font-size: 14px;
}

.user-role {
  font-weight: 500;
  color: #3b82f6;
}

.profile-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 16px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.info-item {
  padding: 12px;
  background: #f9fafb;
  border-radius: 6px;
}

.info-item label {
  display: block;
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 4px;
}

.info-item span {
  font-size: 14px;
  color: #374151;
  font-weight: 500;
}

.profile-actions {
  display: flex;
  gap: 12px;
  margin-top: 32px;
}

.btn {
  padding: 10px 20px;
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