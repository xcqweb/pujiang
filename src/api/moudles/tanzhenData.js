import instance from '@/api/instance'
import {API_HZ} from '../env.js'
//
     function commitapi(){
        return instance.get(API_HZ+'login', {params:paramsObj});
    }
export default {
    //可在组件处调用api请求，
    //登录
    userLogin:function(params){
          return instance.post(`http://210.75.20.143:5068/api/login`, params);
//      return instance.post(`https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example/login`, params);
    },
    //客流人数监测
    passenger:function(paramsObj){
    	
        return instance.get(`https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example/passenger`, {params:paramsObj});
        //return instance.get(`http://120.55.190.57/api/passenger.auth`, {params:paramsObj});
    },
    //实时客流量
    timeline:function(paramsObj){
        //return instance.get(`http://120.55.190.57/api/timeline.auth`, {params:paramsObj});
        return instance.get(`https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example/timeline`, {params:paramsObj});
    },
    //概况
    profile:function(paramsObj){
        return instance.get(`https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example/profile`, {params:paramsObj});
        //return instance.get(`http://120.55.190.57/api/profile.auth`, {params:paramsObj});
    },
    //客流预警
    passengerwarning:function(paramsObj){
    	
        //return instance.get(`http://120.55.190.57/api/passengerwarning.auth`, {params:paramsObj});
        return instance.get(`https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example/passengerwarning`, {params:paramsObj});
    },
    //游客热力图
    passengertg:function(paramsObj){
        return instance.get(`http://rap2api.taobao.org/app/mock/508/GET/passengertg`, {params:paramsObj});
    },
    //景区热力图
    turisttg:function(paramsObj){
        return instance.get(`http://rap2api.taobao.org/app/mock/508/GET/turisttg`, {params:paramsObj});
    },
    //在组件处调用this.state.$dispath('') 调用action
    //tanzhen_api.getnews(function(res){
    //   commit('GET_ALL_TIMELINE',{res})
    //})
    // getnews:function(cb){
    //     commitapi.then(function(data){
    //         cb(data.data.result.data)
    //     })
    // },

}
