import axios from 'axios'
import store from '../vuex/store' 
import router from '../router'
import {API_HZ} from './env.js'
import crypto from'crypto'
const Md5 = crypto.createHash('md5');
//设置全局axios默认值
axios.defaults.timeout = 5000; //5000的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.common
//创建一个axios实例
const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use = instance.interceptors.request.use;

//request拦截器
instance.interceptors.request.use(
    config => {
        console.log(store.state)
        if(store.state.token){
            config.headers.Authorization = `token ${store.state.token}`;
        }
        console.log('request拦截');
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
//respone拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
        if(error.response){
            switch(error.response.status){
                case 401:
                    store.dispatch('UserLogout'); //可能是token失效，清楚它
                    router.replace({ //跳转到登录页面
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    });
            }
        }
        return Promise.reject(error.response.data);
    }
);

export default {
    //用户注册
    userModifyPass(params){
        return instance.post(API_HZ+'modifyPass', params);
    },
    //用户登录
    userLogin(params){
        return instance.get(API_HZ+'login', params); 
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