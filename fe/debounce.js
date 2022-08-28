function debounce(func, ms) {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, ms)
  }
}

// test case

function log() {
  console.log(new Date().getSeconds())
}

const debounceLog = debounce(log, 1000)

setInterval(() => {
  debounceLog()
}, 100)
