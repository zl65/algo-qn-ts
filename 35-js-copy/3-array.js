Array.prototype._map = function (fn) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i], i, this))
  }
  return newArr
}

Array.prototype._filter = function (fn) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    // if (fn(this[i])) {
    //   newArr.push(this[i])
    // }

    fn(this[i], i, this) && newArr.push(this[i])
  }
  return newArr
}

Array.prototype._some = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) return true
  }
  return false
}

Array.prototype._every = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i], i, this)) return false
  }
  return true
}

Array.prototype._find = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) return this[i]
  }
  return undefined
}

Array.prototype._forEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this)
  }
}

Array.prototype._reduce = function (fn, pre) {
  for (let i = 0; i < this.length; i++) {
    if (!pre && i === 0) {
      pre = this[0]
      i++
    }
    pre = fn(pre, this[i], i, this)
  }
  return pre
}

let test = [1, 2, 3]
console.log(
  test.reduce((pre, curr) => {
    return pre + curr
  })
)

console.log(
  test._reduce((pre, curr) => {
    return pre + curr
  })
)
