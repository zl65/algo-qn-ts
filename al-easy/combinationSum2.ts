function combinationSum2(candidates: number[], target: number): number[][] {
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
      if (i > start && nums[i] === nums[i - 1]) continue
      selected.push(nums[i])
      bt(nums, target, selected, i + 1)
      selected.pop()
    }
  }

  candidates.sort((a, b) => a - b)
  bt(candidates, target, [], 0)
  return res
}
