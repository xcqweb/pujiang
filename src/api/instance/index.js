import axios from 'axios'
import store from '@/vuex/index'
import router from '@/router'
import To_md5 from '@/common/js/md5.js'
import {API_HZ} from '@/api/env.js'
import {setCookie,getCookie} from '@/common/js/cookie/cookie.js'
//设置全局axios默认值
axios.defaults.timeout = 100000; //5000的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//创建一个axios实例
const instance = axios.create();
let token = getCookie('token');
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.interceptors.request.use = instance.interceptors.request.use;

//request拦截器
instance.interceptors.request.use(
    config => {
    	
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            // config.headers.token = token;
             //config.headers.timeStamp = new Date().getTime();
             //config.data={
	    	//	code:6
	    	//	}
        }
                 //console.log(config)
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
//respone拦截器
instance.interceptors.response.use(
	
    response => {
      	//console.log(response)
        if (response.data.code == 200 || response.data.code == '200') {
            return response;
            //拦截景区预警人数设置
          }else if(response.data.code===201 || response.data.code==='201'){
          	alert(response.data.message)
          }else if(response.data.code===-1 || response.data.code==='-1'){
          	router.replace({ //跳转到登录页面
                 path: 'login',
                  query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
               })
          }
        
    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
        if(error.response ===-1){
//             router.replace({ //跳转到登录页面
//                 path: 'login',
//                 query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//             })
        }
         	// console.log(`error:${error.message},code:${error.status}`)
        return Promise.reject(error.response.data);
    }
);
export default instance

