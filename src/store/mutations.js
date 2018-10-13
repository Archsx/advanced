import vue from 'vue'
const mutations = {
  SET_APP_NAME(state,params){
    state.appName = params.appName
  },
  SET_APP_VERSION(state){ //这里是演示给state设置本来没有的属性
    vue.set(state,'appVersion','v2.0')
  },
  SET_STATE_VALUE(state,value){
    state.stateValue = value
  }
}
export default mutations
