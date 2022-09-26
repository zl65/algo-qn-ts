function nthUglyNumber(n: number): number {
  // dp[i] 是第i个丑数的值
  const dp = []
  dp[1] = 1

  // pj 的定义是上一个还没有*j的位置，
  // p2 上一个还没有*2的丑数的位置
  let p2 = 1
  let p3 = 1
  let p5 = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5)

    if (dp[i] === dp[p2] * 2) p2++
    if (dp[i] === dp[p3] * 3) p3++
    if (dp[i] === dp[p5] * 5) p5++
  }
  return dp[n]
}
