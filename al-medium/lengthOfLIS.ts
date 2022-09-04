function lengthOfLIS3(nums: number[]): number {
  const dp = new Array(nums.length).fill(1)
  let max = 1

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 关键在于 dp[i]是由过去的所有小于i的值推出来的
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }

  for (let k = 0; k < dp.length; k++) {
    max = Math.max(dp[k], max)
  }
  return max
}
