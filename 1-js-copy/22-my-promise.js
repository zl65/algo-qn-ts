class MyPromise {
  constructor(func) {
    this._resolve = null
    this._reject = null

    this.thenResolve = null
    this.thenReject = null

    setTimeout(() => {
      func(this._resolve, this._reject)
    }, 0)
  }
  then(onResolveFunc, onRejectFunc) {
    this._resolve = (value) => {
      if (value instanceof MyPromise) {
        value.then(this._resolve, this._reject)
      } else {
        const res = onResolveFunc(value)
        this.thenResolve && this.thenResolve(res)
      }
    }
    this._reject = (error) => {
      const res = onRejectFunc(error)
      this.thenReject && this.thenReject(res)
    }
    return new MyPromise((thenResolve, thenReject) => {
      this.thenResolve = thenResolve
      this.thenReject = thenReject
    })
  }
}

function sleep(ms) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms)
      // reject(ms)
    }, ms)
  })
}

sleep(1000)
  .then((res) => {
    console.log('first then: ', res)
    const promise = sleep(2000).then((res) => {
      console.log('res', res)
    })
    return promise
  })

  .then((res3) => {
    console.log('third then', res3)
  })
