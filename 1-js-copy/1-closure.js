function count() {
  var arr = []
  var i
  for (i = 1; i <= 3; i++) {
    arr.push(function () {
      console.log('layer1:', i)

      return function () {
        return i
      }
    })
  }
  setTimeout(() => {
    i = 9
  }, 1000)
  return arr
}

var results = count()
var f1 = results[0]
var f2 = results[1]
var f3 = results[2]
console.log('f1: ', f1()()) // 4
console.log('f2: ', f2()()) // 4

setTimeout(() => {
  console.log('f3: ', f3()()) // 9
}, 2000)

//NOTE: 闭包本质是维持了函数创建时的词法环境的引用，关键是引用
// 上边的例子，在执行的时候用引用去取i的值，取到的都是最新的，并不是函数声明时的
// 下边的改法，无论是参数传递还是增加一个变量，其实都是避免了使用i的引用，变相拿到函数声明时候的i值

function count2() {
  var arr = []
  for (var i = 1; i <= 3; i++) {
    const j = i
    arr.push(function () {
      console.log(j)
    })
  }
  return arr
}

var results = count()
var f12 = results[0]
var f22 = results[1]
var f32 = results[2]

f12() // 1
f22() // 4
f32() // 9
