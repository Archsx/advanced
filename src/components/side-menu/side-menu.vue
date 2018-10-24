<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu>
      <template v-for="item in list">
        <Submenu v-if="item.children" :key="item.state" :name="item.name"></Submenu>
        <menu-item v-else :key="item.state" :name="item.name">{{item.title}}</menu-item>
      </template>
    </Menu>
    <div></div>
  </div>
</template>

<script>
export default {
  name:'SideMenu',
  props:{
    collapsed:{
      type:Boolean,
      default:false
    },
    list:{
      type:Array,
      default:()=> []
    }
  }
}
</script>

<style>

</style>
