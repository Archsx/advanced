import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import CountTo from '_c/count-to'
import './plugins/iview.js'
// import iview from 'iview'
// import 'iview/dist/styles/iview.css'

// if (process.env.NODE_ENV !== 'production') {
//   require('./mock')
// }
Vue.config.productionTip = false
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   router,
//   store,
//   render: h => {
//     return h('div', { // 这里的第一个参数可以使标签，也可以是一个组件(对象),h()返回的结果是虚拟节点
//       attrs: {
//         id: 'box'
//       },
//       style: {
//         color: 'pink'
//       }
//     }, 'arch') // 这里在写包含的内容的时候可以是字符串也可以是数组
//   }
// }).$mount('#app')

// new Vue({
//   router,
//   store,
//   render: h => {
//     return h(CountTo, {
//       // 'class': ['count-to', true ? 'aa' : 'bb'], // class是保留字，所以要加上引号, class作用于组件最外层的元素，写法可以有三种
//       // 'class':'count-up wrapper'
//       'class': {
//         'count-to': true
//       },
//       props: {
//         endVal: 100
//       },
//       domProps: {
//         // 例如innerHTML :'123'
//       },
//       on: {
//         'on-animation-end': (val) => {
//           console.log('animation end')
//         }
//       },
//       nativeOn: {
//         'click': () => {
//           console.log('click')
//         }
//       },
//       directives: [],
//       attrs: [],
//       style: {},
//       slot: 'default', // 这个组件插在其他组件的什么位置
//       key: '',
//       scopedSlots:{},
//       ref: ''
//     })
//   }
// }).$mount('#app')

// new Vue({
//   router,
//   store,
//   render: h => h('div', [
//     h('span', '123'),
//     h('p', '456')
//   ])
// }).$mount('#app')

// let list = [{ name: 'arch' }, { name: 'zoidberg' }]
// const getLiEleArr = (h) => {
//   return list.map((item, index) => h('li', {
//     on: {
//       'click': (event) => {
//         console.log(event)
//         event.stopPropagation()
//       }
//     },
//     key: `list_item_${index}`
//   }, item.name))
// }

// new Vue({
//   router,
//   store,
//   render: h => h('div', [
//     h('ul', {
//       on: {
//         'click': () => {
//           console.log('clicked')
//         }
//       }
//     }, getLiEleArr(h))
//   ])
// }).$mount('#app')
