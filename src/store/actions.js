import { getAppName } from '@/api/app'

const actions = { 
  // updateAppName({commit}){
  //   getAppName().then(res =>{
  //     // commit('SET_APP_NAME',{
  //     //   appName:res.info.appName
  //     // })
  //     const {info:{appName}} = res
  //     commit('SET_APP_NAME',{
  //       appName
  //     })
  //   }).catch(err =>{
  //     console.log(err)
  //   })
  // }
  // updateAppName(paramsObj){
  //   const commit = paramsObj.commit
  // } 这样的写法和上面一对比会发现，上面的写法简便很多
  async updateAppName ({commit}) {
    try {
      const {info: {appName}} = await getAppName()
      commit('SET_APP_NAME',{
        appName
      })
    }catch(err){
      console.log(err)
    }
  }
}
export default actions