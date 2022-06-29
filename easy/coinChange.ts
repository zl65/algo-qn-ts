function coinChange(coins: number[], amount: number): number {
  const dp: number[] = []
  for (let i = 0; i < amount + 1; i++) {
    dp[i] = amount + 1
  }

  // 初始化的值挺重要
  dp[0] = 0

  for (let j = 0; j < amount + 1; j++) {
    for (let k = 0; k < coins.length; k++) {
      const remain = j - coins[k]
      if (remain >= 0) {
        // 关键就是状态转移方程 凑够j的数量就是 j-coin这个数量再+1个硬币，只不过coin有很多情况，要不断取最小
        dp[j] = Math.min(dp[remain] + 1, dp[j])
      }
    }
  }

  // 返回值不要一开始就写上，写的时候要谨慎
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}
