function lengthOfLIS(nums: number[]): number {
  const dp: number[][] = new Array(nums.length).fill(0).map(() => [])
  dp[0] = [ nums[0] ]

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      let newArr = []
      if (dp[j][dp[j].length - 1] < nums[i]) {
        newArr = dp[j].concat(nums[i])
      } else {
        newArr = [ nums[i] ]
      }
      if (newArr.length > dp[i].length) {
        dp[i] = newArr
      }
    }
  }
  let maxLength = 1
  let maxIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (dp[i].length > maxLength) {
      maxLength = dp[i].length
      maxIndex = i
    }
  }
  console.log(dp[maxIndex])
  return maxLength
}


function lengthOfLIS2(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }

  let max = 1
  for (let i = 0; i < nums.length; i++) {
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max
}
