<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span class="shrink-icon" :style="{transform:`rotateZ(${showChild ? 180 : 0}deg)`}">^</span>
    </div>
    <div v-show="showChild"  class="a-submenu-child-box">
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  name:'ASubmenu',
  data(){
    return {
      showChild:false
    }
  },
  methods:{
    handleClick(){
      this.showChild = !this.showChild
    }
  }
}
</script>

<style lang="less">
  .a-submenu{
    background:rgb(33,35,39);
    &-title{
      color:#fff;
      position: relative;
      .shrink-icon{
        position:absolute;
        top:4px;
        right:10px;
      }
    }
    &-child-box{
      overflow: hidden;//这点不是必须的
      padding-left: 20px;
    }
    li{
      background:rgb(33,35,39);
    }
  }
</style>
