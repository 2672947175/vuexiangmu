import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 获取vuex
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  // 设置vuex
  store,
  render: h => h(App)
}).$mount('#app')
