/**
 * Created by zhuzhiyang on 2016/12/30
 * post store
 */

import service from '../../services/post'
import { RECEIVE_POSTS, RE_RECEIVE_POSTS, SET_POSTS_INFO, RESET_POSTS_INFO, TOGGLE_POST } from '../mutation_types'

const state = {
  list: [],
  hasNext: true,
  hasPrev: false,
  page_no: 1,
  page_size: 10,
  total: 0
}

const getters = {
  getPostsInfo: state => {
    return {
      list: state.list,
      hasNext: state.hasNext,
      hasPrev: state.hasPrev,
      page_no: state.page_no,
      page_size: state.page_size,
      total: state.total
    }
  }
}

const mutations = {
  [RECEIVE_POSTS] (state, data) {
    state.list = state.list.concat(data)
  },
  [RE_RECEIVE_POSTS] (state, data) {
    state.list = data
  },
  [SET_POSTS_INFO] (state, data) {
    Object.keys(data).forEach(v => {
      if (state[v] !== undefined) {
        state[v] = data[v]
      }
    })
  },
  [RESET_POSTS_INFO] (state) {
    mutations[SET_POSTS_INFO](state, {
      list: [],
      hasNext: true,
      hasPrev: false,
      page_no: 0,
      page_size: 10,
      total: 0
    })
  },
  [TOGGLE_POST] (state, { id, status }) {
    for (let i = 0; i < state.list.length; i++) {
      if (state.list[i]._id === id) {
        state.list[i].is_delete = status
        break
      }
    }
  }
}

const actions = {
  getPosts ({ commit, state }, params) {
    return service.getPosts(params).then(res => {
      let data = res.data
      if (!data.code) {
        let { list, hasNext, hasPrev, total, page_no } = data.data
        if (page_no !== 1) {
          commit('RECEIVE_POSTS', list || [])
        } else {
          commit('RE_RECEIVE_POSTS', list || [])
        }
        commit('SET_POSTS_INFO', {
          hasNext,
          hasPrev,
          total,
          page_no
        })
      }
      return data
    })
  },
  publishPost ({ commit }, model) {
    return service.publishPost(model).then(res => {
      return res.data
    })
  },
  modifyPost ({ commit, state }, model) {
    model = $.extend(true, {}, model)
    return service.modifyPost(model).then(res => {
      return res.data
    })
  },
  deletePost ({ commit, state }, id) {
    return service.deletePost(id).then(res => {
      let data = res.data
      if (!data.code) {
        commit('TOGGLE_POST', {
          id,
          status: true
        })
      }
      return data
    })
  },
  recoverPost ({ commit, state }, id) {
    return service.recoverPost(id).then(res => {
      let data = res.data
      if (!data.code) {
        commit('TOGGLE_POST', {
          id,
          status: false
        })
      }
      return data
    })
  }
}

module.exports = {
  state,
  getters,
  mutations,
  actions
}
