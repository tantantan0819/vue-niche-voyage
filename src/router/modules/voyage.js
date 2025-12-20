/**
 * 系统管理路由
 */
export default [
    {
        path: '/voyage',
        name: 'voyage',
        component: () => import('@/layout/voyage.vue'),
        meta: {
            title: '极境之旅',
            icon: 'settings',
            orderNo: 10,
        },
        children: [
            {
                path: 'resource',
                name: 'resource',
                component: () => import('@/views/resource/index.vue'),
                meta: {
                    title: '资源',
                    icon: 'cog',
                },
            },
            {
                path: 'landscape',
                name: 'landscape',
                component: () => import('@/views/landscape/index.vue'),
                meta: {
                    title: 'landscape',
                    icon: 'cog',
                },
            },
            {
                path: 'history',
                name: 'history',
                component: () => import('@/views/history/index.vue'),
                meta: {
                    title: 'history',
                    icon: 'cog',
                },
            },
            {
                path: 'answer',
                name: 'answer',
                component: () => import('@/views/answer/index.vue'),
                meta: {
                    title: 'answer',
                    icon: 'cog',
                },
            },
            {
                path: 'art',
                name: 'art',
                component: () => import('@/views/art/index.vue'),
                meta: {
                    title: 'answer',
                    icon: 'cog',
                },
            },
            {
                path: 'climate',
                name: 'climate',
                component: () => import('@/views/climate/index.vue'),
                meta: {
                    title: 'climate',
                    icon: 'cog',
                },
            },
            {
                path: 'direction',
                name: 'direction',
                component: () => import('@/views/direction/index.vue'),
                meta: {
                    title: 'direction',
                    icon: 'cog',
                },
            },
            {
                path: 'culture',
                name: 'culture',
                component: () => import('@/views/culture/index.vue'),
                meta: {
                    title: 'culture',
                    icon: 'cog',
                },
            },
            {
                path: 'literaryDrama',
                name: 'literaryDrama',
                component: () => import('@/views/literaryDrama/index.vue'),
                meta: {
                    title: 'literaryDrama',
                    icon: 'cog',
                },
            },
        ],
    },
];