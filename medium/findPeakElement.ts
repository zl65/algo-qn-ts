function findPeakElement(nums: number[]): number {
  // 要仔细审题，题目要求的是返回一个峰值即可，不是全部
  // 下边的算法时间复杂度是O(N)
  // 为了实现O(logN)的时间复杂度，答案用了类似二分查找的方法
  // 关键点在于，根据题目特性，拿到一个点之后，就可以知道峰值在它左侧还是右侧
  const size = nums.length
  nums[nums.length] = -Infinity
  nums[-1] = -Infinity

  let i = 0
  let res = []
  while (i < size) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      res.push(i)
      i++
    }
    i++
  }
  return res[0]
}
