function permuteUnique(nums: number[]): number[][] {
  let res: number[][] = []
  const used: boolean [] = []

  function backtrack(nums: number[], selected: number[]) {

    if (nums.length === selected.length) {
      res.push(selected.concat())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 难点都在这里，如何剪枝，思路是要保持重复元素的相对顺序
      // 逻辑是排序，然后如果遇到相同的元素，并且前一个还没出现过，这个循环就要跳过
      if (used[i]) continue
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue

      selected.push(nums[i])
      used[i] = true
      backtrack(nums, selected)
      selected.pop()
      used[i] = false
    }
  }

  nums.sort((a, b) => a - b)
  backtrack(nums, [])
  return res
}


