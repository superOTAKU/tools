// Composables
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import "nprogress/nprogress.css"
NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
});

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'develop/timestamp',
        name: 'Timestamp',
        component: () => import('@/views/develop/timestamp/index.vue')
      },
      {
        path: 'image/transformer',
        name: 'ImageTransformer',
        component: () => import('@/views/image/transformer/index.vue')
      },
      {
        path: 'develop/crypto',
        name: 'Crypto',
        component: () => import('@/views/develop/crypto/index.vue')
      },
      {
        path: 'develop/uuid',
        name: 'UUID',
        component: () => import('@/views/develop/uuid/index.vue')
      }
    ],
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
