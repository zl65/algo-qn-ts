function permute(nums: number[]): number[][] {
  let res: number[][] = []
  let used: boolean[] = new Array(nums.length).fill(false)

  function backtrack(nums: number[], selected: number[], used: boolean[]) {
    if (nums.length === selected.length) {
      res.push(selected.concat())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        selected.push(nums[i])
        used[i] = true
        backtrack(nums, selected, used)
        selected.pop()
        used[i] = false
      }
    }
  }

  backtrack(nums, [], used)
  return res
}
