function subsets(nums: number[]): number[][] {
  let res: number[][] = []

  function backTrack(nums: number[], selected: number[], i: number) {
    // 更新答案的位置，根据这道题的定义，每次进来都应该更新
    res.push(selected.concat())

    for (let j = i; j < nums.length; j++) {
      // 在遍历前做点事
      selected.push(nums[j])
      // 这里是真正的遍历
      backTrack(nums, selected, j + 1)
      // 在遍历后做点事
      selected.pop()
    }
  }

  backTrack(nums, [], 0)
  return res
}
