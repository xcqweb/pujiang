/**
 * Created by zhuzhiyang on 2017/1/2
 */
import service from '../../services/tag'
import { RECEIVE_TAG, CREATE_TAG, MODIFY_TAG } from '../mutation_types'

const state = {
  list: []
}

const getters = {
  getTags: state => state.list
}

const mutations = {
  [RECEIVE_TAG] (state, data) {
    state.list = data
  },
  [CREATE_TAG] (state, tag) {
    state.list.push(tag)
  },
  [MODIFY_TAG] (state, {index, tag}) {
    if (index === undefined || index < 0 || index > state.list.length - 1) {
      return
    }
    state.list.splice(index, 1, tag)
  }
}

const actions = {
  getTags ({ commit }) {
    return service.getTags().then(res => {
      let data = res.data
      if (!data.code) {
        commit('RECEIVE_TAG', data.data.list || [])
      }
      return data
    })
  },
  createTag ({ commit }, params) {
    return service.createTag(params).then(res => {
      let data = res.data
      if (!data.code) {
        commit('CREATE_TAG', data.data)
      }
      return data
    })
  },
  modifyTag ({ commit }, params) {
    return service.modifyTag(params).then(res => {
      let data = res.data
      if (!data.code) {
        commit('MODIFY_TAG', {
          index: params.index,
          tag: data.data
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
