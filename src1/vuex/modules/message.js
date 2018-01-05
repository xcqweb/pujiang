/**
 * Created by zhuzhiyang on 2017/1/14
 */

import { RECEIVE_COUNT, RECEIVE_MESSAGE, MARK_MESSAGE, MARK_ALL_MESSAGE, TOGGLE_MESSAGE_COMMENT_STATUS } from '../mutation_types'
import service from '../../services/message'

const state = {
  list: [],
  notReadCount: 0
}

const getters = {
  getMessages: state => state.list,
  getNotReadCount: state => state.notReadCount
}

const mutations = {
  [RECEIVE_COUNT] (state, count) {
    state.notReadCount = count
  },
  [RECEIVE_MESSAGE] (state, list) {
    state.list = list
  },
  [MARK_ALL_MESSAGE] (state) {
    state.list.filter(item => !item.has_read).map(item => {
      item.has_read = true
      return item
    })
    state.notReadCount = 0
  },
  [MARK_MESSAGE] (state, id) {
    for (let i = 0; i < state.list.length; i++) {
      if (state.list[i]._id === id) {
        state.list[i].has_read = true
        break
      }
    }
    state.notReadCount --
  },
  [TOGGLE_MESSAGE_COMMENT_STATUS] (state, id) {
    let target = null
    for (let i = 0; i < state.list.length; i++) {
      target = state.list[i]
      if (target._id === id) {
        target.comment.is_delete = !target.comment.is_delete
        break
      }
    }
  }
}

const actions = {
  getCount ({ commit }) {
    return service.count().then(res => {
      let data = res.data
      if (!data.code) {
        commit('RECEIVE_COUNT', data.data.count)
      }
      return data
    })
  },
  getMessages ({ commit }) {
    return service.getMessages().then(res => {
      let data = res.data
      if (!data.code) {
        commit('RECEIVE_MESSAGE', data.data.list)
        commit('RECEIVE_COUNT', data.data.not_read_count)
      }
      return data
    })
  },
  markAll ({ commit }) {
    return service.markall().then(res => {
      let data = res.data
      if (!data.code) {
        commit('MARK_ALL_MESSAGE')
      }
      return data
    })
  },
  mark ({ commit }, id) {
    return service.mark({id}).then(res => {
      let data = res.data
      if (!data.code) {
        commit('MARK_MESSAGE', id)
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
