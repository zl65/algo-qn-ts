function climbStairs(n: number): number {
  let dp = []
  dp.push(1)
  dp.push(2)
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n - 1]
}
