// 假如浏览器刷新，vuex里面的所有的状态将会被清除，这个插件是想实现持久化存储
export default store => { // 此函数会在每次实例初始化的时候调用(比如刷新浏览器之后)
  if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state))
  }
  store.subscribe((mutation, state) => { // 每次提交mutation之后都会执行
    localStorage.state = JSON.stringify(state)
  })
}
