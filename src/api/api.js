//import axios from 'axios';
import axios from '@/api/instance'
//import {params} from '@/common/js/gtime.js';
export var params={code:0};
//模拟数据公共地址
let base1 = 'https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example';
let base = 'http://114.55.237.138/pj/api'
//http://114.55.237.138/pj/api/zl/getScenicGereral

export const requestLogin = params => { return axios.post(`${base1}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base1}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base1}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base1}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base1}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base1}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base1}/user/add`, { params: params }); };





//模拟接口数据

//拥堵指数
export const congestion = params => { return axios.get(`${base1}/congestion`,{ params: params });};
//天气
export const weather = params => { return axios.get(`${base1}/weather`,{ params: params });};
//富民指数
export const richNum = params => { return axios.get(`${base}/cyjc/getRickIndexMark`,{ params: params });};
//游客来源地排行榜
export const originList = params => { return axios.get(`${base1}/originList`,{ params: params });};
//营销推广
export const marketing = params => { return axios.get(`${base}/jzyx/getFensFocus`,{ params: params });};
//客流总数，经济分析，富民指数
export const topThree = params => { return axios.get(`${base1}/topThree`,{ params: params });};
//游客满意度
export const touristSatisfaction = params => { return axios.get(`${base1}/touristSatisfaction`,{ params: params });};



//游客来源地
export const touristOrigin = params => { return axios.get(`${base1}/touristOrigin`,{params:params});};

export const touristSum = params => {return axios.get(`${base}/cyjc/getTouristCity`,{params:params})}


//旅游营业分析
export const tourBusiness = rparams => { return axios.get(`${base1}/tourBusiness`,{params:params});};



//出行方式
export const tripMode = rparams => { return axios.get(`${base}/jzyx/getTravelWay`,{params:params});};
//年龄分析
export const ageAnalyse = rparams => { return axios.get(`${base}/jzyx/getAgeAnalysis`,{params:params});};
//游客关注点
export const touristFocus = rparams => { return axios.get(`${base}/jzyx/getTouristFocus`,{params:params});};
//消费偏好
export const touristAttr = rparams => { return axios.get(`${base}/jzyx/getTouristAttr`,{params:params});};
//游客男女比率
export const touristSexRatio = rparams => { return axios.get(`${base}/jzyx/getSexAnalysis`,{params:params});};
//游客来源城市
export const touristOriginsource = rparams => { return axios.get(`${base}/jzyx/getTouristCity`,{params:params});};
//浦江县客流热地图
export const thermalMap  = rparams => { return axios.get(`${base1}/thermalMap`,{params:params});};
//景区排行榜
export const scenicRanking  = rparams => { return axios.get(`${base}/jzyx/getTouristTop`,{params:params});};
//游客来源排行
export const touristOriginRanking  = rparams => { return axios.get(`${base}/jzyx/getTouristProvince`,{params:params});};

//景区当前客流
//export const currentTourist  = rparams => { return axios.get(`${base}/yjzh/getPassengerCount`,{params:params});};
export const currentTourist  = rparams => { return axios.get(`${base}/zl/getScenicGereral`,{params:params});};

//拥堵指数
export const scenicCongestion  = rparams => { return axios.get(`${base1}/scenicCongestion`,{params:params});};

//游客餐饮消费分析
export const touristCustom  = rparams => { return axios.get(`${base}/yjzh/getTouristTase`,{params:params});};
//消费数据分析
export const customAnalyse  = rparams => { return axios.get(`${base1}/customAnalyse`,{params:params});};
//厕所使用率
export const toiletUseRatio  = rparams => { return axios.get(`${base1}/toiletUseRatio`,{params:params});};
//营销推广
export const touristPayway  = rparams => { return axios.get(`${base1}/touristPayway`,{params:params});};
//景区客流热力图与视频监控
export const scenicHot  = rparams => { return axios.get(`${base}/zl/getReliData`,{params:params});};
//满意度
export const contentRatio  = rparams => { return axios.get(`${base1}/contentRatio`,{params:params});};
