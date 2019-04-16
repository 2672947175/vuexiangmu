import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/Car',
      name: 'Car',
      component: () => import('./views/Car.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/list.vue')
    },
    {
      path: '/Im',
      name: 'Im',
      component: () => import('./views/Im.vue')
    }
    
  ]
})
