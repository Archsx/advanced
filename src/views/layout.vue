<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider breakpoint="sm"  collapsible v-model="collapsed" hide-trigger collapsed-width="0">
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" type="md-menu" :size="32" @click.native="handleCollapsed"></Icon> 
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view></router-view>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import SideMenu from '_c/side-menu'
export default {
  components:{
    SideMenu
  },
  data(){
    return {
      collapsed:false,
      menuList:[
        {
          title:'闹钟',
          icon:'ios-alarm',
          state:'menu1'
        },
        {
          title:'安卓',
          icon:'logo-android',
          state:'menu2'
        },
        {
          title:'目录',
          icon:'ios-albums',
          state:'menu3',
          children:[
            {
              title:'root',
              icon:'md-book',
              state:'menu31'
            },
            {
              title:'home',
              icon:'ios-bookmark-outline',
              state:'menu32',
              children:[
                {
                  title:'archsx',
                  icon:'md-create',
                  state:'menu321'
                },
                {
                  title:'zoidberg',
                  icon:'md-create',
                  state:'menu322'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods:{
    handleCollapsed(){
      this.collapsed = ! this.collapsed
    }
  },
  computed:{
    triggerClasses(){
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    }
  }
}
</script>

<style lang='less'>
  .layout-wrapper, .layout-outer{
    height:100%
  }
  .header-wrapper{
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0,0,0,0.1);
    padding: 0 24px;
    .trigger-icon {
      cursor: pointer;
      transition: transform .3s ease;
      &.rotate{
        transform: rotateZ(-90deg);
        transition: transform .3s ease;
      }
    }
  }
  .content-con{
    padding: 10px;
  }
  .page-card{
    min-height: ~"calc(100vh - 84px)"
  }
</style>
