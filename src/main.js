import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueQuillEditor)


// 全局配置
axios.defaults.baseURL = 'https://wd8910585934yneopr.wilddogio.com'

const router = new VueRouter({
  routes:Routes,
  // mode:'history'
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
