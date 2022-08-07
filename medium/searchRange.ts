function searchRange(nums: number[], target: number): number[] {
  // 二分搜索 左右都用闭区间更好理解，边界条件更好写
  return [
    searchLeft(nums, target, 0, nums.length - 1),
    searchRight(nums, target, 0, nums.length - 1),
  ]

  function searchLeft(
    nums: number[],
    target: number,
    left: number,
    right: number
  ): number {
    // 数组操作，用while比递归更好，只需要改变left和right的值
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      }
    }
    // 注意这个边界，只有left可能越界
    if (left >= nums.length || nums[left] !== target) return -1
    return left
  }
  function searchRight(
    nums: number[],
    target: number,
    left: number,
    right: number
  ): number {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) {
        left = mid + 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      }
    }
    // 注意这个边界，只有right可能越界
    if (right < 0 || nums[right] !== target) return -1
    return right
  }
}
