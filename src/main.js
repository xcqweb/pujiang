// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/index.js'
import sheet from './common/js/until.js'
import Rw from '@/common/js/until/index'
import api from '@/api/index.js'
import Loading from '@/components/commonui/loading/loading.vue'

import {API_HZ} from '@/api/env'

api.params.code = this.code; 
api.getProductData(api.params).then( (re) =>{
 }).catch( (e) => {
	console.log(e);
})
			

window.axios = axios; 
Vue.prototype.$axios = axios; 
window.api = api; 
window.$sheet=sheet;
window.Loading=Loading;
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
