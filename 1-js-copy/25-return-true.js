function returnTrue(x) {
  return x < x && x === x && x > x
}

let i = 0
let count = 0
const x = {
  valueOf: () => {
    let res
    switch (count) {
      case 0:
      case 1:
        res = i++
        break
      case 2:
      case 3:
        res = i--
        break
      default:
        throw new Error('error code path')
    }
    count++
    return res
  },
}
const result = returnTrue(x)

console.log('result: ', result)

/**
 * 原理
 * x < x，js在执行比较的时候，会去取Object.valueOf这个函数的返回值，所以覆盖这个函数，就可以自定义返回值
 * 在count0和1的时候，让i的值递增，注意i++是先返回再递增，即先返回0，这时i变为1，然后再次调用，返回1，i变成2
 *
 * x===y，注意===，不会调用valueOf，这里因为x是一个对象，会直接比较 ***引用***，所以直接相等
 *
 * x > x， 和第一点同理，不过变成i--
 *
 */
