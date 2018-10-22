<template>
  <div>
  <slot name="left"></slot><span ref="number" :class="countClass" :id="eleId"></span><slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
// import './count-to.less'
export default {
  name:'CountTo',
  computed:{
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass(){
      return ['count-to-number',this.className]
    }
  },
  data(){
    return {
      counter:{} //因为这个counter实例以后可能还会用到，所以这里采用counter来保存这个实例
    }
  },
  props:{
    /**
    * @description 起始值
    */
    startVal:{
      type:Number,
      default:0
    },
    endVal:{
      type:Number,
      required:true
    },
    decimals:{
      type:Number,
      default:0
    },
    duration:{
      type:Number,
      default:1
    },
    useEasing:{
      type:Boolean,
      default:false
    },
    useGrouping:{
      type:Boolean,
      default:true
    },
    separator:{
      type:String,
      default:','
    },
    decimal:{
      type:String,
      default:'.'
    },
    delay:{
      type:Number,
      default:0
    },
    className:{
      type:String,
      default:''
    }
    //假如有一个prop不是string，boolean，number类型，而是对象类型，则需要使用函数定义默认值
    // foo:{
    //   type:Object,
    //   default:()=>{
    //     return {
    //       name:'arch'
    //     }
    //   }
    // }
  },
  methods:{
    getCount(){
      return this.$refs.number.innerText
    },
    emitEndEvent(){
      setTimeout(() => {
        this.$nextTick(()=>{
          this.$emit('on-animation-end',Number(this.getCount()))
        })
      }, this.duration * 1000 + 5);
    }
  },
  watch:{
    endVal(newVal,endVal){
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  mounted(){ //这里有一点疑问，视频中说，这时候创建好的实例已经挂载到DOM，但是还没渲染，所以要用nextTick函数确保页面所有dom渲染未完成之后执行回调函数
    this.$nextTick(()=>{
      this.counter = new CountUp(this.eleId, this.startVal,this.endVal,this.decimals,this.duration,{
        useEasing:this.useEasing,
        useGrouping:this.useGrouping,
        separator:this.separator,
        decimal:this.decimal
      })
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.delay);
    })
  }
}
</script>

<style lang="less">
@import './count-to.less';

.count-to-number{
  color:rgb(112, 216, 176)
}
</style>
