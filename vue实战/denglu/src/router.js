import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/shou',
      name: 'shou',
      component: () => import('./views/Shou.vue')
    },
    {
      path: '/',
      name: 'libiao',
      component: () => import('./views/libiao.vue')
    },
    {
      path: '/xiang',
      name: 'xiang',
      component: () => import('./views/xiangqing.vue')
    },
    {
      path: '/duihuang',
      name: 'duihuang',
      component: ()=>import('./views/Duihuang.vue')
    }
  ]
})
