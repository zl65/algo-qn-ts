function sortColors(nums: number[]): void {
  let zeroIndex = 0
  let twoIndex = nums.length - 1

  let i = 0
  while (i <= twoIndex) {
    if (nums[i] === 0) {
      const tmp = nums[i]
      nums[i] = nums[zeroIndex]
      nums[zeroIndex] = tmp

      zeroIndex++
      i++
    } else if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      const tmp = nums[i]
      nums[i] = nums[twoIndex]
      nums[twoIndex] = tmp

      twoIndex--
    }
  }
}
