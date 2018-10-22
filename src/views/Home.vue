<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <b>{{food}}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent页面</button>
    <button @click="handleClick('replace')">替换到parent页面</button>
    <button @click="getInfo" :style="{background:bgc}">请求数据</button>
    <img :src="url" alt="">
    <button @click="handleLogout">退出登录</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import axios from 'axios'
import { getUserInfo } from '@/api/user'
import {mapActions} from 'vuex'

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){
    return {
      url:'',
      bgc:''
    }
  },
  props:{
    food:{
      type:String,
      default:'banana'
    }
  },
  // 组件内守卫
  beforeRouteEnter (to, from, next) {
    // ... to是当前路由对象，from是上一个路由对象
    // 这是在组件渲染之前，所以这时候的this并不可用（暗示数据都不可用？）,可以用下面的代码获取组件实例
    next( vm => {
      console.log(vm) // vm就是组件实例
    })
  },
  beforeRouteLeave (to, from, next) {
   // console.log(to) 这时候的to又是即将到达的页面的，不是当前页面
    // ...使用场景示例：用户在当前页面编辑，然后在离开之前可以提醒他还未保存，是否确定离开
    // const leave = confirm('您确认要离开吗')
    let leave = true
    if(leave) next()
    else next(false) //这样可以取消页面跳转
  },

  methods: {
    handleClick(type) {
      // this.$router.go(-1)
      if (type === 'back') {
        this.$router.back();
      }else if(type === 'push'){
        this.$router.push({
          // name: 'parent',
          // query:{
          //   name:'foo'
          // }
          name:'argu',
          params:{
            name:'bar'
          }
        })
      }else if(type === 'replace'){
        this.$router.replace({
          name:'parent'
        })
      }
    },
    getInfo(){
      // axios.post('/getUserInfo',{userId:21}).then(res => {
      //   console.log(res)
      // })
      getUserInfo({userId:21}).then(res => {
        console.log(res)
        this.url = res.data.img
        this.bgc = res.data.color
      })
    },
    ...mapActions([
      'logout'
    ]),
    handleLogout(){
      this.logout()
      this.$router.push({
        name:'login'
      })
    }
  }
};
</script>
