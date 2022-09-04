function maxSubArray(nums: number[]): number {
  // dp的定义是以dp为结尾的子串的最大和
  const dp = []
  dp.push(nums[0])
  for (let i = 1; i < nums.length; i++) {
    // 这里要想好条件，dp[i] 的两个可能取值是什么
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  }

  let max = dp[0]
  for (let j = 1; j < dp.length; j++) {
    max = Math.max(max, dp[j])
  }
  return max
}
