function instance_of(left, right) {
  //L 表示左表达式，R 表示右表达式
  left = left.__proto__
  while (true) {
    if (left === null) return false
    if (left === right.prototype)
      // 这里重点：当 O 严格等于 L 时，返回true
      return true
    left = left.__proto__
  }
}

function myInstanceof(left, right) {
  while (true) {
    left = left.__proto__
    if (left === null) {
      return false
    }
    if (left === right.prototype) {
      return true
    }
  }
}

class A {}

const a = new A()
console.log(myInstanceof(a, A)) // true
console.log(myInstanceof(a, Object)) // true
console.log(myInstanceof(a, Array)) // false
