function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const res = []

  let i = 0
  while (i < nums.length) {
    const currVal = nums[i]
    const target = -nums[i]

    // 这里的要从i+1开始循环
    const twoSumRes = twoSumWithSortedArr(nums, target, i + 1)

    for (let j = 0; j < twoSumRes.length; j++) {
      twoSumRes[j].push(nums[i])
      res.push(twoSumRes[j])
    }

    // 注意这个while比较的值，要保证第一次一定能进去，所以不能用相邻两个的比较
    while (nums[i] === currVal) i++
  }
  return res
}

function twoSumWithSortedArr(nums: number[], target: number, start: number) {
  let left = start
  let right = nums.length - 1
  const res = []

  // 左右指针，数组常见操作
  while (left < right) {
    const leftVal = nums[left]
    const rightVal = nums[right]
    const sum = nums[left] + nums[right]
    if (sum < target) {
      while (nums[left] === leftVal) left++
    } else if (sum > target) {
      while (nums[right] === rightVal) right--
    } else {
      res.push([nums[left], nums[right]])

      while (nums[left] === leftVal) left++
      while (nums[right] === rightVal) right--
    }
  }
  return res
}
