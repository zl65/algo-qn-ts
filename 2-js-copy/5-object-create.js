function _create(proto) {
  function Fn() {}
  Fn.prototype = proto
  // Fn.prototype.constructor = Fn
  return new Fn()
}
let demo = {
  c: '123',
}
let cc = _create(demo)
console.log(cc)

// let cc = Object.create(demo)
// console.log(cc)
