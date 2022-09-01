Function.prototype._call = function (obj) {
  obj = obj ? Object(obj) : window

  let args = [...arguments].slice(1)

  // 调用的时候是fn._call()，那么call里拿到的this就是fn
  obj.fn = this
  let result = obj.fn(...args)
  delete obj.fn
  return result
}

Function.prototype._apply = function (obj, arr) {
  obj = obj ? Object(obj) : window
  obj.fn = this
  let result = arr ? obj.fn(...arr) : obj.fn()
  delete obj.fn
  return result
}

var name = 'global'
var obj = {
  name: 'obj',
}

function fn(a, b, c) {
  console.log(this.name, a, b, c)
}

fn()
fn._call(obj, 'arg1', 'arg2', 'arg3')
fn._apply(obj, ['arg1', 'arg2', 'arg3'])
