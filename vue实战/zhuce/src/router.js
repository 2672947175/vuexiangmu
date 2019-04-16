import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shu',
      name: 'shu',
      component: ()=>import('./views/Shu.vue')
    },
    {
      path: '/action',
      name: 'action',
      component: ()=>import('./views/Actions.vue')
    },
      {
        path: '/form',
        name: 'form',
      component: () => import('./views/Form.vue')
    }
  ]
})
