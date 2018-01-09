import axios from 'axios'
import store from '@/vuex/index'
import router from '@/router'
import To_md5 from '@/common/js/md5.js'
import {API_HZ} from '@/api/env.js'
//设置全局axios默认值
axios.defaults.timeout = 100000; //5000的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
//创建一个axios实例
console.log('axios创建实例')
const instance = axios.create();
let token =window.localStorage.getItem('token');
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.interceptors.request.use = instance.interceptors.request.use;

//request拦截器
instance.interceptors.request.use(
    config => {
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.token = token;
        }
        // console.log(config)
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
//respone拦截器
instance.interceptors.response.use(
	
    response => {
        if (response.data.code == 200) {
            return response;
          }
        return Promise.resolve(response)
    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
        if(error.response ===undefined){
            // router.replace({ //跳转到登录页面
            //     path: 'login',
            //     query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            // })
        }
        console.log(`error:${error.message},code:${error.status}`)
        return Promise.reject(error.response.data);
    }
);
export default instance
