function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []

  function bt(nums: number[], target: number, selected: number[], start: number) {
    const sum = selected.reduce((p, c) => p + c, 0)
    if (sum === target) {
      res.push(selected.concat())
      return
    } else if (sum > target) {
      return
    }
    for (let i = start; i < nums.length; i++) {
      // 这里判断 i 和 i - 1 能保证顺序，最后没有重复
      if (i > start && nums[i] === nums[i - 1]) continue
      selected.push(nums[i])
      // 关键就是这里，用 i 来保证每个元素可以选很多次
      bt(nums, target, selected, i)
      selected.pop()
    }
  }

  candidates.sort((a, b) => a - b)
  bt(candidates, target, [], 0)
  return res
}
