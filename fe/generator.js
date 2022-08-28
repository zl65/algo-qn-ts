//foo函数
function* foo() {
  let response1 = yield new Promise((r) => r(1))
  console.log("response1")
  console.log(response1)
  let response2 = yield new Promise((r) => r(2))
  console.log("response2")
  console.log(response2)
}

//执行foo函数的代码
let gen = foo()
function getGenPromise(gen, v) {
  return gen.next(v).value
}
getGenPromise(gen)
  .then((response) => {
    // console.log("response1")
    // console.log(response)
    return getGenPromise(gen, response)
  })
  .then((response) => {
    return getGenPromise(gen, response)
    // console.log("response2")
    // console.log(response)
  })
