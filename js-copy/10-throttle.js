function throttle(func, ms) {
  let timer
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      func.apply(this, arguments)
      // NOTE: 执行完把timer的状态清空很重要
      timer = null
    }, ms)
  }
}

function throttle2(func, ms) {
  let last = 0
  return function () {
    const curr_time = +new Date()
    if (curr_time - last > ms) {
      // NOTE: 这个写法里没有setTimeout，所以，this和arguments也是对的
      func.apply(this, arguments)
      last = +new Date()
    }
  }
}

const test = throttle((a, b) => {
  console.log('b', b)
}, 0)

test(1, 2)

function practice(func, ms) {
  let timer
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      func.apply(this, arguments)
      timer = null
    }, ms)
  }
}

function practice2(fn, delay) {
  let timer
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
