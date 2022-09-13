// 1
function foo() {
  console.log(this.a)
}

function doFoo() {
  foo()
  // console.log(this.a)
}

var obj = {
  a: 1,
  // 这里只是写法不一样，写成function () {}或者是doFoo都是一个意思
  doFoo: doFoo,
}

var a = 2
obj.doFoo()

// 2

var a = 10
var obj = {
  a: 20,
  // 箭头函数怎么绑定都没有用，this就是全局的
  say: () => {
    console.log(this.a)
  },
}

obj.say()

var anotherObj = { a: 30 }
obj.say.apply(anotherObj)

// 3
function a() {
  console.log(this)
}
a.call(null)
// 默认情况，传入null和undefined，this就是window
// 严格模式下，传入null就是null，undefined就是undefined

//4

var obj = {
  name: "cuggz",
  fun: function () {
    console.log(this.name)
  },
}
obj.fun() // cuggz
new obj.fun() //undefined 用构造函数的方法调用，那this指向的是新对象，新对象没有name

//6

var obj = {
  say: function () {
    var f1 = () => {
      console.log("1111", this)
    }
    f1()
  },
  pro: {
    getPro: () => {
      console.log(this)
    },
    test: function () {
      console.log(this)
    },
  },
}
var o = obj.say
o() // window 没有用对象调用，就是普通函数，this默认是window
obj.say() // obj 用对象调用了

// 下边这两行容易出错，但细想也没什么，obj.pro是一个新的对象，this就是指向它
obj.pro.getPro() // window
obj.pro.test() // pro

7

var myObject = {
  foo: "bar",
  func: function () {
    var self = this
    console.log(this.foo) //bar
    console.log(self.foo) //bar

    // 立即执行函数，默认this就是window，因为它不是在对象上调用的
    ;(function () {
      console.log(this.foo) // undefined

      // 这个self就是它定义的地方的self，词法作用域
      console.log(self.foo) // bar
    })()
  },
}
myObject.func()

8

window.number = 2
var obj = {
  number: 3,
  // 这是个立即执行的函数
  // 执行到这里的时候 这个函数就执行完了
  // db1就是return的那个function
  db1: (function () {
    console.log(this) // window
    this.number *= 4 // window.number = 8
    return function () {
      console.log(this)
      this.number *= 5
    }
  })(),
}

var db1 = obj.db1
db1() // window， window.number = 40

obj.db1() // obj, obj.number = 15
console.log(obj.number) // 15
console.log(window.number) // 40

// 9
var length = 10
function fn() {
  console.log(this.length)
}

var obj = {
  length: 5,
  method: function (fn) {
    fn()

    console.log(arguments) // fn 和 1
    // 下边这个就相当于调用了arguments.fn()
    // arguments 当作是一个对象，this.length，就是 2
    arguments[0]()
  },
}

obj.method(fn, 1)

// 10

var a = 1
function printA() {
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: printA,
  bar: function () {
    printA()
  },
}

obj.foo() // 2 不管是直接写在这的函数function，还是一个变量printA，都是一个意思，在这里都是在obj上调用
obj.bar() // 1 相当于直接执行printA
var foo = obj.foo
foo() // 1 转换了一次也是相当于直接执行printA

// 11
var x = 3
var y = 4
var obj = {
  x: 1,
  y: 6,
  getX: function () {
    var x = 5
    // 这是一个立即执行函数，声明的时候就执行了，立即执行的this指向window
    return (function () {
      return this.x
    })()
  },
  getY: function () {
    var y = 7
    return this.y
  },
}
console.log(obj.getX()) // 3
console.log(obj.getY()) // 6

//  12
var a = 10
var obt = {
  a: 20,
  fn: function () {
    var a = 30 // 并不会覆盖 a = 10，因为这是在函数里声明的
    console.log(this.a)
  },
}
obt.fn() // 20
obt.fn.call() // 10
obt.fn() // (obt.fn)() 20 括号只改变函数的执行顺序，在这里没什么用

// 13

function a(xx) {
  this.x = xx
  return this
}

// 这个题目很烦，正常 a里的this指向window，执行的时候就是window.x = 5,再return window
// 所以x = window，输出x.x就应该是window.x = 5
// 但是这样不对，因为是  var x ，这个x是全局的，就是window下的，所以一赋值，window.x = window, 5 被覆盖了
// 这时候再输出x.x 就是undefined
// y没有这个重名的问题，所以就输出 6
var x = a(5)
var y = a(6)

console.log(x.x) // undefined
console.log(y.x) // 6

// 14
function foo(something) {
  this.a = something
}

var obj1 = {
  foo: foo,
}

var obj2 = {}

obj1.foo(2) // 对象上的方法，this指向 obj1
console.log(obj1.a) // 2

obj1.foo.call(obj2, 3) // 用call改变了指向，this 指向obj2
console.log(obj2.a) // 3

var bar = new obj1.foo(4) // 用构造函数调用，this指向new出来的对象，所以obj1.a没变，bar.a是4
console.log(obj1.a) //2
console.log(bar.a) // 4

// 15
function foo(something) {
  this.a = something
}

var obj1 = {}

var bar = foo.bind(obj1)
bar(2)
console.log(obj1.a) // 2

var baz = new bar(3)
console.log(obj1.a) // 2
console.log(baz.a) //3
