function uniquePaths(m: number, n: number): number {
  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 初始值要写仔细点
      if (i === 0 || j === 0) {
        if (i === 0) dp[0][j] = 1
        if (j === 0) dp[i][0] = 1
      } else {
        // 状态转移方程不难想
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1]
}
