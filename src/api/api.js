//import axios from 'axios';
import axios from '@/api/instance'
import {params} from '@/common/js/gtime.js';

export {params};
//模拟数据公共地址
let base = 'https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example';
//let base = 'http://114.55.237.138/pj/api'


export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };





//模拟接口数据

//拥堵指数
export const congestion = params => { return axios.get(`${base}/congestion`,{ params: params });};
//天气
export const weather = params => { return axios.get(`${base}/weather`,{ params: params });};
//富民指数
export const richNum = params => { return axios.get(`${base}/richNum`,{ params: params });};
//游客来源地排行榜
export const originList = params => { return axios.get(`${base}/originList`,{ params: params });};
//营销推广
export const marketing = params => { return axios.get(`${base}/marketing`,{ params: params });};
//客流总数，经济分析，富民指数
export const topThree = params => { return axios.get(`${base}/topThree`,{ params: params });};
//游客满意度
export const touristSatisfaction = params => { return axios.get(`${base}/touristSatisfaction`,{ params: params });};



//国内游客来源地
export const touristOrigin = params => { return axios.get(`${base}/touristOrigin`,{params:params});};
//旅游营业分析
export const tourBusiness = rparams => { return axios.get(`${base}/tourBusiness`,{params:params});};



//出行方式
export const tripMode = rparams => { return axios.get(`${base}/tripMode`,{params:params});};
//年龄分析
export const ageAnalyse = rparams => { return axios.get(`${base}/ageAnalyse`,{params:params});};
//游客关注点
export const touristFocus = rparams => { return axios.get(`${base}/touristFocus`,{params:params});};
//浦江县客流属性分析
export const touristAttr = rparams => { return axios.get(`${base}/touristAttr`,{params:params});};
//游客男女比率
export const touristSexRatio = rparams => { return axios.get(`${base}/touristSexRatio`,{params:params});};
//游客详细来源地
export const touristOriginsource = rparams => { return axios.get(`${base}/touristOriginsource`,{params:params});};
//浦江县客流热地图
export const thermalMap  = rparams => { return axios.get(`${base}/thermalMap`,{params:params});};
//景区排行榜
export const scenicRanking  = rparams => { return axios.get(`${base}/scenicRanking`,{params:params});};
//游客来源排行
export const touristOriginRanking  = rparams => { return axios.get(`${base}/touristOriginRanking`,{params:params});};

//景区当前客流
export const currentTourist  = rparams => { return axios.get(`${base}/currentTourist`,{params:params});};
//拥堵指数
export const scenicCongestion  = rparams => { return axios.get(`${base}/scenicCongestion`,{params:params});};

//游客餐饮消费分析
export const touristCustom  = rparams => { return axios.get(`${base}/touristCustom`,{params:params});};
//消费数据分析
export const customAnalyse  = rparams => { return axios.get(`${base}/customAnalyse`,{params:params});};
//厕所使用率
export const toiletUseRatio  = rparams => { return axios.get(`${base}/toiletUseRatio`,{params:params});};
//游客支付方式
export const touristPayway  = rparams => { return axios.get(`${base}/touristPayway`,{params:params});};
//景区客流热力图与视频监控
export const scenicHot  = rparams => { return axios.get(`${base}/scenicHot`,{params:params});};
//满意度
export const contentRatio  = rparams => { return axios.get(`${base}/contentRatio`,{params:params});};
