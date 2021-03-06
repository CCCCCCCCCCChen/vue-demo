import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入ivew
import iView from 'iview' // 导入组件库
import 'iview/dist/styles/iview.css' // 导入样式
Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
