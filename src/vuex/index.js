/**
 * Created by zhuzhiyang aon 2016/12/29
 */

import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import version from './modules/version'
import user from './modules/user'
import state from './state'
import mutations from './mutations'
import actions from './actions'
// import tanzhenData from './modules/tanzhenData'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    //strict: debug,
    state,
    mutations,
    actions,
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
