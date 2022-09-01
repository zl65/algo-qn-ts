let obj = {}
let input = document.getElementById('input')
let span = document.getElementById('span')
// 数据劫持
Object.defineProperty(obj, 'text', {
  configurable: true,
  enumerable: true,
  get() {
    console.log('获取数据了')
  },
  set(newVal) {
    console.log('数据更新了')
    input.value = newVal
    span.innerHTML = newVal
  },
})
// 输入监听
input.addEventListener('keyup', function (e) {
  obj.text = e.target.value
})

// NOTE: 练习
let data = {}
let userInput = document.getElementById('user-input')
let inputLabel = document.getElementsById('user-label')

Object.defineProperties(data, 'input', {
  configurable: true,
  enumerable: true,
  get(val) {
    //
  },
  set(val) {
    userInput.innerHTML = val
    inputLabel.innerHTML = val
  },
})

input.addEventListener('keyup', function (e) {
  data.input = e.target.value
})
