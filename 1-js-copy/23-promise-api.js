function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`The promise-${ms} is resolved`)
      resolve(ms)
    }, ms)
  })
}

// const promise1 = sleep(600).then(() => {
//   throw new Error('fff')
// })
// const promise2 = sleep(200)
// const promise3 = sleep(500)

// Promise.race([promise1, promise2, promise3]).then((res) => {
//   console.log(`The promise-${res} is the first one.`)
// })

function race(promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((item) => {
      item.then(resolve, reject)
    })
  })
}
// race([promise1, promise2, promise3]).then((res) => {
//   console.log(`The promise-${res} is the first one.`)
// })

function all(promiseArray) {
  let results = []
  let count = 0
  return new Promise((resolve, reject) => {
    promiseArray.forEach((item, index) => {
      item.then((res) => {
        results[index] = res

        count++
        if (count === promiseArray.length) {
          resolve(results)
        }
      }, reject)
    })
  })
}

// all([promise1, promise2, promise3]).then((res) => {
//   console.log('all res: ', res)
// })

function allSettled(promiseArray) {
  let data = []
  let count = 0
  return new Promise((resolve) => {
    promiseArray.forEach((item, index) => {
      item.then(
        (res) => {
          data[index] = {
            status: 'fulfilled',
            value: res,
          }

          count++
          if (count === promiseArray.length) {
            resolve(data)
          }
        },
        (res) => {
          data[index] = {
            status: 'rejected',
            value: res,
          }

          count++
          if (count === promiseArray.length) {
            resolve(data)
          }
        }
      )
    })
  })
}

// allSettled([promise1, promise2, promise3]).then((res) => {
//   console.log('allSettled res: ', res)
// })

function promiseResolve(value) {
  return new Promise((resolve) => {
    resolve(value)
  })
}

// console.log(promiseResolve('test promiseResolve'))

function mergePromise(arr, fn) {
  let results = []
  return new Promise(async (resovle) => {
    for (const promise of arr) {
      const res = await fn(promise)
      results.push(res)
    }
    resovle(results)
  })
}

// const promise4 = sleep(2000)
// const promise5 = sleep(3000)
mergePromise([1000, 1000, 1000], sleep).then((res) => {
  console.log('mergePromise: ', res)
})

function practice(arr, sleep) {
  arr.reduce((prev, curr) => {
    return prev.then(() => {
      return sleep(curr)
    })
  }, Promise.resolve())
}

// practice([1000, 1000, 1000, 1000], sleep)
