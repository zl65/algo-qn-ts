function sum(a, b, c, d, e) {
  return a + b + c + d + e
}

// function curring(fn) {
//   return function (...args1) {
//     return function (...args2) {
//       return function (...args3) {
//         return fn(...args1, ...args2, ...args3)
//       }
//     }
//   }
// }

const curring = (fn, arr = []) => {
  // fn.length 是fn接受的参数的长度
  console.log('fn', fn, fn.length)
  let len = fn.length
  return function (...args) {
    arr = [...arr, ...args]
    if (arr.length < len) {
      return curring(fn, arr)
    } else {
      return fn(...arr)
    }
  }
}

function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
}

let a = curring(sum)(1, 2)(3, 4)(5)
console.log(a) // 15

// NOTE:
var uncurrying = function (fn) {
  return function () {
    var args = [].slice.call(arguments, 1)
    return fn.apply(arguments[0], args)
  }
}

var uncurrying1 = function (fn) {
  return function (...args) {
    const [obj, ...rest] = args
    return fn.apply(obj, rest)
  }
}

var test = 'a,b,c'
console.log(test.split(','))

var split = uncurrying1(String.prototype.split) //[ 'a', 'b', 'c' ]
console.log(split(test, ','))
