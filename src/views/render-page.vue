<template>
  <div>
    <!-- <ul @click="handleClick">
      <li @click.stop="handleClick" v-for="(item, index) in list" :key="index">
        {{item.name}}
      </li>
    </ul> -->
    <!-- <list :list="list" :render="renderFunc"></list> -->
    <list :list="list" :style="{color:'red'}">
      <count-to slot="aa" slot-scope="count" :end-val="count.number"></count-to>
      <!-- count是随便取的，指代的是子组件(counto)里面slot的属性(比如list组件里面的slot里的属性number)和值（number属性所对应的值，即item.number）构成的对象 -->
    </list>
  </div>
</template>

<script>
import List from '_c/list'
import CountTo from '_c/count-to'
export default {
  components:{List,CountTo},//若使用render函数或者JSX的方式则不需要在这里注册countto
  data(){
    return {
      list:[{
        number:100
      },{
        number:45
      }]
    }
  },
  methods:{
    // handleClick(event){
    //   console.log(event)
    // }
    // renderFunc(h, name){ //render函数时，h可替换为createElement,JSX则不能，必须为h
    //   return h('i',{
    //     style:{
    //       color:'pink'
    //     }
    //   },name)
    // }
    renderFunc(h,number){
      return (
        <CountTo on-on-animation-end={this.handleEnd} endVal={number} nativeOn-click={this.handleClick} style={{color:'red'}}></CountTo>
      )
    },
    handleClick(event){
      console.log(event)
    },
    handleEnd(){
      console.log('end')
    }
  }
}
</script>

<style>

</style>
