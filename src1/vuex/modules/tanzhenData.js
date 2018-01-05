/**
 * Created by zhuzhiyang on 2016/12/30
 * post store
 */

import tanzhen_api from '@/api/moudles/tanzhenData'
import { GET_PART_TIMELINE, GET_ALL_TIMELINE,} from '../mutation_types'

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
  [GET_ALL_TIMELINE] (state, data) {
    state.list = state.list.concat(data)
  },
  [GET_PART_TIMELINE] (state, data) {
    state.list = data
  },

}

const actions = {
    get_all_timeline ({commit}) {
        tanzhen_api.getnews(function(res){
            commit('GET_ALL_TIMELINE',{res})
        })
    },
    myAction(context, data) {
        
        return new Promise((resolve, reject) => {
            // Do something here... lets say, a http call using vue-resource
            this.$http("/api/something").then(response => {
                // http success, call the mutator and change something in state
                resolve(response);  // Let the calling function know that http is done. You may send some data back
            }, error => {
                // http failed, let the calling function know that action did not work out
                reject(error);
            })

            // this.$store.dispatch("myAction").then(response => {
            //     console.log("Got some data, now lets show something in this component")
            // }, error => {
            //     console.error("Got nothing from server. Prompt user to check internet connection and try again")
            // })
        })
    }
}

module.exports = {
  state,
  getters,
  mutations,
  actions
}
