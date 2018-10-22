<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>1111</a-menu-item>
      <a-menu-item>????</a-menu-item>
      <a-submenu>
        <div slot="title">3333</div>
        <a-menu-item>3333-1</a-menu-item>
        <a-submenu>
          <div slot="title">3333-22</div>
          <a-menu-item>3333-22-11</a-menu-item>
          <a-menu-item>3333-22-22</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{item.title}}</a-menu-item>
        <re-submenu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import menuComponents from "_c/menu";
// const {AMenu, AMenuItem, ASubmenu} = menuComponents// 假如用这种写法的话，下面注册compinents就该写成注释的形式
import ReSubmenu from './re-submenu'
export default {
  name: "menu_page",
  components: {
    ...menuComponents,
    ReSubmenu
    // AMenu,
    // AMenuItem,
    // ASubmenu
  },
  data(){
    return {
      list:[
        {
          title:'1111'
        },
        {
          title:'2222'
        },
        {
          title:'3333',
          children:[
            {
              title:'3333-1'
            },
            {
              title:'3333-2',
              children:[
                {
                  title:'3333-2-1'
                },
                {
                  title:'3333-2-2'
                },
                {
                  title:'3333-2-3',
                  children:[
                    {
                      title:'3333-2-3-1'
                    },
                    {
                      title:'3333-2-3-2'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
};
</script>

<style lang="less">
.menu-box {
  width: 300px;
  height: 400px;
}
</style>
