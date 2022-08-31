// NOTE: arr 是数组，即使是以参数传进来的，传的也是引用的值，不是数组实际的值
// 直接push arr的话push的是引用，后续arr还可以被改变，不会维持push那一刻的值
let nums = [[0]]
function testArr(arr) {
  nums.push(arr)
  console.log(nums)
  arr.pop()
  console.log(nums)
}
testArr([1])
