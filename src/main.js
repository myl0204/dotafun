import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './common/scss/variables.scss'
import Axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = Axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
