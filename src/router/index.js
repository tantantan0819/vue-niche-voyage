import { createRouter, createWebHistory } from 'vue-router';
import { asyncRoutes, constantRoutes } from './modules/index';

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...constantRoutes, ...asyncRoutes],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 重置路由
export function resetRouter() {
  const newRouter = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [],
  });
  router.matcher = newRouter.matcher;
}

export default router;