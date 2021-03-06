

//统一封装请求接口  组件引入该文件后 api.name().then( (re) => {} ).catch( (err) => {})来调用


import axios from '@/api/instance/index'
import {setCookie,getCookie} from '@/common/js/cookie/cookie.js'
import {API_HZ} from '@/api/env'
export var params={};
let timeStamp = new Date().getTime()+'';

//转换post 请求参数
function tansParm(data){
	var params = new FormData();
        params.append('token', getCookie('token'));//token 必须
        params.append('timeStamp',timeStamp); //时间戳 必须
        if(data.code!=='undefined'){ //景区代码
        	params.append('code', data.code);
        }
        if(data.range){//请求数据时是省内或者省外
        	 params.append('range',data.range);
        }
        if(data.monthId){//月份
        	 params.append('monthId',data.monthId);
        }
        if(data.beginDate){//开始时间
        	 params.append('beginDate',data.beginDate);
        }
        if(data.endDate){//结束时间
        	 params.append('endDate',data.endDate);
        }
        if(data.limit){//请求评论详情返回的数据量
        	data.limit = data.limit>100?5:data.limit
        	 params.append('limit',data.limit);
        }
        if(data.curPage){//评论详情分页
        	 params.append('curPage',data.curPage);
        }
        if(data.setNum>=0 || data.warnNum>=0){//提交设置预警值
        	params.append('setNum', data.setNum);
        	params.append('warnNum', data.warnNum);
        }
        if(data.unitType){
        	params.append('unitType', data.unitType);
        }
       
       let p = params;
       params={};
    return p;
}



//console.log(navigator.userAgent,window.navigator.userAgent.indexOf('Trident'))

//模拟数据公共地址
let base1 = 'https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example';

//let base = 'http://115.29.17.176:80/pj/api'
let base = API_HZ+'/pj/api'


//用户登录
export const requestLogin = params => { return axios.post(`${base}/user/login`, tansParm(params)); };
//删除用户
export const removeUser = params => { return axios.post(`${base}/user/delete`, tansParm(params)); };
//获取用户列表
export const getUserList = params => { return axios.post(`${base}/user/findUsers`, tansParm(params)); };
//添加用户
export const addUser = params => { return axios.post(`${base}/user/add`, tansParm(params)); };
//退出登录
export const loginOut = params => { return axios.post(`${base}/user/logout`, tansParm(params)); };


//富民指数
export const richNum = params => { return axios.post(`${base}/cyjc/getRickIndexMark`,tansParm(params));};
//营销推广
export const marketing = params => { return axios.post(`${base}/jzyx/getFensFocus`,tansParm(params));};

export const touristSum = params => {return axios.post(`${base}/cyjc/getTouristCity`,tansParm(params))}

//实时客流数据
export const timeOn = params => {return axios.post(`${base}/cyjc/getPassengerCount`,tansParm(params))}



//产业数据
export const getProductData = params => { return axios.post(`${base}/cyjc/getProductData`,tansParm(params));};
//产业数据详情
export const getProductDataDetial = params => { return axios.post(`${base}/cyjc/getProductDetailData`,tansParm(params));};
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
//景区排行榜
export const scenicRanking  = params => { return axios.post(`${base}/jzyx/getTouristTop`,tansParm(params));};
//游客来源排行
export const touristOriginRanking  = params => { return axios.post(`${base}/jzyx/getTouristProvince`,tansParm(params));};
//景区概况
export const currentTourist  = params => { return axios.post(`${base}/zl/getScenicGereral`,tansParm(params));};

//景区客流
export const getScenicKeliu  = params => { return axios.post(`${base}/yjzh/getScenicKeliu`,tansParm(params));};


//游客餐饮消费分析
export const touristCustom  = params => { return axios.post(`${base}/yjzh/getTouristTase`,tansParm(params));};
//景区客流热力图与视频监控
export const scenicHot  = params => { return axios.post(`${base}/yjzh/getReliData`,tansParm(params));};


//关键词
export const getKeywords  = params => { return axios.post(`${base}/yjzh/getKeywords`,tansParm(params));};
//网评数据
export const getComments  = params => { return axios.post(`${base}/yjzh/getComments`,tansParm(params));};


//客流预警
export const passengerwarning  = params => { return axios.post(`${base}/yjzh/getPassengerWarn`,tansParm(params));};
//预警历史
export const getPassengerWarnHistory  = params => { return axios.post(`${base}/yjzh/getPassengerWarnHistory`,tansParm(params));};
//预警设置列表
export const getPassengerWarnSetList  = params => { return axios.post(`${base}/yjzh/getPassengerWarnSetList`,tansParm(params));};
//预警设置
export const modifyPassengerWarnSet  = params => { return axios.post(`${base}/yjzh/modifyPassengerWarnSet`,tansParm(params));};



/////////////////////////////////////////////////////////////////////////////////////////



//游客来源地
export const touristOrigin = params => { return axios.post(`${base1}/touristOrigin`,tansParm(params));};
//旅游营业分析
export const tourBusiness = params => { return axios.post(`${base1}/tourBusiness`,tansParm(params));};
//浦江县客流热地图
export const thermalMap  = params => { return axios.post(`${base1}/thermalMap`,tansParm(params));};
//拥堵指数
export const scenicCongestion  = params => { return axios.get(`${base1}/scenicCongestion`,tansParm(params));};
//消费数据分析
export const customAnalyse  = params => { return axios.post(`${base1}/customAnalyse`,tansParm(params));};
//厕所使用率
export const toiletUseRatio  = params => { return axios.post(`${base1}/toiletUseRatio`,tansParm(params));};
//营销推广
export const touristPayway  = params => { return axios.post(`${base1}/touristPayway`,tansParm(params));};
//满意度
export const contentRatio  = params => { return axios.get(`${base1}/contentRatio`,params);};

export const getUserListPage = params => { return axios.post(`${base1}/user/listpage`, { params: params }); };

export const batchRemoveUser = params => { return axios.post(`${base1}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.post(`${base1}/user/edit`, { params: params }); };
//游客来源地排行榜
export const originList = params => { return axios.post(`${base1}/originList`,tansParm(params));};
//客流总数，经济分析，富民指数
export const topThree = params => { return axios.post(`${base}/cyjc/getRickIndexMark`,tansParm(params));};
//游客满意度
export const touristSatisfaction = params => { return axios.post(`${base}/zl/getSatisfy`,tansParm(params));};
//拥堵指数
export const congestion = params => { return axios.get(`${base1}/congestion`,{params:params});};
//天气
export const weather = params => { return axios.get(`${base1}/weather`,{params:params});};