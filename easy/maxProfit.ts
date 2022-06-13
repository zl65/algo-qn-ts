// function maxProfit(prices: number[]): number {
//   const dp = []
//   dp.push(prices[0])
//   const maxDp = []
//   maxDp.push(0)
//   for (let i = 1; i < prices.length; i++) {
//     dp [i] = Math.min(dp[i - 1], prices[i])
//     maxDp[i] = Math.max(maxDp[i - 1], prices[i] - dp[i])
//   }
//   return maxDp[maxDp.length - 1]
// }

// 本质上，
// 每一天的利润，都是当前这一天的值减去历史最小
// 历史最小是当前和再之前的最小取其一
// 每一天的最大利润，都是之前的最大利润和当天的利润取最大
// 所以其实是一种动态规划，可以用dp数组存历史最小值和历史最大利润
// 然后优化空间，其实用不上两个数组，两个变量就可以了
function maxProfit(prices: number[]): number {
  let min = prices[0]
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    max = Math.max(max, prices[i] - min)
  }
  return max
}
