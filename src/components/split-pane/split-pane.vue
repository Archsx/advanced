<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width:leftOffsetPercent,paddingRight:`${this.triggerWidth / 2}px`}">
      <!-- <button @click="handleClick">change</button> -->
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" @mousedown="handleMouseDown" :style="{left:triggerLeft,width:triggerWidth+'px'}"></div>
    <div class="pane pane-right" :style="{left:leftOffsetPercent,paddingLeft:`${this.triggerWidth / 2}px`}">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'SplitPane',
  props:{
    value:{
      type:Number,
      default:0.5,
    },
    triggerWidth:{
      type:Number,
      default:8
    },
    min:{
      type:Number,
      default:0.1
    },
    max:{
      type:Number,
      default:0.9
    }
  },
  data(){
    return {
      // leftOffset:0.3,
      canMove:false,
      initLeft:0
    }
  },
  methods:{
    handleClick(){
      console.log(this.triggerWidth)
      this.leftOffset -= 0.02
    },
    handleMouseDown(event){
      document.addEventListener('mousemove',this.handleMouseMove)
      document.addEventListener('mouseup',this.handleMouseUp)
      this.initLeft = event.pageX - event.target.getBoundingClientRect().left
      this.canMove = true
    },
    handleMouseMove(event){
      // console.log(this.$refs.outer.getBoundingClientRect())
      // console.log(event.pageX - this.$refs.outer.getBoundingClientRect().left)
      if(!this.canMove) return
      const outerRect= this.$refs.outer.getBoundingClientRect() 
      let offsetPercent = (event.pageX - outerRect.left + (this.triggerWidth / 2 - this.initLeft)) / outerRect.width
      if(offsetPercent < this.min) offsetPercent = this.min
      if(offsetPercent > this.max) offsetPercent = this.max
      // this.leftOffset = offsetPercent
      // this.$emit('input',offsetPercent)
      this.$emit('update:value',offsetPercent)
    },
    handleMouseUp(){
      this.canMove = false
    }
  },
  computed:{
    leftOffsetPercent(){
      return `${this.value * 100}%`
    },
    triggerLeft(){
      return `calc(${this.leftOffsetPercent} - ${this.triggerWidth / 2}px)`
    }
  }
}
</script>

<style lang='less'>
  .split-pane-wrapper{
    height:100%;
    // width:100%
    position:relative;
    .pane{
      position:absolute;
      top:0;
      height:100%;
      // display: inline-block;
      // float:left;
      // width:50%;//注意，这样写虽然宽度都是百分之50,但是还是没在一行上，因为都是块极元素
      &-left{
        // width: 30%;
        //上面的写法相当于.pane-left
        background: palevioletred
      }
      &-right{
        right:0;
        bottom:0;
        // left:30%;
        background: paleturquoise
      }
      &-trigger-con{
        // width:8px;
        height: 100%;
        background: red;
        position:absolute;
        top:0;
        z-index: 10;
        user-select: none;
        cursor:col-resize;
      }
    }
  }
</style>
