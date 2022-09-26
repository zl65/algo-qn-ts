// 1

;(function () {
  var x = (y = 1)
})()
var z

console.log(y) // 1
console.log(z) // undefined
console.log(x) // error 因为x是在函数里定义的，而y没有声明则自动提升为全局的

// 2

var a, b
;(function () {
  console.log(a) // undefined
  console.log(b) // undefined
  var a = (b = 3)
  console.log(a) // 3
  console.log(b) // 3
})()
console.log(a) // undefined
console.log(b) // 3

// 3

var friendName = "World"
;(function () {
  if (typeof friendName === "undefined") {
    var friendName = "Jack"
    console.log("Goodbye " + friendName) // goodbye jack 因为 var friendName被提升了
  } else {
    console.log("Hello " + friendName)
  }
})()

// 4
function fn1() {
  console.log("fn1")
}
var fn2

fn1() // fn1
fn2() // fn2 not a function

fn2 = function () {
  console.log("fn2")
}

fn2() // fn2

// 5
function a() {
  var temp = 10
  function b() {
    console.log(temp)
  }
  b()
}
a()
// ----------
function a() {
  var temp = 10
  b()
}
function b() {
  console.log(temp) // 找不到变量的时候，是去定义的时候的外层找，并不是调用的外层
}
a()

// 6
var a = 3
function c() {
  alert(a)
}
;(function () {
  var a = 4
  c() // alert 3
})()

// 7
function fun(n, o) {
  console.log(o)
  return {
    fun: function (m) {
      return fun(m, n)
    },
  }
}
var a = fun(0)
a.fun(1)
a.fun(2)
a.fun(3)
var b = fun(0).fun(1).fun(2).fun(3)
var c = fun(0).fun(1)
c.fun(2)
c.fun(3)

// 8
f = function () {
  return true
}
g = function () {
  return false
}
;(function () {
  if (g() && [] == ![]) {
    f = function f() {
      return false
    }
    function g() {
      return true
    }
  }
})()
console.log(f())
