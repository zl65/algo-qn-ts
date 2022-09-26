function dicesProbabilityTimeout(n: number): number[] {
  const map = new Map()
  for (let k = 1; k <= 6; k++) {
    map.set(k, 1)
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= 6; j++) {
      map.forEach((value, key) => {
        const newValue = key + j
        const newCount = map.has(newValue) ? map.get(newValue) + 1 : 1
        map.set(newValue, newCount)
      })
    }
  }
  const countArr = Array.from(map.values()).sort((a, b) => a - b)
  const sum = countArr.reduce((prev, curr) => prev + curr, 0)

  const res: number[] = countArr.map((item) => {
    return (item = item / sum)
  })

  return res
}

function dicesProbability(n: number): number[] {
  let dp = new Array(6).fill(1 / 6)
  // i 是骰子的个数
  for (let i = 2; i <= n; i++) {
    const newDp: number[] = new Array(5 * i + 1).fill(0)

    // 对上一次的所有概率进行遍历，每一次遍历里有6种可能
    // 以往的动态规划是 dp[n] = dp[n-1] + dp[n-2] 这种，
    // 这道题里不知道 n-1，n-2 这种怎么取，是遍历0-n，每次构造n的一部分，遍历完得到全部
    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        newDp[j + k] += dp[j] / 6
      }
    }

    dp = newDp
  }
  return dp
}
