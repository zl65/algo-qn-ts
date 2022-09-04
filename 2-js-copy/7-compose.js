const compose = (...fns) =>
  fns.reduce((a, b) => {
    return (...args) => {
      return a(b(...args))
    }
  })

// 测试
function sum(a, b) {
  return a + b
}

function toUpper(str) {
  return str.toUpperCase()
}

function add(str) {
  return '===' + str + '==='
}

// 使用 compose 之前：
console.log(add(toUpper(sum('cherry', '27')))) // ===CHERRY27===
// 使用 compose 之后：
console.log(myCompose(add, toUpper, sum)('cherry', '27')) // ===CHERRY27===

// NOTE:
function myCompose(...funcs) {
  return function (...args) {
    const lastFn = funcs.pop()
    return funcs.reduceRight((prev, curr) => {
      return curr(prev)
    }, lastFn(...args))
  }
}

// NOTE:
function pipe(...funcs) {
  return function (...args) {
    const initialValue = funcs.shift()(...args)
    return funcs.reduce((prev, curr) => {
      return curr(prev)
    }, initialValue)
  }
}

function splitString(str) {
  return str.split(' ')
}

function count(array) {
  return array.length
}

// 使用 pipe 之前：
console.log(count(splitString('hello cherry'))) // 2
// 使用 pipe 之后：
console.log(pipe(splitString, count)('hello cherry')) // 2
