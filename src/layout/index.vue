<template>
  <div class="layout-container">
    <aside class="sidebar">
      <div class="logo">
        <h2>Niche Voyage</h2>
      </div>
      <nav class="menu">
        <router-link 
          v-for="route in routes" 
          :key="route.path"
          :to="route.path"
          class="menu-item"
          active-class="active"
        >
          <span class="menu-icon">{{ route.meta?.icon || '📄' }}</span>
          <span class="menu-text">{{ route.meta?.title || route.name }}</span>
        </router-link>
      </nav>
    </aside>
    <main class="main-content">
      <header class="header">
        <div class="header-title">{{ currentRoute.meta?.title || '首页' }}</div>
      </header>
      <div class="content-wrapper">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const routes = ref([]);

// 获取当前路由
const currentRoute = computed(() => route);

onMounted(() => {
  // 获取所有路由并过滤出需要显示在侧边栏的路由
  const allRoutes = router.getRoutes();
  routes.value = allRoutes.filter(item => 
    item.meta && !item.meta.hideMenu && item.path !== '/' && !item.children
  );
});
</script>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.sidebar {
  width: 240px;
  background: #1f2937;
  color: white;
  display: flex;
  flex-direction: column;
}

.logo {
  padding: 20px;
  border-bottom: 1px solid #374151;
  text-align: center;
}

.logo h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.menu {
  flex: 1;
  padding: 20px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.3s;
  gap: 12px;
}

.menu-item:hover {
  background: #374151;
  color: white;
}

.menu-item.active {
  background: #3b82f6;
  color: white;
}

.menu-icon {
  font-size: 18px;
}

.menu-text {
  font-size: 14px;
  font-weight: 500;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f9fafb;
}

.header {
  background: white;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.header-title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
}

.content-wrapper {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>