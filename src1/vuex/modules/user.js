/**
 * Created by zhuzhiyang on 2017/1/13
 */

import service from '@/api/login.js'
import {SET_TOKEN, RECEIVE_USERS, SET_USER, DROP_USER, TOGGLE_USER } from '../mutation_types'

const state = {
  token:'',
}

const getters = {
  getUserInfo: state => {
    return {
      ...state
    }
  }
}

const mutations = {
  [SET_TOKEN] (state, data) {
    window.localStorage.setItem('token', data.token);
    state.token =  data.token;
  },
  [SET_USER] (state, user) {
    state = Object.assign(state, user)
    sessionStorage.setItem('zzy_userid', user.id)
  },
  [DROP_USER] (state) {
    state.id = ''
    state.username = ''
    state.email = ''
    state.avatar = 2
    state.site = ''
    state.level = 0
    state.is_delete = false
    sessionStorage.removeItem('zzy_userid')
  },
  [TOGGLE_USER] (state, { id, status }) {
    for (let i = 0; i < state.list.length; i++) {
      if (state.list[i]._id === id) {
        state.list[i].is_delete = status
        break
      }
    }
  }
}

const actions = {
  getUsers ({ commit }, params) {
    return service.getUsers(params).then(res => {
      let data = res.data
      if (!data.code) {
        commit('RECEIVE_USERS', data.data.list)
      }
      return data
    })
  },
  getUserById ({ commit }, id) {
    if (!id) {
      return
    }
    return service.getUserById(id).then(res => {
      let data = res.data
      if (!data.code && data.data.level) {
        data = data.data
        commit('SET_USER', {
          id: data._id,
          username: data.username,
          email: data.email,
          avatar: data.avatar,
          gender: data.gender,
          site: data.site,
          level: data.level,
          is_delete: data.is_delete
        })
      }
      return res.data
    })
  },
  login ({ commit }, params) {
    return service.userLogin(params).then(res => {
      let data = res.data
      if (!data.code) {
        commit('SET_USER', {...data.data})
      }
      return data
    })
  },
  logout ({ commit }) {
    return service.logout().then((res) => {
      commit('DROP_USER')
      return res.data
    })
  },
  deleteUser ({ commit }, id) {
    return service.deleteUser(id).then(res => {
      let data = res.data
      if (!data.code) {
        commit('TOGGLE_USER', {
          id,
          status: true
        })
      }
      return data
    })
  },
  recoverUser ({ commit }, id) {
    return service.recoverUser(id).then(res => {
      let data = res.data
      if (!data.code) {
        commit('TOGGLE_USER', {
          id,
          status: false
        })
      }
      return data
    })
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
