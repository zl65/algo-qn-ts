function mySetTimeInterval(fn, ms) {
  setTimeout(() => {
    fn()
    mySetTimeInterval(fn, ms)
  }, ms)
}

mySetTimeInterval(() => {
  console.log(1)
}, 200)
