import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle, setToken, getToken } from '../lib/util'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes
})
const HAS_LOGINED = true // 假定已经登录，实际需要接口判断
// const HAS_LOGINED = false
router.beforeEach((to, from, next) => { // 全局路由守卫(前置)示例，当然我觉得这样似乎很笨重，并不灵活
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    if (HAS_LOGINED) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
  // const token = getToken()
  // if (token) {
  //   store.dispatch('authorization', token).then(() => {
  //     if(to.name === 'login') next({ name: 'home' })
  //     else {
  //       next()
  //     }
  //   }).catch(()=>{
  //     setToken('')
  //     next({name:'login'})
  //   })
  // } else {
  //   if (to.name === 'login') next()
  //   else {
  //     next({name: "login"})
  //   }
  // }
})

// 感觉这个很复杂
// router.beforeResolve 导航被确认(所有导航钩子都结束)之前，所有组件内守卫和异步路由组件被解析之后

router.afterEach((to, from) => { // 比如在上面的前置全局路由守卫之中加入正在加载的样式，然后在这里每个页面加载完成之后去掉这个样式
  // logining = false
})

/**
 * 完整触发流程
 * 1.导航被触发（push或者直接地址栏输入）
 * 2.在失活的组件（即将离开的页面组件）调用离开守卫beforeRouteLeave
 * 3.调用全局前置守卫 beforeEach
 * 4.在重用的组件里调用 brforeRouteUpdate 这点和第五条同级，若未重用则直接第五条
 * 5.调用路由独享的守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件（即将进入的页面组件）里调用beforeRouteEnter
 * 8.调用全局的解析守卫 beforeResolve
 * 9.导航被确认
 * 10.调用全局后置守卫afterEach
 * 11.触发DOM更新
 * 12.用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

export default router
