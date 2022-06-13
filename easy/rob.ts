function rob(nums: number[]): number {
  const dp = []
  dp.push(nums[0])
  dp.push(Math.max(nums[0], nums[1]))
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return dp[nums.length - 1]
}
