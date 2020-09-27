import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            hidden: true,
            title: '首页',
        },
    },
    {
        path: '/TaskOverview',
        name: 'TaskOverview',
        component: () => import('@/views/TaskOverview/TaskOverview.vue'),
        meta: {
            title: '任务概览',
        },
    },
    {
        path: '/JobDevelopment',
        name: 'JobDevelopment',
        component: () => import('@/views/JobDevelopment/JobDevelopment.vue'),
        meta: {
            title: '作业开发',
        },
        children: [
            {
                path: 'JobDeveloent',
                name: 'JobDeveloent',
                component: () => import('@/views/JobDevelopment/JobDevelopment.vue'),
                meta: {
                    title: 'option 1',
                },
                children: [
                    {
                        path: 'test',
                        name: 'test',
                        component: () => import('@/views/JobDevelopment/JobDevelopment.vue'),
                        meta: {
                            title: 'option test 1',
                        },
                    },
                ],
            },
            {
                path: 'JobDeveloen',
                name: 'JobDeveloen',
                component: () => import('@/views/JobDevelopment/JobDevelopment.vue'),
                meta: {
                    title: 'option 2',
                },
                children: [
                    {
                        path: 'tes--t',
                        name: 'tes--t',
                        component: () => import('@/views/JobDevelopment/JobDevelopment.vue'),
                        meta: {
                            title: 'option test 2-1',
                        },
                    },
                ],
            },
            {
                path: 'JobDeveen',
                name: 'JobDeveen',
                component: () => import('@/views/JobDevelopment/JobDevelopment.vue'),
                meta: {
                    title: 'option 3',
                },
            },
        ],
    },
    {
        path: '/SystemManagement',
        name: 'SystemManagement',
        component: () => import('@/views/SystemManagement/SystemManagement.vue'),
        meta: {
            title: '系统管理',
        },
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
