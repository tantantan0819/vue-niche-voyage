<template>
  <div class="user-list">
    <div class="page-title">用户列表</div>
    <div class="list-header">
      <div class="search-box">
        <input type="text" class="search-input" v-model="searchKeyword" placeholder="搜索用户名...">
        <button class="btn btn-primary" @click="searchUser">搜索</button>
      </div>
      <button class="btn btn-primary" @click="addUser">新增用户</button>
    </div>
    <div class="table-wrapper">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>邮箱</th>
            <th>角色</th>
            <th>状态</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <span class="status-badge" :class="user.status ? 'status-active' : 'status-inactive'">
                {{ user.status ? '启用' : '禁用' }}
              </span>
            </td>
            <td>{{ formatDate(user.createdAt) }}</td>
            <td>
              <button class="btn btn-small btn-default" @click="editUser(user)">编辑</button>
              <button class="btn btn-small btn-danger" @click="deleteUser(user.id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination" v-if="totalPages > 1">
      <button class="btn btn-default" @click="currentPage = 1" :disabled="currentPage === 1">首页</button>
      <button class="btn btn-default" @click="currentPage--" :disabled="currentPage === 1">上一页</button>
      <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
      <button class="btn btn-default" @click="currentPage++" :disabled="currentPage === totalPages">下一页</button>
      <button class="btn btn-default" @click="currentPage = totalPages" :disabled="currentPage === totalPages">末页</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 用户数据（模拟）
const users = ref([
  { id: 1, username: 'admin', email: 'admin@example.com', role: '管理员', status: true, createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000 },
  { id: 2, username: 'user1', email: 'user1@example.com', role: '普通用户', status: true, createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000 },
  { id: 3, username: 'user2', email: 'user2@example.com', role: '普通用户', status: false, createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000 },
  { id: 4, username: 'user3', email: 'user3@example.com', role: '普通用户', status: true, createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000 },
  { id: 5, username: 'user4', email: 'user4@example.com', role: '普通用户', status: true, createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000 },
]);

// 搜索和分页
const searchKeyword = ref('');
const currentPage = ref(1);
const pageSize = 10;

// 计算过滤后的用户列表
const filteredUsers = computed(() => {
  let result = [...users.value];
  
  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase();
    result = result.filter(user => 
      user.username.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword)
    );
  }
  
  return result;
});

// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(filteredUsers.value.length / pageSize);
});

// 格式化日期
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('zh-CN');
};

// 搜索用户
const searchUser = () => {
  currentPage.value = 1;
  console.log('搜索用户:', searchKeyword.value);
};

// 添加用户
const addUser = () => {
  console.log('添加用户');
  // 这里可以打开添加用户的对话框或跳转到添加用户页面
  alert('添加用户功能待实现');
};

// 编辑用户
const editUser = (user) => {
  console.log('编辑用户:', user);
  // 这里可以打开编辑用户的对话框
  alert(`编辑用户: ${user.username}`);
};

// 删除用户
const deleteUser = (userId) => {
  if (confirm('确定要删除这个用户吗？')) {
    console.log('删除用户:', userId);
    // 这里可以添加删除用户的API调用逻辑
    users.value = users.value.filter(user => user.id !== userId);
  }
};
</script>

<style scoped>
.user-list {
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

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-box {
  display: flex;
  gap: 8px;
  flex: 1;
  max-width: 400px;
}

.search-input {
  flex: 1;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
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

.btn-danger {
  background-color: #ef4444;
  color: white;
}

.btn-danger:hover {
  background-color: #dc2626;
}

.btn-small {
  padding: 4px 8px;
  font-size: 12px;
  margin-right: 4px;
}

.table-wrapper {
  overflow-x: auto;
  margin-bottom: 20px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.data-table th {
  background-color: #f9fafb;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.data-table td {
  font-size: 14px;
  color: #4b5563;
}

.status-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.status-active {
  background-color: #d1fae5;
  color: #065f46;
}

.status-inactive {
  background-color: #fee2e2;
  color: #991b1b;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.page-info {
  padding: 0 12px;
  color: #6b7280;
}
</style>