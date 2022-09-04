const logPromise = (color, timer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(color)
      resolve()
    }, timer)
  })
}

const oneRound = () => {
  logPromise('green', 1000)
    .then(() => logPromise('red', 1000))
    .then(() => logPromise('yellow', 1000))
    .then(oneRound)
}

// oneRound()

const newStep = async () => {
  await logPromise('green', 1000)
  await logPromise('red', 1000)
  await logPromise('yellow', 1000)
  newStep()
}

// newStep()

function logNum() {
  for (let i = 1; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  }
}
logNum()

const asyncImg = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = url
    img.onload = () => {
      resolve()
    }
    img.onerror = () => {
      reject()
    }
  })
}
asyncImg('xxx')
  .then(() => {
    console.log('got img')
  })
  .catch(() => {})

subFunction.prototype = superInstance
