import Mock from 'mockjs'

const Random = Mock.Random

// export const getUserInfo = (options) => {
//   // //console.log(options) {url: "http://localhost:3000/getUserInfo", type: "POST", body: "{"userId":21}"}
//   // //return {
//   // //  name: 'Arch'
//   // //}
//   const template = {
//     'str|2-4': 'Zoidberg',
//     'name|5': 'wow',
//     'age|+2': 18
//   }
//   let i = 3
//   let arr = []
//   while (i--) {
//     arr.push(template)
//   }
//   return Mock.mock(arr)
// }

export const getUserInfo = (options) => {
  const template = {
    'str|2-4': 'zoidberg',
    'name|5': 'sx',
    'age|+2': 12,
    'num|4-10': 0,
    'float|3-10.2-5': 0,
    'bool|1': true,
    'bools|1-9': true, // min/(min+max)意思是这里true的概率为0.1
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'obj2|1-3': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': [1, 2, 3],
    'arr2|1': [7, 8, 9],
    'func': () => {
      return 'this is created by function'
    },
    'reg': /[1-9][a-z]/,
    // 'email':Random.email(),
    email: Mock.mock('@email'),
    range: Random.range(3, 6, 1),
    strs: Random.character('upper'),
    date: Random.date('yyyy-MM-dd'),
    time: Random.time('hh:mm'),
    dateTime: Random.datetime('yyyy-MM-dd hh:mm'),
    dateTimeNow: Random.now('hour', 'yyyy-MM-dd a hh:mm'),
    img: Random.image('100x200', '#00ff00', '#000000', 'png', 'Arch'),
    img_base64: Random.dataImage(),
    color: Random.color(),
    cword: Random.cword('阿斯顿法规和加快了', 2, 5),
    cname: Random.cname(),
    email2: Random.email('live.com'),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true),
    county: Random.county(true),
    zip: Random.zip(),
    upFirstLetter: Random.capitalize('arch'),
    pick: Random.pick([1, 2, 3, 4]),
    shuffle: Random.shuffle([1, 2, 3, 4]),
    guid: Random.guid(),
    fruit: Random.fruit(),
    fruit2: '@fruit'


  }
  return Mock.mock(template)
}
