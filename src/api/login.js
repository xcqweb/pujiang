import axios from 'axios'
import store from '../vuex/index' 
import router from '../router'
import To_md5 from '@/common/js/md5.js'
import {API_HZ} from './env.js'
//设置全局axios默认值
axios.defaults.timeout = 5000; //5000的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
//创建一个axios实例
const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.interceptors.request.use = instance.interceptors.request.use;

//request拦截器
instance.interceptors.request.use(
    config => {
        let bigheader='bigdata_'+config.params.timestamp;
        config.headers.common['bigdata'] = To_md5(bigheader);
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
        return Promise.reject(response)
    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
        if(error.response){
            // console.log(error)
            switch(error.response.status){
                case 401:
                    store.dispatch('UserLogout'); //可能是token失效，清楚它
                    router.replace({ //跳转到登录页面
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    });
            }
        }
        console.log(error.response.data);
        return Promise.reject(error.response.data);
    }
);

export default {
    //用户注册
    userModifyPass(params){
        return instance.post(API_HZ+'modifyPass', params);
    },
    //用户登录
    userLogin(paramsObj){
        return instance.get(API_HZ+'login', {params:paramsObj}); 
    },
    //获取用户
    getUser(){
        return instance.get(API_HZ+'/api/user');
    },
    //删除用户
    delUser(params){
        return instance.post(API_HZ+'/api/delUser', params);
    }
}