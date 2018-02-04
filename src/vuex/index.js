/**
 * Created by zhuzhiyang aon 2016/12/29
 */

import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import version from './modules/version'
import user from './modules/user'
// import tanzhenData from './modules/tanzhenData'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const state={
	showToast:false,//控制预警设置蒙层
	currentCode:0,//当前景区代码
	setConfigData:{},
	
	editNum:0//临时 传递修改的参数
	
}
export default new Vuex.Store({
    //strict: debug,
    state,
    modules: {

    global: {
        namespaced: true,
        ...global
    },
    version: {
        namespaced: true,
        ...version
    },
    user: {
        namespaced: true,
        ...user
    },
    // tanzhenData: {
    //   namespaced: true,
    //   ...tanzhenData
    // },

    }
})
