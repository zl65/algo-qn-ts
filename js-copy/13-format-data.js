import { resolve } from 'path/posix'

function dateFormat(date, format) {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  format = format.replace(/yyyy/, year)
  format = format.replace(/MM/, month)
  format = format.replace(/dd/, day)
  console.log(format)
}

dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日

let a = 1
let b = 2

a = a + b
b = a - b
a = a - b

console.log(a, b)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < arr.length; i++) {
  const randomIndex = Math.floor(Math.random() * (arr.length - i)) + i
  ;[arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
}

console.log(arr)

let sum = arr.reduce((pre, curr) => {
  return pre + curr
})
console.log(sum)

var arr2 = [1, 2, 3, [[4, 5], 6], 7, 8, 9, 10]
let result = arr2
  .toString()
  .split(',')
  .reduce((total, i) => (total += Number(i)), 0)
console.log(result)

function flatten(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}
flatten(arr2)
console.log(flatten(arr2))

let arr3 = [1, [2, [3, 4, 5]]]
function flattenByReduce(arr) {
  return arr.reduce((pre, curr) => {
    return pre.concat(Array.isArray(curr) ? flattenByReduce(curr) : curr)
  }, [])
}

console.log(10, flattenByReduce(arr3))

console.log([1, [2, [3, 4, 5]]].flat(Infinity))

function flattenBySome(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log(0, flattenBySome([1, [2, [3, 4, 5]]]))

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]
console.log(1, Array.from(new Set(array))) // [1, 2, 3, 5, 9, 8]

function uniqueArray(arr) {
  let obj = {}
  let result = []
  arr.map((item) => {
    if (!(item in obj)) {
      obj[item] = 1
      result.push(item)
    }
  })
  return result
}
console.log(uniqueArray([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]))

function _flat(arr, depth) {
  while (arr.some((item) => Array.isArray(item)) && depth > 0) {
    arr = [].concat(...arr)
    depth--
  }
  return arr
}
console.log(_flat([1, [2, [3, 4, 5]]], 2))

function _push(arr, value) {
  arr[arr.length] = value
  return arr
}

console.log(_push([1, 2, 3], 2))

Array.prototype._filter = function (func) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    // filter
    // func(this[i]) && result.push(this[i])
    // map
    result.push(func(this[i]))
  }
  return result
}

function repeatString(str, n) {
  return new Array(n + 1).join(str)
}
console.log(repeatString('abc', 2))

String.prototype._reverse = function () {
  console.log('this', this)
  return this.split('').reverse().join('')
}
var obj = new String('hello')
var res = obj._reverse()
console.log(res) // olleh

function thousand(num) {
  const remain = num % 1000
  const front = (num - remain) / 1000
  return front + ',' + remain
}
console.log(thousand(12))

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
console.log(add(1)(2)(3))

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
