function cuttingRope(n: number): number {
  const dp = []
  dp[1] = 1
  dp[2] = 1

  // dp[i] 表示的是 长度为i的绳子被分成至少2段时的最大乘积
  // 那dp[i]就是把i分成各种2份的j和i-j，然后对每一个2份分割
  // j*(i-j)是就分2份的乘积，j*dp[i-j]是(i-j)又被分了至少2段，一共至少3份，取这两个的最大值
  // 对这些2份分割取最大，就是dp[i]
  for (let i = 3; i <= n; i++) {
    dp[i] = 1
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * dp[i - j], j * (i - j))
    }
  }
  return dp[n]
}
