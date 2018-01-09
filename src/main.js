// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/index.js'
import sheet from './common/js/until.js'
import Toast from './components/commonui/toast/index.js'
import loading from './components/commonui/loading/index.js'
import Rw from '@/common/js/until/index'
//自适应字体
//import '@/common/js/rem.js'
Vue.directive('echarts', require('./common/js/directives/vDirechartsE.js'));
Vue.prototype.$axios = axios; 
window.$sheet=sheet;
window.Rw = Rw;
Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
