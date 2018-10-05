const state = {
  userName: 'Arch'
}
const getters = {
  firstLetter: state => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  SET_USER_NAME(state, params){
    state.userName = params
  }
}

const actions = {
  updateUserName({commit,state,rootState,dispatch}){ //state表示当前state，而rootState表示根级别的state
    //rootState.appName
    dispatch('xxx','')
  },
  xxx(){
    
  }
}

export default {
  // namespaced: true,
  getters,
  state,
  mutations,
  actions,
  modules:{
    //
  }
}
