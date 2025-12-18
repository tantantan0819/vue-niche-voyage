<template>
  <div class="system-logs">
    <div class="page-title">系统日志</div>
    <div class="log-filter">
      <input type="text" class="search-input" v-model="searchKeyword" placeholder="搜索日志...">
      <select class="log-level-select" v-model="selectedLevel">
        <option value="">全部级别</option>
        <option value="info">信息</option>
        <option value="warning">警告</option>
        <option value="error">错误</option>
        <option value="debug">调试</option>
      </select>
      <button class="btn btn-primary" @click="refreshLogs">刷新</button>
    </div>
    <div class="log-table-wrapper">
      <table class="log-table">
        <thead>
          <tr>
            <th>时间</th>
            <th>级别</th>
            <th>模块</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="log in filteredLogs" :key="log.id" :class="`log-level-${log.level}`">
            <td>{{ formatDate(log.timestamp) }}</td>
            <td>
              <span class="level-badge" :class="`level-${log.level}`">
                {{ getLevelText(log.level) }}
              </span>
            </td>
            <td>{{ log.module }}</td>
            <td class="log-message">{{ log.message }}</td>
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
import { ref, computed, onMounted } from 'vue';

// 日志数据（模拟）
const logs = ref([
  { id: 1, timestamp: Date.now() - 3600000, level: 'info', module: 'system', message: '系统启动成功' },
  { id: 2, timestamp: Date.now() - 3000000, level: 'info', module: 'user', message: '用户访问首页' },
  { id: 3, timestamp: Date.now() - 2400000, level: 'warning', module: 'database', message: '数据库连接池警告' },
  { id: 4, timestamp: Date.now() - 1800000, level: 'error', module: 'api', message: 'API请求失败: 网络错误' },
  { id: 5, timestamp: Date.now() - 1200000, level: 'debug', module: 'auth', message: '验证令牌解析成功' },
  { id: 6, timestamp: Date.now() - 600000, level: 'info', module: 'system', message: '配置更新成功' },
  { id: 7, timestamp: Date.now() - 300000, level: 'info', module: 'user', message: '用户查看系统配置' },
  { id: 8, timestamp: Date.now() - 180000, level: 'warning', module: 'memory', message: '内存使用率超过80%' },
]);

// 搜索和筛选
const searchKeyword = ref('');
const selectedLevel = ref('');
const currentPage = ref(1);
const pageSize = 10;

// 计算过滤后的日志
const filteredLogs = computed(() => {
  let result = [...logs.value];
  
  // 按关键词搜索
  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase();
    result = result.filter(log => 
      log.message.toLowerCase().includes(keyword) || 
      log.module.toLowerCase().includes(keyword)
    );
  }
  
  // 按级别筛选
  if (selectedLevel.value) {
    result = result.filter(log => log.level === selectedLevel.value);
  }
  
  // 分页
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  return result.slice(startIndex, endIndex);
});

// 计算总页数
const totalPages = computed(() => {
  let result = [...logs.value];
  
  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase();
    result = result.filter(log => 
      log.message.toLowerCase().includes(keyword) || 
      log.module.toLowerCase().includes(keyword)
    );
  }
  
  if (selectedLevel.value) {
    result = result.filter(log => log.level === selectedLevel.value);
  }
  
  return Math.ceil(result.length / pageSize);
});

// 格式化日期
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

// 获取级别文本
const getLevelText = (level) => {
  const levelMap = {
    info: '信息',
    warning: '警告',
    error: '错误',
    debug: '调试'
  };
  return levelMap[level] || level;
};

// 刷新日志
const refreshLogs = () => {
  console.log('刷新日志列表');
  // 这里可以添加刷新日志的API调用逻辑
  currentPage.value = 1;
};

onMounted(() => {
  console.log('系统日志页面加载');
});
</script>

<style scoped>
.system-logs {
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

.log-filter {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  align-items: center;
}

.search-input {
  flex: 1;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}

.log-level-select {
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  min-width: 120px;
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

.btn-default:hover:not(:disabled) {
  background-color: #e5e7eb;
}

.btn-default:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.log-table-wrapper {
  overflow-x: auto;
  margin-bottom: 20px;
}

.log-table {
  width: 100%;
  border-collapse: collapse;
}

.log-table th,
.log-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.log-table th {
  background-color: #f9fafb;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.log-table td {
  font-size: 14px;
  color: #4b5563;
}

.level-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.level-info {
  background-color: #dbeafe;
  color: #1e40af;
}

.level-warning {
  background-color: #fef3c7;
  color: #92400e;
}

.level-error {
  background-color: #fee2e2;
  color: #991b1b;
}

.level-debug {
  background-color: #e0e7ff;
  color: #4338ca;
}

.log-message {
  max-width: 400px;
  word-break: break-word;
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