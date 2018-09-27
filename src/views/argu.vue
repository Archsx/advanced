<template>
  <div>
    <!-- {{$route.params.name}} -->
    {{name}}
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type: String,
      default: 'arch'
    }
  },
  beforeRouteUpdate(to,from,next) { // 路由发生变化且组件被复用的情况下被调用
    console.log(to) //注意 to是当前路由，而from才是上一个路由，这里很容易被误导，比如从/sb到/sx，显示的to是/sx对应的路由对象
    console.log(this.$route.params) // 这里又很迷惑人了，这里显示的却是{name: 'sb'}，却是上一个路由。。
    next()
  },
}
</script>

<style>

</style>
