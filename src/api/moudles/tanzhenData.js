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
    	
          return instance.post(`http://114.55.237.138/pj/api/user/login`, params);
//      return instance.post(`https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example/login`, params);
    },
    //总览历史客流
    passenger:function(paramsObj){
        return instance.post(`http://114.55.237.138/pj/api/zl/geHistoryDayData`,paramsObj);
    },
    
     //产业监测历史客流
    passengers:function(paramsObj){
        return instance.post(`http://114.55.237.138/pj/api/cyjc/geHistoryDayData`,paramsObj);
    },
    //实时客流量
    timeline:function(paramsObj){
        //return instance.get(`https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example/timeline`, {params:paramsObj});
        return instance.post(`http://114.55.237.138/pj/api/cyjc/getPassengerCount`, paramsObj);
    },
    //概况
    profile:function(paramsObj){
        return instance.post(`http://114.55.237.138/pj/api/zl/getScenicGereral`, paramsObj);
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
