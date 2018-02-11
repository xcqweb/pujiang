
const ADD_HISTORY = 'ADD_HISTORY';
const SAVE_CONFIG = 'SAVE_CONFIG';
const SAVE_EDIT = 'SAVE_EDIT';

const actions = {
  addHistory ({ commit }) {
    commit(ADD_HISTORY)
  },
  saveConfig ({ commit }) {
    commit(SAVE_CONFIG)
  },
  saveEdit ({ commit }) {
    commit(SAVE_EDIT)
  },
}

export default actions