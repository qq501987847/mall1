import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
Vue.config.productionTip = false
import showToast from './view/common/Toast'
Vue.use(showToast)
import VConsole from 'vconsole'
const vConsole = new VConsole()
Vue.use(vConsole)
// console.warn("vconsole-info-测试")



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export function rewirteLog() {
  console.log = (function (log) {
      return process.env.NODE_ENV == 'development'? log : function() {}
  }(console.log))
}
rewirteLog()