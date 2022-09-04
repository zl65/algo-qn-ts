function maxProfit2(prices: number[]): number {
  const hold = [ -prices[0] ]
  const unHold = [ 0 ]

  for (let i = 1; i < prices.length; i++) {
    hold[i] = Math.max(hold[i - 1], unHold[i - 1] - prices[i])
    unHold[i] = Math.max(unHold[i - 1], hold[i - 1] + prices[i])
  }

  return Math.max(hold[prices.length - 1], unHold[prices.length - 1])
}
