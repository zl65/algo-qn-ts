function increasingTriplet(nums: number[]): boolean {
  let first = nums[0]
  let second = Number.MAX_VALUE

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i]
    if (curr > second) {
      return true
    } else if (curr > first) {
      second = curr
    } else {
      first = curr
    }
  }
  return false
}

// 题目的意思没有要求3个连续的
// 贪心写法其实是每一步都把最小的替换上了，first 和 second 是不断在更新，从前往后的第一小，第二小

// 双指针的解法是把递增三元组转化为，以中间为基准，左边一个比它小的，右边一个比它大的
// 然后维护两个数组，mins和maxs，记录每一个元素左边最小的（从左往右遍历数组能得到），和右边最大的（从右往左遍历数组能得到）
// 然后再遍历一次数组，对每一个元素比较是不是有 mins[i-1] < nums[i] < maxs[i+1]
