import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 导入组件库
import XYUI from '../packages'
// 注册组件库
Vue.use(XYUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
