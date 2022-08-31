function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`The promise-${ms} is resolved`)
      resolve(ms)
    }, ms)
  })
}

const tasks = [1000, 300, 300, 1000]

function advancedAll(tasks, func, limit) {
  let run = []
  let data = []
  const length = tasks.length
  return new Promise((resolve) => {
    function schedule() {
      if (run.length < limit && tasks.length > 0) {
        let promise = func(tasks.shift())
        promise.then((res) => {
          data.push(res)
          run.splice(run.indexOf(promise), 1)
          if (data.length === length) {
            resolve(data)
          }
        })
        run.push(promise)
        schedule()
      } else {
        if (run.length > 0) {
          Promise.race(run).then(() => {
            schedule()
          })
        }
      }
    }
    schedule()
  })
}

advancedAll(tasks, sleep, 2).then((res) => {
  console.log('res: ', res)
})
