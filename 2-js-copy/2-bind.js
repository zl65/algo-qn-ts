Function.prototype._bind = function (obj) {
  var args = [...arguments].slice(1)
  var fn = this
  return function () {
    fn.apply(obj, args)
  }
}

var obj = {
  z: 1,
}
function bound(x) {
  console.log(x, this.z)
}
bound(2)
const fn = bound.bind(obj, 2)
fn()
