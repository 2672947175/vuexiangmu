import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import store from "./store";

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
