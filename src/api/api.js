//import axios from 'axios';
import axios from '@/api/instance'
import {setCookie,getCookie} from '@/common/js/cookie/cookie.js'
//export {params} from '@/common/js/gtime.js';

export var params={};
let timeStamp = new Date().getTime()+'';
//if(window.navigator.userAgent.indexOf("MSIE") >= -1){ 
//	alert("not ie"); 
//转换post 请求参数
function tansParm(data){
	var params = new FormData();
        params.append('token', getCookie('token'));
    	params.append('code', data.code);
        params.append('timeStamp',timeStamp);
        if(data.range){
        	 params.append('range',data.range);
        }
       
    return params;
}
	
//}else{ 
//	alert("ie"); 
	
//}





    


//模拟数据公共地址
let base1 = 'https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example';

let base = 'http://114.55.237.138/pj/api'

export const requestLogin = params => { return axios.post(`${base1}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.post(`${base1}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.post(`${base1}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.post(`${base1}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.post(`${base1}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.post(`${base1}/user/edit`, { params: params }); };

export const addUser = params => { return axios.post(`${base1}/user/add`, { params: params }); };







//拥堵指数
export const congestion = params => { return axios.get(`${base1}/congestion`,{params:params});};
//天气
export const weather = params => { return axios.get(`${base1}/weather`,{params:params});};
//富民指数
export const richNum = params => { return axios.post(`${base}/cyjc/getRickIndexMark`,tansParm(params));};
//游客来源地排行榜
export const originList = params => { return axios.post(`${base1}/originList`,tansParm(params));};
//营销推广
export const marketing = params => { return axios.post(`${base}/jzyx/getFensFocus`,tansParm(params));};
//客流总数，经济分析，富民指数
export const topThree = params => { return axios.post(`${base1}/topThree`,{ params: params });};
//游客满意度
export const touristSatisfaction = params => { return axios.post(`${base1}/touristSatisfaction`,{ params: params });};



//游客来源地
export const touristOrigin = params => { return axios.post(`${base1}/touristOrigin`,tansParm(params));};

export const touristSum = params => {return axios.post(`${base}/cyjc/getTouristCity`,tansParm(params))}


//旅游营业分析
export const tourBusiness = params => { return axios.post(`${base1}/tourBusiness`,tansParm(params));};



//出行方式
export const tripMode = params => { return axios.post(`${base}/jzyx/getTravelWay`,tansParm(params));};
//年龄分析
export const ageAnalyse = params => { return axios.post(`${base}/jzyx/getAgeAnalysis`,tansParm(params));};
//游客关注点
export const touristFocus = params => { return axios.post(`${base}/jzyx/getTouristFocus`,tansParm(params));};
//消费偏好
export const touristAttr = params => { return axios.post(`${base}/jzyx/getTouristAttr`,tansParm(params));};
//游客男女比率
export const touristSexRatio = params => { return axios.post(`${base}/jzyx/getSexAnalysis`,tansParm(params));};
//游客来源城市
export const touristOriginsource = params => { return axios.post(`${base}/jzyx/getTouristCity`,tansParm(params));};
//浦江县客流热地图
export const thermalMap  = params => { return axios.post(`${base1}/thermalMap`,tansParm(params));};
//景区排行榜
export const scenicRanking  = params => { return axios.post(`${base}/jzyx/getTouristTop`,tansParm(params));};
//游客来源排行
export const touristOriginRanking  = params => { return axios.post(`${base}/jzyx/getTouristProvince`,tansParm(params));};

//景区当前客流
//export const currentTourist  = params => { return axios.post(`${base}/yjzh/getPassengerCount`,tansParm(params));};
export const currentTourist  = params => { return axios.post(`${base}/zl/getScenicGereral`,tansParm(params));};

//拥堵指数
export const scenicCongestion  = params => { return axios.get(`${base1}/scenicCongestion`,tansParm(params));};

//游客餐饮消费分析
export const touristCustom  = params => { return axios.post(`${base}/yjzh/getTouristTase`,tansParm(params));};
//消费数据分析
export const customAnalyse  = params => { return axios.post(`${base1}/customAnalyse`,tansParm(params));};
//厕所使用率
export const toiletUseRatio  = params => { return axios.post(`${base1}/toiletUseRatio`,tansParm(params));};
//营销推广
export const touristPayway  = params => { return axios.post(`${base1}/touristPayway`,tansParm(params));};
//景区客流热力图与视频监控
export const scenicHot  = params => { return axios.post(`${base}/zl/getReliData`,tansParm(params));};
//满意度
export const contentRatio  = params => { return axios.get(`${base1}/contentRatio`,params);};

//客流预警

export const passengerwarning  = params => { return axios.get(`${base1}/passengerwarning`,params);};

