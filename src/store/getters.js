const getters = {
  appNameWithVersion: (state) => { // 这里的state就是同级的state.js里面的state
    return state.appName + 'v2.0'
  }
}
export default getters
