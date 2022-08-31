let promiseObj = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('这里是2s后的结果，模拟的是异步行为的返回')
  }, 2000)
})

promiseObj.then((res) => {
  console.log('then:', res)
})

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

async function main() {
  await sleep(2000)
  render1()

  console.log('2s later...')
}

main()
