// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill' //es6
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/index.js'
import sheet from './common/js/until.js'
import Rw from '@/common/js/until/index'
import api from '@/api/index' //接口对象
import Loading from '@/components/commonui/loading/loading.vue'
import {API_HZ} from '@/api/env'
import rem from '@/common/js/rem'
import clickOutside from '@/common/js/directives/clickOutside'
Vue.directive('clickOutside',clickOutside) //点击区域外隐藏




window.axios = axios; 
Vue.prototype.$axios = axios; 
window.api = api; 
window.$sheet=sheet;
window.Loading=Loading;
window.Rw = Rw;
Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
