/**
 * Created by zhuzhiyang on 2016/12/29
 * 全局公用组件store
 */
import {GET_TOKEN, TOGGLE_SELECTSTATUS, HIDE_SIDEBAR, TOGGLE_SEARCH, SHOW_LOADING, HIDE_LOADING, SET_CURRENT_HEADER_INFO } from '../mutation_types'

const state = {
  token:'',
  selectStatus:false,
}

const getters = {
  getToken: state => state.token,
  getLoading: state => state.loading,
  getSelectStatus: state => state.selectStatus,
  search: state => state.search,
  getCurHeaderInfo: state => state.curHeaderInfo
}

const mutations = {
  //获取本地token
  [GET_TOKEN] (state) {
    state.token=window.localStorage.setItem('token');
  },
  [TOGGLE_SELECTSTATUS] (state) {
    state.selectStatus = !state.selectStatus
  },
}

const actions = {
  getToken ({ commit }) {
    commit('GET_TOKEN')
  },
  toggelSelect ({ commit }) {
    commit('TOGGLE_SELECTSTATUS')
  },
  toggleSearch ({ commit }) {
    commit('TOGGLE_SEARCH')
  },
  toogleLoading ({ commit }, status) {
    status && commit('SHOW_LOADING') || commit('HIDE_LOADING')
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
