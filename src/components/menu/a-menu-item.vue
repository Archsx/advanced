<template>
  <li class="a-menu-item"><slot></slot></li>
</template>

<script>
export default {
  name:"ASubmenuItem"
}
</script>

<style lang="less">
  .a-menu-item{
    background:rgb(114, 103, 103);
    color:#fff;
  }
</style>
