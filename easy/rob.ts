function rob(nums: number[]): number {
  const dp = []
  dp.push(nums[0])
  dp.push(Math.max(nums[0], nums[1]))
  for (let i = 2; i < nums.length; i++) {
    // 这道题难的是状态转移方程
    // dp[i]代表的是第i天的最大金额，但是不代表第i天有偷，也可能没偷
    // 下边这个解法的问题是，dp[i - 1]可能第i-1天没偷，那么也可以dp[i - 1] + nums[i]呀
    // 但实际上，如果第i - 1 天没偷，那dp[i - 1] = dp[i - 2]
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return dp[nums.length - 1]
}

// 如果要传参数的话，边界转换要小心
function robWithIndex(nums: number[], start: number, end: number): number {
  const dp = []
  dp.push(nums[start])
  dp.push(Math.max(nums[start], nums[start + 1]))
  for (let i = 2; i < end - start; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[start + i], dp[i - 1])
  }
  return dp[end - start - 1]
}

function rob2(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  return Math.max(robWithIndex(nums, 0, nums.length - 1), (robWithIndex(nums, 1, nums.length)))
}


function rob3(root: TreeNode | null): number {
  const selected = new Map()
  const unselected = new Map()
  selected.set(null, 0)
  unselected.set(null, 0)

  function traverse(root: TreeNode | null) {
    if (root === null) return
    traverse(root.left)
    traverse(root.right)
    selected.set(root,
      root.val + unselected.get(root.left) + unselected.get(root.right))
    unselected.set(root,
      Math.max(selected.get(root.left), unselected.get(root.left))
      + Math.max(selected.get(root.right), unselected.get(root.right)))
  }

  traverse(root)
  return Math.max(selected.get(root), unselected.get(root))
}

// 1.转化成子问题
// 2.找到推理关系，也就是状态转移方程
// 3.找到方程需要哪些辅助数组/对象
// 4.确定初始值，假设第1个第2个的情况
// 5.写完可以对空间进行优化
// 每个点都有选和不选两种可能，可以单独存到辅助数组里，有时候也会因为题目的约束使得情况可以合并












