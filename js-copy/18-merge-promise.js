const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })

const ajax1 = () =>
  timeout(2000).then(() => {
    console.log('1')
    return 1
  })

const ajax2 = () =>
  timeout(1000).then(() => {
    console.log('2')
    return 2
  })

const ajax3 = () =>
  timeout(2000).then(() => {
    console.log('3')
    return 3
  })

const mergePromise = (ajaxArray) => {
  // 在这里实现你的代码
  let result = []
  let sequence = Promise.resolve()
  ajaxArray.forEach((element) => {
    // NOTE: then方法应该接受一个函数作为参数，而不是一个对象，即使是promise对象也不行
    // 如果是一个对象(比如某个函数的返回值)，比如func(),那func这个函数就会像同步函数一样执行
    // 如果then(func)就是对的，因为参数是一个函数
    sequence = sequence.then(element).then((res) => {
      result.push(res)
      return result
    })
  })
  return sequence
}

mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log('done')
  console.log(data)
})
