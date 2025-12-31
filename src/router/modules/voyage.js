/**
 * 极境之旅路由
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
                path: 'unopen',
                name: 'unopen',
                component: () => import('@/views/answer/unopen.vue'),
                meta: {
                    title: 'unopen',
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
                path: 'literaryDrama',
                name: 'literaryDrama',
                component: () => import('@/views/history/vertical/literaryDrama/index.vue'),
                meta: {
                    title: 'literaryDrama',
                    icon: 'cog',
                },
            },
            {
                path: 'newChina',
                name: 'newChina',
                component: () => import('@/views/history/horizontal/newChina/index.vue'),
                meta: {
                    title: 'newChina',
                    icon: 'cog',
                },
            },
            {
                path: 'folkways',
                name: 'folkways',
                component: () => import('@/views/history/vertical/folkways/index.vue'),
                meta: {
                    title: 'folkways',
                    icon: 'cog',
                },
            },
            {
                path: 'horizontal',
                name: 'horizontal',
                component: () => import('@/views/history/horizontal/index.vue'),
                meta: {
                    title: 'horizontal',
                    icon: 'cog',
                },
            },
            {
                path: 'vertical',
                name: 'vertical',
                component: () => import('@/views/history/vertical/index.vue'),
                meta: {
                    title: 'vertical',
                    icon: 'cog',
                },
            },
        ],
    },
];