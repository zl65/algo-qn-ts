function debounce(func, ms) {
  let timer
  return function () {
    clearTimeout(timer)
    // NOTE: 这里输出的arguments，是执行的时候用户传进来的
    // 这里的arguments和this我们都希望是func执行时候的那个，所以后续用apply
    console.log(this, arguments)
    // NOTE: 这里用箭头函数，是为了维持this和arguments依然是上面输出的那个
    // 如果用了function，那就会创建函数执行上下文，arguments和this的指向应该就都有变化了
    // 但是这里用setTimeout包了一层，这里可能还涉及setTimeout的api
    // 不过我猜测，setTimeout应该是做了处理，会把函数和this原封不动的传递
    // 就是定义时候的那个，这样想的话，用箭头函数就是通的
    // 只是在用function的时候按理说，应该也是arguments应该是新函数的，这没问题
    // 但this应该是默认指向全局的window，但它似乎指向了一个Timeout对象
    // 在浏览器里的确是指向window的，但是在node环境里指向了Timeout
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, ms)
  }
}

const debouncedFunc = debounce((a, b) => {
  console.log('b', b)
}, 0)

debouncedFunc(1, 2)

// NOTE: 这是常规的函数，要调用一下才能执行
const testFunc = function () {
  console.log('function')
}

// NOTE: 下边这个直接输出了
// 为什么不用调用testTimer就可以执行呢
const testTimer = setTimeout(function () {
  console.log('setTimeout')
}, 0)

// NOTE: 因为setTimeout()是一个立即执行的函数,就好比下边这个例子
// 新的问题是立即执行为什么还要赋值呢，答案是为了记录返回值
// 在debounce的例子里就是为了记录timer，setTimeout会返回一个id的
const testFunc2 = (function () {
  console.log('function')
  return 'return value'
})()
console.log(testFunc2)

function practice(func, ms) {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, ms)
  }
}
