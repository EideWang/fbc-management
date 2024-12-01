import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/machine-management',
      name: 'machineManagement',
      component: () => import('@/views/MachineManagement/Index.vue'),
    },
    {
      path: '/sales-records',
      name: 'salesRecords',
      component: () => import('@/views/SalesRecords/Index.vue'), // 主頁
      children: [
        {
          path: 'detail/:id', // 子頁面: 詳細紀錄 (動態路由)
          name: 'salesDetail',
          component: () => import('@/views/SalesRecords/SalesDetail.vue'),
        },
      ],
    },
    {
      path: '/event-logs',
      name: 'eventLogs',
      component: () => import('@/views/EventLogs/Index.vue'), // 主頁
      children: [
        {
          path: 'detail/:id', // 子頁面: 詳細事件 (動態路由)
          name: 'eventDetail',
          component: () => import('@/views/EventLogs/EventDetail.vue'),
        },
      ],
    },
  ],
})

export default router
