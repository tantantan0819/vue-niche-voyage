// 导入各个路由模块
const modules = import.meta.glob('./**/*.js', { eager: true });

// 常量路由（无需权限即可访问的路由）
export const constantRoutes = [
  {
    path: '/',
    redirect: '/voyage/history',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'home',
      affix: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '页面不存在',
      hideMenu: true,
    },
  },
];

// 异步路由（根据用户权限动态加载的路由）
export const asyncRoutes = [];

// 自动导入路由模块
function importModules() {
  Object.keys(modules).forEach((key) => {
    if (key.includes('/modules/index.js')) return;
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    modList.forEach((route) => {
      if (route) {
        // 这里可以根据需要将路由添加到constantRoutes或asyncRoutes
        asyncRoutes.push(route);
      }
    });
  });
}

// 执行导入
importModules();