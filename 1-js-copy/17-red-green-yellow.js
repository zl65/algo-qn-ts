function logPromise(type, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(type)
      resolve(type)
    }, ms)
  })
}

async function oneRound() {
  await logPromise('red', 1000)
  await logPromise('green', 1000)
  await logPromise('yellow', 1000)
  oneRound()
}

oneRound()
