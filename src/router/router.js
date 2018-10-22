import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Home,
    props: route => { // 根据当前路由来进行一些处理逻辑,从而设置传入组件的属性值
      return {
        food: route.query.food
      }
    },
    beforeEnter: (to, from, next) => { // 路由独享守卫，和这个同级的index.js里面的全局守卫对比
      // ...
      // if (from.name === 'about') {
      //   alert('FROM ABOUT PAGE')
      // } else {
      //   alert('AINT FROM ABOUT PAGE')
      // }
      next() // 记得加上这一句
    }

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: 'about'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child', // 这里尤其需要注意，child前面没有/
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: to => {
      console.log(to)
      return {
        name: 'home'
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '/count-to',
    name: 'count_to',
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/render-page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue')
  },
  {
    path: '/menu-page',
    name: 'menu_page',
    component: () => import('@/views/menu-page.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }

]
