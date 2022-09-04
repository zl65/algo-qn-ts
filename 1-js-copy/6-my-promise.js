function MyPromise(func) {
  this.callbacks = []
  const resolve = (value) => {
    setTimeout(() => {
      this.data = value
      this.callbacks.forEach((item) => item(value))
    })
  }
  func(resolve)
}

MyPromise.prototype.then = function (onResolved) {
  return new Promise((resolve) => {
    this.callbacks.push(() => {
      const res = onResolved(this.data)
      if (res instanceof MyPromise) {
        res.then(resolve)
      } else {
        resolve(res)
      }
    })
  })
}
