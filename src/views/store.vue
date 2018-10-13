<template>
  <div>
    <a-input v-model="inputValue"></a-input>
    <!-- <a-input :value="inputValue" @input="handleInput"></a-input> -->
    {{inputValue}} -> lastletter is {{inputValueLastLetter}}
    <a-show :content="inputValue"></a-show>
    <p>appName:{{appName}},appNameWithVersion:{{appNameWithVersion}}</p>
    <p>userName:{{userName}},firstLetter is {{firstLetter}}</p>
    <p>newAppVersion is {{appVersion}}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <button @click="changeUserName">修改用户名</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{li}}</p>
    <!-- <a-input :value="stateValue" @input="handleStateValueChange"></a-input> -->
    <a-input v-model="stateValue"></a-input>
    <p>{{stateValue}}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex' //相当于下面两句
// import vuex from 'vuex'
// const mapState = vuex.mapState


// import {createNamespacedHelpers} from 'vuex'
// const {mapState} = createNamespacedHelpers('user')


export default {
  name:'store',
  components:{
    AInput,
    AShow
  },
  data(){
    return {
      inputValue:''
    }
  },
  computed:{
    // appName(){
    //   return this.$store.state.appName
    // },
    // userName(){
    //   return this.$store.state.user.userName
    // }
    // appNameWithVersion(){
    //   return this.$store.getters.appNameWithVersion
    // },
    // ...mapState([
    //   'appName'
    // ])
    ...mapState({
      appName: state => state.appName, // state就是根状态下的state实例对象
      userName: state => state.user.userName,
      appVersion:state => state.appVersion,
      // todoList:state => state.todo ? state.todo.todoList : []
      todoList:state => state.user.todo ? state.user.todo.todoList : [],
      // stateValue:state => state.stateValue
    }),
    stateValue:{
      get() {
        return this.$store.state.stateValue
      },
      set(value){
        this.SET_STATE_VALUE(value)
      }
    },
    // ...mapGetters([
    //   'appNameWithVersion',
    // ]),
    // ...mapGetters('user',[
    //   'firstLetter'
    // ]),
    //也可以在本地自己写firstLetter,但是这样的话firstLetter只能用在这一组件中，其他组件要想使用的话就需要传值
    // firstLetter(){
    //   return this.userName.substr(0,1)
    // }
    
    //当使用了命名空间+createNamespacedHelpers，就使用下面的写法
    // ...mapState({
    //   userName:state => state.userName
    // })
    // 如果没用createdNamespacedHelpers,就需要在下面的加上模块名
    // ...mapState('user',{
    //   userName: state => state.userName
    // }),
    // ...mapState({
    //   appName: state => state.appName
    // }),
    //这是本地的compued
    inputValueLastLetter() {
      return this.inputValue.substr(-1,1)
    },


    //假如没有命名空间，则getters不管在哪个模块都不用特指出来
    //即可写作
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),
    // 对计算属性设置setter可以用下面的写法,只是个示范，和本节vuex无关
    // appName:{
    //   set:function(newValue){
    //     this.inputValue = newValue + 'foo'
    //   },
    //   get:function(){
    //     return this.inputValue + 'bar'
    //   }
    // }

  },
  methods:{
    ...mapMutations([ //这里也不需要指定模块，因为getters,actions,mutations会被vuex通通注册到全局中，不论是根级别的还是模块中的
      'SET_APP_NAME',
      'SET_USER_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput(value){
      this.inputValue = value
    },
    handleChangeAppName(){
      // this.$store.commit('SET_APP_NAME',{
      //   appName:'newAppName'
      // })
      // this.$store.commit({
      //   type:'SET_APP_NAME',
      //   appName:'newAppName'
      // })
      // this.SET_APP_NAME({
      //   appName:'newAppName'
      // })
      // this.$store.commit('SET_APP_VERSION')
      this.updateAppName()
    },
    changeUserName(){
      this.SET_USER_NAME('vue-course')
      // this.$store.dispatch('updateAppName',{
      //   appName:'123'
      // }) 仅做示范，并无意义


      //这是错误的演示
      // this.$store.state.user.userName = 'haha'

    },
    registerModule(){
      // this.$store.registerModule('todo',{
      //   state:{
      //     todoList:[
      //       'learn Mutations',
      //       'learn Actions'
      //     ]
      //   }
      // }),这是演示动态注册一个模块，下面是演示动态给模块注册模块
            this.$store.registerModule(['user','todo'],{
        state:{
          todoList:[
            'learn Mutations',
            'learn Actions'
          ]
        }
      })
    },
    handleStateValueChange(val){
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>

<style>

</style>
