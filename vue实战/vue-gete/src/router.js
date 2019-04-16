import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue')
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/Car.vue')
    },
    {
      path: '/profile/:jis',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      // 一定要写到最后 路由重定向 全局插找
      path:'/*',
      // 重定向 redirect: "路径"
      redirect:'/'
    }
  ]
})
