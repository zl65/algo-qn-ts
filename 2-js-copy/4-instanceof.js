function _instanceof(left, right) {
  while (true) {
    // 循环
    left = left.__proto__
    if (left === null) return false
    if (left === right.prototype) return true
  }
}

class A {}

const a = new A()
console.log(_instanceof2(a, A)) // true
console.log(_instanceof2(a, Object)) // true
console.log(_instanceof2(a, Array)) // false

function _instanceof2(instance, constructor) {
  if (typeof instance !== 'object') return false
  let insProto = Object.getPrototypeOf(instance)
  while (insProto) {
    if (insProto === constructor.prototype) return true
    insProto = Object.getPrototypeOf(insProto)
  }
  return false
}
