import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shujia',
      component: ()=>import('./views/Shujia.vue')
    },
    {
      path: '/shucheng',
      name: 'shucheng',
      component: () => import('./views/Shucheng.vue')
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: () => import('./views/Fenlei.vue')
    },
    {
      path: '/ime',
      name: 'ime',
      component: () => import('./views/Ime.vue')
    }
  ]
})
