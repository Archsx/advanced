import Mock from 'mockjs'
import { getUserInfo } from './response/user'
const Random = Mock.Random
Mock.mock('http://localhost:3000/getUserInfo', getUserInfo)
// Mock.mock(/\/getUserInfo/, { name: 'Arch' })

Mock.setup({
  timeout: 500
})
Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  }
})
export default Mock
