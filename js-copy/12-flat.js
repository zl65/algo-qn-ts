// NOTE: flat1
function flat1(arr) {
  if (!Array.isArray(arr)) {
    return false
  }
  let res = []
  arr.map((item) => {
    if (Array.isArray(item)) {
      res.push(...flat1(item))
    } else {
      res.push(item)
    }
  })
  return res
}
var arr = [1, 2, [3, 4, 5, [6, 7, 8], 9], 10, [11, 12]]
console.log('flat1: ', flat1(arr))

//
// NOTE: flat2
function flat2(arr) {
  if (!Array.isArray(arr)) {
    return false
  }

  let res = arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flat2(cur) : cur)
  }, [])
  return res
}
console.log('flat2: ', flat2(arr))

//
// NOTE: flat3
var test = [1, 2, [3, 4, 5, [6, 7, 8], 9], 10, [11, 12]]
var result = test
  .toString()
  .split(',')
  .map((val) => {
    return parseInt(val)
  })
console.log('flat3: ', result)

//
// NOTE: flat4
console.log('flat4: ', [1, 2, [3, [4]]].flat(2))

function practice(arr) {
  if (Array.isArray(arr)) {
    let result = []
    arr.map((item) => {
      if (Array.isArray(item)) {
        // practice(item)
        result.push(...item)
      } else {
        result.push(item)
      }
    })
  }
  return result
}
console.log('practice: ', practice(arr))
