import axios from 'axios';
import {params} from '@/common/js/gtime.js';

export {params};
//模拟数据公共地址
let base = 'http://rap.taobao.org/mockjsdata/30946';



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
export const ouristSatisfaction = params => { return axios.get(`${base}/ouristSatisfaction`,{ params: params });};